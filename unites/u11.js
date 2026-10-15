/* Unité 11 : Débattre d’un sujet de société (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 11,
  niveau: "b2",
  theme: "Sciences, innovation et environnement",
  titre: "Débattre d’un sujet de société",
  objectif: "Comprendre des positions opposées et défendre la sienne en la nuançant.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Le téléphone portable a-t-il sa place au lycée ?",
          format: "long",
          texte: [
            "Depuis 2018, la loi interdit l’usage du téléphone portable dans les écoles et les collèges français, sauf pour des activités pédagogiques. La question revient pourtant régulièrement dans le débat public : faut-il aller plus loin et étendre cette interdiction aux lycées ?",
            "Pour les partisans d’une interdiction, les arguments ne manquent pas. Le téléphone serait d’abord une source permanente de distraction : une notification suffit à interrompre la concentration, et il faut ensuite plusieurs minutes pour la retrouver. Ils soulignent également ses effets sur la vie sociale des élèves. Dans certaines cours de récréation, les adolescents ne se parlent presque plus, chacun restant les yeux fixés sur son écran. Enfin, le harcèlement en ligne, qui se poursuit souvent jusque dans l’établissement, constitue à leurs yeux un argument de poids.",
            "Leurs opposants ne nient pas ces difficultés, mais ils jugent l’interdiction à la fois inefficace et contre-productive. Inefficace, parce qu’il est presque impossible de la faire respecter auprès d’élèves de seize ou dix-sept ans. Contre-productive, parce que le téléphone est aussi un outil : il permet de chercher une information, de travailler une langue étrangère ou de s’organiser. Selon eux, l’école devrait plutôt apprendre aux jeunes à utiliser ces outils de manière responsable, puisqu’ils devront de toute façon vivre avec.",
            "Entre ces deux positions, certains établissements expérimentent des solutions intermédiaires : casiers où les téléphones sont déposés à l’entrée, moments sans écran dans la journée, ateliers d’éducation aux médias. Il est encore trop tôt pour en mesurer tous les effets. Une chose semble pourtant faire consensus : la question n’est pas seulement technique, elle touche à la manière dont une société souhaite éduquer ses enfants."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Le téléphone portable a-t-il sa place au lycée ?",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Que prévoit la loi de 2018 ?",
              options: [
                "L’interdiction du portable dans tous les établissements scolaires",
                "L’interdiction du portable pour les moins de seize ans",
                "L’interdiction de son usage dans les écoles et collèges, sauf usage pédagogique"
              ],
              answer: 2,
              explication: "Le texte précise : « dans les écoles et les collèges », « sauf pour des activités pédagogiques »."
            },
            {
              q: "Pourquoi l’auteur écrit-il « Le téléphone serait d’abord une source de distraction » au conditionnel ?",
              options: [
                "Il rapporte l’opinion des partisans sans la prendre à son compte.",
                "Il exprime un souhait.",
                "Il fait une hypothèse irréelle."
              ],
              answer: 0,
              explication: "Le conditionnel signale une information ou une opinion rapportée, non confirmée par l’auteur. Voir la règle sur le conditionnel."
            },
            {
              q: "Pour les opposants, l’interdiction est « contre-productive » car :",
              options: [
                "elle coûte cher aux établissements",
                "elle prive les élèves d’un outil utile",
                "elle augmente le harcèlement"
              ],
              answer: 1,
              explication: "Contre-productif : qui produit l’effet inverse de celui recherché."
            },
            {
              q: "Quelle est la position de l’auteur ?",
              options: [
                "Il est favorable à l’interdiction.",
                "Il y est opposé.",
                "Il présente les deux positions sans trancher."
              ],
              answer: 2,
              explication: "Le texte expose les deux camps puis des solutions intermédiaires, sans prendre parti."
            },
            {
              q: "« Un argument de poids » est :",
              options: [
                "un argument important et convaincant",
                "un argument exagéré",
                "un argument difficile à comprendre"
              ],
              answer: 0,
              explication: "« De poids » signifie ici « important, qui compte »."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une chronique à la radio",
          genre: "Chronique radio",
          transcription: "Bonjour à tous. Ce matin, je voudrais revenir sur un sujet qui divise les familles : le temps d’écran des tout-petits. Faut-il s’en inquiéter ? Les pédiatres que nous avons interrogés sont plutôt prudents. La plupart estiment qu’il ne faut pas diaboliser les écrans, mais qu’il est essentiel que les parents fixent des limites claires, surtout avant trois ans. D’autres vont plus loin et recommandent de supprimer complètement les écrans pendant les repas et avant le coucher, car ils perturberaient le sommeil. Pour ma part, ce qui me frappe, c’est que le débat oppose souvent deux camps qui ne s’écoutent pas. Or, la vraie question n’est peut-être pas combien de temps, mais comment. Regarder un dessin animé seul, ce n’est pas la même chose que le regarder avec un adulte qui en parle avec l’enfant. Bonne journée à tous."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une chronique à la radio",
          duree: "30 min",
          doc: "e1",
          consigne: "Écoute cette chronique radio sur les écrans et les jeunes enfants. Concentre-toi sur les différentes opinions et sur celle du chroniqueur.",
          questions: [
            {
              q: "Quel est le sujet de la chronique ?",
              options: ["Le téléphone au lycée", "Les dessins animés violents", "Le temps d’écran des jeunes enfants"],
              answer: 2,
              explication: "« Le temps d’écran des tout-petits »."
            },
            {
              q: "Que pensent la plupart des pédiatres ?",
              options: [
                "Il ne faut pas diaboliser les écrans, mais fixer des limites.",
                "Il faut interdire les écrans.",
                "Les écrans sont sans danger."
              ],
              answer: 0,
              explication: "Diaboliser : présenter quelque chose comme entièrement mauvais."
            },
            {
              q: "Pourquoi certains recommandent-ils d’éviter les écrans avant le coucher ?",
              options: [
                "Ils rendraient les enfants agressifs.",
                "Ils perturberaient le sommeil.",
                "Ils fatigueraient les yeux."
              ],
              answer: 1,
              explication: "Encore un conditionnel de prudence : c’est leur avis, pas un fait présenté comme certain."
            },
            {
              q: "Selon le chroniqueur, quelle est la vraie question ?",
              options: ["La durée passée devant l’écran", "L’âge de l’enfant", "La manière dont l’enfant regarde"],
              answer: 2,
              explication: "« Pas combien de temps, mais comment. » Le connecteur « or » introduit son point de vue."
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
          sousTitre: "Le vocabulaire du débat",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "être favorable à", definition: "soutenir une idée, être pour" },
            { terme: "s’opposer à", definition: "être contre, refuser une idée" },
            { terme: "réfuter un argument", definition: "démontrer qu’un argument est faux" },
            { terme: "concéder", definition: "reconnaître qu’un argument adverse a une part de vérité" },
            { terme: "un enjeu", definition: "ce que l’on peut gagner ou perdre dans une situation" },
            { terme: "à double tranchant", definition: "qui peut avoir des effets positifs comme négatifs" },
            { terme: "faire consensus", definition: "être accepté par la plupart des gens" },
            { terme: "nuancer", definition: "rendre un propos moins catégorique" }
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
          sousTitre: "Indicatif ou subjonctif ?",
          duree: "45 min",
          regles: ["subjonctif-emploi", "subjonctif-formation"],
          fiche: "<p>Pour donner son avis, le choix du mode compte. L’<strong>indicatif</strong> présente un fait comme certain ou affirmé (<em>je pense que, il est évident que, j’espère que</em>). Le <strong>subjonctif</strong> présente l’action comme souhaitée, nécessaire, possible ou douteuse (<em>il faut que, je doute que, il est possible que, bien que</em>).</p> <p class=\"ex\">Je pense qu’il <strong>a</strong> raison. Je ne pense pas qu’il <strong>ait</strong> raison.</p>",
          consigne: "Choisis la forme qui convient.",
          phrases: [
            {
              avant: "Je pense que l’école",
              options: ["doive", "doit"],
              answer: 1,
              apres: "protéger les élèves.",
              explication: "« Je pense que » à la forme affirmative : indicatif."
            },
            {
              avant: "Je ne pense pas que l’interdiction",
              options: ["soit", "est"],
              answer: 0,
              apres: "la bonne solution.",
              explication: "À la forme négative, « penser que » est en général suivi du subjonctif."
            },
            {
              avant: "Il est évident que les écrans",
              options: ["aient", "ont"],
              answer: 1,
              apres: "des effets sur le sommeil.",
              explication: "La certitude appelle l’indicatif."
            },
            {
              avant: "Il faut que les parents",
              options: ["fixent", "fixeront"],
              answer: 0,
              apres: "des limites claires.",
              explication: "« Il faut que » : toujours le subjonctif."
            },
            {
              avant: "Bien que cette mesure",
              options: ["est", "soit"],
              answer: 1,
              apres: "populaire, elle reste difficile à appliquer.",
              explication: "« Bien que » est toujours suivi du subjonctif."
            },
            {
              avant: "J’espère que les élèves",
              options: ["feront", "fassent"],
              answer: 0,
              apres: "bon usage de leur téléphone.",
              explication: "Attention : « espérer que » est suivi de l’indicatif."
            },
            {
              avant: "Je doute que cette loi",
              options: ["peut", "puisse"],
              answer: 1,
              apres: "changer les habitudes.",
              explication: "Le doute appelle le subjonctif."
            },
            {
              avant: "Il est possible que l’expérience",
              options: ["réussisse", "réussit"],
              answer: 0,
              apres: "dans certains lycées.",
              explication: "La possibilité appelle le subjonctif, contrairement à la probabilité (« il est probable que » + indicatif)."
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
          sousTitre: "Un court essai argumenté",
          duree: "1 h 15",
          regles: ["connecteurs-logiques", "donner-son-avis", "subjonctif-emploi"],
          consigne: "Faut-il interdire le téléphone portable au lycée ? Rédige un court essai : une introduction qui pose la question, deux ou trois arguments illustrés par des exemples, une concession, puis une conclusion qui donne ta position.",
          min: 220,
          max: 280,
          checklist: [
            "L’introduction présente le sujet et pose la question",
            "Chaque argument est relié par un connecteur logique",
            "Au moins un exemple concret",
            "Une concession : certes…, mais… ou bien que…",
            "Au moins deux subjonctifs bien employés",
            "Une conclusion qui donne clairement ma position",
            "Un registre courant ou soutenu, sans expressions familières"
          ],
          modele: "Depuis 2018, le téléphone portable est interdit dans les écoles et les collèges français. Faut-il aller plus loin et étendre cette interdiction aux lycées ? La question divise, car elle oppose deux visions de l’éducation.\n\nD’un côté, il est évident que le téléphone nuit à la concentration. Une simple notification suffit à détourner l’attention d’un élève, qui met ensuite plusieurs minutes à se remettre au travail. De plus, l’omniprésence des écrans appauvrit les relations entre adolescents : dans certaines cours, on ne se parle presque plus.\n\nCertes, une interdiction totale serait difficile à faire respecter auprès d’élèves presque majeurs. Il serait également absurde de priver les lycéens d’un outil qui leur permet de chercher une information ou de réviser une langue. Je ne pense pas pour autant que ces arguments justifient le statu quo.\n\nIl me semble en effet qu’une solution intermédiaire est possible. Les établissements pourraient interdire le téléphone pendant les cours et les pauses, tout en l’autorisant pour des activités encadrées par un enseignant. Il faudrait aussi que l’école propose de véritables ateliers d’éducation aux médias, afin que les élèves apprennent à maîtriser leur usage plutôt qu’à le subir.\n\nEn définitive, interdire ne suffit pas : il est indispensable que l’école enseigne aussi à vivre avec les écrans. C’est à cette condition qu’une règle, même stricte, pourra être comprise et acceptée."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Donner son avis en une minute trente",
          duree: "40 min",
          consigne: "Lors d’un débat en classe, on te demande ton avis : faut-il interdire le téléphone portable au lycée ? Prends position, donne deux arguments avec un exemple, fais une concession et conclus.",
          preparation: [
            "À mon avis, …",
            "D’un côté, … De l’autre, …",
            "Prenons un exemple : …",
            "Certes, …, mais…",
            "Je ne pense pas que + subjonctif",
            "Pour conclure, je dirais que…"
          ],
          dureeCible: "1 minute 30",
          modele: "À mon avis, interdire complètement le téléphone au lycée serait une erreur, mais il faut des règles claires. D’un côté, je comprends les enseignants : quand un élève regarde ses notifications, il ne suit plus le cours. De l’autre, le téléphone peut être un véritable outil de travail. Prenons un exemple : en cours de langue, on peut écouter un podcast ou vérifier un mot rapidement. Certes, certains élèves en abusent, mais je ne pense pas que l’interdiction soit la meilleure réponse. Il vaudrait mieux leur apprendre à l’utiliser intelligemment. Pour conclure, je dirais : oui à des règles, non à une interdiction totale.",
          checklist: [
            "Ma position est claire dès le début",
            "Deux arguments reliés par des connecteurs",
            "Un exemple concret",
            "Une concession : certes…, mais…",
            "Au moins un subjonctif bien employé",
            "Une conclusion",
            "Le navigateur a compris la plupart de mes mots"
          ]
        }
      ]
    }
  }
});
