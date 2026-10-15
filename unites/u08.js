/* Unité 8 : Voyager en train (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 8,
  niveau: "b1",
  theme: "Sport et tourisme",
  titre: "Voyager en train",
  objectif: "Réserver un billet, comprendre une annonce en gare, raconter un trajet.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Voyager en train en France sans se ruiner",
          format: "long",
          texte: [
            "La France possède l’un des réseaux ferroviaires les plus denses d’Europe. Les TGV, les trains à grande vitesse, relient Paris à Lyon en deux heures et à Marseille en un peu plus de trois heures. Pour les trajets régionaux, on prend le TER, plus lent mais souvent moins cher. La nuit, quelques trains de nuit permettent aussi de partir le soir et d’arriver le matin, sans payer d’hôtel.",
            "Le prix d’un billet de TGV varie beaucoup : plus on réserve tôt, moins on paie. Les billets sont souvent mis en vente trois à quatre mois avant le départ. Les jeunes de 12 à 27 ans peuvent acheter une carte de réduction valable un an, qui devient vite rentable si l’on voyage plusieurs fois. Il existe aussi des TGV à bas prix, avec moins de confort et des gares parfois éloignées du centre.",
            "Quelques conseils pratiques : arriver au moins vingt minutes avant le départ, car le numéro de la voie n’est souvent affiché qu’au dernier moment. Vérifier le numéro de sa voiture sur le billet, pour monter directement au bon endroit. Et garder son billet sur son téléphone jusqu’à l’arrivée : le contrôleur peut passer à tout moment.",
            "En cas de retard important, la compagnie rembourse une partie du billet. Encore faut-il le demander ! Beaucoup de voyageurs l’ignorent et ne font jamais la démarche."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Voyager en train en France sans se ruiner",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quelle est la différence entre le TGV et le TER ?",
              options: [
                "Le TER est plus rapide.",
                "Le TER ne circule que la nuit.",
                "Le TGV relie les grandes villes à grande vitesse, le TER fait des trajets régionaux."
              ],
              answer: 2,
              explication: "Le TER est « plus lent mais souvent moins cher »."
            },
            {
              q: "Comment payer un billet de TGV moins cher ?",
              options: ["En réservant tôt", "En l’achetant à la gare le jour même", "En voyageant en première classe"],
              answer: 0,
              explication: "« Plus on réserve tôt, moins on paie. »"
            },
            {
              q: "Pourquoi faut-il arriver en avance ?",
              options: [
                "Parce qu’il faut composter son billet",
                "Parce que la voie est affichée tardivement",
                "Parce que les contrôles de sécurité sont longs"
              ],
              answer: 1,
              explication: "Le numéro de voie n’apparaît qu’au dernier moment."
            },
            {
              q: "Que doit-on faire en cas de retard important ?",
              options: ["Rien, c’est automatique", "Changer de train", "Demander un remboursement partiel"],
              answer: 2,
              explication: "Le remboursement n’est pas automatique : il faut faire la démarche."
            },
            {
              q: "Dans « plus on réserve tôt, moins on paie », la structure exprime…",
              options: ["une proportion", "une cause", "un but"],
              answer: 0,
              explication: "« Plus… moins… » : les deux éléments varient ensemble."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Annonces en gare",
          genre: "Annonces",
          transcription: "Votre attention, s’il vous plaît. Le TGV numéro six mille cent quatorze, à destination de Paris gare de Lyon, départ prévu à quatorze heures douze, partira voie H. Nous vous rappelons que les voitures une à huit se trouvent en tête du train. Votre attention, s’il vous plaît. Le TER à destination de Grenoble, prévu à quatorze heures trente, est annoncé avec un retard d’environ vingt-cinq minutes, en raison d’un problème de signalisation. Nous vous prions de nous excuser pour la gêne occasionnée. Dernière annonce : les voyageurs à destination de Chambéry sont invités à changer à Saint-André-le-Gaz. Une correspondance est assurée par autocar. Nous vous souhaitons un agréable voyage."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Annonces en gare",
          duree: "30 min",
          doc: "e1",
          consigne: "Tu es à la gare de Lyon-Part-Dieu. Écoute ces trois annonces et réponds aux questions.",
          questions: [
            {
              q: "De quelle voie part le TGV pour Paris ?",
              options: ["Voie A", "Voie 8", "Voie H"],
              answer: 2,
              explication: "« Partira voie H. »"
            },
            {
              q: "Où se trouvent les voitures 1 à 8 ?",
              options: ["En tête du train", "En queue du train", "Au milieu du train"],
              answer: 0,
              explication: "« En tête du train », c’est-à-dire à l’avant."
            },
            {
              q: "Pourquoi le TER pour Grenoble est-il en retard ?",
              options: ["À cause d’une grève", "À cause d’un problème de signalisation", "À cause de la météo"],
              answer: 1,
              explication: "Un problème de signalisation."
            },
            {
              q: "Comment les voyageurs pour Chambéry termineront-ils leur trajet ?",
              options: ["En taxi", "Avec le même train", "En autocar"],
              answer: 2,
              explication: "« Une correspondance est assurée par autocar. »"
            }
          ]
        }
      ]
    },
    vocabulaire: {
      exercices: [
        {
          id: "a2",
          type: "association",
          titre: "Vocabulaire",
          sousTitre: "À la gare",
          duree: "20 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            { terme: "un aller simple", definition: "un billet pour partir, sans retour" },
            { terme: "un aller-retour", definition: "un billet pour partir et revenir" },
            { terme: "la voie", definition: "l’endroit où arrive et part le train, numéroté ou lettré" },
            { terme: "le quai", definition: "la plateforme où l’on attend le train" },
            { terme: "une correspondance", definition: "un changement de train pour continuer son trajet" },
            { terme: "le contrôleur", definition: "la personne qui vérifie les billets dans le train" },
            { terme: "la voiture", definition: "chacune des parties d’un train (on dit aussi wagon)" }
          ]
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "a3",
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Les pronoms en et y",
          duree: "45 min",
          regles: ["pronoms-en-y"],
          fiche: "<p><strong>Y</strong> remplace un lieu ou un complément introduit par <em>à</em> (penser à, s’habituer à). <strong>En</strong> remplace un complément introduit par <em>de</em> (venir de, avoir besoin de, parler de) ou une quantité.</p><p class=\"ex\">Tu vas à Lyon ? Oui, j’<strong>y</strong> vais demain. Tu as des billets ? Oui, j’<strong>en</strong> ai deux.</p>",
          consigne: "Choisis le pronom qui convient.",
          phrases: [
            {
              avant: "Tu vas à la gare à pied ? Non, j’",
              options: ["y", "en"],
              answer: 0,
              apres: "vais en bus.",
              explication: "Aller à la gare : un lieu, donc « y »."
            },
            {
              avant: "Tu reviens de Marseille ? Oui, j’",
              options: ["y", "en"],
              answer: 1,
              apres: "reviens à l’instant.",
              explication: "Revenir de : « en »."
            },
            {
              avant: "Combien de valises as-tu ? J’",
              options: ["en", "y"],
              answer: 0,
              apres: "ai trois.",
              explication: "Une quantité : « en »."
            },
            {
              avant: "Tu as pensé à réserver ? Oui, j’",
              options: ["en", "y"],
              answer: 1,
              apres: "ai pensé hier soir.",
              explication: "Penser à quelque chose : « y »."
            },
            {
              avant: "Ta carte de réduction ? Je n’",
              options: ["en", "y"],
              answer: 0,
              apres: "ai plus besoin.",
              explication: "Avoir besoin de : « en »."
            },
            {
              avant: "Le train de nuit ? Je m’",
              options: ["en", "y"],
              answer: 1,
              apres: "suis vite habituée.",
              explication: "S’habituer à : « y »."
            },
            {
              avant: "Des retards ? Il y",
              options: ["en", "y"],
              answer: 0,
              apres: "a eu beaucoup cette semaine.",
              explication: "« Il y en a » : « y » fait partie de « il y a », « en » remplace « des retards »."
            }
          ]
        }
      ]
    },
    ecriture: {
      exercices: [
        {
          id: "a4",
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Demander un remboursement",
          duree: "1 h",
          regles: ["registres-de-langue", "passe-compose-imparfait"],
          consigne: "Ton train a eu deux heures de retard et tu as raté un rendez-vous important. Écris au service clients de la compagnie : raconte ce qui s’est passé, explique les conséquences et demande un remboursement.",
          min: 130,
          max: 180,
          checklist: [
            "J’ai indiqué la date, le trajet et le numéro du train",
            "J’ai raconté les faits au passé (passé composé et imparfait)",
            "J’ai expliqué les conséquences du retard",
            "J’ai formulé une demande claire et polie",
            "J’ai utilisé des formules adaptées à un courrier formel"
          ],
          modele: "Objet : Demande de remboursement – TGV 6114 du 12 mars\n\nMadame, Monsieur,\n\nLe 12 mars, j’ai pris le TGV 6114 de Lyon à Paris, qui devait arriver à 16 h 05. Le train s’est arrêté pendant plus d’une heure en pleine campagne, à cause d’un problème technique. Nous n’avions aucune information et il n’y avait plus d’eau à la voiture-bar. Finalement, nous sommes arrivés à 18 h 10, avec plus de deux heures de retard.\n\nÀ cause de ce retard, j’ai manqué un entretien à l’université, que j’attendais depuis un mois et qu’il a fallu reporter.\n\nJe vous serais reconnaissante de bien vouloir me rembourser une partie de mon billet, comme le prévoient vos conditions en cas de retard important. Vous trouverez ci-joint mon billet.\n\nJe vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.\n\nLin Zhou"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Raconter un voyage en train",
          duree: "30 min",
          consigne: "Raconte un voyage en train qui t’a marquée, en France, en Chine ou ailleurs : où tu allais, comment s’est passé le trajet, ce que tu as vu ou vécu. Compare, si tu veux, avec les trains de ton pays.",
          preparation: [
            "Il y a quelque temps, j’ai pris le train pour…",
            "Le trajet a duré…",
            "Pendant le voyage, …",
            "Ce qui m’a surprise, c’est…",
            "En Chine, les trains sont…, alors qu’en France…"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "L’été dernier, j’ai pris le train de nuit de Paris à Briançon, dans les Alpes. Je suis partie à neuf heures du soir et j’avais une couchette dans un compartiment de six personnes. Au début, j’avais un peu peur de ne pas dormir, mais le bruit du train m’a finalement bercée. Le matin, quand j’ai ouvert le rideau, il y avait des montagnes partout : c’était magnifique. Ce qui m’a surprise, c’est que tout le monde se parlait, on partageait même le petit-déjeuner. En Chine, les trains à grande vitesse sont très rapides et modernes, alors qu’en France, j’ai découvert le charme des voyages lents.",
          checklist: [
            "J’ai donné le cadre (quand, où, avec qui)",
            "J’ai raconté au moins trois étapes du trajet",
            "J’ai dit ce que j’ai ressenti",
            "J’ai utilisé au moins un pronom en ou y"
          ]
        }
      ]
    }
  }
});
