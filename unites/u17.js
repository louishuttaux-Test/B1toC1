/* Unité 17 : L’égalité entre les femmes et les hommes (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 17,
  niveau: "b2",
  theme: "Droits humains",
  titre: "L’égalité entre les femmes et les hommes",
  objectif: "Analyser des chiffres et argumenter sur un sujet de société.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Égalité femmes-hommes : où en est la France ?",
          format: "long",
          texte: [
            "En France, les femmes ont obtenu le droit de vote en 1944 et l’ont exercé pour la première fois en 1945, bien après la Nouvelle-Zélande ou la Finlande. Depuis, l’égalité a beaucoup progressé dans la loi : égalité salariale inscrite dans le droit en 1972, parité en politique en 2000, quotas de femmes dans les conseils d’administration des grandes entreprises en 2011.",
            "Pourtant, les chiffres montrent que l’égalité réelle n’est pas encore atteinte. Selon l’Insee, à temps de travail égal, les femmes gagnent en moyenne environ 14 % de moins que les hommes dans le secteur privé. Une partie de cet écart s’explique par les métiers exercés : les femmes sont plus nombreuses dans des secteurs moins bien payés, comme l’aide à la personne ou l’enseignement. Mais à poste comparable, il reste un écart de quelques pour cent que rien ne justifie.",
            "Les spécialistes parlent aussi de « plafond de verre » : une barrière invisible qui empêche les femmes d’accéder aux postes les plus élevés. Elles sont aujourd’hui majoritaires parmi les diplômés de l’enseignement supérieur, mais restent minoritaires à la tête des grandes entreprises. L’arrivée des enfants joue un rôle important : ce sont encore surtout les mères qui réduisent leur temps de travail.",
            "Pour avancer, plusieurs pistes sont discutées : un congé paternité plus long, pour mieux partager les tâches dès la naissance ; plus de transparence sur les salaires ; et une éducation qui lutte contre les stéréotypes dès l’école, pour que les filles osent davantage les métiers scientifiques et les garçons ceux du soin."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Égalité femmes-hommes : où en est la France ?",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quand les Françaises ont-elles voté pour la première fois ?",
              options: ["En 1944", "En 1972", "En 1945"],
              answer: 2,
              explication: "Droit obtenu en 1944, premier vote en 1945."
            },
            {
              q: "Selon l’Insee, à temps de travail égal, l’écart de salaire moyen est d’environ…",
              options: ["14 %", "4 %", "40 %"],
              answer: 0,
              explication: "Environ 14 % dans le secteur privé ; à poste comparable, il ne reste que quelques pour cent."
            },
            {
              q: "Qu’est-ce que le « plafond de verre » ?",
              options: [
                "Un type d’architecture moderne",
                "Une barrière invisible qui freine l’accès des femmes aux postes élevés",
                "Une loi sur la parité"
              ],
              answer: 1,
              explication: "C’est une métaphore."
            },
            {
              q: "Quel paradoxe le texte souligne-t-il ?",
              options: [
                "Les femmes votent moins que les hommes.",
                "Les hommes travaillent moins mais gagnent plus.",
                "Les femmes sont plus diplômées mais moins présentes à la tête des entreprises."
              ],
              answer: 2,
              explication: "Troisième paragraphe."
            },
            {
              q: "À quoi servirait un congé paternité plus long ?",
              options: [
                "À mieux partager les tâches dès la naissance",
                "À réduire le chômage",
                "À augmenter les salaires des pères"
              ],
              answer: 0,
              explication: "Dernier paragraphe."
            },
            {
              q: "« Que rien ne justifie » signifie que cet écart…",
              options: ["est logique", "n’a pas d’explication objective", "va disparaître"],
              answer: 1,
              explication: "On ne peut l’expliquer par aucune différence de poste ou d’expérience."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Portrait d’une ingénieure",
          genre: "Interview",
          transcription: "Dans ma promotion d’école d’ingénieurs, nous étions douze filles sur quatre-vingt-dix. Au début, je ne me posais pas de questions : j’aimais les maths, j’aimais les avions, voilà tout. C’est plus tard, en entreprise, que j’ai commencé à remarquer certaines choses. En réunion, on me coupait la parole plus souvent qu’à mes collègues masculins. Un jour, un client a même demandé à parler au responsable du projet… alors que c’était moi ! Aujourd’hui, je dirige une équipe de quinze personnes, dont cinq femmes. Les choses changent, mais lentement. Ce qui a le plus aidé, je crois, ce sont les modèles. Quand j’étais lycéenne, une ingénieure était venue présenter son métier dans ma classe. Ce jour-là, je me suis dit : c’est possible. C’est pour ça que, maintenant, je vais à mon tour dans les lycées."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Portrait d’une ingénieure",
          duree: "30 min",
          doc: "e1",
          consigne: "Sophie est ingénieure dans l’aéronautique à Toulouse. Elle répond aux questions d’un journaliste. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Combien de filles y avait-il dans sa promotion ?",
              options: ["La moitié", "Quinze sur cinquante", "Douze sur quatre-vingt-dix"],
              answer: 2,
              explication: "Douze sur quatre-vingt-dix."
            },
            {
              q: "Quelle anecdote montre un stéréotype ?",
              options: [
                "Un client a voulu parler au responsable sans imaginer que c’était elle.",
                "Elle a raté un examen.",
                "Son équipe a refusé de travailler avec elle."
              ],
              answer: 0,
              explication: "Il pensait que le responsable était forcément un homme."
            },
            {
              q: "Selon Sophie, qu’est-ce qui aide le plus ?",
              options: ["Les lois", "Les modèles", "Les salaires"],
              answer: 1,
              explication: "Voir une femme ingénieure lui a montré que c’était possible."
            },
            {
              q: "Que fait-elle maintenant ?",
              options: [
                "Elle enseigne à l’université.",
                "Elle a quitté l’aéronautique.",
                "Elle va présenter son métier dans les lycées."
              ],
              answer: 2,
              explication: "Elle devient à son tour un modèle."
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
          sousTitre: "Parler d’égalité",
          duree: "20 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            { terme: "la parité", definition: "l’égalité du nombre de femmes et d’hommes" },
            { terme: "l’écart salarial", definition: "la différence de salaire entre deux groupes" },
            { terme: "un stéréotype", definition: "une idée toute faite et simplificatrice sur un groupe" },
            { terme: "une discrimination", definition: "un traitement différent et injuste d’une personne" },
            {
              terme: "le congé parental",
              definition: "la période où un parent arrête ou réduit son travail pour s’occuper de son enfant"
            },
            { terme: "un plafond de verre", definition: "une barrière invisible qui freine une carrière" },
            { terme: "revendiquer", definition: "réclamer un droit avec force" }
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
          sousTitre: "Exprimer l’opposition et la concession",
          duree: "45 min",
          regles: ["connecteurs-logiques", "subjonctif-emploi"],
          fiche: "<p>L’<strong>opposition</strong> met deux faits face à face : <em>alors que, tandis que, en revanche, au contraire</em>. La <strong>concession</strong> reconnaît un fait sans que la conclusion attendue se réalise : <em>pourtant, cependant, malgré + nom, bien que + subjonctif, même si + indicatif</em>.</p><p class=\"ex\"><strong>Bien qu’</strong>elles soient plus diplômées, elles dirigent moins d’entreprises. <strong>Malgré</strong> la loi, l’écart persiste.</p>",
          consigne: "Choisis le connecteur qui convient.",
          phrases: [
            {
              avant: "",
              options: ["Bien que", "Malgré"],
              answer: 1,
              apres: "les lois, l’égalité n’est pas encore atteinte.",
              explication: "« Malgré » + nom ; « bien que » + verbe."
            },
            {
              avant: "Les femmes sont plus diplômées,",
              options: ["pourtant", "donc"],
              answer: 0,
              apres: "elles sont moins nombreuses à diriger.",
              explication: "Le résultat est contraire à ce qu’on attendrait : concession."
            },
            {
              avant: "",
              options: ["Même si", "Bien qu’"],
              answer: 1,
              apres: "elle soit compétente, on lui coupe la parole.",
              explication: "« Soit » est un subjonctif : « bien que »."
            },
            {
              avant: "Il travaille à temps plein,",
              options: ["alors qu’", "parce qu’"],
              answer: 0,
              apres: "elle a dû réduire son temps de travail.",
              explication: "Deux situations opposées : « alors que »."
            },
            {
              avant: "",
              options: ["Bien que", "Même si"],
              answer: 1,
              apres: "la situation progresse, il reste beaucoup à faire.",
              explication: "« Progresse » est à l’indicatif : « même si »."
            },
            {
              avant: "Dans certains pays, le congé paternité est long ; en France,",
              options: ["en revanche", "par conséquent"],
              answer: 0,
              apres: ", il reste court.",
              explication: "Opposition entre deux pays."
            },
            {
              avant: "Elle a obtenu le poste",
              options: ["grâce à", "malgré"],
              answer: 1,
              apres: "les préjugés de son entourage.",
              explication: "Les préjugés étaient un obstacle : « malgré »."
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
          sousTitre: "Commenter des chiffres",
          duree: "1 h 15",
          regles: ["connecteurs-logiques", "nominalisation"],
          consigne: "Ton professeur te demande de commenter ces données imaginaires sur une école d’ingénieurs : en 2005, 18 % de filles ; en 2015, 24 % ; en 2025, 31 %. Dans la même école, les filles représentent 45 % des étudiants en biologie, mais 12 % en informatique. Décris l’évolution, compare les filières, propose une explication et une solution.",
          min: 180,
          max: 240,
          checklist: [
            "J’ai décrit l’évolution avec des verbes précis (augmenter, progresser, doubler…)",
            "J’ai comparé les filières",
            "J’ai proposé au moins une explication",
            "J’ai proposé une solution concrète",
            "J’ai utilisé au moins deux connecteurs d’opposition ou de concession"
          ],
          modele: "Les données présentées montrent une nette progression de la place des filles dans cette école d’ingénieurs. Leur proportion est passée de 18 % en 2005 à 31 % en 2025, soit une hausse de 13 points en vingt ans. Cette évolution est régulière, mais elle reste lente : à ce rythme, la parité ne serait pas atteinte avant plusieurs décennies.\n\nPar ailleurs, la situation varie fortement selon les filières. Alors que les filles représentent près de la moitié des étudiants en biologie (45 %), elles ne sont que 12 % en informatique.\n\nCet écart s’explique sans doute par des stéréotypes anciens : la biologie est associée au soin et au vivant, tandis que l’informatique reste perçue comme un domaine masculin. Bien que les compétences des filles en mathématiques soient comparables à celles des garçons, beaucoup n’osent pas choisir cette voie.\n\nPour réduire cet écart, l’école pourrait inviter des informaticiennes dans les lycées et créer un programme de mentorat. Montrer des modèles est souvent le premier pas vers le changement."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Débattre d’une mesure",
          duree: "30 min",
          consigne: "Faut-il imposer un congé paternité aussi long que le congé maternité ? Donne ton avis à voix haute, avec deux arguments, une concession, et un exemple tiré de ton expérience ou de ton pays.",
          preparation: [
            "Selon moi, …",
            "Il est vrai que…, mais…",
            "Prenons l’exemple de…",
            "Bien que…, je pense que…",
            "C’est pourquoi…"
          ],
          dureeCible: "2 minutes",
          modele: "Selon moi, un congé paternité aussi long que le congé maternité serait une très bonne mesure. D’abord, il permettrait aux pères de créer un lien fort avec leur bébé dès les premières semaines. Ensuite, il réduirait les discriminations à l’embauche : si les hommes et les femmes s’absentent autant, un employeur n’aurait plus de raison de préférer un homme. Il est vrai que cela coûterait cher à l’État et que certaines petites entreprises auraient du mal à remplacer un salarié. Mais bien que ce soit difficile, d’autres pays l’ont fait, comme la Suède. Dans mon entourage, les pères qui ont pris un long congé disent que c’est la meilleure période de leur vie. C’est pourquoi je pense que cela vaut la peine.",
          checklist: [
            "J’ai donné un avis clair",
            "J’ai donné deux arguments",
            "J’ai fait une concession",
            "J’ai donné un exemple concret"
          ]
        }
      ]
    }
  }
});
