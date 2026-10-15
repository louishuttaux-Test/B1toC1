/* Unité 30 : Nuancer sa pensée à l’oral (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 30,
  niveau: "c1",
  theme: "Vie quotidienne",
  titre: "Nuancer sa pensée à l’oral",
  objectif: "Exprimer des degrés de certitude, d’accord et de réserve.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "L’art de la nuance à la française",
          format: "long",
          texte: [
            "Un étudiant étranger raconte son étonnement : après avoir présenté un exposé, il demande à son professeur ce qu’il en a pensé. Réponse : « Ce n’est pas mal du tout. » Inquiet, il interroge ses camarades, qui le rassurent : c’est presque un compliment. Bienvenue dans le monde de la litote, cette figure qui consiste à dire moins pour faire entendre plus, et qui est l’un des ressorts discrets de la conversation française.",
            "La nuance passe d’abord par les marqueurs de certitude. Entre « c’est vrai » et « c’est faux », le français dispose d’une gamme infinie : « il me semble que », « j’ai l’impression que », « il se pourrait que », « sans doute », « à mon sens », « dans une certaine mesure ». Paradoxalement, « sans doute » exprime souvent… un doute, alors que « sans aucun doute » marque la certitude. Ces nuances, qui paraissent des détails, changent profondément la manière dont un propos est reçu.",
            "Elle passe aussi par l’art de ne pas contredire de front. Plutôt que « vous avez tort », on dira « je ne suis pas certaine de vous suivre sur ce point », « c’est une piste intéressante, mais… », ou encore « on pourrait aussi voir les choses autrement ». À l’université comme au travail, ces précautions ne sont pas de l’hypocrisie : elles permettent de maintenir le dialogue tout en marquant un désaccord.",
            "Encore faut-il ne pas en abuser. Un propos qui accumule les précautions finit par ne plus rien dire. La vraie maîtrise, au niveau C1, consiste à savoir doser : affirmer nettement ce dont on est sûr, nuancer ce qui le mérite, et choisir, selon l’interlocuteur, le degré de franchise qui convient."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "L’art de la nuance à la française",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Pourquoi l’étudiant est-il inquiet ?",
              options: [
                "Il interprète « ce n’est pas mal du tout » comme une critique.",
                "Il a eu une mauvaise note.",
                "Il n’a pas compris la question."
              ],
              answer: 0,
              explication: "En réalité, c’était presque un compliment."
            },
            {
              q: "Qu’est-ce qu’une litote ?",
              options: ["Une exagération", "Dire moins pour faire entendre plus", "Une répétition"],
              answer: 1,
              explication: "Premier paragraphe."
            },
            {
              q: "Que signifie souvent « sans doute » ?",
              options: ["Une certitude absolue", "Un refus", "Une probabilité, un léger doute"],
              answer: 2,
              explication: "Alors que « sans aucun doute » marque la certitude."
            },
            {
              q: "Pourquoi éviter de contredire de front ?",
              options: [
                "Pour maintenir le dialogue tout en marquant un désaccord",
                "Parce que c’est interdit",
                "Pour éviter de répondre"
              ],
              answer: 0,
              explication: "Ce n’est pas de l’hypocrisie."
            },
            {
              q: "Quel danger le dernier paragraphe signale-t-il ?",
              options: [
                "Être trop direct",
                "Accumuler tant de précautions qu’on ne dit plus rien",
                "Parler trop vite"
              ],
              answer: 1,
              explication: "Il faut savoir doser."
            },
            {
              q: "« Encore faut-il… » (dernier paragraphe) introduit…",
              options: ["une conclusion", "un exemple", "une condition, une réserve"],
              answer: 2,
              explication: "Inversion du sujet après « encore » : « mais il faut aussi… »"
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Deux amis parlent d’un film",
          genre: "Dialogue",
          transcription: "Alors, tu en as pensé quoi ? Franchement, c’est pas mal. La photographie est superbe, les acteurs sont justes. Mais j’ai trouvé ça un peu long, non ? Un peu long ? Deux heures quarante, tu veux dire ! Non, je plaisante, je comprends ce que tu veux dire. Moi, je l’ai trouvé bouleversant, surtout la fin. Bouleversant, peut-être pas, mais touchant, oui, je te l’accorde. Ce qui me gêne, c’est le personnage du père : il me semble qu’il est un peu caricatural. Je ne suis pas sûre d’être d’accord. Il est excessif, d’accord, mais c’est voulu, c’est le regard de l’enfant sur lui. Ah, vu comme ça… Tu marques un point. N’empêche, quarante minutes de moins, et c’était un chef-d’œuvre. Là, tu exagères ! Bon, disons un très bon film. On est d’accord ?"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Deux amis parlent d’un film",
          duree: "35 min",
          doc: "e1",
          consigne: "Léa et Hugo sortent du cinéma. Écoute comment ils nuancent leurs avis. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Que signifie « c’est pas mal » dans la bouche de Hugo ?",
              options: ["Il a plutôt aimé, avec des réserves.", "Il a détesté le film.", "Il n’a pas d’avis."],
              answer: 0,
              explication: "C’est une litote : il cite ensuite des qualités."
            },
            {
              q: "Comment Hugo nuance-t-il le mot « bouleversant » ?",
              options: [
                "Il dit que c’était ennuyeux.",
                "Il propose « touchant » à la place.",
                "Il est entièrement d’accord."
              ],
              answer: 1,
              explication: "« Bouleversant, peut-être pas, mais touchant, oui. »"
            },
            {
              q: "Comment Léa défend-elle le personnage du père ?",
              options: [
                "Elle dit que l’acteur est célèbre.",
                "Elle ne le défend pas.",
                "Elle explique que son excès est voulu, car on le voit par les yeux de l’enfant."
              ],
              answer: 2,
              explication: "Hugo reconnaît : « tu marques un point »."
            },
            {
              q: "Sur quoi s’accordent-ils finalement ?",
              options: ["C’est un très bon film.", "C’est un chef-d’œuvre.", "C’est un film raté."],
              answer: 0,
              explication: "Un compromis final."
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
          sousTitre: "Les expressions de la nuance",
          duree: "25 min",
          consigne: "Associe chaque expression à sa fonction.",
          items: [
            { terme: "il me semble que", definition: "exprimer un avis avec prudence" },
            { terme: "je te l’accorde", definition: "concéder un point à son interlocuteur" },
            { terme: "tu marques un point", definition: "reconnaître la pertinence d’un argument" },
            { terme: "dans une certaine mesure", definition: "limiter la portée d’une affirmation" },
            { terme: "force est de constater que", definition: "reconnaître un fait qu’on ne peut pas nier" },
            { terme: "je ne suis pas certaine de vous suivre", definition: "marquer poliment un désaccord" },
            { terme: "n’empêche", definition: "maintenir son idée malgré tout (familier)" }
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
          sousTitre: "Degrés de certitude : indicatif ou subjonctif ?",
          duree: "50 min",
          regles: ["subjonctif-emploi", "donner-son-avis"],
          fiche: "<p>Plus la certitude baisse, plus le subjonctif apparaît. <strong>Indicatif</strong> : <em>il est certain que, il est probable que, il me semble que, je suis sûre que</em>. <strong>Subjonctif</strong> : <em>il est possible que, il se peut que, il semble que, je doute que, il est peu probable que, je ne pense pas que</em>. Attention : <em>il me semble que</em> (indicatif) mais <em>il semble que</em> (plutôt subjonctif).</p><p class=\"ex\">Il <strong>me</strong> semble qu’il <strong>a</strong> raison. Il semble qu’il <strong>ait</strong> raison.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "Il me semble que ce film",
              options: ["est", "soit"],
              answer: 0,
              apres: "un peu long.",
              explication: "« Il me semble que » : indicatif."
            },
            {
              avant: "Il semble que le réalisateur",
              options: ["a", "ait"],
              answer: 1,
              apres: "voulu exagérer ce personnage.",
              explication: "« Il semble que » (sans pronom) : subjonctif, le plus souvent."
            },
            {
              avant: "Il est probable que nous",
              options: ["irons", "allions"],
              answer: 0,
              apres: "le revoir.",
              explication: "« Probable » : indicatif (forte probabilité)."
            },
            {
              avant: "Il est possible que tu",
              options: ["as", "aies"],
              answer: 1,
              apres: "raison.",
              explication: "« Possible » : subjonctif."
            },
            {
              avant: "Je ne pense pas qu’il",
              options: ["soit", "est"],
              answer: 0,
              apres: "caricatural.",
              explication: "Pensée à la forme négative : subjonctif."
            },
            {
              avant: "Je suis convaincue que cette fin",
              options: ["reste", "restera"],
              answer: 1,
              apres: "dans les mémoires.",
              explication: "Certitude : indicatif (ici futur)."
            },
            {
              avant: "Il se peut que je",
              options: ["me trompe", "me trompe pas"],
              answer: 0,
              apres: ", mais je l’ai trouvé touchant.",
              explication: "« Il se peut que » : subjonctif."
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
          sousTitre: "Répondre avec nuance",
          duree: "1 h 15",
          regles: ["donner-son-avis", "subjonctif-emploi", "registres-de-langue"],
          consigne: "Une camarade t’envoie le message suivant : « J’ai lu que les cours en ligne étaient tout aussi efficaces que les cours en présentiel. Je pense donc ne plus venir en amphi. Tu en penses quoi ? » Réponds-lui par écrit : reconnais ce qui est juste dans son raisonnement, exprime tes réserves avec tact, et propose une solution intermédiaire.",
          min: 180,
          max: 240,
          checklist: [
            "J’ai reconnu au moins un point juste dans son raisonnement",
            "J’ai exprimé mon désaccord sans contredire de front",
            "J’ai utilisé au moins quatre marqueurs de nuance différents",
            "J’ai employé correctement indicatif et subjonctif après des expressions d’opinion",
            "J’ai proposé une solution intermédiaire",
            "Le ton est amical mais pas familier"
          ],
          modele: "Coucou Clara,\n\nJe comprends tout à fait ton envie : avec le trajet et les cours à huit heures, venir en amphi demande un vrai effort ! Et tu as en partie raison : certaines études montrent que, pour transmettre des connaissances, les cours en ligne peuvent être efficaces, surtout quand on peut revoir les vidéos.\n\nCela dit, je ne suis pas certaine que la question se réduise à l’efficacité. Il me semble qu’en amphi, on apprend aussi des choses qu’aucune vidéo ne remplace : poser une question au prof à la fin, comparer ses notes, entendre les questions des autres. Et je doute que tu puisses suivre aussi bien à la maison, avec ton téléphone à côté… Je parle d’expérience, sans doute !\n\nPar ailleurs, il est possible que certains profs donnent en cours des indications sur l’examen qu’ils ne mettent pas en ligne.\n\nAlors pourquoi ne pas faire un compromis ? Tu pourrais suivre en ligne les cours magistraux les plus théoriques, et venir aux TD et aux cours où l’on discute. Et si tu veux, on peut se retrouver à la bibliothèque après, pour comparer nos notes.\n\nDis-moi ce que tu en penses !\n\nLin"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Nuancer une affirmation",
          duree: "35 min",
          consigne: "Réagis à voix haute à l’affirmation suivante : « Les réseaux sociaux ont rendu les jeunes plus seuls. » Tu dois montrer trois degrés : ce dont tu es sûre, ce qui te paraît probable, et ce dont tu doutes. Termine par une conclusion nette.",
          preparation: [
            "Ce dont je suis certaine, c’est que…",
            "Il est probable que…",
            "En revanche, je doute que…",
            "Dans une certaine mesure, …",
            "Au bout du compte, je dirais que…"
          ],
          dureeCible: "2 minutes",
          modele: "Ce dont je suis certaine, c’est que les réseaux sociaux ont profondément changé la façon dont les jeunes communiquent : on échange plus souvent, mais plus brièvement. Il est probable aussi que certains, en se comparant sans cesse aux autres, se sentent plus isolés ou moins satisfaits de leur vie. En revanche, je doute que l’on puisse dire que les jeunes sont plus seuls en général. Pour beaucoup, et je pense par exemple aux étudiants étrangers comme moi, ces outils permettent au contraire de garder un lien avec la famille et les amis restés au pays. Dans une certaine mesure, tout dépend de l’usage qu’on en fait. Au bout du compte, je dirais que les réseaux sociaux ne créent pas la solitude, mais qu’ils peuvent l’aggraver chez ceux qui sont déjà fragiles.",
          checklist: [
            "J’ai exprimé trois degrés de certitude",
            "J’ai utilisé correctement indicatif et subjonctif",
            "J’ai donné un exemple personnel",
            "Ma conclusion est nette"
          ]
        }
      ]
    }
  }
});
