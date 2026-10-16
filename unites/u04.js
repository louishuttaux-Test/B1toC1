/* Unité 4 : Vivre entre deux cultures (B1) — enrichie selon CHARTE.md (lot 2-4).
   Les exercices d’origine gardent leurs ids (a0 … a4) : la progression déjà enregistrée est conservée.
   Nouveaux ids : lec, eco, voc, gra, ecr, ora + numéro. Ne jamais renommer un id existant.
   Pronoms en et y : emplois simples seulement (l’impératif et les deux verbes sont réservés à l’unité 8). */
ajouterUnite({
  id: 4,
  niveau: "b1",
  theme: "Vie quotidienne",
  chine: true,
  titre: "Vivre entre deux cultures",
  objectif: "Comparer des habitudes, dire ce qui a changé, parler de ses surprises et donner des conseils ; employer en, y et les négations.",
  enrichie: true,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Six mois en France : ce qui m’a surprise",
          genre: "Témoignage",
          format: "long",
          texte: [
            "Je m’appelle Lin, j’ai vingt-quatre ans et je viens de Hangzhou. Il y a six mois, je suis arrivée à Bordeaux pour faire un master de commerce. Avant de partir, j’avais lu beaucoup de choses sur la France, mais la vie quotidienne m’a quand même réservé quelques surprises.",
            "D’abord, les horaires. En Chine, je déjeunais vers midi et je dînais vers six heures. Ici, beaucoup de gens dînent à huit heures, et parfois plus tard ! Les premiers temps, j’avais faim tout l’après-midi. Ensuite, le dimanche : presque tous les magasins sont fermés. À Hangzhou, je faisais mes courses n’importe quand, même tard le soir, et je commandais tout sur mon téléphone. Ici, j’ai appris à m’organiser.",
            "La bise m’a aussi beaucoup étonnée. Quand ma colocataire m’a présenté ses amis, chacun m’a fait deux bises sur les joues. Je ne savais pas quoi faire ! Aujourd’hui, je m’y suis habituée, même si je préfère encore serrer la main au travail.",
            "Ce qui me manque le plus ? La cuisine de ma mère, bien sûr, et la rapidité de tout : en France, il faut parfois attendre plusieurs semaines pour un rendez-vous chez le médecin. Mais j’aime la lenteur des repas, les longues discussions en terrasse et les marchés du samedi. Finalement, je crois que je deviens un peu bordelaise !"
          ]
        },
        d2: {
          titre: "Le mal du pays, comment vous faites ?",
          genre: "Forum d’étudiants internationaux",
          format: "court",
          texte: [
            "<strong>Xiaowen</strong> : Je suis à Rennes depuis deux mois. Tout se passe bien, mais le soir, je pense souvent à ma famille et à ma ville, Kunming. Je n’en parle pas à mes amis d’ici : j’ai peur de les ennuyer. Vous aussi, vous avez eu le mal du pays ? Qu’est-ce qui vous a aidés ?",
            "<strong>Maude</strong> : Oh oui ! Je viens de Montréal, et pourtant on parle la même langue… Au début, je n’y croyais pas : je me sentais étrangère alors que je comprenais tout ! Ce qui m’a aidée, c’est le sport. Je me suis inscrite dans un club de course, et j’y ai rencontré mes meilleurs amis.",
            "<strong>Ousmane</strong> : Moi, je viens de Dakar. En lisant ton message, je me suis reconnu. Mon conseil : parle de ton pays autour de toi ! Mes colocataires m’ont posé plein de questions sur le Sénégal, et maintenant, je leur cuisine un thiéboudiène une fois par mois. Ils en redemandent !",
            "<strong>Xiaowen</strong> : Merci à vous deux ! Samedi, j’ai invité ma voisine à goûter des nouilles de Kunming. Elle a adoré, et elle m’a demandé la recette. Je crois que je commence à m’habituer à cette vie rennaise !"
          ]
        }
      },
      exercices: [
        {
          id: "lec1",
          type: "qcm",
          titre: "Compréhension globale",
          sousTitre: "Six mois en France : l’essentiel",
          etape: "comprendre",
          duree: "10 min",
          doc: "d1",
          consigne: "Lis le texte une première fois, sans t’arrêter sur les mots inconnus. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "Qui écrit ce texte ?",
              options: [
                "Une étudiante chinoise installée à Bordeaux depuis six mois",
                "Une journaliste française",
                "La colocataire de Lin"
              ],
              answer: 0,
              explication: "« Je m’appelle Lin […] je viens de Hangzhou. Il y a six mois, je suis arrivée à Bordeaux. »"
            },
            {
              q: "Quel est le sujet du texte ?",
              options: [
                "Ses études de commerce",
                "Les surprises de sa vie quotidienne en France",
                "La cuisine de sa mère"
              ],
              answer: 1,
              explication: "Le titre et le premier paragraphe l’annoncent : la vie quotidienne lui a « réservé quelques surprises »."
            },
            {
              q: "Comment Lin se sent-elle aujourd’hui ?",
              options: [
                "Elle regrette d’être venue.",
                "Elle veut rentrer en Chine.",
                "Elle s’adapte peu à peu et apprécie sa nouvelle vie."
              ],
              answer: 2,
              explication: "Elle dit ce qui lui manque, mais aussi ce qu’elle aime, et conclut : « je deviens un peu bordelaise »."
            },
            {
              q: "Quel type de texte est-ce ?",
              options: ["Un témoignage personnel", "Un guide pratique officiel", "Une lettre de réclamation"],
              answer: 0,
              explication: "Lin parle d’elle, à la première personne, de son expérience."
            }
          ]
        },
        {
          id: "a0",
          type: "qcm",
          titre: "Questions détaillées",
          sousTitre: "Six mois en France : les détails",
          etape: "reperer",
          duree: "15 min",
          doc: "d1",
          consigne: "Relis le texte. Réponds aux questions en cherchant dans le texte la phrase qui donne la réponse.",
          questions: [
            {
              q: "Pourquoi Lin est-elle venue en France ?",
              options: ["Pour travailler", "Pour faire un master de commerce", "Pour rejoindre sa famille"],
              answer: 1,
              explication: "« Je suis arrivée à Bordeaux pour faire un master de commerce. »"
            },
            {
              q: "Qu’est-ce qui l’a surprise au sujet des repas ?",
              options: [
                "Les Français mangent très vite.",
                "Les Français ne déjeunent pas.",
                "Les Français dînent tard."
              ],
              answer: 2,
              explication: "« Beaucoup de gens dînent à huit heures, et parfois plus tard ! »"
            },
            {
              q: "Pourquoi a-t-elle dû apprendre à s’organiser ?",
              options: [
                "Parce que les magasins sont fermés le dimanche",
                "Parce qu’elle n’a pas de téléphone",
                "Parce qu’elle travaille le week-end"
              ],
              answer: 0,
              explication: "À Hangzhou, elle faisait ses courses à toute heure."
            },
            {
              q: "Que pense-t-elle de la bise aujourd’hui ?",
              options: [
                "Elle la refuse toujours.",
                "Elle s’y est habituée, mais préfère serrer la main au travail.",
                "Elle la fait à tout le monde, même au travail."
              ],
              answer: 1,
              explication: "« Je m’y suis habituée » : y remplace « à la bise »."
            },
            {
              q: "« Je deviens un peu bordelaise » signifie :",
              options: [
                "Je travaille dans le vin.",
                "Je veux quitter Bordeaux.",
                "Je m’intègre à la vie de Bordeaux."
              ],
              answer: 2,
              explication: "Elle adopte peu à peu les habitudes de la ville."
            }
          ]
        },
        {
          id: "lec2",
          type: "qcm",
          titre: "Connecteurs et structure",
          sousTitre: "Le plan du témoignage",
          etape: "reperer",
          duree: "10 min",
          doc: "d1",
          regles: ["connecteurs-logiques"],
          consigne: "Observe comment Lin organise son témoignage. Choisis la bonne réponse.",
          questions: [
            {
              q: "« D’abord, les horaires. » Avec « d’abord », Lin :",
              options: [
                "commence une liste de surprises",
                "conclut son texte",
                "s’oppose à ce qui précède"
              ],
              answer: 0,
              explication: "« D’abord » annonce le premier élément d’une liste."
            },
            {
              q: "Quels mots annoncent les surprises suivantes ?",
              options: ["« finalement » et « mais »", "« ensuite » et « aussi »", "« pourtant » et « donc »"],
              answer: 1,
              explication: "« Ensuite, le dimanche » ; « La bise m’a aussi beaucoup étonnée »."
            },
            {
              q: "« J’avais lu beaucoup de choses sur la France, mais la vie quotidienne m’a quand même réservé quelques surprises. » Ici, « quand même » signifie :",
              options: ["en même temps", "à cause de ses lectures", "malgré ce qu’elle avait lu"],
              answer: 2,
              explication: "Elle s’était préparée, et pourtant elle a été surprise : « quand même » = malgré cela."
            },
            {
              q: "« Je m’y suis habituée, même si je préfère encore serrer la main au travail. » « Même si » apporte :",
              options: [
                "une nuance : tout n’a pas changé",
                "une cause",
                "un exemple"
              ],
              answer: 0,
              explication: "« Même si » introduit une concession : elle s’est habituée, mais pas complètement."
            },
            {
              q: "« Finalement, je crois que je deviens un peu bordelaise ! » « Finalement » introduit :",
              options: ["une nouvelle surprise", "la conclusion de son expérience", "un regret"],
              answer: 1,
              explication: "Après les surprises et ce qui lui manque, Lin tire une conclusion positive."
            }
          ]
        },
        {
          id: "lec3",
          type: "qcm",
          titre: "Questions détaillées",
          sousTitre: "Qui dit quoi sur le forum ?",
          etape: "reperer",
          duree: "15 min",
          doc: "d2",
          consigne: "Lis les messages du forum. Trois étudiants venus d’ailleurs parlent du mal du pays. Réponds aux questions.",
          questions: [
            {
              q: "Pourquoi Xiaowen ne parle-t-elle pas de sa tristesse à ses amis ?",
              options: [
                "Elle n’a pas encore d’amis.",
                "Elle a peur de les ennuyer.",
                "Ses amis ne parlent pas chinois."
              ],
              answer: 1,
              explication: "« Je n’en parle pas à mes amis d’ici : j’ai peur de les ennuyer. »"
            },
            {
              q: "Qu’est-ce qui a surpris Maude ?",
              options: [
                "Ne pas comprendre le français de France",
                "Se sentir étrangère alors qu’elle comprenait tout",
                "Ne trouver aucun club de sport"
              ],
              answer: 1,
              explication: "« Je me sentais étrangère alors que je comprenais tout ! »"
            },
            {
              q: "Où Maude a-t-elle rencontré ses meilleurs amis ?",
              options: ["Dans un club de course", "À l’université", "Sur le forum"],
              answer: 0,
              explication: "« Je me suis inscrite dans un club de course, et j’y ai rencontré mes meilleurs amis. »"
            },
            {
              q: "Que fait Ousmane une fois par mois ?",
              options: [
                "Il rentre à Dakar.",
                "Il appelle sa famille.",
                "Il cuisine un plat sénégalais pour ses colocataires."
              ],
              answer: 2,
              explication: "« Je leur cuisine un thiéboudiène une fois par mois. » Le thiéboudiène est un plat de riz et de poisson."
            },
            {
              q: "Qu’a fait Xiaowen après avoir lu les réponses ?",
              options: [
                "Elle a invité sa voisine à goûter des nouilles de Kunming.",
                "Elle s’est inscrite dans un club de course.",
                "Elle est rentrée en Chine pour les vacances."
              ],
              answer: 0,
              explication: "« Samedi, j’ai invité ma voisine à goûter des nouilles de Kunming. »"
            }
          ]
        },
        {
          id: "lec4",
          type: "qcm",
          titre: "Lire entre les lignes",
          sousTitre: "Ce que les messages veulent dire",
          etape: "interpreter",
          duree: "10 min",
          doc: "d2",
          regles: ["pronoms-en-y"],
          consigne: "Relis le forum. Trouve ce que remplacent les petits mots en et y, puis ce que les personnes veulent faire comprendre.",
          questions: [
            {
              q: "« Je n’en parle pas à mes amis d’ici. » « En » renvoie à :",
              options: [
                "Rennes",
                "ce qu’elle ressent quand elle pense à sa famille et à sa ville",
                "ses études"
              ],
              answer: 1,
              explication: "Parler de quelque chose → en parler. Elle ne parle pas de sa tristesse du soir."
            },
            {
              q: "« Je viens de Montréal, et pourtant on parle la même langue… » Que veut dire Maude ?",
              options: [
                "Qu’on pourrait croire que c’est facile pour une Québécoise, mais que ce n’est pas le cas",
                "Que les Français ne la comprennent pas",
                "Qu’elle parle mal français"
              ],
              answer: 0,
              explication: "« Pourtant » annonce une surprise : même avec la même langue, on peut avoir le mal du pays."
            },
            {
              q: "« J’y ai rencontré mes meilleurs amis. » « Y » remplace :",
              options: ["à Montréal", "dans ce club de course", "mes amis"],
              answer: 1,
              explication: "Y remplace un lieu : le club de course, cité juste avant."
            },
            {
              q: "« Ils en redemandent ! » Qu’est-ce que cela montre ?",
              options: [
                "Ses colocataires n’aiment pas ce plat.",
                "Ses colocataires veulent qu’il rentre au Sénégal.",
                "Ses colocataires adorent sa cuisine et veulent en manger encore."
              ],
              answer: 2,
              explication: "Redemander = demander encore. « En » = du thiéboudiène."
            },
            {
              q: "Quel point commun ont les trois témoignages ?",
              options: [
                "Partager sa culture et créer des liens aide à aller mieux.",
                "Il faut rentrer souvent dans son pays.",
                "Il vaut mieux rester avec des personnes de son pays."
              ],
              answer: 0,
              explication: "Le sport, la cuisine partagée, l’invitation d’une voisine : chacun va mieux grâce aux autres."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Les conseils de la colocataire",
          genre: "Consignes orales",
          format: "court",
          voix: "f",
          transcription: "Bon, Lin, avant que je parte, quelques petites choses sur l’appartement. Les poubelles : le bac jaune, c’est pour le plastique, le carton et les canettes ; le bac vert, c’est pour le verre ; et tout le reste va dans le bac gris. On les sort le mardi soir. Pour le chauffage, ne le mets pas trop fort, la facture est partagée entre nous trois. Si tu as un problème avec la machine à laver, appelle le propriétaire : son numéro est sur le frigo. Ah, et samedi, il y a un vide-grenier dans la rue. Si tu cherches une lampe pour ta chambre, c’est l’occasion idéale, ce n’est vraiment pas cher. Bon week-end !"
        },
        e2: {
          titre: "Le choc culturel, ça se soigne ?",
          genre: "Interview radio",
          locuteurs: { "Damien": "h", "Hélène Marchal": "f" },
          repliques: [
            { loc: "Damien", texte: "Bonjour et bienvenue dans « Vie étudiante », sur Ondes de Garonne. Aujourd’hui, nous parlons du choc culturel avec Hélène Marchal, psychologue au service de santé de l’université. Hélène Marchal, qu’est-ce que c’est, exactement, le choc culturel ?" },
            { loc: "Hélène Marchal", texte: "C’est la fatigue, et parfois la tristesse, qu’on ressent quand on vit dans une culture qu’on connaît mal. Tout est nouveau : la langue, les horaires, les façons de se saluer… Le cerveau travaille en permanence, et au bout de quelques semaines, on est épuisé." },
            { loc: "Damien", texte: "Est-ce que ça arrive tout de suite ?" },
            { loc: "Hélène Marchal", texte: "Non, justement. On décrit souvent quatre étapes. D’abord, la lune de miel : on découvre tout, on est enthousiaste. Ensuite vient le choc : les petites différences deviennent pénibles, on a le mal du pays. Puis, peu à peu, on trouve ses repères : c’est l’ajustement. Enfin, on se sent à l’aise dans les deux cultures. Mais attention, ce n’est pas une règle : chacun a son rythme." },
            { loc: "Damien", texte: "Et quels conseils donnez-vous aux étudiants qui traversent la phase difficile ?" },
            { loc: "Hélène Marchal", texte: "Trois choses simples. D’abord, gardez un rythme régulier : dormez, mangez à heures fixes. Ensuite, ne restez pas seul : allez aux activités des associations, même si vous êtes timide. Et enfin, parlez de ce que vous ressentez, à vos proches, à d’autres étudiants, ou à nous : nos consultations sont gratuites pour les étudiants." },
            { loc: "Damien", texte: "Et quand on rentre chez soi, c’est terminé ?" },
            { loc: "Hélène Marchal", texte: "Pas toujours ! Beaucoup de personnes vivent un « choc en retour » : leur pays a changé, elles aussi, et elles se sentent un peu étrangères chez elles. C’est normal, et ça passe." },
            { loc: "Damien", texte: "Merci beaucoup, Hélène Marchal." }
          ]
        },
        e3: {
          titre: "De retour de Chengdu",
          genre: "Témoignage",
          voix: "h",
          transcription: "Je m’appelle Grégoire, j’ai trente-deux ans et j’ai vécu cinq ans à Chengdu, où j’enseignais le français. Quand je suis rentré à Nantes l’année dernière, je pensais que ce serait facile : après tout, je rentrais chez moi ! Eh bien, pas du tout. Les premières semaines, tout me paraissait lent. À Chengdu, je payais tout en scannant un code avec mon téléphone, même un bol de nouilles dans la rue. Ici, le premier jour, la boulangère m’a demandé si j’avais de la monnaie ! Le dimanche, je voulais faire des courses : tout était fermé. Je l’avais oublié, vous imaginez ? Et puis, ce qui me manque le plus, ce sont les repas entre amis autour d’une grande marmite de fondue sichuanaise, à minuit, dans le bruit. À Nantes, à dix heures du soir, les rues sont calmes. Mes amis français ne comprennent pas toujours : pour eux, je suis rentré, donc tout va bien. Aujourd’hui, ça va mieux. J’ai trouvé un restaurant sichuanais près de chez moi, et j’y vais avec des collègues le vendredi. Je leur apprends à manger épicé… Ils progressent !"
        }
      },
      exercices: [
        {
          id: "eco1",
          type: "qcm",
          titre: "Sujet et interlocuteurs",
          sousTitre: "Le choc culturel, ça se soigne ?",
          etape: "comprendre",
          duree: "10 min",
          doc: "e2",
          consigne: "Écoute l’émission une première fois, sans t’arrêter. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "Quel type de document est-ce ?",
              options: ["Une interview à la radio", "Un cours magistral", "Une publicité"],
              answer: 0,
              explication: "Un journaliste (Damien) pose des questions à une invitée, dans une émission de radio."
            },
            {
              q: "Qui est l’invitée ?",
              options: ["Une étudiante étrangère", "Une psychologue de l’université", "Une professeure de français"],
              answer: 1,
              explication: "« Hélène Marchal, psychologue au service de santé de l’université »."
            },
            {
              q: "De quoi parle-t-elle ?",
              options: [
                "Des examens de fin d’année",
                "Des logements étudiants",
                "Du choc culturel et des façons de le vivre"
              ],
              answer: 2,
              explication: "Elle définit le choc culturel, décrit ses étapes et donne des conseils."
            },
            {
              q: "Quel est le ton de l’invitée ?",
              options: ["Alarmiste", "Ironique", "Rassurant et clair"],
              answer: 2,
              explication: "Elle explique simplement et répète que c’est normal : « chacun a son rythme », « ça passe »."
            }
          ]
        },
        {
          id: "a1",
          type: "qcm",
          titre: "Informations précises",
          sousTitre: "Les conseils de la colocataire",
          etape: "reperer",
          duree: "15 min",
          doc: "e1",
          consigne: "Juliette, la colocataire de Lin, lui explique quelques règles de l’appartement avant de partir en week-end. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Où met-on les bouteilles en verre ?",
              options: ["Dans le bac jaune", "Dans le bac vert", "Dans le bac gris"],
              answer: 1,
              explication: "Les couleurs des bacs peuvent varier selon les villes : vérifie toujours les consignes locales."
            },
            {
              q: "Quand sort-on les poubelles ?",
              options: ["Le lundi soir", "Le samedi matin", "Le mardi soir"],
              answer: 2,
              explication: "« On les sort le mardi soir. »"
            },
            {
              q: "Pourquoi ne pas mettre le chauffage trop fort ?",
              options: ["La facture est partagée.", "C’est dangereux.", "Le propriétaire l’interdit."],
              answer: 0,
              explication: "« La facture est partagée entre nous trois. »"
            },
            {
              q: "Qu’est-ce qu’un vide-grenier ?",
              options: [
                "Un magasin de meubles",
                "Un marché où des particuliers vendent des objets d’occasion",
                "Une fête de quartier sans vente"
              ],
              answer: 1,
              explication: "On y trouve des objets anciens ou usagés, pour pas cher."
            }
          ]
        },
        {
          id: "eco2",
          type: "saisie",
          titre: "Prise de notes",
          sousTitre: "Les étapes et les conseils",
          etape: "reperer",
          duree: "15 min",
          doc: "e2",
          consigne: "Tu prépares un exposé sur l’adaptation des étudiants étrangers. Réécoute l’interview et complète tes notes avec quelques mots seulement.",
          libelle: "",
          items: [
            {
              avant: "Définition du choc culturel :",
              cles: ["fatigue|tristesse"],
              reponses: ["la fatigue et la tristesse quand on vit dans une culture qu’on connaît mal"],
              explication: "« C’est la fatigue, et parfois la tristesse, qu’on ressent quand on vit dans une culture qu’on connaît mal. »"
            },
            {
              avant: "Étape 1 :",
              cles: ["lune de miel"],
              reponses: ["la lune de miel : on est enthousiaste"],
              explication: "« D’abord, la lune de miel : on découvre tout, on est enthousiaste. »"
            },
            {
              avant: "Étape 2 :",
              cles: ["choc"],
              reponses: ["le choc : les différences deviennent pénibles, mal du pays"],
              explication: "« Ensuite vient le choc : les petites différences deviennent pénibles. »"
            },
            {
              avant: "Étape 3 :",
              cles: ["ajustement|reperes"],
              reponses: ["l’ajustement : on trouve ses repères"],
              explication: "« Peu à peu, on trouve ses repères : c’est l’ajustement. »"
            },
            {
              avant: "Étape 4 :",
              cles: ["aise|deux cultures"],
              reponses: ["on se sent à l’aise dans les deux cultures"],
              explication: "« Enfin, on se sent à l’aise dans les deux cultures. »"
            },
            {
              avant: "Conseil 1 :",
              cles: ["rythme|regulier|dorm|heures fixes"],
              reponses: ["garder un rythme régulier"],
              explication: "« Gardez un rythme régulier : dormez, mangez à heures fixes. »"
            },
            {
              avant: "Conseil 2 :",
              cles: ["seul|association"],
              reponses: ["ne pas rester seul, aller aux associations"],
              explication: "« Ne restez pas seul : allez aux activités des associations. »"
            },
            {
              avant: "Conseil 3 :",
              cles: ["parler|parlez"],
              reponses: ["parler de ce qu’on ressent"],
              explication: "« Parlez de ce que vous ressentez. »"
            }
          ]
        },
        {
          id: "eco3",
          type: "vraifaux",
          titre: "Vrai ou faux justifié",
          sousTitre: "De retour de Chengdu",
          etape: "reperer",
          duree: "15 min",
          doc: "e3",
          consigne: "Écoute le témoignage de Grégoire. Dis si l’affirmation est vraie ou fausse, puis choisis la phrase qui le prouve.",
          items: [
            {
              affirmation: "Grégoire enseignait le français à Chengdu.",
              vrai: true,
              justifs: [
                "j’ai vécu cinq ans à Chengdu, où j’enseignais le français",
                "je pensais que ce serait facile",
                "tout me paraissait lent"
              ],
              answer: 0,
              explication: "Il a vécu cinq ans à Chengdu comme professeur de français."
            },
            {
              affirmation: "Le retour en France a été facile pour lui.",
              vrai: false,
              justifs: [
                "après tout, je rentrais chez moi",
                "Eh bien, pas du tout",
                "Aujourd’hui, ça va mieux"
              ],
              answer: 1,
              explication: "Il pensait que ce serait facile, mais « pas du tout »."
            },
            {
              affirmation: "À la boulangerie, on lui a demandé s’il avait de la monnaie.",
              vrai: true,
              justifs: [
                "même un bol de nouilles dans la rue",
                "la boulangère m’a demandé si j’avais de la monnaie",
                "tout était fermé"
              ],
              answer: 1,
              explication: "À Chengdu, il payait avec son téléphone ; à Nantes, la boulangère lui demande de la monnaie."
            },
            {
              affirmation: "Il se souvenait que les magasins ferment souvent le dimanche.",
              vrai: false,
              justifs: [
                "Le dimanche, je voulais faire des courses",
                "Je l’avais oublié, vous imaginez ?",
                "À Nantes, à dix heures du soir, les rues sont calmes"
              ],
              answer: 1,
              explication: "Il l’avait oublié, après cinq ans en Chine."
            },
            {
              affirmation: "Ses amis français comprennent toujours ce qu’il ressent.",
              vrai: false,
              justifs: [
                "Mes amis français ne comprennent pas toujours",
                "J’ai trouvé un restaurant sichuanais près de chez moi",
                "Aujourd’hui, ça va mieux"
              ],
              answer: 0,
              explication: "Pour eux, il est rentré, donc tout va bien : ils ne voient pas sa difficulté."
            },
            {
              affirmation: "Il va régulièrement dans un restaurant sichuanais avec des collègues.",
              vrai: true,
              justifs: [
                "j’y vais avec des collègues le vendredi",
                "ce qui me manque le plus, ce sont les repas entre amis",
                "Ils progressent"
              ],
              answer: 0,
              explication: "« J’y vais » : y = au restaurant sichuanais, chaque vendredi."
            }
          ]
        },
        {
          id: "eco4",
          type: "qcm",
          titre: "Sentiments et implicite",
          sousTitre: "De retour de Chengdu",
          etape: "interpreter",
          duree: "10 min",
          doc: "e3",
          consigne: "Réécoute Grégoire. Cette fois, fais attention à ses sentiments et à ce qu’il veut faire comprendre.",
          questions: [
            {
              q: "« Je pensais que ce serait facile : après tout, je rentrais chez moi ! Eh bien, pas du tout. » Que veut montrer Grégoire ?",
              options: [
                "On peut aussi vivre un choc en rentrant chez soi.",
                "Il n’aimait pas la vie en Chine.",
                "Il ne voulait pas habiter à Nantes."
              ],
              answer: 0,
              explication: "C’est le « choc en retour » dont parle la psychologue dans l’interview."
            },
            {
              q: "« Je l’avais oublié, vous imaginez ? » Grégoire est :",
              options: ["fier de lui", "amusé et un peu étonné de lui-même", "en colère contre les magasins"],
              answer: 1,
              explication: "Il s’adresse aux auditeurs (« vous imaginez ? ») pour rire de son propre oubli."
            },
            {
              q: "« Pour eux, je suis rentré, donc tout va bien. » Que ressent-il ?",
              options: [
                "Il est d’accord avec ses amis.",
                "Il se sent un peu incompris.",
                "Il est indifférent."
              ],
              answer: 1,
              explication: "Il rapporte le raisonnement de ses amis pour montrer qu’ils ne voient pas sa difficulté."
            },
            {
              q: "« Je leur apprends à manger épicé… Ils progressent ! » Le ton est :",
              options: ["triste", "sévère", "humoristique et chaleureux"],
              answer: 2,
              explication: "Il plaisante gentiment sur ses collègues : il partage maintenant sa culture chinoise en France."
            },
            {
              q: "Si on reprend les étapes décrites par la psychologue, où en est Grégoire aujourd’hui ?",
              options: [
                "La lune de miel",
                "Le choc",
                "L’ajustement : il trouve peu à peu ses repères"
              ],
              answer: 2,
              explication: "« Aujourd’hui, ça va mieux » : il a trouvé un restaurant et partage ses habitudes avec ses collègues."
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
          sousTitre: "S’adapter à une nouvelle vie",
          etape: "comprendre",
          duree: "10 min",
          consigne: "Associe chaque mot ou expression à sa définition.",
          items: [
            { terme: "le mal du pays", definition: "la tristesse d’être loin de chez soi" },
            { terme: "le choc culturel", definition: "la fatigue et le malaise qu’on ressent dans une culture qu’on connaît mal" },
            { terme: "s’intégrer", definition: "trouver sa place dans un groupe ou dans une société" },
            { terme: "les repères", definition: "ce qui permet de s’orienter, de savoir comment faire" },
            { terme: "une coutume", definition: "une habitude partagée par un groupe et transmise depuis longtemps" },
            { terme: "un malentendu", definition: "une erreur de compréhension entre deux personnes" },
            { terme: "les démarches", definition: "les formalités à faire auprès d’une administration" },
            { terme: "un colocataire", definition: "une personne qui partage le même logement" }
          ]
        },
        {
          id: "voc2",
          type: "qcm",
          titre: "Synonymes et contraires",
          sousTitre: "Des mots des documents",
          etape: "reperer",
          duree: "10 min",
          consigne: "Choisis le synonyme ou le contraire demandé. Tous les mots viennent des textes et des écoutes de l’unité.",
          questions: [
            {
              q: "Un synonyme de « étonner » (« La bise m’a beaucoup étonnée ») :",
              options: ["surprendre", "ennuyer", "rassurer"],
              answer: 0,
              explication: "Étonner = surprendre."
            },
            {
              q: "Le contraire de « lent » (« la lenteur des repas ») :",
              options: ["calme", "rapide", "long"],
              answer: 1,
              explication: "Lin oppose la lenteur des repas français à « la rapidité de tout » en Chine."
            },
            {
              q: "Le contraire de « s’habituer à quelque chose » :",
              options: [
                "s’adapter à quelque chose",
                "ne pas réussir à s’adapter à quelque chose",
                "se faire à quelque chose"
              ],
              answer: 1,
              explication: "« S’adapter à » et « se faire à » sont des synonymes de « s’habituer à »."
            },
            {
              q: "« La cuisine de ma mère me manque. » Cela veut dire :",
              options: [
                "La cuisine de ma mère me dérange.",
                "La cuisine de ma mère m’ennuie.",
                "Je suis triste de ne plus pouvoir manger la cuisine de ma mère."
              ],
              answer: 2,
              explication: "Quand quelque chose nous manque, on regrette son absence."
            },
            {
              q: "Un synonyme de « pénible » (« les petites différences deviennent pénibles ») :",
              options: ["difficile à supporter", "agréable", "facile"],
              answer: 0,
              explication: "Pénible = qui fatigue, qui est difficile à supporter."
            },
            {
              q: "Le contraire de « timide » :",
              options: ["réservé", "sociable", "discret"],
              answer: 1,
              explication: "« Réservé » et « discret » sont proches de « timide ». Une personne sociable aime aller vers les autres."
            }
          ]
        },
        {
          id: "voc3",
          type: "trous",
          titre: "Le mot juste",
          sousTitre: "Manquer, l’habitude, s’habituer",
          etape: "reperer",
          duree: "15 min",
          fiche: "<p><strong>Manquer à</strong> : attention, la construction est « à l’envers » ! Le sujet est ce qui est absent : <em>Ma famille <strong>me</strong> manque</em> (= je suis triste sans ma famille). <em>Tu <strong>me</strong> manques.</em></p><p><strong>Une habitude</strong> est personnelle (<em>prendre l’habitude de</em>), <strong>une tradition</strong> ou <strong>une coutume</strong> est partagée par un groupe. <strong>D’habitude</strong> = normalement, en général.</p><p><strong>S’habituer à</strong> quelque chose : <em>je m’<strong>y</strong> suis habituée</em>.</p>",
          consigne: "Choisis le mot ou l’expression qui convient.",
          phrases: [
            {
              avant: "Loin de Hangzhou, la cuisine de ma mère",
              options: ["me manque", "je manque", "manque de moi"],
              answer: 0,
              apres: "terriblement.",
              explication: "Le sujet est ce qui est absent (la cuisine) ; la personne triste est le pronom me."
            },
            {
              avant: "Je suis à Bordeaux, et mes parents",
              options: ["manquent à moi", "me manquent", "je manque"],
              answer: 1,
              apres: "beaucoup.",
              explication: "Mes parents me manquent : le verbe s’accorde avec « mes parents »."
            },
            {
              avant: "",
              options: ["D’habitude", "L’habitude", "Habitué"],
              answer: 0,
              apres: ", je dîne vers six heures, mais ce soir, je suis invitée à huit heures.",
              explication: "D’habitude = normalement, en général."
            },
            {
              avant: "J’ai pris l’",
              options: ["coutume", "habitude", "tradition"],
              answer: 1,
              apres: "de faire mes courses le samedi.",
              explication: "Une habitude personnelle : prendre l’habitude de + infinitif."
            },
            {
              avant: "Offrir des enveloppes rouges au Nouvel An est une",
              options: ["manie", "tradition", "routine"],
              answer: 1,
              apres: "très ancienne.",
              explication: "Une pratique partagée et transmise depuis longtemps : une tradition."
            },
            {
              avant: "Au début, la bise me gênait, mais je",
              options: ["l’ai habituée", "en suis habituée", "m’y suis habituée"],
              answer: 2,
              apres: ".",
              explication: "S’habituer à la bise → s’y habituer. Au passé composé : je m’y suis habituée."
            },
            {
              avant: "Il faudra du temps pour",
              options: ["perdre tes repères", "faire tes repères", "trouver tes repères"],
              answer: 2,
              apres: "dans une nouvelle ville.",
              explication: "Trouver ses repères : savoir s’orienter, comprendre comment les choses fonctionnent."
            },
            {
              avant: "Elle n’a pas compris ma blague : c’était un",
              options: ["mal du pays", "malentendu", "manque"],
              answer: 1,
              apres: ".",
              explication: "Un malentendu : une erreur de compréhension entre deux personnes."
            }
          ]
        },
        {
          id: "voc4",
          type: "trous",
          titre: "Expressions dans un dialogue",
          sousTitre: "Donner un conseil",
          etape: "interpreter",
          duree: "10 min",
          regles: ["donner-un-conseil"],
          consigne: "Lin donne des conseils à une étudiante qui vient d’arriver. Choisis la forme correcte.",
          phrases: [
            {
              avant: "— Je ne sais pas où acheter des produits chinois ici. — Je te",
              options: ["conseille aller", "conseille d’aller", "conseille à aller"],
              answer: 1,
              apres: "voir sur le groupe des étudiants chinois : quelqu’un connaîtra une bonne adresse.",
              explication: "Conseiller de + infinitif."
            },
            {
              avant: "— J’ai rendez-vous à la préfecture mardi. — Il vaut mieux",
              options: ["d’arriver", "à arriver", "arriver"],
              answer: 2,
              apres: "en avance : il y a souvent beaucoup de monde.",
              explication: "Il vaut mieux + infinitif, sans préposition."
            },
            {
              avant: "— Je n’ose pas demander de l’aide à ma colocataire. — N’hésite pas",
              options: ["à lui demander", "de lui demander", "lui demander"],
              answer: 0,
              apres: ", elle sera contente de t’aider !",
              explication: "Hésiter à + infinitif : n’hésite pas à…"
            },
            {
              avant: "— Je voulais acheter du riz dimanche, mais tout était fermé ! —",
              options: ["Évite à", "Évite", "Évite de"],
              answer: 2,
              apres: "faire tes courses le dimanche : beaucoup de magasins sont fermés.",
              explication: "Éviter de + infinitif."
            },
            {
              avant: "— Je me sens seule le week-end. — Tu",
              options: ["devras", "devrais", "dois à"],
              answer: 1,
              apres: "t’inscrire à un club de sport ou à une association.",
              explication: "Tu devrais (conditionnel) = un conseil doux. « Tu devras » (futur) serait une obligation."
            },
            {
              avant: "— J’ai oublié ma carte étudiante deux fois cette semaine ! —",
              options: ["Pense à", "Pense de", "Pense"],
              answer: 0,
              apres: "mettre ta carte dans ton sac dès le soir.",
              explication: "Penser à + infinitif = ne pas oublier de."
            },
            {
              avant: "— Le médecin n’a pas de rendez-vous avant trois semaines. —",
              options: ["Si je suis toi", "Si j’étais toi", "Si j’aurais été toi"],
              answer: 1,
              apres: ", j’appellerais un autre cabinet.",
              explication: "Si j’étais toi + conditionnel : une façon amicale de conseiller."
            },
            {
              avant: "— Je ne sais pas si je dois faire la bise à mon directeur de stage. — Dans le doute,",
              options: ["il vaut mieux d’attendre", "vaut mieux à attendre", "mieux vaut attendre"],
              answer: 2,
              apres: ": c’est à lui de faire le premier geste.",
              explication: "Mieux vaut + infinitif = il vaut mieux + infinitif, toujours sans préposition."
            }
          ]
        },
        {
          id: "voc5",
          type: "registre",
          titre: "Registres de langue",
          sousTitre: "Galérer, avoir du mal, éprouver des difficultés",
          etape: "interpreter",
          duree: "10 min",
          regles: ["registres-de-langue"],
          consigne: "Pour chaque phrase, choisis le registre : familier, courant ou soutenu.",
          items: [
            {
              phrase: "Franchement, j’en ai marre de toute cette paperasse.",
              answer: "familier",
              explication: "« En avoir marre » et « la paperasse » (les papiers administratifs) sont familiers."
            },
            {
              phrase: "J’en ai assez de toutes ces démarches administratives.",
              answer: "courant",
              explication: "La même idée, en registre courant."
            },
            {
              phrase: "Ces formalités administratives me lassent profondément.",
              answer: "soutenu",
              explication: "« Lasser » et « profondément » appartiennent à un registre soutenu."
            },
            {
              phrase: "Au début, j’ai galéré pour trouver un appart.",
              answer: "familier",
              explication: "« Galérer » (avoir beaucoup de difficultés) et « un appart » sont familiers."
            },
            {
              phrase: "Au début, j’ai eu du mal à trouver un appartement.",
              answer: "courant",
              explication: "Avoir du mal à + infinitif : registre courant."
            },
            {
              phrase: "Les premiers temps, j’ai éprouvé de grandes difficultés à me loger.",
              answer: "soutenu",
              explication: "« Éprouver des difficultés » et « se loger » : registre soutenu."
            },
            {
              phrase: "C’est trop chelou, ici, tout ferme le dimanche !",
              answer: "familier",
              explication: "« Chelou » (bizarre) est un mot familier, en verlan : on inverse les syllabes de « louche »."
            },
            {
              phrase: "C’est étrange : ici, presque tout est fermé le dimanche.",
              answer: "courant",
              explication: "Phrase neutre, possible avec tout le monde."
            },
            {
              phrase: "Il m’a fallu un certain temps pour m’accoutumer à ces usages.",
              answer: "soutenu",
              explication: "« S’accoutumer à » (s’habituer à) et « ces usages » (ces habitudes) sont soutenus."
            }
          ]
        },
        {
          id: "voc6",
          type: "ecriture",
          titre: "Réemploi",
          sousTitre: "Une habitude que j’ai prise",
          etape: "reemployer",
          duree: "15 min",
          consigne: "Raconte en quelques lignes une habitude que tu as prise (ou perdue) en vivant dans un autre pays ou une autre ville. Utilise au moins cinq mots ou expressions de cette unité.",
          objectifs: [
            "Réemployer au moins cinq mots ou expressions de l’unité",
            "Employer correctement « manquer à » ou « s’habituer à »"
          ],
          min: 50,
          max: 100,
          checklist: [
            "J’ai utilisé au moins cinq mots ou expressions de l’unité",
            "J’ai employé « manquer à » ou « s’habituer à » avec la bonne construction",
            "J’ai comparé avant et maintenant",
            "J’ai dit ce que je ressens aujourd’hui"
          ],
          modele: "En Chine, je n’avais jamais pris l’habitude de cuisiner : il y avait toujours un petit restaurant ouvert près de chez moi. En France, j’ai eu du mal à trouver mes repères, et les plats de ma ville me manquaient beaucoup. Alors, j’ai commencé à cuisiner avec ma colocataire. Au début, c’était un vrai choc culturel pour nous deux ! Maintenant, je m’y suis habituée, et d’habitude, nous préparons un plat chinois le samedi. Ce n’est plus une corvée : c’est devenu une tradition."
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "gra1",
          type: "qcm",
          titre: "Observer",
          sousTitre: "Que remplacent en et y ?",
          etape: "comprendre",
          duree: "10 min",
          regles: ["pronoms-en-y"],
          consigne: "Ces phrases viennent des documents de l’unité. Observe le pronom et dis ce qu’il remplace.",
          questions: [
            {
              q: "« Aujourd’hui, je m’y suis habituée. » (Lin, à propos de la bise) « Y » remplace :",
              options: ["à la bise", "en France", "au travail"],
              answer: 0,
              explication: "S’habituer à quelque chose → s’y habituer. Ici, à la bise."
            },
            {
              q: "« J’y ai rencontré mes meilleurs amis. » (Maude) « Y » remplace :",
              options: ["à Montréal", "dans ce club de course", "à mes amis"],
              answer: 1,
              explication: "Y remplace un lieu : dans le club de course."
            },
            {
              q: "« Ils en redemandent ! » (Ousmane) « En » remplace :",
              options: ["les colocataires", "le Sénégal", "du thiéboudiène"],
              answer: 2,
              explication: "En remplace une quantité non précisée : ils redemandent du thiéboudiène."
            },
            {
              q: "« Je n’en parle pas à mes amis. » (Xiaowen) « En » remplace un complément introduit par :",
              options: ["de (parler de quelque chose)", "à", "dans"],
              answer: 0,
              explication: "Parler de quelque chose → en parler."
            },
            {
              q: "« J’y vais avec des collègues le vendredi. » (Grégoire) « Y » remplace :",
              options: ["avec des collègues", "au restaurant sichuanais", "le vendredi"],
              answer: 1,
              explication: "Il va au restaurant sichuanais : y remplace le lieu."
            },
            {
              q: "« Je m’y suis habituée », « j’y ai rencontré » : au passé composé, où se place le pronom ?",
              options: ["Après le participe passé", "Avant l’auxiliaire", "À la fin de la phrase"],
              answer: 1,
              explication: "Le pronom se place devant le verbe conjugué, c’est-à-dire devant l’auxiliaire : j’y ai, je m’y suis."
            }
          ]
        },
        {
          id: "gra2",
          type: "trous",
          titre: "Verbe + à ou + de ?",
          sousTitre: "La préposition qui décide du pronom",
          etape: "reperer",
          duree: "10 min",
          regles: ["pronoms-en-y"],
          fiche: "<p>Verbes + <strong>à</strong> : s’habituer à, penser à, s’intéresser à, participer à. → pronom <strong>y</strong> pour une chose.</p><p>Verbes + <strong>de</strong> : avoir besoin de, avoir envie de, s’occuper de, parler de, profiter de, rêver de. → pronom <strong>en</strong> pour une chose.</p><p class=\"ex\">à + le = au, à + les = aux ; de + le = du, de + les = des.</p>",
          consigne: "Choisis la préposition qui convient. Elle te dira ensuite quel pronom utiliser.",
          phrases: [
            {
              avant: "Je me suis vite habituée",
              options: ["à", "de", "en"],
              answer: 0,
              apres: "la cuisine française.",
              explication: "S’habituer à quelque chose."
            },
            {
              avant: "Elle a besoin",
              options: ["de", "à", "pour"],
              answer: 0,
              apres: "conseils pour ses démarches.",
              explication: "Avoir besoin de quelque chose."
            },
            {
              avant: "Lin pense souvent",
              options: ["de", "à", "sur"],
              answer: 1,
              apres: "sa ville natale.",
              explication: "Penser à quelque chose ou à quelqu’un."
            },
            {
              avant: "Mes colocataires s’intéressent beaucoup",
              options: ["de", "pour", "à"],
              answer: 2,
              apres: "la culture chinoise.",
              explication: "S’intéresser à quelque chose."
            },
            {
              avant: "Il faut profiter",
              options: ["aux", "des", "avec les"],
              answer: 1,
              apres: "marchés du samedi !",
              explication: "Profiter de + les marchés = des marchés."
            },
            {
              avant: "Juliette s’occupe",
              options: ["du", "au", "le"],
              answer: 0,
              apres: "recyclage dans l’appartement.",
              explication: "S’occuper de + le recyclage = du recyclage."
            },
            {
              avant: "Ousmane rêve",
              options: ["à", "sur", "de"],
              answer: 2,
              apres: "retourner à Dakar cet été.",
              explication: "Rêver de + infinitif."
            },
            {
              avant: "Elle a envie",
              options: ["à", "de", "pour"],
              answer: 1,
              apres: "rentrer chez elle pour les vacances.",
              explication: "Avoir envie de + infinitif."
            }
          ]
        },
        {
          id: "a2",
          type: "trous",
          titre: "Choisir le pronom",
          sousTitre: "Les pronoms en et y",
          etape: "reperer",
          duree: "15 min",
          regles: ["pronoms-en-y"],
          fiche: "<p><strong>Y</strong> remplace un lieu ou un complément introduit par <em>à</em> : Je vais au marché → J’<em>y</em> vais. Je pense à mon examen → J’<em>y</em> pense.</p> <p><strong>En</strong> remplace un complément introduit par <em>de</em>, ou une quantité : Elle parle de sa ville → Elle <em>en</em> parle. J’ai deux colocataires → J’<em>en</em> ai deux.</p>",
          consigne: "Choisis le pronom qui convient.",
          phrases: [
            {
              avant: "Vous allez au marché samedi ? Oui, nous",
              options: ["en", "y", "le"],
              answer: 1,
              apres: "allons.",
              explication: "« Au marché » est un lieu : y."
            },
            {
              avant: "Vous avez acheté des légumes ? Oui, nous",
              options: ["les", "y", "en"],
              answer: 2,
              apres: "avons acheté.",
              explication: "« Des légumes » : une quantité non précisée, donc en."
            },
            {
              avant: "Tu penses à ton examen ? Oui, je",
              options: ["y", "en", "lui"],
              answer: 0,
              apres: "pense tout le temps.",
              explication: "Penser à quelque chose : y."
            },
            {
              avant: "Elle parle souvent de sa ville natale ? Oui, elle",
              options: ["y", "en", "la"],
              answer: 1,
              apres: "parle souvent.",
              explication: "Parler de quelque chose : en."
            },
            {
              avant: "Vous vous êtes habitués à la bise ? Oui, nous nous",
              options: ["la", "en", "y"],
              answer: 2,
              apres: "sommes habitués.",
              explication: "S’habituer à quelque chose : y."
            },
            {
              avant: "Combien de colocataires a-t-elle ? Elle",
              options: ["en", "y", "les"],
              answer: 0,
              apres: "a deux.",
              explication: "Avec un nombre, on garde le nombre et on utilise en."
            }
          ]
        },
        {
          id: "gra3",
          type: "qcm",
          titre: "En, y, ou un autre pronom ?",
          sousTitre: "Une chose, un lieu ou une personne",
          etape: "interpreter",
          duree: "10 min",
          regles: ["pronoms-en-y"],
          consigne: "Choisis la réponse correcte. Si tu te trompes, lis l’explication de ton erreur.",
          questions: [
            {
              q: "Tu penses à ta mère ? — Oui,",
              options: ["j’y pense souvent.", "je pense souvent à elle.", "j’en pense souvent."],
              answer: 1,
              pourquoi: [
                "Pour une personne, après « penser à », on n’emploie pas y : on dit « à elle », « à lui ».",
                "",
                "« En » remplace un complément introduit par de, pas par à."
              ],
              explication: "Penser à une personne → penser à lui, à elle."
            },
            {
              q: "Tu es allée au marché ? — Oui,",
              options: ["je l’ai allé.", "j’en suis allée.", "j’y suis allée."],
              answer: 2,
              pourquoi: [
                "« Le, la, l’ » remplacent un complément direct ; « aller » n’en a pas.",
                "« En » remplace le lieu d’où l’on vient : je reviens du marché → j’en reviens.",
                ""
              ],
              explication: "Le lieu où l’on va : y. Avec être, le participe s’accorde avec le sujet : allée."
            },
            {
              q: "Tu as visité le vieux marché couvert ? — Oui,",
              options: ["je l’ai visité.", "j’y ai visité.", "j’en ai visité."],
              answer: 0,
              pourquoi: [
                "",
                "« Visiter » a un complément direct (visiter quelque chose) : le, la, l’.",
                "« En » remplacerait une quantité (des marchés), pas un marché précis."
              ],
              explication: "Visiter le marché → le visiter."
            },
            {
              q: "Tu as des amis français ? — Oui,",
              options: ["j’en ai plusieurs.", "je les ai plusieurs.", "j’y ai plusieurs."],
              answer: 0,
              pourquoi: [
                "",
                "Avec une quantité (plusieurs, deux, beaucoup), on emploie en.",
                "« Y » remplace un lieu ou un complément introduit par à."
              ],
              explication: "Des amis → en, et on garde la quantité : j’en ai plusieurs."
            },
            {
              q: "Tu as besoin de ton dictionnaire ? — Oui,",
              options: ["j’y ai besoin.", "j’en ai besoin.", "je l’ai besoin."],
              answer: 1,
              pourquoi: [
                "« Avoir besoin de » : le complément est introduit par de, donc en.",
                "",
                "« Avoir besoin » n’a pas de complément direct : « je l’ai besoin » est impossible."
              ],
              explication: "Avoir besoin de quelque chose → en avoir besoin."
            },
            {
              q: "Tu t’intéresses à ton nouveau colocataire ? — Oui,",
              options: ["je m’y intéresse.", "je m’en intéresse.", "je m’intéresse à lui."],
              answer: 2,
              pourquoi: [
                "Pour une personne, après « s’intéresser à », on emploie « à lui », « à elle ».",
                "« En » remplace un complément avec de ; ici, c’est à.",
                ""
              ],
              explication: "Une personne : pronom tonique après la préposition."
            }
          ]
        },
        {
          id: "gra4",
          type: "transformation",
          titre: "Remplacer par en ou y",
          sousTitre: "Éviter les répétitions",
          etape: "interpreter",
          duree: "15 min",
          regles: ["pronoms-en-y"],
          fiche: "<p>Le pronom se place <strong>devant le verbe conjugué</strong>. Au passé composé, devant l’auxiliaire : <em>j’<strong>y</strong> suis allée, j’<strong>en</strong> ai acheté</em>.</p><p>Avec une quantité, on garde la quantité à la fin : <em>j’<strong>en</strong> ai deux</em>.</p>",
          consigne: "Réponds à la question en remplaçant le complément par en ou y. Écris seulement les mots qui manquent.",
          items: [
            {
              enonce: "Tu vas souvent au marché ?",
              avant: "Oui,",
              apres: ".",
              reponses: ["j’y vais souvent"],
              explication: "Au marché (lieu) → y, devant le verbe."
            },
            {
              enonce: "Tu as acheté des légumes ?",
              avant: "Oui,",
              apres: ".",
              reponses: ["j’en ai acheté"],
              explication: "Des légumes (quantité) → en, devant l’auxiliaire. Pas d’accord du participe avec en."
            },
            {
              enonce: "Elle s’est habituée aux horaires français ?",
              avant: "Oui, elle",
              apres: ".",
              reponses: ["s’y est habituée"],
              explication: "S’habituer aux horaires → s’y habituer. Le pronom y se place entre se et l’auxiliaire."
            },
            {
              enonce: "Vous revenez de la préfecture ?",
              avant: "Oui, nous",
              apres: ".",
              reponses: ["en revenons"],
              explication: "Le lieu d’où l’on vient (de la préfecture) → en."
            },
            {
              enonce: "Tu as trois colocataires ?",
              avant: "Non, j’",
              apres: "deux.",
              reponses: ["en ai"],
              explication: "Avec un nombre : j’en ai deux."
            },
            {
              enonce: "Il pense à son examen ?",
              avant: "Oui, il",
              apres: "tout le temps.",
              reponses: ["y pense"],
              explication: "Penser à une chose → y penser."
            },
            {
              enonce: "Tu parles de la France dans tes messages ?",
              avant: "Oui, j’",
              apres: "dans tous mes messages.",
              reponses: ["en parle"],
              explication: "Parler de quelque chose → en parler."
            }
          ]
        },
        {
          id: "gra5",
          type: "trous",
          titre: "Ne… plus, ne… pas encore, ne… jamais",
          sousTitre: "Dire ce qui a changé",
          etape: "interpreter",
          duree: "10 min",
          regles: ["negation"],
          fiche: "<p><strong>Ne… plus</strong> : une habitude s’est arrêtée (avant oui, maintenant non). <strong>Ne… pas encore</strong> : ce n’est pas fait, mais ça va arriver. <strong>Ne… jamais</strong> : à aucun moment.</p><p><strong>Ne… rien</strong> : aucune chose. <strong>Ne… personne</strong> : aucune personne.</p><p class=\"ex\">Au passé composé : je <strong>n’</strong>ai <strong>pas encore</strong> reçu ; je <strong>n’</strong>ai vu <strong>personne</strong>.</p>",
          consigne: "Choisis la négation qui convient au sens.",
          phrases: [
            {
              avant: "Avant, je dînais à six heures. Maintenant, je",
              options: ["ne dîne pas encore", "ne dîne plus", "ne dîne jamais"],
              answer: 1,
              apres: "à six heures.",
              explication: "Une habitude qui s’est arrêtée : ne… plus."
            },
            {
              avant: "J’ai envoyé mon dossier il y a deux semaines, mais je",
              options: ["n’ai plus reçu", "n’ai rien encore reçu", "n’ai pas encore reçu"],
              answer: 2,
              apres: "de réponse.",
              explication: "La réponse n’est pas arrivée, mais elle va arriver : ne… pas encore."
            },
            {
              avant: "Au début, je ne connaissais",
              options: ["personne", "rien", "jamais"],
              answer: 0,
              apres: ": pas un seul ami, pas même un voisin.",
              explication: "Aucune personne : ne… personne."
            },
            {
              avant: "Lin",
              options: ["ne fait plus", "ne fait jamais", "ne fait pas encore"],
              answer: 1,
              apres: "la bise au travail : elle préfère serrer la main.",
              explication: "À aucun moment, au travail : ne… jamais."
            },
            {
              avant: "Les premiers jours, je ne comprenais",
              options: ["personne de", "jamais de", "rien de"],
              answer: 2,
              apres: "ce que disaient mes colocataires.",
              explication: "Aucune chose : ne… rien (de ce que…)."
            },
            {
              avant: "Tu es déjà allée au marché du samedi ? — Non, pas",
              options: ["plus", "encore", "jamais"],
              answer: 1,
              apres: ", mais j’y vais demain !",
              explication: "Déjà ? → Pas encore (mais ça va arriver demain)."
            },
            {
              avant: "Grégoire est rentré en France : il",
              options: ["n’habite plus", "n’habite pas encore", "n’habite jamais"],
              answer: 0,
              apres: "à Chengdu.",
              explication: "Il habitait à Chengdu ; maintenant, c’est fini : ne… plus."
            },
            {
              avant: "Je",
              options: ["n’ai plus", "n’ai jamais", "n’ai pas encore"],
              answer: 2,
              apres: "fini mes devoirs : il me reste deux exercices.",
              explication: "Ce n’est pas fini, mais ça va l’être : ne… pas encore."
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
          regles: ["pronoms-en-y", "negation", "accord-participe-passe"],
          consigne: "Chaque phrase contient une erreur. Réécris la phrase corrigée.",
          items: [
            {
              enonce: "Je m’habitue de la vie française.",
              aide: "Une erreur de préposition.",
              reponses: ["Je m’habitue à la vie française."],
              explication: "S’habituer à quelque chose."
            },
            {
              enonce: "J’y pense à mon examen.",
              aide: "Un élément en trop : choisis le pronom ou le complément.",
              reponses: ["Je pense à mon examen.", "J’y pense."],
              explication: "Le pronom remplace le complément : on ne garde pas les deux."
            },
            {
              enonce: "Ma grand-mère me manque : j’y pense tous les jours.",
              aide: "Il s’agit d’une personne.",
              reponses: ["Ma grand-mère me manque : je pense à elle tous les jours."],
              explication: "Pour une personne, après penser à : à elle, à lui."
            },
            {
              enonce: "J’ai pas encore l’habitude de dîner tard.",
              aide: "À l’écrit, la négation est incomplète.",
              reponses: ["Je n’ai pas encore l’habitude de dîner tard."],
              explication: "À l’écrit, le ne est obligatoire : je n’ai pas encore…"
            },
            {
              enonce: "Des légumes ? Oui, j’en ai achetés.",
              aide: "Un accord en trop.",
              reponses: ["Des légumes ? Oui, j’en ai acheté."],
              explication: "Le participe passé ne s’accorde pas avec en."
            },
            {
              enonce: "Je ne connais plus personne ici : je viens d’arriver.",
              aide: "Le sens ne va pas : tu viens d’arriver.",
              reponses: [
                "Je ne connais encore personne ici : je viens d’arriver.",
                "Je ne connais personne ici : je viens d’arriver."
              ],
              explication: "« Ne… plus » suppose qu’on connaissait des gens avant. Quand on vient d’arriver : ne… encore personne, ou ne… personne."
            }
          ]
        },
        {
          id: "gra7",
          type: "texteatrous",
          titre: "Texte à compléter",
          sousTitre: "Six mois plus tard",
          etape: "reemployer",
          duree: "20 min",
          regles: ["pronoms-en-y", "negation"],
          consigne: "Lin écrit un billet pour le blog des étudiants internationaux. Complète-le : choisis dans les listes, ou écris le pronom qui manque.",
          texte: [
            "Cela fait six mois que je suis à Bordeaux. Au début, je ne connaissais {{1}} et je ne comprenais {{2}} quand les gens parlaient vite. Aujourd’hui, ça va beaucoup mieux !",
            "Le samedi, je vais au marché de mon quartier : j’{{3}} vais avec ma colocataire, et nous {{4}} achetons des fruits pour toute la semaine.",
            "Je me suis habituée {{5}} la bise : maintenant, je {{6}} fais à mes amis sans réfléchir !",
            "Je ne dîne {{7}} à six heures, mais la cuisine de ma mère me manque toujours. J’{{8}} parle souvent avec ma colocataire, qui s’intéresse beaucoup {{9}} la Chine. Je pense aussi à ma grand-mère : je pense {{10}} chaque fois que je mange des raviolis.",
            "Je n’ai {{11}} visité Paris, mais j’{{12}} vais en décembre !"
          ],
          trous: [
            { options: ["rien", "personne", "jamais"], answer: 1, explication: "Aucune personne : ne… personne." },
            { options: ["rien", "personne", "plus"], answer: 0, explication: "Aucune chose : ne… rien." },
            { indice: "pronom", reponses: ["y"], explication: "Au marché (lieu) → y." },
            { indice: "pronom", reponses: ["en"], explication: "Des fruits (quantité) → en, et on garde la précision « pour toute la semaine »." },
            { options: ["de", "à", "en"], answer: 1, explication: "S’habituer à quelque chose." },
            { indice: "pronom", reponses: ["la"], explication: "Faire la bise → la faire : complément direct, donc la." },
            { options: ["pas encore", "plus", "jamais"], answer: 1, explication: "Une habitude chinoise qui s’est arrêtée : ne… plus." },
            { indice: "pronom", reponses: ["en"], explication: "Parler de la cuisine de sa mère → en parler." },
            { options: ["de", "pour", "à"], answer: 2, explication: "S’intéresser à quelque chose." },
            { indice: "préposition + pronom", reponses: ["à elle"], explication: "Penser à une personne → penser à elle." },
            { options: ["jamais", "plus", "rien"], answer: 0, explication: "À aucun moment jusqu’à maintenant : ne… jamais." },
            { indice: "pronom", reponses: ["y"], explication: "À Paris (lieu) → y." }
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
          sousTitre: "Chasser les répétitions",
          etape: "interpreter",
          duree: "25 min",
          regles: ["pronoms-en-y"],
          consigne: "Ce texte est correct, mais il répète sans cesse les mêmes mots. Réécris-le en utilisant en, y et les pronoms toniques (à elle, à eux…), et ajoute une émotion et une conclusion.",
          depart: "Samedi, je suis allée au marché. Au marché, j’ai acheté des fruits. J’ai acheté beaucoup de fruits. Ensuite, je suis allée à la bibliothèque. À la bibliothèque, j’ai travaillé deux heures. Le soir, j’ai pensé à ma famille. J’ai pensé à ma famille longtemps. J’ai parlé de ma famille avec ma colocataire.",
          objectifs: [
            "Remplacer les répétitions par en, y ou un pronom tonique",
            "Placer correctement les pronoms au passé composé",
            "Ajouter une émotion et une phrase de conclusion"
          ],
          min: 70,
          max: 130,
          checklist: [
            "Il n’y a plus de répétitions inutiles",
            "J’ai utilisé y au moins deux fois et en au moins deux fois",
            "J’ai utilisé « à elle » ou « à eux » pour une personne",
            "Les pronoms sont devant l’auxiliaire au passé composé",
            "J’ai ajouté une émotion",
            "Mon texte a une conclusion"
          ],
          modele: "Samedi matin, je suis allée au marché. J’y ai trouvé de magnifiques fruits de saison et j’en ai acheté beaucoup, sans doute trop ! Ensuite, je suis allée à la bibliothèque et j’y ai travaillé deux heures, au calme. Le soir, j’ai pensé à ma famille. J’ai pensé à eux longtemps, et je me sentais un peu triste. Alors, j’en ai parlé avec ma colocataire. Elle m’a écoutée, puis elle m’a proposé de goûter mes fruits avec elle. Finalement, cette soirée m’a fait du bien."
        },
        {
          id: "ecr2",
          type: "ecriture",
          titre: "Un courriel",
          sousTitre: "Conseils pour partir en Chine",
          etape: "reemployer",
          duree: "30 min",
          regles: ["donner-un-conseil", "negation"],
          consigne: "Ton amie française Romane va passer un semestre à Shanghai. Elle t’écrit : « Je pars dans un mois et je suis un peu stressée. Tu as des conseils ? » Réponds-lui : donne au moins quatre conseils concrets, avec ton expérience, et rassure-la.",
          objectifs: [
            "Donner au moins quatre conseils avec des expressions variées",
            "Utiliser au moins deux négations différentes (ne… plus, ne… jamais, ne… pas encore)",
            "Parler de ton expérience, sans généraliser"
          ],
          min: 110,
          max: 160,
          checklist: [
            "Le ton est amical (tutoiement, formule d’appel et de fin)",
            "J’ai donné au moins quatre conseils concrets",
            "J’ai utilisé au moins trois expressions de conseil différentes",
            "J’ai utilisé au moins deux négations différentes",
            "J’ai parlé de mon expérience (« chez moi », « dans ma ville »…)",
            "J’ai rassuré mon amie à la fin"
          ],
          modele: "Chère Romane,\n\nQuelle bonne nouvelle ! Ne t’inquiète pas, tout va bien se passer.\n\nD’abord, je te conseille d’installer une application de paiement avant de partir : dans ma ville, je ne paie presque jamais en espèces, même au marché. Ensuite, n’hésite pas à apprendre quelques phrases de chinois : les gens apprécient vraiment l’effort. Pour les repas, il vaut mieux goûter un peu de tout, mais si un plat est trop épicé, dis-le simplement, personne ne sera vexé !\n\nTu n’as pas encore de logement ? Pense à demander de l’aide à l’association des étudiants de ton université là-bas : ils connaissent les bons quartiers.\n\nEnfin, tu devrais garder du temps pour voyager un peu. Moi, je n’ai jamais regretté un week-end à la campagne.\n\nGros bisous, et écris-moi dès ton arrivée !\nLin"
        },
        {
          id: "a3",
          type: "ecriture",
          titre: "Texte long",
          sousTitre: "Des conseils sur un forum",
          etape: "reemployer",
          duree: "45 min",
          regles: ["pronoms-en-y", "donner-un-conseil", "connecteurs-logiques"],
          consigne: "Sur un forum d’étudiants, un jeune Chinois écrit : « J’arrive en France le mois prochain. Vous avez des conseils pour la vie de tous les jours ? » Réponds-lui en donnant au moins quatre conseils concrets, avec tes propres expériences.",
          objectifs: [
            "Organiser les conseils avec des connecteurs (d’abord, ensuite, enfin)",
            "Varier les formes du conseil",
            "Employer en et y pour éviter les répétitions"
          ],
          min: 140,
          max: 190,
          checklist: [
            "Je salue et je me présente rapidement",
            "Au moins quatre conseils concrets",
            "Des formes variées : impératif, « je te conseille de », « il vaut mieux »",
            "Au moins une comparaison entre la Chine et la France",
            "Au moins un pronom en ou y bien employé",
            "Une formule finale encourageante"
          ],
          modele: "Salut !\n\nJe suis arrivée à Bordeaux il y a six mois, alors je comprends tes questions.\n\nD’abord, je te conseille de faire tes courses le samedi : le dimanche, la plupart des magasins sont fermés, ce qui surprend quand on vient de Chine. Ensuite, n’attends pas pour prendre rendez-vous chez le médecin ou à la banque, car il faut souvent plusieurs semaines. Pour le logement, il vaut mieux chercher une colocation : c’est moins cher et on pratique le français tous les jours.\n\nPour les repas, prépare-toi à dîner tard ! Au début, j’avais faim à six heures, alors je prenais un goûter vers seize heures, comme les Français. Enfin, ne t’inquiète pas pour la bise : tu t’y habitueras vite. Au travail, on se serre plutôt la main.\n\nSurtout, profite des marchés et des terrasses : c’est là qu’on rencontre les gens.\n\nBon courage et bienvenue en France !\nLin"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "ora1",
          type: "oral",
          titre: "Réponse d’une minute",
          sousTitre: "Une habitude qui a changé",
          etape: "reemployer",
          duree: "15 min",
          regles: ["negation"],
          consigne: "Raconte une habitude que tu avais avant (en Chine, au lycée, chez tes parents…) et que tu n’as plus aujourd’hui, ou une nouvelle habitude que tu as prise. Explique pourquoi elle a changé. Parle une minute, sans lire.",
          dureeCible: "1 minute",
          prepMinutes: 1,
          preparation: [
            "Avant, je… tous les jours.",
            "Maintenant, je ne… plus…",
            "Au début, je n’y arrivais pas, mais…",
            "Je m’y suis habituée parce que…",
            "Ce qui me manque un peu, c’est…",
            "Finalement, …"
          ],
          checklist: [
            "J’ai comparé avant (imparfait) et maintenant (présent)",
            "J’ai utilisé au moins une négation (ne… plus, ne… jamais, ne… pas encore)",
            "J’ai expliqué pourquoi l’habitude a changé",
            "J’ai parlé environ une minute, sans lire"
          ],
          modele: "Avant, au lycée, je faisais la sieste après le déjeuner, tous les jours, comme beaucoup d’élèves de ma classe. On posait la tête sur la table pendant une demi-heure. En France, je ne fais plus la sieste : les cours reprennent tout de suite, et à la bibliothèque, personne ne dort ! Au début, j’avais très sommeil l’après-midi, mais je m’y suis habituée. Maintenant, je bois un café après le déjeuner, comme mes camarades. Ce qui me manque un peu, c’est ce petit moment de calme au milieu de la journée. Finalement, je fais la sieste le week-end !"
        },
        {
          id: "a4",
          type: "oral",
          titre: "Raconter",
          sousTitre: "Raconter ses surprises",
          etape: "reemployer",
          duree: "20 min",
          consigne: "Au téléphone, un ami français te demande ce qui t’a surprise quand tu es arrivée en France (ou dans un autre pays). Compare avec tes habitudes en Chine et dis comment tu as changé.",
          prepMinutes: 1,
          preparation: [
            "Ce qui m’a le plus surprise, c’est…",
            "En Chine, on a l’habitude de…, alors qu’ici…",
            "Au début, …, mais maintenant…",
            "Je m’y suis habituée.",
            "Ce qui me manque, c’est…",
            "Ce que j’adore ici, c’est…"
          ],
          dureeCible: "1 minute 30",
          modele: "Ce qui m’a le plus surprise en arrivant, c’est le rythme de la journée. En Chine, on a l’habitude de dîner vers six heures, alors qu’ici, beaucoup de gens dînent à huit heures. Au début, j’avais toujours faim, mais maintenant, je prends un petit goûter l’après-midi, comme les Français. Les magasins fermés le dimanche aussi, ça m’a étonnée ! Chez moi, tout est ouvert tout le temps. Ce qui me manque, c’est la cuisine de ma mère, surtout ses nouilles. Mais ce que j’adore ici, c’est prendre le temps : les longs repas, les cafés en terrasse… Je crois que je suis devenue un peu plus patiente !",
          checklist: [
            "J’ai cité au moins deux surprises",
            "J’ai comparé avec la Chine (alors que, tandis que)",
            "J’ai utilisé l’imparfait et le présent pour montrer un changement",
            "J’ai dit ce qui me manque et ce que j’aime",
            "J’ai parlé au moins une minute",
            "Le navigateur a compris la plupart de mes mots"
          ]
        },
        {
          id: "ora2",
          type: "oral",
          titre: "Décrire et commenter",
          sousTitre: "Les étapes du choc culturel",
          etape: "reemployer",
          duree: "20 min",
          consigne: "Présente les quatre étapes du choc culturel décrites dans l’interview « Le choc culturel, ça se soigne ? », puis dis à quelle étape tu te trouves (ou tu t’es trouvée), avec un exemple de ta vie. Termine par un conseil.",
          dureeCible: "1 minute 30 à 2 minutes",
          prepMinutes: 1,
          plan: ["Présenter les quatre étapes", "Te situer, avec un exemple", "Donner un conseil"],
          preparation: [
            "Selon la psychologue, on passe souvent par quatre étapes.",
            "La première, c’est…, quand…",
            "Ensuite vient…",
            "Moi, je crois que je suis à l’étape…, parce que…",
            "Par exemple, …",
            "Si je devais donner un conseil, je dirais…"
          ],
          checklist: [
            "J’ai présenté les quatre étapes dans l’ordre",
            "J’ai utilisé des mots pour organiser (d’abord, ensuite, puis, enfin)",
            "J’ai situé mon expérience avec un exemple précis",
            "J’ai donné un conseil avec une expression variée",
            "J’ai parlé au moins une minute trente"
          ],
          modele: "Selon la psychologue de l’interview, on passe souvent par quatre étapes quand on vit dans une autre culture. D’abord, la lune de miel : tout est nouveau, on est enthousiaste. Ensuite vient le choc : les petites différences deviennent fatigantes, et on a le mal du pays. Puis, peu à peu, on trouve ses repères : c’est l’ajustement. Enfin, on se sent à l’aise dans les deux cultures. Moi, je crois que je suis à la troisième étape. Par exemple, en novembre, je ne supportais plus de manger froid à midi, et la nourriture de ma ville me manquait beaucoup. Maintenant, j’ai trouvé une petite cantine près de l’université, et j’y déjeune avec des amis. Si je devais donner un conseil, je dirais : n’hésite pas à parler de ce que tu ressens. Ça aide vraiment."
        },
        {
          id: "ora3",
          type: "oral",
          titre: "Simulation universitaire",
          sousTitre: "Accueillir un nouvel étudiant",
          etape: "reemployer",
          duree: "25 min",
          situation: "Tu es bénévole pour l’association d’accueil des étudiants internationaux de ton université. Tu rencontres Pedro, un étudiant brésilien qui vient d’arriver et qui ne connaît encore personne.",
          consigne: "Présente-toi, souhaite-lui la bienvenue, pose-lui deux questions sur son arrivée, puis donne-lui trois conseils pour ses premières semaines (démarches, vie quotidienne, rencontres). Termine en lui proposant une activité.",
          dureeCible: "2 minutes",
          prepMinutes: 1,
          plan: ["Te présenter et accueillir", "Poser deux questions", "Donner trois conseils", "Proposer une activité"],
          preparation: [
            "Bonjour, bienvenue ! Je m’appelle…, je suis bénévole à…",
            "Tu es arrivé quand ? Tu as déjà trouvé un logement ?",
            "Je te conseille de…",
            "N’hésite pas à…",
            "Il vaut mieux…",
            "Si tu veux, samedi, on organise…"
          ],
          checklist: [
            "J’ai accueilli Pedro chaleureusement",
            "J’ai posé deux questions",
            "J’ai donné trois conseils avec des expressions différentes",
            "J’ai utilisé au moins une fois en ou y",
            "J’ai proposé une activité concrète",
            "J’ai parlé environ deux minutes"
          ],
          modele: "Bonjour Pedro, bienvenue ! Je m’appelle Mei, je suis en deuxième année de sociologie et je suis bénévole à l’association d’accueil. Moi aussi, je suis arrivée de l’étranger il y a un an, alors je comprends ce que tu vis. Tu es arrivé quand ? … Il y a trois jours ? Et tu as déjà trouvé un logement ? … Une chambre en résidence, très bien. Alors, voici trois conseils. D’abord, je te conseille de faire tes démarches administratives dès cette semaine, parce qu’il y a souvent de l’attente. Ensuite, pour les courses, il vaut mieux y aller le samedi : le dimanche, beaucoup de magasins sont fermés. Enfin, n’hésite pas à participer aux activités des associations, même si tu es fatigué : c’est là que j’ai rencontré mes premiers amis. D’ailleurs, samedi, on organise un pique-nique au parc. Tu veux venir ? Tu y rencontreras des étudiants du monde entier !"
        }
      ]
    }
  }
});
