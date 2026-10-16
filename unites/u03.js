/* Unité 3 : Deux repas de fête, en France et en Chine (B1) — enrichie selon CHARTE.md (lot 2-4).
   Les exercices d’origine gardent leurs ids (a0 … a4) : la progression déjà enregistrée est conservée.
   Nouveaux ids : lec, eco, voc, gra, ecr, ora + numéro. Ne jamais renommer un id existant. */
ajouterUnite({
  id: 3,
  niveau: "b1",
  theme: "Gastronomie, mode",
  chine: true,
  titre: "Deux repas de fête, en France et en Chine",
  objectif: "Décrire un repas, ses plats et ses traditions ; exprimer une quantité avec les partitifs et les expressions de quantité ; écrire une recette.",
  enrichie: true,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Noël et Nouvel An lunaire : deux fêtes à table",
          genre: "Article culturel",
          format: "long",
          texte: [
            "En France comme en Chine, les grandes fêtes se célèbrent d’abord à table. En France, le repas le plus important de l’année est souvent celui de Noël, le soir du 24 ou le midi du 25 décembre. En Chine, c’est le dîner de la veille du Nouvel An lunaire, entre la fin janvier et la mi-février, qui réunit toute la famille.",
            "Le repas de Noël français est long et suit un ordre précis : l’apéritif, l’entrée (souvent des huîtres, du saumon fumé ou du foie gras), le plat principal, comme une dinde aux marrons, puis le fromage et enfin le dessert, traditionnellement une bûche de Noël. On peut rester à table quatre ou cinq heures ! D’ailleurs, en 2010, l’UNESCO a inscrit le « repas gastronomique des Français » au patrimoine culturel immatériel de l’humanité.",
            "En Chine, le dîner du Nouvel An est aussi un moment de partage, mais les plats sont posés au centre de la table et chacun se sert. Beaucoup de plats ont une valeur symbolique. Dans le nord, on prépare des raviolis, les jiaozi, dont la forme rappelle les anciens lingots d’or. On sert aussi un poisson entier, car en chinois, le mot « poisson » se prononce comme le mot « surplus » : il annonce une année d’abondance.",
            "Les deux traditions ont donc un point commun essentiel : plus que la nourriture elle-même, ce qui compte, c’est d’être ensemble. Pour une Chinoise qui fête Noël en France, ou pour un Français invité au Nouvel An chinois, la meilleure attitude reste la curiosité… et l’appétit."
          ]
        },
        d2: {
          titre: "Invité à un repas de fête : que faut-il apporter ?",
          genre: "Rubrique savoir-vivre d’un magazine",
          format: "court",
          texte: [
            "Vous êtes invité à un repas de fête chez des amis, ou dans une famille que vous connaissez peu ? Bonne nouvelle : arriver les mains vides n’est presque jamais une obligation, mais un petit cadeau fait toujours plaisir. Encore faut-il bien le choisir !",
            "En France, on apporte souvent une bouteille de vin, des chocolats ou des fleurs. Évitez cependant les chrysanthèmes : dans la plupart des familles, on les associe aux cimetières, car on les dépose sur les tombes à la Toussaint. Si vous apportez du vin, ne soyez pas vexé s’il n’est pas servi le soir même : vos hôtes ont peut-être déjà choisi les vins du repas.",
            "En Chine, on offre volontiers des fruits, du thé ou une spécialité de sa région, et l’on présente le cadeau avec les deux mains. En revanche, on évite d’offrir une horloge : en chinois, « offrir une horloge » se prononce comme « accompagner un mourant ».",
            "Dans les deux pays, une règle reste valable : ce n’est pas le prix qui compte, c’est l’attention. Et si vous avez un doute, demandez simplement à vos hôtes !"
          ]
        }
      },
      exercices: [
        {
          id: "lec1",
          type: "qcm",
          titre: "Compréhension globale",
          sousTitre: "Deux fêtes à table : l’essentiel",
          etape: "comprendre",
          duree: "10 min",
          doc: "d1",
          consigne: "Lis le texte une première fois, sans t’arrêter sur les mots inconnus. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "Quel est le sujet principal du texte ?",
              options: [
                "La comparaison de deux grands repas de fête, en France et en Chine",
                "L’histoire de la cuisine chinoise",
                "Les recettes de Noël"
              ],
              answer: 0,
              explication: "Dès la première phrase : « En France comme en Chine, les grandes fêtes se célèbrent d’abord à table. »"
            },
            {
              q: "Comment le texte est-il organisé ?",
              options: [
                "La Chine, puis la France, puis une liste de recettes",
                "Une introduction, la France, la Chine, puis un point commun",
                "Uniquement des souvenirs personnels"
              ],
              answer: 1,
              explication: "Paragraphe 1 : présentation des deux fêtes ; 2 : la France ; 3 : la Chine ; 4 : la conclusion."
            },
            {
              q: "Quel est le ton du texte ?",
              options: [
                "Critique : l’auteur préfère une des deux traditions",
                "Triste et nostalgique",
                "Informatif et bienveillant"
              ],
              answer: 2,
              explication: "L’auteur présente les deux fêtes avec intérêt, sans juger, et termine sur « la curiosité… et l’appétit »."
            },
            {
              q: "Selon la conclusion, qu’est-ce qui compte le plus dans ces fêtes ?",
              options: ["La qualité de la nourriture", "Le prix des plats", "Être ensemble"],
              answer: 2,
              explication: "« Plus que la nourriture elle-même, ce qui compte, c’est d’être ensemble. »"
            }
          ]
        },
        {
          id: "a0",
          type: "qcm",
          titre: "Questions détaillées",
          sousTitre: "Deux fêtes à table : les détails",
          etape: "reperer",
          duree: "15 min",
          doc: "d1",
          consigne: "Relis le texte. Réponds aux questions en cherchant dans le texte la phrase qui donne la réponse.",
          questions: [
            {
              q: "Selon le texte, quel est le repas le plus important en Chine ?",
              options: [
                "Le dîner de la veille du Nouvel An lunaire",
                "Le déjeuner du jour de l’An",
                "Le repas de la fête de la Lune"
              ],
              answer: 0,
              explication: "« C’est le dîner de la veille du Nouvel An lunaire […] qui réunit toute la famille. »"
            },
            {
              q: "Dans quel ordre se déroule le repas de Noël français ?",
              options: [
                "Entrée, apéritif, plat, dessert, fromage",
                "Apéritif, entrée, plat, fromage, dessert",
                "Plat, fromage, entrée, dessert"
              ],
              answer: 1,
              explication: "En France, le fromage se mange après le plat principal et avant le dessert."
            },
            {
              q: "Pourquoi sert-on un poisson entier au Nouvel An chinois ?",
              options: [
                "Parce que c’est un plat bon marché",
                "Parce que c’est la tradition du sud seulement",
                "Parce que son nom se prononce comme le mot « surplus »"
              ],
              answer: 2,
              explication: "鱼 (yú, poisson) et 余 (yú, surplus) se prononcent de la même façon : c’est un vœu d’abondance."
            },
            {
              q: "Qu’est-ce que l’UNESCO a reconnu en 2010 ?",
              options: ["Le repas gastronomique des Français", "La bûche de Noël", "La cuisine chinoise"],
              answer: 0,
              explication: "Il a été inscrit au patrimoine culturel immatériel de l’humanité."
            },
            {
              q: "Quelle différence de service le texte souligne-t-il ?",
              options: [
                "En France, on mange plus vite.",
                "En Chine, les plats sont au centre et chacun se sert.",
                "En Chine, il n’y a pas de dessert."
              ],
              answer: 1,
              explication: "En France, les plats arrivent l’un après l’autre ; en Chine, on partage les plats posés au centre."
            }
          ]
        },
        {
          id: "lec2",
          type: "qcm",
          titre: "Connecteurs et structure",
          sousTitre: "Comparer deux traditions",
          etape: "reperer",
          duree: "15 min",
          doc: "d1",
          regles: ["connecteurs-logiques"],
          consigne: "Observe les mots qui servent à comparer et à relier les idées. Choisis la bonne réponse.",
          questions: [
            {
              q: "« En France comme en Chine, les grandes fêtes se célèbrent d’abord à table. » Ici, « comme » exprime :",
              options: ["une cause", "une comparaison : c’est pareil dans les deux pays", "une conséquence"],
              answer: 1,
              explication: "« En France comme en Chine » = en France et aussi en Chine. Devant un verbe conjugué en début de phrase, « comme » exprime plutôt la cause."
            },
            {
              q: "« D’ailleurs, en 2010, l’UNESCO a inscrit… » « D’ailleurs » sert à :",
              options: [
                "ajouter une information qui confirme ce qui précède",
                "s’opposer à ce qui précède",
                "conclure le texte"
              ],
              answer: 0,
              explication: "Le repas français est long et important ; la décision de l’UNESCO le confirme."
            },
            {
              q: "« Le dîner du Nouvel An est aussi un moment de partage, mais les plats sont posés au centre de la table. » « Aussi » puis « mais » montrent :",
              options: ["deux différences", "deux ressemblances", "une ressemblance, puis une différence"],
              answer: 2,
              explication: "« Aussi » : comme en France, c’est un moment de partage. « Mais » : le service est différent."
            },
            {
              q: "« Les deux traditions ont donc un point commun essentiel. » « Donc » annonce :",
              options: ["un nouvel exemple", "la conclusion du texte", "une opposition"],
              answer: 1,
              explication: "Après avoir décrit les deux repas, l’auteur tire une conclusion."
            },
            {
              q: "« Plus que la nourriture elle-même, ce qui compte, c’est d’être ensemble. » Cette phrase :",
              options: [
                "met en valeur le fait d’être ensemble, en le comparant à la nourriture",
                "dit que la nourriture est plus importante que tout",
                "critique la nourriture des fêtes"
              ],
              answer: 0,
              explication: "« Plus que X, ce qui compte, c’est Y » : Y est plus important que X."
            }
          ]
        },
        {
          id: "lec3",
          type: "vraifaux",
          titre: "Vrai ou faux justifié",
          sousTitre: "Que faut-il apporter ?",
          etape: "reperer",
          duree: "15 min",
          doc: "d2",
          consigne: "Lis la rubrique du magazine. Dis si l’affirmation est vraie ou fausse, puis choisis la phrase du texte qui le prouve.",
          items: [
            {
              affirmation: "Il est obligatoire d’apporter un cadeau.",
              vrai: false,
              justifs: [
                "arriver les mains vides n’est presque jamais une obligation",
                "un petit cadeau fait toujours plaisir",
                "on apporte souvent une bouteille de vin"
              ],
              answer: 0,
              explication: "Un cadeau fait plaisir, mais ce n’est presque jamais obligatoire."
            },
            {
              affirmation: "En France, les chrysanthèmes ne sont pas un bon cadeau pour un repas.",
              vrai: true,
              justifs: [
                "Évitez cependant les chrysanthèmes",
                "des chocolats ou des fleurs",
                "on offre volontiers des fruits"
              ],
              answer: 0,
              explication: "Ce sont les fleurs que l’on dépose sur les tombes à la Toussaint."
            },
            {
              affirmation: "Le vin apporté par un invité est toujours servi pendant le repas.",
              vrai: false,
              justifs: [
                "Si vous apportez du vin",
                "ne soyez pas vexé s’il n’est pas servi le soir même",
                "on apporte souvent une bouteille de vin"
              ],
              answer: 1,
              explication: "Les hôtes peuvent le garder pour plus tard."
            },
            {
              affirmation: "En Chine, on peut offrir du thé.",
              vrai: true,
              justifs: [
                "on offre volontiers des fruits, du thé ou une spécialité de sa région",
                "on évite d’offrir une horloge",
                "ce n’est pas le prix qui compte"
              ],
              answer: 0,
              explication: "Le thé fait partie des cadeaux cités."
            },
            {
              affirmation: "En Chine, on présente un cadeau d’une seule main, discrètement.",
              vrai: false,
              justifs: [
                "une spécialité de sa région",
                "l’on présente le cadeau avec les deux mains",
                "demandez simplement à vos hôtes"
              ],
              answer: 1,
              explication: "On le présente avec les deux mains, en signe de respect."
            },
            {
              affirmation: "En cas de doute, l’article conseille de poser la question aux hôtes.",
              vrai: true,
              justifs: [
                "une règle reste valable",
                "c’est l’attention",
                "demandez simplement à vos hôtes"
              ],
              answer: 2,
              explication: "C’est le dernier conseil de l’article."
            }
          ]
        },
        {
          id: "lec4",
          type: "qcm",
          titre: "Vocabulaire et implicite",
          sousTitre: "Lire entre les lignes",
          etape: "interpreter",
          duree: "10 min",
          doc: "d2",
          consigne: "Relis la rubrique. Trouve le sens des expressions grâce au contexte, puis le point de vue de l’auteur.",
          questions: [
            {
              q: "« Arriver les mains vides » signifie :",
              options: ["arriver sans cadeau", "arriver en retard", "arriver sans s’être lavé les mains"],
              answer: 0,
              explication: "Les mains vides : sans rien apporter. La phrase continue avec « un petit cadeau fait toujours plaisir »."
            },
            {
              q: "« Ne soyez pas vexé » : l’auteur imagine que l’invité pourrait se sentir :",
              options: ["fatigué", "un peu blessé, offensé", "en retard"],
              answer: 1,
              explication: "Être vexé, c’est être un peu blessé dans son amour-propre : « Ils n’ont pas ouvert mon vin ! »"
            },
            {
              q: "Pourquoi l’horloge est-elle un mauvais cadeau, selon l’article ?",
              options: [
                "Parce qu’elle coûte trop cher",
                "Parce qu’elle rappelle le travail",
                "À cause d’une ressemblance de sons entre deux expressions"
              ],
              answer: 2,
              explication: "C’est le même mécanisme que pour le poisson dans le premier texte : un jeu de sons en chinois, mais cette fois avec un sens négatif."
            },
            {
              q: "Quel point commun l’auteur voit-il entre les deux pays ?",
              options: [
                "On offre exactement les mêmes cadeaux.",
                "Ce qui compte, c’est l’attention, pas le prix.",
                "On ouvre toujours le cadeau devant l’invité."
              ],
              answer: 1,
              explication: "« Ce n’est pas le prix qui compte, c’est l’attention. »"
            },
            {
              q: "Quel est le ton de cette rubrique ?",
              options: [
                "Pratique et léger : elle donne des conseils avec un peu d’humour",
                "Scientifique et technique",
                "Sévère : elle interdit beaucoup de choses"
              ],
              answer: 0,
              explication: "« Bonne nouvelle », « Encore faut-il bien le choisir ! », « demandez simplement » : le ton est léger et pratique."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Un message pour le réveillon",
          genre: "Message vocal",
          format: "court",
          voix: "f",
          transcription: "Salut Mei, c’est Claire ! Je t’appelle pour samedi soir. Comme prévu, on fête le réveillon chez mes parents, à Lyon. On sera une dizaine. Ma mère prépare la dinde, mon frère s’occupe du fromage, et moi, je fais la bûche. Est-ce que tu pourrais apporter quelque chose ? Mes parents seraient ravis de goûter tes raviolis ! Si c’est trop de travail, ne t’inquiète pas, une bouteille de jus de fruits, c’est parfait aussi. Pour venir, prends le train de dix-sept heures douze, je viendrai te chercher à la gare. Et n’oublie pas : chez nous, on se fait la bise, même la première fois ! Rappelle-moi quand tu as ce message. Bisous !"
        },
        e2: {
          titre: "Chez le fromager",
          genre: "Dialogue chez un commerçant",
          locuteurs: { "Le fromager": "h", "Mei": "f" },
          repliques: [
            { loc: "Le fromager", texte: "Bonjour mademoiselle, qu’est-ce que je vous sers ?" },
            { loc: "Mei", texte: "Bonjour monsieur. Je suis invitée chez des amis pour le réveillon, et je voudrais apporter un peu de fromage, en plus de mes raviolis. Qu’est-ce que vous me conseillez ?" },
            { loc: "Le fromager", texte: "Avec plaisir. Vous serez combien ?" },
            { loc: "Mei", texte: "Une dizaine." },
            { loc: "Le fromager", texte: "Alors, comptez environ cinquante grammes par personne, puisqu’il y aura sûrement beaucoup d’autres plats. Je vous propose trois fromages différents : un fromage à pâte dure, un fromage de chèvre et un fromage à pâte molle." },
            { loc: "Mei", texte: "D’accord. Mais pas trop forts, s’il vous plaît : je ne connais pas encore très bien les fromages français !" },
            { loc: "Le fromager", texte: "Je comprends. Alors, prenez un morceau de comté, il est doux et fruité. Deux cents grammes, ça vous va ?" },
            { loc: "Mei", texte: "Oui, très bien. Et le chèvre, c’est quoi exactement ?" },
            { loc: "Le fromager", texte: "C’est un fromage fait avec du lait de chèvre, et non de vache. Celui-ci est frais et un peu acide. Vous voulez goûter ?" },
            { loc: "Mei", texte: "Volontiers… Mmm, c’est délicieux ! J’en prends un." },
            { loc: "Le fromager", texte: "Et un peu de roquefort ? C’est un fromage bleu, au lait de brebis. Il a beaucoup de caractère." },
            { loc: "Mei", texte: "Hmm… Non merci, je préfère éviter. Vous n’auriez pas plutôt un fromage plus doux, comme le brie ?" },
            { loc: "Le fromager", texte: "Bien sûr. J’ai un brie de Meaux, il est parfait en ce moment. Un quart, ça suffit ?" },
            { loc: "Mei", texte: "Parfait. Et du pain, vous en vendez ?" },
            { loc: "Le fromager", texte: "Non, désolé, je ne vends pas de pain. Mais la boulangerie est juste à côté. Alors, un morceau de comté, un chèvre et un quart de brie : ça vous fera dix-huit euros quarante." }
          ]
        },
        e3: {
          titre: "Le Nouvel An dans le treizième",
          genre: "Mini-reportage radio",
          aVerifier: "Le reportage évoque le défilé du Nouvel An chinois dans le 13e arrondissement de Paris : vérifier qu’il est toujours organisé chaque année.",
          locuteurs: { "Margaux": "f", "M. Chen": "h", "Apolline": "f2" },
          repliques: [
            { loc: "Margaux", texte: "Bonjour à tous, ici Margaux, pour Radio Pont-Neuf. Je suis dans le treizième arrondissement de Paris, où vivent et travaillent de nombreuses familles d’origine chinoise et asiatique. Ce soir, c’est le réveillon du Nouvel An lunaire, et dans les épiceries, il y a foule. Monsieur Chen, vous tenez ce traiteur depuis vingt ans : qu’est-ce que vos clients achètent aujourd’hui ?" },
            { loc: "M. Chen", texte: "Surtout des raviolis, du poisson et des gâteaux de riz, les niangao. Le niangao, c’est un symbole : son nom ressemble à « chaque année plus haut ». On en achète pour souhaiter une bonne année, avec du succès. Et puis, beaucoup de clients me commandent des plateaux tout prêts : ils travaillent tard, ils n’ont plus le temps de cuisiner pendant trois jours, comme leurs parents." },
            { loc: "Margaux", texte: "Ça vous rend un peu triste ?" },
            { loc: "M. Chen", texte: "Un peu, oui… Mais l’important, c’est qu’ils se retrouvent autour de la table. Et ce qui me fait plaisir, c’est que j’ai de plus en plus de clients français." },
            { loc: "Margaux", texte: "Justement, je me tourne vers vous, mademoiselle. Vous fêtez le Nouvel An chinois ?" },
            { loc: "Apolline", texte: "Oui, depuis trois ans ! Ma colocataire vient de Tianjin, et elle m’a invitée chez sa tante la première année. J’ai appris à faire des raviolis… enfin, les miens étaient vraiment moches, mais tout le monde a été très gentil avec moi. Maintenant, c’est devenu une tradition pour moi aussi. Ce soir, j’apporte une bûche : c’est mon petit mélange franco-chinois !" },
            { loc: "Margaux", texte: "Une bûche pour le Nouvel An chinois, il fallait y penser ! Le grand défilé aura lieu dimanche après-midi dans le quartier. Bon réveillon à tous !" }
          ]
        }
      },
      exercices: [
        {
          id: "eco1",
          type: "qcm",
          titre: "Sujet et interlocuteurs",
          sousTitre: "Chez le fromager",
          etape: "comprendre",
          duree: "10 min",
          doc: "e2",
          consigne: "Écoute la conversation une première fois, sans t’arrêter. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "Où se passe la scène ?",
              options: ["Dans une boulangerie", "Chez un fromager", "Au restaurant"],
              answer: 1,
              explication: "Le commerçant propose des fromages et ne vend pas de pain."
            },
            {
              q: "Pourquoi Mei fait-elle des courses ?",
              options: ["Pour un réveillon chez des amis", "Pour son anniversaire", "Pour un pique-nique"],
              answer: 0,
              explication: "« Je suis invitée chez des amis pour le réveillon. »"
            },
            {
              q: "Quel est le problème de Mei ?",
              options: [
                "Elle n’a pas assez d’argent.",
                "Elle ne connaît pas bien les fromages français.",
                "Elle est en retard."
              ],
              answer: 1,
              explication: "« Je ne connais pas encore très bien les fromages français ! »"
            },
            {
              q: "Comment se passe l’échange ?",
              options: [
                "Le fromager est impatient.",
                "Mei repart mécontente.",
                "Le fromager conseille Mei, et elle est satisfaite."
              ],
              answer: 2,
              explication: "Il propose, fait goûter, s’adapte à ses goûts ; Mei dit « délicieux » et « parfait »."
            }
          ]
        },
        {
          id: "a1",
          type: "qcm",
          titre: "Informations précises",
          sousTitre: "Un message pour le réveillon",
          etape: "reperer",
          duree: "15 min",
          doc: "e1",
          consigne: "Mei reçoit un message vocal de son amie Claire. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Où aura lieu le réveillon ?",
              options: ["Chez les parents de Claire, à Lyon", "Chez Claire, à Paris", "Au restaurant"],
              answer: 0,
              explication: "« On fête le réveillon chez mes parents, à Lyon. »"
            },
            {
              q: "Que prépare Claire ?",
              options: ["La dinde", "La bûche", "Le fromage"],
              answer: 1,
              explication: "Sa mère fait la dinde, son frère le fromage."
            },
            {
              q: "Qu’est-ce que les parents de Claire aimeraient ?",
              options: ["Que Mei vienne en voiture", "Que Mei apporte du vin", "Goûter les raviolis de Mei"],
              answer: 2,
              explication: "« Mes parents seraient ravis de goûter tes raviolis ! » Le conditionnel rend la demande polie."
            },
            {
              q: "Comment Mei viendra-t-elle ?",
              options: ["En train, et Claire viendra la chercher à la gare", "En bus", "À pied"],
              answer: 0,
              explication: "« Prends le train de dix-sept heures douze, je viendrai te chercher à la gare. »"
            },
            {
              q: "Quel conseil culturel Claire donne-t-elle ?",
              options: ["Apporter des fleurs", "Se faire la bise, même la première fois", "Enlever ses chaussures"],
              answer: 1,
              explication: "La bise est très courante entre amis et en famille en France."
            }
          ]
        },
        {
          id: "eco2",
          type: "saisie",
          titre: "Prise de notes",
          sousTitre: "La liste du fromager",
          etape: "reperer",
          duree: "15 min",
          doc: "e2",
          consigne: "Réécoute la conversation et note ce que Mei achète, avec les quantités. Quelques mots suffisent (pas de phrases complètes).",
          libelle: "",
          items: [
            {
              avant: "Nombre d’invités :",
              cles: ["dizaine|dix|10"],
              reponses: ["une dizaine"],
              explication: "« Vous serez combien ? — Une dizaine. »"
            },
            {
              avant: "Quantité par personne :",
              cles: ["cinquante|50"],
              reponses: ["environ cinquante grammes"],
              explication: "« Comptez environ cinquante grammes par personne. »"
            },
            {
              avant: "Fromage n° 1 :",
              cles: ["comte", "deux cents|200"],
              reponses: ["deux cents grammes de comté"],
              explication: "« Un morceau de comté […] Deux cents grammes, ça vous va ? »"
            },
            {
              avant: "Fromage n° 2 :",
              cles: ["chevre"],
              reponses: ["un chèvre frais"],
              explication: "« Celui-ci est frais et un peu acide […] J’en prends un. »"
            },
            {
              avant: "Fromage refusé :",
              cles: ["roquefort"],
              reponses: ["le roquefort, trop fort pour elle"],
              explication: "« Et un peu de roquefort ? […] Non merci, je préfère éviter. »"
            },
            {
              avant: "Fromage n° 3 :",
              cles: ["brie", "quart"],
              reponses: ["un quart de brie de Meaux"],
              explication: "« J’ai un brie de Meaux […] Un quart, ça suffit ? — Parfait. »"
            },
            {
              avant: "Pain :",
              cles: ["boulangerie"],
              reponses: ["à acheter à la boulangerie d’à côté"],
              explication: "« Je ne vends pas de pain. Mais la boulangerie est juste à côté. »"
            },
            {
              avant: "Prix total :",
              cles: ["dix-huit|18"],
              reponses: ["dix-huit euros quarante"],
              explication: "« Ça vous fera dix-huit euros quarante. »"
            }
          ]
        },
        {
          id: "eco3",
          type: "qcm",
          titre: "Informations précises",
          sousTitre: "Le Nouvel An dans le treizième",
          etape: "reperer",
          duree: "15 min",
          doc: "e3",
          consigne: "Écoute ce reportage radio. Trois personnes parlent : une journaliste, un commerçant et une jeune Parisienne. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Où se trouve la journaliste ?",
              options: ["Dans le treizième arrondissement de Paris", "À Tianjin", "Dans un studio de radio"],
              answer: 0,
              explication: "« Je suis dans le treizième arrondissement de Paris. »"
            },
            {
              q: "Pourquoi achète-t-on du niangao pour le Nouvel An ?",
              options: [
                "Parce que c’est le gâteau le moins cher",
                "Parce que son nom ressemble à « chaque année plus haut »",
                "Parce qu’il se conserve longtemps"
              ],
              answer: 1,
              explication: "Encore un jeu de sons : 年糕 (gâteau de l’année) ressemble à 年高 (plus haut chaque année)."
            },
            {
              q: "Pourquoi beaucoup de clients commandent-ils des plateaux tout prêts ?",
              options: [
                "Ils n’aiment pas la cuisine chinoise.",
                "Ils sont trop nombreux à table.",
                "Ils travaillent tard et n’ont plus le temps de cuisiner pendant trois jours."
              ],
              answer: 2,
              explication: "« Ils travaillent tard, ils n’ont plus le temps de cuisiner pendant trois jours, comme leurs parents. »"
            },
            {
              q: "Qu’est-ce qui fait plaisir à M. Chen ?",
              options: [
                "Avoir de plus en plus de clients français",
                "Fermer sa boutique plus tôt",
                "Vendre des bûches"
              ],
              answer: 0,
              explication: "« Ce qui me fait plaisir, c’est que j’ai de plus en plus de clients français. »"
            },
            {
              q: "Comment Apolline a-t-elle découvert le Nouvel An chinois ?",
              options: [
                "Pendant un voyage en Chine",
                "Grâce à sa colocataire, qui l’a invitée chez sa tante",
                "En écoutant la radio"
              ],
              answer: 1,
              explication: "« Ma colocataire vient de Tianjin, et elle m’a invitée chez sa tante la première année. »"
            }
          ]
        },
        {
          id: "eco4",
          type: "qcm",
          titre: "Ton et sentiments",
          sousTitre: "Le Nouvel An dans le treizième",
          etape: "interpreter",
          duree: "10 min",
          doc: "e3",
          consigne: "Réécoute le reportage. Cette fois, fais attention à ce que ressentent les personnes et à la façon dont elles parlent.",
          questions: [
            {
              q: "« Ça vous rend un peu triste ? — Un peu, oui… Mais l’important, c’est qu’ils se retrouvent autour de la table. » Que ressent M. Chen ?",
              options: [
                "Une légère nostalgie, mais il reste positif",
                "Une grande colère contre ses clients",
                "De l’indifférence"
              ],
              answer: 0,
              explication: "Il regrette un peu les traditions d’avant, mais « l’important » reste positif."
            },
            {
              q: "« Les miens étaient vraiment moches, mais tout le monde a été très gentil avec moi. » Apolline parle de ses raviolis avec :",
              options: ["fierté", "humour et modestie", "tristesse"],
              answer: 1,
              explication: "Elle se moque gentiment d’elle-même (« moches » est familier) et souligne la gentillesse de la famille."
            },
            {
              q: "« Une bûche pour le Nouvel An chinois, il fallait y penser ! » La journaliste trouve l’idée :",
              options: ["ridicule", "dangereuse", "originale et amusante"],
              answer: 2,
              explication: "« Il fallait y penser » = personne n’y avait pensé avant, c’est une idée originale."
            },
            {
              q: "Quel message général donne le reportage ?",
              options: [
                "Les traditions disparaissent complètement à Paris.",
                "Les traditions changent et se mélangent, mais l’essentiel reste de se retrouver.",
                "Seules les familles chinoises fêtent le Nouvel An lunaire."
              ],
              answer: 1,
              explication: "Plateaux tout prêts, clients français, bûche franco-chinoise : la fête évolue, mais on se retrouve toujours autour de la table."
            }
          ]
        }
      ]
    },
    vocabulaire: {
      exercices: [
        {
          id: "voc1",
          type: "association",
          titre: "Définitions",
          sousTitre: "Le repas de fête",
          etape: "comprendre",
          duree: "10 min",
          consigne: "Associe chaque mot ou expression à sa définition.",
          items: [
            { terme: "l’apéritif", definition: "un verre et quelque chose à grignoter, avant le repas" },
            { terme: "l’entrée", definition: "le premier plat du repas" },
            { terme: "le plat principal", definition: "le plat le plus copieux, souvent de la viande ou du poisson" },
            { terme: "le réveillon", definition: "le grand repas du soir du 24 ou du 31 décembre" },
            { terme: "mettre la table", definition: "poser les assiettes, les verres et les couverts" },
            { terme: "trinquer", definition: "lever son verre et le toucher contre celui des autres" },
            { terme: "les restes", definition: "la nourriture qui n’a pas été mangée" },
            { terme: "un convive", definition: "une personne qui partage le repas" }
          ]
        },
        {
          id: "voc2",
          type: "qcm",
          titre: "Synonymes et contraires",
          sousTitre: "Les saveurs et les textures",
          etape: "reperer",
          duree: "10 min",
          consigne: "Pour décrire un plat, il faut parler du goût et de la texture. Choisis le synonyme, le contraire ou la définition demandée.",
          questions: [
            {
              q: "En cuisine, le contraire de « sucré » :",
              options: ["salé", "amer", "acide"],
              answer: 0,
              explication: "En cuisine, on oppose le sucré et le salé. Un plat qui mélange les deux est « sucré-salé »."
            },
            {
              q: "« Le comté est doux et fruité. » Le contraire de « doux » pour un fromage :",
              options: ["mou", "fort", "frais"],
              answer: 1,
              explication: "Un fromage doux a un goût léger ; un fromage fort (comme le roquefort) a un goût puissant."
            },
            {
              q: "Un aliment « croustillant » :",
              options: [
                "fond dans la bouche",
                "fait du bruit sous la dent, comme la croûte du pain",
                "pique la langue"
              ],
              answer: 1,
              explication: "Croustillant vient de « croûte » : les raviolis grillés sont croustillants d’un côté."
            },
            {
              q: "Un synonyme de « épicé » :",
              options: ["fade", "sucré", "relevé"],
              answer: 2,
              explication: "Un plat relevé a du goût, grâce aux épices ou au piment. « Fade » est le contraire."
            },
            {
              q: "Le contraire de « fade » :",
              options: ["savoureux", "cru", "léger"],
              answer: 0,
              explication: "Fade = sans goût. Savoureux = qui a beaucoup de goût, un bon goût."
            },
            {
              q: "Un gâteau « moelleux » est :",
              options: ["sec et dur", "tendre et un peu humide à l’intérieur", "très froid"],
              answer: 1,
              explication: "Moelleux = doux et tendre sous la dent. Le contraire est « sec »."
            },
            {
              q: "Un chocolat « fondant » :",
              options: ["est très dur", "est brûlé", "fond dans la bouche, il est très doux"],
              answer: 2,
              explication: "Fondant vient de « fondre » : il devient presque liquide dans la bouche."
            }
          ]
        },
        {
          id: "voc3",
          type: "trous",
          titre: "Le mot juste",
          sousTitre: "Les verbes et les ustensiles de la cuisine",
          etape: "reperer",
          duree: "15 min",
          fiche: "<p><strong>Éplucher</strong> : enlever la peau d’un légume ou d’un fruit. <strong>Faire revenir</strong> : faire dorer dans un peu d’huile. <strong>Farcir</strong> : remplir avec une farce. <strong>Laisser reposer</strong> : attendre sans toucher.</p><p><strong>Un fouet</strong> sert à battre, <strong>une louche</strong> à servir la soupe, <strong>une passoire</strong> à égoutter, <strong>une poêle</strong> à faire sauter.</p>",
          consigne: "Choisis le verbe ou l’ustensile qui convient.",
          phrases: [
            {
              avant: "Avant de les couper, il faut",
              options: ["éplucher", "verser", "mélanger"],
              answer: 0,
              apres: "les carottes.",
              explication: "On enlève d’abord la peau : on épluche."
            },
            {
              avant: "Faites",
              options: ["éplucher", "cuire", "verser"],
              answer: 1,
              apres: "les raviolis dans l’eau bouillante pendant cinq minutes.",
              explication: "Faire cuire : mettre sur le feu jusqu’à ce que ce soit prêt."
            },
            {
              avant: "On",
              options: ["goûte", "épluche", "farcit"],
              answer: 2,
              apres: "chaque ravioli avec une cuillère de viande et de chou.",
              explication: "Farcir = remplir avec une farce (ici, la viande et le chou)."
            },
            {
              avant: "Faites",
              options: ["rentrer", "revenir", "retourner"],
              answer: 1,
              apres: "l’ail et les oignons dans un peu d’huile.",
              explication: "« Faire revenir » est une expression de cuisine : faire dorer rapidement dans la matière grasse."
            },
            {
              avant: "Pour la sauce,",
              options: ["mélangez", "épluchez", "farcissez"],
              answer: 0,
              apres: "le vinaigre et la sauce soja.",
              explication: "On mélange deux liquides : on ne peut ni les éplucher ni les farcir."
            },
            {
              avant: "Laissez",
              options: ["dormir", "attendre", "reposer"],
              answer: 2,
              apres: "la pâte une demi-heure sous un torchon.",
              explication: "Laisser reposer une pâte : la laisser tranquille pour qu’elle devienne plus souple."
            },
            {
              avant: "Pour battre les œufs, prends",
              options: ["une louche", "un fouet", "une passoire"],
              answer: 1,
              apres: ".",
              explication: "Le fouet sert à battre (les œufs, la crème)."
            },
            {
              avant: "Pour servir la soupe, utilise",
              options: ["un fouet", "une poêle", "une louche"],
              answer: 2,
              apres: ".",
              explication: "La louche est une grande cuillère profonde, pour la soupe."
            }
          ]
        },
        {
          id: "voc4",
          type: "trous",
          titre: "Expressions dans un dialogue",
          sousTitre: "Ce qu’on dit à table",
          etape: "interpreter",
          duree: "10 min",
          regles: ["expressions-idiomatiques"],
          consigne: "Ces répliques sont dites pendant un repas de fête. Choisis l’expression qui convient à la situation.",
          phrases: [
            {
              avant: "— Voilà, le dîner est prêt. Allez, à table ! — Merci, et",
              options: ["bon appétit", "bonne santé", "bon courage"],
              answer: 0,
              apres: "à tous !",
              explication: "On dit « bon appétit » au début du repas."
            },
            {
              avant: "— On lève nos verres ? —",
              options: ["À tout à l’heure", "À la vôtre", "À votre service"],
              answer: 1,
              apres: "! Et bonne année !",
              explication: "« À la vôtre ! » (ou « À votre santé ! ») : ce qu’on dit en trinquant."
            },
            {
              avant: "— Tu veux encore un peu de bûche ? — Non merci, vraiment, je",
              options: ["n’en sais rien", "n’y pense plus", "n’en peux plus"],
              answer: 2,
              apres: ": j’ai trop mangé !",
              explication: "« Je n’en peux plus » = je suis trop fatigué ou, ici, je n’ai plus de place pour manger."
            },
            {
              avant: "— Ça sent tellement bon dans ta cuisine ! J’ai",
              options: ["l’eau à la bouche", "la tête dans les nuages", "le cœur sur la main"],
              answer: 0,
              apres: ".",
              explication: "Avoir l’eau à la bouche : avoir très envie de manger quelque chose."
            },
            {
              avant: "— Il est seulement onze heures et tu manges déjà ? — Oui, j’ai",
              options: ["le cafard", "un petit creux", "un coup de foudre"],
              answer: 1,
              apres: ".",
              explication: "Avoir un petit creux : avoir un peu faim entre deux repas."
            },
            {
              avant: "— Ta mère a préparé douze plats ! — Oui, pour le Nouvel An, elle",
              options: ["met les pieds dans le plat", "met la charrue avant les bœufs", "met les petits plats dans les grands"],
              answer: 2,
              apres: ".",
              explication: "Mettre les petits plats dans les grands : préparer un repas exceptionnel. Attention : « mettre les pieds dans le plat », c’est parler d’un sujet délicat sans précaution !"
            },
            {
              avant: "— Je te ressers ? — Avec plaisir, c’est",
              options: ["délicieux", "dégoûtant", "décevant"],
              answer: 0,
              apres: "!",
              explication: "On accepte d’être resservi parce que c’est bon."
            },
            {
              avant: "— Merci pour cette soirée, c’était parfait. — Merci à toi d’être venue ! Tu",
              options: ["as le moral à zéro", "es la bienvenue quand tu veux", "as un poil dans la main"],
              answer: 1,
              apres: ".",
              explication: "« Tu es la bienvenue quand tu veux » : une formule chaleureuse pour dire au revoir à une invitée."
            }
          ]
        },
        {
          id: "voc5",
          type: "registre",
          titre: "Registres de langue",
          sousTitre: "Bouffer, manger, se restaurer",
          etape: "interpreter",
          duree: "10 min",
          regles: ["registres-de-langue"],
          consigne: "Pour chaque phrase, choisis le registre : familier, courant ou soutenu.",
          items: [
            {
              phrase: "On a trop bien bouffé hier soir !",
              answer: "familier",
              explication: "« Bouffer » (manger) et « trop bien » sont familiers."
            },
            {
              phrase: "Nous avons très bien mangé hier soir.",
              answer: "courant",
              explication: "La même idée, en registre courant."
            },
            {
              phrase: "Le chef nous a servi des mets exquis.",
              answer: "soutenu",
              explication: "« Des mets » (des plats) et « exquis » (excellent) appartiennent au registre soutenu."
            },
            {
              phrase: "Je crève de faim, on mange quand ?",
              answer: "familier",
              explication: "« Crever de faim » est une exagération familière."
            },
            {
              phrase: "J’ai faim : à quelle heure est-ce qu’on dîne ?",
              answer: "courant",
              explication: "Phrase neutre, avec « est-ce que »."
            },
            {
              phrase: "Permettez-moi de lever mon verre à nos hôtes.",
              answer: "soutenu",
              explication: "« Permettez-moi de » et « lever son verre à » : une formule de discours soutenue."
            },
            {
              phrase: "C’est super bon, ton truc !",
              answer: "familier",
              explication: "« Super bon » et « ton truc » (ta chose) sont familiers."
            },
            {
              phrase: "Ce repas était vraiment délicieux, merci.",
              answer: "courant",
              explication: "Un compliment poli, possible avec tout le monde."
            },
            {
              phrase: "Nous serions honorés que vous partagiez notre table.",
              answer: "soutenu",
              explication: "Le conditionnel, « être honoré » et le subjonctif donnent un ton très formel."
            }
          ]
        },
        {
          id: "voc6",
          type: "ecriture",
          titre: "Réemploi",
          sousTitre: "Un plat en quelques lignes",
          etape: "reemployer",
          duree: "15 min",
          consigne: "Décris un plat que tu aimes (chinois, français ou autre) en quelques lignes, pour donner envie de le goûter. Utilise au moins cinq mots ou expressions de cette unité.",
          objectifs: [
            "Réemployer au moins cinq mots de l’unité (saveurs, textures, verbes de cuisine, expressions)",
            "Décrire le goût et la texture"
          ],
          min: 50,
          max: 100,
          checklist: [
            "J’ai utilisé au moins cinq mots ou expressions de l’unité",
            "J’ai décrit le goût (sucré, salé, épicé…)",
            "J’ai décrit la texture (croustillant, fondant, moelleux…)",
            "J’ai dit quand ou avec qui on mange ce plat"
          ],
          modele: "Mon plat préféré, ce sont les raviolis grillés de ma tante. On les farcit avec du porc et du chou, puis on les fait cuire dans une poêle avec un peu d’huile. Ils sont croustillants d’un côté et moelleux de l’autre. On les trempe dans une sauce au vinaigre noir, légèrement relevée. Rien que d’en parler, j’ai l’eau à la bouche ! Chez nous, on les mange surtout le dimanche, quand toute la famille a un petit creux après la promenade."
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "gra1",
          type: "qcm",
          titre: "Observer",
          sousTitre: "Le, un ou du : pourquoi cet article ?",
          etape: "comprendre",
          duree: "10 min",
          regles: ["articles-partitifs"],
          consigne: "Ces phrases viennent des documents de l’unité. Observe l’article et dis pourquoi on l’a choisi.",
          questions: [
            {
              q: "« Ma mère prépare la dinde. » (Claire) Pourquoi « la » ?",
              options: [
                "On parle d’une dinde précise : celle du réveillon",
                "On parle d’une quantité qu’on ne compte pas",
                "On parle de la dinde en général"
              ],
              answer: 0,
              explication: "L’article défini désigne une chose précise, connue des deux personnes : la dinde du repas de samedi."
            },
            {
              q: "« On sert aussi un poisson entier. » Pourquoi « un » ?",
              options: [
                "Le poisson est une matière qu’on ne compte pas",
                "On parle d’un poisson qu’on peut compter : un seul, entier",
                "On parle du poisson en général"
              ],
              answer: 1,
              explication: "« Entier » montre qu’on parle d’un animal entier, qu’on compte : un poisson. « Du poisson » serait une quantité, un morceau."
            },
            {
              q: "« On apporte souvent une bouteille de vin. » Pourquoi « de » ?",
              options: [
                "Parce qu’il y a une négation",
                "Parce que « vin » est féminin",
                "Parce qu’après une quantité précise (une bouteille), on emploie de"
              ],
              answer: 2,
              explication: "Après une expression de quantité (une bouteille, un kilo, beaucoup…), on emploie de."
            },
            {
              q: "« Si vous apportez du vin… » Ici, « du » indique :",
              options: ["une quantité non précisée de vin", "le vin en général", "un vin précis"],
              answer: 0,
              explication: "Du = une certaine quantité, qu’on ne précise pas."
            },
            {
              q: "« J’adore le fromage » et « Je prends du fromage » : quelle différence ?",
              options: [
                "Aucune différence",
                "Avec « adorer », on parle du fromage en général ; avec « prendre », d’une certaine quantité",
                "« Le » est plus poli que « du »"
              ],
              answer: 1,
              explication: "Verbes de goût (aimer, adorer, détester) : article défini. Verbes de consommation (prendre, manger, acheter) : partitif."
            },
            {
              q: "« Je ne vends pas de pain. » (le fromager) Pourquoi « de » ?",
              options: [
                "Parce que « pain » commence par une consonne",
                "Parce que la négation transforme « du » en « de »",
                "Parce que c’est une quantité précise"
              ],
              answer: 1,
              explication: "Je vends du pain → Je ne vends pas de pain."
            }
          ]
        },
        {
          id: "a2",
          type: "trous",
          titre: "Choisir l’article",
          sousTitre: "Du, de la, des, de : les articles partitifs",
          etape: "reperer",
          duree: "15 min",
          regles: ["articles-partitifs"],
          fiche: "<p>Pour parler d’une <strong>quantité non précisée</strong>, on utilise le partitif : <em>du</em> pain, <em>de la</em> farine, <em>de l’</em>eau, <em>des</em> raviolis.</p> <p>Après une <strong>négation</strong> ou une <strong>expression de quantité</strong>, il devient <em>de</em> (ou <em>d’</em>) : je ne mange pas <em>de</em> viande, un kilo <em>de</em> marrons, beaucoup <em>de</em> farine.</p> <p>Après les verbes de goût (<em>aimer, adorer, détester, préférer</em>), on utilise l’article défini : j’adore <em>le</em> fromage.</p>",
          consigne: "Choisis l’article qui convient.",
          phrases: [
            {
              avant: "Je voudrais",
              options: ["du", "de", "le"],
              answer: 0,
              apres: "pain, s’il vous plaît.",
              explication: "Une quantité non précisée de pain (masculin) : du."
            },
            {
              avant: "Elle ne mange pas",
              options: ["du", "de", "des"],
              answer: 1,
              apres: "viande.",
              explication: "Après une négation, le partitif devient « de »."
            },
            {
              avant: "Au Nouvel An, on prépare",
              options: ["les", "de", "des"],
              answer: 2,
              apres: "raviolis.",
              explication: "Une quantité non précisée au pluriel : des."
            },
            {
              avant: "J’adore",
              options: ["le", "du", "de"],
              answer: 0,
              apres: "fromage.",
              explication: "Après « adorer », on parle du fromage en général : article défini."
            },
            {
              avant: "Il faut beaucoup",
              options: ["des", "de", "du"],
              answer: 1,
              apres: "farine pour la pâte.",
              explication: "Après « beaucoup », on utilise « de »."
            },
            {
              avant: "Tu veux",
              options: ["de", "du", "de l’"],
              answer: 2,
              apres: "eau ?",
              explication: "Devant un nom qui commence par une voyelle : de l’."
            },
            {
              avant: "Nous avons acheté un kilo",
              options: ["de", "des", "du"],
              answer: 0,
              apres: "marrons.",
              explication: "Après une quantité précise (un kilo, une bouteille…) : de."
            },
            {
              avant: "Après le repas, on boit",
              options: ["de", "du", "le"],
              answer: 1,
              apres: "thé.",
              explication: "Une quantité non précisée de thé (masculin) : du."
            }
          ]
        },
        {
          id: "gra2",
          type: "trous",
          titre: "Les expressions de quantité",
          sousTitre: "Beaucoup de, un peu de, la plupart des",
          etape: "reperer",
          duree: "15 min",
          regles: ["expressions-de-quantite", "articles-partitifs"],
          fiche: "<p>Après une expression de quantité, on emploie <strong>de</strong> (<strong>d’</strong> devant une voyelle) : <em>beaucoup de monde, un peu de sel, deux cents grammes de comté, une gousse d’ail</em>.</p><p><strong>Exceptions</strong> : <em>la plupart des, bien des, la majorité des</em> + nom pluriel.</p><p><em>Un peu de</em> = une petite quantité (positif). <em>Peu de</em> = presque rien (négatif).</p>",
          consigne: "Choisis la forme qui convient.",
          phrases: [
            {
              avant: "Il faut deux cents grammes",
              options: ["du", "de", "des"],
              answer: 1,
              apres: "comté.",
              explication: "Après une quantité précise (deux cents grammes) : de."
            },
            {
              avant: "La plupart",
              options: ["de", "du", "des"],
              answer: 2,
              apres: "invités sont arrivés à huit heures.",
              explication: "Exception : la plupart des + nom pluriel."
            },
            {
              avant: "Ajoute une pincée",
              options: ["de", "du", "de la"],
              answer: 0,
              apres: "sel.",
              explication: "Une pincée (ce qu’on prend entre deux doigts) est une quantité : de."
            },
            {
              avant: "Il y avait",
              options: ["beaucoup des", "beaucoup du", "beaucoup de"],
              answer: 2,
              apres: "monde chez mes grands-parents.",
              explication: "Beaucoup de + nom, sans article."
            },
            {
              avant: "Tu veux",
              options: ["un peu de", "peu de", "un peu du"],
              answer: 0,
              apres: "thé ?",
              explication: "On propose une petite quantité : un peu de. « Peu de » serait négatif (presque rien)."
            },
            {
              avant: "Coupe une gousse",
              options: ["de l’", "d’", "des"],
              answer: 1,
              apres: "ail en petits morceaux.",
              explication: "Une gousse (une partie de la tête d’ail) est une quantité : d’ devant une voyelle."
            },
            {
              avant: "Il y avait",
              options: ["un peu d’", "peu d’", "assez des"],
              answer: 1,
              apres: "invités : seulement trois personnes sont venues.",
              explication: "Seulement trois personnes : c’est négatif, presque personne. Peu d’invités."
            },
            {
              avant: "Nous avons acheté",
              options: ["trop des", "trop de", "trop du"],
              answer: 1,
              apres: "gâteaux : il en reste la moitié !",
              explication: "Trop de + nom, sans article."
            },
            {
              avant: "Ma grand-mère prépare beaucoup",
              options: ["de", "des", "du"],
              answer: 1,
              apres: "plats que je n’ai jamais goûtés ailleurs.",
              explication: "Piège : le nom est précisé (les plats qu’elle prépare) ; on a donc de + les = des."
            }
          ]
        },
        {
          id: "gra3",
          type: "qcm",
          titre: "Défini, indéfini ou partitif ?",
          sousTitre: "Choisir l’article selon le sens",
          etape: "interpreter",
          duree: "10 min",
          regles: ["articles-partitifs", "expressions-de-quantite"],
          consigne: "Choisis la phrase correcte. Si tu te trompes, lis l’explication de ton erreur.",
          questions: [
            {
              q: "Au marché, tu demandes :",
              options: [
                "Je voudrais du fromage de chèvre.",
                "Je voudrais le fromage de chèvre.",
                "Je voudrais de fromage de chèvre."
              ],
              answer: 0,
              pourquoi: [
                "",
                "« Le fromage » désigne un fromage précis, déjà connu. Ici, tu veux simplement une certaine quantité.",
                "Sans négation ni expression de quantité, il faut le partitif : du."
              ],
              explication: "Une quantité non précisée : du."
            },
            {
              q: "Tu parles de tes goûts :",
              options: [
                "Je déteste du roquefort.",
                "Je déteste le roquefort.",
                "Je déteste de roquefort."
              ],
              answer: 1,
              pourquoi: [
                "Après « détester » (verbe de goût), on parle du fromage en général : article défini.",
                "",
                "« De » seul s’emploie après une négation ou une quantité, pas ici."
              ],
              explication: "Aimer, adorer, détester, préférer + article défini."
            },
            {
              q: "Tu montres ta tasse à une amie :",
              options: [
                "Ce n’est pas de thé, c’est de café.",
                "Ce n’est pas du thé, c’est du café.",
                "Ce n’est pas le thé, c’est de café."
              ],
              answer: 1,
              pourquoi: [
                "Avec le verbe être, la négation ne change pas l’article : ce n’est pas du thé.",
                "",
                "Il faut le même article des deux côtés, et « de café » seul est incorrect."
              ],
              explication: "Exception : avec être, on garde du, de la, des après la négation."
            },
            {
              q: "Ton amie te propose une boisson :",
              options: [
                "Non merci, je ne bois pas de l’alcool.",
                "Non merci, je ne bois pas l’alcool.",
                "Non merci, je ne bois pas d’alcool."
              ],
              answer: 2,
              pourquoi: [
                "Après une négation, du, de la, de l’ deviennent de (d’) : pas d’alcool.",
                "Pour parler d’une habitude, on ne dit pas « je ne bois pas l’alcool » : on dit « pas d’alcool ».",
                ""
              ],
              explication: "Je bois de l’alcool → Je ne bois pas d’alcool."
            },
            {
              q: "Tu décris le repas :",
              options: [
                "Il y avait un poisson entier au milieu de la table.",
                "Il y avait du poisson entier au milieu de la table.",
                "Il y avait de poisson entier au milieu de la table."
              ],
              answer: 0,
              pourquoi: [
                "",
                "« Entier » montre qu’on parle d’un poisson qu’on compte : un poisson, pas une quantité de poisson.",
                "Sans négation ni quantité, « de » seul est incorrect."
              ],
              explication: "Un poisson entier = un animal entier, qu’on compte."
            },
            {
              q: "Dans la recette :",
              options: [
                "Ajoutez beaucoup des sauce soja.",
                "Ajoutez beaucoup de sauce soja.",
                "Ajoutez beaucoup de la sauce soja."
              ],
              answer: 1,
              pourquoi: [
                "« Des » est un pluriel, et après « beaucoup », on emploie « de ».",
                "",
                "Après « beaucoup », on emploie « de » seul, sauf si le nom est précisé (beaucoup de la sauce que tu as préparée)."
              ],
              explication: "Beaucoup de + nom."
            }
          ]
        },
        {
          id: "gra4",
          type: "transformation",
          titre: "La négation et les articles",
          sousTitre: "Répondre non",
          etape: "interpreter",
          duree: "15 min",
          regles: ["articles-partitifs"],
          fiche: "<p>À la forme négative, <em>un, une, du, de la, de l’, des</em> deviennent <strong>de</strong> (<strong>d’</strong>) : <em>Il y a du foie gras → Il n’y a pas <strong>de</strong> foie gras. Je veux un dessert → Je ne veux pas <strong>de</strong> dessert.</em></p><p><strong>Deux exceptions</strong> : avec <em>être</em> (<em>ce n’est pas <strong>du</strong> saumon</em>) et avec l’article défini (<em>je n’aime pas <strong>le</strong> fromage</em>).</p>",
          consigne: "Réponds négativement à chaque question. Écris seulement les mots qui manquent.",
          items: [
            {
              enonce: "Il y a du foie gras au menu ?",
              avant: "Non, il n’y a",
              apres: "au menu.",
              reponses: ["pas de foie gras"],
              explication: "Du → de après la négation."
            },
            {
              enonce: "Tu as acheté des marrons ?",
              avant: "Non, je",
              apres: ".",
              reponses: ["n’ai pas acheté de marrons"],
              explication: "Des → de. Au passé composé, la négation entoure l’auxiliaire : je n’ai pas acheté."
            },
            {
              enonce: "Elle mange de la viande ?",
              avant: "Non, elle",
              apres: ".",
              reponses: ["ne mange pas de viande"],
              explication: "De la → de."
            },
            {
              enonce: "C’est du saumon fumé ?",
              aide: "Attention au verbe être.",
              avant: "Non, ce",
              apres: ", c’est de la truite.",
              reponses: ["n’est pas du saumon fumé", "n’est pas du saumon"],
              explication: "Avec être, l’article ne change pas : ce n’est pas du saumon."
            },
            {
              enonce: "Il reste de l’eau ?",
              aide: "Utilise ne… plus.",
              avant: "Non, il ne reste",
              apres: ".",
              reponses: ["plus d’eau"],
              explication: "De l’ → d’ après ne… plus."
            },
            {
              enonce: "Tu aimes le fromage ?",
              aide: "Attention au verbe de goût.",
              avant: "Non, je",
              apres: ".",
              reponses: ["n’aime pas le fromage"],
              explication: "L’article défini ne change pas à la négation."
            },
            {
              enonce: "Vous voulez un dessert ?",
              avant: "Non merci, je",
              apres: ".",
              reponses: ["ne veux pas de dessert"],
              explication: "Un → de après la négation : pas de dessert."
            }
          ]
        },
        {
          id: "gra5",
          type: "transformation",
          titre: "L’impératif et l’infinitif",
          sousTitre: "Des conseils de grand-mère au livre de recettes",
          etape: "interpreter",
          duree: "15 min",
          regles: ["imperatif"],
          fiche: "<p>À l’oral, on donne une instruction à <strong>l’impératif</strong> : <em>Épluche les carottes. Coupez le chou.</em></p><p>Dans un livre de recettes, on utilise souvent <strong>l’infinitif</strong> : <em>Éplucher les carottes. Couper le chou.</em></p><p>À la négation : <em>Ne mets pas trop de sel</em> → <em><strong>Ne pas mettre</strong> trop de sel</em>.</p>",
          consigne: "Ce sont les conseils que la grand-mère de Mei lui donne en cuisinant. Réécris-les comme dans un livre de recettes, à l’infinitif. Écris la phrase entière.",
          items: [
            {
              enonce: "Épluche les carottes.",
              reponses: ["Éplucher les carottes."],
              explication: "Épluche (impératif, tu) → éplucher (infinitif)."
            },
            {
              enonce: "Coupez le chou en petits morceaux.",
              reponses: ["Couper le chou en petits morceaux."],
              explication: "Coupez (impératif, vous) → couper."
            },
            {
              enonce: "Mélange la viande et le chou.",
              reponses: ["Mélanger la viande et le chou."],
              explication: "Mélange → mélanger."
            },
            {
              enonce: "Ne mets pas trop de sel.",
              aide: "Attention à la place de la négation.",
              reponses: ["Ne pas mettre trop de sel."],
              explication: "Avec l’infinitif, « ne pas » se place devant le verbe : ne pas mettre."
            },
            {
              enonce: "Laisse reposer la pâte trente minutes.",
              reponses: ["Laisser reposer la pâte trente minutes.", "Laisser reposer la pâte 30 minutes."],
              explication: "Laisse → laisser ; « reposer » reste à l’infinitif."
            },
            {
              enonce: "Fais cuire les raviolis dans l’eau bouillante.",
              reponses: ["Faire cuire les raviolis dans l’eau bouillante."],
              explication: "Fais (impératif irrégulier de faire) → faire."
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
          regles: ["articles-partitifs", "expressions-de-quantite", "imperatif"],
          consigne: "Chaque phrase contient une erreur. Réécris la phrase corrigée.",
          items: [
            {
              enonce: "Je ne mange pas du porc.",
              aide: "Une erreur après la négation.",
              reponses: ["Je ne mange pas de porc."],
              explication: "Après une négation : pas de porc."
            },
            {
              enonce: "Beaucoup des gens fêtent Noël en famille.",
              aide: "Une erreur après l’expression de quantité.",
              reponses: ["Beaucoup de gens fêtent Noël en famille."],
              explication: "Beaucoup de + nom, sans article."
            },
            {
              enonce: "J’adore du chocolat noir.",
              aide: "Attention au verbe de goût.",
              reponses: ["J’adore le chocolat noir."],
              explication: "Après adorer, on parle du chocolat en général : le."
            },
            {
              enonce: "La plupart de invités ont apporté du vin.",
              aide: "Une exception à connaître.",
              reponses: ["La plupart des invités ont apporté du vin."],
              explication: "La plupart des + nom pluriel."
            },
            {
              enonce: "Manges ces raviolis, ils sont délicieux !",
              aide: "Une erreur de conjugaison à l’impératif.",
              reponses: ["Mange ces raviolis, ils sont délicieux !"],
              explication: "À l’impératif, les verbes en -er perdent le s à la 2e personne du singulier : mange."
            },
            {
              enonce: "Pour la pâte, il faut un kilo de la farine.",
              aide: "Une erreur après la quantité.",
              reponses: ["Pour la pâte, il faut un kilo de farine."],
              explication: "Un kilo de + nom, sans article."
            }
          ]
        },
        {
          id: "gra7",
          type: "texteatrous",
          titre: "Texte à compléter",
          sousTitre: "La recette de ma grand-mère",
          etape: "reemployer",
          duree: "20 min",
          regles: ["articles-partitifs", "expressions-de-quantite", "imperatif"],
          consigne: "Mei traduit pour Claire la recette que sa grand-mère lui a donnée au téléphone, en gardant le tutoiement. Choisis les articles dans les listes et conjugue les verbes à l’impératif (tu).",
          texte: [
            "Pour une quarantaine de raviolis, il te faut un demi-kilo {{1}} farine, {{2}} eau tiède, trois cents grammes {{3}} porc haché, un petit chou chinois et {{4}} sauce soja. Si tu ne manges pas {{5}} viande, remplace le porc par {{6}} champignons.",
            "D’abord, {{7}} (mélanger) la farine et l’eau, puis {{8}} (laisser) reposer la pâte une demi-heure. Pendant ce temps, {{9}} (couper) le chou très fin. {{10}} (faire) attention : ne {{11}} (mettre) pas trop de sel, la sauce soja est déjà salée !",
            "Enfin, {{12}} (être) patiente : le pliage, c’est le plus difficile. Bon courage, ma chérie !"
          ],
          trous: [
            { options: ["de", "de la", "du"], answer: 0, explication: "Après une quantité (un demi-kilo) : de." },
            { options: ["de l’", "d’", "l’"], answer: 0, explication: "Une quantité non précisée d’eau, devant une voyelle : de l’." },
            { options: ["des", "de", "du"], answer: 1, explication: "Après une quantité (trois cents grammes) : de." },
            { options: ["de la", "de", "la"], answer: 0, explication: "Une quantité non précisée de sauce (féminin) : de la." },
            { options: ["de la", "de", "la"], answer: 1, explication: "Après une négation : de." },
            { options: ["de", "des", "les"], answer: 1, explication: "Une quantité non précisée, au pluriel : des." },
            { indice: "mélanger", reponses: ["mélange"], explication: "Verbe en -er à l’impératif (tu) : pas de s." },
            { indice: "laisser", reponses: ["laisse"], explication: "Laisse, sans s." },
            { indice: "couper", reponses: ["coupe"], explication: "Coupe, sans s." },
            { indice: "faire", reponses: ["Fais"], explication: "Faire → fais (comme au présent)." },
            { indice: "mettre", reponses: ["mets"], explication: "Mettre → mets. À la négation : ne mets pas." },
            { indice: "être", reponses: ["sois"], explication: "Être est irrégulier à l’impératif : sois, soyons, soyez." }
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
          sousTitre: "Un menu qui donne faim",
          etape: "interpreter",
          duree: "25 min",
          regles: ["articles-partitifs", "expressions-de-quantite"],
          consigne: "Ce texte décrit un repas de Nouvel An, mais il est plat : « il y a » et « c’est bon » reviennent sans cesse. Réécris-le pour donner envie : précise les ingrédients, le goût et la texture, et organise la description.",
          depart: "Pour le Nouvel An, il y a du poulet. Il y a du poisson. Il y a des raviolis. Il y a des légumes. Il y a un gâteau. C’est bon. C’est bon aussi.",
          objectifs: [
            "Remplacer « il y a » par des verbes variés : on sert, on prépare, arrive, est accompagné de…",
            "Décrire le goût et la texture avec au moins quatre adjectifs différents",
            "Utiliser correctement partitifs et expressions de quantité",
            "Organiser le texte : d’abord, ensuite, enfin"
          ],
          min: 80,
          max: 140,
          checklist: [
            "« Il y a » n’apparaît plus qu’une fois au maximum",
            "J’ai utilisé au moins quatre adjectifs de goût ou de texture",
            "J’ai précisé des ingrédients avec des partitifs ou des quantités",
            "Mon texte suit l’ordre du repas (d’abord, ensuite, enfin)",
            "J’ai remplacé « c’est bon » par des mots plus précis"
          ],
          modele: "Pour le Nouvel An, ma famille met les petits plats dans les grands. D’abord, on sert des raviolis au porc et au chou, croustillants d’un côté et moelleux de l’autre. Ensuite arrive un poisson entier, cuit à la vapeur avec un peu de gingembre et beaucoup de ciboule : sa chair est fondante. Il est accompagné d’un poulet au soja, légèrement sucré, et de légumes verts sautés à l’ail. Enfin, pour le dessert, ma tante apporte un gâteau de riz gluant, très sucré. Tout est savoureux, et à la fin du repas, plus personne n’a de petit creux !"
        },
        {
          id: "ecr2",
          type: "ecriture",
          titre: "Une recette",
          sousTitre: "Pour le blog de la classe",
          etape: "reemployer",
          duree: "30 min",
          regles: ["imperatif", "expressions-de-quantite"],
          consigne: "La classe de français prépare un blog de recettes du monde. Écris la recette d’un plat que tu sais préparer : la liste des ingrédients avec les quantités, puis les étapes, et un conseil pour finir. Pour les étapes, choisis un seul mode : l’infinitif (comme dans un livre) ou l’impératif (comme un conseil à une amie).",
          objectifs: [
            "Donner les ingrédients avec des quantités précises",
            "Écrire les étapes à l’infinitif ou à l’impératif, sans mélanger",
            "Réemployer les verbes de la cuisine"
          ],
          min: 90,
          max: 150,
          checklist: [
            "Ma recette a un titre et le nombre de personnes",
            "Les ingrédients ont des quantités (grammes, cuillères, pincée…)",
            "Les étapes sont toutes à l’infinitif ou toutes à l’impératif",
            "J’ai utilisé au moins quatre verbes de cuisine différents",
            "J’ai ajouté un conseil ou une astuce à la fin"
          ],
          modele: "Tomates sautées aux œufs (pour deux personnes)\n\nIngrédients : quatre œufs, trois tomates bien mûres, une cuillère à soupe d’huile, une pincée de sel, une cuillère à café de sucre et un peu de ciboule.\n\nÉtapes :\nCouper les tomates en morceaux.\nBattre les œufs avec une pincée de sel.\nFaire chauffer l’huile dans une poêle, puis verser les œufs. Les remuer doucement et les retirer quand ils sont encore moelleux.\nFaire revenir les tomates quelques minutes, ajouter le sucre, puis remettre les œufs dans la poêle.\nMélanger, parsemer de ciboule et servir aussitôt, avec du riz.\n\nMon conseil : ne pas trop cuire les œufs. Ce plat très simple est le premier que ma mère m’a appris !"
        },
        {
          id: "a3",
          type: "ecriture",
          titre: "Un courriel amical",
          sousTitre: "Raconter le Nouvel An à une amie",
          etape: "reemployer",
          duree: "40 min",
          regles: ["articles-partitifs", "connecteurs-logiques"],
          consigne: "Ton amie française Claire te demande comment se passe le Nouvel An chinois dans ta famille. Écris-lui un courriel : les préparatifs, le repas, une tradition que tu aimes particulièrement.",
          objectifs: [
            "Décrire des habitudes au présent",
            "Employer correctement les articles partitifs",
            "Expliquer en français les mots chinois"
          ],
          min: 120,
          max: 170,
          checklist: [
            "Un ton amical et le tutoiement",
            "Le présent pour décrire les habitudes",
            "Au moins trois articles partitifs bien employés",
            "Des mots pour organiser : d’abord, ensuite, enfin",
            "J’explique en français au moins un mot chinois",
            "Une formule finale amicale"
          ],
          modele: "Salut Claire,\n\nMerci pour ta question ! Chez nous, le Nouvel An est la fête la plus importante de l’année.\n\nD’abord, quelques jours avant, on fait un grand ménage pour chasser la malchance, puis on colle des papiers rouges sur la porte. Le soir de la veille, toute la famille se réunit chez mes grands-parents. On prépare ensemble des jiaozi, des raviolis farcis de porc et de chou. Ma grand-mère cache parfois une pièce dans l’un d’eux : celui qui la trouve aura de la chance toute l’année !\n\nEnsuite, on dîne autour d’une grande table. Il y a toujours du poisson, parce que son nom ressemble au mot « abondance », et beaucoup de légumes. Enfin, vers minuit, on regarde le grand spectacle de la télévision et on reçoit des hongbao, des enveloppes rouges avec de l’argent.\n\nEt toi, tu viens fêter ça avec nous l’an prochain ?\n\nBises,\nMei"
        },
        {
          id: "ecr3",
          type: "ecriture",
          titre: "Texte long",
          sousTitre: "Présenter un menu de fête",
          etape: "reemployer",
          duree: "45 min",
          regles: ["articles-partitifs", "expressions-de-quantite"],
          consigne: "L’association franco-chinoise de ton université organise un dîner du Nouvel An lunaire, ouvert aux étudiants français. On te demande de rédiger la présentation du menu pour la brochure : présente chaque plat (ingrédients, goût, symbole), puis donne aux invités deux ou trois conseils pour bien profiter de la soirée.",
          objectifs: [
            "Présenter au moins quatre plats, dans l’ordre du repas",
            "Décrire ingrédients, goût et texture avec le vocabulaire de l’unité",
            "Expliquer les symboles, sans clichés",
            "Donner des conseils avec des formes variées"
          ],
          min: 150,
          max: 210,
          checklist: [
            "Mon texte a un titre et une courte introduction",
            "J’ai présenté au moins quatre plats",
            "Pour chaque plat : au moins un ingrédient et un adjectif de goût ou de texture",
            "J’ai expliqué au moins deux symboles",
            "J’ai donné au moins deux conseils aux invités",
            "Les partitifs et les quantités sont corrects"
          ],
          modele: "Le menu de notre dîner du Nouvel An\n\nCette année, nous vous invitons à partager le repas le plus important du calendrier chinois. Voici ce qui vous attend !\n\nPour commencer, des raviolis au porc et au chou, que nous plierons avec vous. Leur forme rappelle les anciens lingots d’or : ils annoncent une année prospère. Ensuite, un poisson entier cuit à la vapeur, avec du gingembre et de la ciboule. Sa chair est fondante, et en chinois, son nom se prononce comme le mot « surplus ». Il sera accompagné de légumes sautés à l’ail et de riz blanc.\n\nPour le dessert, vous goûterez des tangyuan, de petites boules de riz gluant fourrées au sésame noir, servies dans un bouillon sucré. Leur forme ronde symbolise la famille réunie.\n\nQuelques conseils : venez le ventre vide, car les plats arrivent tous en même temps et chacun se sert au centre de la table. N’hésitez pas à essayer les baguettes, même si vous n’êtes pas expert ! Et pensez à souhaiter « xin nian kuai le », bonne année, à vos voisins de table."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "ora1",
          type: "oral",
          titre: "Réponse d’une minute",
          sousTitre: "Porter un toast",
          etape: "reemployer",
          duree: "15 min",
          situation: "C’est le réveillon chez les parents de Claire. Au moment du dessert, le père de Claire te dit : « Mei, tu veux dire quelques mots ? »",
          consigne: "Lève ton verre et prends la parole pendant une minute : remercie tes hôtes, dis ce que tu as aimé dans le repas, compare avec une fête que tu connais, puis fais un vœu pour la nouvelle année.",
          dureeCible: "1 minute",
          prepMinutes: 1,
          preparation: [
            "Je voudrais d’abord vous remercier pour…",
            "J’ai beaucoup aimé…, surtout…",
            "Chez moi, pour…, on…",
            "Ce que je retiens, c’est que…",
            "Je lève mon verre à…",
            "À votre santé ! À la vôtre !"
          ],
          checklist: [
            "J’ai remercié mes hôtes",
            "J’ai cité au moins deux plats avec un adjectif",
            "J’ai fait une comparaison avec une fête que je connais",
            "J’ai terminé par un vœu et une formule pour trinquer",
            "J’ai parlé environ une minute, sans lire"
          ],
          modele: "Je voudrais d’abord vous remercier pour cette magnifique soirée. Pour moi, c’est mon premier réveillon de Noël, et vous m’avez accueillie comme une membre de la famille. J’ai beaucoup aimé la dinde aux marrons, et surtout la bûche de Claire, très fondante ! Chez moi, pour le Nouvel An, on reste aussi à table pendant des heures, mais tous les plats arrivent en même temps. Ce que je retiens, c’est que, dans les deux pays, le plus important, c’est d’être ensemble. Alors, je lève mon verre à vous tous, et je vous souhaite une année pleine de bonheur et de bons repas. À votre santé !"
        },
        {
          id: "a4",
          type: "oral",
          titre: "Présenter",
          sousTitre: "Présenter un plat de fête",
          etape: "reemployer",
          duree: "20 min",
          consigne: "Présente à des amis français un plat de fête que tu aimes, en Chine ou ailleurs : son nom, ses ingrédients, quand on le mange, ce qu’il symbolise et pourquoi tu l’aimes.",
          prepMinutes: 1,
          preparation: [
            "Je voudrais vous présenter…",
            "C’est un plat qu’on mange surtout pour…",
            "Il est fait avec…, du…, de la…",
            "On dit que… / Il symbolise…",
            "Chez moi, …",
            "Pour moi, ce plat représente…"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "Je voudrais vous présenter les tangyuan. Ce sont de petites boules de riz gluant, souvent fourrées au sésame noir, qu’on sert dans un bouillon sucré. On les mange surtout pour la fête des Lanternes, le quinzième jour du Nouvel An. Leur forme ronde symbolise la réunion de la famille. Chez moi, ma grand-mère les préparait avec nous : on roulait la pâte dans nos mains, et c’était toujours un moment très joyeux. Pour moi, ce plat représente la douceur et les retrouvailles. Si vous en trouvez dans une épicerie asiatique, goûtez-les bien chauds !",
          checklist: [
            "J’ai nommé et décrit le plat",
            "J’ai cité les ingrédients avec des partitifs",
            "J’ai dit quand on le mange",
            "J’ai expliqué un symbole ou une tradition",
            "J’ai donné mon avis personnel",
            "Le navigateur a compris la plupart de mes mots"
          ]
        },
        {
          id: "ora2",
          type: "oral",
          titre: "Décrire et commenter",
          sousTitre: "Une table de fête",
          etape: "reemployer",
          duree: "20 min",
          consigne: "Choisis une photo d’un repas de fête que tu as vécu (sur ton téléphone ou dans ta mémoire). Décris la table : les plats, leur place, les personnes, l’ambiance. Puis dis ce qui serait différent à une table de fête française.",
          dureeCible: "1 minute 30 à 2 minutes",
          prepMinutes: 1,
          preparation: [
            "Sur cette photo, on voit…",
            "Au centre de la table, il y a…",
            "À gauche / à droite, on aperçoit…",
            "On sent que l’ambiance est…",
            "À une table française, en revanche, …",
            "Ce que je préfère, c’est…"
          ],
          checklist: [
            "J’ai décrit au moins trois plats avec des partitifs ou des quantités",
            "J’ai situé les éléments (au centre, à gauche, devant…)",
            "J’ai parlé des personnes et de l’ambiance",
            "J’ai comparé avec une table française",
            "J’ai parlé au moins une minute trente"
          ],
          modele: "Sur cette photo, on voit la table du Nouvel An chez mes grands-parents, l’année dernière. Au centre de la table, il y a un grand poisson entier, entouré de plusieurs assiettes : des raviolis, du poulet au soja, des légumes verts et des crevettes. Il y a aussi beaucoup de petits bols de sauce, et chacun a ses baguettes. À gauche, on aperçoit mon grand-père qui sert du thé à ma tante ; à droite, mes cousins regardent leur téléphone, comme toujours ! On sent que l’ambiance est bruyante et joyeuse : tout le monde parle en même temps. À une table de fête française, en revanche, les plats arriveraient un par un, et chacun aurait son assiette. Il y aurait sûrement du fromage et du vin. Ce que je préfère, chez nous, c’est de goûter un peu de tout en même temps."
        },
        {
          id: "ora3",
          type: "oral",
          titre: "Jeu de rôle",
          sousTitre: "Chez le commerçant",
          etape: "reemployer",
          duree: "20 min",
          situation: "Tu prépares un dîner pour six amis. Tu vas au marché, chez un primeur (un marchand de fruits et légumes) ou chez un traiteur. Le commerçant te demande ce que tu veux, te propose des produits et te dit le prix.",
          consigne: "Joue ton rôle de cliente : salue, explique ce que tu prépares, demande au moins quatre produits avec des quantités précises, demande un conseil, refuse poliment une proposition, puis paie et remercie.",
          dureeCible: "1 minute 30",
          prepMinutes: 1,
          plan: ["Saluer et expliquer ton projet", "Demander les produits avec les quantités", "Demander un conseil", "Refuser poliment une proposition", "Payer et remercier"],
          preparation: [
            "Bonjour, je voudrais…",
            "Il me faudrait un kilo de…, deux cents grammes de…",
            "Qu’est-ce que vous me conseillez pour… ?",
            "Non merci, je n’en ai pas besoin.",
            "Ce sera tout. Je vous dois combien ?",
            "Merci, bonne journée !"
          ],
          checklist: [
            "J’ai salué et expliqué ce que je prépare",
            "J’ai demandé au moins quatre produits avec des quantités",
            "J’ai demandé un conseil",
            "J’ai refusé poliment une proposition",
            "J’ai utilisé « je voudrais » ou « il me faudrait »",
            "J’ai demandé le prix et remercié"
          ],
          modele: "Bonjour madame ! Je prépare un dîner pour six amis ce soir, et je voudrais faire une soupe et des légumes sautés. Il me faudrait d’abord un kilo de carottes et un beau chou chinois. Je voudrais aussi deux cents grammes de champignons et un peu de gingembre, s’il vous plaît. … Des poireaux ? Non merci, je n’en ai pas besoin, j’en ai déjà à la maison. Par contre, qu’est-ce que vous me conseillez comme fruits pour le dessert ? … Des clémentines ? Très bonne idée, j’en prends un kilo. Ce sera tout. Je vous dois combien ? … Voilà, merci beaucoup, bonne journée !"
        }
      ]
    }
  }
});
