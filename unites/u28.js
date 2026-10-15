/* Unité 28 : La dissertation (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 28,
  niveau: "c1",
  theme: "Études et université",
  titre: "La dissertation",
  objectif: "Problématiser un sujet et construire un plan dialectique.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "La dissertation, mode d’emploi",
          format: "long",
          texte: [
            "Exercice emblématique de l’université française, la dissertation déroute souvent les étudiants étrangers. Il ne s’agit pas de réciter ses connaissances, ni de donner librement son opinion, mais de construire une réflexion organisée en réponse à une question qui n’a pas de réponse évidente.",
            "Tout commence par l’analyse du sujet. Chaque mot compte. Soit le sujet : « Le bonheur est-il une affaire privée ? » Que signifie « bonheur » : un état durable ou un moment ? Que veut dire « affaire privée » : ce qui ne regarde que l’individu, par opposition à la société, à l’État ? En définissant les termes, on fait apparaître une tension, et cette tension devient la problématique : par exemple, « Le bonheur, que chacun définit pour soi, peut-il pourtant se passer des autres et des institutions ? »",
            "Vient ensuite le plan. Le plus courant, dit dialectique, procède en trois temps : on examine d’abord une première réponse (le bonheur est une affaire personnelle), puis ses limites (il dépend des autres et de conditions sociales), avant de proposer un dépassement (l’État ne peut pas rendre heureux, mais il peut rendre le bonheur possible). Chaque partie s’appuie sur des arguments et des exemples précis, tirés de la littérature, de la philosophie, de l’histoire ou de l’actualité.",
            "L’introduction obéit à une structure codifiée : une amorce qui amène le sujet, la citation du sujet, sa problématique, puis l’annonce du plan. La conclusion répond clairement à la question et peut s’achever par une ouverture. Entre les parties, des transitions montrent comment le raisonnement progresse. C’est cette progression, bien plus que la quantité de connaissances, que le correcteur évalue."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "La dissertation, mode d’emploi",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Qu’est-ce qu’une dissertation selon le texte ?",
              options: [
                "Une récitation de connaissances",
                "Une réflexion organisée en réponse à une question ouverte",
                "L’expression libre d’une opinion"
              ],
              answer: 1,
              explication: "Premier paragraphe."
            },
            {
              q: "Comment fait-on apparaître la problématique ?",
              options: [
                "En donnant son avis dès le début",
                "En choisissant une citation",
                "En définissant les termes du sujet pour faire apparaître une tension"
              ],
              answer: 2,
              explication: "Deuxième paragraphe."
            },
            {
              q: "Quelles sont les trois étapes du plan dialectique ?",
              options: [
                "Une première réponse, ses limites, un dépassement",
                "Introduction, développement, conclusion",
                "Passé, présent, futur"
              ],
              answer: 0,
              explication: "Thèse, antithèse, synthèse."
            },
            {
              q: "Quelle est la structure de l’introduction ?",
              options: [
                "Conclusion, plan, exemples",
                "Amorce, sujet, problématique, annonce du plan",
                "Citation, avis, résumé"
              ],
              answer: 1,
              explication: "Dernier paragraphe."
            },
            {
              q: "Qu’évalue avant tout le correcteur ?",
              options: ["La longueur de la copie", "Le nombre de citations", "La progression du raisonnement"],
              answer: 2,
              explication: "Dernière phrase."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Un professeur corrige une introduction",
          genre: "Correction commentée",
          transcription: "Votre amorce est intéressante : vous partez de l’indice du bonheur national brut, créé au Bhoutan. C’est concret, c’est original, et surtout, cela pose directement la question du rôle de l’État. Très bien. En revanche, votre problématique est trop proche du sujet : vous écrivez « Le bonheur est-il une question individuelle ou collective ? ». Vous avez reformulé la question, mais vous ne l’avez pas problématisée. Il manque la tension, le paradoxe. Par exemple : si chacun définit son bonheur, comment la société pourrait-elle s’en mêler, et pourtant, peut-on être heureux seul ? Ensuite, l’annonce du plan. Elle est claire, mais trop mécanique : « dans une première partie, dans une deuxième partie, dans une troisième partie ». Essayez d’annoncer les idées plutôt que les numéros. Enfin, une remarque de forme : évitez le « je » dans une dissertation. Préférez le « nous » ou des tournures impersonnelles. Dans l’ensemble, c’est une bonne base ; avec ces corrections, votre introduction sera solide."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Un professeur corrige une introduction",
          duree: "40 min",
          doc: "e1",
          consigne: "Un professeur commente l’introduction d’une étudiante sur le sujet « Le bonheur est-il une affaire privée ? ». Lis les questions, puis écoute.",
          questions: [
            {
              q: "Pourquoi le professeur apprécie-t-il l’amorce ?",
              options: [
                "Elle est très longue.",
                "Elle est concrète, originale et pose la question du rôle de l’État.",
                "Elle cite un philosophe célèbre."
              ],
              answer: 1,
              explication: "L’indice du bonheur national brut, au Bhoutan."
            },
            {
              q: "Quel est le défaut de la problématique ?",
              options: [
                "Elle est trop longue.",
                "Elle est hors sujet.",
                "Elle reformule la question sans faire apparaître de tension."
              ],
              answer: 2,
              explication: "« Vous ne l’avez pas problématisée. »"
            },
            {
              q: "Que reproche-t-il à l’annonce du plan ?",
              options: ["Elle est trop mécanique.", "Elle n’existe pas.", "Elle annonce quatre parties."],
              answer: 0,
              explication: "Il faut annoncer les idées, pas les numéros."
            },
            {
              q: "Quel conseil de forme donne-t-il ?",
              options: [
                "Utiliser le « je »",
                "Éviter le « je », préférer « nous » ou des tournures impersonnelles",
                "Écrire des phrases courtes"
              ],
              answer: 1,
              explication: "C’est une convention de la dissertation."
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
          sousTitre: "Le vocabulaire de la dissertation",
          duree: "25 min",
          consigne: "Associe chaque terme à sa définition.",
          items: [
            { terme: "l’amorce", definition: "la première phrase de l’introduction, qui amène le sujet" },
            {
              terme: "la problématique",
              definition: "la question précise, souvent paradoxale, à laquelle répond le devoir"
            },
            { terme: "l’annonce du plan", definition: "la présentation des grandes étapes du raisonnement" },
            {
              terme: "une transition",
              definition: "un passage qui relie deux parties en montrant la progression"
            },
            { terme: "l’ouverture", definition: "la fin de la conclusion, qui élargit la réflexion" },
            {
              terme: "un plan dialectique",
              definition: "un plan en trois temps : thèse, antithèse, synthèse"
            },
            { terme: "une copie", definition: "le devoir rendu par l’étudiant" }
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
          sousTitre: "Organiser son raisonnement",
          duree: "50 min",
          regles: ["connecteurs-logiques", "nominalisation"],
          fiche: "<p>Une dissertation se reconnaît à ses articulations. Pour <strong>annoncer</strong> : <em>nous verrons dans un premier temps…, avant de…</em>. Pour <strong>passer d’une partie à l’autre</strong> : <em>si…, il n’en reste pas moins que… ; cette conception, pour séduisante qu’elle soit, se heurte à…</em>. Pour <strong>dépasser</strong> : <em>dès lors, il convient de…, c’est pourquoi…</em>. Pour <strong>conclure</strong> : <em>en définitive, au terme de cette réflexion</em>.</p><p class=\"ex\"><strong>Si</strong> le bonheur semble relever de l’intime, <strong>il n’en reste pas moins qu’</strong>il dépend de conditions collectives.</p>",
          consigne: "Choisis l’articulation qui convient.",
          phrases: [
            {
              avant: "Nous verrons dans un premier temps que le bonheur est une affaire intime,",
              options: ["avant de", "afin de"],
              answer: 0,
              apres: "montrer ses limites.",
              explication: "Annonce de plan : « avant de »."
            },
            {
              avant: "",
              options: ["Puisque", "Si"],
              answer: 1,
              apres: "le bonheur semble personnel, il n’en reste pas moins qu’il dépend d’autrui.",
              explication: "« Si… il n’en reste pas moins » : transition concessive."
            },
            {
              avant: "Cette conception, pour séduisante qu’elle",
              options: ["soit", "est"],
              answer: 0,
              apres: ", se heurte à une objection.",
              explication: "« Pour + adjectif + que » : concession, subjonctif."
            },
            {
              avant: "",
              options: ["Pourtant", "Dès lors"],
              answer: 1,
              apres: ", il convient de dépasser cette opposition.",
              explication: "Conséquence logique qui ouvre la troisième partie."
            },
            {
              avant: "",
              options: ["Au terme de", "Au début de"],
              answer: 0,
              apres: "cette réflexion, il apparaît que le bonheur ne se décrète pas.",
              explication: "Formule de conclusion."
            },
            {
              avant: "L’État ne peut rendre personne heureux ;",
              options: ["par exemple", "en revanche"],
              answer: 1,
              apres: ", il peut créer les conditions du bonheur.",
              explication: "Opposition entre deux idées."
            },
            {
              avant: "Il s’agit moins de garantir le bonheur",
              options: ["que", "de"],
              answer: 0,
              apres: "de le rendre possible.",
              explication: "« Moins… que… » : comparaison qui déplace la question."
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
          sousTitre: "Une introduction de dissertation",
          duree: "1 h 30",
          regles: ["connecteurs-logiques", "registres-de-langue"],
          consigne: "Rédige l’introduction complète d’une dissertation sur le sujet : « Apprendre une langue étrangère, est-ce changer de regard sur le monde ? » Respecte les quatre étapes : amorce, sujet, problématique, annonce du plan (en annonçant les idées).",
          min: 150,
          max: 220,
          checklist: [
            "Mon amorce est concrète et amène naturellement le sujet",
            "J’ai cité le sujet exactement",
            "J’ai défini ou interrogé les termes clés",
            "Ma problématique fait apparaître une tension",
            "J’ai annoncé un plan en trois idées, sans « première partie, deuxième partie »",
            "Je n’ai pas utilisé le « je »"
          ],
          modele: "En chinois, on ne dit pas « il pleut » mais « tomber pluie », sans sujet : la pluie arrive, sans que personne ne la fasse tomber. Cette différence, minuscule en apparence, invite à une question plus vaste : « Apprendre une langue étrangère, est-ce changer de regard sur le monde ? » Apprendre une langue, ce n’est pas seulement mémoriser un vocabulaire et une grammaire ; c’est aussi, peut-être, découvrir d’autres manières de découper la réalité. Mais si chaque langue imposait sa vision du monde, comment expliquer que les êtres humains parviennent à traduire, à se comprendre et à partager des idées universelles ? Le problème est donc de savoir dans quelle mesure une langue façonne la pensée de celui qui l’apprend. Nous verrons d’abord que chaque langue propose une manière singulière de nommer le monde, avant de montrer que cette influence a des limites, puisque la pensée excède les mots. Il conviendra enfin de se demander si le véritable changement de regard ne naît pas moins de la langue elle-même que du passage d’une langue à l’autre."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Proposer un plan à l’oral",
          duree: "35 min",
          consigne: "Tu as dix minutes de préparation. Sujet : « Faut-il voyager pour comprendre le monde ? » Présente oralement ta problématique et ton plan en trois parties, avec un exemple par partie.",
          preparation: [
            "Ce sujet invite à se demander si…",
            "Le paradoxe, c’est que…",
            "Dans un premier temps, on pourrait soutenir que…",
            "Cependant, il faut nuancer…",
            "Enfin, on peut dépasser cette opposition en…"
          ],
          dureeCible: "2 à 3 minutes",
          modele: "Ce sujet invite à se demander si l’expérience directe de l’ailleurs est indispensable à la compréhension du monde. Le paradoxe, c’est qu’on n’a jamais autant voyagé, et pourtant les préjugés n’ont pas disparu. Dans un premier temps, on pourrait soutenir que le voyage est irremplaçable : il confronte à d’autres façons de vivre, comme le montrent les récits de Montaigne ou de Nicolas Bouvier. Cependant, il faut nuancer : beaucoup de touristes traversent des pays sans les rencontrer, alors que d’autres comprennent le monde par la lecture ou l’étude, comme Voltaire qui a admiré la Chine sans y être allé, même si ce regard avait ses limites. Enfin, on peut dépasser cette opposition en montrant que ce qui compte n’est pas le déplacement, mais la disponibilité d’esprit : on peut voyager sans comprendre, et comprendre sans voyager, à condition de s’ouvrir réellement à l’autre.",
          checklist: [
            "J’ai formulé une problématique avec un paradoxe",
            "J’ai présenté trois parties qui progressent",
            "J’ai donné un exemple par partie",
            "J’ai utilisé des articulations logiques"
          ]
        }
      ]
    }
  }
});
