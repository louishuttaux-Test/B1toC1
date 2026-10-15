/* Unité 5 : Paris et Pékin, villes olympiques (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 5,
  niveau: "b1",
  theme: "Sport et tourisme",
  chine: true,
  titre: "Paris et Pékin, villes olympiques",
  objectif: "Comprendre un texte sur un grand événement, comparer des lieux, présenter un site touristique.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Deux villes, plusieurs Jeux",
          format: "long",
          texte: [
            "Peu de villes au monde ont accueilli plusieurs fois les Jeux olympiques. Paris et Pékin font partie de ce club très fermé, chacune avec une histoire bien particulière.",
            "Paris a organisé les Jeux d’été à trois reprises : en 1900, en 1924, puis en 2024, exactement un siècle plus tard. Les Jeux de 2024 ont marqué les esprits par leurs sites spectaculaires : le beach-volley au pied de la tour Eiffel, l’escrime sous la verrière du Grand Palais, l’équitation dans les jardins du château de Versailles. Pour la première fois, la cérémonie d’ouverture ne s’est pas déroulée dans un stade, mais sur la Seine, où les athlètes ont défilé en bateau.",
            "Pékin, de son côté, a accueilli les Jeux d’été en 2008, puis les Jeux d’hiver en 2022. Elle est ainsi devenue la première ville de l’histoire à organiser les deux. Le stade national, surnommé « le Nid d’oiseau » à cause de sa structure d’acier entrelacé, est resté le symbole de 2008. En 2022, il a de nouveau accueilli les cérémonies.",
            "Pour les villes hôtes, l’enjeu est immense : il faut construire, transporter des millions de visiteurs et laisser un héritage utile aux habitants. À Paris, par exemple, de gros travaux ont amélioré la qualité de l’eau de la Seine, avec l’objectif de pouvoir à nouveau s’y baigner. Les Jeux passent, mais les villes restent."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Deux villes, plusieurs Jeux",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Combien de fois Paris a-t-elle organisé les Jeux d’été ?",
              options: ["Deux fois", "Quatre fois", "Trois fois"],
              answer: 2,
              explication: "En 1900, 1924 et 2024."
            },
            {
              q: "Qu’est-ce qui était nouveau lors de la cérémonie d’ouverture de 2024 ?",
              options: [
                "Elle s’est déroulée sur la Seine, et non dans un stade.",
                "Elle a eu lieu la nuit.",
                "Elle a eu lieu à Versailles."
              ],
              answer: 0,
              explication: "Les athlètes ont défilé en bateau sur la Seine."
            },
            {
              q: "Pourquoi Pékin est-elle une ville olympique unique ?",
              options: [
                "C’est la plus grande ville olympique.",
                "C’est la première ville à avoir organisé les Jeux d’été et d’hiver.",
                "Elle a organisé les Jeux trois fois."
              ],
              answer: 1,
              explication: "Jeux d’été en 2008, Jeux d’hiver en 2022."
            },
            {
              q: "Pourquoi le stade de Pékin s’appelle-t-il « le Nid d’oiseau » ?",
              options: [
                "Des oiseaux y vivent.",
                "Il est construit en bois.",
                "Sa structure d’acier entrelacé ressemble à un nid."
              ],
              answer: 2,
              explication: "鸟巢 (niǎocháo) : le nid d’oiseau."
            },
            {
              q: "Selon le dernier paragraphe, quel est l’enjeu principal pour une ville hôte ?",
              options: [
                "Laisser un héritage utile aux habitants",
                "Gagner des médailles",
                "Attirer des touristes une seule fois"
              ],
              answer: 0,
              explication: "« Les Jeux passent, mais les villes restent. »"
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une croisière sur la Seine",
          genre: "Commentaire de guide",
          transcription: "Bienvenue à bord ! Notre croisière sur la Seine va durer une heure. Sur votre gauche, vous voyez le musée d’Orsay, une ancienne gare transformée en musée en 1986, célèbre pour ses peintures impressionnistes. En face, sur la rive droite, le jardin des Tuileries mène au musée du Louvre. Dans quelques minutes, nous passerons sous le pont Alexandre-III, le plus décoré de Paris. Puis nous arriverons au pied de la tour Eiffel, construite pour l’Exposition universelle de 1889. À l’origine, elle ne devait rester que vingt ans ! Pendant les Jeux de 2024, des athlètes du monde entier ont défilé ici même, sur des bateaux comme le nôtre. N’hésitez pas à prendre des photos depuis le pont supérieur, mais restez assis pendant les manœuvres. Bonne croisière !"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une croisière sur la Seine",
          duree: "25 min",
          doc: "e1",
          consigne: "Tu fais une croisière sur la Seine à Paris. Écoute le guide.",
          questions: [
            {
              q: "Combien de temps dure la croisière ?",
              options: ["Trente minutes", "Deux heures", "Une heure"],
              answer: 2,
              explication: "« Notre croisière sur la Seine va durer une heure. »"
            },
            {
              q: "Qu’était le musée d’Orsay autrefois ?",
              options: ["Une gare", "Un palais royal", "Une usine"],
              answer: 0,
              explication: "Une ancienne gare, transformée en musée en 1986."
            },
            {
              q: "Pourquoi la tour Eiffel a-t-elle été construite ?",
              options: ["Pour les Jeux olympiques de 1900", "Pour l’Exposition universelle de 1889", "Pour la radio"],
              answer: 1,
              explication: "Elle ne devait d’ailleurs rester que vingt ans."
            },
            {
              q: "Quelle consigne de sécurité le guide donne-t-il ?",
              options: [
                "Ne pas prendre de photos",
                "Rester sur le pont inférieur",
                "Rester assis pendant les manœuvres"
              ],
              answer: 2,
              explication: "Les photos sont autorisées depuis le pont supérieur."
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
          sousTitre: "Comparer : plus, moins, aussi, le plus",
          duree: "35 min",
          regles: ["comparatif-superlatif"],
          fiche: "<p><strong>Comparatif</strong> : <em>plus / moins / aussi</em> + adjectif + <em>que</em> ; <em>plus de / moins de / autant de</em> + nom + <em>que</em>.</p> <p><strong>Superlatif</strong> : <em>le / la / les plus</em> + adjectif (+ <em>de</em>) : le pont <em>le plus</em> décoré <em>de</em> Paris.</p> <p>Formes irrégulières : <em>bon → meilleur</em>, <em>bien → mieux</em>.</p>",
          consigne: "Choisis la forme qui convient.",
          phrases: [
            {
              avant: "Pékin est",
              options: ["première", "le premier", "la première"],
              answer: 2,
              apres: "ville à organiser les Jeux d’été et d’hiver.",
              explication: "« Ville » est féminin : la première."
            },
            {
              avant: "La tour Eiffel est",
              options: ["plus haute", "la plus haut", "plus haut"],
              answer: 0,
              apres: "que l’Arc de triomphe.",
              explication: "Comparatif accordé avec « la tour » : plus haute… que."
            },
            {
              avant: "C’est le pont",
              options: ["plus", "le plus", "le mieux"],
              answer: 1,
              apres: "décoré de Paris.",
              explication: "Superlatif : le plus + adjectif."
            },
            {
              avant: "Ce restaurant est",
              options: ["mieux", "plus bon", "meilleur"],
              answer: 2,
              apres: "que l’autre.",
              explication: "On ne dit pas « plus bon » : bon → meilleur."
            },
            {
              avant: "Elle nage",
              options: ["mieux", "meilleur", "plus bien"],
              answer: 0,
              apres: "que moi.",
              explication: "Avec un verbe, c’est l’adverbe bien → mieux."
            },
            {
              avant: "Il y a",
              options: ["autant que", "autant de", "aussi"],
              answer: 1,
              apres: "touristes que l’an dernier.",
              explication: "Devant un nom : autant de."
            },
            {
              avant: "Le métro est",
              options: ["plus moins cher", "moins de cher", "moins cher"],
              answer: 2,
              apres: "que le taxi.",
              explication: "Devant un adjectif : moins + adjectif."
            },
            {
              avant: "Versailles est l’un des sites",
              options: ["les plus visités", "plus visités", "le plus visités"],
              answer: 0,
              apres: "de France.",
              explication: "« L’un des » + superlatif au pluriel : les plus visités."
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
          sousTitre: "Un avis de voyageuse",
          duree: "45 min",
          regles: ["comparatif-superlatif"],
          consigne: "Écris un avis sur un site de voyage à propos d’un lieu que tu as visité, en France ou en Chine : décris-le, donne ses points forts et ses points faibles, compare-le à un autre lieu, puis fais une recommandation.",
          min: 130,
          max: 180,
          checklist: [
            "Un titre accrocheur",
            "Une description du lieu",
            "Des points forts et au moins un point faible",
            "Au moins deux comparatifs et un superlatif",
            "Un conseil pratique (moment, transport, prix)",
            "Une recommandation finale claire"
          ],
          modele: "Le plus beau lever de soleil de mon voyage\n\nJe suis montée au Mont-Saint-Michel un matin de mai, et c’est sans doute le site le plus impressionnant que j’aie vu en France. L’abbaye semble posée sur la mer, et à marée haute, le rocher devient une île.\n\nLe village est charmant, mais beaucoup plus touristique que je ne l’imaginais : les rues sont étroites et les restaurants sont plus chers qu’ailleurs en Normandie. En revanche, la vue depuis les remparts est extraordinaire.\n\nComparé à la Montagne jaune, en Chine, le Mont-Saint-Michel est moins sportif, mais tout aussi magique au lever du soleil.\n\nMon conseil : arrivez avant neuf heures, prenez la navette gratuite depuis le parking et regardez l’horaire des marées.\n\nJe le recommande à tous ceux qui aiment l’histoire… et les belles photos !"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a4",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un site touristique chinois",
          duree: "30 min",
          consigne: "Des amis français veulent voyager en Chine. Présente-leur un lieu que tu aimes : où il se trouve, comment y aller, ce qu’il faut voir, un conseil pratique.",
          preparation: [
            "Si vous allez en Chine, je vous conseille vivement…",
            "C’est une ville / un site qui se trouve…",
            "On peut y aller en…",
            "Le plus beau, c’est…",
            "C’est plus… que…",
            "Évitez… / Pensez à…"
          ],
          dureeCible: "1 minute 30",
          modele: "Si vous allez en Chine, je vous conseille vivement de visiter Guilin, dans le sud du pays. On peut y aller en train à grande vitesse depuis Canton en un peu moins de trois heures. Le plus beau, c’est la croisière sur la rivière Li jusqu’à Yangshuo : les montagnes en forme de pains de sucre sont si célèbres qu’elles figurent sur le billet de vingt yuans ! À Yangshuo, louez un vélo pour vous promener entre les rizières, c’est beaucoup plus calme que dans les grandes villes. Un dernier conseil : évitez la semaine de la fête nationale, début octobre, car il y a énormément de monde.",
          checklist: [
            "J’ai situé le lieu",
            "J’ai expliqué comment y aller",
            "J’ai décrit ce qu’il faut voir",
            "Au moins une comparaison",
            "Un conseil pratique",
            "Le navigateur a compris la plupart de mes mots"
          ]
        }
      ]
    }
  }
});
