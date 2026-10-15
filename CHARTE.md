# Charte pédagogique du parcours « Mon français » (B1 → C1)

Document de référence pour enrichir les unités, une conversation par lot de trois unités.
L’unité 1 (« Raconter un souvenir », `unites/u01.js`) est l’unité pilote : en cas de doute, s’en inspirer.

Apprenante : une étudiante chinoise, B1 solide, qui vise des études universitaires en France,
environ cinq heures par semaine, surtout sur iPhone.

---

## 1. Méthode de travail pour chaque lot

1. Lire cette charte et `REGISTRE.md` (ce qui est déjà pris : points de grammaire, champs lexicaux, documents).
2. Pour chaque unité du lot : repartir du fichier `unites/uNN.js` existant, **garder les exercices d’origine**
   (ids `a0`, `a1`…) et ajouter les nouveaux exercices autour d’eux.
3. Passer l’unité à `enrichie: true`.
4. Lancer `node verifier.js NN NN NN` et corriger jusqu’à **0 erreur**. Les avertissements « à vérifier »
   sont volontaires : ils signalent un fait à contrôler.
5. Mettre à jour `REGISTRE.md` (`node verifier.js --registre` produit un brouillon des lignes).
6. Si de nouvelles règles sont ajoutées au mémento (`regles.js`), les noter dans le registre.
7. Changer `VERSION` dans `sw.js` (v5 → v6…), mettre à jour les chiffres du `README.md`.
8. Livrer le ZIP complet du site et le `REGISTRE.md` à jour.

Ne jamais modifier : le design (`style.css`, sauf ajout pour un nouveau format), les comptes (`config.js`,
`supabase*.sql`), les notifications (`supabase/functions`, partie rappels de `app.js` et `sw.js`).

---

## 2. Principes (inspirés de TV5MONDE Apprendre le français)

- **Un document, plusieurs exercices.** Chaque texte ou enregistrement est exploité par plusieurs exercices
  de difficulté croissante, au lieu d’un seul grand questionnaire.
- **Des exercices courts** (10 à 20 minutes), chacun noté séparément : la série de jours et l’objectif du jour
  progressent à chaque exercice terminé.
- **Toujours une explication.** Chaque réponse, juste ou fausse, est expliquée en une ou deux phrases simples.
- **Du sens avant la forme.** On comprend le document avant d’en étudier la langue ; la grammaire et le
  vocabulaire reprennent des phrases des documents de l’unité.
- **Réemployer.** Chaque unité se termine par des productions qui obligent à réutiliser ce qui a été vu.

---

## 3. Structure d’une unité

Six compétences, toujours dans cet ordre, avec ces quantités (contrôlées par `verifier.js`) :

| Compétence | Exercices | Types d’exercices à couvrir |
|---|---|---|
| Lecture | 4 à 6 | compréhension globale ; questions détaillées ; vrai/faux justifié ; vocabulaire en contexte ; connecteurs et structure ; inférences et implicite (B2-C1, léger en B1) |
| Écoute | 4 à 6 | sujet et interlocuteurs ; informations précises ; opinions et arguments ; ton et sous-entendus ; prise de notes |
| Vocabulaire | 4 à 6 | définitions ; synonymes et antonymes ; mot juste ; expression dans un dialogue ; registres (familier, courant, soutenu) ; réemploi |
| Grammaire | 6 à 10 | observation de la règle ; phrases à trous ; QCM avec explication des erreurs ; correction de phrases fautives ; transformation ; reformulation sous contrainte ; texte à compléter ; réinvestissement en contexte |
| Écriture | 3 à 5 | compléter ou améliorer un texte ; changer de registre ; courriel ou commentaire ; argumentation (B2-C1) ; texte long avec grille |
| Oral | 3 à 5 | réponse d’une minute ; décrire et commenter ; exposé avec plan ; débat ; simulation universitaire ou professionnelle |

Supports :

- **Lecture** : au moins un document long et, de préférence, un deuxième document d’un autre genre
  (récit, article, tribune, extrait littéraire, courriel, forum, page institutionnelle…).
- **Écoute** : au moins deux genres différents par unité (dialogue, interview, chronique, annonce,
  mini-reportage, cours, débat, témoignage, message vocal). L’unité pilote en a quatre.
- La transcription n’est accessible qu’**après une écoute complète ou après la vérification** (géré par le site).

