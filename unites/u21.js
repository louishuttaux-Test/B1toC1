/* Unité 21 : Lire la presse d’opinion (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 21,
  niveau: "c1",
  theme: "Information, géopolitique et histoire",
  titre: "Lire la presse d’opinion",
  objectif: "Analyser un éditorial et ses procédés de persuasion.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Éditorial : « Le bureau est mort, vive le bureau ! »",
          format: "long",
          texte: [
            "Il y a quelques années encore, on nous promettait la fin du bureau. Le télétravail, imposé dans l’urgence, allait libérer les salariés des transports, des open spaces bruyants et des réunions interminables. Les entreprises, ravies d’économiser sur leurs loyers, rendaient leurs étages les uns après les autres. Le monde d’après, nous disait-on, serait sans badge ni machine à café.",
            "Force est de constater que la prophétie a fait long feu. Dans bien des entreprises, on rappelle désormais les troupes au moins trois jours par semaine, au nom de la « cohésion d’équipe » et de la « créativité », ces deux vertus qui, paraît-il, ne se transmettent pas par visioconférence. Les mêmes dirigeants qui vantaient hier la confiance et l’autonomie redécouvrent aujourd’hui les charmes de la présence, c’est-à-dire du contrôle.",
            "Il ne s’agit pas de nier que le travail à distance ait ses limites. Les jeunes recrues, en particulier, apprennent mal leur métier derrière un écran, et l’isolement pèse sur certains. Mais ces difficultés appelaient une réflexion sur l’organisation du travail, non un retour pur et simple au monde d’avant. Car le véritable enjeu n’est pas le lieu : c’est le sens. Un salarié qui traverse la ville pour répondre à des courriels qu’il aurait pu écrire chez lui n’en sort ni plus créatif ni plus soudé.",
            "Le bureau n’est donc pas mort. Il lui reste à prouver qu’il sert encore à quelque chose."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Éditorial : « Le bureau est mort, vive le bureau ! »",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quel est le ton du premier paragraphe ?",
              options: [
                "Ironique : l’auteur rappelle des promesses qui ne se sont pas réalisées",
                "Neutre et informatif",
                "Enthousiaste"
              ],
              answer: 0,
              explication: "« On nous promettait », « nous disait-on » : l’auteur prend ses distances."
            },
            {
              q: "« La prophétie a fait long feu » signifie que…",
              options: [
                "la prévision s’est réalisée rapidement",
                "la prévision ne s’est pas réalisée",
                "la prévision a provoqué un incendie"
              ],
              answer: 1,
              explication: "Faire long feu : échouer, ne pas atteindre son but."
            },
            {
              q: "Pourquoi l’auteur met-il « cohésion d’équipe » et « créativité » entre guillemets ?",
              options: [
                "Pour citer un livre",
                "Pour souligner leur importance",
                "Pour se moquer de justifications qu’il juge peu sincères"
              ],
              answer: 2,
              explication: "Le « paraît-il » qui suit confirme le doute ironique."
            },
            {
              q: "Selon l’auteur, quel est le véritable motif du retour au bureau ?",
              options: ["Le contrôle des salariés", "La créativité", "Les économies"],
              answer: 0,
              explication: "« Les charmes de la présence, c’est-à-dire du contrôle. »"
            },
            {
              q: "Quelle concession l’auteur fait-il ?",
              options: [
                "Le télétravail coûte cher.",
                "Le travail à distance a des limites, notamment pour les jeunes recrues.",
                "Les dirigeants ont toujours raison."
              ],
              answer: 1,
              explication: "« Il ne s’agit pas de nier que… »"
            },
            {
              q: "Quelle est la thèse de l’éditorial ?",
              options: [
                "Il faut supprimer les bureaux.",
                "Le télétravail doit être interdit.",
                "Le bureau doit justifier son utilité ; l’enjeu est le sens du travail."
              ],
              answer: 2,
              explication: "Le titre et la chute jouent sur cette idée."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une chronique radio",
          genre: "Chronique radio humoristique",
          transcription: "Bonne nouvelle ce matin : selon une étude très sérieuse, financée par un fabricant de montres connectées, nous serions désormais quarante pour cent plus productifs grâce aux montres connectées. Je dois dire que j’en suis la preuve vivante. Depuis que je porte la mienne, je sais à chaque instant que je n’ai pas assez marché, pas assez dormi et pas assez respiré. C’est formidable. Avant, je vivais dans l’ignorance ; maintenant, je culpabilise en temps réel. Hier, ma montre m’a félicité pour mes onze mille pas. J’avais simplement cherché mes clés pendant une heure. Et puis il y a cette fonction merveilleuse qui me rappelle de me lever toutes les heures. Je l’ai réglée pour l’émission, du coup, je vous parle debout. Vous ne le voyez pas, mais c’est très professionnel. Bref, si vous voulez être plus productifs, achetez une montre connectée. Ou, je dis ça comme ça, dormez."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une chronique radio",
          duree: "35 min",
          doc: "e1",
          consigne: "Écoute cette chronique humoristique d’une radio publique. Attention à l’ironie : ce qui est dit n’est pas toujours ce qui est pensé.",
          questions: [
            {
              q: "Pourquoi le chroniqueur précise-t-il qui a financé l’étude ?",
              options: [
                "Pour faire douter de son objectivité",
                "Pour donner une information neutre",
                "Pour remercier le fabricant"
              ],
              answer: 0,
              explication: "Une étude financée par un fabricant de montres n’est pas indépendante."
            },
            {
              q: "« Maintenant, je culpabilise en temps réel » : que critique-t-il ?",
              options: [
                "La montre est trop chère.",
                "La montre le rend anxieux plutôt que plus efficace.",
                "La montre ne fonctionne pas."
              ],
              answer: 1,
              explication: "Le compliment apparent est une critique."
            },
            {
              q: "Que montre l’anecdote des onze mille pas ?",
              options: [
                "Il fait beaucoup de sport.",
                "Il a perdu sa montre.",
                "Les chiffres de la montre ne disent rien de l’utilité de l’activité."
              ],
              answer: 2,
              explication: "Il a seulement cherché ses clés."
            },
            {
              q: "Quel est le vrai conseil du chroniqueur ?",
              options: ["Dormir", "Acheter une montre connectée", "Travailler debout"],
              answer: 0,
              explication: "« Je dis ça comme ça » : la chute révèle sa vraie pensée."
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
          sousTitre: "Le vocabulaire de la presse d’opinion",
          duree: "25 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            {
              terme: "un éditorial",
              definition: "un article qui exprime la position du journal, souvent signé par sa direction"
            },
            {
              terme: "une tribune",
              definition: "un texte d’opinion écrit par une personne extérieure au journal"
            },
            {
              terme: "une chronique",
              definition: "une rubrique régulière, souvent personnelle ou humoristique"
            },
            {
              terme: "l’ironie",
              definition: "le fait de dire le contraire de ce qu’on pense pour critiquer"
            },
            { terme: "un sous-entendu", definition: "une idée suggérée sans être dite clairement" },
            { terme: "plaider pour", definition: "défendre une cause avec des arguments" },
            {
              terme: "une polémique",
              definition: "un débat vif, souvent public, entre des positions opposées"
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
          sousTitre: "Les connecteurs de l’argumentation",
          duree: "50 min",
          regles: ["connecteurs-logiques", "donner-son-avis"],
          fiche: "<p>À l’écrit soutenu, on varie les connecteurs. <strong>Cause</strong> : <em>dans la mesure où, étant donné que, faute de</em>. <strong>Conséquence</strong> : <em>dès lors, si bien que, de sorte que</em>. <strong>Concession</strong> : <em>certes… mais, quand bien même + conditionnel, il n’en demeure pas moins que</em>. <strong>Addition et gradation</strong> : <em>non seulement… mais encore, voire</em>.</p><p class=\"ex\"><strong>Certes</strong>, le télétravail isole. <strong>Il n’en demeure pas moins qu’</strong>il répond à une attente forte.</p>",
          consigne: "Choisis le connecteur qui convient.",
          phrases: [
            {
              avant: "",
              options: ["Dès lors", "Certes"],
              answer: 1,
              apres: "le bureau favorise les échanges, mais il impose aussi des trajets épuisants.",
              explication: "« Certes… mais » : concession."
            },
            {
              avant: "Les salariés sont plus autonomes ;",
              options: ["dès lors", "certes"],
              answer: 0,
              apres: ", pourquoi les surveiller davantage ?",
              explication: "Conséquence logique : dès lors."
            },
            {
              avant: "",
              options: ["Puisque", "Quand bien même"],
              answer: 1,
              apres: "le télétravail serait plus productif, certains métiers ne pourront jamais s’en passer.",
              explication: "« Quand bien même » + conditionnel : concession hypothétique."
            },
            {
              avant: "Ce choix est coûteux,",
              options: ["voire", "donc"],
              answer: 0,
              apres: "absurde.",
              explication: "« Voire » renchérit : et même."
            },
            {
              avant: "",
              options: ["Grâce à", "Faute de"],
              answer: 1,
              apres: "formation, les nouveaux salariés se sentent perdus.",
              explication: "« Faute de » : cause négative (par manque de)."
            },
            {
              avant: "Le débat a été mal posé,",
              options: ["si bien que", "bien que"],
              answer: 0,
              apres: "personne n’en est sorti convaincu.",
              explication: "« Si bien que » + indicatif : conséquence."
            },
            {
              avant: "Ces critiques sont fondées. Il n’en",
              options: ["demeurent", "demeure"],
              answer: 1,
              apres: "pas moins que le bureau garde des avantages.",
              explication: "Tournure impersonnelle : le verbe reste au singulier. On dit aussi « il n’en reste pas moins que »."
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
          sousTitre: "Écrire une tribune",
          duree: "1 h 30",
          regles: ["connecteurs-logiques", "donner-son-avis", "registres-de-langue"],
          consigne: "Un grand quotidien publie une série de tribunes sur le thème : « L’université doit-elle rester en présentiel ? » Rédige ta tribune : un titre accrocheur, une thèse claire, des arguments, une concession, et une chute marquante. Tu peux utiliser une touche d’ironie.",
          min: 250,
          max: 320,
          checklist: [
            "Mon titre donne envie de lire et annonce ma position",
            "Ma thèse apparaît dès le premier paragraphe",
            "J’ai au moins deux arguments développés avec des exemples",
            "J’ai intégré et réfuté un argument adverse",
            "J’ai varié les connecteurs (au moins cinq différents)",
            "Ma dernière phrase est marquante"
          ],
          modele: "L’amphithéâtre n’est pas un cinéma\n\nOn entend souvent qu’à l’heure des cours en ligne, l’université en présentiel serait un luxe dépassé. Pourquoi traverser la ville pour écouter un professeur qu’on pourrait regarder depuis son lit, à vitesse 1,5 ? L’argument est séduisant. Il repose pourtant sur un malentendu : il confond l’université avec la diffusion d’un contenu.\n\nCertes, un cours magistral enregistré transmet des informations, et il rend service aux étudiants qui travaillent ou vivent loin. Il n’en demeure pas moins qu’apprendre ne se réduit pas à recevoir. On apprend en posant une question maladroite à la fin du cours, en se trompant devant ses camarades lors d’un travail dirigé, en discutant à la cafétéria d’une idée qu’on n’a pas comprise.\n\nPour les étudiants étrangers, l’enjeu est plus grand encore. Arrivée en France sans connaître personne, je n’ai pas appris le français dans mes vidéos, mais dans les couloirs, les bibliothèques et les files d’attente du restaurant universitaire. Dès lors, fermer les amphithéâtres, ce serait aussi fermer une porte d’entrée dans la société.\n\nQue l’on enregistre les cours, soit. Qu’on les mette en ligne pour ceux qui ne peuvent pas venir, très bien. Mais quand bien même ces outils seraient parfaits, ils resteraient des compléments.\n\nL’amphithéâtre n’est pas un cinéma : on n’y vient pas seulement pour voir, mais pour être vu, entendu, et parfois contredit."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Réagir à un éditorial",
          duree: "35 min",
          consigne: "Résume oralement en trois phrases l’éditorial sur le bureau, en expliquant le ton de l’auteur. Puis dis si tu partages son point de vue, en nuançant ta réponse.",
          preparation: [
            "L’auteur de cet éditorial soutient que…",
            "Il adopte un ton…, comme le montre…",
            "Je partage en partie son analyse : …",
            "En revanche, il me semble qu’il néglige…",
            "Tout bien considéré, …"
          ],
          dureeCible: "2 à 3 minutes",
          modele: "L’auteur de cet éditorial soutient que le retour au bureau imposé par de nombreuses entreprises n’est pas justifié par des raisons sérieuses, mais par un besoin de contrôle. Il adopte un ton ironique, comme le montrent les guillemets autour de « cohésion d’équipe » ou l’expression « paraît-il ». Il reconnaît toutefois que le télétravail a des limites, notamment pour les débutants. Je partage en partie son analyse : se déplacer pour faire seul ce qu’on pourrait faire chez soi n’a pas de sens. En revanche, il me semble qu’il néglige un point : beaucoup de salariés vivent dans de petits logements où il est difficile de travailler. Pour eux, le bureau est aussi un espace de liberté. Tout bien considéré, je dirais que la vraie question est celle du choix.",
          checklist: [
            "J’ai résumé la thèse de l’auteur",
            "J’ai identifié et illustré le ton",
            "J’ai exprimé un accord partiel et un désaccord",
            "J’ai conclu de façon nuancée"
          ]
        }
      ]
    }
  }
});
