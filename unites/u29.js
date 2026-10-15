/* Unité 29 : Luxe et savoir-faire (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 29,
  niveau: "c1",
  theme: "Gastronomie, mode",
  chine: true,
  titre: "Luxe et savoir-faire",
  objectif: "Comprendre ce que le luxe et l’artisanat d’art doivent aux échanges entre la France et la Chine.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Le luxe français et la Chine : une histoire de savoir-faire",
          format: "long",
          texte: [
            "Lorsque Thierry Hermès ouvre son atelier de harnais à Paris en 1837, il fabrique des selles et des brides pour les chevaux de l’aristocratie. Près de deux siècles plus tard, la maison est devenue l’un des symboles mondiaux du luxe, mais elle revendique toujours la même valeur : le travail de la main. Un sac peut demander une quinzaine d’heures de travail à un seul artisan, du premier point de couture au dernier.",
            "Ce culte du savoir-faire est au cœur de la stratégie des marques françaises. L’État l’a même consacré en 2005 en créant le label « Entreprise du patrimoine vivant », qui distingue des ateliers aux techniques rares : verriers, brodeurs, tapissiers, porcelainiers. Car le luxe ne vend pas seulement un objet ; il vend une histoire, une rareté, un geste transmis de génération en génération.",
            "La Chine occupe dans cette histoire une place paradoxale. Pendant des siècles, c’est l’Europe qui a rêvé de ses produits de luxe : la soie, qui a donné son nom aux routes commerciales, et la porcelaine, que les Européens ont longtemps cherché à imiter. Ce n’est qu’au XVIIIe siècle que la découverte de gisements de kaolin, près de Limoges, permet à la France de produire sa propre porcelaine dure. Lyon, de son côté, avait bâti sa prospérité sur une soierie dont la matière première venait d’abord d’Orient.",
            "Aujourd’hui, le mouvement s’est inversé : avant la pandémie, les consommateurs chinois représentaient, selon les estimations du secteur, environ un tiers des achats de luxe dans le monde. Les marques françaises y voient une chance, mais aussi un défi : une clientèle jeune, connectée et exigeante, qui attend des maisons européennes non seulement un logo, mais un récit et, de plus en plus, une reconnaissance de sa propre culture. Le luxe, dès lors, devient aussi un lieu de dialogue entre deux traditions de l’excellence."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Le luxe français et la Chine : une histoire de savoir-faire",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Que fabriquait Thierry Hermès à l’origine ?",
              options: ["Des sacs à main", "Des parfums", "Des harnais et des selles pour chevaux"],
              answer: 2,
              explication: "Atelier de harnais en 1837."
            },
            {
              q: "Qu’est-ce que le label « Entreprise du patrimoine vivant » ?",
              options: [
                "Une distinction pour des ateliers aux savoir-faire rares",
                "Une taxe sur le luxe",
                "Un musée"
              ],
              answer: 0,
              explication: "Créé en 2005."
            },
            {
              q: "Pourquoi la place de la Chine est-elle « paradoxale » ?",
              options: [
                "Parce qu’elle refuse le luxe",
                "Parce qu’elle a d’abord été une source de produits de luxe convoités par l’Europe, avant de devenir un marché pour le luxe européen",
                "Parce qu’elle copie tout"
              ],
              answer: 1,
              explication: "Le mouvement s’est inversé."
            },
            {
              q: "Qu’a permis la découverte du kaolin près de Limoges ?",
              options: ["L’industrie du verre", "La production de soie", "La production française de porcelaine dure"],
              answer: 2,
              explication: "Au XVIIIe siècle."
            },
            {
              q: "Qu’attend la clientèle chinoise actuelle, selon le texte ?",
              options: [
                "Un récit et une reconnaissance de sa propre culture, pas seulement un logo",
                "Uniquement des prix bas",
                "Des produits fabriqués en Chine"
              ],
              answer: 0,
              explication: "Dernier paragraphe."
            },
            {
              q: "Quelle est la tonalité de la conclusion ?",
              options: ["Pessimiste", "Ouverte : le luxe comme lieu de dialogue", "Ironique"],
              answer: 1,
              explication: "« Un lieu de dialogue entre deux traditions de l’excellence. »"
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Entretien avec une porcelainière",
          genre: "Interview",
          transcription: "Jingdezhen, pour une porcelainière, c’est un peu La Mecque. Cela fait plus de mille ans qu’on y fabrique de la porcelaine. Ce qui m’a le plus frappée en arrivant, c’est l’organisation du travail : là-bas, chaque étape est confiée à un spécialiste. L’un tourne, un autre émaille, un autre encore peint uniquement les fleurs, et un autre les paysages. À Limoges, nous sommes plutôt polyvalents : je fais presque tout moi-même. Au début, je trouvais ça déroutant, et puis j’ai compris que cette spécialisation permettait un niveau de précision incroyable. J’ai aussi appris l’humilité. Je pensais apporter mon savoir-faire, et c’est moi qui ai tout réappris, jusqu’à la manière de tenir un pinceau. Ce que nous partageons, en revanche, c’est la même inquiétude : la transmission. Ici comme là-bas, les jeunes hésitent à se lancer dans des métiers longs à apprendre et mal payés au début. Si nous ne formons pas d’apprentis, ces gestes disparaîtront. Aujourd’hui, avec un ancien collègue de Jingdezhen, nous préparons une collection commune."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Entretien avec une porcelainière",
          duree: "40 min",
          doc: "e1",
          consigne: "Claire est porcelainière à Limoges. Elle a passé six mois en résidence à Jingdezhen, en Chine. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Pourquoi compare-t-elle Jingdezhen à « La Mecque » ?",
              options: [
                "Parce que c’est loin",
                "Parce que c’est une ville religieuse",
                "Parce que c’est un lieu de référence, presque sacré, pour la porcelaine"
              ],
              answer: 2,
              explication: "Plus de mille ans de tradition."
            },
            {
              q: "Quelle différence d’organisation a-t-elle remarquée ?",
              options: [
                "À Jingdezhen, chaque étape est confiée à un spécialiste ; à Limoges, l’artisan est plus polyvalent.",
                "À Limoges, tout est fait par des machines.",
                "Il n’y a aucune différence."
              ],
              answer: 0,
              explication: "C’est le cœur de son témoignage."
            },
            {
              q: "Qu’a-t-elle appris en Chine ?",
              options: [
                "À diriger une usine",
                "L’humilité, et même à tenir un pinceau autrement",
                "Le chinois parfaitement"
              ],
              answer: 1,
              explication: "« C’est moi qui ai tout réappris. »"
            },
            {
              q: "Quelle inquiétude partagent les deux traditions ?",
              options: [
                "La concurrence des machines",
                "Le prix de l’argile",
                "La transmission aux jeunes générations"
              ],
              answer: 2,
              explication: "Sans apprentis, les gestes disparaîtront."
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
          sousTitre: "Le vocabulaire du luxe et de l’artisanat",
          duree: "25 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            { terme: "le savoir-faire", definition: "l’habileté acquise par l’expérience dans un métier" },
            {
              terme: "un artisan",
              definition: "une personne qui exerce un métier manuel à son compte ou dans un atelier"
            },
            {
              terme: "une maison (de couture)",
              definition: "une entreprise de luxe ou de mode, souvent ancienne"
            },
            { terme: "la contrefaçon", definition: "la copie illégale d’un produit de marque" },
            { terme: "haut de gamme", definition: "de qualité et de prix supérieurs" },
            {
              terme: "un apprenti",
              definition: "une personne qui apprend un métier auprès d’un professionnel"
            },
            {
              terme: "la transmission",
              definition: "le fait de faire passer un savoir d’une génération à l’autre"
            }
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
          sousTitre: "Varier les tournures passives",
          duree: "50 min",
          regles: ["voix-passive", "nominalisation"],
          fiche: "<p>À l’écrit soutenu, on évite d’accumuler les passifs en <em>être + participe</em>. On peut utiliser : la <strong>forme pronominale</strong> à sens passif (<em>la porcelaine se fabrique ici depuis mille ans</em>), <strong>se faire / se voir + infinitif</strong> (<em>la maison s’est vu décerner un label</em>), le pronom <strong>on</strong>, ou la <strong>nominalisation</strong> (<em>la création du label en 2005</em>).</p><p class=\"ex\">Ce sac <strong>se fabrique</strong> en quinze heures. L’atelier <strong>s’est vu attribuer</strong> le label.</p>",
          consigne: "Choisis la tournure correcte.",
          phrases: [
            {
              avant: "Ces objets",
              options: ["se sont vendus par", "se vendent"],
              answer: 1,
              apres: "surtout en Asie.",
              explication: "Forme pronominale à sens passif, sans agent."
            },
            {
              avant: "L’atelier",
              options: ["s’est vu décerner", "s’est vu décerné"],
              answer: 0,
              apres: "le label en 2018.",
              explication: "Se voir + infinitif : « décerner »."
            },
            {
              avant: "Cette technique",
              options: ["est transmettée", "se transmet"],
              answer: 1,
              apres: "de maître à apprenti.",
              explication: "Le participe de transmettre est « transmis » ; la forme pronominale est plus légère."
            },
            {
              avant: "La porcelaine de Limoges",
              options: ["a été rendue possible", "a été rendu possible"],
              answer: 0,
              apres: "par la découverte du kaolin.",
              explication: "Accord avec « porcelaine », féminin."
            },
            {
              avant: "",
              options: ["Le créement", "La création"],
              answer: 1,
              apres: "du label date de 2005.",
              explication: "Créer → la création."
            },
            {
              avant: "Le jeune artisan",
              options: ["s’est fait", "s’est faite"],
              answer: 0,
              apres: "remarquer lors d’un concours.",
              explication: "Se faire + infinitif : « fait » reste invariable."
            },
            {
              avant: "Ces motifs",
              options: ["sont inspirés de", "s’inspirent"],
              answer: 1,
              apres: "de la peinture chinoise.",
              explication: "Forme pronominale active, plus élégante ici (s’inspirer de)."
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
          sousTitre: "Un article pour un magazine culturel",
          duree: "1 h 30",
          regles: ["voix-passive", "connecteurs-logiques", "nominalisation"],
          consigne: "Écris un article pour un magazine culturel francophone : « Savoir-faire français, savoir-faire chinois : un dialogue possible ? » Appuie-toi sur le texte et l’entretien, et ajoute un exemple que tu connais (une technique, un objet, un artisan).",
          min: 260,
          max: 330,
          checklist: [
            "Mon article a un titre et un chapeau (deux phrases d’introduction)",
            "J’ai présenté au moins deux savoir-faire",
            "J’ai cité l’entretien ou le texte",
            "J’ai varié les tournures passives",
            "J’ai conclu sur une idée forte"
          ],
          modele: "Porcelaine, soie, laque : quand deux excellences se rencontrent\n\nOn oppose souvent le luxe français, héritier des cours royales, à l’artisanat chinois, perçu comme anonyme et collectif. Pourtant, des deux côtés, les mêmes gestes patients se transmettent depuis des siècles.\n\nL’histoire commence par une admiration à sens unique. Pendant longtemps, la porcelaine de Chine s’est vendue à prix d’or en Europe, où l’on cherchait en vain à en percer le secret. Il a fallu attendre la découverte du kaolin près de Limoges, au XVIIIe siècle, pour que la France produise sa propre porcelaine dure.\n\nAujourd’hui, l’échange s’est rééquilibré. Claire, porcelainière à Limoges, a passé six mois à Jingdezhen. Elle y a découvert une organisation où chaque étape est confiée à un spécialiste, quand elle-même réalise presque tout seule. « Je pensais apporter mon savoir-faire, et c’est moi qui ai tout réappris », confie-t-elle.\n\nLa laque offre un autre exemple. Cette technique, née en Asie il y a des millénaires, a fasciné les décorateurs parisiens des années 1920, qui l’ont adaptée au mobilier Art déco. Le savoir-faire ne s’est pas contenté de voyager : il s’est transformé.\n\nLes deux traditions partagent enfin une inquiétude : la disparition des apprentis. Sans transmission, aucun label ni aucun prestige ne sauveront ces métiers.\n\nPlus qu’une rivalité, c’est donc une conversation qui s’engage entre deux excellences, et elle ne fait que commencer."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un objet d’artisanat",
          duree: "35 min",
          consigne: "Présente un objet artisanal de ta région ou de ta famille comme le ferait une guide de musée : son origine, sa fabrication, sa valeur symbolique, et ce qu’il pourrait dire à un public français.",
          preparation: [
            "L’objet que je vous présente…",
            "Il est fabriqué…",
            "Ce qui fait sa valeur, c’est…",
            "Pour un public français, il pourrait évoquer…",
            "Il se transmet…"
          ],
          dureeCible: "2 à 3 minutes",
          modele: "L’objet que je vous présente est un éventail en soie brodée de Suzhou, qui appartenait à ma grand-mère. La broderie de Suzhou est l’une des quatre grandes broderies chinoises, et elle se pratique depuis plus de deux mille ans. Elle est réalisée avec des fils de soie si fins qu’une brodeuse peut séparer un seul fil en plusieurs brins. Sur cet éventail, un chat est brodé des deux côtés, avec deux expressions différentes : c’est ce qu’on appelle la broderie double face. Ce qui fait sa valeur, c’est le temps : une pièce comme celle-ci peut demander plusieurs mois de travail. Pour un public français, elle pourrait évoquer la haute couture, et ses ateliers de broderie où l’on travaille aussi à la main pendant des centaines d’heures. Dans ma famille, cet éventail se transmet de mère en fille : un jour, il sera à moi.",
          checklist: [
            "J’ai présenté l’origine et la fabrication",
            "J’ai expliqué la valeur de l’objet",
            "J’ai fait un lien avec la culture française",
            "J’ai utilisé au moins une forme pronominale à sens passif"
          ]
        }
      ]
    }
  }
});
