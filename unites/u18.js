/* Unité 18 : Le thé, de la Chine à la France (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 18,
  niveau: "b2",
  theme: "Gastronomie, mode",
  chine: true,
  titre: "Le thé, de la Chine à la France",
  objectif: "Retracer le voyage d’un produit et décrire une dégustation.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Le long voyage du thé",
          format: "long",
          texte: [
            "Selon la légende chinoise, le thé aurait été découvert il y a près de cinq mille ans par l’empereur Shennong, quand quelques feuilles seraient tombées dans l’eau qu’il faisait bouillir. Ce qui est certain, c’est qu’en Chine, le thé est consommé depuis l’Antiquité et qu’il est devenu, sous la dynastie Tang, un véritable art de vivre. Au VIIIe siècle, Lu Yu lui consacre un traité entier, le Classique du thé.",
            "L’Europe ne le découvre qu’au début du XVIIe siècle, grâce aux marchands néerlandais. Le thé arrive en France vers le milieu de ce siècle. D’abord vendu en pharmacie comme un remède, il devient vite une boisson à la mode dans l’aristocratie. On raconte que Louis XIV en buvait pour soulager sa goutte, et Madame de Sévigné évoque dans ses lettres des amies qui en boivent plusieurs tasses par jour.",
            "Le mot lui-même raconte ce voyage. Les langues qui ont reçu le thé par la mer, grâce aux marchands passés par les ports du Fujian, l’appellent souvent d’un nom proche de « te » : thé en français, tea en anglais. Celles qui l’ont reçu par la terre, par les routes de la soie, ont gardé un nom proche du mandarin « chá » : chai en russe, çay en turc, chá en portugais, les Portugais ayant commercé par Macao.",
            "Aujourd’hui, la France boit beaucoup moins de thé que le Royaume-Uni, mais les salons de thé parisiens attirent une clientèle fidèle. Certaines maisons, fondées au XIXe siècle, proposent des centaines de variétés. Et dans les boutiques, on voit de plus en plus de thés chinois d’origine précise : longjing du Zhejiang, pu’er du Yunnan, oolong du Fujian."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Le long voyage du thé",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Pourquoi le texte utilise-t-il le conditionnel « aurait été découvert » ?",
              options: [
                "Parce qu’il s’agit d’une légende non vérifiée",
                "Parce que l’information est certaine",
                "Parce qu’on parle du futur"
              ],
              answer: 0,
              explication: "Le conditionnel signale une information non confirmée."
            },
            {
              q: "Qui a fait connaître le thé en Europe ?",
              options: ["Des moines français", "Des marchands néerlandais", "Des explorateurs anglais"],
              answer: 1,
              explication: "Au début du XVIIe siècle."
            },
            {
              q: "Comment le thé était-il d’abord vendu en France ?",
              options: ["En épicerie fine", "Dans les cafés", "En pharmacie, comme un remède"],
              answer: 2,
              explication: "Il était considéré comme un médicament."
            },
            {
              q: "Pourquoi dit-on « thé » en français mais « chá » en portugais ?",
              options: [
                "À cause des routes par lesquelles le thé est arrivé",
                "Parce que les Portugais ont inventé le thé",
                "Par hasard"
              ],
              answer: 0,
              explication: "Par la mer depuis le Fujian (te) ou par la terre et Macao (chá)."
            },
            {
              q: "Le pu’er vient…",
              options: ["du Fujian", "du Yunnan", "du Zhejiang"],
              answer: 1,
              explication: "Dernier paragraphe."
            },
            {
              q: "« Une clientèle fidèle » est une clientèle…",
              options: ["étrangère", "très riche", "qui revient régulièrement"],
              answer: 2,
              explication: "Fidèle : qui reste attaché, qui revient."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une dégustation dans un salon de thé",
          genre: "Dialogue (dégustation)",
          transcription: "Voici un oolong de Taïwan, un thé semi-oxydé, c’est-à-dire entre le thé vert et le thé noir. Regardez d’abord les feuilles sèches : elles sont roulées en petites billes. Je verse de l’eau à quatre-vingt-dix degrés, pas bouillante, sinon on brûle les feuilles et le thé devient amer. On laisse infuser une minute seulement. Voilà. Sentez d’abord : vous percevez ces notes de fleurs blanches, presque de lilas ? Maintenant, goûtez par petites gorgées, en laissant le thé envahir la bouche. C’est doux, rond, avec une légère touche de miel à la fin. La particularité de ce thé, c’est qu’on peut le faire infuser plusieurs fois. La deuxième infusion sera plus ouverte, plus parfumée, et la cinquième sera encore agréable. En Chine et à Taïwan, on dit d’ailleurs que la première infusion est pour les ennemis, la deuxième pour les amis !"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une dégustation dans un salon de thé",
          duree: "30 min",
          doc: "e1",
          consigne: "Dans un salon de thé à Paris, une spécialiste fait déguster un thé à deux clients. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Qu’est-ce qu’un thé semi-oxydé ?",
              options: ["Un thé entre le vert et le noir", "Un thé fumé", "Un thé aux fleurs"],
              answer: 0,
              explication: "Elle le définit tout de suite."
            },
            {
              q: "Pourquoi ne pas utiliser d’eau bouillante ?",
              options: [
                "Le thé refroidirait trop vite.",
                "Le thé deviendrait amer.",
                "Les feuilles ne s’ouvriraient pas."
              ],
              answer: 1,
              explication: "On « brûle les feuilles »."
            },
            {
              q: "Quelles notes la spécialiste décrit-elle ?",
              options: ["Fruits rouges et chocolat", "Bois et fumée", "Fleurs blanches et miel"],
              answer: 2,
              explication: "Lilas, fleurs blanches, touche de miel."
            },
            {
              q: "Que signifie le dicton final ?",
              options: [
                "La première infusion est souvent la moins bonne.",
                "Il ne faut jamais partager son thé.",
                "Il faut boire le thé très vite."
              ],
              answer: 0,
              explication: "La deuxième infusion est meilleure : on la garde pour les amis."
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
          sousTitre: "Décrire une dégustation",
          duree: "20 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            {
              terme: "infuser",
              definition: "laisser des feuilles dans un liquide chaud pour en extraire le goût"
            },
            { terme: "une théière", definition: "le récipient dans lequel on prépare le thé" },
            { terme: "corsé", definition: "qui a un goût fort et prononcé" },
            { terme: "l’arôme", definition: "l’odeur agréable d’un aliment ou d’une boisson" },
            { terme: "amer", definition: "qui a un goût âpre, comme le café sans sucre" },
            { terme: "la gorgée", definition: "la quantité de liquide qu’on avale en une fois" },
            { terme: "déguster", definition: "goûter avec attention pour apprécier" }
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
          sousTitre: "Le gérondif et le participe présent",
          duree: "45 min",
          regles: ["gerondif-participe"],
          fiche: "<p>Le <strong>gérondif</strong> (<em>en + -ant</em>) exprime une action simultanée, la manière ou la condition ; il a le même sujet que le verbe principal. Le <strong>participe présent</strong> (sans <em>en</em>) remplace une relative avec <em>qui</em> ou exprime une cause, surtout à l’écrit.</p><p class=\"ex\">Elle lit <strong>en buvant</strong> son thé. Les marchands <strong>venant</strong> du Fujian (= qui venaient) l’ont apporté.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "On apprécie mieux le thé",
              options: ["en le buvant", "le buvant"],
              answer: 0,
              apres: "lentement.",
              explication: "La manière : gérondif."
            },
            {
              avant: "Les marchands",
              options: ["en venant", "venant"],
              answer: 1,
              apres: "de Chine apportaient aussi de la porcelaine.",
              explication: "= qui venaient : participe présent."
            },
            {
              avant: "",
              options: ["En versant", "Versant"],
              answer: 0,
              apres: "l’eau trop chaude, tu vas brûler les feuilles.",
              explication: "Une condition : gérondif."
            },
            {
              avant: "",
              options: ["En étant", "Étant"],
              answer: 1,
              apres: "fragile, cette théière doit être lavée à la main.",
              explication: "La cause, à l’écrit : participe présent."
            },
            {
              avant: "Elle a découvert ce thé",
              options: ["en voyageant", "voyagé"],
              answer: 0,
              apres: "au Yunnan.",
              explication: "Action simultanée : gérondif."
            },
            {
              avant: "Les feuilles",
              options: ["en ayant infusé", "ayant infusé"],
              answer: 1,
              apres: "trop longtemps donnent un goût amer.",
              explication: "Participe composé, antérieur : = qui ont infusé."
            },
            {
              avant: "Il s’est brûlé",
              options: ["en goûtant", "goûtant"],
              answer: 0,
              apres: "le thé trop tôt.",
              explication: "Même sujet, action simultanée : gérondif."
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
          sousTitre: "Décrire un rituel du thé",
          duree: "1 h 15",
          regles: ["gerondif-participe", "pronoms-relatifs"],
          consigne: "Pour un magazine français, décris une façon de préparer et de boire le thé dans ta région ou ta famille : les objets, les gestes, le moment de la journée, ce que ce rituel représente pour toi.",
          min: 180,
          max: 240,
          checklist: [
            "J’ai décrit les objets avec précision",
            "J’ai décrit les gestes dans l’ordre",
            "J’ai utilisé au moins deux gérondifs",
            "J’ai employé au moins cinq mots du vocabulaire de la dégustation",
            "J’ai dit ce que ce rituel représente pour moi"
          ],
          modele: "Chez mes grands-parents, à Chaozhou, le thé n’est pas une boisson : c’est une façon d’accueillir. Dès qu’un invité entre, mon grand-père sort son plateau en bois, sur lequel il pose une minuscule théière en terre cuite et des tasses pas plus grandes qu’une noix.\n\nIl commence toujours par réchauffer les objets en les arrosant d’eau bouillante. Puis il remplit la théière de feuilles d’oolong, presque jusqu’au bord. La première infusion, très courte, sert seulement à « réveiller » les feuilles : il la jette en souriant. Ensuite, il verse le thé dans les tasses en passant rapidement de l’une à l’autre, pour que chacun ait le même goût.\n\nOn boit en trois petites gorgées, en sentant l’arôme monter, puis on repose la tasse, qu’il remplit aussitôt. Le thé est corsé, un peu amer au début, puis étonnamment doux.\n\nPour moi, ce rituel représente le temps qu’on offre aux autres. Depuis que je vis en France, je le refais avec mes amis : c’est ma manière de les inviter chez moi, et un peu chez mes grands-parents."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Faire découvrir un thé",
          duree: "30 min",
          consigne: "Tu fais découvrir un thé de ton choix à des amis français. Présente son origine, explique comment le préparer et décris son goût, comme la spécialiste de l’enregistrement.",
          preparation: [
            "Je vais vous faire goûter…",
            "Il vient de…",
            "On le prépare en…",
            "Au nez, on sent…",
            "En bouche, il est…"
          ],
          dureeCible: "1 min 30 à 2 minutes",
          modele: "Je vais vous faire goûter un longjing, qu’on appelle aussi « puits du dragon ». Il vient de la région de Hangzhou, près du lac de l’Ouest. C’est un thé vert, donc on le prépare avec une eau qui n’est pas trop chaude, environ quatre-vingts degrés. On le laisse infuser deux minutes, en regardant les feuilles plates s’ouvrir doucement dans le verre. Au nez, on sent une odeur de châtaigne grillée et d’herbe fraîche. En bouche, il est très doux, sans amertume, avec une fin légèrement sucrée. Chez moi, on le boit au printemps, quand les nouvelles feuilles arrivent.",
          checklist: [
            "J’ai présenté l’origine du thé",
            "J’ai expliqué la préparation",
            "J’ai décrit l’odeur et le goût",
            "J’ai utilisé au moins un gérondif"
          ]
        }
      ]
    }
  }
});
