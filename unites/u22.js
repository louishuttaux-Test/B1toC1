/* Unité 22 : Grandes découvertes, grands débats (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 22,
  niveau: "c1",
  theme: "Sciences, innovation et environnement",
  titre: "Grandes découvertes, grands débats",
  objectif: "Comprendre un texte de vulgarisation scientifique et ses enjeux éthiques.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Quand la science bouscule la morale",
          format: "long",
          texte: [
            "L’histoire des sciences est aussi celle de leurs controverses. Lorsque Louis Pasteur administre en 1885 son vaccin contre la rage au jeune Joseph Meister, mordu par un chien enragé, il n’a encore jamais testé son traitement sur un être humain. L’enfant survit, et le succès est immense. Mais certains de ses contemporains lui reprocheront d’avoir pris un risque considérable, sans le consentement éclairé que l’on exigerait aujourd’hui.",
            "Quelques années plus tard, Marie Curie, première femme à recevoir un prix Nobel, puis seule personne à en recevoir deux dans deux sciences différentes, travaille sur la radioactivité. Personne ne mesure alors les dangers des rayonnements : elle transporte des tubes de radium dans ses poches, et ses carnets de laboratoire sont, dit-on, encore radioactifs. La découverte ouvrira la voie à la radiothérapie, mais aussi, plus tard, à la bombe atomique.",
            "Plus près de nous, en 2020, la Française Emmanuelle Charpentier et l’Américaine Jennifer Doudna reçoivent le prix Nobel de chimie pour CRISPR-Cas9, des « ciseaux moléculaires » capables de modifier l’ADN avec une précision inédite. Les espoirs sont considérables, notamment pour soigner certaines maladies génétiques. Pourtant, dès 2018, l’annonce de la naissance en Chine de deux bébés génétiquement modifiés par un chercheur avait suscité un tollé international, et le scientifique avait été condamné.",
            "Ces trois épisodes posent la même question : qui doit fixer les limites de la recherche ? Les chercheurs eux-mêmes, au nom de leur expertise ? Les États, au nom de l’intérêt général ? Ou la société tout entière, au risque de freiner des découvertes dont elle ne mesure pas encore la portée ? La réponse, sans doute, ne peut être que collective et provisoire, à mesure que les savoirs progressent."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Quand la science bouscule la morale",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Que reproche-t-on rétrospectivement à Pasteur ?",
              options: [
                "D’avoir copié un autre chercheur",
                "D’avoir testé un traitement jamais essayé sur un humain sans consentement éclairé",
                "D’avoir échoué"
              ],
              answer: 1,
              explication: "Le succès n’efface pas le risque pris."
            },
            {
              q: "Qu’a de particulier Marie Curie ?",
              options: [
                "Elle a découvert le vaccin contre la rage.",
                "Elle a inventé la bombe atomique.",
                "Elle est la seule personne à avoir reçu deux prix Nobel dans deux sciences différentes."
              ],
              answer: 2,
              explication: "Physique (1903) et chimie (1911)."
            },
            {
              q: "Pourquoi le texte évoque-t-il les poches de Marie Curie ?",
              options: [
                "Pour montrer qu’on ignorait les dangers de la radioactivité",
                "Pour décrire sa façon de s’habiller",
                "Pour expliquer sa découverte"
              ],
              answer: 0,
              explication: "Personne ne mesurait le danger."
            },
            {
              q: "Qu’est-ce que CRISPR-Cas9 ?",
              options: ["Un vaccin", "Un outil qui permet de modifier l’ADN", "Un médicament contre le cancer"],
              answer: 1,
              explication: "Des « ciseaux moléculaires »."
            },
            {
              q: "Que signifie « un tollé » ?",
              options: ["Une loi", "Une récompense", "Une indignation générale et bruyante"],
              answer: 2,
              explication: "Un ensemble de protestations."
            },
            {
              q: "Quelle est la conclusion de l’auteur ?",
              options: [
                "Les limites doivent être fixées collectivement et revues au fil des connaissances.",
                "Il faut arrêter la recherche génétique.",
                "Les chercheurs doivent décider seuls."
              ],
              answer: 0,
              explication: "« Collective et provisoire. »"
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Débat : faut-il une pause dans le développement de l’IA ?",
          genre: "Débat radio",
          transcription: "Je ne demande pas qu’on arrête la recherche, je demande qu’on prenne le temps de comprendre ce que nous construisons. Aujourd’hui, des systèmes sont déployés auprès de millions de personnes alors que leurs concepteurs reconnaissent eux-mêmes qu’ils ne savent pas entièrement expliquer leur fonctionnement. Dans n’importe quel autre domaine, la médecine, l’aviation, on exigerait des tests approfondis avant la mise sur le marché. Je comprends cette prudence, mais une pause, concrètement, qui la respecterait ? Si l’Europe s’arrête et que d’autres continuent, nous aurons simplement perdu notre capacité à peser sur les règles. Je crois au contraire qu’il faut être à la pointe pour imposer des normes. C’est l’argument de la course : je dois courir parce que les autres courent. C’est précisément ce qui m’inquiète. On a entendu le même raisonnement pour d’autres technologies. Peut-être, mais l’alternative n’est pas entre courir et s’arrêter : c’est entre courir avec des règles et courir sans. Là, je vous rejoins : la vraie question, c’est la régulation, et elle doit être internationale."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Débat : faut-il une pause dans le développement de l’IA ?",
          duree: "40 min",
          doc: "e1",
          consigne: "Une chercheuse et un entrepreneur débattent à la radio. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Que demande la chercheuse ?",
              options: [
                "L’arrêt définitif de la recherche",
                "Du temps pour comprendre et tester les systèmes avant de les déployer",
                "Plus d’investissements"
              ],
              answer: 1,
              explication: "Elle compare avec la médecine et l’aviation."
            },
            {
              q: "Quel est le principal argument de l’entrepreneur ?",
              options: [
                "Les tests sont trop chers.",
                "L’IA ne présente aucun risque.",
                "Une pause ne serait pas respectée par tous, et l’Europe perdrait son influence."
              ],
              answer: 2,
              explication: "C’est « l’argument de la course »."
            },
            {
              q: "Pourquoi la chercheuse se méfie-t-elle de « l’argument de la course » ?",
              options: [
                "Parce qu’il a déjà justifié des développements risqués par le passé",
                "Parce qu’elle n’aime pas le sport",
                "Parce qu’il est trop technique"
              ],
              answer: 0,
              explication: "« On a entendu le même raisonnement pour d’autres technologies. »"
            },
            {
              q: "Sur quoi s’accordent-ils à la fin ?",
              options: [
                "L’arrêt de la recherche en Europe",
                "La nécessité d’une régulation internationale",
                "La suppression des normes"
              ],
              answer: 1,
              explication: "« Là, je vous rejoins. »"
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
          sousTitre: "Science et éthique",
          duree: "25 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            {
              terme: "le consentement éclairé",
              definition: "l’accord donné par une personne après avoir été informée des risques"
            },
            {
              terme: "une controverse",
              definition: "une discussion argumentée et prolongée sur une question contestée"
            },
            {
              terme: "le principe de précaution",
              definition: "l’obligation d’agir pour éviter un risque grave, même incertain"
            },
            { terme: "réfuter", definition: "démontrer qu’une affirmation est fausse" },
            {
              terme: "un essai clinique",
              definition: "une étude qui teste un traitement sur des volontaires"
            },
            { terme: "l’éthique", definition: "la réflexion sur ce qu’il est juste ou non de faire" },
            { terme: "la portée", definition: "l’importance, l’étendue des effets d’une chose" }
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
          sousTitre: "Reconnaître le passé simple",
          duree: "45 min",
          regles: ["passe-simple", "passe-compose-imparfait"],
          fiche: "<p>Le <strong>passé simple</strong> est le temps du récit historique et littéraire. On le rencontre surtout à la 3e personne : <em>il découvrit, elle reçut, ils firent, elle vint</em>. Il s’emploie comme le passé composé à l’oral, pour les événements de premier plan, avec l’imparfait pour l’arrière-plan.</p><p class=\"ex\">En 1885, Pasteur <strong>administra</strong> son vaccin à un enfant qui <strong>avait été</strong> mordu.</p>",
          consigne: "Choisis la forme correcte du passé simple.",
          phrases: [
            {
              avant: "Marie Curie",
              options: ["reçut", "recevut"],
              answer: 0,
              apres: "deux prix Nobel.",
              explication: "Recevoir → elle reçut."
            },
            {
              avant: "Ils",
              options: ["fairent", "firent"],
              answer: 1,
              apres: "une découverte inattendue.",
              explication: "Faire → ils firent."
            },
            {
              avant: "Pasteur",
              options: ["prit", "prenda"],
              answer: 0,
              apres: "un risque considérable.",
              explication: "Prendre → il prit."
            },
            {
              avant: "Elle",
              options: ["venut", "vint"],
              answer: 1,
              apres: "à Paris pour étudier la physique.",
              explication: "Venir → elle vint."
            },
            {
              avant: "Les chercheuses",
              options: ["obtinrent", "obtenurent"],
              answer: 0,
              apres: "le prix en 2020.",
              explication: "Obtenir → elles obtinrent (comme venir)."
            },
            {
              avant: "Le public",
              options: ["sera", "fut"],
              answer: 1,
              apres: "stupéfait par la nouvelle.",
              explication: "Être → il fut."
            },
            {
              avant: "Ils",
              options: ["eurent", "avèrent"],
              answer: 0,
              apres: "beaucoup de mal à convaincre.",
              explication: "Avoir → ils eurent."
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
          sousTitre: "Le progrès scientifique doit-il avoir des limites ?",
          duree: "1 h 30",
          regles: ["connecteurs-logiques", "subjonctif-emploi", "nominalisation"],
          consigne: "Rédige un essai argumenté sur cette question, en t’appuyant sur au moins deux exemples (ceux du texte ou d’autres). Adopte un plan dialectique : arguments pour, arguments contre, position personnelle nuancée.",
          min: 280,
          max: 350,
          checklist: [
            "Mon introduction amène le sujet, pose la question et annonce le plan",
            "Chaque partie commence par une idée directrice claire",
            "J’ai utilisé au moins deux exemples précis",
            "J’ai employé des connecteurs variés et soutenus",
            "Ma conclusion répond à la question et ouvre une perspective"
          ],
          modele: "De la vaccination aux outils de modification génétique, chaque grande découverte a suscité à la fois l’enthousiasme et l’inquiétude. Faut-il, dès lors, fixer des limites au progrès scientifique, au risque de freiner des avancées bénéfiques ? Nous verrons d’abord pourquoi la liberté de la recherche est essentielle, puis en quoi elle ne saurait être absolue, avant de proposer une voie médiane.\n\nLa liberté de chercher constitue le moteur même du progrès. Bien des découvertes majeures sont nées d’une curiosité sans application immédiate : en étudiant la radioactivité, Marie Curie ne visait aucun traitement, et pourtant ses travaux ont permis la radiothérapie. Limiter la recherche, c’est donc courir le risque de se priver de ce qu’on ne peut pas encore imaginer.\n\nIl n’en demeure pas moins que certaines expériences engagent des vies humaines. L’affaire des bébés génétiquement modifiés en 2018 a montré qu’un chercheur isolé pouvait prendre des décisions irréversibles pour des générations entières. Dans ce cas, il est indispensable que des règles existent, et qu’elles soient fixées collectivement.\n\nAinsi, plutôt que d’opposer liberté et contrôle, il semble préférable de distinguer la recherche fondamentale, qui doit rester libre, de ses applications sur l’être humain, qui exigent un encadrement strict. Les comités d’éthique, réunissant scientifiques et citoyens, offrent un modèle intéressant.\n\nEn définitive, ce n’est pas la connaissance qu’il faut limiter, mais l’usage qu’on en fait. Reste à savoir si ces règles pourront être appliquées à l’échelle mondiale."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Un exposé de trois minutes",
          duree: "40 min",
          consigne: "Présente une grande découverte scientifique (de ton choix, française, chinoise ou autre) sous forme d’un exposé : contexte, découverte, conséquences, débat qu’elle a suscité. Annonce ton plan au début.",
          preparation: [
            "Je vais vous présenter…",
            "Dans un premier temps, … ; dans un second temps, …",
            "À cette époque, …",
            "Cette découverte a eu des conséquences considérables…",
            "Elle a néanmoins suscité un débat…",
            "Pour conclure, …"
          ],
          dureeCible: "3 minutes",
          modele: "Je vais vous présenter la découverte de l’artémisinine, un traitement contre le paludisme. Dans un premier temps, je rappellerai le contexte ; dans un second temps, j’évoquerai ses conséquences et les débats qu’elle a suscités. À la fin des années 1960, le paludisme tue des centaines de milliers de personnes chaque année et les traitements existants deviennent inefficaces. En Chine, une équipe dirigée par la pharmacologue Tu Youyou étudie alors des textes de médecine traditionnelle et identifie une plante, l’armoise annuelle. Après de nombreux essais, elle parvient à en extraire une molécule efficace. Cette découverte a eu des conséquences considérables : elle a permis de sauver des millions de vies, et Tu Youyou a reçu le prix Nobel de médecine en 2015. Elle a néanmoins suscité un débat : certains y ont vu une validation de la médecine traditionnelle, alors que d’autres soulignent que c’est la méthode scientifique qui a permis d’isoler la molécule. Pour conclure, cette histoire montre que les savoirs anciens peuvent nourrir la science moderne, à condition d’être rigoureusement testés.",
          checklist: [
            "J’ai annoncé mon plan",
            "J’ai présenté le contexte et la découverte",
            "J’ai évoqué au moins une conséquence et un débat",
            "J’ai respecté environ trois minutes",
            "J’ai parlé à partir de notes"
          ]
        }
      ]
    }
  }
});
