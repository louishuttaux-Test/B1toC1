/* Unité 2 : Entrer à l’université française (B1) — enrichie selon CHARTE.md (lot 2-4).
   Les exercices d’origine gardent leurs ids (a0 … a5) : la progression déjà enregistrée est conservée.
   Nouveaux ids : lec, eco, voc, gra, ecr, ora + numéro. Ne jamais renommer un id existant. */
ajouterUnite({
  id: 2,
  niveau: "b1",
  theme: "Études et université",
  titre: "Entrer à l’université française",
  objectif: "Comprendre l’organisation des études, exprimer la cause et la conséquence, et écrire un courriel formel à un enseignant.",
  enrichie: true,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Étudier à l’université en France : ce qui change",
          genre: "Article d’information",
          format: "long",
          texte: [
            "En France, l’enseignement supérieur est organisé selon le système LMD : licence (trois ans), master (deux ans) et doctorat (trois ans environ). Chaque année est divisée en deux semestres, et chaque semestre permet d’obtenir 30 crédits ECTS. Ce système, commun à la plupart des pays européens, facilite la mobilité des étudiants.",
            "Les cours prennent principalement deux formes. Le cours magistral (CM) se déroule dans un amphithéâtre : un enseignant présente le contenu devant plusieurs centaines d’étudiants, qui prennent des notes. Les échanges y sont rares. Les travaux dirigés (TD), au contraire, réunissent une trentaine d’étudiants : on y applique les notions du cours, on fait des exercices, on présente parfois un exposé. La présence en TD est généralement obligatoire, alors que l’assiduité en CM n’est pas toujours contrôlée.",
            "L’évaluation combine souvent contrôle continu et examens de fin de semestre, appelés partiels. Un étudiant qui échoue peut se présenter à une session de rattrapage, en général au début de l’été. Les notes sont attribuées sur 20, et une moyenne de 10 suffit pour valider une unité d’enseignement (UE).",
            "Pour beaucoup d’étudiants internationaux, la principale difficulté n’est pourtant pas la langue elle-même, mais l’autonomie attendue. Les enseignants donnent une bibliographie et considèrent que les étudiants la consulteront seuls ; personne ne vérifie si le travail personnel est fait. Par ailleurs, les copies doivent respecter des codes précis : une dissertation, par exemple, suit un plan annoncé dès l’introduction. Comprendre ces attentes implicites prend du temps, c’est pourquoi de nombreuses universités proposent des ateliers de méthodologie dès la première année."
          ]
        },
        d2: {
          titre: "Étudiants internationaux : votre rentrée en cinq étapes",
          genre: "Page institutionnelle",
          format: "court",
          texte: [
            "Bienvenue ! Vous venez d’arriver pour étudier dans notre université. Pour bien commencer l’année, le service des relations internationales vous conseille de suivre ces cinq étapes, dans l’ordre.",
            "<strong>1. L’inscription administrative.</strong> Elle se fait en ligne, puis au service de la scolarité. Comme elle est obligatoire pour obtenir votre carte d’étudiant, ne la repoussez pas : sans carte, vous ne pourrez pas emprunter de livres à la bibliothèque universitaire.",
            "<strong>2. L’inscription pédagogique.</strong> Elle consiste à choisir vos unités d’enseignement et vos groupes de TD. Les places sont limitées, c’est pourquoi il vaut mieux la faire dès la première semaine.",
            "<strong>3. L’espace numérique de travail (ENT).</strong> Vos emplois du temps, vos notes et les messages de vos enseignants y sont publiés. Consultez-le chaque jour, car les salles changent souvent en début de semestre.",
            "<strong>4. La réunion d’accueil.</strong> Elle a lieu le premier jeudi de la rentrée, à quatorze heures, dans l’amphithéâtre A. Vous y rencontrerez votre tuteur, un étudiant de troisième année qui vous aidera pendant tout le premier semestre.",
            "<strong>5. Les ateliers de méthodologie.</strong> Ils sont gratuits mais facultatifs. Pourtant, nous vous les recommandons vivement : on y apprend à prendre des notes, à préparer un exposé et à rédiger une dissertation."
          ]
        }
      },
      exercices: [
        {
          id: "lec1",
          type: "qcm",
          titre: "Compréhension globale",
          sousTitre: "Étudier à l’université en France : l’essentiel",
          etape: "comprendre",
          duree: "10 min",
          doc: "d1",
          consigne: "Lis le texte une première fois, sans t’arrêter sur les mots inconnus. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "De quel type de texte s’agit-il ?",
              options: [
                "Un article qui explique le fonctionnement des études universitaires en France",
                "Le règlement officiel d’une université",
                "Le témoignage d’une étudiante sur sa première année"
              ],
              answer: 0,
              explication: "Le texte informe de façon générale (« En France, l’enseignement supérieur est organisé… ») : personne ne raconte sa propre histoire."
            },
            {
              q: "À qui ce texte peut-il être le plus utile ?",
              options: [
                "Aux enseignants des universités françaises",
                "Aux futurs étudiants, en particulier aux étudiants internationaux",
                "Aux parents d’élèves de l’école primaire"
              ],
              answer: 1,
              explication: "Il explique ce qui « change » quand on entre à l’université, et le dernier paragraphe parle directement des étudiants internationaux."
            },
            {
              q: "De quoi parle le paragraphe 3 ?",
              options: [
                "Des deux formes de cours",
                "De l’évaluation et des notes",
                "Des difficultés des étudiants étrangers"
              ],
              answer: 1,
              explication: "Contrôle continu, partiels, rattrapage, notes sur 20 : c’est le paragraphe de l’évaluation."
            },
            {
              q: "Quelle est l’idée principale du dernier paragraphe ?",
              options: [
                "Les étudiants internationaux ont surtout des problèmes de langue.",
                "Les universités ne proposent aucune aide aux étudiants.",
                "Le plus difficile, c’est de comprendre ce qu’on attend des étudiants, sans qu’on le dise clairement."
              ],
              answer: 2,
              explication: "La difficulté principale est « l’autonomie attendue » et les « attentes implicites », pas la langue."
            }
          ]
        },
        {
          id: "a0",
          type: "qcm",
          titre: "Questions détaillées",
          sousTitre: "Étudier à l’université en France : les détails",
          etape: "reperer",
          duree: "15 min",
          doc: "d1",
          consigne: "Relis le texte. Réponds aux questions en cherchant dans le texte la phrase qui donne la réponse.",
          questions: [
            {
              q: "Combien de crédits ECTS un étudiant valide-t-il en une année complète ?",
              options: ["30", "120", "60"],
              answer: 2,
              explication: "Deux semestres de 30 crédits chacun, soit 60 crédits par an."
            },
            {
              q: "Quelle phrase décrit correctement la différence entre CM et TD ?",
              options: [
                "Le CM est un exposé devant un grand public, le TD un travail pratique en petit groupe.",
                "Le CM a lieu en petit groupe, le TD en amphithéâtre.",
                "Le TD est facultatif, alors que le CM est obligatoire."
              ],
              answer: 0,
              explication: "Le paragraphe 2 oppose l’amphithéâtre du CM aux trente étudiants du TD, où la présence est obligatoire."
            },
            {
              q: "Que sont les « partiels » ?",
              options: [
                "Des devoirs à rendre chaque semaine",
                "Les examens de fin de semestre",
                "Des examens réservés aux étudiants qui ont échoué"
              ],
              answer: 1,
              explication: "Les examens réservés aux étudiants qui ont échoué, c’est le rattrapage."
            },
            {
              q: "Selon l’auteur, quelle est la principale difficulté des étudiants internationaux ?",
              options: ["La langue française", "Le nombre d’examens", "L’autonomie attendue dans le travail"],
              answer: 2,
              explication: "« La principale difficulté n’est pourtant pas la langue elle-même, mais l’autonomie attendue. »"
            },
            {
              q: "Dans le paragraphe 4, « des attentes implicites » désigne :",
              options: [
                "des règles que personne ne formule, mais que l’on suppose connues",
                "des règles écrites dans le règlement de l’université",
                "des règles facultatives"
              ],
              answer: 0,
              explication: "« Implicite » s’oppose à « explicite » : ce qui n’est pas dit clairement mais que l’on attend quand même."
            },
            {
              q: "Dans le paragraphe 2, le connecteur « au contraire » exprime :",
              options: ["une cause", "une opposition", "une conséquence"],
              answer: 1,
              explication: "Il oppose le fonctionnement du TD à celui du CM. Tu retrouveras les connecteurs dans les exercices de grammaire."
            }
          ]
        },
        {
          id: "lec2",
          type: "qcm",
          titre: "Connecteurs et structure",
          sousTitre: "Comment le texte est construit",
          etape: "reperer",
          duree: "15 min",
          doc: "d1",
          regles: ["connecteurs-logiques"],
          consigne: "Observe les mots qui relient les idées et l’ordre des paragraphes. Choisis la bonne réponse.",
          questions: [
            {
              q: "« La présence en TD est généralement obligatoire, alors que l’assiduité en CM n’est pas toujours contrôlée. » Ici, « alors que » exprime :",
              options: ["une cause", "une opposition entre deux faits", "une conséquence"],
              answer: 1,
              explication: "Deux situations différentes sont mises côte à côte : le TD (obligatoire) et le CM (pas toujours contrôlé)."
            },
            {
              q: "« La principale difficulté n’est pourtant pas la langue elle-même. » Avec « pourtant », l’auteur :",
              options: [
                "contredit une idée que le lecteur a peut-être : on pense souvent que la langue est le plus difficile",
                "donne un exemple de difficulté",
                "conclut son texte"
              ],
              answer: 0,
              explication: "« Pourtant » annonce quelque chose d’inattendu : le lecteur s’attend à ce que la langue soit le problème principal."
            },
            {
              q: "« Par ailleurs, les copies doivent respecter des codes précis. » « Par ailleurs » sert à :",
              options: ["conclure", "opposer deux idées", "ajouter une autre idée"],
              answer: 2,
              explication: "Après l’autonomie, l’auteur ajoute une deuxième difficulté : les codes des copies."
            },
            {
              q: "« Comprendre ces attentes implicites prend du temps, c’est pourquoi de nombreuses universités proposent des ateliers de méthodologie. » Les ateliers sont :",
              options: [
                "la cause de la difficulté",
                "un exemple d’attente implicite",
                "une conséquence de la difficulté"
              ],
              answer: 2,
              explication: "« C’est pourquoi » introduit une conséquence : comme c’est difficile, les universités proposent une aide."
            },
            {
              q: "Dans quel ordre le texte présente-t-il les informations ?",
              options: [
                "les cours, puis les diplômes, puis l’évaluation, puis les difficultés",
                "les diplômes, puis les cours, puis l’évaluation, puis les difficultés",
                "les difficultés, puis les cours, puis l’évaluation, puis les diplômes"
              ],
              answer: 1,
              explication: "Le texte va du plus général (le système LMD) au plus personnel (les difficultés des étudiants)."
            }
          ]
        },
        {
          id: "lec3",
          type: "vraifaux",
          titre: "Vrai ou faux justifié",
          sousTitre: "Votre rentrée en cinq étapes",
          etape: "reperer",
          duree: "15 min",
          doc: "d2",
          consigne: "Lis la page de l’université. Dis si l’affirmation est vraie ou fausse, puis choisis la phrase du texte qui le prouve.",
          items: [
            {
              affirmation: "L’inscription administrative se fait entièrement sur internet.",
              vrai: false,
              justifs: [
                "Elle se fait en ligne, puis au service de la scolarité",
                "Elle consiste à choisir vos unités d’enseignement",
                "Consultez-le chaque jour"
              ],
              answer: 0,
              explication: "Elle commence en ligne, mais il faut ensuite aller au service de la scolarité."
            },
            {
              affirmation: "Sans carte d’étudiant, on ne peut pas emprunter de livres.",
              vrai: true,
              justifs: [
                "Comme elle est obligatoire pour obtenir votre carte d’étudiant",
                "sans carte, vous ne pourrez pas emprunter de livres à la bibliothèque universitaire",
                "Les places sont limitées"
              ],
              answer: 1,
              explication: "La page le dit clairement : sans carte, pas d’emprunt à la bibliothèque."
            },
            {
              affirmation: "On peut choisir ses groupes de TD quand on veut pendant le semestre.",
              vrai: false,
              justifs: [
                "Elle consiste à choisir vos unités d’enseignement et vos groupes de TD",
                "Les places sont limitées, c’est pourquoi il vaut mieux la faire dès la première semaine",
                "les salles changent souvent en début de semestre"
              ],
              answer: 1,
              explication: "Les places sont limitées : si on attend, il n’y aura peut-être plus de place."
            },
            {
              affirmation: "Les enseignants publient des informations sur l’ENT.",
              vrai: true,
              justifs: [
                "Vos emplois du temps, vos notes et les messages de vos enseignants y sont publiés",
                "Vous y rencontrerez votre tuteur",
                "on y apprend à prendre des notes"
              ],
              answer: 0,
              explication: "« y » remplace « sur l’ENT » : les messages des enseignants y sont publiés."
            },
            {
              affirmation: "Le tuteur est un enseignant de l’université.",
              vrai: false,
              justifs: [
                "Elle a lieu le premier jeudi de la rentrée",
                "un étudiant de troisième année qui vous aidera pendant tout le premier semestre",
                "les messages de vos enseignants"
              ],
              answer: 1,
              explication: "Le tuteur est un étudiant plus avancé, en troisième année, pas un enseignant."
            },
            {
              affirmation: "Les ateliers de méthodologie ne coûtent rien.",
              vrai: true,
              justifs: [
                "Ils sont gratuits mais facultatifs",
                "nous vous les recommandons vivement",
                "à rédiger une dissertation"
              ],
              answer: 0,
              explication: "« Gratuit » veut dire qu’on ne paie pas."
            }
          ]
        },
        {
          id: "lec4",
          type: "qcm",
          titre: "Vocabulaire et implicite",
          sousTitre: "Ce que la page veut te dire",
          etape: "interpreter",
          duree: "10 min",
          doc: "d2",
          consigne: "Relis la page. Trouve le sens des expressions grâce au contexte, puis ce que l’université veut faire comprendre.",
          questions: [
            {
              q: "« Ne la repoussez pas » signifie :",
              options: ["Ne la faites pas plus tard.", "Ne la refusez pas.", "Ne la faites pas seul."],
              answer: 0,
              explication: "Repousser une démarche, c’est la remettre à plus tard. La suite explique pourquoi c’est une mauvaise idée."
            },
            {
              q: "« Les places sont limitées » veut dire que :",
              options: [
                "les salles de TD sont petites et inconfortables",
                "chaque groupe accepte un nombre maximum d’étudiants",
                "les TD sont payants"
              ],
              answer: 1,
              explication: "Une place limitée : il y a un nombre maximum. Les premiers inscrits sont servis."
            },
            {
              q: "Que risque un étudiant qui ne consulte pas l’ENT pendant la première semaine ?",
              options: [
                "Perdre sa carte d’étudiant",
                "Ne pas avoir de tuteur",
                "Se tromper de salle ou manquer un message d’un enseignant"
              ],
              answer: 2,
              explication: "Le texte dit que les salles changent souvent et que les messages des enseignants sont publiés sur l’ENT."
            },
            {
              q: "« Ils sont gratuits mais facultatifs. Pourtant, nous vous les recommandons vivement. » Que veut faire comprendre l’université ?",
              options: [
                "Qu’on peut ignorer ces ateliers sans problème",
                "Que les ateliers sont très utiles, même s’ils ne sont pas obligatoires",
                "Que les ateliers sont réservés aux étudiants en difficulté"
              ],
              answer: 1,
              explication: "« Pourtant » et « vivement » insistent : ce n’est pas obligatoire, mais c’est fortement conseillé."
            },
            {
              q: "La page vouvoie le lecteur et donne des instructions (« consultez-le », « ne la repoussez pas »). Quel est son ton ?",
              options: [
                "Familier et amusant",
                "Autoritaire et menaçant",
                "Formel, mais accueillant : elle guide le lecteur"
              ],
              answer: 2,
              explication: "Elle commence par « Bienvenue ! » et explique chaque conseil : elle est formelle, mais bienveillante."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Le premier cours d’un semestre",
          genre: "Cours (présentation)",
          voix: "h",
          transcription: "Bonjour à toutes et à tous, et bienvenue dans ce cours d’introduction à la sociologie urbaine. Avant de commencer, quelques informations pratiques. Le cours magistral a lieu tous les mardis, de dix heures à midi, ici, dans l’amphithéâtre B. Les TD commenceront la semaine prochaine seulement, et non pas cette semaine, comme c’est indiqué sur votre emploi du temps. Pour l’évaluation : la note finale sera composée à cinquante pour cent du contrôle continu en TD, et à cinquante pour cent d’un examen écrit en fin de semestre. Attention, l’examen dure trois heures, et il s’agira d’une dissertation, pas d’un questionnaire. Je vous conseille donc vivement de lire les deux premiers ouvrages de la bibliographie avant les vacances de la Toussaint. Vous trouverez le plan du cours et la bibliographie complète sur Moodle dès ce soir. Enfin, si vous avez une question, écrivez-moi plutôt par courriel que de venir me voir à la fin du cours : je ne suis pas toujours disponible. Je réponds en général sous quarante-huit heures. Bien, commençons."
        },
        e2: {
          titre: "Le rendez-vous avec le tuteur",
          genre: "Dialogue entre deux étudiants",
          locuteurs: { "Malik": "h", "Ruoxi": "f" },
          repliques: [
            { loc: "Malik", texte: "Salut, tu es Ruoxi ? Moi, c’est Malik, ton tuteur. Je suis en troisième année de sociologie. Alors, ta première semaine, ça s’est bien passé ?" },
            { loc: "Ruoxi", texte: "Bonjour… euh, salut ! Oui, ça va, mais je suis un peu perdue. En amphi, le professeur parle très vite, et je n’arrive pas à tout noter." },
            { loc: "Malik", texte: "C’est normal, tout le monde est passé par là. Moi, en première année, j’essayais d’écrire chaque phrase, et du coup, je ne comprenais rien. Il ne faut pas tout noter : note les idées principales et les mots-clés, et complète tes notes le soir même avec le plan du cours." },
            { loc: "Ruoxi", texte: "Le soir même ? Je pensais faire ça le week-end." },
            { loc: "Malik", texte: "Franchement, le week-end, c’est trop tard : tu as déjà oublié la moitié. Et autre chose : en TD, n’aie pas peur de parler. Le contrôle continu compte pour la moitié de la note, et la participation en fait partie." },
            { loc: "Ruoxi", texte: "Justement, c’est ce qui me fait peur. Dans mon lycée, en Chine, on ne posait presque jamais de questions pendant le cours." },
            { loc: "Malik", texte: "Je comprends. Mais ici, les chargés de TD apprécient vraiment qu’on pose des questions, même simples. Comme ça, ils voient que tu travailles. Si tu veux, on peut préparer ensemble ta première intervention." },
            { loc: "Ruoxi", texte: "Ah oui, ce serait super ! Et pour la bibliothèque ? Je n’ai pas encore ma carte." },
            { loc: "Malik", texte: "Alors ça, c’est la priorité, parce que sans carte, tu ne peux rien emprunter. Prends vite rendez-vous à la scolarité : ça se fait sur l’espace numérique de travail. Et on se retrouve jeudi à la bibliothèque, d’accord ?" },
            { loc: "Ruoxi", texte: "D’accord. Merci beaucoup, Malik !" }
          ]
        },
        e3: {
          titre: "Le répondeur de la scolarité",
          genre: "Message d’accueil téléphonique",
          format: "court",
          voix: "f",
          transcription: "Bonjour, vous êtes bien au service de la scolarité de la faculté des sciences humaines. Nos bureaux sont actuellement fermés. Nous vous accueillons du lundi au vendredi, de neuf heures à midi, et de quatorze heures à seize heures trente, sauf le mercredi après-midi. Pendant les deux premières semaines de la rentrée, l’accueil se fait uniquement sur rendez-vous : vous pouvez réserver un créneau sur votre espace numérique de travail. Pour toute question sur une inscription pédagogique, adressez-vous directement au secrétariat de votre département. Si votre demande concerne une bourse, merci d’écrire au service de la vie étudiante. N’oubliez pas d’apporter une pièce d’identité et une photo à chaque rendez-vous. Merci de votre appel, et bonne rentrée !"
        }
      },
      exercices: [
        {
          id: "eco1",
          type: "qcm",
          titre: "Sujet et interlocuteurs",
          sousTitre: "Le rendez-vous avec le tuteur",
          etape: "comprendre",
          duree: "10 min",
          doc: "e2",
          consigne: "Écoute la conversation une première fois, sans t’arrêter. Puis réponds à ces questions sur l’essentiel.",
          questions: [
            {
              q: "Qui sont les deux personnes ?",
              options: [
                "Une étudiante de première année et un étudiant plus avancé qui l’aide",
                "Une étudiante et son enseignant",
                "Une étudiante et un employé de la scolarité"
              ],
              answer: 0,
              explication: "Malik est « en troisième année » et se présente comme le tuteur de Ruoxi."
            },
            {
              q: "Pourquoi Ruoxi se sent-elle un peu perdue ?",
              options: [
                "Elle ne trouve pas la salle de TD.",
                "Elle n’arrive pas à tout noter en amphi.",
                "Elle n’aime pas ses cours."
              ],
              answer: 1,
              explication: "« Le professeur parle très vite, et je n’arrive pas à tout noter. »"
            },
            {
              q: "De quoi parlent-ils surtout ?",
              options: [
                "De la vie en colocation",
                "Des examens de fin d’année",
                "Des méthodes de travail à l’université"
              ],
              answer: 2,
              explication: "Prise de notes, participation en TD, bibliothèque : Malik donne des conseils de méthode."
            },
            {
              q: "Comment se termine la conversation ?",
              options: [
                "Ruoxi refuse l’aide de Malik.",
                "Ils prévoient de se revoir jeudi à la bibliothèque.",
                "Malik prête sa carte à Ruoxi."
              ],
              answer: 1,
              explication: "« On se retrouve jeudi à la bibliothèque, d’accord ? — D’accord. »"
            }
          ]
        },
        {
          id: "a1",
          type: "qcm",
          titre: "Informations précises",
          sousTitre: "Le premier cours d’un semestre",
          etape: "reperer",
          duree: "15 min",
          doc: "e1",
          consigne: "Un enseignant présente son cours lors de la première séance. Lis d’abord les questions, puis écoute. Tu peux réécouter autant de fois que nécessaire, et ralentir la voix si besoin.",
          questions: [
            {
              q: "Quand les TD commencent-ils ?",
              options: ["Cette semaine", "Après les vacances de la Toussaint", "La semaine prochaine"],
              answer: 2,
              explication: "L’enseignant corrige l’emploi du temps : « la semaine prochaine seulement, et non pas cette semaine »."
            },
            {
              q: "Comment la note finale est-elle calculée ?",
              options: [
                "Moitié contrôle continu, moitié examen final",
                "Uniquement avec l’examen final",
                "Deux tiers contrôle continu, un tiers examen"
              ],
              answer: 0,
              explication: "Cinquante pour cent pour chacun."
            },
            {
              q: "Quelle forme prendra l’examen ?",
              options: ["Un questionnaire à choix multiples", "Une dissertation de trois heures", "Un oral"],
              answer: 1,
              explication: "« Il s’agira d’une dissertation, pas d’un questionnaire. »"
            },
            {
              q: "Que conseille l’enseignant ?",
              options: [
                "Imprimer le plan du cours",
                "Venir le voir à la fin de chaque cours",
                "Lire deux ouvrages de la bibliographie avant la Toussaint"
              ],
              answer: 2,
              explication: "« Je vous conseille donc vivement de lire les deux premiers ouvrages… »"
            },
            {
              q: "Quel est le meilleur moyen de le contacter ?",
              options: ["Par courriel", "À la fin du cours", "Sur Moodle"],
              answer: 0,
              explication: "Il préfère les courriels et répond sous quarante-huit heures. C’est justement le sujet des exercices d’écriture."
            }
          ]
        },
        {
          id: "eco2",
          type: "saisie",
          titre: "Prise de notes",
          sousTitre: "Le répondeur de la scolarité",
          etape: "reperer",
          duree: "15 min",
          doc: "e3",
          consigne: "Tu appelles la scolarité, mais tu tombes sur le répondeur. Écoute le message et complète tes notes avec quelques mots seulement (pas de phrases complètes).",
          libelle: "",
          items: [
            {
              avant: "Jours d’ouverture :",
              cles: ["lundi", "vendredi"],
              reponses: ["du lundi au vendredi"],
              explication: "« Nous vous accueillons du lundi au vendredi »"
            },
            {
              avant: "Horaires du matin :",
              cles: ["neuf|9", "midi|12"],
              reponses: ["de neuf heures à midi"],
              explication: "« de neuf heures à midi »"
            },
            {
              avant: "Fermé :",
              cles: ["mercredi"],
              reponses: ["le mercredi après-midi"],
              explication: "« sauf le mercredi après-midi »"
            },
            {
              avant: "Les deux premières semaines :",
              cles: ["rendez-vous|rdv"],
              reponses: ["uniquement sur rendez-vous, à réserver sur l’ENT"],
              explication: "« l’accueil se fait uniquement sur rendez-vous : vous pouvez réserver un créneau sur votre espace numérique de travail »"
            },
            {
              avant: "Question d’inscription pédagogique :",
              cles: ["secretariat|departement"],
              reponses: ["le secrétariat du département"],
              explication: "« adressez-vous directement au secrétariat de votre département »"
            },
            {
              avant: "Question de bourse :",
              cles: ["vie etudiante"],
              reponses: ["écrire au service de la vie étudiante"],
              explication: "« merci d’écrire au service de la vie étudiante »"
            },
            {
              avant: "À apporter :",
              cles: ["identite", "photo"],
              reponses: ["une pièce d’identité et une photo"],
              explication: "Il faut noter les deux documents : la pièce d’identité et la photo."
            }
          ]
        },
        {
          id: "eco3",
          type: "qcm",
          titre: "Conseils et opinions",
          sousTitre: "Le rendez-vous avec le tuteur",
          etape: "interpreter",
          duree: "15 min",
          doc: "e2",
          consigne: "Réécoute la conversation. Cette fois, fais attention aux conseils de Malik, à ses raisons et à ce que ressent Ruoxi.",
          questions: [
            {
              q: "Selon Malik, pourquoi ne faut-il pas tout noter en amphi ?",
              options: [
                "Parce que le professeur l’interdit",
                "Parce qu’en essayant de tout écrire, on ne comprend plus rien",
                "Parce que tout le cours est sur Moodle"
              ],
              answer: 1,
              explication: "Il raconte son expérience : « j’essayais d’écrire chaque phrase, et du coup, je ne comprenais rien »."
            },
            {
              q: "Que pense Malik de l’idée de compléter ses notes le week-end ?",
              options: [
                "C’est une très bonne idée.",
                "C’est inutile : il ne faut jamais relire ses notes.",
                "C’est trop tard : on a déjà oublié une grande partie du cours."
              ],
              answer: 2,
              explication: "« Le week-end, c’est trop tard : tu as déjà oublié la moitié. »"
            },
            {
              q: "« Justement, c’est ce qui me fait peur. » Que ressent Ruoxi ?",
              options: [
                "De l’inquiétude à l’idée de parler en TD",
                "De la colère contre son tuteur",
                "De l’ennui"
              ],
              answer: 0,
              explication: "Parler en TD lui fait peur, car dans son lycée, on ne posait presque jamais de questions."
            },
            {
              q: "Pour Malik, pourquoi est-il utile de poser des questions en TD ?",
              options: [
                "Cela permet de finir le TD plus tôt.",
                "Cela montre qu’on travaille, et la participation compte dans la note.",
                "Cela évite de lire la bibliographie."
              ],
              answer: 1,
              explication: "« Comme ça, ils voient que tu travailles » et « la participation en fait partie » (du contrôle continu)."
            },
            {
              q: "Quel est le ton de Malik ?",
              options: ["Sévère et distant", "Moqueur", "Rassurant et concret"],
              answer: 2,
              explication: "Il dit « c’est normal », « je comprends », et propose son aide : il rassure et donne des conseils précis."
            }
          ]
        },
        {
          id: "eco4",
          type: "qcm",
          titre: "Ton et sous-entendus",
          sousTitre: "Le premier cours d’un semestre",
          etape: "interpreter",
          duree: "10 min",
          doc: "e1",
          consigne: "Réécoute l’enseignant. Que veut-il faire comprendre, sans toujours le dire directement ?",
          questions: [
            {
              q: "« Les TD commenceront la semaine prochaine seulement, et non pas cette semaine, comme c’est indiqué sur votre emploi du temps. » Que comprend-on ?",
              options: [
                "L’emploi du temps contient une erreur.",
                "Les TD sont annulés pour tout le semestre.",
                "Les étudiants n’ont pas reçu d’emploi du temps."
              ],
              answer: 0,
              explication: "Il corrige l’information de l’emploi du temps : ce qui est écrit est faux."
            },
            {
              q: "« Je vous conseille donc vivement de lire… » Avec « vivement », l’enseignant :",
              options: [
                "fait une simple suggestion, sans importance",
                "insiste : c’est presque une obligation",
                "plaisante"
              ],
              answer: 1,
              explication: "« Vivement » renforce le conseil : il est très important de le suivre."
            },
            {
              q: "Pourquoi conseille-t-il de lire avant la Toussaint ? Le mot « donc » t’aide.",
              options: [
                "Parce que la bibliothèque ferme pendant les vacances",
                "Parce que les livres coûtent cher",
                "Parce que l’examen sera une dissertation, qui demande de vraies lectures"
              ],
              answer: 2,
              explication: "« Donc » relie le conseil à la phrase précédente : l’examen est une dissertation de trois heures."
            },
            {
              q: "« Écrivez-moi plutôt par courriel que de venir me voir à la fin du cours : je ne suis pas toujours disponible. » Que sous-entend-il ?",
              options: [
                "Qu’il ne veut pas répondre aux questions",
                "Qu’après le cours, il n’a souvent pas le temps de discuter",
                "Qu’il ne lit pas ses courriels"
              ],
              answer: 1,
              explication: "Il accepte les questions, mais préfère les recevoir par écrit, au moment où il peut y répondre."
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
          sousTitre: "Le lexique de l’université",
          etape: "comprendre",
          duree: "10 min",
          consigne: "Associe chaque mot ou expression à sa définition.",
          items: [
            {
              terme: "un amphithéâtre",
              definition: "une grande salle en gradins où ont lieu les cours magistraux"
            },
            { terme: "les partiels", definition: "les examens écrits organisés à la fin de chaque semestre" },
            {
              terme: "le rattrapage",
              definition: "une seconde session d’examen pour les étudiants qui ont échoué"
            },
            { terme: "le contrôle continu", definition: "une évaluation répartie sur tout le semestre" },
            { terme: "la bibliographie", definition: "la liste des ouvrages à lire pour un cours" },
            {
              terme: "un maître de conférences",
              definition: "un enseignant-chercheur titulaire à l’université"
            },
            {
              terme: "valider une UE",
              definition: "obtenir au moins 10 sur 20 dans une unité d’enseignement"
            },
            { terme: "l’assiduité", definition: "le fait d’être présent régulièrement en cours" }
          ]
        },
        {
          id: "voc1",
          type: "qcm",
          titre: "Synonymes et contraires",
          sousTitre: "Des mots des documents",
          etape: "reperer",
          duree: "10 min",
          consigne: "Choisis le synonyme ou le contraire demandé. Tous les mots viennent des textes et des écoutes de l’unité.",
          questions: [
            {
              q: "Le contraire de « échouer à un examen » :",
              options: ["réussir un examen", "passer un examen", "repasser un examen"],
              answer: 0,
              explication: "Attention : « passer un examen », c’est seulement le faire. Le contraire d’échouer, c’est réussir."
            },
            {
              q: "Le contraire de « obligatoire » :",
              options: ["imposé", "facultatif", "gratuit"],
              answer: 1,
              explication: "Facultatif : on peut choisir de le faire ou non. « Gratuit » concerne le prix."
            },
            {
              q: "Un synonyme de « assister à un cours » :",
              options: ["donner un cours", "annuler un cours", "être présent à un cours"],
              answer: 2,
              explication: "Assister à = être présent. Attention au faux ami anglais « assist » (aider) !"
            },
            {
              q: "Le contraire de « l’assiduité » :",
              options: ["la présence régulière", "les absences répétées", "l’attention"],
              answer: 1,
              explication: "L’assiduité, c’est la présence régulière ; son contraire, ce sont des absences fréquentes."
            },
            {
              q: "Dans « lire les deux premiers ouvrages de la bibliographie », un synonyme de « un ouvrage » :",
              options: ["un livre", "un travail manuel", "un exercice"],
              answer: 0,
              explication: "Dans une bibliographie, un ouvrage est un livre. Le mot est un peu plus soutenu."
            },
            {
              q: "« Rattraper une séance » signifie :",
              options: [
                "refaire le travail d’une séance qu’on a manquée",
                "arriver en retard à une séance",
                "annuler une séance"
              ],
              answer: 0,
              explication: "Rattraper = récupérer un retard. On retrouve le même mot dans « la session de rattrapage »."
            }
          ]
        },
        {
          id: "voc2",
          type: "trous",
          titre: "Le mot juste",
          sousTitre: "Passer, réussir, suivre : les verbes des études",
          etape: "reperer",
          duree: "15 min",
          fiche: "<p><strong>Passer</strong> un examen = le faire (on ne connaît pas encore le résultat). <strong>Réussir</strong> un examen = l’avoir. <strong>Repasser</strong> = le faire une deuxième fois.</p><p><strong>Suivre</strong> un cours = y aller régulièrement. Attention : <em>je suis</em> peut venir de <em>suivre</em> ou de <em>être</em>. <strong>Assister à</strong> = être présent.</p><p><strong>Rendre</strong> un devoir, un dossier = le donner à l’enseignant. <strong>Valider</strong> une UE = obtenir la moyenne.</p>",
          consigne: "Choisis le verbe qui convient.",
          phrases: [
            {
              avant: "Demain, je",
              options: ["rate", "passe", "réussis"],
              answer: 1,
              apres: "mon premier partiel : souhaite-moi bonne chance !",
              explication: "Le résultat n’est pas encore connu (« bonne chance ») : on passe un examen."
            },
            {
              avant: "Bonne nouvelle : j’ai",
              options: ["passé", "suivi", "réussi"],
              answer: 2,
              apres: "mon partiel avec quatorze sur vingt !",
              explication: "Quatorze sur vingt, c’est une bonne note : l’examen est réussi."
            },
            {
              avant: "Ce semestre, je",
              options: ["assiste", "suis", "donne"],
              answer: 1,
              apres: "un cours de sociologie urbaine.",
              explication: "Suivre un cours (je suis). « Assister » se construit avec « à » ; « donner un cours », c’est le rôle de l’enseignant."
            },
            {
              avant: "Le TD est obligatoire : il faut",
              options: ["rendre", "assister à", "s’inscrire"],
              answer: 1,
              apres: "toutes les séances.",
              explication: "Assister à une séance = être présent."
            },
            {
              avant: "Vous devez",
              options: ["rendre", "passer", "suivre"],
              answer: 0,
              apres: "votre dossier avant le 15 novembre.",
              explication: "On rend un devoir ou un dossier à l’enseignant."
            },
            {
              avant: "Avant le 30 septembre, tu dois",
              options: ["réussir", "assister", "t’inscrire"],
              answer: 2,
              apres: "à la scolarité pour obtenir ta carte.",
              explication: "S’inscrire : faire les démarches pour devenir étudiant."
            },
            {
              avant: "Il a eu huit sur vingt : il n’a pas",
              options: ["validé", "passé", "suivi"],
              answer: 0,
              apres: "l’UE.",
              explication: "Il faut dix sur vingt pour valider une UE."
            },
            {
              avant: "Si tu échoues en janvier, tu pourras",
              options: ["rendre", "réussir", "repasser"],
              answer: 2,
              apres: "l’examen au rattrapage.",
              explication: "Repasser = passer une deuxième fois."
            }
          ]
        },
        {
          id: "voc3",
          type: "registre",
          titre: "Registres de langue",
          sousTitre: "La fac, l’université, l’établissement",
          etape: "interpreter",
          duree: "10 min",
          regles: ["registres-de-langue"],
          consigne: "Pour chaque phrase, choisis le registre : familier (entre amis), courant (avec tout le monde) ou soutenu (à l’écrit formel).",
          items: [
            {
              phrase: "Je vais à la fac demain matin.",
              answer: "familier",
              explication: "« La fac » est l’abréviation familière de « la faculté » ou de « l’université »."
            },
            {
              phrase: "J’ai séché le cours de mardi.",
              answer: "familier",
              explication: "« Sécher un cours » = ne pas y aller volontairement. C’est familier."
            },
            {
              phrase: "Je n’ai pas pu assister au cours de mardi.",
              answer: "courant",
              explication: "Phrase neutre, possible avec tout le monde."
            },
            {
              phrase: "Je vous saurais gré de bien vouloir m’indiquer la date du rattrapage.",
              answer: "soutenu",
              explication: "« Savoir gré » (être reconnaissant) et « bien vouloir » appartiennent à l’écrit très formel."
            },
            {
              phrase: "Le prof nous a filé une tonne de bouquins à lire.",
              answer: "familier",
              explication: "« Le prof », « filer » (donner), « une tonne de », « des bouquins » : quatre marques familières."
            },
            {
              phrase: "L’enseignante nous a donné une longue bibliographie.",
              answer: "courant",
              explication: "C’est la même idée que la phrase précédente, en registre courant."
            },
            {
              phrase: "Je vous prie de bien vouloir excuser mon absence.",
              answer: "soutenu",
              explication: "Formule typique du courriel ou de la lettre formelle."
            },
            {
              phrase: "Est-ce que vous pourriez m’envoyer le plan du cours ?",
              answer: "courant",
              explication: "Le conditionnel est poli, mais « est-ce que » reste courant. En soutenu : « Pourriez-vous… ? »"
            }
          ]
        },
        {
          id: "voc4",
          type: "ecriture",
          titre: "Réemploi",
          sousTitre: "Ma première semaine à l’université",
          etape: "reemployer",
          duree: "15 min",
          consigne: "Écris un court paragraphe sur ta première semaine à l’université (réelle ou imaginée), en utilisant au moins six mots ou expressions de cette unité.",
          objectifs: [
            "Réemployer au moins six mots du lexique de l’université",
            "Employer correctement passer, réussir, suivre ou assister à"
          ],
          min: 50,
          max: 100,
          checklist: [
            "J’ai utilisé au moins six mots ou expressions de l’unité",
            "J’ai employé au moins un des verbes passer, réussir, suivre, assister à, sans erreur de construction",
            "J’ai organisé ma semaine dans le temps (lundi, ensuite, jeudi…)",
            "J’ai dit ce que je ressentais"
          ],
          modele: "Ma première semaine à l’université a été intense. Lundi, j’ai assisté à mon premier cours magistral dans un immense amphithéâtre. Le professeur parlait vite, mais j’ai noté les idées principales. Mardi, je me suis inscrite à deux groupes de TD, car les places étaient limitées. Jeudi, mon tuteur m’a expliqué la différence entre le contrôle continu et les partiels. La bibliographie me stresse un peu, mais je suis contente : je sais maintenant comment valider mes UE."
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "gra1",
          type: "qcm",
          titre: "Observer",
          sousTitre: "Quelle relation logique ?",
          etape: "comprendre",
          duree: "10 min",
          regles: ["connecteurs-logiques"],
          consigne: "Ces phrases viennent des documents de l’unité. Observe le connecteur indiqué et dis quelle relation il exprime.",
          questions: [
            {
              q: "« Comme elle est obligatoire pour obtenir votre carte d’étudiant, ne la repoussez pas. » Ici, « comme » introduit :",
              options: ["une cause", "une conséquence", "une comparaison"],
              answer: 0,
              explication: "En début de phrase, suivi d’un verbe conjugué, « comme » introduit la cause : elle est obligatoire, donc ne la repoussez pas."
            },
            {
              q: "« Les places sont limitées, c’est pourquoi il vaut mieux la faire dès la première semaine. » « C’est pourquoi » introduit :",
              options: ["une cause", "une opposition", "une conséquence"],
              answer: 2,
              explication: "Les places sont limitées (cause) → il faut s’inscrire vite (conséquence)."
            },
            {
              q: "« Consultez-le chaque jour, car les salles changent souvent. » « Car » introduit :",
              options: ["une conséquence", "une cause", "un but"],
              answer: 1,
              explication: "« Car » explique pourquoi il faut consulter l’ENT : les salles changent."
            },
            {
              q: "« L’examen est une dissertation. Je vous conseille donc de lire les deux premiers ouvrages. » « Donc » introduit :",
              options: ["une conséquence", "une cause", "une opposition"],
              answer: 0,
              explication: "Le conseil de lire est la conséquence logique de la forme de l’examen."
            },
            {
              q: "« Ils sont gratuits mais facultatifs. Pourtant, nous vous les recommandons vivement. » « Pourtant » exprime :",
              options: [
                "une cause",
                "une concession : on attendrait le contraire",
                "une conséquence"
              ],
              answer: 1,
              explication: "Comme les ateliers sont facultatifs, on pourrait penser qu’ils sont peu utiles ; pourtant, l’université les recommande."
            },
            {
              q: "Dans « Il a raté le partiel parce qu’il n’avait pas révisé », quelle partie est la cause ?",
              options: ["Toute la phrase", "« il a raté le partiel »", "« il n’avait pas révisé »"],
              answer: 2,
              explication: "« Parce que » introduit toujours la cause. Le résultat (la conséquence), c’est l’échec au partiel."
            }
          ]
        },
        {
          id: "a3",
          type: "trous",
          titre: "Choisir le connecteur",
          regles: ["connecteurs-logiques"],
          sousTitre: "Les connecteurs logiques",
          etape: "reperer",
          duree: "15 min",
          fiche: "<p>Les connecteurs organisent ta pensée. À l’université, ils sont indispensables : un correcteur les cherche pour suivre ton raisonnement.</p> <table class=\"fiche-table\"> <thead><tr><th scope=\"col\">Relation</th><th scope=\"col\">Connecteurs</th><th scope=\"col\">Exemple</th></tr></thead> <tbody> <tr><th scope=\"row\">Cause</th><td>car, parce que, puisque, étant donné que, en raison de + nom</td><td>Le cours est annulé en raison de la grève.</td></tr> <tr><th scope=\"row\">Conséquence</th><td>donc, c’est pourquoi, par conséquent, si bien que</td><td>J’ai échoué ; par conséquent, je passe le rattrapage.</td></tr> <tr><th scope=\"row\">Opposition</th><td>mais, alors que, tandis que, au contraire, en revanche</td><td>Le CM est passif ; le TD, en revanche, est interactif.</td></tr> <tr><th scope=\"row\">Concession</th><td>pourtant, cependant, même si, bien que + subjonctif</td><td>Bien qu’il soit malade, il est venu.</td></tr> </tbody> </table> <p><strong>À retenir.</strong> <em>Puisque</em> présente une cause que l’interlocuteur connaît déjà. <em>Bien que</em> est toujours suivi du subjonctif, contrairement à <em>même si</em>. <em>En raison de</em> est suivi d’un nom, jamais d’un verbe conjugué.</p>",
          consigne: "Choisis le connecteur qui convient.",
          phrases: [
            {
              avant: "La présence en TD est obligatoire,",
              options: ["puisque", "donc", "alors que"],
              answer: 2,
              apres: "l’assiduité en CM n’est pas contrôlée.",
              explication: "Deux situations opposées : opposition."
            },
            {
              avant: "Il a raté le partiel ;",
              options: ["par conséquent", "pourtant", "tandis que"],
              answer: 0,
              apres: ", il devra passer le rattrapage.",
              explication: "Le rattrapage est la conséquence de l’échec."
            },
            {
              avant: "",
              options: ["Puisque", "Bien que", "Parce que"],
              answer: 1,
              apres: "son dossier soit complet, sa demande de bourse a été refusée.",
              explication: "« soit » est au subjonctif : seul « bien que » est possible, et le sens est une concession."
            },
            {
              avant: "Le cours a été annulé",
              options: ["si bien que", "bien que", "en raison de"],
              answer: 2,
              apres: "la grève des transports.",
              explication: "Suivi d’un nom (la grève) : « en raison de »."
            },
            {
              avant: "",
              options: ["Puisque", "Pourtant", "Alors que"],
              answer: 0,
              apres: "tu as déjà lu ce livre, tu pourrais me le résumer ?",
              explication: "La cause est connue des deux personnes : « puisque »."
            },
            {
              avant: "La bibliographie est longue ;",
              options: ["car", "cependant", "c’est pourquoi"],
              answer: 1,
              apres: ", les enseignants ne vérifient pas si on l’a lue.",
              explication: "On attendrait un contrôle, mais il n’y en a pas : concession."
            },
            {
              avant: "Elle parle très bien français",
              options: ["en revanche", "mais", "car"],
              answer: 2,
              apres: "elle a vécu cinq ans à Lyon.",
              explication: "Vivre à Lyon explique son niveau : cause."
            },
            {
              avant: "Les CM sont peu interactifs. Les TD,",
              options: ["en revanche", "donc", "puisque"],
              answer: 0,
              apres: ", favorisent les échanges.",
              explication: "On oppose les TD aux CM."
            }
          ]
        },
        {
          id: "gra2",
          type: "trous",
          titre: "Grâce à, à cause de, en raison de",
          sousTitre: "La cause avec un nom ou avec un verbe",
          etape: "reperer",
          duree: "10 min",
          regles: ["connecteurs-logiques"],
          fiche: "<p><strong>Cause + verbe conjugué</strong> : parce que, car, puisque, comme (en début de phrase).</p><p><strong>Cause + nom</strong> : <em>grâce à</em> (résultat positif), <em>à cause de</em> (résultat négatif), <em>en raison de</em> (neutre, plutôt écrit et administratif).</p><p class=\"ex\">grâce à + le → grâce <strong>au</strong> ; à cause de + les → à cause <strong>des</strong> ; en raison de + les → en raison <strong>des</strong>.</p>",
          consigne: "Choisis le mot qui convient. Regarde ce qui suit : un nom ou un verbe conjugué ? Un résultat positif ou négatif ?",
          phrases: [
            {
              avant: "Il a réussi son partiel",
              options: ["à cause de", "grâce à", "parce que"],
              answer: 1,
              apres: "l’aide de son tuteur.",
              explication: "Suivi d’un nom, avec un résultat positif (il a réussi) : grâce à."
            },
            {
              avant: "Le TD a été annulé",
              options: ["grâce à", "à cause d’", "car"],
              answer: 1,
              apres: "une panne de chauffage.",
              explication: "Suivi d’un nom, avec un résultat négatif : à cause de. « Car » doit être suivi d’un verbe conjugué."
            },
            {
              avant: "J’ai pris du retard",
              options: ["parce que", "à cause de", "grâce à"],
              answer: 0,
              apres: "j’étais malade.",
              explication: "Suivi d’un verbe conjugué (j’étais) : parce que."
            },
            {
              avant: "",
              options: ["Comme", "Car", "Grâce à"],
              answer: 0,
              apres: "il pleuvait, nous avons révisé à la bibliothèque.",
              explication: "En début de phrase, avec un verbe conjugué : comme. « Car » ne commence jamais une phrase."
            },
            {
              avant: "La bibliothèque sera fermée lundi",
              options: ["grâce aux", "en raison des", "parce que les"],
              answer: 1,
              apres: "travaux.",
              explication: "Dans une annonce officielle, avec un nom : en raison de (de + les = des)."
            },
            {
              avant: "Je suis allée à la scolarité,",
              options: ["comme", "à cause de", "car"],
              answer: 2,
              apres: "je n’avais pas encore ma carte.",
              explication: "Au milieu de la phrase, avec un verbe conjugué : car. « Comme » (cause) se place en début de phrase."
            },
            {
              avant: "",
              options: ["Car les", "À cause des", "Grâce aux"],
              answer: 2,
              apres: "ateliers de méthodologie, elle sait maintenant préparer un exposé.",
              explication: "Résultat positif, suivi d’un nom : grâce à (à + les = aux)."
            },
            {
              avant: "Il est arrivé en retard",
              options: ["grâce aux", "à cause des", "comme les"],
              answer: 1,
              apres: "embouteillages.",
              explication: "Résultat négatif, suivi d’un nom : à cause de (de + les = des)."
            }
          ]
        },
        {
          id: "gra3",
          type: "qcm",
          titre: "Parce que, puisque, car ou comme ?",
          sousTitre: "Choisir selon la situation",
          etape: "interpreter",
          duree: "10 min",
          regles: ["connecteurs-logiques"],
          consigne: "Choisis la phrase correcte et adaptée à la situation. Si tu te trompes, lis l’explication de ton erreur.",
          questions: [
            {
              q: "Ton amie te demande pourquoi tu étais absente. Tu réponds :",
              options: ["Parce que j’étais malade.", "Car j’étais malade.", "Puisque j’étais malade."],
              answer: 0,
              pourquoi: [
                "",
                "« Car » ne s’emploie pas seul pour répondre à une question : il relie deux parties d’une même phrase.",
                "« Puisque » présente une cause déjà connue ; ton amie, elle, ne la connaît pas."
              ],
              explication: "« Parce que » répond à la question « pourquoi ? »."
            },
            {
              q: "Choisis la phrase correcte :",
              options: [
                "Car il pleuvait, nous sommes restés.",
                "Comme il pleuvait, nous sommes restés.",
                "Nous sommes restés, comme il pleuvait."
              ],
              answer: 1,
              pourquoi: [
                "« Car » ne commence jamais une phrase.",
                "",
                "Quand il exprime la cause, « comme » se place en début de phrase."
              ],
              explication: "Comme + cause, en tête de phrase, puis la conséquence."
            },
            {
              q: "Ton colocataire sait déjà que la bibliothèque est fermée. Tu lui proposes :",
              options: [
                "Puisque la bibliothèque est fermée, on travaille ici ?",
                "Car la bibliothèque est fermée, on travaille ici ?",
                "En raison que la bibliothèque est fermée, on travaille ici ?"
              ],
              answer: 0,
              pourquoi: [
                "",
                "« Car » ne commence jamais une phrase.",
                "« En raison que » n’existe pas : en raison de + nom (en raison de la fermeture)."
              ],
              explication: "La cause est connue des deux personnes : puisque."
            },
            {
              q: "Dans un courriel à ton enseignante, tu écris :",
              options: [
                "J’étais absente, à cause que mon bus était en retard.",
                "J’étais absente car mon bus était en retard.",
                "J’étais absente grâce à mon bus en retard."
              ],
              answer: 1,
              pourquoi: [
                "« À cause que » est une faute : à cause de + nom (à cause d’un retard de bus).",
                "",
                "« Grâce à » présente une cause positive : une absence n’est pas une bonne nouvelle."
              ],
              explication: "« Car » + verbe conjugué, au milieu de la phrase : correct et adapté à l’écrit."
            },
            {
              q: "Dans quelle phrase le connecteur introduit-il la conséquence ?",
              options: [
                "Il a beaucoup travaillé, si bien qu’il a validé toutes ses UE.",
                "Il a validé toutes ses UE parce qu’il a beaucoup travaillé.",
                "Comme il a beaucoup travaillé, il a validé toutes ses UE."
              ],
              answer: 0,
              pourquoi: [
                "",
                "« Parce que » introduit la cause (il a travaillé) ; la conséquence est dans l’autre partie.",
                "« Comme » introduit la cause ; la conséquence est dans la deuxième partie, sans connecteur."
              ],
              explication: "Les trois phrases ont le même sens, mais seul « si bien que » est suivi de la conséquence."
            },
            {
              q: "« Je vous écris ___ je n’ai pas pu assister au TD. » Quel connecteur convient le mieux à un courriel formel ?",
              options: ["vu que", "comme", "car"],
              answer: 2,
              pourquoi: [
                "« Vu que » est correct, mais plutôt oral et familier.",
                "« Comme » (cause) se place en début de phrase.",
                ""
              ],
              explication: "« Car » ou « parce que » conviennent à l’écrit formel."
            }
          ]
        },
        {
          id: "gra4",
          type: "transformation",
          titre: "De la cause à la conséquence",
          sousTitre: "Changer de point de vue",
          etape: "interpreter",
          duree: "15 min",
          regles: ["connecteurs-logiques"],
          fiche: "<p>On peut dire la même chose en partant de la cause ou de la conséquence :</p><p class=\"ex\">Il passe le rattrapage <strong>parce qu’</strong>il a échoué. (cause)<br>Il a échoué, <strong>donc</strong> il passe le rattrapage. (conséquence)</p><p>Connecteurs de conséquence : <em>donc, alors, c’est pourquoi, par conséquent, si bien que</em>. <em>Donc</em> peut aussi se placer après le verbe : <em>il passe <strong>donc</strong> le rattrapage</em>.</p>",
          consigne: "La phrase de départ part de la conséquence. Réécris-la en commençant par la cause, avec le connecteur demandé. Écris seulement la fin de la phrase.",
          items: [
            {
              enonce: "Il passe le rattrapage parce qu’il a échoué en janvier.",
              aide: "Utilise donc.",
              avant: "Il a échoué en janvier,",
              apres: ".",
              reponses: ["donc il passe le rattrapage", "il passe donc le rattrapage"],
              explication: "La cause (l’échec) vient d’abord, puis la conséquence introduite par donc."
            },
            {
              enonce: "Elle a demandé un tuteur car elle se sentait perdue.",
              aide: "Utilise c’est pourquoi.",
              avant: "Elle se sentait perdue,",
              apres: ".",
              reponses: ["c’est pourquoi elle a demandé un tuteur"],
              explication: "C’est pourquoi + conséquence. Garde le même temps que dans la phrase de départ."
            },
            {
              enonce: "Le cours est annulé en raison de la grève.",
              aide: "Utilise par conséquent.",
              avant: "Il y a une grève ;",
              apres: ".",
              reponses: ["par conséquent, le cours est annulé", "le cours est par conséquent annulé"],
              explication: "En raison de + nom devient une phrase complète (il y a une grève), suivie de la conséquence."
            },
            {
              enonce: "Comme les places sont limitées, je m’inscris dès lundi.",
              aide: "Utilise alors.",
              avant: "Les places sont limitées,",
              apres: ".",
              reponses: ["alors je m’inscris dès lundi"],
              explication: "Alors : conséquence, surtout à l’oral et dans un style simple."
            },
            {
              enonce: "Il a validé son année parce qu’il a beaucoup révisé.",
              aide: "Utilise si bien que.",
              avant: "Il a beaucoup révisé,",
              apres: ".",
              reponses: ["si bien qu’il a validé son année"],
              explication: "Si bien que + indicatif : il introduit le résultat. N’oublie pas l’élision : qu’il."
            },
            {
              enonce: "J’écris à l’enseignante parce que j’ai manqué le TD.",
              aide: "Utilise c’est pourquoi.",
              avant: "J’ai manqué le TD,",
              apres: ".",
              reponses: ["c’est pourquoi j’écris à l’enseignante"],
              explication: "La conséquence de l’absence : le courriel à l’enseignante."
            }
          ]
        },
        {
          id: "gra5",
          type: "qcm",
          titre: "Le conditionnel de politesse",
          sousTitre: "Demander poliment dans un courriel",
          etape: "interpreter",
          duree: "10 min",
          regles: ["conditionnel", "courriel-formel"],
          consigne: "Tu écris à ton enseignante. Choisis la phrase la plus adaptée. Si tu te trompes, lis l’explication de ton erreur.",
          questions: [
            {
              q: "Tu demandes un document :",
              options: [
                "Envoyez-moi le plan du cours.",
                "Pourriez-vous m’envoyer le plan du cours ?",
                "Tu peux m’envoyer le plan du cours ?"
              ],
              answer: 1,
              pourquoi: [
                "L’impératif est trop direct pour une demande à une enseignante.",
                "",
                "On ne tutoie pas une enseignante."
              ],
              explication: "Pourriez-vous : conditionnel de pouvoir, vouvoiement et inversion du sujet. C’est la demande polie type."
            },
            {
              q: "Tu demandes une information :",
              options: [
                "Je souhaiterais savoir si le rattrapage aura lieu en juin.",
                "Je souhaiterai savoir si le rattrapage aura lieu en juin.",
                "Je souhaite que vous me dites si le rattrapage aura lieu en juin."
              ],
              answer: 0,
              pourquoi: [
                "",
                "« Souhaiterai », sans s, est un futur. Le conditionnel de politesse se termine par -ais avec « je ».",
                "Après « je souhaite que », il faudrait le subjonctif (que vous me disiez). Et la demande reste moins polie."
              ],
              explication: "Je souhaiterais / je voudrais + infinitif : la formule la plus simple et la plus sûre."
            },
            {
              q: "Tu proposes un rendez-vous :",
              options: [
                "Je veux passer à votre bureau jeudi.",
                "Je passerai à votre bureau jeudi, c’est obligatoire.",
                "Serait-il possible de passer à votre bureau jeudi ?"
              ],
              answer: 2,
              pourquoi: [
                "« Je veux » est trop direct : on préfère « je voudrais » ou « serait-il possible ».",
                "Tu n’imposes pas un rendez-vous à une enseignante : c’est elle qui décide.",
                ""
              ],
              explication: "Serait-il possible de + infinitif : le conditionnel transforme la demande en question polie."
            },
            {
              q: "Premier courriel à Mme Lefèvre. Formule d’appel :",
              options: ["Madame,", "Coucou Madame Lefèvre !", "Chère Lefèvre,"],
              answer: 0,
              pourquoi: [
                "",
                "« Coucou » est familier, réservé aux proches.",
                "On ne met jamais un nom de famille seul après « Cher » ou « Chère »."
              ],
              explication: "« Madame, » suivi d’une virgule : la formule la plus sûre."
            },
            {
              q: "Pour terminer ton courriel :",
              options: [
                "Bisous et à mardi !",
                "Je vous remercie par avance de votre réponse. Bien cordialement,",
                "Merci, réponds vite."
              ],
              answer: 1,
              pourquoi: [
                "« Bisous » est réservé à la famille et aux amis.",
                "",
                "Le tutoiement et l’impératif « réponds vite » sont impolis ici."
              ],
              explication: "Un remerciement, puis une formule finale : « Bien cordialement » convient dans la plupart des courriels universitaires."
            },
            {
              q: "Tu t’excuses :",
              options: [
                "Je vous prie d’excuser mon absence.",
                "Dsl pour mon absence.",
                "Je m’excuse beaucoup pour être absente."
              ],
              answer: 0,
              pourquoi: [
                "",
                "Les abréviations (dsl, stp, pb) sont interdites dans un courriel formel.",
                "« Pour être absente » est maladroit : on dit « pour mon absence » ou « d’avoir été absente »."
              ],
              explication: "Je vous prie d’excuser + nom : formule polie et correcte."
            }
          ]
        },
        {
          id: "gra6",
          type: "correction",
          titre: "Corriger les erreurs",
          sousTitre: "Le brouillon d’un courriel",
          etape: "interpreter",
          duree: "15 min",
          regles: ["connecteurs-logiques", "conditionnel", "courriel-formel"],
          consigne: "Ces phrases viennent du brouillon d’un courriel à une enseignante. Chacune contient une erreur. Réécris la phrase corrigée.",
          items: [
            {
              enonce: "Car mon bus était en retard, je suis arrivée après le début du TD.",
              aide: "Le connecteur est mal placé.",
              reponses: [
                "Comme mon bus était en retard, je suis arrivée après le début du TD.",
                "Je suis arrivée après le début du TD car mon bus était en retard.",
                "Je suis arrivée après le début du TD parce que mon bus était en retard.",
                "Parce que mon bus était en retard, je suis arrivée après le début du TD."
              ],
              explication: "« Car » ne commence jamais une phrase. En tête de phrase : comme."
            },
            {
              enonce: "Le cours a été annulé à cause de il y avait une grève.",
              aide: "Une erreur de construction après à cause de.",
              reponses: [
                "Le cours a été annulé à cause d’une grève.",
                "Le cours a été annulé à cause de la grève.",
                "Le cours a été annulé parce qu’il y avait une grève.",
                "Le cours a été annulé car il y avait une grève."
              ],
              explication: "À cause de + nom ; parce que ou car + verbe conjugué."
            },
            {
              enonce: "Pourriez-vous m’envoyer le plan du cours, s’il te plaît ?",
              aide: "Une erreur de registre.",
              reponses: [
                "Pourriez-vous m’envoyer le plan du cours, s’il vous plaît ?",
                "Pourriez-vous m’envoyer le plan du cours ?"
              ],
              explication: "On vouvoie l’enseignante du début à la fin : s’il vous plaît."
            },
            {
              enonce: "Je voudrai savoir quand aura lieu le rattrapage.",
              aide: "Une erreur d’orthographe sur le verbe.",
              reponses: [
                "Je voudrais savoir quand aura lieu le rattrapage.",
                "Je voudrais savoir quand le rattrapage aura lieu."
              ],
              explication: "Conditionnel de politesse : je voudrais, avec un s. « Je voudrai » est un futur."
            },
            {
              enonce: "Je vous écris parce que je voudrais de changer de groupe.",
              aide: "Un mot en trop.",
              reponses: ["Je vous écris parce que je voudrais changer de groupe.", "Je vous écris car je voudrais changer de groupe."],
              explication: "Vouloir + infinitif, sans préposition : je voudrais changer."
            },
            {
              enonce: "J’ai réussi mon partiel à cause de l’aide de mon tuteur.",
              aide: "Le connecteur ne convient pas au sens.",
              reponses: [
                "J’ai réussi mon partiel grâce à l’aide de mon tuteur.",
                "J’ai réussi mon partiel grâce à mon tuteur."
              ],
              explication: "Le résultat est positif : grâce à, et non à cause de."
            }
          ]
        },
        {
          id: "gra7",
          type: "texteatrous",
          titre: "Texte à compléter",
          sousTitre: "Un courriel au responsable de la licence",
          etape: "reemployer",
          duree: "20 min",
          regles: ["connecteurs-logiques", "conditionnel", "courriel-formel"],
          consigne: "Ruoxi veut changer de groupe de TD. Complète son courriel : choisis le bon mot dans les listes et écris les mots demandés entre parenthèses.",
          texte: [
            "Objet : Demande de changement de groupe de TD",
            "{{1}},",
            "Je suis étudiante en première année de licence de sociologie, inscrite dans le groupe 3 de TD. Je vous écris {{2}} je souhaiterais changer de groupe. En effet, je travaille le mercredi après-midi dans une librairie, {{3}} je ne peux pas assister aux séances de mon groupe.",
            "{{4}} les places sont limitées, j’ai préféré vous écrire dès la première semaine. {{5}} mon emploi, je ne suis disponible que le matin : {{6}}-vous m’indiquer s’il reste des places dans le groupe 5, le lundi matin ?",
            "Je {{7}} également savoir si je dois prévenir ma chargée de TD actuelle. Si c’est nécessaire, je {{8}} passer à votre bureau pendant vos heures de permanence.",
            "Je vous {{9}} par avance de votre réponse.",
            "{{10}}, Monsieur, l’expression de mes salutations {{11}}.",
            "Ruoxi Deng"
          ],
          trous: [
            { options: ["Monsieur", "Cher Garnier", "Salut"], answer: 0, explication: "Formule d’appel formelle, sans nom de famille." },
            { options: ["donc", "car", "pourtant"], answer: 1, explication: "La suite donne la raison du courriel : cause." },
            { options: ["bien que", "puisque", "si bien que"], answer: 2, explication: "Ne pas pouvoir assister aux séances est la conséquence de son travail." },
            { options: ["Comme", "Car", "Donc"], answer: 0, explication: "Cause en début de phrase : comme." },
            { options: ["Parce que", "En raison de", "Car"], answer: 1, explication: "Suivi d’un nom (mon emploi) : en raison de." },
            { indice: "pouvoir, conditionnel", reponses: ["Pourriez"], explication: "Pourriez-vous : la demande polie type." },
            { indice: "vouloir, conditionnel", reponses: ["voudrais"], explication: "Je voudrais, avec un s : conditionnel de politesse." },
            { indice: "pouvoir, conditionnel", reponses: ["pourrais"], explication: "Le conditionnel présente la proposition avec délicatesse." },
            { indice: "remercier, présent", reponses: ["remercie"], explication: "Je vous remercie par avance : formule figée, au présent." },
            { indice: "vouloir à l’impératif + agréer", reponses: ["Veuillez agréer"], explication: "Veuillez (impératif poli de vouloir) agréer : la formule finale la plus formelle." },
            { indice: "respectueux", reponses: ["respectueuses"], explication: "L’adjectif s’accorde avec « salutations » (féminin pluriel)." }
          ]
        }
      ]
    },
    ecriture: {
      exercices: [
        {
          id: "ecr1",
          type: "ecriture",
          titre: "Changer de registre",
          sousTitre: "Du message rapide au courriel formel",
          etape: "interpreter",
          duree: "20 min",
          regles: ["registres-de-langue", "courriel-formel", "conditionnel"],
          consigne: "Ruoxi a envoyé ce message à sa chargée de TD, Mme Bertin… mais elle s’est trompée de registre ! Réécris-le en courriel formel : garde les mêmes informations, change la forme.",
          depart: "Salut ! Dsl j’étais pas là au TD mardi, mon bus est tombé en panne 😩 Vous pouvez m’envoyer les exos ? Et c’est quand le prochain contrôle ? Merci ++ Ruoxi",
          objectifs: [
            "Ajouter un objet, une formule d’appel et une formule finale",
            "Remplacer les mots familiers et les abréviations",
            "Formuler les demandes au conditionnel",
            "Expliquer la cause de l’absence avec un connecteur"
          ],
          min: 60,
          max: 120,
          checklist: [
            "Mon courriel a un objet précis",
            "Il commence par « Madame, » et se termine par une formule de politesse",
            "Il n’y a plus d’abréviations, d’émoticônes ni de mots familiers",
            "La négation est complète (ne… pas)",
            "Mes deux demandes sont au conditionnel",
            "J’explique l’absence avec car, parce que ou en raison de"
          ],
          modele: "Objet : Absence au TD du mardi 14 octobre\n\nMadame,\n\nJe suis étudiante dans votre groupe de TD du mardi. Je vous prie d’excuser mon absence à la séance du 14 octobre : je n’ai pas pu arriver à temps car mon bus est tombé en panne.\n\nPourriez-vous m’indiquer les exercices à préparer pour la prochaine séance ? Je souhaiterais également connaître la date du prochain contrôle.\n\nJe vous remercie par avance de votre réponse.\n\nBien cordialement,\n\nRuoxi Deng"
        },
        {
          id: "ecr2",
          type: "ecriture",
          titre: "Un message",
          sousTitre: "Résumer un cours pour un camarade absent",
          etape: "reemployer",
          duree: "25 min",
          regles: ["connecteurs-logiques"],
          consigne: "Ton camarade Théo n’a pas pu venir au premier cours de sociologie urbaine (écoute « Le premier cours d’un semestre »). Écris-lui un message pour lui transmettre les informations importantes. Explique aussi les raisons des conseils de l’enseignant.",
          objectifs: [
            "Sélectionner les informations utiles d’une écoute",
            "Employer au moins trois connecteurs de cause ou de conséquence différents",
            "Garder un registre amical, mais correct"
          ],
          min: 80,
          max: 140,
          checklist: [
            "J’ai donné les informations pratiques : horaire, salle, début des TD",
            "J’ai expliqué l’évaluation",
            "J’ai transmis le conseil de lecture et sa raison",
            "J’ai dit comment contacter l’enseignant",
            "J’ai utilisé au moins trois connecteurs de cause ou de conséquence",
            "Le ton est amical (tutoiement), sans abréviations"
          ],
          modele: "Salut Théo,\n\nTu n’étais pas au premier cours de sociologie urbaine, alors je te résume l’essentiel. Le CM a lieu tous les mardis de dix heures à midi, dans l’amphithéâtre B. Attention : les TD commencent seulement la semaine prochaine, car l’emploi du temps contenait une erreur.\n\nLa note finale, c’est moitié contrôle continu, moitié examen. Comme l’examen est une dissertation de trois heures, le prof conseille vivement de lire les deux premiers livres de la bibliographie avant la Toussaint. Le plan et la bibliographie sont sur Moodle.\n\nEnfin, si tu as une question, écris-lui plutôt un courriel, parce qu’il est rarement disponible après le cours.\n\nÀ mardi !\nWen"
        },
        {
          id: "a4",
          type: "ecriture",
          titre: "Un courriel formel",
          regles: ["registres-de-langue", "conditionnel", "courriel-formel"],
          sousTitre: "Un courriel formel à une enseignante",
          etape: "reemployer",
          duree: "40 min",
          consigne: "Tu as manqué le premier TD de sociologie urbaine, car ton inscription administrative n’était pas encore finalisée. Écris un courriel à ta chargée de TD, Mme Lefèvre : excuse-toi, explique la raison de ton absence et demande comment rattraper la séance.",
          objectifs: [
            "Respecter les étapes du courriel formel : objet, appel, présentation, demande, remerciement, formule finale",
            "Exprimer la cause avec un connecteur adapté à l’écrit",
            "Formuler la demande au conditionnel"
          ],
          min: 120,
          max: 160,
          checklist: [
            "Un objet clair et précis",
            "Une formule d’appel adaptée (« Madame, »)",
            "Je me présente : formation et groupe de TD",
            "J’explique la raison avec un connecteur de cause",
            "Ma demande est polie, au conditionnel (« pourriez-vous… »)",
            "Une formule de politesse finale",
            "Le vouvoiement du début à la fin"
          ],
          modele: "Objet : Absence au TD du 8 octobre (groupe 3)\n\nMadame,\n\nJe suis étudiante en première année de licence de sociologie, inscrite dans votre groupe de TD du mercredi (groupe 3). Je vous écris pour vous présenter mes excuses : je n’ai pas pu assister à la séance du 8 octobre, car mon inscription administrative n’était pas encore finalisée et je devais me rendre au service de la scolarité ce jour-là.\n\nAfin de ne pas prendre de retard, pourriez-vous m’indiquer les exercices ou les lectures à préparer pour la prochaine séance ? Si cela vous convient, je pourrais également passer à votre bureau pendant vos heures de permanence. Je souhaiterais en effet m’assurer que j’ai bien compris les consignes du premier exposé.\n\nJe vous remercie par avance de votre compréhension.\n\nVeuillez agréer, Madame, l’expression de mes salutations respectueuses.\n\nPrénom Nom"
        },
        {
          id: "ecr3",
          type: "ecriture",
          titre: "Texte long",
          sousTitre: "Étudier ici, étudier là-bas",
          etape: "reemployer",
          duree: "45 min",
          regles: ["connecteurs-logiques"],
          consigne: "Le journal des étudiants internationaux de ton université prépare un numéro spécial « Première année ». Écris un article pour comparer tes études en Chine (ou dans un autre pays) avec ce que tu découvres en France : les cours, l’évaluation, la relation avec les enseignants, le travail personnel. Explique les causes de ces différences et leurs conséquences pour toi.",
          objectifs: [
            "Organiser un texte en paragraphes : introduction, deux ou trois différences, conclusion",
            "Varier les connecteurs de cause et de conséquence",
            "Réemployer le lexique de l’université",
            "Parler de ton expérience, sans généraliser à tout un pays"
          ],
          min: 150,
          max: 210,
          checklist: [
            "Mon article a un titre et des paragraphes",
            "J’ai comparé au moins deux aspects des études",
            "J’ai utilisé au moins quatre connecteurs de cause ou de conséquence différents",
            "J’ai réemployé au moins cinq mots du lexique de l’université",
            "Je parle de mon expérience (« dans mon université… ») et pas de « tous les Chinois » ou de « tous les Français »",
            "Ma conclusion donne mon avis personnel"
          ],
          modele: "Étudier en France : ce qui a changé pour moi\n\nAvant de venir à Lyon, j’ai fait une année d’université à Nankin. Dans mon université, les emplois du temps étaient très chargés et nous avions beaucoup de devoirs à rendre chaque semaine. Comme les enseignants vérifiaient souvent notre travail, je savais toujours ce que je devais faire.\n\nEn France, il y a moins d’heures de cours, mais le travail personnel est beaucoup plus important. Les enseignants donnent une bibliographie et personne ne contrôle si nous la lisons. Par conséquent, j’ai dû apprendre à m’organiser seule. Au début, j’étais perdue, c’est pourquoi j’ai demandé l’aide d’un tuteur.\n\nL’évaluation est aussi différente. Ici, la note finale combine contrôle continu et partiels, si bien qu’il faut travailler régulièrement, et pas seulement avant les examens. Enfin, en TD, les enseignants apprécient qu’on participe. Grâce aux ateliers de méthodologie, j’ose maintenant poser des questions.\n\nFinalement, je trouve le système français exigeant, parce qu’il demande beaucoup d’autonomie. Pourtant, je sens que je progresse, et pas seulement en français."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "ora1",
          type: "oral",
          titre: "Réponse d’une minute",
          sousTitre: "Pourquoi étudier en France ?",
          etape: "reemployer",
          duree: "15 min",
          regles: ["connecteurs-logiques"],
          consigne: "Une étudiante française te demande pourquoi tu as choisi d’étudier en France. Réponds en une minute, sans lire, en donnant au moins trois raisons avec des connecteurs de cause variés.",
          dureeCible: "1 minute",
          prepMinutes: 1,
          preparation: [
            "J’ai choisi la France parce que…",
            "Comme j’apprends le français depuis…, …",
            "Grâce à…, j’ai découvert…",
            "Une autre raison, c’est que…",
            "C’est pourquoi…",
            "Finalement, …"
          ],
          checklist: [
            "J’ai donné au moins trois raisons",
            "J’ai utilisé au moins trois connecteurs de cause différents",
            "J’ai terminé par une conclusion (c’est pourquoi, finalement…)",
            "J’ai parlé environ une minute sans lire"
          ],
          modele: "J’ai choisi d’étudier en France pour plusieurs raisons. D’abord, parce que j’apprends le français depuis trois ans et que je voulais vraiment vivre dans la langue, pas seulement l’étudier. Ensuite, comme mon université avait un accord d’échange avec une université de Lyon, les démarches étaient plus simples. Enfin, grâce à un professeur de sociologie, j’ai découvert des auteurs français, et j’ai eu envie de les étudier ici. C’est pourquoi je suis à Lyon aujourd’hui. Ce n’est pas toujours facile, mais je ne regrette pas mon choix !"
        },
        {
          id: "ora2",
          type: "oral",
          titre: "Décrire et comparer",
          sousTitre: "Deux salles de cours",
          etape: "reemployer",
          duree: "20 min",
          consigne: "Décris une salle de cours que tu connais bien, en Chine ou ailleurs (au lycée ou à l’université), puis un amphithéâtre français. Compare la place de l’enseignant, le nombre d’étudiants, l’ambiance, et dis où tu te sens le plus à l’aise, et pourquoi.",
          dureeCible: "1 minute 30 à 2 minutes",
          prepMinutes: 1,
          preparation: [
            "Dans mon lycée, la salle de classe était…",
            "Nous étions environ… élèves.",
            "Le professeur se tenait…",
            "Un amphithéâtre, au contraire, …",
            "Ce qui me frappe, c’est que…",
            "Je me sens plus à l’aise… parce que…"
          ],
          checklist: [
            "J’ai décrit deux lieux précis",
            "J’ai comparé au moins trois éléments (taille, nombre, place de l’enseignant, ambiance)",
            "J’ai utilisé l’imparfait pour décrire le passé et le présent pour aujourd’hui",
            "J’ai donné ma préférence avec une raison",
            "J’ai parlé au moins une minute trente"
          ],
          modele: "Dans mon lycée, à Hefei, la salle de classe était assez petite. Nous étions environ quarante-cinq élèves, toujours à la même place, et le professeur se tenait debout devant le tableau. Nous restions dans la même salle toute la journée : c’étaient les professeurs qui changeaient. Un amphithéâtre français, au contraire, est immense. Il y a parfois trois cents étudiants, assis sur des gradins, et l’enseignant parle au micro, tout en bas. Chacun s’assoit où il veut, et certains travaillent sur leur ordinateur. Ce qui me frappe, c’est que personne ne contrôle qui est là. Pour l’instant, je me sens plus à l’aise en TD, parce que le groupe est petit et que je peux poser des questions. Mais j’aime bien la liberté de l’amphithéâtre !"
        },
        {
          id: "a5",
          type: "oral",
          titre: "Simulation universitaire",
          sousTitre: "Se présenter au premier TD",
          etape: "reemployer",
          duree: "20 min",
          consigne: "C’est le premier TD du semestre : chaque étudiant se présente au groupe. Dis ton nom, d’où tu viens, ce que tu étudies, pourquoi tu as choisi ces études, un centre d’intérêt et ce que tu attends du cours.",
          prepMinutes: 1,
          preparation: [
            "Je m’appelle…, mais vous pouvez m’appeler…",
            "Je viens de…, dans le … de la Chine.",
            "Je suis en première année de…",
            "J’ai choisi cette discipline parce que…",
            "En dehors des cours, j’aime…",
            "Ce que j’attends de ce cours, c’est…"
          ],
          dureeCible: "environ 1 minute",
          modele: "Bonjour à tous. Je m’appelle Wang Fang, mais vous pouvez m’appeler Fang. Je viens de Chengdu, dans le sud-ouest de la Chine, et je suis arrivée à Lyon il y a deux mois. Je suis en première année de licence de sociologie. J’ai choisi cette discipline parce que je m’intéresse beaucoup à la vie dans les grandes villes et à la façon dont elles changent. En dehors des cours, j’aime la photographie et la cuisine, surtout la cuisine épicée de ma région ! Ce que j’attends de ce TD, c’est de progresser à l’oral et de mieux comprendre la méthode française. Merci !",
          checklist: [
            "Une salutation adaptée au groupe",
            "Mon nom et mon origine",
            "Ma formation",
            "Ma motivation, avec « parce que »",
            "Un centre d’intérêt",
            "Une attente pour le cours",
            "Le navigateur a compris la plupart de mes mots"
          ]
        },
        {
          id: "ora3",
          type: "oral",
          titre: "Jeu de rôle",
          sousTitre: "À la permanence de l’enseignante",
          etape: "reemployer",
          duree: "25 min",
          situation: "Tu dois rendre un dossier de TD vendredi, mais tu as été malade toute la semaine. Tu vas voir ta chargée de TD, Mme Lefèvre, pendant ses heures de permanence, pour lui demander un délai.",
          consigne: "Joue ton rôle : salue, présente-toi, explique la situation et sa cause, fais ta demande poliment, propose une solution, puis remercie. Imagine que l’enseignante accepte, mais te donne seulement trois jours de plus.",
          dureeCible: "2 minutes",
          prepMinutes: 1,
          plan: ["Saluer et se présenter", "Expliquer la situation et sa cause", "Faire la demande au conditionnel", "Proposer une solution", "Réagir à la réponse et remercier"],
          objectifs: [
            "Vouvoyer l’enseignante du début à la fin",
            "Exprimer la cause avec au moins deux connecteurs",
            "Utiliser le conditionnel de politesse"
          ],
          preparation: [
            "Bonjour Madame, excusez-moi de vous déranger.",
            "Je suis dans votre groupe de TD du…",
            "Je n’ai pas pu terminer mon dossier parce que…",
            "Serait-il possible de… ?",
            "Je pourrais vous le rendre…",
            "Je vous remercie beaucoup pour votre compréhension."
          ],
          checklist: [
            "J’ai salué et je me suis présentée",
            "J’ai expliqué la cause clairement",
            "Ma demande était au conditionnel",
            "J’ai proposé une solution",
            "J’ai réagi à la réponse et j’ai remercié",
            "J’ai vouvoyé l’enseignante du début à la fin"
          ],
          modele: "Bonjour Madame, excusez-moi de vous déranger. Je m’appelle Fang, je suis dans votre groupe de TD du mercredi. Je viens vous voir à propos du dossier à rendre vendredi. J’ai été malade toute la semaine, avec beaucoup de fièvre, si bien que je n’ai pas pu terminer mon travail. J’ai un certificat de mon médecin, si vous le souhaitez. Serait-il possible d’avoir un délai ? Je pourrais vous le rendre mercredi prochain, au début du TD. … Lundi ? D’accord, je comprends tout à fait. Comme j’ai déjà fait toutes les lectures, je pense que c’est possible. Je vous l’enverrai lundi matin, par courriel. Je vous remercie beaucoup pour votre compréhension, Madame. Bonne journée !"
        }
      ]
    }
  }
});