---

## 4. Progression interne : comprendre → repérer → interpréter → réemployer

Chaque exercice porte un champ `etape` :

| Étape | Code | Ce qu’on demande |
|---|---|---|
| Comprendre l’essentiel | `comprendre` | type de document, sujet, qui parle, idée principale, ton général |
| Repérer les détails | `reperer` | informations précises, vrai/faux justifié, mots du texte, formes grammaticales |
| Interpréter | `interpreter` | sens en contexte, intentions, implicite, choix de la bonne forme selon le sens, correction |
| Réemployer | `reemployer` | produire : phrases, texte, prise de parole |

Règles vérifiées automatiquement :

- les quatre étapes sont présentes dans l’unité ;
- le premier exercice de lecture et le premier exercice d’écoute sont à l’étape `comprendre` ;
- pour un même document, et dans les compétences sans document, les étapes ne reviennent jamais en arrière.

Ordre conseillé dans chaque compétence : du plus guidé au plus libre. En grammaire : observer → choisir →
transformer → corriger → compléter un texte entier.

---

## 5. Différenciation par niveau

| | B1 : consolider | B2 : argumenter | C1 : nuancer |
|---|---|---|---|
| Situations | concrètes, vie quotidienne, premiers pas à l’université | débats de société, histoire, monde du travail, cours | presse d’opinion, littérature, recherche, synthèse, dissertation |
| Lecture | informations explicites, chronologie, structure du récit | thèse, arguments, exemples, connecteurs logiques | implicite, ironie, point de vue, présupposés, choix des mots |
| Écoute | une ou deux voix, débit modéré, informations pratiques | plusieurs voix, opinions qui s’opposent | chronique, ironie, sous-entendus, nuances de certitude |
| Grammaire | consolidation : temps du passé, pronoms, relatifs simples, comparaison, accord | subjonctif, concession, passif, gérondif, nominalisation, discours rapporté | modalisation, concordance, passé simple, tournures soutenues, variété syntaxique |
| Vocabulaire | mots fréquents, expressions courantes, familier/courant | lexique abstrait, mots du débat, collocations | précision, synonymes nuancés, registre soutenu, figures |
| Écriture | récit, description, courriel, avis simple | essai argumenté, lettre formelle, résumé, commentaire de données | tribune, synthèse, commentaire, introduction de dissertation |
| Oral | raconter, décrire, se présenter, donner son avis | défendre une position, exposé structuré | débat nuancé, exposé long, reformulation, concession |
| Explications | très simples, un exemple | métalangage courant (subordonnée, concession…) | métalangage précis, nuances d’usage |

En B1, une question d’inférence reste possible si elle s’appuie sur une phrase claire du texte.

---

## 6. Repères chiffrés par niveau

Longueurs en mots (contrôlées par `verifier.js`).

| | B1 | B2 | C1 |
|---|---|---|---|
| Document de lecture long | 200–420 | 350–650 | 500–900 |
| Document de lecture court (`format: "court"`) | 90–220 | 180–400 | 250–550 |
| Transcription d’écoute | 130–300 (1 à 2 min) | 220–450 (2 à 3 min) | 300–600 (3 à 4 min) |
| Écoute courte : annonce, message (`format: "court"`) | 50–150 | 80–200 | 100–250 |
| Productions écrites : bornes des consignes | 50–220 | 100–320 | 150–450 |
| Tâche écrite longue (au moins une par unité) | min ≥ 140 | min ≥ 220 | min ≥ 280 |
| Prise de parole | 1 à 2 min | 2 à 3 min (exposé : 3 à 5) | 3 à 5 min (exposé : 5 à 8) |
| Temps de préparation à l’oral (`prepMinutes`) | 1 | 2 à 3 | 5 à 10 |

Nombre d’éléments par exercice :

| Type | Éléments |
|---|---|
| QCM (`qcm`) | 4 à 8 questions, 3 options en général |
| Vrai/faux justifié (`vraifaux`) | 5 à 7 affirmations, au moins un tiers de vrai et un tiers de faux |
| Association (`association`) | 6 à 10 paires |
| Phrases à trous (`trous`) | 6 à 10 phrases |
| Choix du registre (`registre`) | 6 à 10 phrases, les trois registres représentés |
| Réponse tapée (`correction`, `transformation`, `reformulation`, `saisie`) | 5 à 8 éléments |
| Texte à compléter (`texteatrous`) | 6 à 12 trous |

