/* Unité 7 : La mode, de la rue aux défilés (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 7,
  niveau: "b1",
  theme: "Gastronomie, mode",
  titre: "La mode, de la rue aux défilés",
  objectif: "Décrire des vêtements et un style, donner son avis sur une tendance.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "La friperie, nouvelle boutique préférée des étudiants",
          format: "long",
          texte: [
            "Il y a encore quinze ans, acheter des vêtements d’occasion avait une image un peu triste. Aujourd’hui, c’est devenu tendance. Dans les grandes villes françaises, les friperies se multiplient, et les applications de revente en ligne comptent des millions d’utilisateurs. Chez les moins de trente ans, la seconde main n’est plus un choix par défaut : c’est un style.",
            "Pourquoi ce succès ? D’abord pour le prix. Un manteau en laine coûte souvent trois ou quatre fois moins cher qu’en boutique. Ensuite pour l’originalité : en friperie, on trouve des pièces uniques, que personne d’autre ne portera. « J’aime l’idée qu’un vêtement ait déjà une histoire », explique Inès, 21 ans, étudiante en design à Lille.",
            "Il y a aussi une raison écologique. L’industrie textile est l’une des plus polluantes au monde : il faut beaucoup d’eau pour produire un seul jean, et les vêtements bon marché sont vite jetés. Acheter d’occasion permet de prolonger leur vie.",
            "Tout le monde n’est pas convaincu pour autant. Certains trouvent les friperies trop chères depuis qu’elles sont à la mode. D’autres remarquent que beaucoup de jeunes achètent d’occasion… pour revendre aussitôt et racheter encore. Finalement, la question n’est peut-être pas seulement où l’on achète, mais combien."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "La friperie, nouvelle boutique préférée des étudiants",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Selon l’article, la seconde main chez les jeunes est aujourd’hui…",
              options: ["un choix par défaut", "un style", "une habitude des personnes âgées"],
              answer: 1,
              explication: "« Ce n’est plus un choix par défaut : c’est un style. »"
            },
            {
              q: "Quelles sont les trois raisons du succès des friperies ?",
              options: [
                "La qualité, la rapidité, le service",
                "La mode, la publicité, le prix",
                "Le prix, l’originalité, l’écologie"
              ],
              answer: 2,
              explication: "Les paragraphes 2 et 3 les présentent dans cet ordre."
            },
            {
              q: "Qu’apprécie Inès dans les vêtements d’occasion ?",
              options: ["Ils ont déjà une histoire.", "Ils sont toujours neufs.", "Ils sont faciles à revendre."],
              answer: 0,
              explication: "« J’aime l’idée qu’un vêtement ait déjà une histoire. »"
            },
            {
              q: "Quelle critique est faite à la fin ?",
              options: [
                "Les vêtements d’occasion sont sales.",
                "Certains achètent et revendent sans cesse.",
                "Les friperies ferment trop tôt."
              ],
              answer: 1,
              explication: "La quantité achetée reste un problème."
            },
            {
              q: "« Pour autant » (dernier paragraphe) signifie :",
              options: ["par exemple", "par conséquent", "pourtant, malgré cela"],
              answer: 2,
              explication: "Le connecteur introduit une opposition."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une créatrice parle de son métier",
          genre: "Interview",
          transcription: "Comment j’ai commencé ? Un peu par hasard, en fait. Pendant mes études de commerce, je retouchais les vêtements de mes amies, je raccourcissais des robes, je changeais des boutons. Et un jour, une amie m’a dit : tu devrais vendre tes créations. Alors j’ai acheté une vieille machine à coudre et j’ai commencé dans ma chambre. Aujourd’hui, j’ai un petit atelier près du Vieux-Port et nous sommes trois. Je travaille surtout avec des tissus récupérés : des fins de rouleaux que les grandes marques n’utilisent plus. Mes vêtements sont simples, colorés, faciles à porter, et ils sont fabriqués en petites séries, jamais plus de cinquante pièces. Ce qui est difficile ? Le prix. Une robe fabriquée ici coûte forcément plus cher qu’une robe produite à l’autre bout du monde. Il faut l’expliquer aux clients. Mais je remarque que de plus en plus de gens préfèrent acheter moins, et mieux."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une créatrice parle de son métier",
          duree: "30 min",
          doc: "e1",
          consigne: "Camille, jeune créatrice de mode à Marseille, répond aux questions d’une journaliste. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Que faisait Camille pendant ses études ?",
              options: [
                "Elle travaillait dans une boutique.",
                "Elle retouchait les vêtements de ses amies.",
                "Elle étudiait la mode."
              ],
              answer: 1,
              explication: "Elle faisait des études de commerce et des retouches pour ses amies."
            },
            {
              q: "Avec quels tissus travaille-t-elle surtout ?",
              options: ["Des tissus synthétiques neufs", "De la soie importée", "Des tissus récupérés"],
              answer: 2,
              explication: "Des fins de rouleaux inutilisés par les grandes marques."
            },
            {
              q: "Combien de pièces fabrique-t-elle au maximum par série ?",
              options: ["Cinquante", "Cinq", "Cinq cents"],
              answer: 0,
              explication: "« Jamais plus de cinquante pièces. »"
            },
            {
              q: "Quelle est la principale difficulté de son métier ?",
              options: ["Trouver des clients", "Le prix de ses vêtements", "Le manque de place"],
              answer: 1,
              explication: "Une robe fabriquée en France coûte plus cher."
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
          sousTitre: "Décrire des vêtements et un style",
          duree: "20 min",
          consigne: "Associe chaque expression à son sens.",
          items: [
            { terme: "être à la mode", definition: "correspondre aux goûts du moment" },
            { terme: "démodé", definition: "qui ne plaît plus, qui date d’une autre époque" },
            { terme: "une tenue", definition: "l’ensemble des vêtements portés en même temps" },
            { terme: "assorti", definition: "qui va bien avec autre chose (couleur, style)" },
            { terme: "d’occasion", definition: "qui a déjà appartenu à quelqu’un" },
            { terme: "sur mesure", definition: "fabriqué exactement à la taille d’une personne" },
            { terme: "ça te va bien", definition: "ce vêtement te rend joli·e, il te convient" }
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
          sousTitre: "Comparer : comparatif et superlatif",
          duree: "45 min",
          regles: ["comparatif-superlatif"],
          fiche: "<p>Pour comparer : <strong>plus / moins / aussi</strong> + adjectif + <strong>que</strong>. Attention aux formes irrégulières : <em>bon → meilleur</em>, <em>bien → mieux</em>. Le superlatif ajoute l’article : <strong>le plus</strong>, <strong>la moins</strong>, <strong>les meilleurs</strong>.</p><p class=\"ex\">Ce manteau est <strong>moins cher que</strong> l’autre. C’est <strong>la meilleure</strong> friperie de la ville.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "Ce jean d’occasion est",
              options: ["plus bon marché", "moins cher"],
              answer: 1,
              apres: "que le neuf.",
              explication: "« Bon marché » ne se compare pas avec « plus » : on dit « moins cher » ou « meilleur marché »."
            },
            {
              avant: "La qualité de ce pull est",
              options: ["meilleure", "plus bonne"],
              answer: 0,
              apres: "que celle du mien.",
              explication: "Bon → meilleur, jamais « plus bon »."
            },
            {
              avant: "Elle s’habille",
              options: ["meilleur", "mieux"],
              answer: 1,
              apres: "que sa sœur.",
              explication: "« S’habiller » est un verbe : on compare avec l’adverbe bien → mieux."
            },
            {
              avant: "C’est la robe",
              options: ["la plus", "plus"],
              answer: 0,
              apres: "élégante de la collection.",
              explication: "Superlatif : l’article est répété devant « plus » après le nom."
            },
            {
              avant: "Ces chaussures sont",
              options: ["autant", "aussi"],
              answer: 1,
              apres: "confortables que des baskets.",
              explication: "« Aussi » devant un adjectif ; « autant » avec un verbe ou un nom."
            },
            {
              avant: "J’achète",
              options: ["moins de", "moins des"],
              answer: 0,
              apres: "vêtements qu’avant.",
              explication: "Avec un nom : « moins de », « plus de », « autant de »."
            },
            {
              avant: "C’est le",
              options: ["plus pire", "pire"],
              answer: 1,
              apres: "achat de ma vie !",
              explication: "Mauvais → pire. « Plus pire » est une faute : « pire » est déjà un comparatif."
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
          sousTitre: "La mode rapide : pour ou contre ?",
          duree: "1 h",
          regles: ["donner-son-avis", "connecteurs-logiques"],
          consigne: "Sur un forum étudiant, quelqu’un demande : « Faut-il arrêter d’acheter dans les grandes chaînes de mode bon marché ? » Réponds en donnant ton avis, avec deux arguments et un exemple personnel.",
          min: 140,
          max: 190,
          checklist: [
            "Mon avis est clair dès le début",
            "J’ai donné deux arguments différents",
            "J’ai utilisé au moins trois connecteurs (d’abord, de plus, pourtant, donc…)",
            "J’ai ajouté un exemple personnel",
            "J’ai utilisé au moins un comparatif"
          ],
          modele: "À mon avis, il ne faut pas forcément arrêter, mais il faut acheter beaucoup moins.\n\nD’abord, je comprends que les étudiants choisissent ces magasins : avec un petit budget, c’est difficile de payer une robe cent euros. Pourtant, ces vêtements sont souvent de moins bonne qualité. Un t-shirt bon marché se déforme après trois lavages, alors on en rachète un autre, et finalement, on dépense autant.\n\nDe plus, cette production a un coût pour la planète et pour les ouvriers qui fabriquent nos vêtements à l’autre bout du monde.\n\nPersonnellement, l’année dernière, j’ai décidé de n’acheter que deux vêtements neufs par saison. Le reste, je le trouve en friperie ou je l’échange avec des amies. Je m’habille mieux qu’avant, et je dépense moins.\n\nDonc, plutôt que d’interdire, apprenons à choisir !"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter mon style",
          duree: "30 min",
          consigne: "Présente ton style vestimentaire : ce que tu portes au quotidien, ce que tu portes pour une occasion spéciale, et comment ton style a changé depuis que tu étais adolescente. Compare la mode en France et en Chine si tu le souhaites.",
          preparation: [
            "D’habitude, je porte…",
            "Pour une occasion spéciale, je mets…",
            "Quand j’étais adolescente, je…",
            "Aujourd’hui, je fais plus attention à…",
            "Ce qui me frappe en France, c’est que…"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "D’habitude, je porte des vêtements simples et confortables : un jean, un pull et des baskets. J’aime les couleurs douces, le beige, le bleu clair. Pour une occasion spéciale, je mets plutôt une robe longue et des boucles d’oreilles. Quand j’étais adolescente, je suivais beaucoup la mode coréenne, je changeais de style tous les mois ! Aujourd’hui, je fais plus attention à la qualité : je préfère avoir moins de vêtements, mais qui durent. Ce qui me frappe en France, c’est que les gens s’habillent de façon assez sobre, souvent en noir ou en gris.",
          checklist: [
            "J’ai parlé du quotidien et d’une occasion spéciale",
            "J’ai comparé le passé et le présent (imparfait / présent)",
            "J’ai utilisé au moins cinq mots de vocabulaire de la mode",
            "J’ai parlé sans lire"
          ]
        }
      ]
    }
  }
});
