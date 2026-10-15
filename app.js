(function () {
  "use strict";

  var P = window.PARCOURS, R = window.REGLES, CATS = window.CATEGORIES, THEMES = window.THEMES;
  var CDEF = window.COMPETENCES_DEF, ETAPES = window.ETAPES || {};
  var C = window.CONFIG || {};
  var ILL = window.ILLUS;
  var tabbar = document.getElementById("tabbar");
  var app = document.getElementById("app");
  var nav = document.getElementById("nav");
  var CLE = "parcours-fle-v2";

  var sb = null, utilisateur = null, modeLocal = true, pret = false, modeRecup = false;
  var dernierUid; // pour ignorer les événements d'authentification en double
  var profil = { prenom: "" };
  var etat = vide();
  var filtreTheme = "tous", filtreCat = "toutes", recherche = "";
  var minuteurEnvoi = null, sale = false, dernierStatut = { t: "", err: false };

  /* =================================================================
     État et stockage
     ================================================================= */

  function vide() { return { activites: {}, textes: {}, unites: {}, reglesLues: {}, jours: {}, reglages: {} }; }
  function normaliser(e) {
    e = e && typeof e === "object" ? e : {};
    ["activites", "textes", "unites", "reglesLues", "jours", "reglages"].forEach(function (k) {
      if (!e[k] || typeof e[k] !== "object") e[k] = {};
    });
    if (migrerIds(e)) aMigrer = true;
    return e;
  }

  /*
    Migration des identifiants d'exercices.
    Les exercices d'origine gardent leurs ids (a0, a1…) : rien à migrer pour eux.
    Si un jour un id change, l'unité déclare  anciensIds: { "ancien": "nouveau" }  et la
    progression est renommée ici, une seule fois. Aucune clé inconnue n'est jamais supprimée.
  */
  var aMigrer = false;
  function migrerIds(e) {
    var change = false;
    P.unites.forEach(function (u) {
      var m = u.anciensIds;
      if (!m) return;
      Object.keys(m).forEach(function (ancien) {
        var a = "u" + u.id + "-" + ancien, n = "u" + u.id + "-" + m[ancien];
        if (a === n) return;
        if (e.activites[a] && !e.activites[n]) { e.activites[n] = e.activites[a]; delete e.activites[a]; change = true; }
        if (e.textes[a] != null && e.textes[n] == null) { e.textes[n] = e.textes[a]; delete e.textes[a]; change = true; }
        Object.keys(e.jours).forEach(function (d) {
          var l = e.jours[d];
          if (!Array.isArray(l)) return;
          var k = l.indexOf(a);
          if (k !== -1) { if (l.indexOf(n) === -1) l[k] = n; else l.splice(k, 1); change = true; }
        });
      });
    });
    return change;
  }
  function finirMigration() {
    if (!aMigrer) return;
    aMigrer = false;
    sauver();
  }

  function cleCache(uid) { return CLE + ":" + (uid || "local"); }
  function lireCache(uid) {
    try { return JSON.parse(localStorage.getItem(cleCache(uid))); } catch (e) { return null; }
  }
  function ecrireCache() {
    try {
      localStorage.setItem(cleCache(utilisateur && utilisateur.id), JSON.stringify({ prenom: profil.prenom, etat: etat }));
    } catch (e) { /* stockage indisponible */ }
  }

  // Reprend la progression de la première version du site (sans compte).
  // L'ancienne unité 1 (université) est devenue l'unité 2.
  function migrerV1() {
    try {
      var v1 = JSON.parse(localStorage.getItem("parcours-fle-v1"));
      if (!v1) return null;
      var e = vide();
      Object.keys(v1.activites || {}).forEach(function (k) { e.activites[k.replace(/^u1-/, "u2-")] = v1.activites[k]; });
      Object.keys(v1.textes || {}).forEach(function (k) { e.textes[k.replace(/^u1-/, "u2-")] = v1.textes[k]; });
      return { prenom: "", etat: e };
    } catch (e) { return null; }
  }

  function sauver() {
    ecrireCache();
    if (modeLocal || !utilisateur) return;
    sale = true;
    statut("Enregistrement…");
    clearTimeout(minuteurEnvoi);
    minuteurEnvoi = setTimeout(envoyer, 800);
  }

  function envoyer() {
    clearTimeout(minuteurEnvoi);
    if (!utilisateur) return Promise.resolve();
    return sb.from("progression").upsert({
      user_id: utilisateur.id,
      prenom: profil.prenom,
      donnees: etat,
      maj: new Date().toISOString()
    }).then(function (res) {
      if (res.error) {
        statut("Non synchronisé, nouvel essai bientôt", true);
        minuteurEnvoi = setTimeout(envoyer, 8000);
        return;
      }
      sale = false;
      statut("Synchronisé");
    });
  }

  function chargerDistant() {
    return sb.from("progression").select("prenom, donnees").eq("user_id", utilisateur.id).maybeSingle()
      .then(function (res) {
        var meta = (utilisateur.user_metadata && utilisateur.user_metadata.prenom) || "";
        if (res.error) {
          var c = lireCache(utilisateur.id);
          etat = normaliser(c && c.etat);
          profil.prenom = (c && c.prenom) || meta;
          statut("Hors connexion : progression locale", true);
          return;
        }
        if (res.data) {
          etat = normaliser(res.data.donnees);
          profil.prenom = res.data.prenom || meta;
          ecrireCache();
          statut("Synchronisé");
          return;
        }
        // Premier passage sur ce compte : on récupère une éventuelle progression faite sans compte.
        var anc = lireCache(null) || migrerV1();
        etat = normaliser(anc && anc.etat);
        profil.prenom = meta || (anc && anc.prenom) || "";
        ecrireCache();
        return envoyer();
      });
  }

  function statut(t, err) {
    dernierStatut = { t: t, err: !!err };
    var s = document.getElementById("statut");
    if (s) { s.textContent = t; s.classList.toggle("erreur", !!err); }
  }

  /* =================================================================
     Démarrage et authentification
     ================================================================= */

  function demarrer() {
    var configure = C.supabaseUrl && C.supabaseAnonKey && window.supabase && window.supabase.createClient;
    if (!configure) {
      modeLocal = true;
      var c = lireCache(null) || migrerV1();
      etat = normaliser(c && c.etat);
      profil.prenom = (c && c.prenom) || "";
      pret = true;
      finirMigration();
      route();
      return;
    }
    modeLocal = false;
    sb = window.supabase.createClient(C.supabaseUrl, C.supabaseAnonKey);
    sb.auth.onAuthStateChange(function (evt, session) {
      // Différé : la bibliothèque déconseille d'appeler Supabase directement dans ce rappel.
      setTimeout(function () { surAuth(evt, session); }, 0);
    });
    sb.auth.getSession().then(function (res) { surAuth("INITIAL", res.data && res.data.session); });
  }

  function surAuth(evt, session) {
    if (evt === "PASSWORD_RECOVERY") { modeRecup = true; pret = true; route(); return; }
    var u = session ? session.user : null;
    var uid = u ? u.id : null;
    if (uid === dernierUid) return;
    dernierUid = uid;
    utilisateur = u;
    nettoyerUrl();
    if (!u) {
      etat = vide(); profil = { prenom: "" };
      pret = true; route();
      return;
    }
    rendreNav();
    app.innerHTML = '<p class="chargement">Chargement de ta progression…</p>';
    chargerDistant().then(function () { pret = true; finirMigration(); route(); });
  }

  function nettoyerUrl() {
    if (/access_token|error_description|type=/.test(location.hash) && !modeRecup) {
      history.replaceState(null, "", location.pathname + location.search + "#/");
    }
  }

  function urlSite() { return location.origin + location.pathname; }

  function traduire(err) {
    var m = (err && err.message) || "";
    if (/invalid login credentials/i.test(m)) return "Adresse ou mot de passe incorrect.";
    if (/already registered|already exists/i.test(m)) return "Un compte existe déjà avec cette adresse : connecte-toi.";
    if (/at least|password should/i.test(m)) return "Le mot de passe doit contenir au moins 6 caractères.";
    if (/not confirmed/i.test(m)) return "Adresse pas encore confirmée : ouvre le lien reçu par courriel.";
    if (/valid email|invalid format|validate email/i.test(m)) return "Cette adresse courriel n’est pas valide.";
    if (/rate limit|too many/i.test(m)) return "Trop de tentatives. Patiente quelques minutes avant de réessayer.";
    if (/fetch|network/i.test(m)) return "Connexion impossible. Vérifie ta connexion internet.";
    return "Erreur : " + m;
  }

  /* =================================================================
     Navigation
     ================================================================= */

  var ICO = {
    parcours: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/></svg>',
    progression: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    regles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>',
    profil: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>'
  };

  function rendreNav() {
    if (!modeLocal && !utilisateur) {
      nav.innerHTML = ""; if (tabbar) tabbar.innerHTML = "";
      document.body.classList.remove("connecte");
      return;
    }
    document.body.classList.add("connecte");
    var h = location.hash.replace(/^#\/?/, "");
    var section = ["regles", "profil", "progression"].find(function (x) { return h.indexOf(x) === 0; }) || "parcours";
    var liens = [
      ["#/", "Parcours", "parcours"], ["#/progression", "Progrès", "progression"],
      ["#/regles", "Règles", "regles"], ["#/profil", profil.prenom || "Profil", "profil"]
    ];
    function lien(l, tab) {
      return '<a href="' + l[0] + '"' + (section === l[2] ? ' aria-current="page"' : "") + ">" + ICO[l[2]] + "<span>" + esc(l[1]) + "</span></a>";
    }
    var s = serie();
    nav.innerHTML = liens.map(function (l) { return lien(l); }).join("") +
      '<a class="nav-serie' + (faitesAujourdhui() ? " allumee" : "") + '" href="#/progression" aria-label="Série : ' + pluriel(s, "jour") + '">' + FLAMME + "<strong>" + s + "</strong></a>" +
      '<span id="statut" class="statut' + (dernierStatut.err ? " erreur" : "") + '" aria-live="polite">' + (modeLocal ? "" : esc(dernierStatut.t)) + "</span>";
    if (tabbar) tabbar.innerHTML = liens.map(function (l) { return lien(l, true); }).join("");
    majBadge();
  }

  function route() {
    arreterVoix();
    document.querySelectorAll(".modale-fond").forEach(function (m) { m.remove(); });
    if (!pret) return;
    if (modeRecup) return afficherNouveauMdp();
    rendreNav();
    if (!modeLocal && !utilisateur) return afficherConnexion();
    document.body.dataset.page = location.hash.replace(/^#\/?/, "").split("/")[0] || "accueil";

    var h = location.hash.replace(/^#\/?/, "").split("/");
    if (h[0] === "unite") {
      var u = P.unites.find(function (x) { return String(x.id) === h[1]; });
      if (u && u.activites) {
        var i = /^\d+$/.test(h[2] || "") ? parseInt(h[2], 10) : indexParId(u, h[2]);
        if (isNaN(i) || i < 0 || i >= u.activites.length) i = premiereNonFaite(u);
        return afficherUnite(u, i);
      }
    }
    if (h[0] === "regles") {
      var r = h[1] && R.find(function (x) { return x.id === h[1]; });
      return r ? afficherRegle(r) : afficherRegles();
    }
    if (h[0] === "profil") return afficherProfil();
    if (h[0] === "progression") return afficherProgression();
    afficherAccueil();
  }
  window.addEventListener("hashchange", route);

  /* =================================================================
     Outils
     ================================================================= */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function melanger(t) {
    var a = t.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }
  function sansAccents(s) { return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
  function compterMots(t) { var m = t.trim().match(/[\p{L}\p{N}’'-]+/gu); return m ? m.length : 0; }
  function pluriel(n, mot) { return n + " " + mot + (n > 1 ? "s" : ""); }
  function arreterVoix() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (arretOral) { arretOral(); arretOral = null; }
  }
  function regleParId(id) { return R.find(function (r) { return r.id === id; }); }

  // Clé de progression d'un exercice : « u1-a0 » pour les exercices d'origine, « u1-lec2 » pour les nouveaux.
  function cle(u, i) { var a = u.activites[i]; return "u" + u.id + "-" + (a && a.id ? a.id : "a" + i); }
  function indexParId(u, id) {
    for (var k = 0; k < u.activites.length; k++) if (u.activites[k].id === id) return k;
    return -1;
  }
  function estFait(u, i) { var a = etat.activites[cle(u, i)]; return !!(a && a.fait); }
  function nbFaites(u) { return u.activites ? u.activites.filter(function (_, i) { return estFait(u, i); }).length : 0; }
  function terminee(u) { return !!u.activites && nbFaites(u) === u.activites.length; }
  function passee(u) { return etat.unites[u.id] === "passee" && !terminee(u); }
  function premiereNonFaite(u) {
    for (var i = 0; i < u.activites.length; i++) if (!estFait(u, i)) return i;
    return 0;
  }
  function uniteSuivante(apres) {
    return P.unites.find(function (u) { return u.id > apres && u.activites && !terminee(u) && !passee(u); }) ||
           P.unites.find(function (u) { return u.activites && !terminee(u) && !passee(u) && u.id !== apres; });
  }
  function basculerPassee(id) {
    if (etat.unites[id] === "passee") delete etat.unites[id];
    else etat.unites[id] = "passee";
    sauver();
  }

  /* =================================================================
     Connexion
     ================================================================= */

  function afficherConnexion() {
    document.title = "Connexion : mon parcours de français";
    var mode = "connexion";
    app.innerHTML =
      '<section class="auth">' +
        '<div class="auth-intro">' + ILL.bao("content", "auth-bao") +
          '<p class="auth-sur">Du B1 au C1, avec Summer</p><h1 class="display">Ton français, un peu chaque jour</h1>' +
          '<ul class="auth-mots" aria-hidden="true"><li>savourer</li><li>pourtant</li><li>flâner</li><li>dont</li></ul></div>' +
        '<div class="auth-corps">' +
          '<p class="auth-lead">Connecte-toi pour retrouver ta progression sur tous tes appareils.</p>' +
          '<div class="onglets" role="group" aria-label="Choisir une action">' +
            '<button type="button" data-mode="connexion" aria-pressed="true">Se connecter</button>' +
            '<button type="button" data-mode="inscription" aria-pressed="false">Créer un compte</button>' +
          "</div>" +
          '<form id="form-auth" novalidate>' +
            '<div class="champ" id="champ-prenom" hidden><label for="prenom">Prénom</label><input id="prenom" autocomplete="given-name"></div>' +
            '<div class="champ"><label for="email">Adresse courriel</label><input id="email" type="email" autocomplete="email" required></div>' +
            '<div class="champ"><label for="mdp">Mot de passe</label><input id="mdp" type="password" autocomplete="current-password" required minlength="6"></div>' +
            '<button class="btn btn-principal" type="submit" id="valider">Se connecter</button>' +
            '<p class="auth-msg" id="auth-msg" aria-live="polite"></p>' +
            '<button class="btn-lien" type="button" id="oubli">Mot de passe oublié ?</button>' +
          "</form>" +
        "</div>" +
      "</section>";

    var msg = document.getElementById("auth-msg");
    function message(t, ok) { msg.textContent = t; msg.classList.toggle("ok", !!ok); }

    app.querySelectorAll("[data-mode]").forEach(function (b) {
      b.addEventListener("click", function () {
        mode = b.dataset.mode;
        app.querySelectorAll("[data-mode]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        document.getElementById("champ-prenom").hidden = mode !== "inscription";
        document.getElementById("valider").textContent = mode === "inscription" ? "Créer mon compte" : "Se connecter";
        document.getElementById("mdp").autocomplete = mode === "inscription" ? "new-password" : "current-password";
        document.getElementById("oubli").hidden = mode === "inscription";
        message("");
      });
    });

    document.getElementById("form-auth").addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email").value.trim();
      var mdp = document.getElementById("mdp").value;
      var prenom = document.getElementById("prenom").value.trim();
      if (!email || !mdp) { message("Renseigne ton adresse et ton mot de passe."); return; }
      var bouton = document.getElementById("valider");
      bouton.disabled = true;
      message(mode === "inscription" ? "Création du compte…" : "Connexion…", true);

      var p = mode === "inscription"
        ? sb.auth.signUp({ email: email, password: mdp, options: { data: { prenom: prenom }, emailRedirectTo: urlSite() } })
        : sb.auth.signInWithPassword({ email: email, password: mdp });

      p.then(function (res) {
        bouton.disabled = false;
        if (res.error) { message(traduire(res.error)); return; }
        if (mode === "inscription" && !res.data.session) {
          message("Compte créé. Ouvre le lien reçu par courriel pour confirmer ton adresse, puis connecte-toi.", true);
        }
        // Sinon, la connexion est prise en charge par onAuthStateChange.
      }, function (err) { bouton.disabled = false; message(traduire(err)); });
    });

    document.getElementById("oubli").addEventListener("click", function () {
      var email = document.getElementById("email").value.trim();
      if (!email) { message("Saisis d’abord ton adresse courriel, puis clique à nouveau."); return; }
      sb.auth.resetPasswordForEmail(email, { redirectTo: urlSite() }).then(function (res) {
        if (res.error) message(traduire(res.error));
        else message("Si un compte existe pour cette adresse, un lien de réinitialisation vient d’être envoyé.", true);
      });
    });
  }

  function afficherNouveauMdp() {
    nav.innerHTML = "";
    app.innerHTML =
      '<section class="auth"><div class="auth-intro"><p class="label">Compte</p><h1 class="display">Nouveau mot de passe</h1></div><div class="auth-corps">' +
        '<form id="form-mdp" novalidate>' +
          '<div class="champ"><label for="nmdp">Choisis un nouveau mot de passe</label><input id="nmdp" type="password" autocomplete="new-password" minlength="6"></div>' +
          '<button class="btn btn-principal" type="submit">Enregistrer le mot de passe</button>' +
          '<p class="auth-msg" id="auth-msg" aria-live="polite"></p>' +
        "</form></div></section>";
    document.getElementById("form-mdp").addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("auth-msg");
      sb.auth.updateUser({ password: document.getElementById("nmdp").value }).then(function (res) {
        if (res.error) { msg.textContent = traduire(res.error); return; }
        modeRecup = false;
        history.replaceState(null, "", location.pathname + "#/");
        dernierUid = undefined;
        sb.auth.getSession().then(function (r) { surAuth("SIGNED_IN", r.data && r.data.session); });
      });
    });
  }

  /* =================================================================
     Statistiques et estimation du niveau
     ================================================================= */

  // Chaque exercice appartient à une compétence (champ comp) : les statistiques se calculent par compétence.
  var COMPETENCES = CDEF.map(function (c) { return { id: c.id, type: c.id, nom: c.nom }; });
  var NIVEAUX = ["b1", "b2", "c1"];
  var NOMS_NIV = { b1: "B1", b2: "B2", c1: "C1" };
  var CONSEILS = {
    lecture: "Lis un peu chaque jour : cherche d’abord le sens global, puis reviens sur les mots inconnus.",
    ecoute: "Écoute d’abord en vitesse lente, puis normale, et ne lis la transcription qu’à la fin.",
    vocabulaire: "Note les mots nouveaux dans des phrases complètes et révise-les quelques jours plus tard.",
    grammaire: "Relis les règles liées à l’exercice, puis refais-le sans regarder la fiche.",
    ecriture: "Fais corriger tes textes par Claude, puis réécris-les en tenant compte des corrections.",
    oral: "Enregistre-toi plusieurs fois sur le même sujet : la deuxième prise est presque toujours meilleure."
  };

  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function slugTheme(t) { return sansAccents(t).replace(/[^a-z]+/g, "-"); }
  function jauge(p, extra) { return '<div class="jauge' + (extra ? " " + extra : "") + '" role="img" aria-label="' + p + ' %"><span style="width:' + p + '%"></span></div>'; }

  function toutesActivites() {
    var out = [];
    P.unites.forEach(function (u) {
      (u.activites || []).forEach(function (a, i) { out.push({ u: u, i: i, a: a, res: etat.activites[cle(u, i)] }); });
    });
    return out;
  }

  function statsGlobales() {
    var prevues = P.unites.reduce(function (s, u) { return s + (u.activites ? u.activites.length : 6); }, 0);
    var faites = toutesActivites().filter(function (x) { return x.res && x.res.fait; }).length;
    var dispo = P.unites.filter(function (u) { return u.activites; });
    return { prevues: prevues, faites: faites, pct: pct(faites, prevues), unitesT: dispo.filter(terminee).length };
  }

  function statsGroupe(filtre) {
    var us = P.unites.filter(filtre);
    var dispo = us.filter(function (u) { return u.activites; });
    var total = dispo.reduce(function (s, u) { return s + u.activites.length; }, 0);
    var faites = dispo.reduce(function (s, u) { return s + nbFaites(u); }, 0);
    return { unites: us.length, dispo: dispo.length, total: total, faites: faites, pct: pct(faites, total) };
  }

  function statsCompetence(c) {
    var acts = toutesActivites().filter(function (x) { return x.a.comp === c.id; });
    var faites = acts.filter(function (x) { return x.res && x.res.fait; });
    var notees = faites.filter(function (x) { return x.res.total; });
    var s = 0, t = 0, parNiv = {};
    notees.forEach(function (x) {
      s += x.res.score; t += x.res.total;
      var n = x.u.niveau;
      parNiv[n] = parNiv[n] || { s: 0, t: 0 };
      parNiv[n].s += x.res.score; parNiv[n].t += x.res.total;
    });
    var est = estimerNiveau(parNiv);
    return {
      def: c, total: acts.length, faites: faites.length, n: notees.length,
      reussite: t ? s / t : null, est: est,
      fiabilite: notees.length === 0 ? "–" : notees.length < 3 ? "faible" : notees.length < 6 ? "moyenne" : "bonne"
    };
  }

  // Seuils : 80 % de réussite = niveau acquis ; 60 % = en cours ; en dessous = à consolider.
  function estimerNiveau(parNiv) {
    var acquis = null, enCours = null, fragile = null;
    NIVEAUX.forEach(function (n) {
      var d = parNiv[n];
      if (!d || !d.t) return;
      var r = d.s / d.t;
      if (r >= 0.8) acquis = n;
      else if (r >= 0.6) { if (!enCours) enCours = n; }
      else if (!fragile) fragile = n;
    });
    if (!acquis && !enCours && !fragile) return null;
    var idx = function (n) { return NIVEAUX.indexOf(n); };
    if (acquis) {
      var vers = enCours && idx(enCours) > idx(acquis) ? enCours : null;
      var suivant = NIVEAUX[idx(acquis) + 1];
      return {
        court: NOMS_NIV[acquis], long: NOMS_NIV[acquis] + " acquis",
        sous: vers ? "En progression vers le " + NOMS_NIV[vers] : suivant ? "Prochaine étape : le " + NOMS_NIV[suivant] : "Niveau visé atteint",
        pos: idx(acquis) + 1 + (vers ? 0.45 : 0)
      };
    }
    if (enCours) return { court: NOMS_NIV[enCours] + "…", long: NOMS_NIV[enCours] + " en cours", sous: "Encore un effort pour le consolider", pos: idx(enCours) + 0.6 };
    return { court: NOMS_NIV[fragile] + "…", long: NOMS_NIV[fragile] + " à consolider", sous: "Moins de 60 % de réussite à ce niveau : reprends les activités et les règles associées", pos: idx(fragile) + 0.25 };
  }

  function prochaineActivite(type) {
    var acts = toutesActivites().filter(function (x) { return (!type || x.a.comp === type) && !passee(x.u); });
    var libre = acts.find(function (x) { return !(x.res && x.res.fait); });
    if (libre) return libre;
    var notees = acts.filter(function (x) { return x.res && x.res.total; });
    notees.sort(function (a, b) { return a.res.score / a.res.total - b.res.score / b.res.total; });
    return notees[0] || null;
  }

  function recommandation(comps) {
    var evaluees = comps.filter(function (c) { return c.n > 0; });
    var jamais = comps.filter(function (c) { return c.n === 0 && c.total > 0; });
    if (!evaluees.length) {
      return { comp: null, titre: "Premiers pas", raison: "Fais quelques activités : dès les premiers résultats, l’estimation de niveau et les conseils apparaîtront ici.", act: prochaineActivite(null) };
    }
    var faible = evaluees.slice().sort(function (a, b) { return a.reussite - b.reussite; })[0];
    if (jamais.length && faible.reussite >= 0.75) {
      var c = jamais[0];
      return { comp: c, titre: c.def.nom, raison: "Tu n’as encore fait aucune activité dans cette compétence. Quelques exercices suffiront pour compléter ton profil.", act: prochaineActivite(c.def.type) };
    }
    return {
      comp: faible, titre: faible.def.nom,
      raison: "C’est ta compétence la moins solide pour l’instant, avec " + Math.round(faible.reussite * 100) + " % de réussite" +
        (faible.def.id === "ecriture" || faible.def.id === "oral" ? " (d’après ta grille d’autoévaluation)" : "") + ". " + CONSEILS[faible.def.id],
      act: prochaineActivite(faible.def.type)
    };
  }

  function lienActivite(x, texte) {
    if (!x) return "";
    return '<a class="btn btn-contour" href="#/unite/' + x.u.id + "/" + x.i + '"><span class="play" aria-hidden="true"></span>' +
      (texte || "S’entraîner") + " : unité " + x.u.id + ", " + x.a.titre.toLowerCase() + "</a>";
  }

  /* =================================================================
     Accueil
     ================================================================= */

  function regleDuJour() {
    var nonLues = R.filter(function (r) { return !etat.reglesLues[r.id]; });
    var pool = nonLues.length ? nonLues : R;
    return pool[Math.floor(Date.now() / 86400000) % pool.length];
  }

  var filtreNiveau = "tous";

  /* ---------- Série de jours et objectif du jour ---------- */

  function dateLocale(d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function decaler(dateStr, n) {
    var p = dateStr.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return dateLocale(d);
  }
  function faitesLe(dateStr) { return (etat.jours[dateStr] || []).length; }
  function objectif() { return (etat.reglages && etat.reglages.objectif) || 2; }
  function faitesAujourdhui() { return faitesLe(dateLocale()); }
  function serie() {
    var d = dateLocale(), n = 0;
    if (!faitesLe(d)) d = decaler(d, -1);
    while (faitesLe(d)) { n++; d = decaler(d, -1); }
    return n;
  }
  function meilleureSerie() {
    var dates = Object.keys(etat.jours).filter(faitesLe).sort(), best = 0, cur = 0, prev = null;
    dates.forEach(function (d) { cur = prev && decaler(prev, 1) === d ? cur + 1 : 1; best = Math.max(best, cur); prev = d; });
    return best;
  }

  var FLAMME = '<svg class="flamme" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-6 1-9.5z" fill="#FFB627"/><path d="M12 12c.6 2 2.5 2.6 2.5 4.6a2.5 2.5 0 0 1-5 0c0-1.3.8-2 1.4-2.6.2 1 .7 1.4 1.1 1.4 0-1.2-.4-2.2 0-3.4z" fill="#E84A5F"/></svg>';

  function anneau(n, total) {
    var r = 22, c = 2 * Math.PI * r, p = Math.min(1, total ? n / total : 0);
    return '<svg class="anneau" viewBox="0 0 56 56" aria-hidden="true">' +
      '<circle cx="28" cy="28" r="' + r + '" class="anneau-fond"/>' +
      '<circle cx="28" cy="28" r="' + r + '" class="anneau-plein" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - p)).toFixed(1) + '"/>' +
      (p >= 1 ? '<path d="M20 29 l6 6 l11 -13" class="anneau-ok"/>' : '<text x="28" y="33" text-anchor="middle">' + n + "</text>") +
      "</svg>";
  }

  function semaine() {
    var noms = ["D", "L", "M", "M", "J", "V", "S"], auj = dateLocale(), html = "";
    for (var k = 6; k >= 0; k--) {
      var d = decaler(auj, -k), p = d.split("-"), jour = new Date(+p[0], +p[1] - 1, +p[2]).getDay();
      var n = faitesLe(d), atteint = n >= objectif();
      html += '<li class="jour' + (n ? " actif" : "") + (atteint ? " atteint" : "") + (d === auj ? " aujourdhui" : "") + '">' +
        '<span class="jour-nom">' + noms[jour] + "</span>" +
        '<span class="jour-pastille" aria-label="' + (d === auj ? "Aujourd’hui" : d) + " : " + pluriel(n, "activité") + '">' + (n ? FLAMME : "") + "</span></li>";
    }
    return '<ol class="semaine-jours">' + html + "</ol>";
  }

  var ICONES = {};
  CDEF.forEach(function (c) { ICONES[c.id] = c.ico; });
  var MOTS_DEFAUT = ["flâner", "pourtant", "savourer", "dont", "la francophonie", "bien que", "un coup de foudre", "l’épanouissement"];

  /* ---------- Accueil ---------- */

  function afficherAccueil() {
    document.title = "Mon parcours de français";
    var dispo = P.unites.filter(function (u) { return u.activites; });
    var reprise = dispo.find(function (u) { return !terminee(u) && !passee(u); });
    var rj = regleDuJour();
    var comps = COMPETENCES.map(statsCompetence);
    var n = faitesAujourdhui(), obj = objectif(), s = serie();

    var titre = n >= obj ? "Objectif du jour atteint. Bravo !"
      : s > 0 && !n ? "Ta série de " + pluriel(s, "jour") + " t’attend."
      : n ? "Encore " + pluriel(obj - n, "activité") + " pour ton objectif."
      : "Prête pour un peu de français aujourd’hui ?";

    var mots = reprise ? (reprise.activites.find(function (a) { return a.type === "association"; }) || {}).items : null;
    mots = mots ? mots.map(function (it) { return it.terme.replace(/\s*\(.*\)$/, ""); }).slice(0, 6) : MOTS_DEFAUT.slice(0, 6);

    var k = reprise ? premiereNonFaite(reprise) : 0;
    app.innerHTML =
      '<section class="accueil-hero">' +
        '<div class="ah-texte">' +
          '<p class="ah-bonjour">' + (profil.prenom ? "Bonjour " + esc(profil.prenom) + " !" : "Bonjour !") + "</p>" +
          '<h1 class="ah-titre">' + titre + "</h1>" +
          '<div class="ah-stats">' +
            '<a class="stat" href="#/progression">' + FLAMME + '<span><strong>' + s + "</strong> " + (s > 1 ? "jours" : "jour") + " de suite</span></a>" +
            '<a class="stat" href="#/profil">' + anneau(n, obj) + '<span><strong>' + Math.min(n, obj) + " sur " + obj + "</strong> aujourd’hui</span></a>" +
          "</div>" +
          (reprise
            ? '<a class="btn btn-principal btn-grand" href="#/unite/' + reprise.id + "/" + k + '">' +
                (Object.keys(etat.activites).length ? "Continuer" : "Commencer") + " : " + ICONES[reprise.activites[k].comp] + " " + reprise.activites[k].titre.toLowerCase() + "</a>" +
              '<p class="ah-sous">Unité ' + reprise.id + " : " + reprise.titre + "</p>"
            : '<p class="ah-sous">Toutes les unités sont faites ou passées. Chapeau !</p>') +
        "</div>" +
        '<div class="ah-scene" aria-hidden="true">' +
          '<div class="bulles">' + mots.map(function (m, i) { return '<span class="bulle" style="--i:' + i + '">' + esc(m) + "</span>"; }).join("") + "</div>" +
          ILL.bao(n >= obj ? "bravo" : "lit", "ah-bao") +
          '<svg class="ah-tasse" viewBox="0 0 80 70"><path class="vap" d="M30 18 q-6 -8 0 -16 M44 18 q-6 -8 0 -16" stroke="#9AA3C7" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M14 26 h46 v14 a23 23 0 0 1 -46 0z" fill="#1FA58C"/><path d="M60 32 q12 0 10 10 q-2 8 -12 6" stroke="#1FA58C" stroke-width="5" fill="none"/><ellipse cx="37" cy="64" rx="30" ry="5" fill="#1F2A5C" opacity=".12"/></svg>' +
        "</div>" +
      "</section>" +

      '<section class="bandeau-semaine" aria-label="Ta semaine">' +
        '<div><h2 class="petit-titre">Ta semaine</h2><p class="petit">Meilleure série : ' + pluriel(meilleureSerie(), "jour") + "</p></div>" +
        semaine() +
      "</section>" +

      '<div class="duo">' +
        '<aside class="regle-jour" aria-labelledby="rj-titre">' +
          '<p class="eyebrow" id="rj-titre">💡 La règle du jour</p>' +
          '<p class="rj-nom"><a href="#/regles/' + rj.id + '">' + rj.titre + "</a></p>" +
          "<p>" + rj.resume + "</p>" + ILL.bao("lit", "rj-bao") +
        "</aside>" +
        '<section class="competences-mini" aria-labelledby="t-comp">' +
          '<div class="titre-ligne"><h2 class="petit-titre" id="t-comp">Tes compétences</h2><a class="lien-fort" href="#/progression">Détails</a></div>' +
          '<ul class="comp-mini">' + comps.map(function (c) {
            var p = pct(c.faites, c.total);
            return '<li><span class="comp-ico" aria-hidden="true">' + ICONES[c.def.type] + '</span><span class="comp-nom">' + c.def.nom + "</span>" +
              '<span class="comp-niv">' + (c.est ? c.est.court : "") + "</span>" + jauge(p) + "</li>";
          }).join("") + "</ul>" +
        "</section>" +
      "</div>" +

      '<section class="explorer" aria-labelledby="t-exp">' +
        '<h2 class="section-titre" id="t-exp">Explorer par thème</h2>' +
        '<div class="themes" role="group" aria-label="Filtrer par thème">' +
          [{ t: "tous", nom: "Tout le parcours" }].concat(THEMES.map(function (t) { return { t: t, nom: t }; }), [{ t: "chine", nom: "Liens avec la Chine" }]).map(function (x) {
            var nb = P.unites.filter(function (u) { return x.t === "tous" || (x.t === "chine" ? u.chine : u.theme === x.t); }).length;
            var illu = x.t === "tous" ? '<span class="theme-tous">' + ILL.bao("content") + "</span>"
              : x.t === "chine" ? '<span class="theme-chine">中</span>' : ILL.scene(slugTheme(x.t));
            return '<button type="button" class="theme" data-theme="' + esc(x.t) + '" aria-pressed="' + (filtreTheme === x.t) + '">' +
              '<span class="theme-illu">' + illu + "</span>" +
              '<span class="theme-nom">' + x.nom + '</span><span class="theme-nb">' + pluriel(nb, "unité") + "</span></button>";
          }).join("") +
        "</div>" +
      "</section>" +

      '<section class="selecteur" id="parcours" aria-labelledby="t-niv">' +
        '<h2 class="section-titre" id="t-niv">Le parcours</h2>' +
        '<div class="niv-choix" role="group" aria-label="Filtrer par niveau">' +
          ["tous"].concat(NIVEAUX).map(function (n) {
            return '<button type="button" data-niv="' + n + '" aria-pressed="' + (filtreNiveau === n) + '">' + (n === "tous" ? "Tous les niveaux" : NOMS_NIV[n]) + "</button>";
          }).join("") +
        "</div>" +
      "</section>" +

      '<div id="liste"></div>' +
      '<p class="aide-passer">Une unité trop facile ? « Passer » la retire des suggestions, mais elle reste accessible.</p>';

    app.querySelectorAll("[data-niv]").forEach(function (b) {
      b.addEventListener("click", function () {
        filtreNiveau = b.dataset.niv;
        app.querySelectorAll("[data-niv]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        rendreListe();
      });
    });
    app.querySelectorAll("[data-theme]").forEach(function (b) {
      b.addEventListener("click", function () {
        filtreTheme = b.dataset.theme;
        app.querySelectorAll("[data-theme]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        rendreListe();
        document.getElementById("parcours").scrollIntoView({ behavior: mouvementReduit() ? "auto" : "smooth", block: "start" });
      });
    });
    document.getElementById("liste").addEventListener("click", function (e) {
      var b = e.target.closest("[data-passer]");
      if (!b) return;
      var id = b.dataset.passer;
      basculerPassee(id);
      rendreListe();
      var cible = document.querySelector('[data-passer="' + id + '"]');
      if (cible) cible.focus();
    });

    rendreListe();
    window.scrollTo(0, 0);
  }

  function rendreListe() {
    var html = "";
    P.niveaux.forEach(function (n) {
      if (filtreNiveau !== "tous" && filtreNiveau !== n.id) return;
      var us = P.unites.filter(function (u) {
        return u.niveau === n.id && (filtreTheme === "tous" || (filtreTheme === "chine" ? u.chine : u.theme === filtreTheme));
      });
      if (!us.length) return;
      var sn = statsGroupe(function (u) { return u.niveau === n.id; });
      html += '<section class="niveau niv-' + n.id + '" aria-labelledby="niv-' + n.id + '">' +
        '<div class="niveau-tete">' +
          '<span class="niveau-badge" aria-hidden="true">' + NOMS_NIV[n.id] + "</span>" +
          '<div><h2 id="niv-' + n.id + '">' + n.titre + '</h2><p class="niveau-desc">' + n.description + "</p></div>" +
          '<div class="niveau-prog">' + jauge(sn.pct) + '<span class="pct">' + sn.pct + " %</span></div>" +
        "</div>" +
        '<ol class="cartes">' + us.map(carteUnite).join("") + "</ol></section>";
    });
    document.getElementById("liste").innerHTML = html || '<p class="vide">Aucune unité ne correspond à ces filtres. Choisis « Tout le parcours » pour tout revoir.</p>';
  }

  function carteUnite(u) {
    var dispo = !!u.activites, nf = dispo ? nbFaites(u) : 0, tot = dispo ? u.activites.length : 0, p = pct(nf, tot);
    var classe = !dispo ? "a-venir" : terminee(u) ? "terminee" : passee(u) ? "passee" : nf ? "en-cours" : "a-faire";
    var badge = terminee(u) ? '<span class="pastille pastille-ok">✓ Faite</span>'
      : passee(u) ? '<span class="pastille">Passée</span>'
      : nf ? '<span class="pastille pastille-cours">En cours</span>' : "";
    var action = dispo && !terminee(u)
      ? '<button type="button" class="btn-passer" data-passer="' + u.id + '" aria-label="' + (passee(u) ? "Rétablir" : "Passer") + " l’unité " + u.id + '">' + (passee(u) ? "Rétablir" : "Passer") + "</button>"
      : "";
    return '<li class="carte ' + classe + '">' +
      '<a class="carte-lien" href="#/unite/' + u.id + '">' +
        '<span class="carte-illu">' + ILL.scene(slugTheme(u.theme)) +
          '<span class="carte-num">Unité ' + u.id + "</span>" + badge +
          (u.chine ? '<span class="carte-chine" title="Lien avec la Chine">中</span>' : "") +
        "</span>" +
        '<span class="carte-corps">' +
          '<span class="carte-sur">' + u.theme + "</span>" +
          '<span class="carte-titre">' + u.titre + "</span>" +
          '<span class="carte-obj">' + u.objectif + "</span>" +
          '<span class="carte-prog">' + jauge(p) + '<span class="pct">' + nf + " / " + tot + "</span></span>" +
        "</span>" +
      "</a>" + action +
    "</li>";
  }

  /* ---------- Célébrations ---------- */

  function mouvementReduit() { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

  function confettis() {
    if (mouvementReduit()) return;
    var couleurs = ["#FFB627", "#E84A5F", "#1FA58C", "#5B6CFF", "#FF8FB1"];
    var box = document.createElement("div");
    box.className = "confettis";
    box.setAttribute("aria-hidden", "true");
    for (var i = 0; i < 70; i++) {
      var s = document.createElement("span");
      s.style.left = Math.random() * 100 + "%";
      s.style.background = couleurs[i % couleurs.length];
      s.style.animationDelay = Math.random() * 0.4 + "s";
      s.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
      s.style.setProperty("--x", (Math.random() * 160 - 80) + "px");
      s.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
      if (i % 3 === 0) s.style.borderRadius = "50%";
      box.appendChild(s);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 3400);
  }

  var minuteurToast;
  function toast(html, humeur) {
    var t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = ILL.bao(humeur || "bravo", "toast-bao") + '<p>' + html + "</p>";
    t.classList.remove("visible"); void t.offsetWidth; t.classList.add("visible");
    clearTimeout(minuteurToast);
    minuteurToast = setTimeout(function () { t.classList.remove("visible"); }, 3800);
  }

  var BRAVOS = ["Bravo !", "Superbe !", "Excellent travail !", "Chapeau !", "Quelle régularité !", "Tu progresses vite !"];
  var COURAGE = ["Ce n’est pas grave : relis les explications et recommence.", "Chaque erreur t’apprend quelque chose.", "Pas à pas, on avance !"];

  function celebrer(score, total, objectifVientDetreAtteint) {
    var r = total ? score / total : 1;
    if (objectifVientDetreAtteint) {
      confettis();
      var s = serie();
      var m = document.createElement("div");
      m.className = "modale-fond";
      m.innerHTML = '<div class="modale" role="dialog" aria-modal="true" aria-labelledby="m-titre">' + ILL.bao("bravo", "modale-bao") +
        '<h2 id="m-titre">Objectif du jour atteint !</h2>' +
        '<p class="modale-serie">' + FLAMME + " " + pluriel(s, "jour") + " de suite</p>" +
        "<p>" + (s >= 7 ? "Une semaine entière ou plus : c’est exactement comme ça qu’on progresse." : s >= 3 ? "Ta régularité paie. Reviens demain pour allonger ta série !" : "Reviens demain pour commencer une belle série.") + "</p>" +
        '<button type="button" class="btn btn-principal" data-fermer>Continuer</button></div>';
      document.body.appendChild(m);
      var fermer = function () { m.remove(); };
      m.addEventListener("click", function (e) { if (e.target === m || e.target.closest("[data-fermer]")) fermer(); });
      m.querySelector("[data-fermer]").focus();
      majBadge();
      return;
    }
    if (r >= 0.8) { confettis(); toast("<strong>" + BRAVOS[Math.floor(Math.random() * BRAVOS.length)] + "</strong> " + score + " sur " + total + "."); }
    else if (r >= 0.5) toast("<strong>Pas mal !</strong> " + score + " sur " + total + ". Relis les explications pour viser plus haut.", "content");
    else toast("<strong>" + score + " sur " + total + ".</strong> " + COURAGE[Math.floor(Math.random() * COURAGE.length)], "content");
  }

  function majBadge() {
    if (!("setAppBadge" in navigator)) return;
    try { if (faitesAujourdhui() >= objectif()) navigator.clearAppBadge(); else navigator.setAppBadge(1); } catch (e) { /* rien */ }
  }

  /* =================================================================
     Progression
     ================================================================= */

  function afficherProgression() {
    document.title = "Ma progression";
    var g = statsGlobales();
    var comps = COMPETENCES.map(statsCompetence);
    var reco = recommandation(comps);

    function ligne(nom, s) {
      return '<li><span class="ligne-nom">' + nom + "</span>" + jauge(s.pct) +
        '<span class="pct">' + s.pct + " %</span>" +
        '<span class="ligne-detail">' + s.faites + " / " + s.total + " activités, " + s.dispo + " unité" + (s.dispo > 1 ? "s" : "") + " sur " + s.unites + "</span></li>";
    }

    app.innerHTML =
      '<header class="page-tete"><h1 class="display">Ta progression</h1><p class="lead">' + FLAMME + ' ' + pluriel(serie(), "jour") + ' de suite, record : ' + pluriel(meilleureSerie(), "jour") + '. ' + pluriel(Object.keys(etat.jours).filter(faitesLe).length, "jour") + ' de travail au total.</p></header>' +

      '<section class="prog-global" aria-label="Progression globale">' +
        '<p class="gros-chiffre">' + g.pct + "<small>%</small></p>" +
        '<div><p class="label">du parcours complet</p>' + jauge(g.pct, "jauge-grande") +
        "<p>" + g.faites + " activités faites sur " + g.prevues + " prévues. " + g.unitesT + " unité" + (g.unitesT > 1 ? "s" : "") + " terminée" + (g.unitesT > 1 ? "s" : "") + ".</p></div>" +
      "</section>" +

      '<section class="reco" aria-labelledby="t-reco">' +
        '<p class="label">Priorité du moment</p>' +
        '<h2 class="display" id="t-reco">' + reco.titre + "</h2>" +
        "<p>" + reco.raison + "</p>" + lienActivite(reco.act) +
      "</section>" +

      '<section class="section-prog" aria-labelledby="t-c">' +
        '<div class="titre-bloc"><h2 class="display" id="t-c">Compétence</h2></div>' +
        '<div class="comp-grille">' + comps.map(function (c) {
          var p = pct(c.faites, c.total);
          var pos = c.est ? Math.max(3, Math.min(97, c.est.pos / 3 * 100)) : null;
          var prochaine = prochaineActivite(c.def.type);
          return '<article class="comp-carte c-' + c.def.id + '">' +
            "<h3>" + c.def.nom + "</h3>" +
            (c.est
              ? '<p class="display comp-niveau">' + c.est.long + '</p><p class="comp-sous">' + c.est.sous + "</p>"
              : '<p class="comp-niveau inconnu">Pas encore évaluée</p><p class="comp-sous">Fais une activité pour obtenir une estimation.</p>') +
            '<div class="echelle" aria-hidden="true">' +
              NIVEAUX.map(function (n, k) { return '<span class="echelle-tick" style="left:' + ((k + 1) / 3 * 100 - (k === 2 ? 2 : 0)) + '%">' + NOMS_NIV[n] + "</span>"; }).join("") +
              (pos !== null ? '<span class="echelle-marque" style="left:' + pos + '%"></span>' : "") +
            "</div>" +
            '<dl class="comp-chiffres">' +
              "<div><dt>Faites</dt><dd>" + c.faites + " / " + c.total + "</dd></div>" +
              "<div><dt>Réussite</dt><dd>" + (c.reussite === null ? "–" : Math.round(c.reussite * 100) + " %") + "</dd></div>" +
              "<div><dt>Fiabilité</dt><dd>" + c.fiabilite + "</dd></div>" +
            "</dl>" +
            '<div class="carte-prog">' + jauge(p) + '<span class="pct">' + p + " %</span></div>" +
            (prochaine ? '<a class="lien-fort" href="#/unite/' + prochaine.u.id + "/" + prochaine.i + '">S’entraîner</a>' : "") +
          "</article>";
        }).join("") + "</div>" +
      "</section>" +

      '<section class="section-prog" aria-labelledby="t-t">' +
        '<div class="titre-bloc"><h2 class="display" id="t-t">Thème</h2></div>' +
        '<ul class="lignes">' + THEMES.map(function (t) { return ligne(t, statsGroupe(function (u) { return u.theme === t; })); }).join("") +
          ligne("Liens avec la Chine", statsGroupe(function (u) { return u.chine; })) + "</ul>" +
      "</section>" +

      '<section class="section-prog" aria-labelledby="t-n">' +
        '<div class="titre-bloc"><h2 class="display" id="t-n">Niveau</h2></div>' +
        '<ul class="lignes">' + P.niveaux.map(function (n) { return ligne(n.titre, statsGroupe(function (u) { return u.niveau === n.id; })); }).join("") + "</ul>" +
      "</section>" +

      '<details class="methode"><summary>Comment le niveau est estimé</summary>' +
        "<p>Pour chaque compétence, le site regarde les résultats obtenus dans les unités de chaque niveau. " +
        "À partir de 80 % de bonnes réponses, le niveau est considéré comme acquis ; entre 60 et 80 %, il est en cours ; en dessous, il est à consolider.</p>" +
        "<p>Les pourcentages des thèmes et des niveaux portent sur les unités déjà disponibles. La production écrite et l’expression orale sont notées d’après la grille que tu coches : c’est une autoévaluation, à compléter par une vraie correction.</p>" +
        "<p>Avec une ou deux activités, l’estimation reste fragile : c’est ce qu’indique la fiabilité.</p>" +
      "</details>";
    window.scrollTo(0, 0);
  }

  /* =================================================================
     Unité
     ================================================================= */

  function compDef(id) { return CDEF.find(function (c) { return c.id === id; }); }
  function exosDe(u, comp) {
    var out = [];
    u.activites.forEach(function (a, k) { if (a.comp === comp) out.push(k); });
    return out;
  }
  function etatComp(u, comp) {
    var ks = exosDe(u, comp);
    var faits = ks.filter(function (k) { return estFait(u, k); }).length;
    var prochain = ks.find(function (k) { return !estFait(u, k); });
    return { ks: ks, faits: faits, cible: prochain === undefined ? ks[0] : prochain };
  }

  function navUnite(u, i) {
    var a = u.activites[i];
    var comps = CDEF.filter(function (c) { return exosDe(u, c.id).length; }).map(function (c) {
      var e = etatComp(u, c.id);
      return '<li><a href="#/unite/' + u.id + "/" + e.cible + '" data-comp="' + c.id + '"' + (c.id === a.comp ? ' aria-current="step"' : "") +
        ' class="' + (e.faits === e.ks.length ? "fait" : "") + '">' +
        '<span class="etape-num" aria-hidden="true">' + c.ico + "</span>" +
        '<span class="etape-nom">' + c.court + '</span><span class="comp-compte" data-compte="' + c.id + '">' + e.faits + "/" + e.ks.length + "</span></a></li>";
    }).join("");
    var ks = exosDe(u, a.comp);
    var exos = ks.length > 1
      ? '<ol class="exos" id="exos" aria-label="Exercices : ' + esc(compDef(a.comp).nom) + '">' + ks.map(function (k, n) {
          var x = u.activites[k];
          return '<li><a href="#/unite/' + u.id + "/" + k + '" data-i="' + k + '"' + (k === i ? ' aria-current="step"' : "") +
            ' class="' + (estFait(u, k) ? "fait" : "") + '"><span class="exo-num">' + (n + 1) + '</span><span class="exo-nom">' + esc(x.titre) + "</span></a></li>";
        }).join("") + "</ol>"
      : "";
    return '<ol class="etapes" id="etapes" aria-label="Compétences de l’unité">' + comps + "</ol>" + exos;
  }

  function majNavUnite(u) {
    document.querySelectorAll("#exos a[data-i]").forEach(function (l) { l.classList.toggle("fait", estFait(u, +l.dataset.i)); });
    document.querySelectorAll("#etapes a[data-comp]").forEach(function (l) {
      var e = etatComp(u, l.dataset.comp);
      l.classList.toggle("fait", e.faits === e.ks.length);
      var c = l.querySelector("[data-compte]");
      if (c) c.textContent = e.faits + "/" + e.ks.length;
    });
  }

  function afficherUnite(u, i) {
    var a = u.activites[i];
    document.title = "Unité " + u.id + " : " + u.titre;
    var ks = exosDe(u, a.comp), rang = ks.indexOf(i) + 1;
    var cd = compDef(a.comp);

    var aRelire = (a.regles || []).map(regleParId).filter(Boolean);
    var suivante = uniteSuivante(u.id);
    var proch = u.activites[i + 1];
    var suite = proch
      ? '<a class="btn" href="#/unite/' + u.id + "/" + (i + 1) + '">' +
          (proch.comp === a.comp ? "Exercice suivant : " + esc(proch.titre.toLowerCase()) : "Compétence suivante : " + ICONES[proch.comp] + " " + compDef(proch.comp).court.toLowerCase()) + "</a>"
      : suivante
        ? '<a class="btn" href="#/unite/' + suivante.id + '">Unité suivante : ' + suivante.titre + "</a>"
        : '<a class="btn" href="#/">Revenir au parcours</a>';

    app.innerHTML =
      '<nav class="fil"><a href="#/">‹ Parcours</a></nav>' +
      '<header class="unite-tete t-' + slugTheme(u.theme) + '">' +
        '<div class="unite-illu">' + ILL.scene(slugTheme(u.theme)) + "</div>" +
        '<div class="unite-info">' +
        '<p class="unite-sur">Unité ' + u.id + ", niveau " + NOMS_NIV[u.niveau] + ", " + u.theme.toLowerCase() + (u.chine ? ' <span class="carte-chine">中</span>' : "") + "</p>" +
        '<h1 class="display unite-titre">' + u.titre + "</h1>" +
        '<p class="unite-objectif">' + u.objectif + "</p>" +
        '<div class="unite-prog" id="prog-unite">' + jauge(pct(nbFaites(u), u.activites.length)) + '<span class="pct">' + pct(nbFaites(u), u.activites.length) + " %</span></div>" +
        (terminee(u) ? "" :
          '<button type="button" class="btn-mini" id="passer-unite">' + (passee(u) ? "Rétablir cette unité" : "Passer cette unité") + "</button>") +
        "</div>" +
      "</header>" +
      navUnite(u, i) +
      '<article class="activite">' +
        '<header class="activite-tete"><p class="activite-type">' + cd.ico + " " + cd.court +
          (ks.length > 1 ? '<span class="exo-rang"> · exercice ' + rang + " sur " + ks.length + "</span>" : "") + "</p>" +
          "<h2>" + (a.sousTitre || a.titre) + "</h2>" +
          '<p class="exo-meta">' + (a.etape && ETAPES[a.etape] ? '<span class="etape-badge e-' + a.etape + '">' + ETAPES[a.etape] + "</span>" : "") +
          (a.duree ? '<span class="duree">Environ ' + a.duree + "</span>" : "") + "</p></header>" +
        (aRelire.length
          ? '<p class="a-relire">À relire dans les règles : ' + aRelire.map(function (r) {
              return '<a href="#/regles/' + r.id + '">' + r.titre + "</a>";
            }).join(", ") + "</p>"
          : "") +
        '<div id="contenu-activite"></div>' +
      "</article>" +
      '<div class="suite">' + suite + "</div>";

    var bp = document.getElementById("passer-unite");
    if (bp) bp.addEventListener("click", function () {
      basculerPassee(u.id);
      bp.textContent = passee(u) ? "Rétablir cette unité" : "Passer cette unité";
    });

    var rendus = {
      qcm: rendreQcm, lecture: rendreQcm, ecoute: rendreQcm, vraifaux: rendreVraiFaux,
      association: rendreAssociation, trous: rendreTrous, texteatrous: rendreTexteATrous, registre: rendreRegistre,
      saisie: rendreSaisie, correction: rendreSaisie, transformation: rendreSaisie, reformulation: rendreSaisie,
      ecriture: rendreEcriture, oral: rendreOral
    };
    (rendus[a.type] || function () {})(document.getElementById("contenu-activite"), a, u, i);
    window.scrollTo(0, 0);
    [document.querySelector("#etapes [aria-current]"), document.querySelector("#exos [aria-current]")].forEach(function (actif) {
      if (actif) { var ol = actif.closest("ol"); ol.scrollLeft = actif.parentNode.offsetLeft - 16; }
    });
  }

  function enregistrer(u, i, score, total) {
    var avant = faitesAujourdhui(), obj = objectif(), d = dateLocale();
    etat.activites[cle(u, i)] = { fait: true, score: score, total: total, date: new Date().toISOString() };
    etat.jours[d] = etat.jours[d] || [];
    if (etat.jours[d].indexOf(cle(u, i)) === -1) etat.jours[d].push(cle(u, i));
    setTimeout(function () { celebrer(score, total, avant < obj && faitesAujourdhui() >= obj); rendreNav(); }, 250);
    if (terminee(u)) delete etat.unites[u.id];
    sauver();
    majNavUnite(u);
    var pu = document.getElementById("prog-unite");
    if (pu) pu.innerHTML = jauge(pct(nbFaites(u), u.activites.length)) + '<span class="pct">' + pct(nbFaites(u), u.activites.length) + " %</span>";
    // Prévient l'exercice (par exemple pour débloquer la transcription d'une écoute).
    var z = document.getElementById("contenu-activite");
    if (z) z.dispatchEvent(new Event("verifie"));
  }

  /* ---------- Outils communs aux exercices ---------- */

  function htmlConsigne(a) { return a.consigne ? '<p class="consigne">' + a.consigne + "</p>" : ""; }
  function htmlScore() { return '<div class="actions"><button class="btn" type="button" data-verifier>Vérifier mes réponses</button><p class="score" aria-live="polite"></p></div>'; }
  function messageScore(score, total) {
    return "Score : " + score + " sur " + total + (score === total ? ". Parfait." : ". Relis les explications, corrige, puis vérifie à nouveau.");
  }

  // Comparaison tolérante : majuscules, ponctuation, espaces et apostrophes ne comptent pas.
  // Les accents sont signalés mais ne font pas perdre le point.
  function normStrict(s) {
    return String(s == null ? "" : s).toLowerCase()
      .replace(/œ/g, "oe").replace(/æ/g, "ae")
      .replace(/[’‘`´]/g, "'")
      .replace(/[.,;:!?«»"“”()\[\]…–—\-_/]/g, " ")
      .replace(/\s*'\s*/g, "'")
      .replace(/\s+/g, " ").trim();
  }
  function normSouple(s) { return normStrict(s).normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function comparer(saisie, reponses) {
    var st = normStrict(saisie), so = normSouple(saisie);
    if (!so) return { vide: true };
    for (var k = 0; k < reponses.length; k++) if (normStrict(reponses[k]) === st) return { ok: true };
    for (k = 0; k < reponses.length; k++) if (normSouple(reponses[k]) === so) return { ok: true, accents: reponses[k] };
    return { ok: false };
  }
  function retourSaisie(res, reponses, explication) {
    if (res.cles) return (res.ok ? "<strong>Juste.</strong> Exemple de note : " : "<strong>Pas tout à fait.</strong> Il fallait noter : ") + esc(reponses[0]) + ". " + (explication || "");
    var autres = reponses.slice(1);
    if (res.ok && res.accents) return "<strong>Juste, mais attention aux accents :</strong> " + esc(res.accents) + ". " + (explication || "");
    if (res.ok) return "<strong>Juste.</strong> " + (autres.length ? "Autre réponse possible : " + autres.map(esc).join(" / ") + ". " : "") + (explication || "");
    return "<strong>Pas tout à fait.</strong> Réponse attendue : " + esc(reponses[0]) +
      (autres.length ? " (ou : " + autres.map(esc).join(" / ") + ")" : "") + ". " + (explication || "");
  }
  // Prise de notes : la réponse est juste si elle contient chaque mot-clé (« a|b » = a ou b).
  function contientCles(saisie, cles) {
    var so = normSouple(saisie);
    if (!so) return { vide: true };
    return { ok: cles.every(function (g) { return g.split("|").some(function (alt) { return so.indexOf(normSouple(alt)) !== -1; }); }), cles: true };
  }
  var ATTR_SAISIE = ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"';

  /* ---------- Documents : texte à lire ou à écouter ---------- */

  function htmlDocument(a) {
    var d = a.document;
    if (!d) return "";
    if (a.comp === "ecoute") return htmlEcoute(d);
    var source = [d.genre, d.source].filter(Boolean).join(" · ");
    return '<details class="doc-lecture" open><summary>📄 ' + esc(d.titre) + "</summary>" +
      (source ? '<p class="doc-source">' + esc(source) + "</p>" : "") +
      '<div class="texte">' + d.texte.map(function (p, k) {
        return '<p><span class="para-num" aria-label="Paragraphe ' + (k + 1) + '">' + (k + 1) + "</span>" + p + "</p>";
      }).join("") + "</div></details>";
  }

  function voixFrancaise() {
    var v = window.speechSynthesis.getVoices();
    return v.find(function (x) { return /^fr[-_]FR/i.test(x.lang); }) || v.find(function (x) { return /^fr/i.test(x.lang); });
  }
  var PRENOMS_H = /thomas|daniel|nicolas|henri|paul|jacques|antoine|olivier|mathieu|f[ée]lix|jean|luc\b|alain|fabrice|s[ée]bastien|vincent|guillaume|eddy|reed|rocko|grandpa|\bmale\b|homme/i;
  // Choisit une voix française d'homme ou de femme quand l'appareil en propose plusieurs ;
  // sinon, une seule voix avec une hauteur différente pour distinguer les personnes.
  function voixPour(code) {
    var genre = code ? code.charAt(0) : null, variante = !!(code && code.length > 1);
    var v = voixGenre(genre);
    if (variante) v.hauteur = v.hauteur * (genre === "h" ? 0.88 : 1.14);
    return v;
  }
  function voixGenre(genre) {
    var toutes = window.speechSynthesis.getVoices().filter(function (x) { return /^fr/i.test(x.lang); });
    var fr = toutes.filter(function (x) { return /^fr[-_]FR/i.test(x.lang); });
    var base = fr.length > 1 ? fr : toutes;
    var trouvee = genre === "h" ? base.find(function (x) { return PRENOMS_H.test(x.name); })
      : genre === "f" ? base.find(function (x) { return !PRENOMS_H.test(x.name); }) : null;
    if (trouvee) return { voix: trouvee, hauteur: 1 };
    return { voix: voixFrancaise(), hauteur: genre === "h" ? 0.8 : genre === "f" ? 1.15 : 1 };
  }
  function segmentsAudio(d) {
    var segs = [];
    if (d.repliques) d.repliques.forEach(function (r) {
      var g = (d.locuteurs && d.locuteurs[r.loc]) || null;
      r.texte.split(/(?<=[.!?:…])\s+/).forEach(function (ph) { segs.push({ t: ph, g: g }); });
    });
    else d.transcription.split(/(?<=[.!?:…])\s+/).forEach(function (ph) { segs.push({ t: ph, g: d.voix || null }); });
    return segs;
  }
  function htmlTranscription(d) {
    if (d.repliques) return d.repliques.map(function (r) { return '<p class="replique"><strong>' + esc(r.loc) + " :</strong> " + r.texte + "</p>"; }).join("");
    return "<p>" + d.transcription + "</p>";
  }

  function htmlEcoute(d) {
    var possible = "speechSynthesis" in window;
    var genre = [d.genre, d.source].filter(Boolean).join(" · ");
    return '<div class="doc-ecoute">' +
      '<p class="doc-source">🎧 ' + esc(d.titre) + (genre ? " · " + esc(genre) : "") + "</p>" +
      (possible
        ? '<div class="lecteur">' +
            '<button class="btn btn-principal" type="button" data-lire>Écouter</button>' +
            '<button class="btn" type="button" data-stop>Arrêter</button>' +
            '<label class="vitesse">Vitesse <select data-vitesse><option value="0.8">lente</option><option value="0.9" selected>normale</option><option value="1.05">rapide</option></select></label>' +
            '<p class="lecteur-note" data-note></p>' +
          "</div>"
        : '<p class="alerte">Ce navigateur ne sait pas lire le texte à voix haute. Ouvre le site dans Chrome, Edge ou Safari, ou utilise la transcription.</p>') +
      '<div class="transcription-bloc">' +
        '<button type="button" class="btn-mini" data-transcr' + (possible ? " disabled" : "") + ">Afficher la transcription</button>" +
        (possible ? ' <span class="petit" data-transcr-note>Disponible après une écoute complète ou après la vérification.</span>' : "") +
        '<div class="transcription" data-transcr-texte hidden>' + htmlTranscription(d) + "</div>" +
      "</div></div>";
  }

  function brancherDocument(zone, a) {
    var d = a.document;
    if (!d || a.comp !== "ecoute") return;
    var bt = zone.querySelector("[data-transcr]"), bloc = zone.querySelector("[data-transcr-texte]");
    function debloquer() {
      bt.disabled = false;
      var n = zone.querySelector("[data-transcr-note]");
      if (n) n.remove();
    }
    bt.addEventListener("click", function () {
      bloc.hidden = !bloc.hidden;
      bt.textContent = bloc.hidden ? "Afficher la transcription" : "Masquer la transcription";
    });
    zone.addEventListener("verifie", debloquer);
    if (!("speechSynthesis" in window)) return;

    var note = zone.querySelector("[data-note]");
    function verifierVoix() {
      note.textContent = voixFrancaise() ? "" : "Aucune voix française n’est installée sur cet appareil : la lecture risque d’avoir un accent étranger. Ajoute une voix française dans les réglages de langue du système.";
    }
    verifierVoix();
    window.speechSynthesis.onvoiceschanged = verifierVoix;

    zone.querySelector("[data-lire]").addEventListener("click", function () {
      var synth = window.speechSynthesis;
      synth.cancel();
      var vitesse = parseFloat(zone.querySelector("[data-vitesse]").value);
      // Phrase par phrase : certains navigateurs coupent les textes longs.
      var segs = segmentsAudio(d);
      segs.forEach(function (s, k) {
        var e = new SpeechSynthesisUtterance(s.t), v = voixPour(s.g);
        e.lang = "fr-FR"; if (v.voix) e.voice = v.voix; e.rate = vitesse; e.pitch = v.hauteur;
        if (k === segs.length - 1) e.onend = debloquer;
        synth.speak(e);
      });
    });
    zone.querySelector("[data-stop]").addEventListener("click", arreterVoix);
  }

  /* ---------- Questions à choix (QCM) ---------- */

  function htmlQuestions(qs, prefixe) {
    return '<div class="questions">' + qs.map(function (q, k) {
      return '<fieldset class="q" data-k="' + k + '">' +
        '<legend><span class="q-num">' + (k + 1) + ".</span> " + q.q + "</legend>" +
        melanger(q.options.map(function (o, j) { return { o: o, j: j }; })).map(function (x) {
          return '<label class="opt"><input type="radio" name="' + prefixe + "-q" + k + '" value="' + x.j + '"><span>' + x.o + "</span></label>";
        }).join("") +
        '<p class="retour" hidden></p></fieldset>';
    }).join("") + "</div>" + htmlScore();
  }

  function brancherQuestions(zone, qs, u, i) {
    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, manquantes = 0;
      qs.forEach(function (q, k) {
        var fs = zone.querySelector('fieldset[data-k="' + k + '"]');
        var choix = fs.querySelector("input:checked");
        var r = fs.querySelector(".retour");
        fs.classList.remove("juste", "faux");
        r.hidden = false;
        if (!choix) { manquantes++; r.textContent = "Choisis une réponse."; return; }
        var j = parseInt(choix.value, 10), ok = j === q.answer;
        if (ok) score++;
        fs.classList.add(ok ? "juste" : "faux");
        var pourquoi = !ok && q.pourquoi && q.pourquoi[j] ? "Tu as choisi « " + q.options[j] + " » : " + q.pourquoi[j] + " " : "";
        r.innerHTML = (ok ? "<strong>Juste.</strong> " : "<strong>Pas tout à fait.</strong> " + pourquoi + "Réponse attendue : " + q.options[q.answer] + ". ") + (q.explication || "");
      });
      var s = zone.querySelector(".score");
      if (manquantes) { s.textContent = pluriel(manquantes, "question") + " sans réponse."; return; }
      s.textContent = messageScore(score, qs.length);
      enregistrer(u, i, score, qs.length);
    });
  }

  function rendreQcm(zone, a, u, i) {
    zone.innerHTML = htmlConsigne(a) + htmlDocument(a) + htmlQuestions(a.questions, cle(u, i));
    brancherDocument(zone, a);
    brancherQuestions(zone, a.questions, u, i);
  }

  /* ---------- Vrai ou faux justifié ---------- */

  function rendreVraiFaux(zone, a, u, i) {
    var p = cle(u, i);
    zone.innerHTML = htmlConsigne(a) + htmlDocument(a) +
      '<div class="questions">' + a.items.map(function (it, k) {
        var opts = melanger(it.justifs.map(function (t, j) { return { t: t, j: j }; }));
        return '<fieldset class="q vf" data-k="' + k + '">' +
          '<legend><span class="q-num">' + (k + 1) + ".</span> " + it.affirmation + "</legend>" +
          '<div class="vf-choix">' +
            '<label class="opt"><input type="radio" name="' + p + "-vf" + k + '" value="1"><span>Vrai</span></label>' +
            '<label class="opt"><input type="radio" name="' + p + "-vf" + k + '" value="0"><span>Faux</span></label>' +
          "</div>" +
          '<div class="vf-justif" role="group" aria-label="Justification"><p class="label">Justifie : quelle phrase du document le prouve ?</p>' +
            opts.map(function (x) {
              return '<label class="opt"><input type="radio" name="' + p + "-j" + k + '" value="' + x.j + '"><span class="citation">« ' + esc(x.t) + " »</span></label>";
            }).join("") +
          "</div>" +
          '<p class="retour" hidden></p></fieldset>';
      }).join("") + "</div>" + htmlScore();
    brancherDocument(zone, a);

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, manquantes = 0;
      a.items.forEach(function (it, k) {
        var fs = zone.querySelector('fieldset[data-k="' + k + '"]');
        var vf = fs.querySelector('.vf-choix input:checked'), jc = fs.querySelector('.vf-justif input:checked'), j = jc ? jc.value : "";
        var r = fs.querySelector(".retour");
        fs.classList.remove("juste", "faux");
        r.hidden = false;
        if (!vf || j === "") { manquantes++; r.textContent = "Réponds vrai ou faux, puis choisis la justification."; return; }
        var okVf = (vf.value === "1") === !!it.vrai, okJ = parseInt(j, 10) === it.answer;
        score += (okVf ? 1 : 0) + (okJ ? 1 : 0);
        fs.classList.add(okVf && okJ ? "juste" : "faux");
        r.innerHTML = (okVf ? "<strong>" + (it.vrai ? "Vrai" : "Faux") + " : juste.</strong> " : "<strong>C’est " + (it.vrai ? "vrai" : "faux") + ".</strong> ") +
          (okJ ? "Bonne justification. " : "La phrase qui le prouve : « " + esc(it.justifs[it.answer]) + " ». ") + (it.explication || "");
      });
      var s = zone.querySelector(".score");
      if (manquantes) { s.textContent = pluriel(manquantes, "affirmation") + " à compléter."; return; }
      var total = a.items.length * 2;
      s.textContent = messageScore(score, total) + " (un point pour vrai ou faux, un point pour la justification)";
      enregistrer(u, i, score, total);
    });
  }

  /* ---------- Association ---------- */

  function rendreAssociation(zone, a, u, i) {
    var defs = melanger(a.items.map(function (it, k) { return { k: k, t: it.definition }; }));
    var options = '<option value="">Choisir une définition</option>' +
      defs.map(function (d) { return '<option value="' + d.k + '">' + d.t + "</option>"; }).join("");
    zone.innerHTML =
      htmlConsigne(a) +
      '<div class="assoc">' + a.items.map(function (it, k) {
        var id = cle(u, i) + "-m" + k;
        return '<div class="assoc-ligne" data-k="' + k + '"><label for="' + id + '" class="assoc-terme">' + it.terme + "</label>" +
          '<select id="' + id + '">' + options + "</select></div>";
      }).join("") + "</div>" +
      '<div class="actions"><button class="btn" type="button" data-verifier>Vérifier</button><p class="score" aria-live="polite"></p></div>';

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, vides = 0;
      a.items.forEach(function (_, k) {
        var l = zone.querySelector('.assoc-ligne[data-k="' + k + '"]');
        var v = l.querySelector("select").value;
        l.classList.remove("juste", "faux");
        if (v === "") { vides++; return; }
        var ok = parseInt(v, 10) === k;
        if (ok) score++;
        l.classList.add(ok ? "juste" : "faux");
      });
      var s = zone.querySelector(".score");
      if (vides) { s.textContent = pluriel(vides, "association") + " à compléter."; return; }
      s.textContent = "Score : " + score + " sur " + a.items.length + (score === a.items.length ? ". Parfait." : ". Corrige les lignes en rouge et vérifie à nouveau.");
      enregistrer(u, i, score, a.items.length);
    });
  }

  /* ---------- Phrases à trous (choix dans une liste) ---------- */

  function rendreTrous(zone, a, u, i) {
    zone.innerHTML =
      (a.fiche ? '<details class="fiche" open><summary>La règle en bref</summary><div class="fiche-corps">' + a.fiche + "</div></details>" : "") +
      htmlConsigne(a) + htmlDocument(a) +
      '<ol class="phrases">' + a.phrases.map(function (p, k) {
        var opts = melanger(p.options.map(function (o, j) { return { j: j, o: o }; }));
        var sel = '<select aria-label="Réponse pour la phrase ' + (k + 1) + '"><option value="">…</option>' +
          opts.map(function (x) { return '<option value="' + x.j + '">' + x.o + "</option>"; }).join("") + "</select>";
        var espace = /^[,.;:!?…]/.test(p.apres) ? "" : " ";
        return '<li class="phrase" data-k="' + k + '"><p>' + (p.avant ? p.avant + " " : "") + sel + espace + p.apres + "</p>" +
          '<p class="retour" hidden></p></li>';
      }).join("") + "</ol>" +
      '<div class="actions"><button class="btn" type="button" data-verifier>Vérifier</button><p class="score" aria-live="polite"></p></div>';
    brancherDocument(zone, a);

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, vides = 0;
      a.phrases.forEach(function (p, k) {
        var li = zone.querySelector('.phrase[data-k="' + k + '"]');
        var v = li.querySelector("select").value;
        var r = li.querySelector(".retour");
        li.classList.remove("juste", "faux");
        if (v === "") { vides++; r.hidden = true; return; }
        var ok = parseInt(v, 10) === p.answer;
        if (ok) score++;
        li.classList.add(ok ? "juste" : "faux");
        r.hidden = false;
        r.innerHTML = (ok ? "<strong>Juste.</strong> " : "<strong>Pas tout à fait.</strong> Réponse attendue : " + p.options[p.answer] + ". ") + p.explication;
      });
      var s = zone.querySelector(".score");
      if (vides) { s.textContent = pluriel(vides, "phrase") + " à compléter."; return; }
      s.textContent = "Score : " + score + " sur " + a.phrases.length + ".";
      enregistrer(u, i, score, a.phrases.length);
    });
  }

  /* ---------- Réponse tapée : correction, transformation, reformulation ---------- */

  var LIBELLES_ENONCE = { correction: "Phrase à corriger", transformation: "Phrase de départ", reformulation: "Phrase de départ", saisie: "" };

  function rendreSaisie(zone, a, u, i) {
    var lib = a.libelle != null ? a.libelle : LIBELLES_ENONCE[a.type] || "";
    zone.innerHTML =
      (a.fiche ? '<details class="fiche" open><summary>La règle en bref</summary><div class="fiche-corps">' + a.fiche + "</div></details>" : "") +
      htmlConsigne(a) + htmlDocument(a) +
      '<p class="petit">Tape ta réponse. Les majuscules et la ponctuation ne comptent pas ; les accents oubliés sont signalés.</p>' +
      '<ol class="phrases">' + a.items.map(function (it, k) {
        var plein = !it.avant && !it.apres;
        var champ = '<input type="text" class="champ-saisie' + (plein ? " plein" : "") + '" aria-label="Réponse ' + (k + 1) + '"' + ATTR_SAISIE + ">";
        var espace = it.apres && /^[,.;:!?…]/.test(it.apres) ? "" : " ";
        return '<li class="phrase saisie" data-k="' + k + '">' +
          (it.enonce ? '<p class="enonce' + (a.type === "correction" ? " fautive" : "") + '">' + (lib ? '<span class="enonce-lib">' + lib + " :</span> " : "") + it.enonce + "</p>" : "") +
          (it.aide ? '<p class="aide">' + it.aide + "</p>" : "") +
          '<p class="ligne-saisie">' + (it.avant ? it.avant + " " : "") + champ + (it.apres ? espace + it.apres : "") + "</p>" +
          '<p class="retour" hidden></p></li>';
      }).join("") + "</ol>" + htmlScore();
    brancherDocument(zone, a);

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, vides = 0;
      a.items.forEach(function (it, k) {
        var li = zone.querySelector('.phrase[data-k="' + k + '"]');
        var v = li.querySelector("input").value;
        var res = it.cles ? contientCles(v, it.cles) : comparer(v, it.reponses);
        var r = li.querySelector(".retour");
        li.classList.remove("juste", "faux");
        if (res.vide) { vides++; r.hidden = true; return; }
        if (res.ok) score++;
        li.classList.add(res.ok ? "juste" : "faux");
        r.hidden = false;
        r.innerHTML = retourSaisie(res, it.reponses, it.explication);
      });
      var s = zone.querySelector(".score");
      if (vides) { s.textContent = pluriel(vides, "réponse") + " à écrire."; return; }
      s.textContent = messageScore(score, a.items.length);
      enregistrer(u, i, score, a.items.length);
    });
  }

  /* ---------- Texte à compléter ---------- */

  function rendreTexteATrous(zone, a, u, i) {
    function champ(n) {
      var t = a.trous[n - 1];
      if (!t) return "";
      var c = t.options
        ? '<select aria-label="Trou ' + n + '"><option value="">…</option>' + melanger(t.options.map(function (o, j) { return { o: o, j: j }; })).map(function (x) {
            return '<option value="' + x.j + '">' + x.o + "</option>";
          }).join("") + "</select>"
        : '<input type="text" aria-label="Trou ' + n + '" size="' + Math.max(6, Math.min(22, t.reponses[0].length + 2)) + '"' + ATTR_SAISIE + ">";
      return '<span class="trou" data-t="' + (n - 1) + '"><span class="trou-num" aria-hidden="true">' + n + "</span>" + c +
        (t.indice ? '<span class="indice">(' + t.indice + ")</span>" : "") + "</span>";
    }
    zone.innerHTML =
      (a.fiche ? '<details class="fiche" open><summary>La règle en bref</summary><div class="fiche-corps">' + a.fiche + "</div></details>" : "") +
      htmlConsigne(a) + htmlDocument(a) +
      (a.trous.some(function (t) { return !t.options; }) ? '<p class="petit">Les majuscules ne comptent pas ; les accents oubliés sont signalés.</p>' : "") +
      '<div class="texte texte-trous">' + a.texte.map(function (p) {
        return "<p>" + p.replace(/\{\{(\d+)\}\}/g, function (_, n) { return champ(parseInt(n, 10)); }) + "</p>";
      }).join("") + "</div>" +
      '<ol class="corrections" hidden></ol>' + htmlScore();
    brancherDocument(zone, a);

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, vides = 0, lignes = [];
      a.trous.forEach(function (t, k) {
        var sp = zone.querySelector('.trou[data-t="' + k + '"]');
        var el = sp.querySelector("input, select");
        sp.classList.remove("juste", "faux");
        var res;
        if (t.options) res = el.value === "" ? { vide: true } : { ok: parseInt(el.value, 10) === t.answer };
        else res = comparer(el.value, t.reponses);
        if (res.vide) { vides++; return; }
        if (res.ok) score++;
        sp.classList.add(res.ok ? "juste" : "faux");
        var attendu = t.options ? [t.options[t.answer]] : t.reponses;
        lignes.push('<li value="' + (k + 1) + '" class="' + (res.ok ? "juste" : "faux") + '">' + retourSaisie(res, attendu, t.explication) + "</li>");
      });
      var s = zone.querySelector(".score"), corr = zone.querySelector(".corrections");
      if (vides) { s.textContent = pluriel(vides, "trou") + " à compléter."; return; }
      corr.innerHTML = lignes.join(""); corr.hidden = false;
      s.textContent = messageScore(score, a.trous.length);
      enregistrer(u, i, score, a.trous.length);
    });
  }

  /* ---------- Choix du registre ---------- */

  var REGISTRES = ["familier", "courant", "soutenu"];

  function rendreRegistre(zone, a, u, i) {
    var p = cle(u, i), choix = a.choix || REGISTRES;
    zone.innerHTML = htmlConsigne(a) +
      '<div class="questions">' + a.items.map(function (it, k) {
        return '<fieldset class="q registre" data-k="' + k + '">' +
          '<legend><span class="q-num">' + (k + 1) + '.</span> <span class="citation">« ' + it.phrase + " »</span></legend>" +
          (it.contexte ? '<p class="petit">' + it.contexte + "</p>" : "") +
          '<div class="choix-ligne">' + choix.map(function (c) {
            return '<label class="opt"><input type="radio" name="' + p + "-r" + k + '" value="' + c + '"><span>' + c + "</span></label>";
          }).join("") + "</div>" +
          '<p class="retour" hidden></p></fieldset>';
      }).join("") + "</div>" + htmlScore();

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, manquantes = 0;
      a.items.forEach(function (it, k) {
        var fs = zone.querySelector('fieldset[data-k="' + k + '"]');
        var c = fs.querySelector("input:checked"), r = fs.querySelector(".retour");
        fs.classList.remove("juste", "faux");
        r.hidden = false;
        if (!c) { manquantes++; r.textContent = "Choisis un registre."; return; }
        var ok = c.value === it.answer;
        if (ok) score++;
        fs.classList.add(ok ? "juste" : "faux");
        r.innerHTML = (ok ? "<strong>Juste.</strong> " : "<strong>Pas tout à fait :</strong> registre " + it.answer + ". ") + (it.explication || "");
      });
      var s = zone.querySelector(".score");
      if (manquantes) { s.textContent = pluriel(manquantes, "phrase") + " sans réponse."; return; }
      s.textContent = messageScore(score, a.items.length);
      enregistrer(u, i, score, a.items.length);
    });
  }

  /* ---------- Écriture ---------- */

  function htmlObjectifs(a) {
    return a.objectifs && a.objectifs.length
      ? '<div class="objectifs"><p class="label">Objectifs</p><ul>' + a.objectifs.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ul></div>"
      : "";
  }

  function rendreEcriture(zone, a, u, i) {
    var k = cle(u, i), id = k + "-texte";
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      htmlObjectifs(a) +
      (a.depart ? '<div class="depart"><p class="label">Texte de départ</p><div class="texte">' + a.depart.split(/\n+/).map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div></div>" : "") +
      '<p class="petit">Entre ' + a.min + " et " + a.max + " mots. Ton texte est enregistré automatiquement" +
        (a.depart ? " ; le texte de départ est déjà dans le cahier, modifie-le directement" : "") + ".</p>" +
      '<label for="' + id + '" class="sr-only">Ton texte</label>' +
      '<textarea id="' + id + '" class="cahier seyes" spellcheck="false" rows="14"></textarea>' +
      '<p class="compteur" aria-live="polite"></p>' +
      '<fieldset class="grille"><legend>Avant de terminer, relis-toi</legend>' +
        a.checklist.map(function (c) { return '<label class="opt"><input type="checkbox"><span>' + c + "</span></label>"; }).join("") +
      "</fieldset>" +
      '<div class="actions">' +
        '<button class="btn" type="button" data-copier>Copier pour une correction par Claude</button>' +
        '<button class="btn btn-principal" type="button" data-terminer>J’ai terminé</button>' +
        '<p class="score" aria-live="polite"></p>' +
      "</div>" +
      '<details class="modele"><summary>Voir un exemple de réponse</summary><pre>' + esc(a.modele) + "</pre>" +
      '<p class="petit">Compare la structure et les formules, pas le contenu exact : ton texte peut être différent et tout aussi juste.</p></details>';

    var ta = zone.querySelector("textarea"), compteur = zone.querySelector(".compteur"), score = zone.querySelector(".score");
    ta.value = etat.textes[k] != null ? etat.textes[k] : (a.depart || "");

    function majCompteur() {
      var n = compterMots(ta.value);
      var m = pluriel(n, "mot");
      if (n > 0 && n < a.min) m += ", encore " + (a.min - n) + " au minimum";
      else if (n > a.max) m += ", soit " + (n - a.max) + " de trop";
      compteur.textContent = m;
      compteur.classList.toggle("hors-limite", n > a.max);
      return n;
    }
    majCompteur();

    var minuteur;
    ta.addEventListener("input", function () {
      majCompteur();
      clearTimeout(minuteur);
      minuteur = setTimeout(function () { etat.textes[k] = ta.value; sauver(); }, 600);
    });

    zone.querySelector("[data-terminer]").addEventListener("click", function () {
      etat.textes[k] = ta.value;
      var n = majCompteur();
      if (n < a.min) { sauver(); score.textContent = "Ton texte fait " + pluriel(n, "mot") + " : vise au moins " + a.min + " mots."; return; }
      var coches = zone.querySelectorAll(".grille input:checked").length;
      var manque = a.checklist.length - coches;
      enregistrer(u, i, coches, a.checklist.length); // autoévaluation : points de la grille cochés
      score.textContent = manque
        ? "Activité terminée. " + pluriel(manque, "point") + " de la grille non coché" + (manque > 1 ? "s" : "") + " : relis-les avant de demander une correction."
        : "Activité terminée. Pour progresser, fais corriger ton texte.";
    });

    zone.querySelector("[data-copier]").addEventListener("click", function () {
      if (!ta.value.trim()) { score.textContent = "Écris d’abord ton texte."; return; }
      var niv = P.niveaux.find(function (x) { return x.id === u.niveau; });
      var demande =
        "J’apprends le français (objectif : " + niv.titre.toLowerCase() + "). " +
        "Corrige ce texte : relève chaque erreur, explique-la simplement en français, " +
        "dis si le registre est adapté, puis propose une version corrigée qui reste proche de ce que j’ai écrit.\n\n" +
        "Consigne : " + a.consigne + " (" + a.min + " à " + a.max + " mots)\n\nMon texte :\n" + ta.value;
      copier(demande, function () { score.textContent = "Copié. Colle ce texte dans une conversation avec Claude."; });
    });
  }

  /* ---------- Expression orale : enregistrement au micro ---------- */

  var arretOral = null; // fonction d'arrêt de l'enregistrement en cours, appelée au changement de page

  function formatTemps(s) { var m = Math.floor(s / 60), r = s % 60; return m + ":" + (r < 10 ? "0" : "") + r; }

  function rendreOral(zone, a, u, i) {
    var k = cle(u, i);
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var micro = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    var tts = "speechSynthesis" in window;

    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      (a.situation ? '<p class="situation">' + a.situation + "</p>" : "") +
      htmlObjectifs(a) +
      '<p class="petit">Durée visée : ' + a.dureeCible + ". Tes enregistrements restent sur cet appareil et disparaissent quand tu quittes la page.</p>" +

      '<ol class="oral-etapes">' +
        '<li class="oral-etape"><h3>Prépare-toi</h3>' +
          (a.plan ? '<p>Suis ce plan :</p><ol class="plan">' + a.plan.map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ol>" : "") +
          '<p>Note quelques mots-clés, pas des phrases entières. Ces expressions peuvent t’aider :</p>' +
          '<ul class="expressions">' + a.preparation.map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul>" +
          '<div class="actions"><button class="btn" type="button" data-prep>Lancer ' + pluriel(a.prepMinutes || 1, "minute") + ' de préparation</button><span class="minuteur" data-prep-temps aria-live="polite"></span></div>' +
        "</li>" +

        '<li class="oral-etape"><h3>Enregistre-toi</h3>' +
          (micro
            ? '<div class="enregistreur">' +
                '<button class="btn btn-principal btn-rec" type="button" data-rec><span class="point-rec" aria-hidden="true"></span><span data-rec-label>Commencer l’enregistrement</span></button>' +
                '<span class="minuteur minuteur-grand" data-rec-temps aria-live="off">0:00</span>' +
              "</div>" +
              '<p class="petit" data-rec-etat aria-live="polite"></p>' +
              '<div class="prises" data-prises></div>'
            : '<p class="alerte">Ce navigateur ne permet pas d’enregistrer le son. Utilise Chrome, Edge, Firefox ou Safari récents, sur la version en ligne du site (adresse en https).</p>') +
          (SR
            ? '<div class="transcrit" data-transcrit-bloc hidden><p class="label">Ce que le navigateur a compris</p><p data-transcrit></p>' +
              '<p class="petit">Transcription automatique, approximative. Si un mot est souvent mal compris, c’est peut-être un son à travailler.</p></div>'
            : "") +
        "</li>" +

        '<li class="oral-etape"><h3>Réécoute et compare</h3>' +
          "<p>Écoute ton enregistrement, puis un exemple de réponse. Compare les idées, les expressions et le rythme.</p>" +
          (tts ? '<div class="actions"><button class="btn" type="button" data-modele>Écouter l’exemple</button><button class="btn" type="button" data-stop>Arrêter</button></div>' : "") +
          '<details class="modele"><summary>Lire l’exemple</summary><p>' + a.modele + "</p></details>" +
          '<fieldset class="grille"><legend>Évalue ta prise</legend>' +
            a.checklist.map(function (c) { return '<label class="opt"><input type="checkbox"><span>' + c + "</span></label>"; }).join("") +
          "</fieldset>" +
          '<div class="actions">' +
            (SR ? '<button class="btn" type="button" data-copier>Copier pour un retour de Claude</button>' : "") +
            '<button class="btn btn-principal" type="button" data-terminer>J’ai terminé</button>' +
            '<p class="score" aria-live="polite"></p>' +
          "</div>" +
        "</li>" +
      "</ol>";

    var score = zone.querySelector(".score");
    var nbPrises = 0;
    var transcription = etat.textes[k] || "";

    /* Préparation */
    var minPrep = null;
    zone.querySelector("[data-prep]").addEventListener("click", function () {
      var aff = zone.querySelector("[data-prep-temps]"), reste = 60 * (a.prepMinutes || 1);
      clearInterval(minPrep);
      aff.textContent = formatTemps(reste);
      minPrep = setInterval(function () {
        reste--;
        aff.textContent = reste > 0 ? formatTemps(reste) : "C’est à toi !";
        if (reste <= 0) clearInterval(minPrep);
      }, 1000);
    });

    /* Modèle lu à voix haute */
    if (tts) {
      zone.querySelector("[data-modele]").addEventListener("click", function () {
        var synth = window.speechSynthesis, voix = voixFrancaise();
        synth.cancel();
        a.modele.split(/(?<=[.!?:])\s+/).forEach(function (phrase) {
          var e = new SpeechSynthesisUtterance(phrase);
          e.lang = "fr-FR"; if (voix) e.voice = voix; e.rate = 0.95;
          synth.speak(e);
        });
      });
      zone.querySelector("[data-stop]").addEventListener("click", function () { window.speechSynthesis.cancel(); });
    }

    /* Enregistrement */
    if (micro) {
      var bouton = zone.querySelector("[data-rec]"), label = zone.querySelector("[data-rec-label]");
      var temps = zone.querySelector("[data-rec-temps]"), etatRec = zone.querySelector("[data-rec-etat]");
      var prises = zone.querySelector("[data-prises]");
      var enreg = null, flux = null, morceaux = [], chrono = null, debut = 0, reco = null, actif = false;
      var texteFinal = "";

      function arreter() {
        if (!actif) return;
        actif = false;
        clearInterval(chrono);
        try { if (enreg && enreg.state !== "inactive") enreg.stop(); } catch (e) { /* rien */ }
        try { if (reco) reco.stop(); } catch (e) { /* rien */ }
        bouton.classList.remove("en-cours");
        label.textContent = "Recommencer une prise";
        var cible = zone.querySelector("[data-transcrit]");
        if (cible && cible.textContent === "…") {
          setTimeout(function () {
            if (cible.textContent === "…") cible.textContent = "Rien n’a été reconnu : parle un peu plus fort, ou essaie avec Chrome ou Safari.";
          }, 1500);
        }
        etatRec.textContent = "Enregistrement terminé.";
      }
      arretOral = arreter;

      function demarrerReco() {
        if (!SR) return;
        texteFinal = "";
        reco = new SR();
        reco.lang = "fr-FR"; reco.continuous = true; reco.interimResults = true;
        var bloc = zone.querySelector("[data-transcrit-bloc]"), cible = zone.querySelector("[data-transcrit]");
        bloc.hidden = false; cible.textContent = "…";
        reco.onresult = function (ev) {
          var provisoire = "";
          for (var j = ev.resultIndex; j < ev.results.length; j++) {
            if (ev.results[j].isFinal) texteFinal += ev.results[j][0].transcript + " ";
            else provisoire += ev.results[j][0].transcript;
          }
          cible.textContent = (texteFinal + provisoire).trim() || "…";
        };
        // Chrome arrête la reconnaissance après un silence : on la relance tant qu'on enregistre.
        reco.onend = function () { if (actif) { try { reco.start(); } catch (e) { /* rien */ } } };
        reco.onerror = function () { /* la transcription est un bonus : on ignore ses erreurs */ };
        try { reco.start(); } catch (e) { /* rien */ }
      }

      bouton.addEventListener("click", function () {
        if (actif) { arreter(); return; }
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        etatRec.textContent = "Autorise l’accès au micro si le navigateur le demande.";
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
          flux = s; morceaux = [];
          enreg = new MediaRecorder(s);
          enreg.ondataavailable = function (e) { if (e.data && e.data.size) morceaux.push(e.data); };
          enreg.onstop = function () {
            flux.getTracks().forEach(function (t) { t.stop(); });
            var duree = Math.round((Date.now() - debut) / 1000);
            var blob = new Blob(morceaux, { type: enreg.mimeType || "audio/webm" });
            nbPrises++;
            var fig = document.createElement("figure");
            fig.className = "prise";
            fig.innerHTML = "<figcaption>Prise " + nbPrises + ", " + formatTemps(duree) + "</figcaption>";
            var audio = document.createElement("audio");
            audio.controls = true; audio.src = URL.createObjectURL(blob);
            fig.appendChild(audio);
            prises.insertBefore(fig, prises.firstChild);
            if (texteFinal.trim()) { transcription = texteFinal.trim(); etat.textes[k] = transcription; sauver(); }
          };
          enreg.start();
          actif = true; debut = Date.now();
          bouton.classList.add("en-cours");
          label.textContent = "Arrêter";
          etatRec.textContent = "Enregistrement en cours… Parle naturellement.";
          temps.textContent = "0:00";
          chrono = setInterval(function () {
            var sec = Math.round((Date.now() - debut) / 1000);
            temps.textContent = formatTemps(sec);
            if (sec >= 180) { arreter(); etatRec.textContent = "Arrêt automatique après 3 minutes."; }
          }, 250);
          demarrerReco();
        }, function () {
          etatRec.textContent = "Micro inaccessible : autorise l’accès au micro dans les réglages du navigateur, puis réessaie.";
        });
      });
    }

    /* Retour de Claude */
    var bc = zone.querySelector("[data-copier]");
    if (bc) bc.addEventListener("click", function () {
      if (!transcription) { score.textContent = "Fais d’abord un enregistrement : la transcription servira de base."; return; }
      var niv = P.niveaux.find(function (x) { return x.id === u.niveau; });
      var demande =
        "J’apprends le français (objectif : " + niv.titre.toLowerCase() + "). Voici la transcription automatique d’une réponse orale : " +
        "elle peut contenir des erreurs de reconnaissance vocale, signale-les comme possibles erreurs de prononciation.\n" +
        "Corrige mes erreurs de langue en les expliquant simplement, propose des formulations plus naturelles à l’oral, " +
        "puis dis-moi quels sons ou quels mots travailler.\n\n" +
        "Consigne : " + a.consigne + "\n\nMa réponse (transcription) :\n" + transcription;
      copier(demande, function () { score.textContent = "Copié. Colle ce texte dans une conversation avec Claude."; });
    });

    /* Fin de l'activité : autoévaluation */
    zone.querySelector("[data-terminer]").addEventListener("click", function () {
      if (micro && !nbPrises && !estFait(u, i)) { score.textContent = "Fais au moins un enregistrement avant de terminer."; return; }
      var coches = zone.querySelectorAll(".grille input:checked").length;
      enregistrer(u, i, coches, a.checklist.length);
      score.textContent = "Activité terminée : " + coches + " point" + (coches > 1 ? "s" : "") + " sur " + a.checklist.length + " de ta grille.";
    });
  }

  function copier(t, fini) {
    function secours() {
      var x = document.createElement("textarea");
      x.value = t; x.style.position = "fixed"; x.style.opacity = "0";
      document.body.appendChild(x); x.select();
      try { document.execCommand("copy"); } catch (e) { /* rien */ }
      document.body.removeChild(x); fini();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(fini, secours);
    else secours();
  }

  /* =================================================================
     Règles (mémento)
     ================================================================= */

  var indexTexte = {};
  R.forEach(function (r) {
    indexTexte[r.id] = sansAccents(r.titre + " " + r.resume + " " + r.corps.replace(/<[^>]+>/g, " "));
  });

  function afficherRegles() {
    document.title = "Règles de français";
    var nbLues = R.filter(function (r) { return etat.reglesLues[r.id]; }).length;
    app.innerHTML =
      '<header class="page-tete"><h1 class="display">Le mémento des règles</h1>' +
        '<p class="lead">Un mémento à lire à ton rythme : grammaire, conjugaison, orthographe, vocabulaire et ponctuation. ' +
        nbLues + " règle" + (nbLues > 1 ? "s lues" : " lue") + " sur " + R.length + ".</p></header>" +
      '<div class="recherche"><label for="q" class="sr-only">Rechercher une règle</label>' +
        '<input id="q" type="search" placeholder="Rechercher : subjonctif, accord, dont…" value="' + esc(recherche) + '"></div>' +
      '<div class="filtres page-filtres" role="group" aria-label="Filtrer par catégorie">' +
        [{ id: "toutes", nom: "Toutes" }].concat(CATS).map(function (c) {
          return '<button type="button" data-cat="' + c.id + '" aria-pressed="' + (filtreCat === c.id) + '">' + c.nom + "</button>";
        }).join("") +
      "</div>" +
      '<div id="liste-regles"></div>';

    document.getElementById("q").addEventListener("input", function (e) { recherche = e.target.value; rendreListeRegles(); });
    app.querySelectorAll("[data-cat]").forEach(function (b) {
      b.addEventListener("click", function () {
        filtreCat = b.dataset.cat;
        app.querySelectorAll("[data-cat]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        rendreListeRegles();
      });
    });
    rendreListeRegles();
    window.scrollTo(0, 0);
  }

  function rendreListeRegles() {
    var q = sansAccents(recherche.trim());
    var html = "";
    CATS.forEach(function (c) {
      if (filtreCat !== "toutes" && filtreCat !== c.id) return;
      var rs = R.filter(function (r) { return r.cat === c.id && (!q || indexTexte[r.id].indexOf(q) !== -1); });
      if (!rs.length) return;
      html += '<section class="cat"><h2>' + c.nom + '</h2><ul class="regles">' +
        rs.map(function (r) {
          var lue = !!etat.reglesLues[r.id];
          return '<li class="regle-item' + (lue ? " lue" : "") + '">' +
            '<a href="#/regles/' + r.id + '">' + r.titre + "</a>" +
            '<span class="niveau-tag">' + r.niveau + "</span>" +
            (lue ? '<span class="lu">Lue</span>' : "") +
            "<p>" + r.resume + "</p></li>";
        }).join("") + "</ul></section>";
    });
    document.getElementById("liste-regles").innerHTML = html ||
      '<p class="vide">Aucune règle ne correspond à « ' + esc(recherche) + ' ». Essaie un autre mot, ou choisis « Toutes ».</p>';
  }

  function afficherRegle(r) {
    document.title = r.titre;
    var idx = R.indexOf(r), prec = R[idx - 1], suiv = R[idx + 1];
    var cat = CATS.find(function (c) { return c.id === r.cat; });
    var lue = !!etat.reglesLues[r.id];
    var voir = (r.voir || []).map(regleParId).filter(Boolean);
    var unites = P.unites.filter(function (u) {
      return u.activites && u.activites.some(function (a) { return (a.regles || []).indexOf(r.id) !== -1; });
    });

    app.innerHTML =
      '<nav class="fil"><a href="#/regles">Règles</a></nav>' +
      '<article class="regle">' +
        '<header class="regle-tete"><p class="label regle-cat">' + cat.nom + ' <span class="niveau-tag">' + r.niveau + "</span></p>" +
          '<h1 class="display regle-titre">' + r.titre + '</h1><p class="lead">' + r.resume + "</p></header>" +
        '<div class="regle-corps">' + r.corps + "</div>" +
        '<div class="actions"><button type="button" class="btn' + (lue ? "" : " btn-principal") + '" id="lue">' +
          (lue ? "Marquer comme non lue" : "J’ai lu cette règle") + "</button></div>" +
        (voir.length ? '<aside class="voir"><h2>Voir aussi</h2><ul>' + voir.map(function (v) {
          return '<li><a href="#/regles/' + v.id + '">' + v.titre + "</a></li>";
        }).join("") + "</ul></aside>" : "") +
        (unites.length ? '<aside class="voir"><h2>Pour t’entraîner</h2><ul>' + unites.map(function (u) {
          return '<li><a href="#/unite/' + u.id + '">Unité ' + u.id + " : " + u.titre + "</a></li>";
        }).join("") + "</ul></aside>" : "") +
      "</article>" +
      '<nav class="regle-nav" aria-label="Règles voisines">' +
        (prec ? '<a href="#/regles/' + prec.id + '">‹ ' + prec.titre + "</a>" : "<span></span>") +
        (suiv ? '<a href="#/regles/' + suiv.id + '">' + suiv.titre + " ›</a>" : "<span></span>") +
      "</nav>";

    document.getElementById("lue").addEventListener("click", function () {
      if (etat.reglesLues[r.id]) delete etat.reglesLues[r.id];
      else etat.reglesLues[r.id] = new Date().toISOString().slice(0, 10);
      sauver();
      afficherRegle(r);
    });
    window.scrollTo(0, 0);
  }

  /* =================================================================
     Application installée et rappels (notifications)
     ================================================================= */

  var promptInstall = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); promptInstall = e; });

  function estIOS() { return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); }
  function estInstallee() { return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true; }
  function pushPossible() { return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; }

  function enregistrerSW() {
    if (!("serviceWorker" in navigator)) return;
    if (location.protocol !== "https:" && location.hostname !== "localhost") return;
    navigator.serviceWorker.register("sw.js").catch(function () { /* hors ligne indisponible */ });
  }

  function cleVapid(b64) {
    var pad = "=".repeat((4 - b64.length % 4) % 4);
    var raw = atob((b64 + pad).replace(/-/g, "+").replace(/_/g, "/"));
    var out = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }

  function enregistrerAbonnement(abo, heure, actif) {
    var json = abo.toJSON ? abo.toJSON() : abo;
    return sb.from("rappels").upsert({
      endpoint: json.endpoint, user_id: utilisateur.id, abonnement: json,
      heure: heure, fuseau: Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Paris",
      actif: actif, maj: new Date().toISOString()
    }, { onConflict: "endpoint" });
  }

  function activerRappels(heure) {
    if (!C.vapidPublicKey) return Promise.reject(new Error("La clé de notification (vapidPublicKey) manque dans config.js."));
    return Notification.requestPermission().then(function (perm) {
      if (perm !== "granted") throw new Error("Les notifications sont refusées. Autorise-les dans les réglages du téléphone (Réglages › Notifications › " + (C.nomApp || "Mon français") + ").");
      return navigator.serviceWorker.ready;
    }).then(function (reg) {
      return reg.pushManager.getSubscription().then(function (abo) {
        return abo || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: cleVapid(C.vapidPublicKey) });
      });
    }).then(function (abo) {
      return enregistrerAbonnement(abo, heure, true);
    }).then(function (res) {
      if (res && res.error) throw new Error("Enregistrement impossible : " + res.error.message + ". As-tu exécuté supabase-rappels.sql ?");
      etat.reglages.rappel = { actif: true, heure: heure };
      sauver();
    });
  }

  function desactiverRappels() {
    return navigator.serviceWorker.ready.then(function (reg) { return reg.pushManager.getSubscription(); }).then(function (abo) {
      etat.reglages.rappel = { actif: false, heure: (etat.reglages.rappel || {}).heure || "19:00" };
      sauver();
      if (!abo) return;
      var endpoint = abo.endpoint;
      return abo.unsubscribe().then(function () { return sb.from("rappels").update({ actif: false }).eq("endpoint", endpoint); });
    });
  }

  function notificationTest() {
    return navigator.serviceWorker.ready.then(function (reg) {
      return reg.showNotification("Summer t’attend 🐾", {
        body: "C’est l’heure de ton français ! Une activité de dix minutes suffit pour garder ta série.",
        icon: "icones/icone-192.png", badge: "icones/badge-96.png", data: { url: "./" }
      });
    });
  }

  /* =================================================================
     Profil
     ================================================================= */

  function afficherProfil() {
    document.title = "Mon profil";
    var rap = etat.reglages.rappel || { actif: false, heure: "19:00" };
    var installee = estInstallee();

    var blocRappels;
    if (modeLocal) {
      blocRappels = '<p class="alerte">Les rappels demandent un compte : configure d’abord Supabase.</p>';
    } else if (estIOS() && !installee) {
      blocRappels = '<p>Sur iPhone, les rappels ne fonctionnent qu’une fois l’application ajoutée à l’écran d’accueil (voir ci-dessous). Ouvre-la ensuite depuis son icône et reviens sur cette page.</p>';
    } else if (!pushPossible()) {
      blocRappels = '<p class="alerte">Ce navigateur ne permet pas les notifications. Utilise Safari sur iPhone (application installée), ou Chrome, Edge ou Firefox.</p>';
    } else {
      blocRappels =
        '<div class="reglage-ligne"><label for="r-heure">Heure du rappel</label><input id="r-heure" type="time" value="' + esc(rap.heure || "19:00") + '"></div>' +
        '<p class="petit">Si l’objectif du jour n’est pas atteint à cette heure-là, tu reçois un petit rappel. Et si ta série est en danger, un dernier message arrive vers 21 h 30.</p>' +
        '<div class="actions">' +
          (rap.actif && Notification.permission === "granted"
            ? '<button type="button" class="btn btn-principal" id="r-maj">Enregistrer l’heure</button><button type="button" class="btn" id="r-test">Tester une notification</button><button type="button" class="btn-lien" id="r-off">Couper les rappels</button>'
            : '<button type="button" class="btn btn-principal" id="r-on">🔔 Activer les rappels</button>') +
        "</div>" +
        '<p class="petit" id="r-msg" aria-live="polite"></p>';
    }

    var blocInstall = installee
      ? '<p>✓ Tu utilises l’application installée. Elle se met à jour toute seule.</p>'
      : estIOS()
        ? '<ol class="etapes-install"><li>Ouvre ce site dans <strong>Safari</strong>.</li><li>Touche le bouton <strong>Partager</strong> (le carré avec une flèche vers le haut).</li><li>Choisis <strong>Sur l’écran d’accueil</strong>, puis <strong>Ajouter</strong>.</li><li>Ouvre l’application depuis sa nouvelle icône.</li></ol>'
        : '<p>Sur ordinateur, le site fonctionne tel quel. Sur téléphone Android, tu peux aussi l’installer comme une application.</p>' +
          '<button type="button" class="btn" id="installer"' + (promptInstall ? "" : " hidden") + '>Installer l’application</button>';

    app.innerHTML =
      '<header class="page-tete profil-tete">' + ILL.bao("content", "profil-bao") +
        '<div><h1 class="display">' + esc(profil.prenom || "Mon profil") + "</h1>" +
        (modeLocal
          ? '<p class="alerte">Mode local : la progression est enregistrée dans ce navigateur uniquement. Pour la synchroniser, configure Supabase (voir le README).</p>'
          : '<p class="lead">Connectée avec ' + esc(utilisateur.email) + ".</p>") +
        '<p class="profil-serie">' + FLAMME + " " + pluriel(serie(), "jour") + " de suite, record : " + pluriel(meilleureSerie(), "jour") + "</p></div>" +
      "</header>" +

      '<section class="panneau"><h2 class="petit-titre">🎯 Objectif quotidien</h2>' +
        '<p class="petit">Combien d’activités veux-tu faire chaque jour ? Mieux vaut un petit objectif tenu tous les jours qu’un grand objectif abandonné.</p>' +
        '<div class="niv-choix" role="group" aria-label="Objectif quotidien">' +
          [1, 2, 3, 4].map(function (o) {
            return '<button type="button" data-obj="' + o + '" aria-pressed="' + (objectif() === o) + '">' + pluriel(o, "activité") + "</button>";
          }).join("") +
        "</div>" +
      "</section>" +

      '<section class="panneau"><h2 class="petit-titre">🔔 Rappels quotidiens</h2>' + blocRappels + "</section>" +

      '<section class="panneau"><h2 class="petit-titre">📱 L’application sur le téléphone</h2>' + blocInstall + "</section>" +

      '<section class="panneau"><h2 class="petit-titre">Prénom</h2>' +
        '<form class="profil-form" id="form-profil">' +
          '<div class="champ"><label for="p-prenom">Prénom affiché</label><input id="p-prenom" autocomplete="given-name" value="' + esc(profil.prenom) + '"></div>' +
          '<button class="btn" type="submit">Enregistrer le prénom</button><span class="petit" id="p-msg" aria-live="polite"></span>' +
        "</form>" +
      "</section>" +

      '<div class="actions profil-actions">' +
        (modeLocal ? "" : '<button type="button" class="btn" id="deconnexion">Se déconnecter</button>') +
        '<button type="button" class="btn-lien" id="effacer">Effacer toute ma progression</button>' +
      "</div>";

    app.querySelectorAll("[data-obj]").forEach(function (b) {
      b.addEventListener("click", function () {
        etat.reglages.objectif = parseInt(b.dataset.obj, 10);
        app.querySelectorAll("[data-obj]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        sauver(); majBadge();
      });
    });

    var msg = document.getElementById("r-msg");
    function dire(t) { if (msg) msg.textContent = t; }
    function heure() { return document.getElementById("r-heure").value || "19:00"; }
    var bOn = document.getElementById("r-on");
    if (bOn) bOn.addEventListener("click", function () {
      bOn.disabled = true; dire("Activation…");
      activerRappels(heure()).then(function () { afficherProfil(); toast("<strong>Rappels activés !</strong> À demain, " + (profil.prenom ? esc(profil.prenom) : "") + " 🐾", "content"); },
        function (e) { bOn.disabled = false; dire(e.message); });
    });
    var bMaj = document.getElementById("r-maj");
    if (bMaj) bMaj.addEventListener("click", function () {
      dire("Enregistrement…");
      activerRappels(heure()).then(function () { dire("Heure enregistrée : " + heure() + "."); }, function (e) { dire(e.message); });
    });
    var bTest = document.getElementById("r-test");
    if (bTest) bTest.addEventListener("click", function () { notificationTest().then(function () { dire("Notification envoyée."); }, function (e) { dire(e.message); }); });
    var bOff = document.getElementById("r-off");
    if (bOff) bOff.addEventListener("click", function () { desactiverRappels().then(afficherProfil); });

    var bInst = document.getElementById("installer");
    if (bInst) bInst.addEventListener("click", function () {
      if (!promptInstall) return;
      promptInstall.prompt();
      promptInstall.userChoice.then(function () { promptInstall = null; afficherProfil(); });
    });

    document.getElementById("form-profil").addEventListener("submit", function (e) {
      e.preventDefault();
      profil.prenom = document.getElementById("p-prenom").value.trim();
      sauver(); rendreNav();
      document.getElementById("p-msg").textContent = "Prénom enregistré.";
    });

    var dec = document.getElementById("deconnexion");
    if (dec) dec.addEventListener("click", function () {
      dec.disabled = true;
      (sale ? envoyer() : Promise.resolve()).then(function () { return sb.auth.signOut(); }).then(function () {
        location.hash = "#/";
      });
    });

    document.getElementById("effacer").addEventListener("click", function () {
      if (!confirm("Effacer toutes tes réponses, tes textes, ta série et tes règles lues ? Cette action est définitive.")) return;
      var reglages = etat.reglages;
      etat = vide(); etat.reglages = reglages; sauver(); afficherProfil();
    });
    window.scrollTo(0, 0);
  }

  /* =================================================================
     Synchronisation au retour sur l'onglet, protection à la fermeture
     ================================================================= */

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible" || modeLocal || !utilisateur || sale) return;
    var h = location.hash.replace(/^#\/?/, "");
    if (h.indexOf("unite") === 0) return; // ne pas perturber un exercice en cours
    chargerDistant().then(route);
  });

  window.addEventListener("beforeunload", function (e) {
    if (sale) { envoyer(); e.preventDefault(); e.returnValue = ""; }
  });

  enregistrerSW();
  demarrer();
})();
