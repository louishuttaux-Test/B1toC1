/* Unité 27 : La synthèse de documents (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 27,
  niveau: "c1",
  theme: "Information, géopolitique et histoire",
  titre: "La synthèse de documents",
  objectif: "Croiser plusieurs sources et produire une synthèse objective.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Un dossier : lire sur papier ou sur écran ?",
          format: "long",
          texte: [
            "Document 1 – Extrait d’un article de vulgarisation scientifique. Plusieurs synthèses de recherche, dont une méta-analyse publiée en 2018 portant sur plusieurs dizaines d’études, suggèrent que la compréhension des textes informatifs est en moyenne légèrement meilleure sur papier que sur écran. L’écart est faible, mais il augmente lorsque les lecteurs disposent de peu de temps. Les chercheurs avancent une explication : sur écran, nous aurions tendance à lire plus vite, en survolant, et à surestimer notre compréhension.",
            "Document 2 – Tribune d’un enseignant. Opposer le papier à l’écran n’a guère de sens. Les élèves lisent aujourd’hui sur tous les supports, et le numérique offre des ressources précieuses : dictionnaires intégrés, taille de caractères ajustable, accès à des livres introuvables en bibliothèque. Plutôt que de diaboliser l’écran, apprenons aux jeunes à y lire lentement, à annoter, à revenir en arrière. C’est la manière de lire, non le support, qui fait la différence.",
            "Document 3 – Témoignage d’une directrice de bibliothèque universitaire. Les prêts de livres papier ont baissé, mais nos salles de lecture n’ont jamais été aussi pleines. Les étudiants consultent les articles en ligne, puis viennent ici imprimer les textes qu’ils doivent étudier en profondeur. Beaucoup nous disent qu’ils réservent l’écran aux recherches rapides, et le papier à la lecture attentive.",
            "Consigne habituelle de l’épreuve : confronter les documents, sans ajouter d’opinion personnelle, en montrant leurs points de convergence et de divergence."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Un dossier : lire sur papier ou sur écran ?",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quelle est l’idée principale du document 1 ?",
              options: [
                "La compréhension est en moyenne légèrement meilleure sur papier, surtout quand on manque de temps.",
                "La lecture sur écran est impossible.",
                "Le papier est plus écologique."
              ],
              answer: 0,
              explication: "L’écart est faible mais réel."
            },
            {
              q: "Quelle explication les chercheurs avancent-ils ?",
              options: [
                "Les écrans fatiguent les yeux.",
                "Sur écran, on lit plus vite et on surestime sa compréhension.",
                "Les textes numériques sont plus courts."
              ],
              answer: 1,
              explication: "Fin du document 1."
            },
            {
              q: "Quelle est la thèse du document 2 ?",
              options: [
                "Il faut interdire les écrans à l’école.",
                "Le papier est dépassé.",
                "La manière de lire compte plus que le support."
              ],
              answer: 2,
              explication: "Dernière phrase du document 2."
            },
            {
              q: "Que montre le document 3 ?",
              options: [
                "Les étudiants combinent les supports selon le type de lecture.",
                "Les étudiants n’utilisent plus la bibliothèque.",
                "Les étudiants préfèrent l’écran pour tout."
              ],
              answer: 0,
              explication: "Écran pour chercher, papier pour approfondir."
            },
            {
              q: "Quel point commun relie les trois documents ?",
              options: [
                "Le rejet total du numérique",
                "L’idée que la qualité de la lecture dépend de l’attention et du rythme",
                "L’éloge exclusif du papier"
              ],
              answer: 1,
              explication: "Lire vite / lire lentement est au cœur des trois."
            },
            {
              q: "Qu’interdit la consigne de la synthèse ?",
              options: ["De citer les auteurs", "De faire des paragraphes", "D’ajouter une opinion personnelle"],
              answer: 2,
              explication: "La synthèse est objective."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "La méthode de la synthèse de documents",
          genre: "Explication de méthode",
          transcription: "Première erreur à éviter : résumer les documents les uns après les autres. Ça, c’est un résumé en trois morceaux, pas une synthèse. Une synthèse, c’est un texte organisé par idées, dans lequel vous faites dialoguer les documents. Concrètement, commencez par lire tous les documents et repérez, pour chacun, l’idée principale et deux ou trois idées secondaires. Ensuite, faites un tableau : en ligne, les grandes questions ; en colonne, les documents. Vous verrez tout de suite où ils se rejoignent et où ils s’opposent. C’est ce tableau qui vous donnera votre plan. Deuxième règle : la neutralité. Vous n’avez pas le droit de donner votre avis, même indirectement. Attention aux adjectifs comme « évidemment » ou « heureusement » qui trahissent une opinion. Troisième règle : reformulez. Ne recopiez pas les phrases des documents. Et enfin, n’oubliez pas le titre, et respectez le nombre de mots, à dix pour cent près."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "La méthode de la synthèse de documents",
          duree: "40 min",
          doc: "e1",
          consigne: "Un tuteur explique la synthèse de documents à des étudiants qui préparent le DALF C1. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Quelle est la première erreur à éviter ?",
              options: ["Résumer les documents l’un après l’autre", "Faire un plan", "Donner un titre"],
              answer: 0,
              explication: "Ce serait un résumé en trois morceaux."
            },
            {
              q: "À quoi sert le tableau conseillé ?",
              options: [
                "À compter les mots",
                "À repérer convergences et divergences pour construire le plan",
                "À noter son opinion"
              ],
              answer: 1,
              explication: "Le tableau donne le plan."
            },
            {
              q: "Pourquoi éviter des mots comme « heureusement » ?",
              options: ["Ils sont trop familiers.", "Ils sont trop longs.", "Ils trahissent une opinion."],
              answer: 2,
              explication: "La synthèse doit être neutre."
            },
            {
              q: "Quelle tolérance est accordée sur le nombre de mots ?",
              options: ["Environ 10 %", "Aucune", "50 %"],
              answer: 0,
              explication: "« À dix pour cent près. »"
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
          sousTitre: "Les verbes pour rapporter et confronter",
          duree: "25 min",
          consigne: "Associe chaque verbe à son sens.",
          items: [
            { terme: "souligner", definition: "insister sur un point pour le mettre en valeur" },
            { terme: "nuancer", definition: "apporter des réserves, des précisions qui atténuent une idée" },
            {
              terme: "rejoindre",
              definition: "être d’accord avec une autre position, aller dans le même sens"
            },
            { terme: "s’opposer à", definition: "défendre une position contraire" },
            { terme: "mettre en évidence", definition: "montrer clairement, faire apparaître" },
            { terme: "déplorer", definition: "regretter vivement une situation" },
            { terme: "avancer", definition: "proposer une idée, une hypothèse, une explication" }
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
          sousTitre: "Rapporter des propos : concordance et verbes introducteurs",
          duree: "50 min",
          regles: ["discours-rapporte"],
          fiche: "<p>Au <strong>discours indirect</strong>, si le verbe introducteur est au passé, les temps se décalent : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel. Le choix du verbe introducteur (<em>affirmer, admettre, suggérer, contester, regretter</em>) indique la position de l’auteur, ce qui est essentiel dans une synthèse.</p><p class=\"ex\">« La compréhension est meilleure sur papier. » → Les chercheurs <strong>ont affirmé</strong> que la compréhension <strong>était</strong> meilleure sur papier.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "L’enseignant affirmait que le support",
              options: ["compte", "comptait"],
              answer: 1,
              apres: "moins que la manière de lire.",
              explication: "Verbe introducteur au passé : présent → imparfait."
            },
            {
              avant: "Les chercheurs ont expliqué que les lecteurs",
              options: ["avaient surestimé", "ont surestimé"],
              answer: 0,
              apres: "leur compréhension lors de l’expérience.",
              explication: "Passé composé → plus-que-parfait."
            },
            {
              avant: "La directrice a annoncé que la bibliothèque",
              options: ["ouvrira", "ouvrirait"],
              answer: 1,
              apres: "le dimanche l’année suivante.",
              explication: "Futur → conditionnel présent."
            },
            {
              avant: "L’auteur",
              options: ["admet", "prétend"],
              answer: 0,
              apres: "que le numérique a des avantages, même s’il préfère le papier.",
              explication: "« Admettre » : reconnaître une idée qui ne va pas dans son sens."
            },
            {
              avant: "Le document 2",
              options: ["confirme", "conteste"],
              answer: 1,
              apres: "l’opposition entre papier et écran : il la juge sans intérêt.",
              explication: "Contester : remettre en cause."
            },
            {
              avant: "Elle a demandé",
              options: ["si", "que"],
              answer: 0,
              apres: "les étudiants lisaient plus qu’avant.",
              explication: "Question totale au discours indirect : « si »."
            },
            {
              avant: "Il a ajouté qu’il",
              options: ["faut", "fallait"],
              answer: 1,
              apres: "apprendre aux jeunes à annoter.",
              explication: "Concordance au passé : imparfait."
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
          sousTitre: "Rédiger une synthèse",
          duree: "1 h 30",
          regles: ["discours-rapporte", "connecteurs-logiques", "nominalisation"],
          consigne: "À partir des trois documents, rédige une synthèse d’environ 220 mots (entre 200 et 240), avec un titre. Organise-la par idées et non par documents, reformule, et ne donne aucun avis personnel.",
          min: 200,
          max: 240,
          checklist: [
            "Mon texte a un titre",
            "Il est organisé par idées, pas document par document",
            "Chaque idée est attribuée à sa source (document, auteur)",
            "J’ai reformulé sans recopier",
            "Je n’ai donné aucune opinion personnelle",
            "J’ai respecté le nombre de mots"
          ],
          modele: "Lire sur papier ou sur écran : le support, une question secondaire ?\n\nLa généralisation des écrans soulève la question de leur effet sur la lecture. Les trois documents s’accordent sur un point : la qualité de la compréhension dépend avant tout du rythme et de l’attention du lecteur, mais ils divergent sur le rôle du support.\n\nUne synthèse de recherches relayée par un article de vulgarisation met en évidence un léger avantage du papier pour les textes informatifs, surtout lorsque le temps de lecture est limité. Les chercheurs l’expliquent par une tendance, sur écran, à survoler les textes et à surestimer sa propre compréhension.\n\nUn enseignant conteste toutefois l’opposition entre les deux supports. Selon lui, le numérique offre des outils précieux, et c’est l’apprentissage d’une lecture lente et active, non le choix du support, qui détermine la réussite.\n\nLe témoignage d’une directrice de bibliothèque universitaire rejoint en partie ces deux analyses. Il souligne que les étudiants combinent désormais les supports : l’écran pour la recherche rapide d’informations, le papier pour l’étude approfondie.\n\nAinsi, loin d’un affrontement entre deux technologies, les documents dessinent une complémentarité, chaque support étant associé à un mode de lecture particulier."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter une synthèse à l’oral",
          duree: "40 min",
          consigne: "Présente oralement le dossier en trois minutes, comme dans la première partie de l’épreuve orale du DALF : présente le thème, la problématique, puis les idées des documents de façon organisée. Garde ton avis pour la fin, et annonce-le clairement.",
          preparation: [
            "Le dossier porte sur…",
            "La question qui se pose est la suivante : …",
            "D’un côté, … ; de l’autre, …",
            "Les documents se rejoignent sur…",
            "Pour ma part, et c’est un avis personnel, …"
          ],
          dureeCible: "3 minutes",
          modele: "Le dossier porte sur la lecture à l’heure du numérique. La question qui se pose est la suivante : le support de lecture a-t-il une influence sur notre compréhension ? D’un côté, un article de vulgarisation présente des recherches qui montrent un léger avantage du papier, surtout quand on lit vite. Les chercheurs expliquent que sur écran, on survole davantage. De l’autre, un enseignant estime que le support importe peu : selon lui, il faut surtout apprendre aux élèves à lire lentement et activement, quel que soit l’outil. Enfin, une directrice de bibliothèque observe que les étudiants utilisent les deux supports de façon complémentaire. Les documents se rejoignent donc sur l’idée que c’est l’attention qui compte. Pour ma part, et c’est un avis personnel, je me reconnais dans ce dernier témoignage : je lis mes articles sur écran, mais j’imprime toujours les textes que je dois vraiment comprendre.",
          checklist: [
            "J’ai annoncé le thème et la problématique",
            "J’ai organisé mon propos par idées",
            "J’ai séparé clairement la synthèse et mon avis",
            "J’ai parlé environ trois minutes"
          ]
        }
      ]
    }
  }
});
