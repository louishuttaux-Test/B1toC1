/* Unité 12 : L’Europe, une construction pas à pas (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 12,
  niveau: "b2",
  theme: "Information, géopolitique et histoire",
  titre: "L’Europe, une construction pas à pas",
  objectif: "Comprendre un texte historique, utiliser la voix passive, résumer sans donner son avis.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "De la guerre à l’Union européenne",
          format: "long",
          texte: [
            "Au lendemain de la Seconde Guerre mondiale, l’Europe est en ruines. Comment empêcher qu’une nouvelle guerre éclate entre la France et l’Allemagne ? Le 9 mai 1950, le ministre français des Affaires étrangères, Robert Schuman, propose une idée audacieuse : mettre en commun la production de charbon et d’acier, deux ressources indispensables à l’industrie… et à l’armement.",
            "L’idée aboutit en 1951 à la Communauté européenne du charbon et de l’acier (CECA), qui réunit six pays : la France, l’Allemagne de l’Ouest, l’Italie, la Belgique, les Pays-Bas et le Luxembourg. En 1957, ces mêmes pays signent les traités de Rome, qui créent la Communauté économique européenne : les marchandises doivent pouvoir circuler librement entre eux.",
            "Au cours des décennies suivantes, la communauté s’élargit et s’approfondit. Le traité de Maastricht, signé en 1992, donne naissance à l’Union européenne et prévoit une monnaie commune. Depuis le 1er janvier 2002, les pièces et les billets en euros ont remplacé le franc, le mark ou la lire dans la vie quotidienne de millions d’Européens.",
            "Aujourd’hui, l’Union compte vingt-sept États membres. Elle reste pourtant l’objet de vifs débats : certains lui reprochent d’être trop éloignée des citoyens, d’autres regrettent qu’elle ne soit pas plus unie face aux grandes puissances. Le Royaume-Uni l’a d’ailleurs quittée en 2020. Une chose est sûre : la paix entre ses membres, qui semblait improbable en 1945, est devenue une évidence."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "De la guerre à l’Union européenne",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quel était l’objectif principal de la proposition de Robert Schuman ?",
              options: [
                "Empêcher une nouvelle guerre entre la France et l’Allemagne",
                "Développer le tourisme",
                "Créer une monnaie commune"
              ],
              answer: 0,
              explication: "La question posée dans le premier paragraphe annonce cet objectif."
            },
            {
              q: "Pourquoi mettre en commun le charbon et l’acier ?",
              options: [
                "Parce que ce sont les seules ressources de l’Europe",
                "Parce qu’ils sont indispensables à l’industrie et à l’armement",
                "Parce qu’ils sont bon marché"
              ],
              answer: 1,
              explication: "Contrôler ensemble ces ressources rendait une guerre beaucoup plus difficile."
            },
            {
              q: "Que crée le traité de Maastricht ?",
              options: ["La CECA", "Les traités de Rome", "L’Union européenne"],
              answer: 2,
              explication: "Signé en 1992, il prévoit aussi la monnaie commune."
            },
            {
              q: "« La communauté s’élargit et s’approfondit » signifie :",
              options: [
                "Elle accueille de nouveaux pays et renforce sa coopération.",
                "Elle devient seulement plus grande.",
                "Elle se divise."
              ],
              answer: 0,
              explication: "S’élargir : plus de membres. S’approfondir : plus de domaines communs."
            },
            {
              q: "Quel ton l’auteur adopte-t-il dans la conclusion ?",
              options: ["Très critique", "Nuancé, mais positif sur la paix", "Indifférent"],
              answer: 1,
              explication: "Il mentionne les critiques, puis souligne un acquis : la paix."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Pourquoi le 14 Juillet ?",
          genre: "Chronique radio",
          transcription: "Pourquoi les Français font-ils la fête le 14 juillet ? On pense souvent qu’ils célèbrent la prise de la Bastille, le 14 juillet 1789, quand le peuple de Paris s’est emparé de cette prison, symbole du pouvoir du roi. C’est vrai… mais seulement en partie. Quand la fête nationale a été instituée, en 1880, les députés ont aussi voulu rappeler la fête de la Fédération, organisée le 14 juillet 1790, un an après la prise de la Bastille, pour célébrer l’unité de la nation. Un double anniversaire, donc ! Aujourd’hui, la journée commence par le défilé militaire sur les Champs-Élysées et se termine par des feux d’artifice et des bals populaires, souvent organisés par les pompiers. Une fête à la fois solennelle et joyeuse."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Pourquoi le 14 Juillet ?",
          duree: "25 min",
          doc: "e1",
          consigne: "Écoute cette courte chronique historique à la radio.",
          questions: [
            {
              q: "Que s’est-il passé le 14 juillet 1789 ?",
              options: ["La prise de la Bastille", "La fête de la Fédération", "La création de la fête nationale"],
              answer: 0,
              explication: "Le peuple de Paris s’est emparé de la prison."
            },
            {
              q: "Quand la fête nationale a-t-elle été instituée ?",
              options: ["En 1790", "En 1880", "En 1945"],
              answer: 1,
              explication: "Près d’un siècle après la Révolution."
            },
            {
              q: "Pourquoi parle-t-on d’un « double anniversaire » ?",
              options: [
                "On le fête dans deux villes.",
                "Il y a deux défilés.",
                "Il rappelle la prise de la Bastille et la fête de la Fédération."
              ],
              answer: 2,
              explication: "1789 et 1790."
            },
            {
              q: "Qui organise souvent les bals du 14 Juillet ?",
              options: ["Les pompiers", "Les mairies", "L’armée"],
              answer: 0,
              explication: "Les « bals des pompiers » sont une tradition très populaire."
            }
          ]
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "a2",
          type: "trous",
          titre: "Grammaire",
          sousTitre: "La voix passive",
          duree: "40 min",
          regles: ["voix-passive", "accord-participe-passe"],
          fiche: "<p>La voix passive met en avant ce qui <strong>subit</strong> l’action : <em>être</em> (au temps du verbe actif) + participe passé accordé avec le sujet.</p> <p class=\"ex\">Les six pays <strong>créent</strong> la CECA. → La CECA <strong>est créée</strong> par les six pays.<br>On <strong>a signé</strong> les traités. → Les traités <strong>ont été signés</strong>.</p>",
          consigne: "Choisis la forme qui convient.",
          phrases: [
            {
              avant: "La CECA",
              options: ["a été créée", "a créé", "est créant"],
              answer: 0,
              apres: "en 1951.",
              explication: "Passé composé passif : a été + participe accordé (créée, féminin)."
            },
            {
              avant: "Les traités de Rome",
              options: ["ont signé", "ont été signés", "sont signant"],
              answer: 1,
              apres: "en 1957.",
              explication: "Les traités subissent l’action : ont été signés (masculin pluriel)."
            },
            {
              avant: "L’euro",
              options: ["est utilisant", "utilise", "est utilisé"],
              answer: 2,
              apres: "par des millions d’Européens.",
              explication: "Présent passif : est + participe passé."
            },
            {
              avant: "La Bastille",
              options: ["a été prise", "a pris", "est prenant"],
              answer: 0,
              apres: "par le peuple de Paris.",
              explication: "Participe passé de prendre, accordé au féminin : prise."
            },
            {
              avant: "La loi",
              options: ["votera", "sera votée", "sera voter"],
              answer: 1,
              apres: "par le Parlement le mois prochain.",
              explication: "Futur passif : sera + participe passé."
            },
            {
              avant: "Ce traité est connu",
              options: ["à", "par", "de"],
              answer: 2,
              apres: "tous les historiens.",
              explication: "Avec connaître, aimer, respecter…, le complément d’agent est souvent introduit par de."
            },
            {
              avant: "Les nouvelles règles",
              options: ["ont été adoptées", "ont été adoptés", "ont adoptées"],
              answer: 0,
              apres: "l’an dernier.",
              explication: "Accord avec le sujet féminin pluriel : adoptées."
            },
            {
              avant: "Le mur de Berlin",
              options: ["a ouvert", "a été ouvert", "est ouvrant"],
              answer: 1,
              apres: "le 9 novembre 1989.",
              explication: "Passé composé passif."
            }
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
          sousTitre: "Résumer un texte historique",
          duree: "50 min",
          regles: ["voix-passive", "nominalisation"],
          consigne: "Résume le texte « De la guerre à l’Union européenne » sans donner ton avis. Reformule avec tes propres mots : ne recopie pas de phrases entières.",
          min: 100,
          max: 130,
          checklist: [
            "Les idées essentielles, dans l’ordre du texte",
            "Aucune opinion personnelle",
            "Pas de phrase recopiée",
            "Au moins deux phrases à la voix passive",
            "Des connecteurs pour relier les étapes",
            "Le texte respecte la longueur demandée"
          ],
          modele: "Après la Seconde Guerre mondiale, Robert Schuman propose en 1950 de mettre en commun le charbon et l’acier afin de rendre impossible un nouveau conflit franco-allemand. Ce projet aboutit en 1951 à la CECA, qui rassemble six pays. Six ans plus tard, un marché commun est instauré par les traités de Rome.\n\nLa coopération se développe ensuite progressivement : l’Union européenne est fondée par le traité de Maastricht en 1992, puis l’euro remplace les monnaies nationales en 2002.\n\nAujourd’hui composée de vingt-sept États, l’Union suscite des critiques, et le Royaume-Uni s’en est retiré en 2020. Elle a cependant rendu la paix durable entre ses membres."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a4",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un événement historique",
          duree: "40 min",
          consigne: "Comme dans un court exposé, présente un événement historique important de ton pays ou du monde : la date, le contexte, ce qui s’est passé et ses conséquences.",
          preparation: [
            "Je vais vous présenter…",
            "Pour comprendre cet événement, il faut savoir que…",
            "Le …, …",
            "Cet événement a eu pour conséquence…",
            "Il a été suivi de…",
            "Aujourd’hui encore, …"
          ],
          dureeCible: "1 minute 30 à 2 minutes",
          modele: "Je vais vous présenter la chute du mur de Berlin. Pour comprendre cet événement, il faut savoir qu’après la Seconde Guerre mondiale, l’Allemagne était divisée en deux pays, et que Berlin était coupée par un mur depuis 1961. Le soir du 9 novembre 1989, après des semaines de manifestations, les autorités de l’Allemagne de l’Est annoncent que les habitants peuvent franchir la frontière. Des milliers de Berlinois se précipitent vers le mur, et les postes de contrôle sont ouverts dans la nuit. Cet événement a eu pour conséquence la réunification de l’Allemagne, moins d’un an plus tard, le 3 octobre 1990. Aujourd’hui encore, il symbolise la fin de la guerre froide en Europe.",
          checklist: [
            "J’ai annoncé le sujet",
            "J’ai donné le contexte",
            "J’ai raconté les faits avec des dates précises",
            "J’ai présenté au moins une conséquence",
            "Au moins une phrase à la voix passive",
            "Le navigateur a compris la plupart de mes mots"
          ]
        }
      ]
    }
  }
});
