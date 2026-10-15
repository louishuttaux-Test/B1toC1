/* Unité 14 : François Cheng, un pont entre deux langues (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 14,
  niveau: "b2",
  theme: "Culture, littérature et francophonie",
  chine: true,
  titre: "François Cheng, un pont entre deux langues",
  objectif: "Découvrir un parcours d’écrivain, comprendre la francophonie, présenter une œuvre.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "De Nanchang à l’Académie française",
          format: "long",
          texte: [
            "En 2002, l’Académie française, gardienne de la langue française depuis 1635, accueille un nouveau membre au parcours singulier : François Cheng. Né en 1929 en Chine, dans la province du Jiangxi, il est le premier écrivain d’origine asiatique à rejoindre l’institution.",
            "Rien ne le destinait pourtant à devenir un grand écrivain de langue française. Arrivé à Paris en 1949, à vingt ans, il ne parle presque pas le français. Il vit modestement, apprend la langue avec acharnement, lit les poètes et fréquente les musées. Pendant des années, il traduit en français la poésie chinoise classique, et des poètes français en chinois.",
            "Ce n’est qu’à près de soixante-dix ans qu’il publie son premier roman, Le Dit de Tianyi, qui reçoit le prix Femina en 1998. Il y raconte le destin d’un peintre chinois partagé entre deux mondes. Suivront des recueils de poèmes et des essais, notamment sur la beauté et sur la mort, qui touchent un large public.",
            "François Cheng a souvent évoqué ce que la langue française lui avait apporté : là où le chinois suggère par images, le français lui permet d’analyser et de nommer avec précision. On le présente volontiers comme un passeur entre deux cultures. Son parcours offre une belle définition de la francophonie : on peut appartenir à une langue non seulement par sa naissance, mais aussi par choix."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "De Nanchang à l’Académie française",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Pourquoi l’élection de François Cheng en 2002 est-elle remarquable ?",
              options: [
                "Il est le premier traducteur élu.",
                "Il est le plus jeune membre de l’Académie.",
                "Il est le premier écrivain d’origine asiatique à l’Académie française."
              ],
              answer: 2,
              explication: "L’Académie existe depuis 1635."
            },
            {
              q: "Comment a-t-il appris le français ?",
              options: [
                "Seul, avec acharnement, par la lecture et les musées",
                "À l’université, en Chine",
                "Avec un professeur particulier"
              ],
              answer: 0,
              explication: "« Avec acharnement » : avec beaucoup d’efforts, sans abandonner."
            },
            {
              q: "Quel a été son premier grand travail littéraire ?",
              options: ["Un roman policier", "La traduction de poésie", "Le journalisme"],
              answer: 1,
              explication: "Il traduit la poésie chinoise en français et des poètes français en chinois."
            },
            {
              q: "Que raconte Le Dit de Tianyi ?",
              options: [
                "Un voyage touristique en Europe",
                "L’histoire de l’Académie française",
                "Le destin d’un peintre chinois partagé entre deux mondes"
              ],
              answer: 2,
              explication: "Un roman qui fait écho au parcours de l’auteur."
            },
            {
              q: "Selon la conclusion, la francophonie est :",
              options: ["aussi une affaire de choix", "seulement une affaire de naissance", "réservée aux Français"],
              answer: 0,
              explication: "« Non seulement par sa naissance, mais aussi par choix »."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "La francophonie en quelques chiffres",
          genre: "Présentation",
          transcription: "Savez-vous combien de personnes parlent français dans le monde ? Selon l’Organisation internationale de la Francophonie, elles sont aujourd’hui plus de trois cents millions, sur les cinq continents. Et contrairement à une idée reçue, la majorité d’entre elles ne vivent pas en Europe, mais en Afrique. Le français est langue officielle, seul ou avec d’autres langues, dans une trentaine de pays, de la Belgique au Sénégal, de la Suisse au Canada, où il est notamment la langue du Québec. L’Organisation internationale de la Francophonie, dont l’ancêtre a été créé en 1970, réunit aujourd’hui près de quatre-vingt-dix États et gouvernements. Chaque année, le 20 mars, la Journée internationale de la francophonie célèbre cette langue partagée et toutes ses variantes : on ne parle pas exactement le même français à Montréal, à Dakar ou à Bruxelles !"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "La francophonie en quelques chiffres",
          duree: "25 min",
          doc: "e1",
          consigne: "Écoute cette courte présentation de la francophonie.",
          questions: [
            {
              q: "Combien de personnes parlent français dans le monde ?",
              options: ["Environ cent millions", "Un milliard", "Plus de trois cents millions"],
              answer: 2,
              explication: "Selon l’Organisation internationale de la Francophonie."
            },
            {
              q: "Où vit la majorité des francophones ?",
              options: ["En Afrique", "En Europe", "En Amérique"],
              answer: 0,
              explication: "« Contrairement à une idée reçue » annonce une information surprenante."
            },
            {
              q: "Le Québec est :",
              options: ["un pays indépendant", "une province du Canada", "une ville de Belgique"],
              answer: 1,
              explication: "Le français y est la langue officielle."
            },
            {
              q: "Que célèbre-t-on le 20 mars ?",
              options: [
                "La création de l’Académie française",
                "La fête nationale du Québec",
                "La Journée internationale de la francophonie"
              ],
              answer: 2,
              explication: "Avec toutes les variantes du français."
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
          sousTitre: "Qui, que, dont, où",
          duree: "40 min",
          regles: ["pronoms-relatifs"],
          fiche: "<p><strong>qui</strong> : sujet du verbe qui suit. <strong>que</strong> : complément d’objet direct. <strong>dont</strong> : remplace un complément introduit par <em>de</em>. <strong>où</strong> : un lieu ou un moment.</p> <p class=\"ex\">L’écrivain <strong>dont</strong> je parle (parler <em>de</em>). La ville <strong>où</strong> il est né. L’année <strong>où</strong> il est arrivé.</p>",
          consigne: "Choisis le pronom relatif qui convient.",
          phrases: [
            {
              avant: "François Cheng est un écrivain",
              options: ["dont", "que", "qui"],
              answer: 2,
              apres: "est né en Chine.",
              explication: "Le pronom est sujet de « est né » : qui."
            },
            {
              avant: "Le roman",
              options: ["que", "qui", "dont"],
              answer: 0,
              apres: "je lis raconte la vie d’un peintre.",
              explication: "« Je lis le roman » : complément d’objet direct, donc que."
            },
            {
              avant: "C’est un auteur",
              options: ["que", "dont", "où"],
              answer: 1,
              apres: "on parle beaucoup.",
              explication: "Parler de quelqu’un : dont."
            },
            {
              avant: "La ville",
              options: ["que", "dont", "où"],
              answer: 2,
              apres: "il est né s’appelle Nanchang.",
              explication: "Un lieu : où."
            },
            {
              avant: "L’Académie française est une institution",
              options: ["dont", "que", "qui"],
              answer: 0,
              apres: "le rôle est de protéger la langue.",
              explication: "Le rôle de l’institution : dont."
            },
            {
              avant: "1949 est l’année",
              options: ["que", "où", "dont"],
              answer: 1,
              apres: "il est arrivé à Paris.",
              explication: "Un moment : où (jamais « l’année que »)."
            },
            {
              avant: "Voici les poèmes",
              options: ["dont", "qui", "que"],
              answer: 2,
              apres: "mon professeur préfère.",
              explication: "« Mon professeur préfère ces poèmes » : que."
            },
            {
              avant: "C’est la langue",
              options: ["dont", "que", "où"],
              answer: 0,
              apres: "il est tombé amoureux.",
              explication: "Tomber amoureux de : dont."
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
          sousTitre: "Le portrait d’un passeur",
          duree: "55 min",
          regles: ["pronoms-relatifs", "passe-compose-imparfait"],
          consigne: "Écris le portrait d’une personnalité qui vit ou a vécu entre deux cultures : un artiste, un écrivain, un scientifique, ou une personne de ton entourage. Raconte son parcours et explique ce qu’elle a apporté.",
          min: 130,
          max: 180,
          checklist: [
            "Une phrase d’introduction qui présente la personne",
            "Les grandes étapes de son parcours, avec des dates",
            "Au moins trois pronoms relatifs, dont un « dont » ou un « où »",
            "Ce qu’elle a apporté aux deux cultures",
            "Une conclusion personnelle",
            "Les temps du passé bien employés"
          ],
          modele: "Zao Wou-Ki est un peintre dont l’œuvre réunit la tradition chinoise et l’art moderne occidental.\n\nNé à Pékin en 1920, il étudie la peinture à l’École des beaux-arts de Hangzhou, où il découvre aussi les impressionnistes grâce à des cartes postales. En 1948, il s’installe à Paris, la ville dont il rêvait depuis longtemps. Il y rencontre de nombreux artistes et visite inlassablement les musées.\n\nAu fil des années, il abandonne la figuration pour une peinture abstraite, faite de couleurs, de lumière et de mouvement, qui rappelle pourtant les paysages à l’encre de son enfance. Naturalisé français en 1964, il entre à l’Académie des beaux-arts en 2002.\n\nZao Wou-Ki n’a jamais choisi entre ses deux cultures : il les a fait dialoguer. C’est ce qui rend sa peinture si singulière, et c’est aussi pour cela qu’elle me touche autant."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a4",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter une œuvre chinoise",
          duree: "40 min",
          consigne: "Présente à des amis français un livre, un film ou un artiste chinois que tu aimes : de quoi il s’agit, pourquoi c’est important, ce qui te plaît et à qui tu le recommandes.",
          preparation: [
            "Je voudrais vous parler de…",
            "C’est un auteur / un film qui…",
            "L’histoire se passe…",
            "Ce qui est intéressant, c’est que…",
            "Ce qui me touche, c’est…",
            "Je le recommande à ceux qui…"
          ],
          dureeCible: "1 minute 30 à 2 minutes",
          modele: "Je voudrais vous parler de Lu Xun, un écrivain que tous les élèves chinois étudient à l’école. Il a vécu de 1881 à 1936, à une époque où la Chine changeait profondément. En 1918, il publie Le Journal d’un fou, une nouvelle considérée comme l’une des premières œuvres de la littérature chinoise moderne, parce qu’elle est écrite dans la langue parlée et non dans la langue classique. Ce qui est intéressant, c’est que ses textes sont à la fois drôles et très critiques envers la société de son temps. Son personnage le plus célèbre, Ah Q, est devenu un symbole. Je le recommande à ceux qui veulent comprendre la Chine du vingtième siècle.",
          checklist: [
            "J’ai présenté l’œuvre ou l’artiste",
            "J’ai situé dans le temps",
            "J’ai expliqué son importance",
            "J’ai donné mon avis personnel",
            "Au moins deux pronoms relatifs",
            "Le navigateur a compris la plupart de mes mots"
          ]
        }
      ]
    }
  }
});