Autres repères :

- Le modèle d’une production écrite respecte la fourchette de mots de la consigne (vérifié).
- Grille d’écriture : 4 à 7 critères. Grille d’oral : 4 à 6 critères. Au moins 4 expressions utiles à l’oral.
- Durée indicative d’un exercice : 10 à 20 min ; texte long ou exposé : 30 à 45 min.
- Bonnes réponses : jamais plus de 60 % au même rang dans un exercice (vérifié), même si le site mélange les options.

---

## 7. Ancrage culturel

- **Thèmes** : actualité et société, littérature et francophonie, université (fonctionnement, méthodes,
  examens), histoire, sciences, vie quotidienne en France.
- **Université** : dès que possible, une tâche liée aux études (TD, exposé, courriel à un enseignant,
  prise de notes, simulation d’oral).
- **Interculturalité et liens avec la Chine** quand c’est naturel : un exemple, un personnage, une comparaison,
  une tâche (« présente… en Chine »). Pas de clichés ; préférer l’expérience personnelle (« chez toi, comment… ? »).
  Les unités avec un lien fort portent `chine: true`.
- **Variété des voix** : âges, métiers, régions, francophonie (Québec, Belgique, Afrique…).
- **Personnages** : prénoms variés, ne pas réutiliser les mêmes d’une unité à l’autre (voir le registre).

---

## 8. Exactitude

- **Pas de statistiques précises douteuses.** Préférer « une grande majorité », « de plus en plus »,
  ou une donnée stable et connue. Ne jamais inventer un chiffre présenté comme réel.
- **Documents inventés** : la plupart des documents sont écrits pour le parcours (personnages, radio,
  associations fictifs). Ils ne doivent contenir aucune fausse information sur le monde réel. Noms de
  radios, d’entreprises ou d’émissions : inventés et plausibles ; numéros de téléphone : jamais réels.
- **Faits réels** (dates, œuvres, lois, personnes) : uniquement ce qui est sûr. Une citation authentique
  porte une `source`.
- **Tout fait incertain est signalé** avec un champ `aVerifier` sur le document ou l’exercice concerné.
  `verifier.js` l’affiche à chaque lancement tant qu’il n’est pas retiré (après vérification).
- **Une seule bonne réponse défendable.** Si une autre option est grammaticalement possible, la reformuler
  ou l’accepter (réponses tapées : ajouter la variante dans `reponses`).
- **Langue** : orthographe rectifiée non obligatoire, mais cohérente ; apostrophe typographique ’,
  guillemets « » avec espaces, tutoiement de l’apprenante dans les consignes.

---

## 9. Format technique

### 9.1 Fichier d’unité

Chaque unité est un fichier `unites/uNN.js` qui appelle `ajouterUnite({ … })`.
Il est chargé par `index.html` (une balise `<script>`) et mis en cache par `sw.js` (`NB_UNITES`).

```js
ajouterUnite({
  id: 1,                       // ne jamais changer
  niveau: "b1",                // b1, b2 ou c1
  theme: "Vie quotidienne",    // l’un des THEMES de contenu.js
  chine: true,                 // facultatif : badge et filtre « Liens avec la Chine »
  titre: "Raconter un souvenir",
  objectif: "Raconter un événement passé en alternant récit et description.",
  enrichie: true,              // true = la charte s’applique entièrement
  competences: {
    lecture:     { documents: { d1: {…}, d2: {…} }, exercices: [ … ] },
    ecoute:      { documents: { e1: {…} },          exercices: [ … ] },
    vocabulaire: { exercices: [ … ] },
    grammaire:   { exercices: [ … ] },
    ecriture:    { exercices: [ … ] },
    oral:        { exercices: [ … ] }
  }
});
```

Le site met tous les exercices à plat dans l’ordre des compétences puis des exercices.

### 9.2 Champs communs à tous les exercices

