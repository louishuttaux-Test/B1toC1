#!/usr/bin/env node
/*
  VÉRIFICATION DES UNITÉS
  -----------------------
  Contrôle chaque fichier unites/uNN.js selon les repères de CHARTE.md.

    node verifier.js              vérifie tout le parcours
    node verifier.js 1 4 7        vérifie seulement ces unités
    node verifier.js --registre   affiche en plus un brouillon des lignes de REGISTRE.md

  Les unités marquées  enrichie: true  doivent respecter toute la charte (erreurs bloquantes).
  Les autres (contenu d'origine) ne reçoivent que les contrôles de structure ; les écarts
  à la charte y sont signalés comme « à enrichir ».
  Code de sortie : 1 s'il reste au moins une erreur.
*/
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var RACINE = __dirname;
var args = process.argv.slice(2);
var avecRegistre = args.indexOf("--registre") !== -1;
var filtre = args.filter(function (a) { return /^\d+$/.test(a); }).map(Number);

/* ---------- Repères de la charte ---------- */

var QUANTITES = { lecture: [4, 6], ecoute: [4, 6], vocabulaire: [4, 6], grammaire: [6, 10], ecriture: [3, 5], oral: [3, 5] };
var ITEMS = { qcm: [4, 8], vraifaux: [5, 7], association: [6, 10], trous: [6, 10], registre: [6, 10], texteatrous: [6, 12],
  saisie: [5, 8], correction: [5, 8], transformation: [5, 8], reformulation: [5, 8] };
// Nombre de mots des documents : [min, max]
var LECTURE = { long: { b1: [200, 420], b2: [350, 650], c1: [500, 900] }, court: { b1: [90, 220], b2: [180, 400], c1: [250, 550] } };
var ECOUTE = { long: { b1: [130, 300], b2: [220, 450], c1: [300, 600] }, court: { b1: [50, 150], b2: [80, 200], c1: [100, 250] } };
// Productions écrites (compétence écriture) : bornes des consignes et seuil de la tâche longue
var ECRIT = { b1: { min: 50, max: 220, long: 140 }, b2: { min: 100, max: 320, long: 220 }, c1: { min: 150, max: 450, long: 280 } };
var TYPES = ["qcm", "vraifaux", "association", "trous", "texteatrous", "registre", "saisie", "correction", "transformation", "reformulation", "ecriture", "oral"];
var SAISIES = ["saisie", "correction", "transformation", "reformulation"];
var REGISTRES = ["familier", "courant", "soutenu"];
// Nombre d'activités d'origine par unité : leurs ids a0, a1… portent la progression enregistrée.
var IDS_HISTORIQUES = { 1: 6, 2: 6, 3: 5, 4: 5, 5: 5, 6: 6, 7: 6, 8: 6, 9: 6, 10: 6, 11: 6, 12: 5, 13: 5, 14: 5, 15: 6,
  16: 6, 17: 6, 18: 6, 19: 6, 20: 6, 21: 6, 22: 6, 23: 6, 24: 6, 25: 6, 26: 6, 27: 6, 28: 6, 29: 6, 30: 6 };

/* ---------- Chargement, comme dans le navigateur ---------- */

var ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
function charger(f) { vm.runInContext(fs.readFileSync(path.join(RACINE, f), "utf8"), ctx, { filename: f }); }
charger("contenu.js");
charger("regles.js");
var fichiers = fs.readdirSync(path.join(RACINE, "unites")).filter(function (f) { return /^u\d+\.js$/.test(f); }).sort();
var origine = {};
fichiers.forEach(function (f) {
  var avant = ctx.PARCOURS.unites.length;
  try { charger("unites/" + f); } catch (e) { console.error("✗ " + f + " : erreur de syntaxe ou d’exécution : " + e.message); process.exitCode = 1; return; }
  var u = ctx.PARCOURS.unites.find(function (x) { return !origine[x.id]; });
  ctx.PARCOURS.unites.forEach(function (x) { if (!origine[x.id]) origine[x.id] = f; });
  if (ctx.PARCOURS.unites.length === avant) console.error("✗ " + f + " : n’enregistre pas d’unité nouvelle (id en double ?)");
});
var REGLES = {};
ctx.REGLES.forEach(function (r) { REGLES[r.id] = r; });
var ETAPES = Object.keys(ctx.ETAPES);
var ORDRE_ETAPES = {}; ETAPES.forEach(function (e, k) { ORDRE_ETAPES[e] = k; });

