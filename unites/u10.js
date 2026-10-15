/* Unité 10 : Imaginer la ville de demain (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 10,
  niveau: "b1",
  theme: "Sciences, innovation et environnement",
  titre: "Imaginer la ville de demain",
  objectif: "Faire des hypothèses avec si et parler d’innovations du quotidien.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "À quoi ressembleront nos villes en 2050 ?",
          format: "long",
          texte: [
            "En 2050, près de sept personnes sur dix vivront en ville. Comment rendre ces villes plus agréables, alors que les étés deviennent plus chauds et que l’air est souvent pollué ? Urbanistes et architectes multiplient les idées.",
            "La première, c’est de remettre la nature en ville. Des arbres dans chaque rue, des toits végétalisés, des cours d’école transformées en jardins : la végétation fait baisser la température de plusieurs degrés en été. Paris, par exemple, a commencé à transformer des cours d’école goudronnées en « cours oasis », plus vertes et plus fraîches.",
            "La deuxième idée, c’est la « ville du quart d’heure » : un quartier où l’on trouve, à moins de quinze minutes à pied ou à vélo, tout ce dont on a besoin au quotidien, comme l’école, le travail, les commerces, le médecin, un parc. Si on se déplaçait moins en voiture, il y aurait moins de bruit, moins de pollution et plus de place pour les piétons.",
            "Enfin, la technologie pourrait aider : des capteurs mesureraient la qualité de l’air, l’éclairage public s’allumerait seulement au passage des piétons… Mais beaucoup d’urbanistes rappellent qu’une ville intelligente n’est pas seulement une ville connectée : c’est d’abord une ville où les habitants ont envie de vivre ensemble."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "À quoi ressembleront nos villes en 2050 ?",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quelle proportion de la population vivra en ville en 2050 ?",
              options: ["Environ la moitié", "Près de sept personnes sur dix", "Neuf personnes sur dix"],
              answer: 1,
              explication: "« Près de sept personnes sur dix. »"
            },
            {
              q: "Pourquoi mettre plus de végétation en ville ?",
              options: [
                "Pour produire de la nourriture",
                "Pour attirer les touristes",
                "Pour faire baisser la température en été"
              ],
              answer: 2,
              explication: "La végétation fait baisser la température de plusieurs degrés."
            },
            {
              q: "Qu’est-ce que la « ville du quart d’heure » ?",
              options: [
                "Un quartier où tout l’essentiel est à moins de quinze minutes à pied ou à vélo",
                "Une ville où les transports passent tous les quarts d’heure",
                "Une ville construite en quinze ans"
              ],
              answer: 0,
              explication: "Tout ce dont on a besoin est proche."
            },
            {
              q: "Quelle est l’idée de la dernière phrase ?",
              options: [
                "La technologie suffit à rendre une ville agréable.",
                "Une bonne ville est d’abord une ville où l’on aime vivre ensemble.",
                "Les capteurs sont dangereux."
              ],
              answer: 1,
              explication: "La technologie ne remplace pas le lien entre habitants."
            },
            {
              q: "« Si on se déplaçait moins en voiture, il y aurait moins de bruit. » Cette phrase exprime…",
              options: ["un fait certain", "un ordre", "une hypothèse"],
              answer: 2,
              explication: "Si + imparfait, conditionnel présent : une hypothèse."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Deux habitants imaginent leur quartier",
          genre: "Dialogue",
          transcription: "Tu as vu le projet de la mairie pour la place du marché ? Oui, ils veulent supprimer le parking et planter des arbres. Moi, je trouve ça génial. Si on enlevait les voitures, les enfants pourraient jouer dehors, et on aurait enfin un endroit pour s’asseoir. Je comprends, mais pense aux commerçants ! Si les clients ne pouvaient plus se garer, ils iraient au supermarché en dehors de la ville. Pas forcément. Dans d’autres villes, les commerces ont même vendu plus après la création de rues piétonnes. Les gens viennent à pied, ils restent plus longtemps. Bon, peut-être. Mais alors, il faudrait plus de bus, parce que les personnes âgées ne vont pas venir à vélo ! Là, je suis d’accord avec toi. Et un parking à vélos, aussi. On pourrait proposer tout ça à la réunion publique de jeudi. D’accord, j’y serai."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Deux habitants imaginent leur quartier",
          duree: "30 min",
          doc: "e1",
          consigne: "Nadia et Thomas habitent le même quartier. Ils discutent du projet de la mairie. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Que veut faire la mairie ?",
              options: ["Construire un supermarché", "Remplacer le parking par des arbres", "Agrandir le marché"],
              answer: 1,
              explication: "Supprimer le parking et planter des arbres."
            },
            {
              q: "Quelle est l’inquiétude de Thomas ?",
              options: ["Le bruit des enfants", "Le prix des arbres", "La perte de clients pour les commerçants"],
              answer: 2,
              explication: "Il pense que les clients iraient ailleurs."
            },
            {
              q: "Sur quoi sont-ils finalement d’accord ?",
              options: [
                "Il faudrait plus de bus et un parking à vélos.",
                "Il faut garder le parking.",
                "Le projet doit être abandonné."
              ],
              answer: 0,
              explication: "Ils proposent ensemble ces deux idées."
            },
            {
              q: "Que vont-ils faire jeudi ?",
              options: ["Faire une manifestation", "Aller à une réunion publique", "Planter des arbres"],
              answer: 1,
              explication: "Ils présenteront leurs idées à la réunion publique."
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
          sousTitre: "La ville durable",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "végétaliser", definition: "ajouter des plantes, des arbres, de la verdure" },
            { terme: "un piéton", definition: "une personne qui se déplace à pied" },
            { terme: "le covoiturage", definition: "le fait de partager une voiture pour un trajet" },
            { terme: "une piste cyclable", definition: "une voie réservée aux vélos" },
            {
              terme: "un îlot de chaleur",
              definition: "une zone de la ville beaucoup plus chaude que les alentours"
            },
            {
              terme: "le tri des déchets",
              definition: "le fait de séparer verre, papier, plastique… pour les recycler"
            },
            { terme: "un urbaniste", definition: "un spécialiste de l’organisation des villes" }
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
          sousTitre: "L’hypothèse avec si",
          duree: "45 min",
          regles: ["hypothese-si", "conditionnel"],
          fiche: "<p>Pour une hypothèse <strong>probable</strong> : <em>si + présent → futur</em>. Pour une hypothèse <strong>imaginaire</strong> ou peu probable : <em>si + imparfait → conditionnel présent</em>. Pour un regret sur le passé : <em>si + plus-que-parfait → conditionnel passé</em>. Jamais de futur ni de conditionnel juste après <strong>si</strong>.</p><p class=\"ex\">S’il <strong>fait</strong> beau, j’<strong>irai</strong> à vélo. Si j’<strong>étais</strong> maire, je <strong>planterais</strong> des arbres.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "Si la mairie",
              options: ["plantait", "planterait"],
              answer: 0,
              apres: "plus d’arbres, il ferait moins chaud.",
              explication: "Jamais de conditionnel après « si » : imparfait."
            },
            {
              avant: "Si j’étais maire, je",
              options: ["créerai", "créerais"],
              answer: 1,
              apres: "des rues piétonnes.",
              explication: "Si + imparfait → conditionnel présent."
            },
            {
              avant: "S’il pleut demain, nous",
              options: ["prendrons", "prendrions"],
              answer: 0,
              apres: "le tramway.",
              explication: "Hypothèse probable : si + présent → futur."
            },
            {
              avant: "Si on",
              options: ["aurait construit", "avait construit"],
              answer: 1,
              apres: "ce métro plus tôt, il y aurait eu moins d’embouteillages.",
              explication: "Regret sur le passé : si + plus-que-parfait."
            },
            {
              avant: "Si tu habitais plus près, tu",
              options: ["pourrais", "pourras"],
              answer: 0,
              apres: "venir à pied.",
              explication: "Si + imparfait → conditionnel."
            },
            {
              avant: "Si les loyers",
              options: ["baisseront", "baissent"],
              answer: 1,
              apres: ", plus de familles resteront en ville.",
              explication: "Après « si », le présent, pas le futur."
            },
            {
              avant: "Nous aurions économisé de l’énergie si nous",
              options: ["avions éteint", "aurions éteint"],
              answer: 0,
              apres: "les lumières.",
              explication: "Si + plus-que-parfait, même quand la proposition avec si vient en second."
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
          sousTitre: "Si j’étais maire de ma ville…",
          duree: "1 h",
          regles: ["hypothese-si", "conditionnel"],
          consigne: "Imagine que tu es maire de ta ville (en France ou en Chine) pour un an. Écris un texte où tu présentes trois mesures pour améliorer la vie des habitants et leurs effets attendus.",
          min: 140,
          max: 190,
          checklist: [
            "J’ai présenté trois mesures différentes",
            "J’ai utilisé au moins trois phrases avec si + imparfait / conditionnel",
            "J’ai expliqué l’effet de chaque mesure",
            "J’ai utilisé des connecteurs pour organiser mon texte",
            "J’ai conclu par une phrase personnelle"
          ],
          modele: "Si j’étais maire de Chengdu pendant un an, je commencerais par m’occuper des transports. Je créerais de nouvelles pistes cyclables, larges et protégées, le long des grandes avenues. Si les habitants pouvaient circuler à vélo en sécurité, beaucoup laisseraient leur voiture au garage, et l’air serait plus pur.\n\nEnsuite, je transformerais les toits des bâtiments publics en jardins. Ils feraient baisser la température en été et les écoles pourraient y organiser des ateliers de jardinage.\n\nEnfin, j’ouvrirais les bibliothèques le soir et le dimanche. Ce serait un lieu calme pour les étudiants qui vivent dans de petits logements, et un endroit où les générations se rencontreraient.\n\nBien sûr, un an, c’est court. Mais si chaque maire faisait de petites choses concrètes, nos villes changeraient vraiment."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Défendre une idée pour mon quartier",
          duree: "30 min",
          consigne: "Lors d’une réunion publique, tu proposes une idée pour améliorer ton quartier. Présente-la, explique pourquoi elle est utile et réponds à une objection que quelqu’un pourrait faire.",
          preparation: [
            "Je voudrais proposer…",
            "Si on…, on pourrait…",
            "Cela permettrait de…",
            "On pourrait m’objecter que…, mais…",
            "Pour conclure, …"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "Bonsoir à tous. Je voudrais proposer de créer un jardin partagé sur le terrain vide derrière la bibliothèque. Si on installait quelques bacs et un point d’eau, les habitants pourraient cultiver des légumes et des fleurs ensemble. Cela permettrait de rendre le quartier plus vert, mais aussi de créer des liens entre voisins, qui souvent ne se connaissent pas. On pourrait m’objecter que personne ne s’en occuperait pendant l’été. Mais on pourrait organiser un planning avec l’école et les associations. Pour conclure, je pense que ce projet coûterait peu et apporterait beaucoup.",
          checklist: [
            "J’ai présenté clairement mon idée",
            "J’ai utilisé l’hypothèse avec si",
            "J’ai répondu à une objection",
            "J’ai conclu"
          ]
        }
      ]
    }
  }
});