| Champ | Obligatoire | Rôle |
|---|---|---|
| `id` | oui | identifiant unique dans l’unité, **définitif** (voir § 10) |
| `type` | oui | `qcm`, `vraifaux`, `association`, `trous`, `texteatrous`, `registre`, `correction`, `transformation`, `reformulation`, `saisie`, `ecriture`, `oral` |
| `titre` | oui | nom court affiché dans la rangée d’exercices (« Vrai ou faux justifié ») |
| `sousTitre` | oui | titre de l’exercice (« La madeleine de Proust ») |
| `etape` | oui | `comprendre`, `reperer`, `interpreter`, `reemployer` |
| `duree` | oui | « 10 min » |
| `consigne` | oui | phrase d’instruction, au tutoiement |
| `doc` | lecture et écoute | clé du document de la même compétence (`"d1"`, `"e2"`) |
| `regles` | non | ids de règles du mémento (`regles.js`) ; elles doivent exister |
| `fiche` | non | rappel de règle en HTML, affiché au-dessus de l’exercice (types à trous et réponses tapées) |
| `aVerifier` | non | fait incertain à contrôler |

### 9.3 Documents

Lecture :

```js
d1: {
  titre: "La madeleine de Proust, ou le pouvoir des odeurs",
  genre: "Article de magazine",
  format: "long",                       // "long" (défaut) ou "court"
  source: "Citation : Marcel Proust, Du côté de chez Swann, 1913",   // seulement si authentique
  texte: ["Paragraphe 1…", "Paragraphe 2…"]                          // HTML simple permis (<em>)
}
```

Écoute, une seule voix :

```js
e3: { titre: "Appel à témoignages", genre: "Annonce à la radio", format: "court",
      voix: "h",                        // "f" ou "h"
      transcription: "Vous écoutez Radio Belle-Cour…" }
```

Écoute, plusieurs voix :

```js
e2: {
  titre: "Les photos de vacances", genre: "Dialogue entre un frère et une sœur",
  locuteurs: { "Inès": "f", "Bastien": "h" },     // "f2" ou "h2" : variante de voix pour une 2e femme ou un 2e homme
  repliques: [
    { loc: "Inès", texte: "Oh, regarde cette photo ! …" },
    { loc: "Bastien", texte: "Douze et quatorze, plutôt. …" }
  ]
}
```

La lecture se fait phrase par phrase par la synthèse vocale de l’appareil : éviter les abréviations,
écrire les nombres en lettres quand la lecture pourrait être ambiguë (« huit heures et demie »).

### 9.4 Les types d’exercices

**QCM** (`qcm`). Options mélangées à l’affichage. `pourquoi` (facultatif) explique chaque mauvaise option :
c’est le « QCM avec explication des erreurs ». L’élément de la bonne réponse y est vide.

```js
{
  id: "gra4", type: "qcm", titre: "L’accord du participe passé", sousTitre: "Être ou avoir : accorder ou pas ?",
  etape: "interpreter", duree: "10 min", regles: ["accord-participe-passe"],
  consigne: "Choisis la phrase correcte. Si tu te trompes, lis l’explication de ton erreur.",
  questions: [
    { q: "Chloé raconte :",
      options: ["Je suis arrivé en retard.", "Je suis arrivée en retard.", "Je suis arrivés en retard."],
      answer: 1,                                   // index de la bonne option, à partir de 0
      pourquoi: ["Avec être, le participe s’accorde avec le sujet : Chloé est une femme.", "", "« je » est singulier."],
      explication: "Arriver se conjugue avec être : accord avec le sujet." }
  ]
}
```

**Vrai/faux justifié** (`vraifaux`). L’apprenante coche vrai ou faux, puis choisit la phrase du document
qui le prouve (un point chacun). `justifs[answer]` doit être une citation **exacte** du document
(vérifié) ; les autres sont aussi des citations, plausibles mais non probantes.

```js
{
  id: "lec3", type: "vraifaux", titre: "Vrai ou faux justifié", sousTitre: "La madeleine de Proust",
  etape: "reperer", duree: "15 min", doc: "d2",
  consigne: "Dis si l’affirmation est vraie ou fausse, puis choisis la phrase du texte qui le prouve.",
  items: [
    { affirmation: "Le narrateur comprend tout de suite d’où vient son bonheur.", vrai: false,
      justifs: ["Il trempe un morceau de gâteau dans son thé",
                "il ressent un bonheur intense qu’il ne comprend pas",
                "Toute son enfance revient alors"],
      answer: 1,
      explication: "Il ne comprend pas d’abord ; le souvenir arrive ensuite." }
  ]
}
```

