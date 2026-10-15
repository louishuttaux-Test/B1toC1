/* Unité 1 : Raconter un souvenir (B1) — unité pilote, enrichie selon CHARTE.md.
   Les exercices d’origine gardent leurs ids (a0 … a5) : la progression déjà enregistrée est conservée.
   Nouveaux ids : lec, eco, voc, gra, ecr, ora + numéro. Ne jamais renommer un id existant. */
ajouterUnite({
  id: 1,
  niveau: "b1",
  theme: "Vie quotidienne",
  titre: "Raconter un souvenir",
  objectif: "Raconter un événement passé en alternant récit et description.",
  enrichie: true,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Le jour où j’ai raté mon train",
          genre: "Récit personnel",
          format: "long",
          texte: [
            "C’était un vendredi de décembre, il y a maintenant cinq ans. Je vivais à Lyon depuis seulement trois mois et je ne connaissais pas encore très bien la ville. Ce soir-là, je devais prendre le train de 18 h 42 pour rejoindre des amis à Marseille. Il faisait froid, il pleuvait, et la gare de la Part-Dieu était pleine de voyageurs pressés.",
            "J’étais pourtant partie en avance. Mais dans le métro, je me suis rendu compte que j’avais oublié mon billet sur la table de la cuisine. J’ai fait demi-tour en courant, je suis remontée chez moi, puis je suis repartie aussi vite que possible. Quand je suis enfin arrivée sur le quai, le train venait de partir. J’avais envie de pleurer.",
            "C’est alors qu’une dame âgée, qui attendait sur un banc, m’a demandé si tout allait bien. Je lui ai tout raconté, un peu gênée. Elle m’a souri et m’a expliqué qu’il y avait un autre train une heure plus tard et qu’avec mon billet, je pourrais sans doute le prendre en payant un petit supplément. Pendant que nous attendions, elle m’a parlé de sa jeunesse : elle aussi était arrivée à Lyon seule, à vingt ans, sans connaître personne.",
            "Finalement, je suis arrivée à Marseille avec une heure de retard, mais je n’ai jamais oublié cette rencontre. Aujourd’hui encore, quand je rate quelque chose, je repense à cette dame et je me dis qu’un contretemps peut parfois devenir un beau souvenir."
          ]
        },
        d2: {
          titre: "La madeleine de Proust, ou le pouvoir des odeurs",
          genre: "Article de magazine",
          format: "long",
          source: "Citation : Marcel Proust, Du côté de chez Swann, 1913",
          aVerifier: "La citation de Proust (paragraphe 2) est reproduite de mémoire : la comparer mot pour mot avec le texte original (domaine public, disponible sur Wikisource).",
          texte: [
            "« Ça sent comme chez ma grand-mère ! » Qui n’a jamais prononcé une phrase de ce genre ? Une odeur de gâteau, de savon ou de feu de bois suffit parfois à nous ramener des années en arrière, sans que nous l’ayons décidé. En France, on appelle ce phénomène une « madeleine de Proust ».",
            "L’expression vient d’un célèbre passage de <em>Du côté de chez Swann</em>, le premier volume d’<em>À la recherche du temps perdu</em>, publié par Marcel Proust en 1913. Un jour d’hiver, le narrateur rentre chez lui ; il a froid et il est triste. Sa mère lui sert du thé et un petit gâteau en forme de coquillage, une madeleine. Il trempe un morceau de gâteau dans son thé et, au moment où il le goûte, il ressent un bonheur intense qu’il ne comprend pas. Puis il se souvient : « Et tout d’un coup le souvenir m’est apparu. Ce goût c’était celui du petit morceau de madeleine que le dimanche matin à Combray […] ma tante Léonie m’offrait après l’avoir trempé dans son infusion de thé ou de tilleul. » Toute son enfance revient alors, avec les rues, les maisons et les gens du village.",
            "Ce que Proust décrit, c’est une mémoire involontaire : le souvenir n’arrive pas parce qu’on le cherche, mais parce qu’une sensation le réveille. Le goût et l’odeur jouent ici un rôle particulier. Les chercheurs qui étudient la mémoire s’intéressent d’ailleurs depuis longtemps au lien entre les odeurs et les émotions du passé, même si tout n’est pas encore expliqué.",
            "Aujourd’hui, l’expression est entrée dans la langue de tous les jours. On l’utilise pour parler d’un plat, d’une musique ou d’un objet qui fait revivre un moment de sa vie : « Les crêpes de ma grand-mère, c’est ma madeleine de Proust. » Chacun a la sienne, et elle dit souvent quelque chose de son histoire. Pour une étudiante chinoise installée à Lyon, ce sera peut-être l’odeur des raviolis préparés en famille pour le Nouvel An ; pour un Breton qui vit à Paris, celle du beurre salé.",
            "Ces souvenirs ne sont pas toujours exacts. Avec le temps, nous les embellissons, nous oublions certains détails et nous en inventons d’autres. Mais leur valeur n’est peut-être pas là. Une madeleine de Proust ne nous dit pas exactement ce qui s’est passé : elle nous rappelle ce que nous avons ressenti."
          ]
        }
      },
      exercices: [
        {
          id: "lec1",
          type: "qcm",
          titre: "Compréhension globale",
          sousTitre: "Le jour où j’ai raté mon train : l’essentiel",
          etape: "comprendre",
          duree: "10 min",
          doc: "d1",
          consigne: "Lis le texte une première fois, sans t’arrêter sur les mots inconnus. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "De quel type de texte s’agit-il ?",
              options: [
                "Un récit personnel au passé",
                "Un article d’information sur les trains",
                "Une lettre de réclamation"
              ],
              answer: 0,
              explication: "L’auteure raconte, à la première personne (« je »), un événement de sa vie."
            },
            {
              q: "Quel est le sujet principal du texte ?",
              options: [
                "Un voyage réussi à Marseille",
                "Un imprévu qui devient un beau souvenir",
                "Les problèmes de la gare de la Part-Dieu"
              ],
              answer: 1,
              explication: "La dernière phrase le résume : « un contretemps peut parfois devenir un beau souvenir »."
            },
            {
              q: "Que ressent l’auteure quand elle voit que le train est parti ?",
              options: ["De la colère contre la SNCF", "Du soulagement", "De la tristesse et de la déception"],
              answer: 2,
              explication: "« J’avais envie de pleurer. »"
            },
            {
              q: "Qu’est-ce qui change le cours de la soirée ?",
              options: ["Une rencontre sur le quai", "Un appel de ses amis", "Une grève des trains"],
              answer: 0,
              explication: "Une dame âgée lui parle, l’aide et lui raconte sa jeunesse."
            },
            {
              q: "Comment l’auteure voit-elle cet événement aujourd’hui ?",
              options: ["Elle le regrette encore.", "Elle l’a presque oublié.", "Elle en garde un souvenir positif."],
              answer: 2,
              explication: "« Je n’ai jamais oublié cette rencontre » : le souvenir est devenu beau."
            }
          ]
        },
        {
          id: "a0",
          type: "qcm",
          titre: "Questions détaillées",
          sousTitre: "Le jour où j’ai raté mon train : les détails",
          duree: "15 min",
          doc: "d1",
          consigne: "Relis le texte. Cette fois, cherche les informations précises pour répondre.",
          questions: [
            {
              q: "Depuis combien de temps l’auteure vivait-elle à Lyon ?",
              options: ["Cinq ans", "Trois mois", "Un an"],
              answer: 1,
              explication: "« Je vivais à Lyon depuis seulement trois mois. » Les cinq ans, c’est le temps écoulé depuis l’histoire."
            },
            {
              q: "Pourquoi a-t-elle raté son train ?",
              options: [
                "Elle s’est trompée de gare.",
                "Le métro était en panne.",
                "Elle a dû retourner chez elle chercher son billet."
              ],
              answer: 2,
              explication: "Elle avait oublié son billet sur la table de la cuisine."
            },
            {
              q: "Qui l’a aidée sur le quai ?",
              options: ["Une dame âgée", "Un employé de la gare", "Une amie"],
              answer: 0,
              explication: "Une dame âgée qui attendait sur un banc."
            },
            {
              q: "Quel point commun la dame a-t-elle avec l’auteure ?",
              options: [
                "Elle allait aussi à Marseille.",
                "Elle était aussi arrivée seule à Lyon, jeune.",
                "Elle avait aussi raté son train."
              ],
              answer: 1,
              explication: "« Elle aussi était arrivée à Lyon seule, à vingt ans. »"
            },
            {
              q: "Dans « il pleuvait, et la gare était pleine », l’imparfait sert à :",
              options: ["parler du futur", "raconter une action soudaine", "décrire le décor de l’histoire"],
              answer: 2,
              explication: "L’imparfait pose le décor ; le passé composé raconte les événements. C’est le sujet de l’activité de grammaire."
            },
            {
              q: "Que signifie « un contretemps » ?",
              options: ["Un événement imprévu qui dérange", "Une dispute", "Un moment de bonheur"],
              answer: 0,
              explication: "Un contretemps est un imprévu qui empêche de faire ce qui était prévu."
            }
          ],
          texte: [
            "C’était un vendredi de décembre, il y a maintenant cinq ans. Je vivais à Lyon depuis seulement trois mois et je ne connaissais pas encore très bien la ville. Ce soir-là, je devais prendre le train de 18 h 42 pour rejoindre des amis à Marseille. Il faisait froid, il pleuvait, et la gare de la Part-Dieu était pleine de voyageurs pressés.",
            "J’étais pourtant partie en avance. Mais dans le métro, je me suis rendu compte que j’avais oublié mon billet sur la table de la cuisine. J’ai fait demi-tour en courant, je suis remontée chez moi, puis je suis repartie aussi vite que possible. Quand je suis enfin arrivée sur le quai, le train venait de partir. J’avais envie de pleurer.",
            "C’est alors qu’une dame âgée, qui attendait sur un banc, m’a demandé si tout allait bien. Je lui ai tout raconté, un peu gênée. Elle m’a souri et m’a expliqué qu’il y avait un autre train une heure plus tard et qu’avec mon billet, je pourrais sans doute le prendre en payant un petit supplément. Pendant que nous attendions, elle m’a parlé de sa jeunesse : elle aussi était arrivée à Lyon seule, à vingt ans, sans connaître personne.",
            "Finalement, je suis arrivée à Marseille avec une heure de retard, mais je n’ai jamais oublié cette rencontre. Aujourd’hui encore, quand je rate quelque chose, je repense à cette dame et je me dis qu’un contretemps peut parfois devenir un beau souvenir."
          ],
          etape: "reperer"
        },
        {
          id: "lec2",
          type: "qcm",
          titre: "Connecteurs et structure",
          sousTitre: "Comment le récit est construit",
          etape: "reperer",
          duree: "15 min",
          doc: "d1",
          regles: ["connecteurs-logiques"],
          consigne: "Observe les étapes de l’histoire et les mots qui les relient. Les numéros renvoient aux paragraphes.",
          questions: [
            {
              q: "Le paragraphe 1 sert surtout à :",
              options: [
                "raconter le problème",
                "poser le décor : le moment, le lieu, la situation",
                "tirer une leçon"
              ],
              answer: 1,
              explication: "Date, ville, météo, foule : c’est la situation de départ, à l’imparfait."
            },
            {
              q: "Quel paragraphe raconte le problème, l’élément qui perturbe la situation ?",
              options: ["Le paragraphe 1", "Le paragraphe 4", "Le paragraphe 2"],
              answer: 2,
              explication: "Le billet oublié, le demi-tour, le train manqué : tout se joue au paragraphe 2."
            },
            {
              q: "« J’étais pourtant partie en avance. » Ici, « pourtant » signale :",
              options: ["un fait qui va contre ce qu’on attend", "une conséquence", "une cause"],
              answer: 0,
              explication: "On s’attendrait à ce qu’elle arrive à l’heure, puisqu’elle était partie en avance : « pourtant » introduit cette contradiction."
            },
            {
              q: "« C’est alors qu’une dame âgée… » Cette expression sert à :",
              options: [
                "donner une explication",
                "conclure le récit",
                "introduire un événement important à ce moment précis"
              ],
              answer: 2,
              explication: "« C’est alors que » = à ce moment-là, quelque chose de nouveau se produit."
            },
            {
              q: "« Finalement, je suis arrivée à Marseille avec une heure de retard. » « Finalement » annonce :",
              options: ["le dénouement de l’histoire", "une hypothèse", "un retour en arrière"],
              answer: 0,
              explication: "« Finalement » introduit la fin, la façon dont la situation se termine."
            },
            {
              q: "À la fin, l’auteure passe au présent (« Aujourd’hui encore… je repense »). Pourquoi ?",
              options: [
                "Parce qu’elle raconte un autre événement",
                "Pour dire ce que ce souvenir représente pour elle maintenant",
                "Par erreur"
              ],
              answer: 1,
              explication: "Un récit de souvenir se termine souvent par un retour au présent : ce que l’événement signifie aujourd’hui."
            }
          ]
        },
        {
          id: "lec3",
          type: "vraifaux",
          titre: "Vrai ou faux justifié",
          sousTitre: "La madeleine de Proust",
          etape: "reperer",
          duree: "15 min",
          doc: "d2",
          consigne: "Lis le deuxième texte. Pour chaque affirmation, dis si elle est vraie ou fausse, puis choisis la phrase du texte qui le prouve.",
          items: [
            {
              affirmation: "L’expression « madeleine de Proust » vient d’un roman.",
              vrai: true,
              justifs: [
                "L’expression vient d’un célèbre passage de Du côté de chez Swann",
                "Aujourd’hui, l’expression est entrée dans la langue de tous les jours",
                "On l’utilise pour parler d’un plat, d’une musique ou d’un objet"
              ],
              answer: 0,
              explication: "<em>Du côté de chez Swann</em> est le premier volume du roman de Proust."
            },
            {
              affirmation: "Dans le passage, c’est la tante Léonie qui sert le thé au narrateur adulte.",
              vrai: false,
              justifs: [
                "Toute son enfance revient alors, avec les rues, les maisons et les gens du village",
                "Sa mère lui sert du thé et un petit gâteau en forme de coquillage",
                "Un jour d’hiver, le narrateur rentre chez lui"
              ],
              answer: 1,
              explication: "C’est sa mère. La tante Léonie, elle, lui offrait de la madeleine quand il était enfant, à Combray."
            },
            {
              affirmation: "Le narrateur comprend tout de suite d’où vient son bonheur.",
              vrai: false,
              justifs: [
                "Il trempe un morceau de gâteau dans son thé",
                "il ressent un bonheur intense qu’il ne comprend pas",
                "Toute son enfance revient alors"
              ],
              answer: 1,
              explication: "Il ne comprend pas d’abord ; le souvenir arrive ensuite, « tout d’un coup »."
            },
            {
              affirmation: "Pour l’auteur de l’article, un souvenir involontaire est déclenché par une sensation.",
              vrai: true,
              justifs: [
                "Le goût et l’odeur jouent ici un rôle particulier",
                "Ces souvenirs ne sont pas toujours exacts",
                "le souvenir n’arrive pas parce qu’on le cherche, mais parce qu’une sensation le réveille"
              ],
              answer: 2,
              explication: "C’est la définition de la « mémoire involontaire »."
            },
            {
              affirmation: "D’après l’article, les scientifiques ont tout expliqué sur le lien entre odeurs et souvenirs.",
              vrai: false,
              justifs: [
                "même si tout n’est pas encore expliqué",
                "Les chercheurs qui étudient la mémoire s’intéressent d’ailleurs depuis longtemps",
                "Le goût et l’odeur jouent ici un rôle particulier"
              ],
              answer: 0,
              explication: "L’article dit le contraire : la question est étudiée, mais tout n’est pas expliqué. Remarque : l’auteur ne cite aucun chiffre, ce qui est prudent."
            },
            {
              affirmation: "Selon l’auteur, nos vieux souvenirs ne sont pas toujours fidèles à la réalité.",
              vrai: true,
              justifs: [
                "Chacun a la sienne, et elle dit souvent quelque chose de son histoire",
                "Avec le temps, nous les embellissons, nous oublions certains détails et nous en inventons d’autres",
                "elle nous rappelle ce que nous avons ressenti"
              ],
              answer: 1,
              explication: "Le dernier paragraphe commence par « Ces souvenirs ne sont pas toujours exacts »."
            }
          ]
        },
        {
          id: "lec4",
          type: "qcm",
          titre: "Vocabulaire en contexte",
          sousTitre: "Comprendre un mot grâce au texte",
          etape: "interpreter",
          duree: "10 min",
          doc: "d2",
          consigne: "Retrouve chaque expression dans le texte et déduis son sens du contexte, sans dictionnaire.",
          questions: [
            {
              q: "« Une odeur… suffit parfois à nous ramener des années en arrière. » Ici, « ramener » signifie :",
              options: ["raccompagner quelqu’un chez lui", "faire revenir par la pensée", "rapporter un objet"],
              answer: 1,
              explication: "On ne se déplace pas : c’est la mémoire qui « revient » dans le passé."
            },
            {
              q: "« sans que nous l’ayons décidé » : le souvenir arrive…",
              options: ["après un long effort", "grâce à une décision", "de façon involontaire"],
              answer: 2,
              explication: "C’est l’idée centrale du texte : la mémoire involontaire."
            },
            {
              q: "« Il trempe un morceau de gâteau dans son thé. » Tremper, c’est :",
              options: ["plonger un moment dans un liquide", "couper en petits morceaux", "goûter avec prudence"],
              answer: 0,
              explication: "On trempe une madeleine dans le thé, un croissant dans le café."
            },
            {
              q: "« un bonheur intense » :",
              options: ["un bonheur bref", "un bonheur partagé", "un bonheur très fort"],
              answer: 2,
              explication: "Intense = très fort, très vif."
            },
            {
              q: "« l’expression est entrée dans la langue de tous les jours » :",
              options: [
                "on l’utilise couramment",
                "on l’a inventée récemment",
                "on l’utilise seulement en littérature"
              ],
              answer: 0,
              explication: "La langue de tous les jours = la langue courante."
            },
            {
              q: "« nous les embellissons » : embellir un souvenir, c’est…",
              options: ["l’oublier complètement", "le rendre plus beau qu’il n’était", "le raconter à quelqu’un"],
              answer: 1,
              explication: "Embellir vient de « beau » : rendre plus beau."
            }
          ]
        },
        {
          id: "lec5",
          type: "qcm",
          titre: "Lire entre les lignes",
          sousTitre: "Ce que l’auteur veut montrer",
          etape: "interpreter",
          duree: "10 min",
          doc: "d2",
          consigne: "Ces questions portent sur les intentions de l’auteur : la réponse n’est pas écrite mot pour mot dans le texte.",
          questions: [
            {
              q: "Pourquoi l’article commence-t-il par « Ça sent comme chez ma grand-mère ! » ?",
              options: [
                "Pour présenter la grand-mère de l’auteur",
                "Pour partir d’une expérience que beaucoup de lecteurs connaissent",
                "Pour critiquer les odeurs de cuisine"
              ],
              answer: 1,
              explication: "La question « Qui n’a jamais prononcé une phrase de ce genre ? » invite le lecteur à se reconnaître."
            },
            {
              q: "Pourquoi l’auteur cite-t-il directement les mots de Proust ?",
              options: [
                "Pour montrer l’origine exacte de l’expression",
                "Pour corriger Proust",
                "Parce que l’article parle surtout de pâtisserie"
              ],
              answer: 0,
              explication: "La citation entre guillemets permet de lire la source même de l’expression."
            },
            {
              q: "En citant une étudiante chinoise et un Breton, l’auteur veut montrer que…",
              options: [
                "les Chinois et les Bretons cuisinent de la même façon",
                "seules les personnes loin de chez elles ont des souvenirs",
                "chacun a ses propres madeleines, selon son histoire"
              ],
              answer: 2,
              explication: "« Chacun a la sienne, et elle dit souvent quelque chose de son histoire. » Les deux exemples illustrent cette idée."
            },
            {
              q: "Selon la dernière phrase, la valeur d’un souvenir est surtout…",
              options: ["historique", "émotionnelle", "scientifique"],
              answer: 1,
              explication: "Le souvenir « nous rappelle ce que nous avons ressenti », pas forcément ce qui s’est passé."
            },
            {
              q: "Quel titre résumerait le mieux l’article ?",
              options: [
                "Quand une sensation réveille le passé",
                "La recette des madeleines",
                "Comment avoir une meilleure mémoire"
              ],
              answer: 0,
              explication: "L’article explique comment un goût ou une odeur fait revenir un souvenir."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Un souvenir d’enfance",
          genre: "Témoignage",
          voix: "f",
          transcription: "Quand j’étais petite, je passais tous mes étés chez mes grands-parents, en Bretagne, dans un petit village au bord de la mer. Le matin, mon grand-père m’emmenait au marché, et l’après-midi, nous allions à la plage, même quand il faisait gris, ce qui arrivait souvent ! Ma grand-mère, elle, faisait des crêpes presque tous les soirs. Un été, je devais avoir huit ans, il s’est passé quelque chose que je n’oublierai jamais. Un soir, pendant une tempête, l’électricité a été coupée dans tout le village. Mes parents étaient restés à Paris, et j’avais un peu peur. Alors mon grand-père a allumé des bougies, il a sorti sa vieille guitare, et il a chanté des chansons bretonnes jusqu’à minuit. Le lendemain matin, le soleil était revenu, comme si de rien n’était. Mes grands-parents sont partis depuis longtemps, mais chaque fois qu’il y a de l’orage, je repense à cette nuit-là."
        },
        e2: {
          titre: "Les photos de vacances",
          genre: "Dialogue entre un frère et une sœur",
          locuteurs: { "Inès": "f", Bastien: "h" },
          repliques: [
            {
              loc: "Inès",
              texte: "Oh, regarde cette photo ! C’est le camping dans les Alpes, non ? On devait avoir… quoi, dix et douze ans ?"
            },
            {
              loc: "Bastien",
              texte: "Douze et quatorze, plutôt. C’était l’été où papa avait acheté cette énorme tente orange. Tu te souviens ?"
            },
            {
              loc: "Inès",
              texte: "Si je m’en souviens ! Le premier soir, il a mis deux heures à la monter, et il pleuvait des cordes."
            },
            {
              loc: "Bastien",
              texte: "Non, non, il ne pleuvait pas le premier soir. L’orage, c’était le troisième jour. Le premier soir, on avait oublié les piquets à la maison."
            },
            {
              loc: "Inès",
              texte: "Ah oui, les piquets ! Maman était furieuse. Elle a dû aller en acheter au village, à vingt kilomètres."
            },
            {
              loc: "Bastien",
              texte: "Et toi, pendant ce temps, tu pleurais parce que tu voulais rentrer à Lille."
            },
            { loc: "Inès", texte: "Moi ? Pas du tout ! C’est toi qui avais peur des vaches." },
            {
              loc: "Bastien",
              texte: "Bon… peut-être un peu. Elles étaient énormes, ces vaches ! Mais avoue que c’étaient des vacances géniales, finalement."
            },
            {
              loc: "Inès",
              texte: "Géniales, je ne sais pas… Il a plu une semaine sur deux. Mais c’est vrai qu’on en parle encore vingt ans après. C’est bien la preuve qu’on ne les a pas oubliées."
            },
            { loc: "Bastien", texte: "On devrait y retourner, tous les quatre, avec la tente orange." },
            { loc: "Inès", texte: "Ah non, ça, sans moi ! Cette fois, on réserve un chalet." }
          ]
        },
        e3: {
          titre: "Appel à témoignages",
          genre: "Annonce à la radio",
          format: "court",
          voix: "h",
          transcription: "Vous écoutez Radio Belle-Cour, il est huit heures et demie. Cette semaine, l’émission Mémoires vives vous donne la parole. Notre question : quel est votre premier souvenir de France ? Une arrivée à l’aéroport, un premier repas, une rencontre, un malentendu… Racontez-le-nous ! Laissez-nous un message vocal de deux minutes maximum avant vendredi midi. N’oubliez pas de dire votre prénom et la ville où vous habitez. Les meilleurs témoignages seront diffusés samedi à dix heures, et trois auditeurs seront invités à venir raconter leur souvenir en direct dans nos studios. Mémoires vives, chaque samedi matin, sur Radio Belle-Cour."
        },
        e4: {
          titre: "Le café des souvenirs",
          genre: "Mini-reportage",
          locuteurs: { "La journaliste": "f", Sandrine: "f2", Joseph: "h", Yuxin: "f" },
          repliques: [
            {
              loc: "La journaliste",
              texte: "Il est quinze heures, ce mercredi, à la médiathèque du quartier de la Croix-Rousse, à Lyon. Autour d’une grande table, une dizaine de personnes boivent un café… et racontent des souvenirs. Bienvenue au café des souvenirs. Sandrine, c’est vous qui animez cet atelier. Comment ça fonctionne ?"
            },
            {
              loc: "Sandrine",
              texte: "C’est très simple. Une fois par mois, on se retrouve pendant deux heures. Je propose un thème : la première fois que…, un objet de la maison, une chanson… et chacun raconte. Il y a des retraités du quartier, mais aussi des étudiants, souvent étrangers. Au début, ils viennent pour pratiquer le français. Et puis ils restent."
            },
            {
              loc: "La journaliste",
              texte: "Aujourd’hui, le thème, c’est l’école. Monsieur Joseph, vous avez quatre-vingt-un ans…"
            },
            {
              loc: "Joseph",
              texte: "Quatre-vingt-deux, depuis dimanche ! Moi, je raconte ma première rentrée, en 1950. On écrivait à la plume, avec de l’encre violette. J’en avais plein les doigts ! Le maître était sévère, mais je l’aimais bien."
            },
            { loc: "La journaliste", texte: "Et vous, Yuxin, vous êtes étudiante en master…" },
            {
              loc: "Yuxin",
              texte: "Oui, je viens de Chengdu. Ce que j’aime ici, c’est que les souvenirs des autres me font penser aux miens. Quand Joseph parle de son maître, je pense à ma professeure de chinois au collège. Elle nous faisait apprendre des poèmes par cœur, et je les connais encore !"
            },
            {
              loc: "Sandrine",
              texte: "C’est exactement ça, l’idée : un souvenir en appelle un autre. Et on se rend compte qu’on a beaucoup de choses en commun, même avec soixante ans d’écart."
            },
            {
              loc: "La journaliste",
              texte: "Le prochain café des souvenirs aura lieu le mercredi 4 novembre. L’entrée est libre : il suffit de s’inscrire à l’accueil de la médiathèque."
            }
          ]
        }
      },
      exercices: [
        {
          id: "eco1",
          type: "qcm",
          titre: "Sujet et interlocuteurs",
          sousTitre: "Les photos de vacances",
          etape: "comprendre",
          duree: "10 min",
          doc: "e2",
          consigne: "Écoute une première fois le dialogue, sans chercher à tout comprendre : qui parle, de quoi, dans quelle situation ?",
          questions: [
            {
              q: "Qui sont les deux personnes ?",
              options: ["Deux collègues de bureau", "Un frère et une sœur", "Un père et sa fille"],
              answer: 1,
              explication: "Ils parlent de « papa » et de « maman » et de leurs vacances d’enfants."
            },
            {
              q: "Que font-ils ?",
              options: [
                "Ils préparent leurs prochaines vacances",
                "Ils montent une tente",
                "Ils regardent une vieille photo"
              ],
              answer: 2,
              explication: "« Oh, regarde cette photo ! »"
            },
            {
              q: "De quel souvenir parlent-ils ?",
              options: [
                "De vacances au camping dans les Alpes",
                "D’un voyage en Bretagne",
                "De leur première rentrée scolaire"
              ],
              answer: 0,
              explication: "« C’est le camping dans les Alpes, non ? »"
            },
            {
              q: "Quelle est l’ambiance de la conversation ?",
              options: ["Triste", "Amusée et complice", "Très tendue"],
              answer: 1,
              explication: "Ils se taquinent, mais avec humour et tendresse."
            },
            {
              q: "Comment la conversation se termine-t-elle ?",
              options: [
                "Ils se disputent sérieusement.",
                "Inès range l’album.",
                "Bastien propose de refaire ce voyage."
              ],
              answer: 2,
              explication: "« On devrait y retourner, tous les quatre. »"
            }
          ]
        },
        {
          id: "a1",
          type: "qcm",
          titre: "Informations précises",
          sousTitre: "Un souvenir d’enfance",
          duree: "15 min",
          doc: "e1",
          consigne: "Une femme raconte un souvenir de ses vacances d’enfance. Lis d’abord les questions, puis écoute.",
          questions: [
            {
              q: "Où passait-elle ses étés ?",
              options: [
                "Dans une colonie de vacances",
                "Chez ses grands-parents, en Bretagne",
                "À Paris, avec ses parents"
              ],
              answer: 1,
              explication: "Dans un petit village au bord de la mer, en Bretagne."
            },
            {
              q: "Que faisait sa grand-mère presque tous les soirs ?",
              options: ["Elle chantait.", "Elle allait au marché.", "Elle faisait des crêpes."],
              answer: 2,
              explication: "C’est le grand-père qui allait au marché, le matin."
            },
            {
              q: "Quel âge avait-elle, environ, au moment de la tempête ?",
              options: ["Huit ans", "Six ans", "Dix ans"],
              answer: 0,
              explication: "« Je devais avoir huit ans » : devoir à l’imparfait exprime ici une supposition."
            },
            {
              q: "Comment son grand-père l’a-t-il rassurée ?",
              options: [
                "En lui racontant une histoire",
                "En jouant de la guitare et en chantant",
                "En appelant ses parents"
              ],
              answer: 1,
              explication: "Il a allumé des bougies et chanté des chansons bretonnes."
            },
            {
              q: "« Comme si de rien n’était » signifie :",
              options: [
                "comme si c’était dangereux",
                "comme s’il n’y avait personne",
                "comme si rien ne s’était passé"
              ],
              answer: 2,
              explication: "Le lendemain, tout semblait normal, comme si la tempête n’avait pas eu lieu."
            }
          ],
          transcription: "Quand j’étais petite, je passais tous mes étés chez mes grands-parents, en Bretagne, dans un petit village au bord de la mer. Le matin, mon grand-père m’emmenait au marché, et l’après-midi, nous allions à la plage, même quand il faisait gris, ce qui arrivait souvent ! Ma grand-mère, elle, faisait des crêpes presque tous les soirs. Un été, je devais avoir huit ans, il s’est passé quelque chose que je n’oublierai jamais. Un soir, pendant une tempête, l’électricité a été coupée dans tout le village. Mes parents étaient restés à Paris, et j’avais un peu peur. Alors mon grand-père a allumé des bougies, il a sorti sa vieille guitare, et il a chanté des chansons bretonnes jusqu’à minuit. Le lendemain matin, le soleil était revenu, comme si de rien n’était. Mes grands-parents sont partis depuis longtemps, mais chaque fois qu’il y a de l’orage, je repense à cette nuit-là.",
          etape: "reperer"
        },
        {
          id: "eco2",
          type: "qcm",
          titre: "Une annonce",
          sousTitre: "Appel à témoignages",
          etape: "reperer",
          duree: "10 min",
          doc: "e3",
          consigne: "Lis d’abord les questions. Puis écoute l’annonce et repère les informations pratiques. Tu peux l’écouter deux fois.",
          questions: [
            {
              q: "Que demande l’émission aux auditeurs ?",
              options: [
                "De donner leur avis sur la radio",
                "De raconter leur premier souvenir de France",
                "De participer à un concours de cuisine"
              ],
              answer: 1,
              explication: "« Quel est votre premier souvenir de France ? »"
            },
            {
              q: "Combien de temps peut durer le message ?",
              options: ["Deux minutes au maximum", "Dix minutes", "Une minute exactement"],
              answer: 0,
              explication: "« un message vocal de deux minutes maximum »"
            },
            {
              q: "Jusqu’à quand peut-on laisser un message ?",
              options: ["Samedi à dix heures", "Dimanche soir", "Vendredi midi"],
              answer: 2,
              explication: "Samedi à dix heures, c’est l’heure de l’émission."
            },
            {
              q: "Que faut-il dire dans le message ?",
              options: ["Son nom et son âge", "Son prénom et sa ville", "Son adresse et son numéro"],
              answer: 1,
              explication: "« votre prénom et la ville où vous habitez »"
            },
            {
              q: "Que se passera-t-il samedi ?",
              options: [
                "Les meilleurs témoignages seront diffusés.",
                "Les auditeurs recevront un cadeau.",
                "L’émission s’arrêtera."
              ],
              answer: 0,
              explication: "« Les meilleurs témoignages seront diffusés samedi à dix heures. »"
            },
            {
              q: "Combien d’auditeurs seront invités au studio ?",
              options: ["Deux", "Dix", "Trois"],
              answer: 2,
              explication: "« trois auditeurs seront invités à venir raconter leur souvenir en direct »"
            }
          ]
        },
        {
          id: "eco3",
          type: "saisie",
          titre: "Prise de notes",
          sousTitre: "Le café des souvenirs",
          etape: "reperer",
          duree: "15 min",
          doc: "e4",
          consigne: "Tu veux parler de cet atelier à une amie. Écoute le reportage et complète tes notes avec quelques mots seulement (pas de phrases complètes).",
          libelle: "",
          items: [
            {
              avant: "Lieu :",
              cles: ["mediatheque"],
              reponses: ["la médiathèque du quartier de la Croix-Rousse"],
              explication: "« à la médiathèque du quartier de la Croix-Rousse, à Lyon »"
            },
            {
              avant: "Fréquence :",
              cles: ["mois|mensuel"],
              reponses: ["une fois par mois"],
              explication: "« Une fois par mois, on se retrouve… »"
            },
            {
              avant: "Durée d’une séance :",
              cles: ["deux heure|2 heure|2h|2 h"],
              reponses: ["deux heures"],
              explication: "« on se retrouve pendant deux heures »"
            },
            {
              avant: "Participants :",
              cles: ["retraite", "etudiant"],
              reponses: ["des retraités du quartier et des étudiants (souvent étrangers)"],
              explication: "Il faut noter les deux publics : les retraités et les étudiants."
            },
            {
              avant: "Thème du jour :",
              cles: ["ecole"],
              reponses: ["l’école"],
              explication: "« Aujourd’hui, le thème, c’est l’école. »"
            },
            {
              avant: "Prochaine séance :",
              cles: ["4 novembre|quatre novembre"],
              reponses: ["le mercredi 4 novembre"],
              explication: "« le mercredi 4 novembre »"
            },
            {
              avant: "Pour participer :",
              cles: ["inscri"],
              reponses: ["entrée libre, s’inscrire à l’accueil"],
              explication: "« L’entrée est libre : il suffit de s’inscrire à l’accueil. »"
            }
          ]
        },
        {
          id: "eco4",
          type: "qcm",
          titre: "Opinions et ton",
          sousTitre: "Les photos de vacances",
          etape: "interpreter",
          duree: "15 min",
          doc: "e2",
          consigne: "Réécoute le dialogue en faisant attention à l’intonation : derrière les mots, qu’est-ce que les personnes pensent vraiment ?",
          questions: [
            {
              q: "« Si je m’en souviens ! » Inès veut dire :",
              options: [
                "Je ne suis pas sûre de m’en souvenir.",
                "Bien sûr que je m’en souviens, et très bien !",
                "Je ne veux pas en parler."
              ],
              answer: 1,
              explication: "Ce « si » exclamatif renforce la réponse : évidemment !"
            },
            {
              q: "Sur quel point le frère et la sœur ne sont-ils pas d’accord ?",
              options: ["Le jour de l’orage", "La couleur de la tente", "Le lieu des vacances"],
              answer: 0,
              explication: "Inès place la pluie le premier soir, Bastien le troisième jour : les souvenirs se déforment."
            },
            {
              q: "« Moi ? Pas du tout ! » Par cette réponse, Inès…",
              options: ["pose une vraie question", "s’excuse", "refuse d’admettre ce que dit son frère"],
              answer: 2,
              explication: "Elle nie, puis renvoie l’accusation : « C’est toi qui avais peur des vaches. »"
            },
            {
              q: "« Bon… peut-être un peu. » Bastien…",
              options: ["admet, un peu gêné, qu’il avait peur", "se met en colère", "change de sujet"],
              answer: 0,
              explication: "Les hésitations (« Bon… ») montrent qu’il reconnaît à moitié."
            },
            {
              q: "Que pense Inès de ces vacances, au fond ?",
              options: [
                "Ce sont les meilleures vacances de sa vie.",
                "Elle voudrait les oublier.",
                "Elles n’étaient pas parfaites, mais elles ont laissé un souvenir fort."
              ],
              answer: 2,
              explication: "« Géniales, je ne sais pas… Mais c’est vrai qu’on en parle encore vingt ans après. »"
            },
            {
              q: "« Ah non, ça, sans moi ! » Inès…",
              options: [
                "accepte avec plaisir",
                "refuse de dormir de nouveau sous la tente",
                "refuse de revoir son frère"
              ],
              answer: 1,
              explication: "Elle veut bien repartir, mais dans un chalet : « Cette fois, on réserve un chalet. »"
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
          titre: "Définitions",
          sousTitre: "Le temps et les émotions",
          duree: "10 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "autrefois", definition: "dans le passé, il y a longtemps" },
            { terme: "tout à coup", definition: "soudainement, de façon inattendue" },
            { terme: "la veille", definition: "le jour d’avant" },
            { terme: "le lendemain", definition: "le jour d’après" },
            { terme: "être aux anges", definition: "être extrêmement heureux" },
            { terme: "avoir le cœur serré", definition: "ressentir de la tristesse ou de l’angoisse" },
            { terme: "avoir la chair de poule", definition: "avoir des frissons, de froid ou de peur" },
            { terme: "se sentir dépaysé", definition: "se sentir perdu dans un environnement inhabituel" }
          ],
          etape: "comprendre"
        },
        {
          id: "voc1",
          type: "qcm",
          titre: "Synonymes et contraires",
          sousTitre: "Des mots des deux textes",
          etape: "reperer",
          duree: "10 min",
          consigne: "Choisis le synonyme (même sens) ou le contraire (sens opposé), selon la question.",
          questions: [
            {
              q: "Un synonyme de « gêné(e) » :",
              options: ["fâché", "mal à l’aise", "fatigué"],
              answer: 1,
              explication: "Être gêné, c’est se sentir mal à l’aise, un peu embarrassé."
            },
            {
              q: "Le contraire de « pressé » :",
              options: ["qui prend son temps", "rapide", "inquiet"],
              answer: 0,
              explication: "Les voyageurs pressés se dépêchent ; le contraire : prendre son temps."
            },
            {
              q: "Un synonyme de « se rendre compte » :",
              options: ["rendre visite", "compter", "s’apercevoir"],
              answer: 2,
              explication: "« Je me suis rendu compte que j’avais oublié mon billet » = je me suis aperçue."
            },
            {
              q: "Le contraire de « rater son train » :",
              options: ["perdre son train", "attraper son train", "manquer son train"],
              answer: 1,
              explication: "Rater et manquer sont synonymes ; attraper (de justesse) est le contraire."
            },
            {
              q: "Un synonyme de « inoubliable » :",
              options: ["mémorable", "banal", "récent"],
              answer: 0,
              explication: "Inoubliable et mémorable : qu’on garde en mémoire."
            },
            {
              q: "Le contraire de « se souvenir de » :",
              options: ["se rappeler", "raconter", "oublier"],
              answer: 2,
              explication: "Se rappeler est un synonyme, pas un contraire."
            },
            {
              q: "Un synonyme de « un imprévu » :",
              options: ["un projet", "un contretemps", "un rendez-vous"],
              answer: 1,
              explication: "Un contretemps est un imprévu qui dérange."
            }
          ]
        },
        {
          id: "voc2",
          type: "trous",
          titre: "Le mot juste",
          sousTitre: "Se souvenir, se rappeler, la mémoire",
          etape: "reperer",
          duree: "15 min",
          regles: ["se-souvenir-se-rappeler"],
          consigne: "Choisis la forme correcte. Attention aux constructions : de ou pas de « de » ?",
          phrases: [
            {
              avant: "Je",
              options: ["me souviens de", "me rappelle de"],
              answer: 0,
              apres: "notre premier voyage ensemble.",
              explication: "On se souvient DE quelque chose, mais on se rappelle quelque chose (sans « de »)."
            },
            {
              avant: "Tu te rappelles",
              options: ["le nom", "du nom"],
              answer: 0,
              apres: "de cet hôtel ?",
              explication: "Se rappeler + complément direct : se rappeler le nom."
            },
            {
              avant: "Cette chanson",
              options: ["se rappelle", "me rappelle"],
              answer: 1,
              apres: "mon enfance.",
              explication: "Rappeler quelque chose à quelqu’un = faire penser à."
            },
            {
              avant: "Je suis occupée, je te",
              options: ["rappelle", "souviens"],
              answer: 0,
              apres: "dans une heure, d’accord ?",
              explication: "Rappeler quelqu’un = lui téléphoner de nouveau."
            },
            {
              avant: "Elle a une excellente",
              options: ["souvenir", "mémoire"],
              answer: 1,
              apres: ": elle n’oublie jamais un visage.",
              explication: "La mémoire = la capacité de se souvenir."
            },
            {
              avant: "Nous gardons un très bon",
              options: ["souvenir", "mémoire"],
              answer: 0,
              apres: "de cette soirée.",
              explication: "Un souvenir = ce dont on se souvient. Et « mémoire » est féminin : une bonne mémoire."
            },
            {
              avant: "J’avais oublié",
              options: ["fermer", "de fermer"],
              answer: 1,
              apres: "la fenêtre.",
              explication: "Oublier DE + infinitif."
            },
            {
              avant: "Ce voyage ? Oui, je",
              options: ["me souviens", "m’en souviens"],
              answer: 1,
              apres: "très bien.",
              explication: "Se souvenir de ce voyage → s’en souvenir : le pronom « en » remplace « de + chose »."
            }
          ]
        },
        {
          id: "voc3",
          type: "trous",
          titre: "Expressions dans un dialogue",
          sousTitre: "Parler de sa mémoire à l’oral",
          etape: "interpreter",
          duree: "10 min",
          regles: ["expressions-idiomatiques"],
          consigne: "Complète chaque échange avec l’expression qui convient.",
          phrases: [
            {
              avant: "— Tu te souviens de Clara, ma voisine à Lille ? — Clara… Ça",
              options: ["me dit quelque chose", "me rappelle", "ne me dit rien"],
              answer: 0,
              apres: ", mais je ne vois pas bien son visage.",
              explication: "« Ça me dit quelque chose » = j’en ai un vague souvenir."
            },
            {
              avant: "— Et notre professeur de chimie au lycée ? — Aucune idée, ça ne me",
              options: ["dit quelque chose", "dit rien", "revient"],
              answer: 1,
              apres: "du tout.",
              explication: "« Ça ne me dit rien » = je n’en ai aucun souvenir."
            },
            {
              avant: "— Comment s’appelait ce restaurant, déjà ? — Attends, j’ai",
              options: ["un souvenir", "la chair de poule", "un trou de mémoire"],
              answer: 2,
              apres: "… Ah, ça me revient : Chez Paulette !",
              explication: "Un trou de mémoire = un oubli soudain et passager. « Ça me revient » = je m’en souviens de nouveau."
            },
            {
              avant: "— Tu te rappelles notre arrivée à Paris ? — Comme si",
              options: ["c’était hier", "rien n’était", "c’était demain"],
              answer: 0,
              apres: "! On était perdus dans le métro.",
              explication: "« Comme si c’était hier » = je m’en souviens très précisément. « Comme si de rien n’était » veut dire autre chose : comme si rien ne s’était passé."
            },
            {
              avant: "— Regarde cette photo de classe ! — Oh là là, ça ne nous",
              options: ["vieillit pas", "rajeunit pas", "rappelle pas"],
              answer: 1,
              apres: "! On avait quinze ans.",
              explication: "« Ça ne nous rajeunit pas » : expression humoristique quand on se rend compte du temps passé."
            },
            {
              avant: "— Tu avais vraiment peur des vaches ? — Ne me",
              options: ["souviens", "oublie", "rappelle"],
              answer: 2,
              apres: "pas ce souvenir, j’ai honte !",
              explication: "Rappeler quelque chose à quelqu’un : « Ne me rappelle pas ça ! »"
            },
            {
              avant: "— Tu penses souvent à ton grand-père ? — Oui, j’ai",
              options: ["le cœur serré", "la tête ailleurs", "un trou de mémoire"],
              answer: 0,
              apres: "chaque fois que je passe devant sa maison.",
              explication: "Avoir le cœur serré = ressentir de la tristesse (voir l’exercice « Définitions »)."
            }
          ]
        },
        {
          id: "voc4",
          type: "registre",
          titre: "Registres de langue",
          sousTitre: "Familier, courant ou soutenu ?",
          etape: "interpreter",
          duree: "10 min",
          regles: ["registres-de-langue"],
          consigne: "Ces phrases racontent les mêmes choses dans des registres différents. Pour chacune, choisis le registre.",
          items: [
            {
              phrase: "J’ai flippé quand j’ai vu que le train était parti.",
              answer: "familier",
              explication: "« Flipper » (avoir peur, paniquer) est familier."
            },
            {
              phrase: "J’ai eu très peur quand j’ai vu que le train était parti.",
              answer: "courant",
              explication: "Vocabulaire et construction neutres : registre courant."
            },
            {
              phrase: "Je fus saisie d’effroi en découvrant le quai désert.",
              answer: "soutenu",
              explication: "Le passé simple (« fus ») et le mot « effroi » appartiennent au registre soutenu, surtout écrit."
            },
            {
              phrase: "C’était trop bien, ces vacances !",
              answer: "familier",
              explication: "« Trop » au sens de « très » est familier."
            },
            {
              phrase: "Ces vacances ont été très agréables.",
              answer: "courant",
              explication: "Registre neutre, celui qu’on peut utiliser presque partout."
            },
            {
              phrase: "Ces vacances demeurent pour moi un souvenir impérissable.",
              answer: "soutenu",
              explication: "« Demeurer » (rester) et « impérissable » (qui ne disparaîtra pas) sont soutenus."
            },
            {
              phrase: "Je me souviens plus de son nom.",
              answer: "familier",
              explication: "À l’oral familier, le « ne » de la négation disparaît souvent. À l’écrit, il faut l’écrire."
            },
            {
              phrase: "Je ne me souviens plus de son nom.",
              answer: "courant",
              explication: "La négation complète, sans recherche particulière : registre courant."
            },
            {
              phrase: "Il m’est impossible de me remémorer son nom.",
              answer: "soutenu",
              explication: "« Il m’est impossible de » et « se remémorer » sont des tournures soutenues."
            }
          ]
        },
        {
          id: "voc5",
          type: "ecriture",
          titre: "Réemploi",
          sousTitre: "Un souvenir en quelques lignes",
          etape: "reemployer",
          duree: "15 min",
          regles: ["se-souvenir-se-rappeler"],
          consigne: "Écris un court paragraphe sur un souvenir heureux, en utilisant au moins cinq mots ou expressions de cette unité (définitions, mot juste, dialogue).",
          objectifs: [
            "Réemployer au moins cinq mots ou expressions de l’unité",
            "Utiliser correctement se souvenir de ou se rappeler"
          ],
          min: 50,
          max: 100,
          checklist: [
            "J’ai utilisé au moins cinq mots ou expressions de l’unité",
            "J’ai utilisé se souvenir de ou se rappeler, avec la bonne construction",
            "J’ai exprimé au moins une émotion",
            "J’ai situé le souvenir dans le temps (la veille, le lendemain, il y a…)"
          ],
          modele: "Je me souviens comme si c’était hier de mon arrivée à Lyon, il y a trois ans. La veille, j’avais le cœur serré parce que je quittais ma famille. Le lendemain, tout à coup, je me suis retrouvée dans une ville inconnue et je me sentais complètement dépaysée. Pourtant, ce premier soir, une voisine m’a invitée à dîner. J’étais aux anges ! Aujourd’hui encore, l’odeur de la tarte aux pommes me rappelle cette soirée."
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "gra1",
          type: "qcm",
          titre: "Observer",
          sousTitre: "À quoi sert chaque temps du passé ?",
          etape: "comprendre",
          duree: "10 min",
          regles: ["passe-compose-imparfait", "plus-que-parfait"],
          consigne: "Ces phrases viennent des documents de l’unité. Pour chacune, choisis le rôle du temps souligné par la question.",
          questions: [
            {
              q: "« Il faisait froid, il pleuvait » : ici, l’imparfait sert à…",
              options: [
                "raconter une action terminée",
                "décrire le décor de l’histoire",
                "parler d’une action antérieure"
              ],
              answer: 1,
              pourquoi: [
                "Une action terminée qui fait avancer l’histoire se met au passé composé.",
                "",
                "L’antériorité s’exprime avec le plus-que-parfait."
              ],
              explication: "Météo, lieu, ambiance : l’imparfait pose le décor."
            },
            {
              q: "« Le matin, mon grand-père m’emmenait au marché » : l’imparfait exprime…",
              options: ["une action unique", "une action future", "une habitude"],
              answer: 2,
              pourquoi: [
                "« Le matin » signifie ici « chaque matin » : ce n’est pas une action unique.",
                "Rien ne renvoie au futur dans cette phrase.",
                ""
              ],
              explication: "Une action répétée dans le passé : imparfait."
            },
            {
              q: "« Un soir, l’électricité a été coupée dans tout le village » : le passé composé…",
              options: [
                "raconte un événement ponctuel qui fait avancer l’histoire",
                "décrit une situation qui dure",
                "exprime une habitude"
              ],
              answer: 0,
              pourquoi: [
                "",
                "Une situation qui dure se décrit à l’imparfait.",
                "« Un soir » désigne un moment unique, pas une habitude."
              ],
              explication: "« Un soir » + passé composé : un événement précis."
            },
            {
              q: "« Je me suis rendu compte que j’avais oublié mon billet » : « j’avais oublié » indique…",
              options: [
                "une action qui se passe en même temps",
                "une action antérieure à « je me suis rendu compte »",
                "une action future"
              ],
              answer: 1,
              pourquoi: [
                "Pour une action simultanée, on aurait l’imparfait.",
                "",
                "Le plus-que-parfait regarde vers le passé, pas vers le futur."
              ],
              explication: "Elle a oublié le billet avant de s’en rendre compte : plus-que-parfait."
            },
            {
              q: "« Quand je suis arrivée sur le quai, le train venait de partir » : cela signifie que le train…",
              options: ["était parti juste avant", "allait partir", "partait au même moment"],
              answer: 0,
              pourquoi: [
                "",
                "Pour un futur proche, on dirait « allait partir ».",
                "Pour une action en cours, on dirait « était en train de partir »."
              ],
              explication: "Venir de + infinitif = passé récent. Dans un récit, « venir » se met à l’imparfait."
            },
            {
              q: "« Pendant que nous attendions, elle m’a parlé de sa jeunesse » : quelle action sert de cadre à l’autre ?",
              options: [
                "« elle m’a parlé » est le cadre de « nous attendions »",
                "Aucune : les deux actions sont successives",
                "« nous attendions » est le cadre de « elle m’a parlé »"
              ],
              answer: 2,
              pourquoi: [
                "C’est l’inverse : l’action en cours (imparfait) sert de cadre.",
                "« Pendant que » indique que les deux actions se passent en même temps.",
                ""
              ],
              explication: "L’imparfait (action en cours) sert de cadre à l’événement au passé composé."
            }
          ]
        },
        {
          id: "a3",
          type: "trous",
          titre: "Choisir le temps",
          sousTitre: "Passé composé ou imparfait ?",
          duree: "10 min",
          regles: ["passe-compose-imparfait", "plus-que-parfait"],
          fiche: "<p>Dans un récit, l’<strong>imparfait</strong> pose le décor, décrit et exprime les habitudes. Le <strong>passé composé</strong> raconte les événements qui font avancer l’histoire. Le <strong>plus-que-parfait</strong> exprime une action antérieure à une autre action passée.</p> <p class=\"ex\">Il <strong>pleuvait</strong> (décor) quand je <strong>suis sortie</strong> (événement). J’<strong>avais oublié</strong> mon parapluie (avant).</p>",
          consigne: "Choisis la forme qui convient.",
          phrases: [
            {
              avant: "Quand j’étais enfant, je",
              options: ["suis allée", "allais"],
              answer: 1,
              apres: "à la piscine tous les mercredis.",
              explication: "« Tous les mercredis » : une habitude, donc l’imparfait."
            },
            {
              avant: "Hier soir, je",
              options: ["suis rentrée", "rentrais"],
              answer: 0,
              apres: "à 23 h, puis je me suis couchée tout de suite.",
              explication: "Une succession d’actions ponctuelles : passé composé."
            },
            {
              avant: "Il",
              options: ["a plu", "pleuvait"],
              answer: 1,
              apres: "quand nous sommes sortis du cinéma.",
              explication: "La pluie est le décor, l’action en cours au moment de la sortie."
            },
            {
              avant: "Je lisais tranquillement quand le téléphone",
              options: ["a sonné", "sonnait"],
              answer: 0,
              apres: ".",
              explication: "Une action soudaine qui interrompt une action en cours."
            },
            {
              avant: "Nous",
              options: ["habitions", "avons habité"],
              answer: 1,
              apres: "deux ans à Nantes, puis nous avons déménagé.",
              explication: "Une durée délimitée et terminée (deux ans) : passé composé."
            },
            {
              avant: "La maison",
              options: ["était", "a été"],
              answer: 0,
              apres: "grande et lumineuse, avec un jardin plein de fleurs.",
              explication: "Une description : imparfait."
            },
            {
              avant: "Quand je suis arrivée, le cours",
              options: ["a déjà commencé", "avait déjà commencé"],
              answer: 1,
              apres: ".",
              explication: "Le cours a commencé avant mon arrivée : plus-que-parfait."
            },
            {
              avant: "Soudain, quelqu’un",
              options: ["a frappé", "frappait"],
              answer: 0,
              apres: "à la porte.",
              explication: "« Soudain » annonce un événement : passé composé."
            }
          ],
          etape: "reperer"
        },
        {
          id: "gra2",
          type: "trous",
          titre: "Il y a, depuis, pendant",
          sousTitre: "Situer dans le temps",
          etape: "reperer",
          duree: "10 min",
          regles: ["expressions-de-duree"],
          fiche: "<p><strong>Il y a</strong> + durée : un moment passé (<em>je suis arrivée il y a deux ans</em>). <strong>Depuis</strong> : une situation qui continue (<em>j’habite ici depuis deux ans</em>). <strong>Pendant</strong> : une durée limitée. <strong>En</strong> : le temps nécessaire. <strong>Dans</strong> : un moment du futur.</p>",
          consigne: "Choisis l’expression de temps qui convient.",
          phrases: [
            {
              avant: "Je suis arrivée en France",
              options: ["depuis", "il y a", "pendant"],
              answer: 1,
              apres: "deux ans.",
              explication: "Un moment précis du passé, avec un passé composé : il y a."
            },
            {
              avant: "J’habite à Lyon",
              options: ["il y a", "en", "depuis"],
              answer: 2,
              apres: "septembre.",
              explication: "La situation a commencé en septembre et continue : depuis (verbe au présent)."
            },
            {
              avant: "Nous avons attendu le train",
              options: ["pendant", "depuis", "il y a"],
              answer: 0,
              apres: "une heure.",
              explication: "Une durée limitée et terminée : pendant."
            },
            {
              avant: "Elle a réussi à écrire tout son récit",
              options: ["depuis", "en", "il y a"],
              answer: 1,
              apres: "vingt minutes !",
              explication: "Le temps nécessaire pour faire quelque chose : en."
            },
            {
              avant: "Ça fait trois mois",
              options: ["depuis", "il y a", "que"],
              answer: 2,
              apres: "je prends des cours de piano.",
              explication: "Ça fait + durée + que = depuis."
            },
            {
              avant: "À cette époque, je vivais à Lyon",
              options: ["depuis", "il y a", "dans"],
              answer: 0,
              apres: "seulement trois mois.",
              explication: "Dans un récit au passé, depuis s’emploie avec l’imparfait."
            },
            {
              avant: "Je l’ai rencontrée",
              options: ["hier", "la veille"],
              answer: 1,
              apres: "de mon départ.",
              explication: "« La veille de » : le jour avant un autre jour. « Hier » se compte seulement à partir d’aujourd’hui."
            },
            {
              avant: "Le train part",
              options: ["en", "dans", "il y a"],
              answer: 1,
              apres: "dix minutes : dépêche-toi !",
              explication: "Un moment du futur : dans."
            }
          ]
        },
        {
          id: "gra3",
          type: "transformation",
          titre: "Le plus-que-parfait",
          sousTitre: "Conjuguer l’action antérieure",
          etape: "reperer",
          duree: "15 min",
          regles: ["plus-que-parfait", "accord-participe-passe"],
          libelle: "Verbe",
          consigne: "Conjugue le verbe au plus-que-parfait. Attention à l’auxiliaire (avoir ou être) et à l’accord du participe passé. La personne qui raconte est une femme.",
          items: [
            {
              enonce: "partir",
              avant: "Quand je suis arrivée sur le quai, le train",
              apres: ".",
              reponses: ["était parti", "était déjà parti"],
              explication: "Partir se conjugue avec être : était parti."
            },
            {
              enonce: "oublier",
              avant: "Je me suis rendu compte que j’",
              apres: "mon billet sur la table.",
              reponses: ["avais oublié"],
              explication: "Oublier se conjugue avec avoir : j’avais oublié."
            },
            {
              enonce: "ne pas dormir",
              avant: "J’étais fatiguée parce que je",
              apres: "de la nuit.",
              reponses: ["n’avais pas dormi"],
              explication: "La négation entoure l’auxiliaire : je n’avais pas dormi."
            },
            {
              enonce: "parler",
              avant: "Nous sommes allés voir le film dont tu nous",
              apres: ".",
              reponses: ["avais parlé"],
              explication: "Tu nous en avais parlé avant que nous allions le voir : plus-que-parfait."
            },
            {
              enonce: "acheter, avec « déjà »",
              avant: "Quand ma sœur est née, mes parents",
              apres: "leur maison.",
              reponses: ["avaient déjà acheté"],
              explication: "« Déjà » se place entre l’auxiliaire et le participe : avaient déjà acheté."
            },
            {
              enonce: "se perdre",
              avant: "Le lendemain, je suis retournée dans la rue où je",
              apres: ".",
              reponses: ["m’étais perdue"],
              explication: "Verbe pronominal : auxiliaire être, et accord avec le sujet féminin : je m’étais perdue."
            },
            {
              enonce: "prêter",
              avant: "Il m’a rendu le livre que je lui",
              apres: "l’année précédente.",
              reponses: ["avais prêté"],
              explication: "Avec avoir, pas d’accord avec le sujet : j’avais prêté."
            },
            {
              enonce: "partir",
              avant: "Quand nous sommes enfin arrivés, les invités",
              apres: ".",
              reponses: ["étaient partis", "étaient déjà partis"],
              explication: "Avec être, le participe s’accorde avec le sujet pluriel : partis."
            }
          ]
        },
        {
          id: "gra4",
          type: "qcm",
          titre: "L’accord du participe passé",
          sousTitre: "Être ou avoir : accorder ou pas ?",
          etape: "interpreter",
          duree: "10 min",
          regles: ["accord-participe-passe", "accord-participe-pronominaux"],
          consigne: "Choisis la phrase correcte. Si tu te trompes, lis l’explication de ton erreur.",
          questions: [
            {
              q: "Chloé raconte :",
              options: ["Je suis arrivé en retard.", "Je suis arrivée en retard.", "Je suis arrivés en retard."],
              answer: 1,
              pourquoi: [
                "Avec être, le participe s’accorde avec le sujet : Chloé est une femme, il faut ajouter -e.",
                "",
                "Le -s marque le pluriel, or « je » est singulier."
              ],
              explication: "Arriver se conjugue avec être : accord avec le sujet."
            },
            {
              q: "Choisis la phrase correcte :",
              options: [
                "Mes amis ont partis à Marseille.",
                "Mes amis sont parti à Marseille.",
                "Mes amis sont partis à Marseille."
              ],
              answer: 2,
              pourquoi: [
                "Partir se conjugue avec être, pas avec avoir.",
                "Avec être, il faut accorder avec le sujet pluriel : partis.",
                ""
              ],
              explication: "Être + accord avec le sujet « mes amis » (masculin pluriel)."
            },
            {
              q: "Choisis la phrase correcte :",
              options: [
                "Elles ont mangé des crêpes.",
                "Elles ont mangées des crêpes.",
                "Elles sont mangé des crêpes."
              ],
              answer: 0,
              pourquoi: [
                "",
                "Avec avoir, le participe ne s’accorde jamais avec le sujet.",
                "Manger se conjugue avec avoir."
              ],
              explication: "Avoir + pas d’accord avec le sujet. Le complément (des crêpes) est placé après : pas d’accord non plus."
            },
            {
              q: "Deux sœurs racontent : « Ma sœur et moi, nous… »",
              options: ["avons restés à la maison.", "sommes resté à la maison.", "sommes restées à la maison."],
              answer: 2,
              pourquoi: [
                "Rester se conjugue avec être.",
                "« Nous » est pluriel : il faut un -s, et un -e pour deux femmes.",
                ""
              ],
              explication: "Être + accord avec « nous » (féminin pluriel) : restées."
            },
            {
              q: "« La lettre ? Je l’ai… »",
              options: ["…lue hier soir.", "…lu hier soir.", "…lus hier soir."],
              answer: 0,
              pourquoi: [
                "",
                "Ici, le complément « l’ » (= la lettre) est placé avant le verbe : avec avoir, le participe s’accorde alors avec lui.",
                "La lettre est au singulier."
              ],
              explication: "Avec avoir, on accorde avec le complément d’objet direct seulement s’il est placé avant : l’ = la lettre, donc lue."
            },
            {
              q: "Choisis la phrase correcte :",
              options: ["Elle a levée tôt.", "Elle s’est levée tôt.", "Elle s’est levé tôt."],
              answer: 1,
              pourquoi: [
                "Se lever est pronominal : il se conjugue avec être.",
                "",
                "Ici, le participe s’accorde avec le sujet féminin : levée."
              ],
              explication: "Verbe pronominal : auxiliaire être et, dans ce cas, accord avec le sujet."
            }
          ]
        },
        {
          id: "gra5",
          type: "reformulation",
          titre: "Venir de, être en train de, aller",
          sousTitre: "Reformuler sous contrainte",
          etape: "interpreter",
          duree: "15 min",
          regles: ["periphrases-verbales"],
          consigne: "Reformule la phrase de départ avec la tournure demandée. Écris seulement les mots qui manquent.",
          items: [
            {
              enonce: "Le train était parti une minute avant mon arrivée sur le quai.",
              aide: "Utilise venir de.",
              avant: "Quand je suis arrivée sur le quai, le train",
              apres: ".",
              reponses: ["venait de partir", "venait juste de partir"],
              explication: "Venir de à l’imparfait = passé récent dans un récit."
            },
            {
              enonce: "Je lisais tranquillement. À ce moment-là, le téléphone a sonné.",
              aide: "Utilise être en train de.",
              avant: "J’",
              apres: "quand le téléphone a sonné.",
              reponses: [
                "étais en train de lire",
                "étais tranquillement en train de lire",
                "étais en train de lire tranquillement"
              ],
              explication: "Être en train de à l’imparfait = action en cours, interrompue par un événement."
            },
            {
              enonce: "J’avais l’intention d’appeler mes amis, mais mon téléphone s’est éteint.",
              aide: "Utilise aller + infinitif.",
              avant: "J’",
              apres: "mes amis quand mon téléphone s’est éteint.",
              reponses: ["allais appeler"],
              explication: "Aller à l’imparfait + infinitif = une action qui allait se produire."
            },
            {
              enonce: "Nous avions fini de dîner quelques minutes plus tôt quand l’orage a commencé.",
              aide: "Utilise venir de.",
              avant: "Nous",
              apres: "quand l’orage a commencé.",
              reponses: ["venions de dîner", "venions de finir de dîner", "venions juste de dîner"],
              explication: "Le dîner était fini juste avant : venions de dîner."
            },
            {
              enonce: "Elle préparait le repas au moment où ses invités ont sonné.",
              aide: "Utilise être en train de.",
              avant: "Elle",
              apres: "le repas quand ses invités ont sonné.",
              reponses: ["était en train de préparer"],
              explication: "Action en cours : était en train de préparer."
            },
            {
              enonce: "Il était presque minuit, nous avions l’intention de partir. C’est alors que la musique a commencé.",
              aide: "Utilise aller + infinitif (ou être sur le point de).",
              avant: "Nous",
              apres: "quand la musique a commencé.",
              reponses: ["allions partir", "étions sur le point de partir"],
              explication: "Allions partir ou étions sur le point de partir : l’action allait se produire."
            }
          ]
        },
        {
          id: "gra6",
          type: "correction",
          titre: "Corriger les erreurs",
          sousTitre: "Une erreur par phrase",
          etape: "interpreter",
          duree: "15 min",
          regles: [
            "passe-compose-imparfait",
            "accord-participe-passe",
            "expressions-de-duree",
            "se-souvenir-se-rappeler"
          ],
          consigne: "Chaque phrase contient une erreur. Recopie la phrase entière en la corrigeant. L’indication sous la phrase te dit quel type d’erreur chercher.",
          items: [
            {
              enonce: "Hier soir, je lisais quand le téléphone sonnait.",
              aide: "Une erreur de temps.",
              reponses: ["Hier soir, je lisais quand le téléphone a sonné."],
              explication: "La sonnerie est un événement soudain qui interrompt la lecture : passé composé."
            },
            {
              enonce: "Elle est arrivé en retard au cours.",
              aide: "Une erreur d’accord.",
              reponses: ["Elle est arrivée en retard au cours."],
              explication: "Avec être, accord avec le sujet féminin : arrivée."
            },
            {
              enonce: "Quand j’étais enfant, j’ai joué au parc tous les jours.",
              aide: "Une erreur de temps.",
              reponses: ["Quand j’étais enfant, je jouais au parc tous les jours."],
              explication: "« Tous les jours » : une habitude, donc l’imparfait."
            },
            {
              enonce: "Je me rappelle de cette soirée.",
              aide: "Une erreur de construction.",
              reponses: ["Je me rappelle cette soirée.", "Je me souviens de cette soirée."],
              explication: "Se rappeler quelque chose, sans « de ». Ou bien : se souvenir de."
            },
            {
              enonce: "Nous avons arrivés à Lyon en 2021.",
              aide: "Une erreur d’auxiliaire.",
              reponses: ["Nous sommes arrivés à Lyon en 2021.", "Nous sommes arrivées à Lyon en 2021."],
              explication: "Arriver se conjugue avec être."
            },
            {
              enonce: "J’habite à Lyon il y a trois ans.",
              aide: "Une erreur d’expression du temps.",
              reponses: ["J’habite à Lyon depuis trois ans."],
              explication: "La situation continue aujourd’hui (présent) : depuis."
            },
            {
              enonce: "Quand je suis arrivée, le film a déjà commencé.",
              aide: "Une erreur de temps.",
              reponses: ["Quand je suis arrivée, le film avait déjà commencé."],
              explication: "Le film a commencé avant mon arrivée : plus-que-parfait."
            },
            {
              enonce: "Elles se sont promené au bord de la mer.",
              aide: "Une erreur d’accord.",
              reponses: ["Elles se sont promenées au bord de la mer."],
              explication: "Verbe pronominal : accord avec le sujet féminin pluriel."
            }
          ]
        },
        {
          id: "gra7",
          type: "texteatrous",
          titre: "Texte à compléter",
          sousTitre: "Tous les temps du récit",
          etape: "reemployer",
          duree: "20 min",
          regles: ["passe-compose-imparfait", "plus-que-parfait", "periphrases-verbales", "accord-participe-passe"],
          consigne: "Une femme raconte un souvenir de vacances. Conjugue les verbes entre parenthèses : imparfait, passé composé, plus-que-parfait ou présent. Pense aux accords.",
          texte: [
            "C’{{1}} un samedi de juillet. Il {{2}} très chaud et la plage {{3}} pleine de monde. Ma meilleure amie et moi, nous {{4}} d’arriver quand nous {{5}} quelqu’un crier.",
            "Un petit garçon {{6}} ses parents. Il {{7}} depuis dix minutes et personne ne l’{{8}} avant nous. Nous l’{{9}} à les chercher et, une demi-heure plus tard, nous les {{10}} près d’un marchand de glaces.",
            "Pour nous remercier, ses parents nous {{11}} une glace. Aujourd’hui encore, chaque fois que je vais à la plage, je {{12}} à ce petit garçon."
          ],
          trous: [
            {
              indice: "être",
              reponses: ["était"],
              explication: "Le décor : imparfait."
            },
            {
              indice: "faire",
              reponses: ["faisait"],
              explication: "La météo, le décor : imparfait."
            },
            {
              indice: "être",
              reponses: ["était"],
              explication: "Description : imparfait."
            },
            {
              indice: "venir",
              reponses: ["venions"],
              explication: "Venir de à l’imparfait : passé récent dans un récit."
            },
            {
              indice: "entendre",
              reponses: ["avons entendu"],
              explication: "Un événement soudain : passé composé."
            },
            {
              indice: "perdre",
              reponses: ["avait perdu"],
              explication: "Il les avait perdus avant ce moment : plus-que-parfait."
            },
            {
              indice: "pleurer",
              reponses: ["pleurait"],
              explication: "Action en cours, avec « depuis » dans un récit : imparfait."
            },
            {
              indice: "remarquer",
              reponses: ["avait remarqué"],
              explication: "Avant notre arrivée : plus-que-parfait (« ne l’avait remarqué »)."
            },
            {
              indice: "aider",
              reponses: ["avons aidé"],
              explication: "Un événement : passé composé. « L’ » représente le garçon, masculin : aidé."
            },
            {
              indice: "retrouver",
              reponses: ["avons retrouvés"],
              explication: "« Les » (les parents) est placé avant le verbe : avec avoir, le participe s’accorde avec lui. Retrouvés."
            },
            {
              indice: "offrir",
              reponses: ["ont offert"],
              explication: "Un événement : passé composé. Le complément (une glace) est après le verbe : pas d’accord."
            },
            {
              indice: "repenser",
              reponses: ["repense"],
              explication: "« Aujourd’hui encore » : retour au présent."
            }
          ]
        }
      ]
    },
    ecriture: {
      exercices: [
        {
          id: "ecr1",
          type: "ecriture",
          titre: "Améliorer un texte",
          sousTitre: "Du récit plat au récit vivant",
          etape: "interpreter",
          duree: "25 min",
          regles: ["passe-compose-imparfait", "connecteurs-logiques"],
          consigne: "Ce récit est compréhensible, mais plat : tout est au présent et « et puis » revient sans cesse. Réécris-le au passé, en ajoutant le décor, une émotion et des connecteurs variés.",
          depart: "Samedi dernier, je vais au marché. Il y a beaucoup de monde. Je cherche des fraises. Et puis je vois une vieille amie du lycée. Et puis on parle. Et puis on boit un café ensemble. C’est bien. Et puis je rentre chez moi.",
          objectifs: [
            "Mettre le récit au passé : imparfait pour le décor, passé composé pour les événements",
            "Remplacer « et puis » par des connecteurs variés : d’abord, ensuite, tout à coup, finalement…",
            "Ajouter au moins une description et une émotion"
          ],
          min: 80,
          max: 140,
          checklist: [
            "Le décor est à l’imparfait, les événements au passé composé",
            "Il n’y a plus de « et puis »",
            "J’ai utilisé au moins trois connecteurs différents",
            "J’ai ajouté une description (temps, lieu, ambiance)",
            "J’ai exprimé une émotion",
            "La fin dit ce que ce moment a représenté"
          ],
          modele: "Samedi dernier, je suis allée au marché de mon quartier. Il faisait beau et il y avait beaucoup de monde entre les étals. Je cherchais des fraises quand, tout à coup, j’ai aperçu une vieille amie du lycée. Je ne l’avais pas vue depuis dix ans ! D’abord, nous nous sommes regardées sans rien dire, puis nous avons éclaté de rire. Ensuite, nous avons bu un café sur une terrasse et nous avons parlé de nos années de lycée. J’étais vraiment émue. Finalement, je suis rentrée chez moi sans fraises, mais avec un très beau souvenir."
        },
        {
          id: "ecr2",
          type: "ecriture",
          titre: "Changer de registre",
          sousTitre: "Du message à une amie au blog de la classe",
          etape: "interpreter",
          duree: "20 min",
          regles: ["registres-de-langue"],
          consigne: "Tu as envoyé ce message à une amie. Réécris la même histoire dans un registre courant, pour le blog de ta classe de français.",
          depart: "Trop la loose hier 😩 J’ai raté mon train à 2 min près, j’étais grave dég. Heureusement y avait une dame trop sympa sur le quai, on a papoté une heure. Au final j’ai pris le suivant, j’suis arrivée à 22h, crevée mais contente lol",
          objectifs: [
            "Remplacer les mots familiers par des équivalents courants",
            "Écrire des phrases complètes, avec la négation complète (ne… pas)",
            "Garder les temps du récit : imparfait et passé composé"
          ],
          min: 60,
          max: 110,
          checklist: [
            "Il n’y a plus de mots familiers (loose, grave, dég, sympa, papoté, crevée, lol)",
            "Il n’y a plus d’abréviations ni d’émojis",
            "Mes phrases sont complètes (sujet, verbe, ponctuation)",
            "J’ai gardé toutes les informations de l’histoire",
            "J’ai utilisé au moins un connecteur (heureusement, finalement…)"
          ],
          modele: "Hier, j’ai vécu une journée un peu compliquée. J’ai raté mon train à deux minutes près et j’étais vraiment déçue. Heureusement, une dame très gentille attendait sur le quai et nous avons discuté pendant une heure. Finalement, j’ai pris le train suivant et je suis arrivée à vingt-deux heures, très fatiguée mais contente de cette rencontre. Je retiendrai surtout qu’un imprévu peut parfois devenir un bon moment."
        },
        {
          id: "ecr3",
          type: "ecriture",
          titre: "Un courriel",
          sousTitre: "Écrire à une amie perdue de vue",
          etape: "reemployer",
          duree: "30 min",
          regles: ["se-souvenir-se-rappeler", "expressions-de-duree"],
          consigne: "En rangeant tes affaires, tu retrouves une photo d’une amie que tu n’as pas vue depuis longtemps. Écris-lui un courriel : rappelle-lui le souvenir de cette photo, donne-lui de tes nouvelles et propose-lui de vous revoir.",
          objectifs: [
            "Utiliser les formules d’un courriel amical (ouverture et signature)",
            "Raconter brièvement un souvenir commun au passé",
            "Employer se souvenir de ou se rappeler, et une expression de temps (depuis, il y a)",
            "Faire une proposition précise"
          ],
          min: 110,
          max: 160,
          checklist: [
            "J’ai une formule d’ouverture et une signature amicales",
            "J’ai expliqué pourquoi j’écris (la photo retrouvée)",
            "J’ai raconté le souvenir avec l’imparfait et le passé composé",
            "J’ai utilisé se souvenir de ou se rappeler correctement",
            "J’ai donné de mes nouvelles (avec depuis ou il y a)",
            "J’ai fait une proposition concrète (date, lieu)"
          ],
          modele: "Objet : Une photo retrouvée !\n\nChère Agathe,\n\nTu ne devineras jamais ce que j’ai retrouvé hier en rangeant mon bureau : la photo de notre pique-nique au bord du lac, en juin 2019 ! Tu te souviens ? Il faisait une chaleur incroyable, nous avions oublié les boissons à la maison et nous avions fini par acheter des citronnades dans un petit café. Je me rappelle encore ton fou rire quand le vent a emporté ton chapeau.\n\nDe mon côté, beaucoup de choses ont changé : j’habite à Lyon depuis deux ans et je prépare un master. Et toi, que deviens-tu ?\n\nJe passe à Paris le week-end du 15 novembre. Si tu es libre, on pourrait prendre un café samedi après-midi ?\n\nJe t’embrasse,\nMei"
        },
        {
          id: "a4",
          type: "ecriture",
          titre: "Texte long",
          sousTitre: "Raconter un souvenir marquant",
          duree: "45 min",
          regles: ["passe-compose-imparfait", "accord-participe-passe"],
          consigne: "Raconte un souvenir marquant : un voyage, une rencontre, une première fois. Pose le décor, raconte les événements, puis dis ce que ce souvenir représente pour toi aujourd’hui.",
          min: 140,
          max: 190,
          checklist: [
            "Le décor et les descriptions sont à l’imparfait",
            "Les événements sont au passé composé",
            "Au moins un plus-que-parfait (une action antérieure)",
            "Des repères de temps : un jour, soudain, le lendemain…",
            "Au moins une expression d’émotion",
            "Une conclusion sur ce que ce souvenir représente aujourd’hui",
            "J’ai vérifié les accords des participes passés"
          ],
          modele: "C’était en juillet 2019, pendant mon premier voyage seule à l’étranger. J’avais vingt-deux ans et je venais d’arriver à Lisbonne. Il faisait une chaleur incroyable, les rues étaient pleines de touristes et je me sentais un peu dépaysée.\n\nLe deuxième jour, j’ai décidé de visiter l’Alfama, le vieux quartier de la ville. Je n’avais pas pris de carte, car je pensais retrouver mon chemin facilement. Évidemment, je me suis perdue. Tout à coup, un vieil homme qui jouait de la guitare devant sa porte m’a appelée. Il ne parlait pas français, je ne parlais pas portugais, mais il m’a offert un verre d’eau et m’a accompagnée jusqu’à la place principale, en chantant.\n\nLe lendemain, je suis retournée dans sa rue pour le remercier, mais il n’était plus là. Aujourd’hui encore, ce souvenir me rappelle qu’on peut se comprendre sans parler la même langue.",
          etape: "reemployer",
          objectifs: [
            "Alterner description (imparfait) et événements (passé composé)",
            "Employer au moins un plus-que-parfait et une tournure comme venir de ou être en train de",
            "Organiser le récit : décor, problème ou surprise, fin, sens du souvenir aujourd’hui"
          ]
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "ora1",
          type: "oral",
          titre: "Réponse d’une minute",
          sousTitre: "Un objet qui raconte une histoire",
          etape: "reemployer",
          duree: "15 min",
          consigne: "Quel objet de ton enfance as-tu gardé, ou aurais-tu aimé garder ? Décris-le, dis d’où il vient et explique pourquoi il compte pour toi. Parle une minute, sans lire.",
          dureeCible: "1 minute",
          preparation: [
            "J’ai gardé… / J’aurais aimé garder…",
            "C’était un cadeau de…",
            "Il était petit, rouge, en bois…",
            "Je l’emportais partout.",
            "Il me rappelle…",
            "Quand je le regarde, j’ai l’impression de…"
          ],
          checklist: [
            "J’ai décrit l’objet (forme, couleur, matière)",
            "J’ai dit d’où il venait, à l’imparfait ou au passé composé",
            "J’ai utilisé rappeler ou se souvenir de",
            "J’ai parlé environ une minute sans lire"
          ],
          modele: "J’ai gardé un petit lapin en tissu, gris et un peu usé. C’était un cadeau de ma grand-mère pour mes quatre ans. Quand j’étais petite, je l’emportais partout : à l’école, chez mes cousins, et même en vacances. Un jour, je l’ai oublié dans un train, et j’ai pleuré pendant des heures. Heureusement, un contrôleur l’a retrouvé et nous l’a renvoyé par la poste ! Aujourd’hui, il est sur une étagère de ma chambre. Quand je le regarde, il me rappelle ma grand-mère et la petite fille que j’étais."
        },
        {
          id: "ora2",
          type: "oral",
          titre: "Décrire et commenter",
          sousTitre: "Une photo et son histoire",
          etape: "reemployer",
          duree: "20 min",
          regles: ["passe-compose-imparfait"],
          consigne: "Choisis dans ton téléphone une photo prise il y a au moins un an. Décris-la, raconte ce qui s’est passé ce jour-là, puis dis ce que tu ressens en la regardant.",
          dureeCible: "1 minute 30 à 2 minutes",
          plan: [
            "Décrire : où, quand, qui, quoi (au présent : « Sur cette photo, on voit… »)",
            "Raconter : ce qui s’est passé ce jour-là (au passé)",
            "Commenter : ce que tu ressens aujourd’hui"
          ],
          preparation: [
            "Sur cette photo, on voit…",
            "Au premier plan / à l’arrière-plan…",
            "Cette photo a été prise il y a…",
            "Ce jour-là, …",
            "Juste avant, nous venions de…",
            "Quand je la regarde, je ressens…"
          ],
          checklist: [
            "J’ai décrit la photo au présent",
            "Je suis passée au passé pour raconter",
            "J’ai utilisé au moins une expression de temps (il y a, ce jour-là, juste avant…)",
            "J’ai exprimé un sentiment",
            "J’ai parlé au moins une minute trente"
          ],
          modele: "Sur cette photo, on voit trois amies assises sur un muret, devant la mer. Au premier plan, il y a un grand sac de pique-nique. Cette photo a été prise il y a deux ans, à Marseille, pendant mes premières vacances en France. Ce jour-là, il faisait très chaud. Nous venions de visiter Notre-Dame-de-la-Garde et nous étions épuisées. Une amie a proposé un pique-nique au bord de l’eau, et nous avons passé tout l’après-midi à parler et à rire. Quand je regarde cette photo aujourd’hui, je ressens de la nostalgie, mais surtout de la reconnaissance : ces amies m’ont beaucoup aidée pendant ma première année."
        },
        {
          id: "a5",
          type: "oral",
          titre: "Récit oral",
          sousTitre: "Raconter un souvenir à voix haute",
          duree: "20 min",
          consigne: "Raconte à voix haute un souvenir d’enfance qui t’a marquée : où et quand c’était, ce qui s’est passé, ce que tu as ressenti. Parle entre une et deux minutes, sans lire un texte écrit.",
          preparation: [
            "Quand j’étais petite, …",
            "Je me souviens très bien de…",
            "Un jour, … / Ce jour-là, …",
            "Tout à coup, …",
            "J’avais un peu peur. / J’étais aux anges.",
            "Aujourd’hui encore, quand je repense à…"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "Quand j’étais petite, je passais souvent le week-end chez ma tante, à la campagne. Je me souviens très bien d’un dimanche d’hiver : il avait neigé toute la nuit, et le matin, le jardin était complètement blanc. C’était la première fois que je voyais autant de neige ! Avec mes cousins, nous avons construit un bonhomme de neige énorme, puis nous avons fait une bataille de boules de neige. Tout à coup, ma tante nous a appelés : elle avait préparé du chocolat chaud. J’étais aux anges. Aujourd’hui encore, chaque fois qu’il neige, je repense à ce dimanche-là.",
          checklist: [
            "J’ai situé le souvenir : où et quand",
            "L’imparfait pour le décor",
            "Le passé composé pour les événements",
            "J’ai exprimé au moins une émotion",
            "J’ai parlé au moins une minute sans lire",
            "Le navigateur a compris la plupart de mes mots"
          ],
          etape: "reemployer"
        },
        {
          id: "ora3",
          type: "oral",
          titre: "Simulation universitaire",
          sousTitre: "Se présenter par un souvenir",
          etape: "reemployer",
          duree: "25 min",
          situation: "Premier cours d’un atelier de conversation à l’université. L’enseignante demande à chacun : « Présentez-vous en racontant un souvenir lié au français : votre première rencontre avec cette langue, un moment drôle ou un moment difficile. »",
          consigne: "Présente-toi en deux minutes comme si tu étais dans cette salle de classe, en t’adressant au groupe.",
          dureeCible: "2 minutes",
          prepMinutes: 2,
          plan: [
            "Te présenter : prénom, pays, études",
            "Situer le souvenir : quand, où",
            "Raconter ce qui s’est passé",
            "Dire ce que ce moment a changé pour toi"
          ],
          preparation: [
            "Bonjour à tous, je m’appelle… et je viens de…",
            "J’ai commencé le français il y a…",
            "Mon premier souvenir de français, c’est…",
            "Je ne comprenais pas un mot !",
            "C’est à ce moment-là que j’ai compris que…",
            "Depuis, …"
          ],
          checklist: [
            "Je me suis présentée clairement (prénom, origine, études)",
            "J’ai situé le souvenir dans le temps et dans l’espace",
            "J’ai alterné imparfait et passé composé",
            "J’ai utilisé « il y a » ou « depuis » correctement",
            "J’ai conclu sur ce que ce souvenir représente",
            "J’ai parlé au groupe, sans lire mes notes"
          ],
          modele: "Bonjour à tous, je m’appelle Mei, je viens de Wuhan, en Chine, et je suis en master de sciences de l’éducation. J’ai commencé le français il y a quatre ans, un peu par hasard. Mon premier vrai souvenir de français, c’est un film. J’étais étudiante en licence et une amie m’avait invitée à un petit festival de cinéma français. Je ne comprenais presque rien, je lisais les sous-titres en chinois, mais j’adorais la musique de la langue. À la fin, une actrice a dit une phrase toute simple : « On se reverra. » Je l’ai répétée pendant tout le trajet du retour ! C’est à ce moment-là que j’ai décidé d’apprendre le français sérieusement. Depuis, j’ai fait beaucoup de progrès, mais j’aime toujours autant cette musique."
        }
      ]
    }
  }
});
