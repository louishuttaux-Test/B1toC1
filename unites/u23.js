/* Unité 23 : La liberté d’expression et ses limites (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 23,
  niveau: "c1",
  theme: "Droits humains",
  titre: "La liberté d’expression et ses limites",
  objectif: "Construire une argumentation nuancée sur un sujet sensible.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "La liberté d’expression : un principe, des limites",
          format: "long",
          texte: [
            "« La libre communication des pensées et des opinions est un des droits les plus précieux de l’Homme. » Ainsi commence l’article 11 de la Déclaration des droits de l’homme et du citoyen de 1789. Mais la phrase ne s’arrête pas là : chacun peut parler, écrire et imprimer librement, « sauf à répondre de l’abus de cette liberté dans les cas déterminés par la loi ». Dès l’origine, la liberté d’expression est donc pensée avec ses limites.",
            "En France, la grande loi du 29 juillet 1881 sur la liberté de la presse fixe encore aujourd’hui l’essentiel du cadre. Elle supprime la censure préalable : on n’a pas besoin d’autorisation pour publier. En revanche, on peut être poursuivi après publication pour certains abus, notamment la diffamation (accuser quelqu’un d’un fait précis qui porte atteinte à son honneur), l’injure, ou la provocation à la haine et à la violence.",
            "Cette conception distingue la France d’autres traditions juridiques. Aux États-Unis, le Premier amendement protège la parole de manière beaucoup plus large, y compris des propos que la loi française punirait. Les partisans du modèle américain estiment que les idées dangereuses se combattent mieux par le débat que par les tribunaux ; ceux du modèle français répondent que certains discours, en désignant des boucs émissaires, préparent la violence réelle.",
            "Les réseaux sociaux ont rendu la question plus brûlante encore. Désormais, ce ne sont plus seulement les juges qui tracent la frontière, mais aussi des plateformes privées, selon leurs propres règles. Qui doit décider de ce qui peut être dit ? La question, vieille de plus de deux siècles, n’a jamais été aussi actuelle."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "La liberté d’expression : un principe, des limites",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Que montre la fin de l’article 11 ?",
              options: [
                "Que la liberté d’expression est absolue",
                "Que la presse était interdite en 1789",
                "Que la liberté d’expression a été pensée dès le départ avec des limites fixées par la loi"
              ],
              answer: 2,
              explication: "« Sauf à répondre de l’abus de cette liberté… »"
            },
            {
              q: "Qu’a supprimé la loi de 1881 ?",
              options: ["La censure préalable", "Les journaux", "Le droit de critiquer le gouvernement"],
              answer: 0,
              explication: "Plus besoin d’autorisation avant publication."
            },
            {
              q: "Qu’est-ce que la diffamation ?",
              options: [
                "Une insulte sans fait précis",
                "L’accusation d’un fait précis qui porte atteinte à l’honneur",
                "Une critique d’un livre"
              ],
              answer: 1,
              explication: "L’injure, elle, ne repose pas sur un fait précis."
            },
            {
              q: "Quelle est la position des défenseurs du modèle américain ?",
              options: [
                "La justice doit contrôler toutes les publications.",
                "Il faut interdire les réseaux sociaux.",
                "Les idées dangereuses se combattent par le débat plutôt que par les tribunaux."
              ],
              answer: 2,
              explication: "Troisième paragraphe."
            },
            {
              q: "Qu’est-ce qu’un « bouc émissaire » ?",
              options: [
                "Une personne ou un groupe accusé à tort de tous les maux",
                "Un animal sacré",
                "Un journaliste"
              ],
              answer: 0,
              explication: "Expression d’origine biblique."
            },
            {
              q: "Quelle nouveauté apportent les réseaux sociaux ?",
              options: [
                "La censure préalable revient.",
                "Des plateformes privées tracent elles-mêmes des limites.",
                "Les juges disparaissent."
              ],
              answer: 1,
              explication: "Dernier paragraphe."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Un cours d’introduction au droit",
          genre: "Cours",
          transcription: "Votre question est excellente : peut-on tout dire au nom de l’humour ? Le droit français répond : presque. La satire et la caricature bénéficient d’une protection particulière, parce qu’elles participent au débat public. Les juges admettent que l’humour exagère, choque, voire blesse. Ce qu’ils examinent, c’est l’intention et le contexte. Un dessin qui se moque d’une religion, d’un dirigeant ou d’une idée est en principe protégé, même s’il est de mauvais goût. En revanche, si sous couvert d’humour, on vise des personnes en raison de leur origine ou de leur religion, pour les rabaisser ou appeler à les rejeter, le juge peut considérer que la limite est franchie. Autrement dit, on peut critiquer une croyance, mais pas inciter à la haine contre ceux qui la partagent. La frontière n’est pas toujours facile à tracer, et c’est pourquoi chaque affaire est jugée au cas par cas."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Un cours d’introduction au droit",
          duree: "40 min",
          doc: "e1",
          consigne: "Une enseignante de droit répond à la question d’un étudiant. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Pourquoi la satire est-elle particulièrement protégée ?",
              options: [
                "Parce qu’elle est rare",
                "Parce qu’elle est toujours drôle",
                "Parce qu’elle participe au débat public"
              ],
              answer: 2,
              explication: "C’est le premier argument de l’enseignante."
            },
            {
              q: "Qu’examinent les juges ?",
              options: ["L’intention et le contexte", "Le nombre de lecteurs", "Le prix du journal"],
              answer: 0,
              explication: "« Ce qu’ils examinent, c’est l’intention et le contexte. »"
            },
            {
              q: "Quelle distinction fondamentale l’enseignante fait-elle ?",
              options: [
                "Entre l’humour et le sérieux",
                "Entre critiquer une croyance et inciter à la haine contre des personnes",
                "Entre la presse et la télévision"
              ],
              answer: 1,
              explication: "C’est le cœur de sa réponse."
            },
            {
              q: "Pourquoi chaque affaire est-elle jugée au cas par cas ?",
              options: [
                "Parce que les juges manquent de temps",
                "Parce que la loi n’existe pas",
                "Parce que la frontière n’est pas toujours facile à tracer"
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
          sousTitre: "Le vocabulaire juridique",
          duree: "25 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            {
              terme: "la censure",
              definition: "le contrôle et l’interdiction d’une publication par une autorité"
            },
            {
              terme: "la diffamation",
              definition: "l’affirmation d’un fait précis qui porte atteinte à l’honneur de quelqu’un"
            },
            {
              terme: "l’injure",
              definition: "une expression outrageante qui ne repose sur aucun fait précis"
            },
            {
              terme: "l’autocensure",
              definition: "le fait de se retenir soi-même de dire ou d’écrire quelque chose"
            },
            {
              terme: "la satire",
              definition: "une œuvre qui se moque des mœurs ou des personnes pour les critiquer"
            },
            { terme: "être poursuivi", definition: "faire l’objet d’une action en justice" },
            { terme: "un abus", definition: "un usage excessif ou injuste d’un droit" }
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
          sousTitre: "Le subjonctif dans l’argumentation",
          duree: "50 min",
          regles: ["subjonctif-emploi", "subjonctif-formation"],
          fiche: "<p>Au niveau avancé, le subjonctif apparaît après : la <strong>concession</strong> (<em>bien que, quoique, si… que, quel que soit</em>), la <strong>condition</strong> (<em>à condition que, pourvu que, à moins que</em>), le <strong>but</strong> (<em>pour que, afin que, de peur que</em>), l’<strong>antériorité</strong> (<em>avant que, jusqu’à ce que</em>) et le doute (<em>il est peu probable que, il n’est pas certain que</em>). Attention : <em>après que</em> est suivi de l’indicatif.</p><p class=\"ex\"><strong>Quelle que soit</strong> l’opinion exprimée, elle peut être débattue, <strong>à moins qu’</strong>elle n’<strong>incite</strong> à la haine.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "",
              options: ["Quelle que est", "Quelle que soit"],
              answer: 1,
              apres: "votre opinion, vous avez le droit de l’exprimer.",
              explication: "Quel que soit + nom : subjonctif, accordé avec le nom."
            },
            {
              avant: "On peut tout publier, à moins que le texte n’",
              options: ["incite", "incite pas"],
              answer: 0,
              apres: "à la violence.",
              explication: "« Ne » explétif, sans valeur négative : « à moins qu’il n’incite »."
            },
            {
              avant: "Il faut protéger les journalistes afin qu’ils",
              options: ["peuvent", "puissent"],
              answer: 1,
              apres: "enquêter librement.",
              explication: "But : subjonctif."
            },
            {
              avant: "Après que la loi",
              options: ["a été votée", "ait été votée"],
              answer: 0,
              apres: ", la censure a disparu.",
              explication: "« Après que » : indicatif (l’action est réalisée)."
            },
            {
              avant: "Il est peu probable que ce débat",
              options: ["est", "soit"],
              answer: 1,
              apres: "tranché rapidement.",
              explication: "Doute : subjonctif."
            },
            {
              avant: "Si choquante que",
              options: ["soit", "est"],
              answer: 0,
              apres: "cette caricature, elle reste protégée.",
              explication: "Si + adjectif + que : concession, subjonctif."
            },
            {
              avant: "Le débat continuera jusqu’à ce qu’on",
              options: ["trouvera", "trouve"],
              answer: 1,
              apres: "un équilibre.",
              explication: "Jusqu’à ce que + subjonctif."
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
          sousTitre: "Peut-on tout dire sur les réseaux sociaux ?",
          duree: "1 h 30",
          regles: ["subjonctif-emploi", "connecteurs-logiques", "registres-de-langue"],
          consigne: "Rédige un article de réflexion pour un magazine étudiant. Présente le problème, confronte au moins deux positions en t’appuyant sur le texte et l’enregistrement, puis défends une position personnelle argumentée.",
          min: 280,
          max: 350,
          checklist: [
            "J’ai présenté le problème et sa portée",
            "J’ai exposé honnêtement la position que je ne partage pas",
            "J’ai cité au moins un élément du texte ou de l’enregistrement",
            "J’ai utilisé au moins quatre subjonctifs dans des constructions variées",
            "Ma position finale est nuancée et argumentée"
          ],
          modele: "Peut-on tout dire sur les réseaux sociaux ?\n\nChaque jour, des millions de messages sont publiés sans relecture, sans éditeur, souvent sous pseudonyme. Jamais la parole n’a été aussi libre ; jamais, peut-être, elle n’a été aussi violente. Faut-il, dès lors, encadrer davantage ce qui s’écrit en ligne ?\n\nPour certains, toute restriction supplémentaire serait dangereuse. Selon eux, les idées choquantes doivent pouvoir circuler afin qu’on puisse les réfuter publiquement. Interdire, ce serait leur donner l’attrait du fruit défendu. Cet argument, central dans la tradition américaine, rappelle qu’aucune autorité n’est à l’abri de l’erreur lorsqu’elle décide de ce qui peut être dit.\n\nD’autres soulignent toutefois que les réseaux sociaux ne sont pas une simple place publique. Leurs algorithmes amplifient les contenus qui suscitent l’indignation, si bien qu’un message haineux peut atteindre des millions de personnes en quelques heures. Comme le rappelait l’enseignante de droit, on peut critiquer une croyance, mais non inciter à la haine contre ceux qui la partagent.\n\nÀ mon sens, la question n’est pas tant de savoir si l’on peut tout dire, que de savoir qui décide. Il me paraît indispensable que les limites soient fixées par la loi, débattues démocratiquement et contrôlées par des juges, plutôt que par des entreprises privées, quelle que soit leur bonne volonté. Il faudrait aussi que les plateformes rendent leurs algorithmes plus transparents, pour que chacun comprenne pourquoi tel contenu lui est montré.\n\nLa liberté d’expression n’est pas menacée par les règles ; elle l’est par l’absence de règles claires."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Un débat nuancé",
          duree: "35 min",
          consigne: "Un humoriste a fait une blague sur ton pays qui a provoqué une polémique. Certains demandent qu’il soit sanctionné. Donne ton avis à voix haute, en distinguant ce qui relève de l’humour et ce qui relève, éventuellement, du mépris.",
          preparation: [
            "Tout dépend de…",
            "Si la blague vise…, alors…",
            "Je peux comprendre que…, mais…",
            "Il ne faudrait pas que…",
            "En fin de compte, je dirais que…"
          ],
          dureeCible: "2 à 3 minutes",
          modele: "Tout dépend, à mon avis, de ce que vise la blague. Si elle se moque de nos habitudes, de notre façon de faire la queue ou de notre passion pour les photos, je trouve qu’elle fait partie du jeu : on rit bien des Français en Chine ! Je peux comprendre que certains se sentent blessés, mais être choqué ne signifie pas forcément que la limite est franchie. En revanche, si la blague réduit tout un peuple à un stéréotype méprisant, ou si elle laisse entendre que les Chinois seraient dangereux, alors ce n’est plus de l’humour, c’est de la stigmatisation. Il ne faudrait pas que ce genre de propos devienne banal. En fin de compte, je dirais qu’une sanction juridique n’est justifiée que dans les cas les plus graves ; pour le reste, la meilleure réponse, c’est la critique, et parfois… une meilleure blague.",
          checklist: [
            "J’ai distingué deux cas",
            "J’ai reconnu la position opposée",
            "J’ai utilisé au moins deux subjonctifs",
            "J’ai conclu de façon nuancée"
          ]
        }
      ]
    }
  }
});
