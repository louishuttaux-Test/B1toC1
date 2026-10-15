/*
  CADRE DU PARCOURS
  -----------------
  Ce fichier définit les thèmes, les niveaux et les compétences.
  Les unités sont dans le dossier unites/ (u01.js … u30.js), une par fichier,
  chargées par index.html juste après ce fichier.

  Chaque fichier d'unité appelle ajouterUnite({ … }) : voir CHARTE.md pour le format.
  Vérification après toute modification :  node verifier.js

  Important pour ne pas perdre la progression enregistrée :
  - ne jamais changer l'id d'une unité ni l'id d'un exercice existant ;
  - les exercices d'origine gardent leurs ids « a0 », « a1 »… ;
  - si un id doit vraiment changer, déclarer  anciensIds: { "ancien": "nouveau" }  dans l'unité.
*/

// Thèmes repris de TV5 Monde, plus les études universitaires.
window.THEMES = [
  "Information, géopolitique et histoire",
  "Culture, littérature et francophonie",
  "Droits humains",
  "Gastronomie, mode",
  "Sciences, innovation et environnement",
  "Vie quotidienne",
  "Sport et tourisme",
  "Études et université"
];

// Les six compétences, dans l'ordre d'affichage d'une unité.
window.COMPETENCES_DEF = [
  { id: "lecture", nom: "Compréhension écrite", court: "Lire", ico: "📖" },
  { id: "ecoute", nom: "Compréhension orale", court: "Écouter", ico: "🎧" },
  { id: "vocabulaire", nom: "Vocabulaire", court: "Vocabulaire", ico: "🧩" },
  { id: "grammaire", nom: "Grammaire", court: "Grammaire", ico: "✏️" },
  { id: "ecriture", nom: "Production écrite", court: "Écrire", ico: "📝" },
  { id: "oral", nom: "Expression orale", court: "Parler", ico: "🎙️" }
];

// Les quatre étapes de la progression interne d'une unité.
window.ETAPES = {
  comprendre: "Comprendre l’essentiel",
  reperer: "Repérer les détails",
  interpreter: "Interpréter",
  reemployer: "Réemployer"
};

window.PARCOURS = {
  niveaux: [
    { id: "b1", titre: "Consolider le B1", description: "Raconter, décrire, comparer, donner son avis : gagner en aisance dans les situations de tous les jours." },
    { id: "b2", titre: "Installer le B2", description: "Argumenter, comprendre l’histoire et l’actualité, adapter son registre à la situation." },
    { id: "c1", titre: "Viser le C1", description: "Saisir l’implicite, écrire avec précision, nuancer sa pensée." }
  ],
  unites: []
};

/*
  Enregistre une unité et prépare la liste à plat de ses exercices (u.activites),
  dans l'ordre des compétences puis dans l'ordre des exercices.
  Chaque exercice reçoit : comp (sa compétence) et, s'il cite un document, document.
*/
window.ajouterUnite = function (u) {
  var comps = u.competences || {};
  u.activites = [];
  window.COMPETENCES_DEF.forEach(function (c) {
    var bloc = comps[c.id];
    if (!bloc) return;
    (bloc.exercices || []).forEach(function (ex) {
      ex.comp = c.id;
      if (ex.doc && bloc.documents) ex.document = bloc.documents[ex.doc];
      if (!ex.titre) ex.titre = c.court;
      u.activites.push(ex);
    });
  });
  var P = window.PARCOURS;
  P.unites = P.unites.filter(function (x) { return x.id !== u.id; });
  P.unites.push(u);
  P.unites.sort(function (a, b) { return a.id - b.id; });
};
