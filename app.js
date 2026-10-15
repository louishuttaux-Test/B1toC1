(function () {
  "use strict";

  var P = window.PARCOURS, R = window.REGLES, CATS = window.CATEGORIES, THEMES = window.THEMES;
  var C = window.CONFIG || {};
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

  function vide() { return { activites: {}, textes: {}, unites: {}, reglesLues: {} }; }
  function normaliser(e) {
    e = e && typeof e === "object" ? e : {};
    ["activites", "textes", "unites", "reglesLues"].forEach(function (k) {
      if (!e[k] || typeof e[k] !== "object") e[k] = {};
    });
    return e;
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
    chargerDistant().then(function () { pret = true; route(); });
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

  function rendreNav() {
    if (!modeLocal && !utilisateur) { nav.innerHTML = ""; return; }
    var h = location.hash.replace(/^#\/?/, "");
    var section = ["regles", "profil", "progression"].find(function (x) { return h.indexOf(x) === 0; }) || "parcours";
    function lien(href, nom, id) {
      return '<a href="' + href + '"' + (section === id ? ' aria-current="page"' : "") + ">" + nom + "</a>";
    }
    nav.innerHTML =
      lien("#/", "Parcours", "parcours") +
      lien("#/progression", "Progression", "progression") +
      lien("#/regles", "Règles", "regles") +
      lien("#/profil", esc(profil.prenom || "Mon profil"), "profil").replace("<a ", '<a class="nav-profil" ') +
      '<span id="statut" class="statut' + (dernierStatut.err ? " erreur" : "") + '" aria-live="polite">' +
        (modeLocal ? "" : esc(dernierStatut.t)) + "</span>";
  }

  function route() {
    arreterVoix();
    if (!pret) return;
    if (modeRecup) return afficherNouveauMdp();
    rendreNav();
    if (!modeLocal && !utilisateur) return afficherConnexion();

    var h = location.hash.replace(/^#\/?/, "").split("/");
    if (h[0] === "unite") {
      var u = P.unites.find(function (x) { return String(x.id) === h[1]; });
      if (u && u.activites) {
        var i = parseInt(h[2], 10);
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

  function cle(u, i) { return "u" + u.id + "-a" + i; }
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
        '<div class="auth-intro"><p class="label">Du B1 au C1</p><h1 class="display">Progresser en français</h1></div>' +
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

  var COMPETENCES = [
    { id: "lecture", type: "lecture", nom: "Compréhension écrite" },
    { id: "ecoute", type: "ecoute", nom: "Compréhension orale" },
    { id: "vocabulaire", type: "association", nom: "Vocabulaire" },
    { id: "grammaire", type: "trous", nom: "Grammaire" },
    { id: "ecriture", type: "ecriture", nom: "Production écrite" },
    { id: "oral", type: "oral", nom: "Expression orale" }
  ];
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
    var acts = toutesActivites().filter(function (x) { return x.a.type === c.type; });
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
    var acts = toutesActivites().filter(function (x) { return (!type || x.a.type === type) && !passee(x.u); });
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

  function afficherAccueil() {
    document.title = "Mon parcours de français";
    var dispo = P.unites.filter(function (u) { return u.activites; });
    var reprise = dispo.find(function (u) { return !terminee(u) && !passee(u); });
    var commence = Object.keys(etat.activites).length > 0;
    var rj = regleDuJour();
    var comps = COMPETENCES.map(statsCompetence);

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-texte">' +
          '<p class="hero-sur">' + (profil.prenom ? "Bonjour " + esc(profil.prenom) + " | " : "") + "du B1 au C1</p>" +
          '<h1 class="display hero-titre">Progresser en français</h1>' +
          '<p class="hero-meta">' + P.unites.length + " unités, " + COMPETENCES.length + " compétences, " + R.length + " règles</p>" +
          (reprise
            ? '<a class="btn btn-contour" href="#/unite/' + reprise.id + '"><span class="play" aria-hidden="true"></span>' + (commence ? "Reprendre" : "Commencer") + "</a>"
            : '<p class="hero-meta">Toutes les unités disponibles sont faites ou passées.</p>') +
        "</div>" +
        (reprise
          ? '<a class="hero-carte" href="#/unite/' + reprise.id + '">' +
              '<span class="label">' + (nbFaites(reprise) ? "Unité en cours" : "Prochaine unité") + "</span>" +
              '<span class="hero-carte-num">' + pad(reprise.id) + "</span>" +
              '<span class="hero-carte-titre">' + reprise.titre + "</span>" +
              '<span class="prog">' + jauge(pct(nbFaites(reprise), reprise.activites.length)) +
                '<span class="pct">' + pct(nbFaites(reprise), reprise.activites.length) + " %</span></span>" +
            "</a>"
          : "") +
      "</section>" +

      '<section class="competences-mini" aria-labelledby="t-comp">' +
        '<div class="titre-bloc"><p class="label">Tes</p><h2 class="display" id="t-comp">Compétences</h2>' +
          '<a class="lien-fort" href="#/progression">Voir la progression détaillée</a></div>' +
        '<ul class="comp-mini">' + comps.map(function (c) {
          var p = pct(c.faites, c.total);
          return "<li><span class=\"comp-nom\">" + c.def.nom + "</span>" +
            '<span class="comp-niv">' + (c.est ? c.est.court : "–") + "</span>" +
            jauge(p) + '<span class="pct">' + p + " %</span></li>";
        }).join("") + "</ul>" +
      "</section>" +

      '<aside class="regle-jour" aria-labelledby="rj-titre">' +
        '<p class="label" id="rj-titre">La règle du jour</p>' +
        '<p class="rj-nom"><a href="#/regles/' + rj.id + '">' + rj.titre + "</a></p>" +
        "<p>" + rj.resume + "</p>" +
      "</aside>" +

      '<section class="selecteur" aria-labelledby="t-niv">' +
        '<p class="label">Parcours par</p>' +
        '<h2 class="display" id="t-niv">Niveaux</h2>' +
        '<div class="niv-choix" role="group" aria-label="Filtrer par niveau">' +
          ["tous"].concat(NIVEAUX).map(function (n) {
            return '<button type="button" data-niv="' + n + '" aria-pressed="' + (filtreNiveau === n) + '"' +
              (n === "tous" ? ' class="mot">Tous' : ">" + NOMS_NIV[n]) + "</button>";
          }).join("") +
        "</div>" +
        '<div class="filtres" role="group" aria-label="Filtrer par thème">' +
          ["tous"].concat(THEMES, ["chine"]).map(function (t) {
            var nom = t === "tous" ? "Tous les thèmes" : t === "chine" ? "Liens avec la Chine" : t;
            return '<button type="button" data-theme="' + esc(t) + '" aria-pressed="' + (filtreTheme === t) + '"' + (t === "chine" ? ' class="filtre-chine"' : "") + ">" + nom + "</button>";
          }).join("") +
        "</div>" +
      "</section>" +

      '<div id="liste"></div>' +
      '<p class="aide-passer">Une unité trop facile ou sans intérêt pour toi ? « Passer » la retire des suggestions, mais elle reste accessible.</p>';

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
      html += '<section class="niveau" aria-labelledby="niv-' + n.id + '">' +
        '<div class="niveau-tete"><div><p class="label">Niveau ' + NOMS_NIV[n.id] + "</p>" +
          '<h2 class="display" id="niv-' + n.id + '">' + n.titre + "</h2>" +
          '<p class="niveau-desc">' + n.description + "</p></div>" +
          '<div class="niveau-prog">' + jauge(sn.pct) + '<span class="pct">' + sn.pct + " %</span></div>" +
        "</div>" +
        '<ol class="cartes">' + us.map(carteUnite).join("") + "</ol></section>";
    });
    document.getElementById("liste").innerHTML = html || '<p class="vide">Aucune unité ne correspond à ces filtres.</p>';
  }

  function carteUnite(u) {
    var dispo = !!u.activites, p = dispo ? pct(nbFaites(u), u.activites.length) : 0;
    var classe = !dispo ? "a-venir" : terminee(u) ? "terminee" : passee(u) ? "passee" : nbFaites(u) ? "en-cours" : "a-faire";
    var badge = terminee(u) ? '<span class="affiche-badge">Faite</span>'
      : passee(u) ? '<span class="affiche-badge passee">Passée</span>' : "";
    var inner = '<span class="affiche-num">' + pad(u.id) + "</span>" + badge +
      (u.chine ? '<span class="affiche-chine" title="Lien avec la Chine">中</span>' : "");
    var affiche = dispo
      ? '<a class="affiche t-' + slugTheme(u.theme) + '" href="#/unite/' + u.id + '" tabindex="-1" aria-hidden="true">' + inner + "</a>"
      : '<div class="affiche t-' + slugTheme(u.theme) + '" aria-hidden="true">' + inner + "</div>";
    var action = dispo && !terminee(u)
      ? '<button type="button" class="btn-mini" data-passer="' + u.id + '" aria-label="' + (passee(u) ? "Rétablir" : "Passer") + " l’unité " + u.id + '">' + (passee(u) ? "Rétablir" : "Passer") + "</button>"
      : "";
    return '<li class="carte ' + classe + '">' +
      '<p class="carte-sur">' + u.theme + " / " + NOMS_NIV[u.niveau] + (u.chine ? " / Chine" : "") + "</p>" +
      affiche +
      '<h3 class="carte-titre">' + (dispo ? '<a href="#/unite/' + u.id + '">' + u.titre + "</a>" : u.titre) + "</h3>" +
      '<p class="carte-obj">' + u.objectif + "</p>" +
      (dispo
        ? '<div class="carte-prog">' + jauge(p) + '<span class="pct">' + p + " %</span></div>"
        : '<p class="carte-avenir">À venir</p>') +
      (action ? '<div class="carte-bas"><span></span>' + action + "</div>" : "") +
    "</li>";
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
      '<header class="page-tete"><p class="label">Tableau de</p><h1 class="display">Progression</h1></header>' +

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
        '<div class="titre-bloc"><p class="label">Par</p><h2 class="display" id="t-c">Compétence</h2></div>' +
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
        '<div class="titre-bloc"><p class="label">Par</p><h2 class="display" id="t-t">Thème</h2></div>' +
        '<ul class="lignes">' + THEMES.map(function (t) { return ligne(t, statsGroupe(function (u) { return u.theme === t; })); }).join("") +
          ligne("Liens avec la Chine", statsGroupe(function (u) { return u.chine; })) + "</ul>" +
      "</section>" +

      '<section class="section-prog" aria-labelledby="t-n">' +
        '<div class="titre-bloc"><p class="label">Par</p><h2 class="display" id="t-n">Niveau</h2></div>' +
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

  function afficherUnite(u, i) {
    var a = u.activites[i];
    var niv = P.niveaux.find(function (n) { return n.id === u.niveau; });
    document.title = "Unité " + u.id + " : " + u.titre;

    var etapes = '<ol class="etapes" id="etapes">' + u.activites.map(function (x, k) {
      return '<li><a href="#/unite/' + u.id + "/" + k + '"' + (k === i ? ' aria-current="step"' : "") +
        ' class="' + (estFait(u, k) ? "fait" : "") + '">' +
        '<span class="etape-num">' + (k + 1) + "</span>" +
        '<span class="etape-nom">' + x.titre + "</span></a></li>";
    }).join("") + "</ol>";

    var aRelire = (a.regles || []).map(regleParId).filter(Boolean);
    var suivante = uniteSuivante(u.id);
    var suite = i < u.activites.length - 1
      ? '<a class="btn" href="#/unite/' + u.id + "/" + (i + 1) + '">Activité suivante : ' + u.activites[i + 1].titre.toLowerCase() + "</a>"
      : suivante
        ? '<a class="btn" href="#/unite/' + suivante.id + '">Unité suivante : ' + suivante.titre + "</a>"
        : '<a class="btn" href="#/">Revenir au parcours</a>';

    app.innerHTML =
      '<nav class="fil"><a href="#/">Parcours</a></nav>' +
      '<header class="unite-tete t-' + slugTheme(u.theme) + '">' +
        '<p class="label">Unité ' + pad(u.id) + " | " + u.theme + " | " + NOMS_NIV[u.niveau] + "</p>" +
        '<h1 class="display unite-titre">' + u.titre + "</h1>" +
        '<p class="unite-objectif">' + u.objectif + "</p>" +
        '<div class="unite-prog" id="prog-unite">' + jauge(pct(nbFaites(u), u.activites.length)) + '<span class="pct">' + pct(nbFaites(u), u.activites.length) + " %</span></div>" +
        (terminee(u) ? "" :
          '<button type="button" class="btn-mini" id="passer-unite">' + (passee(u) ? "Rétablir cette unité" : "Passer cette unité") + "</button>") +
      "</header>" +
      etapes +
      '<article class="activite">' +
        '<header class="activite-tete"><h2>' + a.sousTitre + "</h2>" +
          (a.duree ? '<p class="duree">Environ ' + a.duree + "</p>" : "") + "</header>" +
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

    var rendus = { lecture: rendreLecture, ecoute: rendreEcoute, association: rendreAssociation, trous: rendreTrous, ecriture: rendreEcriture, oral: rendreOral };
    (rendus[a.type] || function () {})(document.getElementById("contenu-activite"), a, u, i);
    window.scrollTo(0, 0);
  }

  function enregistrer(u, i, score, total) {
    etat.activites[cle(u, i)] = { fait: true, score: score, total: total, date: new Date().toISOString() };
    if (terminee(u)) delete etat.unites[u.id];
    sauver();
    document.querySelectorAll("#etapes a").forEach(function (l, k) { l.classList.toggle("fait", estFait(u, k)); });
    var pu = document.getElementById("prog-unite");
    if (pu) pu.innerHTML = jauge(pct(nbFaites(u), u.activites.length)) + '<span class="pct">' + pct(nbFaites(u), u.activites.length) + " %</span>";
  }

  /* ---------- Questions à choix ---------- */

  function htmlQuestions(qs, prefixe) {
    return '<div class="questions">' + qs.map(function (q, k) {
      return '<fieldset class="q" data-k="' + k + '">' +
        '<legend><span class="q-num">' + (k + 1) + ".</span> " + q.q + "</legend>" +
        q.options.map(function (o, j) {
          return '<label class="opt"><input type="radio" name="' + prefixe + "-q" + k + '" value="' + j + '"><span>' + o + "</span></label>";
        }).join("") +
        '<p class="retour" hidden></p></fieldset>';
    }).join("") +
    '<div class="actions"><button class="btn" type="button" data-verifier>Vérifier mes réponses</button>' +
    '<p class="score" aria-live="polite"></p></div></div>';
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
        var ok = parseInt(choix.value, 10) === q.answer;
        if (ok) score++;
        fs.classList.add(ok ? "juste" : "faux");
        r.innerHTML = (ok ? "<strong>Juste.</strong> " : "<strong>Pas tout à fait.</strong> Réponse attendue : " + q.options[q.answer] + ". ") + (q.explication || "");
      });
      var s = zone.querySelector(".score");
      if (manquantes) { s.textContent = pluriel(manquantes, "question") + " sans réponse."; return; }
      s.textContent = "Score : " + score + " sur " + qs.length + (score === qs.length ? ". Parfait." : ". Relis les explications, puis tu peux recommencer.");
      enregistrer(u, i, score, qs.length);
    });
  }

  /* ---------- Lecture ---------- */

  function rendreLecture(zone, a, u, i) {
    zone.innerHTML =
      '<p class="consigne">Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.</p>' +
      '<div class="texte">' + a.texte.map(function (p, k) {
        return '<p><span class="para-num" aria-label="Paragraphe ' + (k + 1) + '">' + (k + 1) + "</span>" + p + "</p>";
      }).join("") + "</div>" +
      htmlQuestions(a.questions, cle(u, i));
    brancherQuestions(zone, a.questions, u, i);
  }

  /* ---------- Écoute ---------- */

  function voixFrancaise() {
    var v = window.speechSynthesis.getVoices();
    return v.find(function (x) { return /^fr[-_]FR/i.test(x.lang); }) || v.find(function (x) { return /^fr/i.test(x.lang); });
  }

  function rendreEcoute(zone, a, u, i) {
    var possible = "speechSynthesis" in window;
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      (possible
        ? '<div class="lecteur">' +
            '<button class="btn btn-principal" type="button" data-lire>Écouter</button>' +
            '<button class="btn" type="button" data-stop>Arrêter</button>' +
            '<label class="vitesse">Vitesse <select data-vitesse><option value="0.8">lente</option><option value="0.9" selected>normale</option><option value="1.05">rapide</option></select></label>' +
            '<p class="lecteur-note" data-note></p>' +
          "</div>"
        : '<p class="alerte">Ce navigateur ne sait pas lire le texte à voix haute. Ouvre le site dans Chrome, Edge ou Safari, ou utilise la transcription.</p>') +
      '<details class="transcription"><summary>Afficher la transcription</summary><p>' + a.transcription + "</p>" +
      '<p class="petit">Conseil : réponds d’abord aux questions, puis vérifie avec la transcription.</p></details>' +
      htmlQuestions(a.questions, cle(u, i));

    brancherQuestions(zone, a.questions, u, i);
    if (!possible) return;

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
      var voix = voixFrancaise();
      // Phrase par phrase : certains navigateurs coupent les textes longs.
      a.transcription.split(/(?<=[.!?:])\s+/).forEach(function (phrase) {
        var e = new SpeechSynthesisUtterance(phrase);
        e.lang = "fr-FR"; if (voix) e.voice = voix; e.rate = vitesse;
        synth.speak(e);
      });
    });
    zone.querySelector("[data-stop]").addEventListener("click", arreterVoix);
  }

  /* ---------- Association ---------- */

  function rendreAssociation(zone, a, u, i) {
    var defs = melanger(a.items.map(function (it, k) { return { k: k, t: it.definition }; }));
    var options = '<option value="">Choisir une définition</option>' +
      defs.map(function (d) { return '<option value="' + d.k + '">' + d.t + "</option>"; }).join("");
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
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

  /* ---------- Texte à trous ---------- */

  function rendreTrous(zone, a, u, i) {
    zone.innerHTML =
      '<details class="fiche" open><summary>La règle en bref</summary><div class="fiche-corps">' + a.fiche + "</div></details>" +
      '<p class="consigne">' + a.consigne + "</p>" +
      '<ol class="phrases">' + a.phrases.map(function (p, k) {
        var opts = melanger(p.options.map(function (o, j) { return { j: j, o: o }; }));
        var sel = '<select aria-label="Réponse pour la phrase ' + (k + 1) + '"><option value="">…</option>' +
          opts.map(function (x) { return '<option value="' + x.j + '">' + x.o + "</option>"; }).join("") + "</select>";
        var espace = /^[,.;:!?]/.test(p.apres) ? "" : " ";
        return '<li class="phrase" data-k="' + k + '"><p>' + (p.avant ? p.avant + " " : "") + sel + espace + p.apres + "</p>" +
          '<p class="retour" hidden></p></li>';
      }).join("") + "</ol>" +
      '<div class="actions"><button class="btn" type="button" data-verifier>Vérifier</button><p class="score" aria-live="polite"></p></div>';

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

  /* ---------- Écriture ---------- */

  function rendreEcriture(zone, a, u, i) {
    var k = cle(u, i), id = k + "-texte";
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      '<p class="petit">Entre ' + a.min + " et " + a.max + " mots. Ton texte est enregistré automatiquement.</p>" +
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
    ta.value = etat.textes[k] || "";

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
      '<p class="petit">Durée visée : ' + a.dureeCible + ". Tes enregistrements restent sur cet appareil et disparaissent quand tu quittes la page.</p>" +

      '<ol class="oral-etapes">' +
        '<li class="oral-etape"><h3>Prépare-toi</h3>' +
          '<p>Note quelques mots-clés, pas des phrases entières. Ces expressions peuvent t’aider :</p>' +
          '<ul class="expressions">' + a.preparation.map(function (e) { return "<li>" + e + "</li>"; }).join("") + "</ul>" +
          '<div class="actions"><button class="btn" type="button" data-prep>Lancer 1 minute de préparation</button><span class="minuteur" data-prep-temps aria-live="polite"></span></div>' +
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
      var aff = zone.querySelector("[data-prep-temps]"), reste = 60;
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
      '<header class="page-tete"><p class="label">Le mémento des</p><h1 class="display">Règles</h1>' +
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
     Profil
     ================================================================= */

  function afficherProfil() {
    document.title = "Mon profil";
    app.innerHTML =
      '<header class="page-tete"><p class="label">Mon</p><h1 class="display">Profil</h1>' +
        (modeLocal
          ? '<p class="alerte">Mode local : la progression est enregistrée dans ce navigateur uniquement. Pour la synchroniser entre appareils, configure Supabase (voir le fichier README).</p>'
          : '<p class="lead">Connectée avec ' + esc(utilisateur.email) + ".</p>") +
      "</header>" +
      '<form class="profil-form" id="form-profil">' +
        '<div class="champ"><label for="p-prenom">Prénom</label><input id="p-prenom" autocomplete="given-name" value="' + esc(profil.prenom) + '"></div>' +
        '<button class="btn" type="submit">Enregistrer le prénom</button><span class="petit" id="p-msg" aria-live="polite"></span>' +
      "</form>" +
      '<p><a class="lien-fort" href="#/progression">Voir ma progression et mon niveau estimé</a></p>' +
      '<div class="actions profil-actions">' +
        (modeLocal ? "" : '<button type="button" class="btn" id="deconnexion">Se déconnecter</button>') +
        '<button type="button" class="btn-lien" id="effacer">Effacer toute ma progression</button>' +
      "</div>";

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
      if (!confirm("Effacer toutes tes réponses, tes textes et tes règles lues ? Cette action est définitive.")) return;
      etat = vide(); sauver(); afficherProfil();
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

  demarrer();
})();