/* ---------- Outils ---------- */

function mots(t) { var m = String(t).replace(/<[^>]+>/g, " ").match(/[\p{L}\p{N}’'-]+/gu); return m ? m.length : 0; }
function norm(s) {
  return String(s == null ? "" : s).toLowerCase().replace(/<[^>]+>/g, " ").replace(/œ/g, "oe").replace(/[’‘`´]/g, "'")
    .replace(/[.,;:!?«»"“”()\[\]…–—\-_/]/g, " ").replace(/\s*'\s*/g, "'").replace(/\s+/g, " ").trim();
}
function souple(s) { return norm(s).normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
function texteDoc(d) { return d.texte ? d.texte.join(" ") : d.transcription ? d.transcription : (d.repliques || []).map(function (r) { return r.texte; }).join(" "); }
function chaine(x) { return typeof x === "string" && x.trim().length > 0; }

/* ---------- Contrôle d'une unité ---------- */

var bilan = { erreurs: 0, avertissements: 0, aEnrichir: [] };

function verifierUnite(u, fichier) {
  var E = [], A = [], I = [];
  var stricte = u.enrichie === true;
  function err(m) { E.push(m); }
  function avert(m) { A.push(m); }
  // écart à la charte : erreur si l'unité est enrichie, simple remarque sinon
  function charte(m) { if (stricte) E.push(m); else I.push(m); }

  // Unité
  var attendu = "u" + String(u.id).padStart(2, "0") + ".js";
  if (fichier !== attendu) err("le fichier devrait s’appeler " + attendu);
  if (["b1", "b2", "c1"].indexOf(u.niveau) === -1) err("niveau inconnu : " + u.niveau);
  if (ctx.THEMES.indexOf(u.theme) === -1) err("thème inconnu : " + u.theme);
  ["titre", "objectif"].forEach(function (k) { if (!chaine(u[k])) err("champ manquant : " + k); });
  if (typeof u.enrichie !== "boolean") err("champ enrichie (true ou false) manquant");
  if (!u.competences) { err("aucune compétence"); return fin(); }
  Object.keys(u.competences).forEach(function (c) { if (!QUANTITES[c]) err("compétence inconnue : " + c); });

  // Identifiants et progression enregistrée
  var ids = {};
  u.activites.forEach(function (a) {
    if (!chaine(a.id)) { err("exercice sans id (" + (a.titre || a.type) + ")"); return; }
    if (!/^[a-z0-9-]+$/.test(a.id)) err("id invalide : " + a.id + " (minuscules, chiffres, tirets)");
    if (ids[a.id]) err("id en double : " + a.id);
    ids[a.id] = true;
  });
  for (var h = 0; h < (IDS_HISTORIQUES[u.id] || 0); h++) {
    if (!ids["a" + h]) err("l’exercice d’origine a" + h + " a disparu : la progression enregistrée serait perdue");
  }
  Object.keys(u.anciensIds || {}).forEach(function (k) {
    if (!ids[u.anciensIds[k]]) err("anciensIds : la cible « " + u.anciensIds[k] + " » n’existe pas");
  });

  // Quantités par compétence
  Object.keys(QUANTITES).forEach(function (c) {
    var n = u.activites.filter(function (a) { return a.comp === c; }).length, q = QUANTITES[c];
    if (n < q[0] || n > q[1]) charte(c + " : " + n + " exercice(s), la charte en demande " + q[0] + " à " + q[1]);
  });

  // Documents
  Object.keys(u.competences).forEach(function (c) {
    var docs = u.competences[c].documents || {};
    var utilises = {};
    u.competences[c].exercices.forEach(function (a) { if (a.doc) utilises[a.doc] = true; });
    Object.keys(docs).forEach(function (k) {
      var d = docs[k];
      if (!utilises[k]) avert(c + " : le document " + k + " n’est utilisé par aucun exercice");
      if (!chaine(d.titre)) err(c + " : document " + k + " sans titre");
      var format = d.format === "court" ? "court" : "long";
      if (c === "lecture") {
        if (!Array.isArray(d.texte) || !d.texte.length) { err("lecture : document " + k + " sans texte"); return; }
        var b = LECTURE[format][u.niveau], n = mots(d.texte.join(" "));
        if (n < b[0] || n > b[1]) charte("lecture : document " + k + " (" + format + ") de " + n + " mots, repère " + b[0] + "–" + b[1]);
      } else if (c === "ecoute") {
        if (!chaine(d.transcription) && !(Array.isArray(d.repliques) && d.repliques.length)) { err("écoute : document " + k + " sans transcription"); return; }
        if (d.repliques) d.repliques.forEach(function (r) {
          if (!chaine(r.loc) || !chaine(r.texte)) err("écoute : réplique incomplète dans " + k);
          else if (!d.locuteurs || !d.locuteurs[r.loc]) err("écoute : " + k + " : voix non définie pour « " + r.loc + " » (locuteurs)");
        });
        var be = ECOUTE[format][u.niveau], ne = mots(texteDoc(d));
        if (ne < be[0] || ne > be[1]) charte("écoute : document " + k + " (" + format + ") de " + ne + " mots, repère " + be[0] + "–" + be[1]);
        if (stricte && !chaine(d.genre)) err("écoute : document " + k + " sans genre (dialogue, interview, annonce…)");
      }
    });
    if (stricte && c === "lecture" && !Object.keys(docs).some(function (k) { return docs[k].format !== "court"; })) err("lecture : il faut au moins un document long");
  });
  if (stricte) {
    var genres = {};
    Object.keys((u.competences.ecoute || {}).documents || {}).forEach(function (k) { genres[souple(u.competences.ecoute.documents[k].genre || "")] = true; });
    if (Object.keys(genres).length < 2) err("écoute : il faut au moins deux types de supports différents");
  }

  // Étapes de progression
  if (stricte) {
    var vues = {};
    var dernier = {};
    u.activites.forEach(function (a) {
      if (ORDRE_ETAPES[a.etape] === undefined) { err(a.id + " : étape manquante ou inconnue (" + ETAPES.join(", ") + ")"); return; }
      vues[a.etape] = true;
      var fil = a.comp + "/" + (a.doc || "-");
      if (dernier[fil] !== undefined && ORDRE_ETAPES[a.etape] < dernier[fil]) err(a.id + " : l’étape « " + a.etape + " » revient en arrière dans " + a.comp + (a.doc ? " (document " + a.doc + ")" : ""));
      dernier[fil] = ORDRE_ETAPES[a.etape];
    });
    ETAPES.forEach(function (e) { if (!vues[e]) err("aucun exercice à l’étape « " + e + " »"); });
    ["lecture", "ecoute"].forEach(function (c) {
      var p = u.activites.find(function (a) { return a.comp === c; });
      if (p && p.etape !== "comprendre") err(c + " : le premier exercice doit être à l’étape « comprendre »");
    });
  }

  // Faits signalés comme incertains (champ aVerifier) : toujours affichés, pour ne pas être oubliés
  (function chercher(x, ou) {
    if (!x || typeof x !== "object") return;
    if (chaine(x.aVerifier)) avert("à vérifier (" + ou + ") : " + x.aVerifier);
    Object.keys(x).forEach(function (k) { if (k !== "document" && k !== "activites") chercher(x[k], x.id || ou); });
  })(u.competences, "unité");

  // Exercices
  var ecritsLongs = 0;
  u.activites.forEach(function (a) {
    var nom = a.id + " (" + a.type + ")";
    if (TYPES.indexOf(a.type) === -1) { err(nom + " : type inconnu"); return; }
    ["titre", "consigne"].forEach(function (k) { if (!chaine(a[k])) err(nom + " : champ manquant : " + k); });
    if (stricte && !chaine(a.sousTitre)) err(nom + " : sous-titre manquant");
    if (stricte && !chaine(a.duree)) err(nom + " : durée manquante");
    (a.regles || []).forEach(function (r) { if (!REGLES[r]) err(nom + " : règle inconnue dans le mémento : " + r); });
    if (a.doc && !a.document) err(nom + " : document « " + a.doc + " » introuvable dans " + a.comp);
    if (stricte && (a.comp === "lecture" || a.comp === "ecoute") && !a.doc) err(nom + " : un exercice de " + a.comp + " doit citer un document (doc)");
    if (stricte && a.comp === "ecoute" && a.type !== "qcm" && a.type !== "saisie" && a.type !== "vraifaux") avert(nom + " : type inhabituel pour une écoute");

    var cleItems = { qcm: "questions", trous: "phrases", texteatrous: "trous" }[a.type] || "items";
    var liste = a[cleItems];
    if (a.type !== "ecriture" && a.type !== "oral") {
      if (!Array.isArray(liste) || !liste.length) { err(nom + " : aucune question (" + cleItems + ")"); return; }
      var q = ITEMS[a.type];
      if (q && (liste.length < q[0] || liste.length > q[1])) charte(nom + " : " + liste.length + " éléments, repère " + q[0] + " à " + q[1]);
    }

    // Réponses à choix
    if (a.type === "qcm" || a.type === "trous") {
      liste.forEach(function (x, k) {
        var ref = nom + " n°" + (k + 1);
        if (a.type === "qcm" && !chaine(x.q)) err(ref + " : question vide");
        if (a.type === "trous" && typeof x.apres !== "string") err(ref + " : champ apres manquant");
        if (!Array.isArray(x.options) || x.options.length < 2) { err(ref + " : il faut au moins deux options"); return; }
        if (new Set(x.options.map(souple)).size !== x.options.length) err(ref + " : options en double");
        if (!(Number.isInteger(x.answer) && x.answer >= 0 && x.answer < x.options.length)) err(ref + " : answer hors des options");
        if (stricte && !chaine(x.explication)) err(ref + " : explication manquante");
        if (x.pourquoi) {
          if (x.pourquoi.length !== x.options.length) err(ref + " : pourquoi doit avoir autant d’éléments que options");
          else x.pourquoi.forEach(function (p, j) { if (j !== x.answer && !chaine(p)) err(ref + " : pourquoi vide pour l’option fausse n°" + (j + 1)); });
        }
      });
      positions(nom, liste.map(function (x) { return x.answer; }));
    }
    if (a.type === "vraifaux") {
      var txt = a.document ? souple(texteDoc(a.document)) : "";
      if (!a.document) err(nom + " : un vrai/faux justifié doit citer un document");
      liste.forEach(function (x, k) {
        var ref = nom + " n°" + (k + 1);
        if (!chaine(x.affirmation)) err(ref + " : affirmation vide");
        if (typeof x.vrai !== "boolean") err(ref + " : vrai doit valoir true ou false");
        if (!Array.isArray(x.justifs) || x.justifs.length < 2) { err(ref + " : il faut au moins deux justifications possibles"); return; }
        if (!(Number.isInteger(x.answer) && x.answer >= 0 && x.answer < x.justifs.length)) { err(ref + " : answer hors des justifications"); return; }
        if (txt) x.justifs.forEach(function (j, n) {
          if (txt.indexOf(souple(j)) === -1) (n === x.answer ? err : avert)(ref + " : citation introuvable dans le document : « " + j + " »");
        });
      });
      positions(nom, liste.map(function (x) { return x.answer; }));
      var nv = liste.filter(function (x) { return x.vrai; }).length;
      if (nv < Math.floor(liste.length / 3) || liste.length - nv < Math.floor(liste.length / 3)) err(nom + " : vrai et faux mal équilibrés (" + nv + " vrai sur " + liste.length + ")");
    }
    if (a.type === "association") {
      liste.forEach(function (x, k) { if (!chaine(x.terme) || !chaine(x.definition)) err(nom + " n°" + (k + 1) + " : terme ou définition vide"); });
      if (new Set(liste.map(function (x) { return souple(x.definition); })).size !== liste.length) err(nom + " : définitions en double");
    }
    if (a.type === "registre") {
      var choix = a.choix || REGISTRES;
      liste.forEach(function (x, k) {
        if (!chaine(x.phrase)) err(nom + " n°" + (k + 1) + " : phrase vide");
        if (choix.indexOf(x.answer) === -1) err(nom + " n°" + (k + 1) + " : answer doit être l’un de : " + choix.join(", "));
        if (stricte && !chaine(x.explication)) err(nom + " n°" + (k + 1) + " : explication manquante");
      });
      var dist = new Set(liste.map(function (x) { return x.answer; })).size;
      if (dist < Math.min(choix.length, 2)) err(nom + " : toutes les réponses sont identiques");
    }

    // Réponses tapées
    if (SAISIES.indexOf(a.type) !== -1) {
      liste.forEach(function (x, k) {
        var ref = nom + " n°" + (k + 1);
        if (!Array.isArray(x.reponses) || !x.reponses.length || !x.reponses.every(chaine)) { err(ref + " : reponses doit contenir au moins une réponse non vide"); return; }
        if (new Set(x.reponses.map(souple)).size !== x.reponses.length) err(ref + " : réponses acceptées en double");
        if (!x.enonce && !x.avant && !x.apres) err(ref + " : ni enonce, ni avant/apres : que doit-on écrire ?");
        if (stricte && !chaine(x.explication)) err(ref + " : explication manquante");
        if (a.type === "correction") {
          if (!chaine(x.enonce)) err(ref + " : la phrase fautive (enonce) manque");
          else if (x.reponses.some(function (r) { return norm(r) === norm(x.enonce); })) err(ref + " : une réponse acceptée est identique à la phrase fautive");
        }
        if (x.cles) {
          if (!Array.isArray(x.cles) || !x.cles.length) err(ref + " : cles doit être une liste de mots-clés");
          else {
            var so = souple(x.reponses[0]);
            var ok = x.cles.every(function (g) { return g.split("|").some(function (alt) { return so.indexOf(souple(alt)) !== -1; }); });
            if (!ok) err(ref + " : la réponse modèle ne contient pas tous les mots-clés");
          }
        }
      });
    }
    if (a.type === "texteatrous") {
      if (!Array.isArray(a.texte) || !a.texte.length) err(nom + " : texte manquant");
      else {
        var marques = (a.texte.join(" ").match(/\{\{(\d+)\}\}/g) || []).map(function (m) { return parseInt(m.slice(2), 10); });
        var attendus = liste.map(function (_, k) { return k + 1; });
        if (marques.slice().sort(function (x, y) { return x - y; }).join(",") !== attendus.join(",")) err(nom + " : les repères {{n}} du texte (" + marques.join(",") + ") ne correspondent pas aux trous (1 à " + liste.length + ")");
      }
      var avecOptions = [];
      liste.forEach(function (t, k) {
        var ref = nom + " trou " + (k + 1);
        if (t.options) {
          if (!(Number.isInteger(t.answer) && t.answer >= 0 && t.answer < t.options.length)) err(ref + " : answer hors des options");
          avecOptions.push(t.answer);
        } else if (!Array.isArray(t.reponses) || !t.reponses.length || !t.reponses.every(chaine)) err(ref + " : il faut des options ou des reponses");
        if (stricte && !chaine(t.explication)) err(ref + " : explication manquante");
      });
      if (avecOptions.length >= 4) positions(nom, avecOptions);
    }

    // Productions
    if (a.type === "ecriture") {
      if (!(a.min > 0 && a.max > a.min)) err(nom + " : min et max incohérents");
      if (!Array.isArray(a.checklist) || a.checklist.length < 3) err(nom + " : la grille (checklist) doit avoir au moins 3 critères");
      if (!chaine(a.modele)) err(nom + " : modèle manquant");
      if (stricte && !(Array.isArray(a.objectifs) && a.objectifs.length)) err(nom + " : objectifs linguistiques manquants");
      if (a.comp === "ecriture") {
        var bornes = ECRIT[u.niveau];
        if (a.min < bornes.min || a.max > bornes.max) charte(nom + " : " + a.min + "–" + a.max + " mots, hors des repères " + NOMS(u.niveau) + " (" + bornes.min + "–" + bornes.max + ")");
        if (a.min >= bornes.long) ecritsLongs++;
      }
      if (chaine(a.modele)) {
        var nm = mots(a.modele.replace(/^Objet :.*$/m, ""));
        if (nm < a.min || nm > a.max * 1.1) charte(nom + " : le modèle fait " + nm + " mots pour une consigne de " + a.min + "–" + a.max);
      }
    }
    if (a.type === "oral") {
      if (!chaine(a.dureeCible)) err(nom + " : durée cible manquante");
      if (!Array.isArray(a.preparation) || a.preparation.length < 4) charte(nom + " : il faut au moins 4 expressions utiles (preparation)");
      if (!Array.isArray(a.checklist) || a.checklist.length < 4) charte(nom + " : la grille doit avoir au moins 4 critères");
      if (!chaine(a.modele)) err(nom + " : modèle manquant");
    }

    // Typographie (unités enrichies) : apostrophe typographique
    if (stricte) {
      var brut = JSON.stringify(a, function (k, v) { return k === "document" ? undefined : v; });
      if (/\p{L}'\p{L}/u.test(brut)) avert(nom + " : apostrophe droite (') : utiliser l’apostrophe typographique (’)");
    }
  });
  if (u.activites.some(function (a) { return a.comp === "ecriture"; }) && !ecritsLongs) charte("écriture : aucune tâche longue (minimum ≥ " + ECRIT[u.niveau].long + " mots)");

  function positions(nom, ans) {
    if (ans.length < 4) return;
    var c = {}; ans.forEach(function (x) { c[x] = (c[x] || 0) + 1; });
    var max = Math.max.apply(null, Object.keys(c).map(function (k) { return c[k]; }));
    if (Object.keys(c).length < 2 || max / ans.length > 0.6) charte(nom + " : bonnes réponses trop souvent à la même position (" + ans.join(",") + ")");
  }

  return fin();
  function fin() {
    var etat = E.length ? "✗" : stricte ? "✓" : "·";
    var compte = Object.keys(QUANTITES).map(function (c) { return u.activites.filter(function (a) { return a.comp === c; }).length; }).join("/");
    console.log(etat + " Unité " + String(u.id).padStart(2, " ") + " " + NOMS(u.niveau) + "  " + (stricte ? "enrichie " : "d’origine") + "  [" + compte + "]  " + u.titre);
    E.forEach(function (m) { console.log("    ERREUR  " + m); });
    A.forEach(function (m) { console.log("    attention  " + m); });
    if (!stricte && I.length) bilan.aEnrichir.push(u.id);
    bilan.erreurs += E.length; bilan.avertissements += A.length;
  }
}
function NOMS(n) { return String(n).toUpperCase(); }

/* ---------- Le site charge-t-il bien toutes les unités ? ---------- */

function verifierChargement() {
  var html = fs.readFileSync(path.join(RACINE, "index.html"), "utf8");
  var sw = fs.readFileSync(path.join(RACINE, "sw.js"), "utf8");
  var pb = [];
  fichiers.forEach(function (f) {
    var n = html.split('src="unites/' + f + '"').length - 1;
    if (n !== 1) pb.push("index.html charge " + f + " " + n + " fois (il faut 1)");
  });
  var m = sw.match(/NB_UNITES\s*=\s*(\d+)/);
  if (!m || +m[1] !== fichiers.length) pb.push("sw.js : NB_UNITES devrait valoir " + fichiers.length);
  var ids = ctx.PARCOURS.unites.map(function (u) { return u.id; });
  for (var k = 1; k <= ids.length; k++) if (ids.indexOf(k) === -1) pb.push("l’unité " + k + " manque");
  pb.forEach(function (p) { console.log("✗ " + p); });
  bilan.erreurs += pb.length;
}

/* ---------- Brouillon du registre ---------- */

function ligneRegistre(u) {
  function liste(c, f) { return u.activites.filter(function (a) { return a.comp === c; }).map(f).filter(Boolean).join(" ; "); }
  var regles = {};
  u.activites.forEach(function (a) { (a.regles || []).forEach(function (r) { regles[r] = true; }); });
  var docs = [];
  ["lecture", "ecoute"].forEach(function (c) {
    var d = (u.competences[c] || {}).documents || {};
    Object.keys(d).forEach(function (k) { docs.push((c === "lecture" ? "📖 " : "🎧 ") + d[k].titre + (d[k].genre ? " (" + d[k].genre.toLowerCase() + ")" : "")); });
  });
  return "| " + u.id + " | " + NOMS(u.niveau) + " | " + u.titre + " | " + (u.enrichie ? "enrichie" : "d’origine") + " | " +
    liste("grammaire", function (a) { return a.sousTitre; }) + " | " + Object.keys(regles).join(", ") + " | " +
    liste("vocabulaire", function (a) { return a.type === "ecriture" ? "" : a.sousTitre; }) + " | " + docs.join(" ; ") + " |";
}

/* ---------- Lancement ---------- */

console.log("Vérification de " + fichiers.length + " fichiers d’unités, " + ctx.REGLES.length + " règles.\n");
verifierChargement();
ctx.PARCOURS.unites.forEach(function (u) {
  if (filtre.length && filtre.indexOf(u.id) === -1) return;
  verifierUnite(u, path.basename(origine[u.id]));
});
console.log("\n" + bilan.erreurs + " erreur(s), " + bilan.avertissements + " avertissement(s).");
if (bilan.aEnrichir.length) console.log("Unités d’origine encore à enrichir selon la charte : " + bilan.aEnrichir.join(", ") + ".");
if (avecRegistre) {
  console.log("\nBrouillon pour REGISTRE.md :\n");
  console.log("| U | Niv. | Titre | État | Grammaire (exercices) | Règles liées | Lexique | Documents |");
  console.log("|---|---|---|---|---|---|---|---|");
  ctx.PARCOURS.unites.forEach(function (u) { if (!filtre.length || filtre.indexOf(u.id) !== -1) console.log(ligneRegistre(u)); });
}
if (bilan.erreurs) process.exitCode = 1;