**Association** (`association`). Chaque terme est relié à sa définition par une liste déroulante.

```js
{ id: "voc1", type: "association", titre: "Définitions", sousTitre: "Le temps et les émotions",
  etape: "comprendre", duree: "10 min", consigne: "Associe chaque expression à sa définition.",
  items: [ { terme: "la veille", definition: "le jour d’avant" }, { terme: "le lendemain", definition: "le jour d’après" } ] }
```

**Phrases à trous** (`trous`). Une liste déroulante dans chaque phrase. Sert aussi pour le mot juste
et l’expression dans un dialogue (avec « — » pour les répliques).

```js
{ id: "gra2", type: "trous", titre: "Il y a, depuis, pendant", sousTitre: "Situer dans le temps",
  etape: "reperer", duree: "10 min", regles: ["expressions-de-duree"],
  fiche: "<p><strong>Il y a</strong> + durée : un moment passé…</p>",
  consigne: "Choisis l’expression de temps qui convient.",
  phrases: [
    { avant: "J’habite à Lyon", options: ["il y a", "en", "depuis"], answer: 2, apres: "septembre.",
      explication: "La situation continue : depuis." }
  ] }
```

**Choix du registre** (`registre`). Trois boutons : familier, courant, soutenu (`choix` permet d’autres étiquettes).

```js
{ id: "voc4", type: "registre", titre: "Registres de langue", sousTitre: "Familier, courant ou soutenu ?",
  etape: "interpreter", duree: "10 min", regles: ["registres-de-langue"],
  consigne: "Pour chaque phrase, choisis le registre.",
  items: [ { phrase: "J’ai flippé quand j’ai vu que le train était parti.", answer: "familier",
             explication: "« Flipper » (avoir peur) est familier." } ] }
```

**Réponses tapées** : `correction`, `transformation`, `reformulation`, `saisie`.
Même format, seul l’affichage de l’énoncé change (« Phrase à corriger », « Phrase de départ », `libelle`
pour le personnaliser). La comparaison ignore majuscules, ponctuation, espaces et forme de l’apostrophe ;
un accent oublié est signalé mais compte juste. Mettre dans `reponses` **toutes** les formulations correctes.

- `enonce` : phrase de départ ou phrase fautive (obligatoire pour `correction`) ;
- `aide` : indication courte (« Une erreur d’accord. », « Utilise venir de. ») ;
- `avant` / `apres` : texte autour du champ ; sans eux, le champ occupe toute la ligne (phrase entière à taper) ;
- `cles` : pour la **prise de notes**, mots-clés obligatoires au lieu d’une réponse exacte ;
  `"a|b"` = a ou b ; `reponses[0]` sert de note modèle et doit contenir les mots-clés (vérifié).

```js
{ id: "gra5", type: "reformulation", titre: "Venir de, être en train de, aller", sousTitre: "Reformuler sous contrainte",
  etape: "interpreter", duree: "15 min", regles: ["periphrases-verbales"],
  consigne: "Reformule la phrase avec la tournure demandée. Écris seulement les mots qui manquent.",
  items: [
    { enonce: "Le train était parti une minute avant mon arrivée.", aide: "Utilise venir de.",
      avant: "Quand je suis arrivée sur le quai, le train", apres: ".",
      reponses: ["venait de partir", "venait juste de partir"],
      explication: "Venir de à l’imparfait = passé récent dans un récit." }
  ] }

{ id: "gra6", type: "correction", …,
  items: [ { enonce: "Je me rappelle de cette soirée.", aide: "Une erreur de construction.",
             reponses: ["Je me rappelle cette soirée.", "Je me souviens de cette soirée."],
             explication: "Se rappeler quelque chose, sans « de »." } ] }

{ id: "eco3", type: "saisie", titre: "Prise de notes", doc: "e4", libelle: "", …,
  items: [ { avant: "Fréquence :", cles: ["mois|mensuel"], reponses: ["une fois par mois"],
             explication: "« Une fois par mois, on se retrouve… »" } ] }
```

**Texte à compléter** (`texteatrous`). Les trous sont notés `{{1}}`, `{{2}}`… dans les paragraphes,
une fois chacun, dans l’ordre de la liste `trous`. Un trou est tapé (`reponses`) ou choisi (`options` + `answer`).
`indice` s’affiche entre parenthèses après le trou (infinitif, mot de départ).

