/* Unité 4 : Vivre entre deux cultures (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 4,
  niveau: "b1",
  theme: "Vie quotidienne",
  chine: true,
  titre: "Vivre entre deux cultures",
  objectif: "Comparer des habitudes, parler de ses surprises et donner des conseils.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Six mois en France : ce qui m’a surprise",
          format: "long",
          texte: [
            "Je m’appelle Lin, j’ai vingt-quatre ans et je viens de Hangzhou. Il y a six mois, je suis arrivée à Bordeaux pour faire un master de commerce. Avant de partir, j’avais lu beaucoup de choses sur la France, mais la vie quotidienne m’a quand même réservé quelques surprises.",
            "D’abord, les horaires. En Chine, je déjeunais vers midi et je dînais vers six heures. Ici, beaucoup de gens dînent à huit heures, et parfois plus tard ! Les premiers temps, j’avais faim tout l’après-midi. Ensuite, le dimanche : presque tous les magasins sont fermés. À Hangzhou, je faisais mes courses n’importe quand, même tard le soir, et je commandais tout sur mon téléphone. Ici, j’ai appris à m’organiser.",
            "La bise m’a aussi beaucoup étonnée. Quand ma colocataire m’a présenté ses amis, chacun m’a fait deux bises sur les joues. Je ne savais pas quoi faire ! Aujourd’hui, je m’y suis habituée, même si je préfère encore serrer la main au travail.",
            "Ce qui me manque le plus ? La cuisine de ma mère, bien sûr, et la rapidité de tout : en France, il faut parfois attendre plusieurs semaines pour un rendez-vous chez le médecin. Mais j’aime la lenteur des repas, les longues discussions en terrasse et les marchés du samedi. Finalement, je crois que je deviens un peu bordelaise !"
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Six mois en France : ce qui m’a surprise",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
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
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Les conseils de la colocataire",
          genre: "Dialogue",
          transcription: "Bon, Lin, avant que je parte, quelques petites choses sur l’appartement. Les poubelles : le bac jaune, c’est pour le plastique, le carton et les canettes ; le bac vert, c’est pour le verre ; et tout le reste va dans le bac gris. On les sort le mardi soir. Pour le chauffage, ne le mets pas trop fort, la facture est partagée entre nous trois. Si tu as un problème avec la machine à laver, appelle le propriétaire : son numéro est sur le frigo. Ah, et samedi, il y a un vide-grenier dans la rue. Si tu cherches une lampe pour ta chambre, c’est l’occasion idéale, ce n’est vraiment pas cher. Bon week-end !"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Les conseils de la colocataire",
          duree: "25 min",
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
        }
      ]
    },
    grammaire: {
      exercices: [
        {
          id: "a2",
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Les pronoms en et y",
          duree: "35 min",
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
        }
      ]
    },
    ecriture: {
      exercices: [
        {
          id: "a3",
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Des conseils sur un forum",
          duree: "50 min",
          regles: ["pronoms-en-y", "connecteurs-logiques"],
          consigne: "Sur un forum d’étudiants, un jeune Chinois écrit : « J’arrive en France le mois prochain. Vous avez des conseils pour la vie de tous les jours ? » Réponds-lui en donnant au moins quatre conseils concrets, avec tes propres expériences.",
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
          id: "a4",
          type: "oral",
          titre: "Parler",
          sousTitre: "Raconter ses surprises",
          duree: "30 min",
          consigne: "Au téléphone, un ami français te demande ce qui t’a surprise quand tu es arrivée en France (ou dans un autre pays). Compare avec tes habitudes en Chine et dis comment tu as changé.",
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
        }
      ]
    }
  }
});
