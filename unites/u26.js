/* Unité 26 : Lire un texte littéraire (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 26,
  niveau: "c1",
  theme: "Culture, littérature et francophonie",
  titre: "Lire un texte littéraire",
  objectif: "Comprendre un extrait classique et reconnaître le passé simple.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Maupassant, Le Horla (début, 1887)",
          format: "long",
          texte: [
            "Présentation. Le Horla est une nouvelle de Guy de Maupassant écrite sous la forme d’un journal intime. Le narrateur, un homme aisé qui vit au bord de la Seine, près de Rouen, va peu à peu se croire habité par une présence invisible. Voici la toute première page, avant que l’inquiétude n’apparaisse.",
            "« 8 mai. – Quelle journée admirable ! J’ai passé toute la matinée étendu sur l’herbe, devant ma maison, sous l’énorme platane qui la couvre, l’abrite et l’ombrage tout entière. J’aime ce pays, et j’aime y vivre parce que j’y ai mes racines, ces profondes et délicates racines, qui attachent un homme à la terre où sont nés et morts ses aïeux, qui l’attachent à ce qu’on pense et à ce qu’on mange, aux usages comme aux nourritures, aux locutions locales, aux intonations des paysans, aux odeurs du sol, des villages et de l’air lui-même. »",
            "« J’aime ma maison où j’ai grandi. De mes fenêtres, je vois la Seine qui coule, le long de mon jardin, derrière la route, presque chez moi, la grande et large Seine, qui va de Rouen au Havre, couverte de bateaux qui passent. »",
            "Ce début paisible est un piège savamment tendu. Quelques lignes plus loin, le narrateur salue un grand trois-mâts brésilien qui remonte le fleuve. Le lecteur n’y prête guère attention ; il comprendra bien plus tard que c’est peut-être avec ce navire que « l’être invisible » est arrivé."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Maupassant, Le Horla (début, 1887)",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quelle est la forme du texte ?",
              options: ["Une lettre", "Un dialogue de théâtre", "Un journal intime"],
              answer: 2,
              explication: "La date « 8 mai » et le « je » l’indiquent."
            },
            {
              q: "Quelle impression domine dans ces premières lignes ?",
              options: ["La sérénité et l’attachement au lieu", "L’angoisse", "La colère"],
              answer: 0,
              explication: "« Quelle journée admirable ! », « j’aime » répété."
            },
            {
              q: "Dans la première citation, la métaphore des « racines » exprime…",
              options: [
                "un intérêt pour le jardinage",
                "le lien profond entre l’homme et sa terre natale",
                "un sentiment d’étouffement"
              ],
              answer: 1,
              explication: "Les racines attachent l’homme à la terre de ses ancêtres."
            },
            {
              q: "« Qui l’attachent à ce qu’on pense et à ce qu’on mange, aux usages comme aux nourritures… » : quel procédé reconnais-tu ?",
              options: ["Une antithèse", "Une litote", "Une énumération"],
              answer: 2,
              explication: "Une longue liste de compléments, qui élargit le sens du mot « racines »."
            },
            {
              q: "Le verbe triple « la couvre, l’abrite et l’ombrage » crée un effet de…",
              options: ["protection et d’enveloppement", "danger", "vitesse"],
              answer: 0,
              explication: "Le platane semble protéger la maison : un effet d’autant plus ironique pour la suite."
            },
            {
              q: "Pourquoi peut-on parler d’un « piège » ?",
              options: [
                "Parce que le narrateur ment",
                "Parce que le calme du début rend l’irruption de l’étrange plus inquiétante",
                "Parce que le texte n’a pas de fin"
              ],
              answer: 1,
              explication: "Le bateau brésilien, détail anodin, prendra plus tard tout son sens."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une explication de texte en classe",
          genre: "Cours (explication de texte)",
          transcription: "Regardez bien la construction de la première phrase longue. Maupassant part d’un sentiment simple, « j’aime ce pays », puis il élargit progressivement : la terre, les ancêtres, la pensée, la nourriture, la langue, les odeurs, et finalement « l’air lui-même ». C’est une gradation : on va du plus concret au plus immatériel. Et c’est loin d’être innocent. L’air, l’invisible, c’est précisément ce qui va devenir menaçant dans la suite de la nouvelle. Autre élément : le rythme. Les phrases sont amples, régulières, presque musicales, comme le cours de la Seine. Le narrateur est encore maître de son discours. Quand l’angoisse apparaîtra, vous verrez les phrases se raccourcir, se briser, se remplir de points d’exclamation et de points de suspension. Le style épouse l’état psychologique du personnage. Retenez donc ceci pour vos commentaires : on n’analyse jamais un procédé pour lui-même, mais pour l’effet qu’il produit et le sens qu’il construit."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une explication de texte en classe",
          duree: "40 min",
          doc: "e1",
          consigne: "Une professeure de lettres analyse le début du Horla avec ses étudiants. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Quel procédé la professeure identifie-t-elle dans la longue phrase ?",
              options: ["Une répétition sonore", "Une comparaison", "Une gradation du concret vers l’immatériel"],
              answer: 2,
              explication: "De la terre jusqu’à « l’air lui-même »."
            },
            {
              q: "Pourquoi la mention de « l’air » n’est-elle pas innocente ?",
              options: [
                "Parce que l’invisible deviendra menaçant",
                "Parce que l’air est pollué",
                "Parce que Maupassant aimait la météo"
              ],
              answer: 0,
              explication: "Elle annonce le thème de la nouvelle."
            },
            {
              q: "Comment le style évoluera-t-il quand l’angoisse apparaîtra ?",
              options: [
                "Les phrases deviendront plus longues.",
                "Les phrases deviendront plus courtes et brisées.",
                "Le texte deviendra un poème."
              ],
              answer: 1,
              explication: "Le style « épouse l’état psychologique »."
            },
            {
              q: "Quel conseil de méthode donne-t-elle ?",
              options: [
                "Relever le plus de procédés possible",
                "Apprendre le texte par cœur",
                "Toujours relier un procédé à son effet et à son sens"
              ],
              answer: 2,
              explication: "Dernière phrase."
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
          sousTitre: "Les figures de style",
          duree: "25 min",
          consigne: "Associe chaque figure à sa définition.",
          items: [
            {
              terme: "la métaphore",
              definition: "une image qui rapproche deux réalités sans mot de comparaison"
            },
            {
              terme: "la comparaison",
              definition: "un rapprochement explicite, avec « comme », « tel », « pareil à »…"
            },
            { terme: "la gradation", definition: "une suite de termes d’intensité ou de portée croissante" },
            { terme: "l’énumération", definition: "une liste de termes qui se suivent" },
            {
              terme: "la personnification",
              definition: "le fait d’attribuer des traits humains à une chose ou un animal"
            },
            { terme: "l’anaphore", definition: "la répétition d’un même mot en début de phrase ou de vers" },
            { terme: "la litote", definition: "dire moins pour suggérer plus (« ce n’est pas mal »)" }
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
          sousTitre: "Passé simple et imparfait dans le récit",
          duree: "50 min",
          regles: ["passe-simple", "passe-compose-imparfait"],
          fiche: "<p>Dans un récit littéraire, le <strong>passé simple</strong> marque les actions de premier plan, qui font avancer l’histoire. L’<strong>imparfait</strong> peint l’arrière-plan : décor, description, état d’âme, habitude. Une action en cours à l’imparfait est souvent interrompue par une action au passé simple.</p><p class=\"ex\">Il <strong>contemplait</strong> la Seine quand un grand navire <strong>apparut</strong>.</p>",
          consigne: "Choisis le temps qui convient.",
          phrases: [
            {
              avant: "Le soleil",
              options: ["brillait", "brilla"],
              answer: 0,
              apres: "sur la Seine, et le jardin semblait immobile.",
              explication: "Description du décor : imparfait."
            },
            {
              avant: "Soudain, un trois-mâts",
              options: ["apparaissait", "apparut"],
              answer: 1,
              apres: "au tournant du fleuve.",
              explication: "« Soudain » : événement de premier plan, passé simple."
            },
            {
              avant: "Chaque matin, il",
              options: ["s’asseyait", "s’assit"],
              answer: 0,
              apres: "sous le platane.",
              explication: "Habitude : imparfait."
            },
            {
              avant: "Ce soir-là, il",
              options: ["fermait", "ferma"],
              answer: 1,
              apres: "toutes les portes à clé avant de se coucher.",
              explication: "Action ponctuelle et datée : passé simple."
            },
            {
              avant: "Il",
              options: ["eut", "avait"],
              answer: 0,
              apres: "brusquement l’impression qu’on le regardait.",
              explication: "« Brusquement » : passé simple."
            },
            {
              avant: "La nuit",
              options: ["tomba", "tombait"],
              answer: 1,
              apres: "lentement, et l’angoisse grandissait.",
              explication: "Évolution progressive, en arrière-plan : imparfait."
            },
            {
              avant: "Il se leva, alluma la bougie et",
              options: ["regarda", "regardait"],
              answer: 0,
              apres: "autour de lui.",
              explication: "Succession d’actions : passé simple."
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
          sousTitre: "Commenter un paragraphe",
          duree: "1 h 30",
          regles: ["connecteurs-logiques", "nominalisation"],
          consigne: "Rédige un paragraphe de commentaire sur la première citation du Horla. Montre comment Maupassant exprime l’attachement du narrateur à sa terre, en analysant au moins trois procédés et en citant le texte. Termine par une phrase qui suggère ce que ce passage prépare.",
          min: 200,
          max: 260,
          checklist: [
            "Mon paragraphe commence par une idée directrice",
            "J’ai analysé au moins trois procédés différents",
            "J’ai cité le texte entre guillemets pour chaque procédé",
            "J’ai expliqué l’effet de chaque procédé, pas seulement son nom",
            "Ma dernière phrase ouvre sur la suite de la nouvelle"
          ],
          modele: "Dès les premières lignes, Maupassant fait du narrateur un homme profondément enraciné, en harmonie avec le lieu où il vit. L’exclamation initiale, « Quelle journée admirable ! », installe d’emblée un climat de plénitude, renforcé par l’attitude du personnage, « étendu sur l’herbe », dans un abandon confiant. Le platane qui « couvre », « abrite » et « ombrage » la maison forme une gradation protectrice : la nature semble veiller sur l’homme. Mais c’est surtout la métaphore des « racines » qui traduit cet attachement. Qualifiées de « profondes et délicates », elles relient le narrateur à la fois à ses « aïeux » et à toute une culture, comme le montre la longue énumération qui suit : « ce qu’on pense », « ce qu’on mange », « les locutions locales », « les intonations des paysans ». Cette énumération progresse du plus concret vers le plus impalpable, jusqu’à « l’air lui-même ». Le rythme ample et régulier de la phrase, scandé par la reprise de « qui attachent », mime d’ailleurs cette stabilité. Pourtant, en achevant la phrase sur l’élément le plus invisible, Maupassant glisse discrètement le thème qui va bientôt menacer ce bonheur."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Lire et commenter à voix haute",
          duree: "40 min",
          consigne: "Lis d’abord à voix haute la première citation du Horla, en soignant le rythme et les liaisons. Puis présente oralement, en deux minutes, ce que ce passage exprime et comment.",
          preparation: [
            "Ce passage ouvre la nouvelle…",
            "Ce qui frappe d’abord, c’est…",
            "On remarque notamment…",
            "Ce procédé permet de…",
            "Ainsi, le début paisible prépare…"
          ],
          dureeCible: "2 à 3 minutes",
          modele: "Ce passage ouvre la nouvelle Le Horla, écrite sous forme de journal intime. Ce qui frappe d’abord, c’est le bonheur du narrateur : la journée est « admirable », il est allongé dans l’herbe, à l’ombre d’un grand platane qui semble protéger sa maison. On remarque notamment la métaphore des racines, qui exprime son attachement à sa région et à ses ancêtres. Elle est développée par une longue énumération, qui va des choses les plus concrètes, comme la nourriture, jusqu’aux plus invisibles, comme l’air. Ce procédé permet de montrer que ce lien touche tous les aspects de la vie. Ainsi, le début paisible prépare un contraste très fort : c’est justement par l’invisible que l’angoisse va entrer dans la nouvelle.",
          checklist: [
            "Ma lecture était fluide, avec des pauses aux virgules",
            "J’ai respecté les liaisons obligatoires",
            "J’ai nommé et expliqué au moins deux procédés",
            "J’ai relié le passage à la suite de la nouvelle"
          ]
        }
      ]
    }
  }
});
