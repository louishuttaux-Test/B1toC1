/* Unité 25 : Le tourisme de masse en débat (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 25,
  niveau: "c1",
  theme: "Sport et tourisme",
  titre: "Le tourisme de masse en débat",
  objectif: "Analyser les effets du tourisme sur les villes et les sites naturels.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Surtourisme : quand le voyage devient un problème",
          format: "long",
          texte: [
            "La France est le pays le plus visité au monde : environ cent millions de touristes internationaux y séjournent chaque année. Pour l’économie, c’est une manne : le tourisme représente une part importante du produit intérieur brut et des centaines de milliers d’emplois. Mais dans certains lieux, cette affluence est devenue un fardeau. On parle désormais de surtourisme.",
            "Le phénomène tient moins au nombre total de visiteurs qu’à leur concentration. Quelques sites concentrent l’essentiel des flux, souvent aux mêmes périodes : le Mont-Saint-Michel en plein été, les calanques de Marseille, certains villages de Provence. Les habitants voient les loyers grimper sous l’effet des locations de courte durée, les commerces de proximité céder la place aux boutiques de souvenirs, et l’environnement se dégrader.",
            "Les réponses se multiplient. Depuis quelques années, l’accès à la calanque de Sugiton, près de Marseille, se fait sur réservation pendant la haute saison. Venise a expérimenté un droit d’entrée pour les visiteurs à la journée. D’autres villes limitent les locations touristiques ou encouragent les visiteurs à découvrir des lieux moins connus. Ces mesures suscitent pourtant des critiques : réserver la beauté à ceux qui savent planifier, ou qui peuvent payer, n’est-ce pas transformer le patrimoine en produit de luxe ?",
            "La question touche en réalité à notre rapport au voyage. Réseaux sociaux aidant, beaucoup cherchent moins à découvrir un lieu qu’à en rapporter l’image attendue. Or, le voyage le plus mémorable est souvent celui qui n’était pas prévu : un village traversé par hasard, une conversation, un détour. Peut-être le remède au surtourisme passe-t-il moins par des quotas que par une autre manière de voyager."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Surtourisme : quand le voyage devient un problème",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Selon le texte, le surtourisme est surtout lié…",
              options: [
                "au nombre total de touristes",
                "à la concentration des visiteurs sur quelques sites et périodes",
                "au prix des billets d’avion"
              ],
              answer: 1,
              explication: "Deuxième paragraphe."
            },
            {
              q: "Quelles conséquences subissent les habitants ?",
              options: [
                "Fermeture des écoles",
                "Baisse des salaires et chômage",
                "Hausse des loyers, disparition des commerces de proximité, dégradation de l’environnement"
              ],
              answer: 2,
              explication: "Deuxième paragraphe."
            },
            {
              q: "Quelle mesure a été mise en place pour la calanque de Sugiton ?",
              options: ["Une réservation obligatoire en haute saison", "Un péage", "Une interdiction totale"],
              answer: 0,
              explication: "Troisième paragraphe."
            },
            {
              q: "Quelle critique est adressée à ces mesures ?",
              options: [
                "Elles sont inefficaces.",
                "Elles risquent de réserver le patrimoine à une élite.",
                "Elles coûtent trop cher aux villes."
              ],
              answer: 1,
              explication: "« Transformer le patrimoine en produit de luxe. »"
            },
            {
              q: "« Réseaux sociaux aidant » signifie…",
              options: [
                "pour aider les réseaux sociaux",
                "malgré les réseaux sociaux",
                "grâce, en partie, aux réseaux sociaux"
              ],
              answer: 2,
              explication: "Construction participiale à valeur de cause."
            },
            {
              q: "Quelle est la thèse finale ?",
              options: [
                "La solution passe aussi par une autre manière de voyager.",
                "Il faut interdire le tourisme.",
                "Les quotas suffisent."
              ],
              answer: 0,
              explication: "Dernier paragraphe."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Témoignages d’un village de Provence",
          genre: "Témoignages",
          transcription: "Moi, je suis née ici, et je ne reconnais plus mon village. En juillet, on ne peut plus se garer, la boulangerie vend des macarons pour les touristes au lieu du pain pour nous, et ma fille ne trouve pas de logement à louer à l’année : tout est loué aux vacanciers. Je comprends madame, mais je tiens un restaurant et, sans les touristes, je fermerais en deux ans. Le village vit grâce à eux. Ce qu’il faut, c’est mieux les répartir sur l’année. Au printemps et à l’automne, la Provence est magnifique, et il n’y a personne ! Je suis guide, et je crois que le problème vient aussi de la façon dont on présente la région. Tout le monde veut la même photo du même champ de lavande, le même jour. Quand je propose une randonnée dans un village voisin, moins connu, les gens sont d’abord déçus, puis ils me remercient. Ils ont vu la vraie Provence, pas celle des cartes postales."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Témoignages d’un village de Provence",
          duree: "40 min",
          doc: "e1",
          consigne: "Trois personnes d’un village très touristique donnent leur point de vue. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Quel problème de logement la première personne évoque-t-elle ?",
              options: [
                "Les loyers ont baissé.",
                "Sa fille ne trouve pas de location à l’année.",
                "Les maisons sont abandonnées."
              ],
              answer: 1,
              explication: "Tout est loué aux vacanciers."
            },
            {
              q: "Quelle est la position du restaurateur ?",
              options: [
                "Il faut interdire les touristes.",
                "Il veut vendre son restaurant.",
                "Les touristes font vivre le village ; il faudrait mieux les répartir dans l’année."
              ],
              answer: 2,
              explication: "Il défend l’étalement des saisons."
            },
            {
              q: "Selon la guide, d’où vient une partie du problème ?",
              options: ["De l’image stéréotypée de la région", "De la météo", "Des prix des hôtels"],
              answer: 0,
              explication: "Tout le monde veut la même photo."
            },
            {
              q: "Comment réagissent les clients de la guide après la randonnée ?",
              options: ["Ils sont déçus.", "Ils la remercient d’avoir vu la vraie Provence.", "Ils se plaignent."],
              answer: 1,
              explication: "D’abord déçus, puis reconnaissants."
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
          sousTitre: "Le tourisme en débat",
          duree: "25 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            {
              terme: "le surtourisme",
              definition: "une fréquentation touristique excessive qui dégrade un lieu"
            },
            { terme: "une manne", definition: "une source abondante et inespérée de profit" },
            { terme: "les flux", definition: "les mouvements importants de personnes ou de marchandises" },
            {
              terme: "la saisonnalité",
              definition: "la concentration d’une activité sur certaines périodes de l’année"
            },
            {
              terme: "les retombées économiques",
              definition: "les effets positifs d’une activité sur l’économie"
            },
            { terme: "un quota", definition: "une limite chiffrée imposée" },
            {
              terme: "le patrimoine",
              definition: "l’ensemble des biens culturels et naturels hérités du passé"
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
          sousTitre: "Exprimer la cause et la conséquence avec nuance",
          duree: "50 min",
          regles: ["connecteurs-logiques", "gerondif-participe"],
          fiche: "<p>Au-delà de <em>parce que</em> et <em>donc</em>, le français soutenu dispose de nombreuses tournures. <strong>Cause</strong> : <em>sous l’effet de, en raison de, du fait de, à force de, faute de</em> + nom ; participe présent ou passé (<em>la ville, envahie de visiteurs, …</em>). <strong>Conséquence</strong> : <em>si bien que, au point que, d’où, entraîner, provoquer, engendrer</em>.</p><p class=\"ex\"><strong>Sous l’effet des</strong> locations courtes, les loyers grimpent, <strong>d’où</strong> le départ des familles.</p>",
          consigne: "Choisis l’expression qui convient.",
          phrases: [
            {
              avant: "Les loyers ont augmenté",
              options: ["à force des", "sous l’effet des"],
              answer: 1,
              apres: "locations de courte durée.",
              explication: "« Sous l’effet de » + cause impersonnelle."
            },
            {
              avant: "Les visiteurs affluent en juillet,",
              options: ["d’où", "si bien"],
              answer: 0,
              apres: "des embouteillages permanents.",
              explication: "« D’où » + nom : conséquence."
            },
            {
              avant: "",
              options: ["En raison du", "Faute de"],
              answer: 1,
              apres: "logements disponibles, les jeunes quittent le village.",
              explication: "Faute de + nom sans article : cause négative."
            },
            {
              avant: "Le site a été fermé",
              options: ["en raison de", "afin de"],
              answer: 0,
              apres: "la sécheresse.",
              explication: "Cause neutre et administrative."
            },
            {
              avant: "La fréquentation est telle",
              options: ["si", "que"],
              answer: 1,
              apres: "les sentiers s’érodent.",
              explication: "« Tel… que » : conséquence d’une intensité."
            },
            {
              avant: "",
              options: ["À force de", "Grâce à"],
              answer: 0,
              apres: "piétiner les dunes, les visiteurs les détruisent.",
              explication: "« À force de » + infinitif : cause par répétition."
            },
            {
              avant: "Cette politique",
              options: ["a résulté", "a engendré"],
              answer: 1,
              apres: "de nombreuses critiques.",
              explication: "Engendrer quelque chose ; « résulter de » a le sens inverse."
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
          sousTitre: "Faut-il limiter l’accès aux sites touristiques ?",
          duree: "1 h 30",
          regles: ["connecteurs-logiques", "subjonctif-emploi"],
          consigne: "La région où tu étudies envisage de mettre en place des quotas pour ses sites les plus fréquentés. Rédige une contribution argumentée à la consultation publique : analyse le problème, évalue la mesure proposée, et formule au moins une proposition alternative ou complémentaire.",
          min: 280,
          max: 350,
          checklist: [
            "J’ai analysé les causes et les conséquences du problème",
            "J’ai évalué la mesure (avantages et limites)",
            "J’ai formulé au moins une proposition concrète",
            "J’ai utilisé au moins cinq expressions de cause et de conséquence variées",
            "Le registre est adapté à une contribution publique"
          ],
          modele: "Contribution à la consultation sur la fréquentation des sites naturels\n\nChaque été, les sites les plus célèbres de notre région accueillent des visiteurs par milliers, au point que certains sentiers se transforment en files d’attente. Sous l’effet de cette fréquentation, la végétation recule, les déchets s’accumulent et les habitants voient leur qualité de vie se dégrader. Il est donc légitime que les pouvoirs publics cherchent à agir.\n\nLa mise en place de quotas présente des avantages évidents. Elle permet de protéger les milieux les plus fragiles et d’offrir aux visiteurs une expérience plus agréable. L’exemple de la calanque de Sugiton montre qu’un système de réservation gratuit peut être accepté par le public, à condition qu’il soit simple et bien expliqué.\n\nCette mesure comporte néanmoins des limites. Faute d’accompagnement, elle risque de déplacer le problème vers les sites voisins, moins protégés. Elle pourrait aussi pénaliser les personnes qui ne peuvent pas planifier leurs sorties longtemps à l’avance, d’où un risque d’inégalité.\n\nC’est pourquoi je propose de compléter les quotas par trois actions. D’abord, valoriser des sites moins connus, en développant des itinéraires et des transports en commun pour y accéder. Ensuite, réserver une partie des places aux habitants de la région. Enfin, mener des campagnes de communication qui montrent la région en dehors de la haute saison.\n\nProtéger un lieu ne doit pas revenir à l’interdire, mais à mieux le partager."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Un débat contradictoire",
          duree: "35 min",
          consigne: "Joue successivement deux rôles : d’abord une habitante qui demande des quotas, puis un restaurateur qui s’y oppose. Pour chaque rôle, parle une minute avec deux arguments. Termine en donnant ta propre position en une phrase.",
          preparation: [
            "En tant qu’habitante, je constate que…",
            "Ce qui est en jeu, c’est…",
            "Mettons-nous à la place de…",
            "Je ne nie pas que…, mais…",
            "Pour ma part, j’estime que…"
          ],
          dureeCible: "2 à 3 minutes",
          modele: "En tant qu’habitante, je constate que mon village est devenu invivable l’été. Ce qui est en jeu, ce n’est pas seulement notre confort, c’est la survie même du lieu : à force d’être piétinés, les chemins s’effondrent. Et si plus aucune famille ne peut se loger ici, il ne restera qu’un décor. Je demande donc des quotas. Maintenant, mettons-nous à la place du restaurateur. Je ne nie pas que la fréquentation pose problème, mais nos emplois dépendent des visiteurs : un quota, c’est moins de clients, et peut-être des fermetures. De plus, le problème ne dure que deux mois ; il serait plus intelligent d’attirer les touristes au printemps et à l’automne. Pour ma part, j’estime que les quotas sont utiles pour les sites les plus fragiles, mais qu’ils ne remplaceront jamais une vraie politique d’étalement des saisons.",
          checklist: [
            "J’ai tenu deux points de vue opposés",
            "Chaque rôle a deux arguments",
            "J’ai utilisé des expressions de cause et de conséquence",
            "J’ai conclu par ma position personnelle"
          ]
        }
      ]
    }
  }
});
