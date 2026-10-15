/* Unité 13 : Les droits de l’homme, de 1789 à aujourd’hui (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 13,
  niveau: "b2",
  theme: "Droits humains",
  titre: "Les droits de l’homme, de 1789 à aujourd’hui",
  objectif: "Comprendre l’histoire des droits fondamentaux et défendre une valeur avec des arguments.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Deux déclarations qui ont changé le monde",
          format: "long",
          texte: [
            "Le 26 août 1789, quelques semaines après la prise de la Bastille, l’Assemblée nationale adopte la Déclaration des droits de l’homme et du citoyen. Son premier article est resté célèbre : « Les hommes naissent et demeurent libres et égaux en droits. » Pour la première fois en France, un texte affirme que ces droits appartiennent à chaque individu, et non au bon vouloir d’un roi.",
            "Ce texte fondateur a pourtant ses limites. Les femmes n’y sont pas réellement incluses : en 1791, Olympe de Gouges publie une Déclaration des droits de la femme et de la citoyenne pour le dénoncer. L’esclavage, lui, n’est définitivement aboli dans les colonies françaises qu’en 1848, et les Françaises n’obtiennent le droit de vote qu’en 1944.",
            "Après les horreurs de la Seconde Guerre mondiale, la communauté internationale veut aller plus loin. Le 10 décembre 1948, à Paris, l’Assemblée générale des Nations unies adopte la Déclaration universelle des droits de l’homme. Le juriste français René Cassin participe activement à sa rédaction, aux côtés notamment de l’Américaine Eleanor Roosevelt et du Chinois Zhang Pengchun. Le texte proclame des droits civils et politiques, mais aussi économiques et sociaux, comme le droit à l’éducation.",
            "Ces déclarations ne suffisent pas à garantir le respect des droits dans les faits. Elles servent néanmoins de référence commune : c’est en leur nom que des citoyens, des associations ou des juges peuvent aujourd’hui dénoncer une injustice."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Deux déclarations qui ont changé le monde",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quelle idée nouvelle la Déclaration de 1789 affirme-t-elle ?",
              options: [
                "Le roi décide des droits de chacun.",
                "Les droits appartiennent à chaque individu.",
                "Seuls les citoyens riches ont des droits."
              ],
              answer: 1,
              explication: "« Et non au bon vouloir d’un roi »."
            },
            {
              q: "Pourquoi Olympe de Gouges écrit-elle sa propre déclaration ?",
              options: ["Pour abolir l’esclavage", "Pour soutenir le roi", "Pour dénoncer l’exclusion des femmes"],
              answer: 2,
              explication: "Le titre même de son texte répond à celui de 1789."
            },
            {
              q: "En quelle année les Françaises obtiennent-elles le droit de vote ?",
              options: ["1944", "1848", "1789"],
              answer: 0,
              explication: "1848 est la date de l’abolition définitive de l’esclavage."
            },
            {
              q: "Quelle nouveauté apporte la Déclaration de 1948 ?",
              options: [
                "Elle ne concerne que la France.",
                "Elle ajoute des droits économiques et sociaux.",
                "Elle remplace celle de 1789."
              ],
              answer: 1,
              explication: "Par exemple, le droit à l’éducation."
            },
            {
              q: "Selon la conclusion, à quoi servent ces déclarations ?",
              options: [
                "Elles garantissent automatiquement le respect des droits.",
                "Elles permettent de punir les États.",
                "Elles servent de référence pour dénoncer les injustices."
              ],
              answer: 2,
              explication: "« Néanmoins » introduit leur utilité, malgré leurs limites."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Portrait : Simone Veil",
          genre: "Portrait radiophonique",
          transcription: "Aujourd’hui, notre portrait est consacré à Simone Veil. Née à Nice en 1927, elle est déportée à Auschwitz à seize ans avec sa famille, parce qu’elle est juive. Elle survit, mais perd sa mère, son père et son frère. Après la guerre, elle devient magistrate. En 1974, elle est nommée ministre de la Santé et défend devant les députés, dans un climat très hostile, la loi sur l’interruption volontaire de grossesse, adoptée au début de l’année 1975. En 1979, elle devient la première présidente du Parlement européen élu au suffrage universel. Européenne convaincue, elle voyait dans l’union des peuples la meilleure garantie contre le retour de la barbarie. Elle repose depuis 2018 au Panthéon, aux côtés de son mari."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Portrait : Simone Veil",
          duree: "30 min",
          doc: "e1",
          consigne: "Écoute ce portrait radiophonique d’une grande figure française.",
          questions: [
            {
              q: "Quel âge avait Simone Veil lorsqu’elle a été déportée ?",
              options: ["Vingt ans", "Seize ans", "Douze ans"],
              answer: 1,
              explication: "Elle est née en 1927 et a été déportée en 1944."
            },
            {
              q: "Quel métier exerce-t-elle après la guerre ?",
              options: ["Avocate", "Journaliste", "Magistrate"],
              answer: 2,
              explication: "Un magistrat travaille dans la justice : juge ou procureur, par exemple."
            },
            {
              q: "Quelle fonction occupe-t-elle à partir de 1979 ?",
              options: ["Présidente du Parlement européen", "Ministre de la Santé", "Députée"],
              answer: 0,
              explication: "La première présidente du Parlement européen élu au suffrage universel."
            },
            {
              q: "Selon elle, quelle était la meilleure protection contre la barbarie ?",
              options: ["L’armée", "L’union des peuples européens", "La croissance économique"],
              answer: 1,
              explication: "On retrouve ici l’idée de la construction européenne."
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
          sousTitre: "Le vocabulaire des droits",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "un droit fondamental", definition: "un droit essentiel que possède tout être humain" },
            { terme: "abolir", definition: "supprimer officiellement une loi ou une pratique" },
            { terme: "l’égalité", definition: "le fait d’avoir les mêmes droits que les autres" },
            {
              terme: "une discrimination",
              definition: "un traitement injuste fondé sur une différence (origine, sexe…)"
            },
            { terme: "dénoncer", definition: "révéler publiquement quelque chose d’injuste" },
            {
              terme: "le suffrage universel",
              definition: "le droit de vote accordé à tous les citoyens adultes"
            },
            {
              terme: "une association",
              definition: "un groupe de personnes réunies autour d’un but commun, sans chercher le profit"
            },
            { terme: "militer", definition: "agir activement pour défendre une cause" }
          ]
        }
      ]
    },
    ecriture: {
      exercices: [
        {
          id: "a3",
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Défendre un droit dans le courrier des lecteurs",
          duree: "1 h",
          regles: ["connecteurs-logiques", "subjonctif-emploi"],
          consigne: "Un magazine pose cette question à ses lecteurs : « Quel droit fondamental vous semble le plus important ? » Écris ta contribution : choisis un droit, justifie ton choix avec deux arguments et un exemple, puis conclus.",
          min: 140,
          max: 200,
          checklist: [
            "Le droit choisi est annoncé clairement",
            "Deux arguments, reliés par des connecteurs",
            "Un exemple précis",
            "Une concession ou une nuance",
            "Au moins un subjonctif après il faut que, pour que, bien que…",
            "Une conclusion qui reprend la position"
          ],
          modele: "Parmi tous les droits proclamés en 1948, celui qui me semble le plus essentiel est le droit à l’éducation.\n\nD’abord, l’éducation rend possibles tous les autres droits. Comment défendre sa liberté d’expression si l’on ne sait pas lire ? Comment voter librement si l’on ne peut pas comprendre un programme ? Savoir lire, écrire et compter, c’est pouvoir participer à la vie de la société.\n\nEnsuite, l’éducation est le meilleur outil contre les inégalités. Dans de nombreux pays, scolariser les filles a permis de faire reculer la pauvreté et d’améliorer la santé des familles. Une génération instruite transforme un pays entier.\n\nCertes, l’éducation ne suffit pas : sans liberté ni sécurité, apprendre devient impossible. Mais pour que ces droits soient défendus durablement, il faut que chaque citoyen sache les connaître et les revendiquer.\n\nC’est pourquoi l’éducation n’est pas un droit parmi d’autres : c’est la clé qui ouvre toutes les portes."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a4",
          type: "oral",
          titre: "Parler",
          sousTitre: "Défendre une valeur à l’oral",
          duree: "40 min",
          consigne: "Choisis un article de la Déclaration universelle (droit à l’éducation, liberté d’expression, égalité entre les femmes et les hommes…) et explique pourquoi il te semble essentiel, avec un exemple.",
          preparation: [
            "J’ai choisi de vous parler de…",
            "Ce droit me semble essentiel parce que…",
            "Prenons l’exemple de…",
            "Sans ce droit, …",
            "Il faut que + subjonctif",
            "C’est pourquoi je pense que…"
          ],
          dureeCible: "1 minute 30",
          modele: "J’ai choisi de vous parler de l’égalité entre les femmes et les hommes. Ce droit me semble essentiel parce qu’il concerne la moitié de l’humanité. Prenons l’exemple du droit de vote : en France, les femmes ne l’ont obtenu qu’en 1944, plus d’un siècle et demi après la Déclaration de 1789. Cela montre qu’un droit écrit dans un texte n’est pas forcément appliqué. Aujourd’hui encore, les femmes sont souvent moins bien payées que les hommes pour le même travail. Sans égalité réelle, la liberté reste incomplète. Il faut donc que chacun, à son niveau, refuse les discriminations. C’est pourquoi je pense que ce combat nous concerne tous.",
          checklist: [
            "J’ai annoncé le droit choisi",
            "Au moins deux justifications",
            "Un exemple précis, avec une date ou un fait",
            "Au moins un subjonctif",
            "Une conclusion claire",
            "Le navigateur a compris la plupart de mes mots"
          ]
        }
      ]
    }
  }
});