```js
{ id: "gra7", type: "texteatrous", titre: "Texte à compléter", sousTitre: "Tous les temps du récit",
  etape: "reemployer", duree: "20 min", regles: ["passe-compose-imparfait"],
  consigne: "Conjugue les verbes entre parenthèses.",
  texte: ["C’{{1}} un samedi de juillet. Il {{2}} très chaud…"],
  trous: [
    { indice: "être", reponses: ["était"], explication: "Le décor : imparfait." },
    { indice: "faire", reponses: ["faisait"], explication: "La météo : imparfait." }
  ] }
```

**Production écrite** (`ecriture`). Compteur de mots, enregistrement automatique, grille d’autoévaluation
(qui donne le score), bouton « Copier pour une correction par Claude ». Utilisable aussi en vocabulaire pour un réemploi court.

```js
{ id: "ecr2", type: "ecriture", titre: "Changer de registre", sousTitre: "Du message à une amie au blog de la classe",
  etape: "interpreter", duree: "20 min", regles: ["registres-de-langue"],
  consigne: "Réécris la même histoire dans un registre courant, pour le blog de ta classe.",
  depart: "Trop la loose hier 😩 J’ai raté mon train…",   // facultatif : texte de départ, copié dans le cahier
  objectifs: ["Remplacer les mots familiers", "Écrire des phrases complètes"],
  min: 60, max: 110,
  checklist: ["Il n’y a plus de mots familiers", "Mes phrases sont complètes", "…"],
  modele: "Hier, j’ai vécu une journée un peu compliquée…" }   // entre min et max mots ; \n pour les paragraphes
```

**Production orale** (`oral`). Préparation minutée, enregistrement, transcription automatique, modèle lu à voix haute, grille.

```js
{ id: "ora3", type: "oral", titre: "Simulation universitaire", sousTitre: "Se présenter par un souvenir",
  etape: "reemployer", duree: "25 min",
  situation: "Premier cours d’un atelier de conversation à l’université…",   // facultatif
  consigne: "Présente-toi en deux minutes, en t’adressant au groupe.",
  dureeCible: "2 minutes", prepMinutes: 2,
  plan: ["Te présenter", "Situer le souvenir", "Raconter", "Dire ce que ça a changé"],   // facultatif
  objectifs: ["…"],                                                                          // facultatif
  preparation: ["Bonjour à tous, je m’appelle…", "J’ai commencé le français il y a…", "…"],
  checklist: ["Je me suis présentée clairement", "J’ai alterné imparfait et passé composé", "…"],
  modele: "Bonjour à tous, je m’appelle Mei…" }
```

---

## 10. Identifiants et progression enregistrée (règles absolues)

- La progression est enregistrée sous la clé `u<id de l’unité>-<id de l’exercice>` (`u1-a3`, `u1-gra5`).
- **Ne jamais changer** l’id d’une unité ni d’un exercice existant, ni supprimer un exercice d’origine
  (`a0`, `a1`… : `verifier.js` bloque s’il en manque un).
- On peut changer librement l’ordre, les titres, les consignes et le contenu des exercices.
- Ids des nouveaux exercices : `lec1…`, `eco1…`, `voc1…`, `gra1…`, `ecr1…`, `ora1…`, sans réutiliser un numéro.
- Si un id doit vraiment changer, déclarer dans l’unité `anciensIds: { "ancien": "nouveau" }` : le site
  renomme la progression une seule fois, au chargement. Les clés inconnues ne sont jamais effacées.

---

## 11. Avant de livrer : liste de contrôle

- [ ] Quantités par compétence conformes (vérifié)
- [ ] Les quatre étapes présentes, ordre respecté (vérifié)
- [ ] Longueurs des documents et des productions dans les repères du niveau (vérifié)
- [ ] Toutes les réponses expliquées, une seule bonne réponse défendable, variantes acceptées
- [ ] Citations des vrai/faux exactes (vérifié)
- [ ] Règles du mémento existantes (vérifié), nouvelles règles ajoutées si besoin
- [ ] Aucune répétition avec `REGISTRE.md` sans angle nouveau
- [ ] Faits incertains signalés par `aVerifier`
- [ ] `node verifier.js` : 0 erreur
- [ ] `REGISTRE.md`, `README.md` et `VERSION` de `sw.js` mis à jour
