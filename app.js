(function () {
  "use strict";

  var P = window.PARCOURS;
  var CLE = "parcours-fle-v1";
  var app = document.getElementById("app");

  /* ---------- Progression (sauvegardée dans le navigateur) ---------- */

  function charger() {
    try {
      var s = JSON.parse(localStorage.getItem(CLE));
      return s && typeof s === "object" ? s : {};
    } catch (e) { return {}; }
  }
  var etat = charger();
  etat.activites = etat.activites || {};
  etat.textes = etat.textes || {};

  function sauver() {
    try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) { /* stockage indisponible */ }
  }

  function cle(u, i) { return "u" + u.id + "-a" + i; }
  function estFait(u, i) { return !!(etat.activites[cle(u, i)] && etat.activites[cle(u, i)].fait); }
  function enregistrer(u, i, score, total) {
    etat.activites[cle(u, i)] = { fait: true, score: score, total: total, date: new Date().toISOString() };
    sauver();
    majEtapes(u, i);
  }
  function nbFaites(u) {
    if (!u.activites) return 0;
    return u.activites.filter(function (_, i) { return estFait(u, i); }).length;
  }

  /* ---------- Outils ---------- */

  function melanger(t) {
    var a = t.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }
  function echapper(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function compterMots(t) {
    var m = t.trim().match(/[\p{L}\p{N}’'-]+/gu);
    return m ? m.length : 0;
  }
  function arreterVoix() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  /* ---------- Routage ---------- */

  function route() {
    arreterVoix();
    var h = location.hash.replace(/^#\/?/, "").split("/");
    if (h[0] === "unite") {
      var u = P.unites.find(function (x) { return String(x.id) === h[1]; });
      if (u && u.activites) {
        var i = parseInt(h[2], 10);
        if (isNaN(i) || i < 0 || i >= u.activites.length) i = premiereNonFaite(u);
        return afficherUnite(u, i);
      }
    }
    afficherAccueil();
  }
  function premiereNonFaite(u) {
    for (var i = 0; i < u.activites.length; i++) if (!estFait(u, i)) return i;
    return 0;
  }
  window.addEventListener("hashchange", route);

  /* ---------- Accueil ---------- */

  function afficherAccueil() {
    document.title = "Mon parcours de français";
    var dispo = P.unites.filter(function (u) { return u.activites; });
    var reprise = dispo.find(function (u) { return nbFaites(u) < u.activites.length; }) || dispo[dispo.length - 1];
    var dejaCommence = Object.keys(etat.activites).length > 0;

    var unitesTerminees = dispo.filter(function (u) { return nbFaites(u) === u.activites.length; }).length;

    var html =
      '<section class="hero seyes">' +
        '<div class="hero-texte">' +
          "<h1>Étudier en français, du&nbsp;B1 au&nbsp;C1</h1>" +
          '<p class="hero-lead">Dix-huit unités pensées pour la vie universitaire : comprendre un cours, lire des textes exigeants, écrire selon les codes académiques. Compte une semaine par unité, à raison de cinq heures.</p>' +
          '<p class="hero-etat">' + unitesTerminees + " unité" + (unitesTerminees > 1 ? "s" : "") + " terminée" + (unitesTerminees > 1 ? "s" : "") + " sur " + P.unites.length + "</p>" +
          '<a class="btn btn-principal" href="#/unite/' + reprise.id + '">' +
            (dejaCommence ? "Reprendre l’unité " + reprise.id : "Commencer l’unité 1") +
          "</a>" +
        "</div>" +
      "</section>";

    P.niveaux.forEach(function (n) {
      var us = P.unites.filter(function (u) { return u.niveau === n.id; });
      html += '<section class="niveau" aria-labelledby="niv-' + n.id + '">' +
        '<h2 id="niv-' + n.id + '">' + n.titre + "</h2>" +
        '<p class="niveau-desc">' + n.description + "</p>" +
        '<ol class="unites">';
      us.forEach(function (u) {
        var statut, classe;
        if (!u.activites) { statut = "À venir"; classe = "a-venir"; }
        else {
          var f = nbFaites(u), t = u.activites.length;
          if (f === t) { statut = "Terminée"; classe = "terminee"; }
          else if (f > 0) { statut = f + " activité" + (f > 1 ? "s" : "") + " sur " + t; classe = "en-cours"; }
          else { statut = "À faire"; classe = "a-faire"; }
        }
        var titre = u.activites
          ? '<a href="#/unite/' + u.id + '">' + u.titre + "</a>"
          : "<span>" + u.titre + "</span>";
        html += '<li class="unite ' + classe + '">' +
          '<span class="unite-num" aria-hidden="true">' + u.id + "</span>" +
          '<div class="unite-corps"><h3>' + titre + "</h3><p>" + u.objectif + "</p></div>" +
          '<span class="unite-statut">' + statut + "</span>" +
        "</li>";
      });
      html += "</ol></section>";
    });

    html += '<section class="pied-accueil">' +
      '<button class="btn-lien" type="button" id="reinit">Effacer ma progression</button>' +
    "</section>";

    app.innerHTML = html;
    window.scrollTo(0, 0);

    document.getElementById("reinit").addEventListener("click", function () {
      if (confirm("Effacer toutes tes réponses et tes textes enregistrés ? Cette action est définitive.")) {
        etat = { activites: {}, textes: {} };
        sauver();
        afficherAccueil();
      }
    });
  }

  /* ---------- Unité ---------- */

  function afficherUnite(u, i) {
    var a = u.activites[i];
    document.title = "Unité " + u.id + " : " + u.titre;

    var etapes = '<ol class="etapes" id="etapes">' + u.activites.map(function (x, k) {
      return '<li><a href="#/unite/' + u.id + "/" + k + '"' +
        (k === i ? ' aria-current="step"' : "") +
        ' class="' + (estFait(u, k) ? "fait" : "") + '">' +
        '<span class="etape-num">' + (k + 1) + "</span>" +
        '<span class="etape-nom">' + x.titre + "</span></a></li>";
    }).join("") + "</ol>";

    var suite = i < u.activites.length - 1
      ? '<a class="btn" href="#/unite/' + u.id + "/" + (i + 1) + '">Activité suivante : ' + u.activites[i + 1].titre.toLowerCase() + "</a>"
      : '<a class="btn" href="#/">Revenir au parcours</a>';

    app.innerHTML =
      '<nav class="fil"><a href="#/">Parcours</a></nav>' +
      '<header class="unite-tete">' +
        '<p class="unite-niveau">Unité ' + u.id + "</p>" +
        "<h1>" + u.titre + "</h1>" +
        '<p class="unite-objectif">' + u.objectif + "</p>" +
      "</header>" +
      etapes +
      '<article class="activite" id="activite">' +
        '<header class="activite-tete">' +
          "<h2>" + a.sousTitre + "</h2>" +
          (a.duree ? '<p class="duree">Environ ' + a.duree + "</p>" : "") +
        "</header>" +
        '<div id="contenu-activite"></div>' +
      "</article>" +
      '<div class="suite">' + suite + "</div>";

    var zone = document.getElementById("contenu-activite");
    var rendus = { lecture: rendreLecture, ecoute: rendreEcoute, association: rendreAssociation, trous: rendreTrous, ecriture: rendreEcriture };
    (rendus[a.type] || function () {})(zone, a, u, i);

    window.scrollTo(0, 0);
  }

  function majEtapes(u) {
    var liens = document.querySelectorAll("#etapes a");
    liens.forEach(function (l, k) { l.classList.toggle("fait", estFait(u, k)); });
  }

  /* ---------- Questions à choix (lecture, écoute) ---------- */

  function htmlQuestions(qs, prefixe) {
    return '<div class="questions">' + qs.map(function (q, k) {
      return '<fieldset class="q" data-k="' + k + '">' +
        "<legend><span class=\"q-num\">" + (k + 1) + ".</span> " + q.q + "</legend>" +
        q.options.map(function (o, j) {
          return '<label class="opt"><input type="radio" name="' + prefixe + "-q" + k + '" value="' + j + '"><span>' + o + "</span></label>";
        }).join("") +
        '<p class="retour" hidden></p>' +
      "</fieldset>";
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
      if (manquantes) {
        s.textContent = manquantes + " question" + (manquantes > 1 ? "s" : "") + " sans réponse.";
        return;
      }
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

  /* ---------- Écoute (voix du navigateur) ---------- */

  function voixFrancaise() {
    var v = window.speechSynthesis.getVoices();
    return v.find(function (x) { return /^fr[-_]FR/i.test(x.lang); }) ||
           v.find(function (x) { return /^fr/i.test(x.lang); });
  }

  function rendreEcoute(zone, a, u, i) {
    var possible = "speechSynthesis" in window;
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      (possible
        ? '<div class="lecteur">' +
            '<button class="btn btn-principal" type="button" data-lire>Écouter</button>' +
            '<button class="btn" type="button" data-stop>Arrêter</button>' +
            '<label class="vitesse">Vitesse ' +
              '<select data-vitesse><option value="0.8">lente</option><option value="0.9" selected>normale</option><option value="1.05">rapide</option></select>' +
            "</label>" +
            '<p class="lecteur-note" data-note></p>' +
          "</div>"
        : '<p class="alerte">Ce navigateur ne sait pas lire le texte à voix haute. Ouvre le site dans Chrome, Edge ou Safari, ou utilise la transcription ci-dessous.</p>') +
      '<details class="transcription"><summary>Afficher la transcription</summary><p>' + a.transcription + "</p>" +
      '<p class="petit">Conseil : réponds d’abord aux questions, puis vérifie avec la transcription.</p></details>' +
      htmlQuestions(a.questions, cle(u, i));

    brancherQuestions(zone, a.questions, u, i);
    if (!possible) return;

    var note = zone.querySelector("[data-note]");
    function verifierVoix() {
      if (!voixFrancaise()) note.textContent = "Aucune voix française n’est installée sur cet appareil : la lecture risque d’avoir un accent étranger. Ajoute une voix française dans les réglages de langue du système.";
      else note.textContent = "";
    }
    verifierVoix();
    window.speechSynthesis.onvoiceschanged = verifierVoix;

    zone.querySelector("[data-lire]").addEventListener("click", function () {
      var synth = window.speechSynthesis;
      synth.cancel();
      var vitesse = parseFloat(zone.querySelector("[data-vitesse]").value);
      var voix = voixFrancaise();
      // Découpage en phrases : évite que certains navigateurs coupent les textes longs.
      a.transcription.split(/(?<=[.!?:])\s+/).forEach(function (phrase) {
        var e = new SpeechSynthesisUtterance(phrase);
        e.lang = "fr-FR";
        if (voix) e.voice = voix;
        e.rate = vitesse;
        synth.speak(e);
      });
    });
    zone.querySelector("[data-stop]").addEventListener("click", arreterVoix);
  }

  /* ---------- Association ---------- */

  function rendreAssociation(zone, a, u, i) {
    var defs = melanger(a.items.map(function (it, k) { return { k: k, texte: it.definition }; }));
    var options = '<option value="">Choisir une définition</option>' +
      defs.map(function (d) { return '<option value="' + d.k + '">' + d.texte + "</option>"; }).join("");
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      '<div class="assoc">' + a.items.map(function (it, k) {
        var id = cle(u, i) + "-m" + k;
        return '<div class="assoc-ligne" data-k="' + k + '">' +
          '<label for="' + id + '" class="assoc-terme">' + it.terme + "</label>" +
          '<select id="' + id + '">' + options + "</select>" +
        "</div>";
      }).join("") + "</div>" +
      '<div class="actions"><button class="btn" type="button" data-verifier>Vérifier</button><p class="score" aria-live="polite"></p></div>';

    zone.querySelector("[data-verifier]").addEventListener("click", function () {
      var score = 0, vides = 0;
      a.items.forEach(function (_, k) {
        var ligne = zone.querySelector('.assoc-ligne[data-k="' + k + '"]');
        var v = ligne.querySelector("select").value;
        ligne.classList.remove("juste", "faux");
        if (v === "") { vides++; return; }
        var ok = parseInt(v, 10) === k;
        if (ok) score++;
        ligne.classList.add(ok ? "juste" : "faux");
      });
      var s = zone.querySelector(".score");
      if (vides) { s.textContent = vides + " association" + (vides > 1 ? "s" : "") + " à compléter."; return; }
      s.textContent = "Score : " + score + " sur " + a.items.length + (score === a.items.length ? ". Parfait." : ". Corrige les lignes en rouge et vérifie à nouveau.");
      enregistrer(u, i, score, a.items.length);
    });
  }

  /* ---------- Grammaire : texte à trous ---------- */

  function rendreTrous(zone, a, u, i) {
    zone.innerHTML =
      '<details class="fiche" open><summary>La règle</summary><div class="fiche-corps">' + a.fiche + "</div></details>" +
      '<p class="consigne">' + a.consigne + "</p>" +
      '<ol class="phrases">' + a.phrases.map(function (p, k) {
        var opts = melanger(p.options.map(function (o, j) { return { j: j, o: o }; }));
        var sel = '<select aria-label="Connecteur pour la phrase ' + (k + 1) + '"><option value="">…</option>' +
          opts.map(function (x) { return '<option value="' + x.j + '">' + x.o + "</option>"; }).join("") + "</select>";
        var espace = /^[,.;:!?]/.test(p.apres) ? "" : " ";
        return '<li class="phrase" data-k="' + k + '">' +
          '<p>' + (p.avant ? p.avant + " " : "") + sel + espace + p.apres + "</p>" +
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
      if (vides) { s.textContent = vides + " phrase" + (vides > 1 ? "s" : "") + " à compléter."; return; }
      s.textContent = "Score : " + score + " sur " + a.phrases.length + ".";
      enregistrer(u, i, score, a.phrases.length);
    });
  }

  /* ---------- Écriture ---------- */

  function rendreEcriture(zone, a, u, i) {
    var k = cle(u, i);
    var id = k + "-texte";
    zone.innerHTML =
      '<p class="consigne">' + a.consigne + "</p>" +
      '<p class="petit">Entre ' + a.min + " et " + a.max + " mots. Ton texte est enregistré automatiquement dans ce navigateur.</p>" +
      '<label for="' + id + '" class="sr-only">Ton texte</label>' +
      '<textarea id="' + id + '" class="cahier seyes" spellcheck="false" rows="14"></textarea>' +
      '<p class="compteur" aria-live="polite"></p>' +
      '<fieldset class="grille"><legend>Avant de terminer, relis-toi</legend>' +
        a.checklist.map(function (c, j) {
          return '<label class="opt"><input type="checkbox" data-c="' + j + '"><span>' + c + "</span></label>";
        }).join("") +
      "</fieldset>" +
      '<div class="actions">' +
        '<button class="btn" type="button" data-copier>Copier pour une correction par Claude</button>' +
        '<button class="btn btn-principal" type="button" data-terminer>J’ai terminé</button>' +
        '<p class="score" aria-live="polite"></p>' +
      "</div>" +
      '<details class="modele"><summary>Voir un exemple de réponse</summary><pre>' + echapper(a.modele) + "</pre>" +
      '<p class="petit">Compare la structure et les formules, pas le contenu exact : ton courriel peut être différent et tout aussi juste.</p></details>';

    var ta = zone.querySelector("textarea");
    var compteur = zone.querySelector(".compteur");
    var score = zone.querySelector(".score");
    ta.value = etat.textes[k] || "";

    function majCompteur() {
      var n = compterMots(ta.value);
      var msg = n + " mot" + (n > 1 ? "s" : "");
      if (n > 0 && n < a.min) msg += ", encore " + (a.min - n) + " au minimum";
      else if (n > a.max) msg += ", soit " + (n - a.max) + " de trop";
      compteur.textContent = msg;
      compteur.classList.toggle("hors-limite", n > a.max);
      return n;
    }
    majCompteur();

    var minuteur;
    ta.addEventListener("input", function () {
      majCompteur();
      clearTimeout(minuteur);
      minuteur = setTimeout(function () { etat.textes[k] = ta.value; sauver(); }, 400);
    });

    zone.querySelector("[data-terminer]").addEventListener("click", function () {
      etat.textes[k] = ta.value; sauver();
      var n = majCompteur();
      if (n < a.min) { score.textContent = "Ton texte fait " + n + " mots : vise au moins " + a.min + " mots."; return; }
      var coches = zone.querySelectorAll(".grille input:checked").length;
      enregistrer(u, i, null, null);
      score.textContent = coches < a.checklist.length
        ? "Activité terminée. " + (a.checklist.length - coches) + " point" + (a.checklist.length - coches > 1 ? "s" : "") + " de la grille non coché" + (a.checklist.length - coches > 1 ? "s" : "") + " : relis-les avant de demander une correction."
        : "Activité terminée. Pour progresser, fais corriger ton texte.";
    });

    zone.querySelector("[data-copier]").addEventListener("click", function () {
      if (!ta.value.trim()) { score.textContent = "Écris d’abord ton texte."; return; }
      var demande =
        "J’apprends le français (niveau B1-B2) pour étudier à l’université en France. " +
        "Corrige ce texte : relève chaque erreur, explique-la simplement en français, " +
        "dis si le registre est adapté, puis propose une version corrigée qui reste proche de ce que j’ai écrit.\n\n" +
        "Consigne : " + a.consigne + " (" + a.min + " à " + a.max + " mots)\n\n" +
        "Mon texte :\n" + ta.value;
      var fini = function () { score.textContent = "Copié. Colle ce texte dans une conversation avec Claude."; };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(demande).then(fini, function () { secours(demande); fini(); });
      } else { secours(demande); fini(); }
    });
  }

  function secours(t) {
    var x = document.createElement("textarea");
    x.value = t; x.style.position = "fixed"; x.style.opacity = "0";
    document.body.appendChild(x); x.select();
    try { document.execCommand("copy"); } catch (e) { /* rien */ }
    document.body.removeChild(x);
  }

  route();
})();
