/* Unité 24 : La Chine vue par les écrivains français (C1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 24,
  niveau: "c1",
  theme: "Culture, littérature et francophonie",
  chine: true,
  titre: "La Chine vue par les écrivains français",
  objectif: "Découvrir le regard de Voltaire, Claudel, Segalen ou Michaux sur la Chine, et le mettre en perspective.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "La Chine dans le miroir des écrivains français",
          format: "long",
          texte: [
            "Pendant des siècles, la plupart des écrivains français ont parlé de la Chine sans jamais y être allés. Au XVIIIe siècle, Voltaire s’appuie sur les récits des missionnaires jésuites pour faire de l’empire chinois un modèle : un État gouverné, croit-il, par des lettrés et une morale sans dogmes, qu’il oppose volontiers à la France de son temps. En 1755, il fait jouer L’Orphelin de la Chine, une tragédie inspirée d’une pièce chinoise. La Chine lui sert surtout de miroir pour critiquer l’Europe.",
            "Au tournant du XXe siècle, d’autres écrivains font le voyage. Paul Claudel, consul en Chine pendant près de quinze ans, compose les poèmes en prose de Connaissance de l’Est. Victor Segalen, médecin de marine, parcourt le pays à cheval et publie en 1912 Stèles, un recueil inspiré des inscriptions gravées sur pierre. Segalen se méfie de l’exotisme superficiel : pour lui, la rencontre de l’autre suppose d’accepter sa part irréductible de mystère, ce qu’il appelle le « Divers ».",
            "Le regard peut aussi se faire ironique, voire critique. Dans Un barbare en Asie, en 1933, Henri Michaux se décrit lui-même comme le « barbare », retournant le regard européen contre celui qui voyage. Plus tard, Marguerite Yourcenar, dans une nouvelle qui se déroule dans une Chine légendaire, imagine un vieux peintre sauvé par son propre tableau : la Chine y devient le lieu d’une réflexion sur le pouvoir de l’art.",
            "Il serait tentant de ne voir dans ces textes qu’un orientalisme naïf. Ce serait oublier qu’ils témoignent aussi d’une curiosité sincère, et parfois d’une remise en question. Reste qu’ils parlent souvent davantage de la France que de la Chine. C’est peut-être en lisant aujourd’hui des écrivains chinois écrivant en français, comme François Cheng ou Dai Sijie, que le dialogue devient véritablement réciproque."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "La Chine dans le miroir des écrivains français",
          duree: "50 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "À quoi sert la Chine dans l’œuvre de Voltaire ?",
              options: [
                "De miroir pour critiquer l’Europe",
                "De sujet d’étude scientifique",
                "De décor pour des romans d’aventure"
              ],
              answer: 0,
              explication: "Il idéalise la Chine pour mieux critiquer la France."
            },
            {
              q: "Qu’ont en commun Claudel et Segalen ?",
              options: [
                "Ils n’ont jamais quitté la France.",
                "Ils ont vécu ou voyagé en Chine.",
                "Ils sont philosophes."
              ],
              answer: 1,
              explication: "Claudel était consul, Segalen médecin de marine."
            },
            {
              q: "Que signifie le « Divers » chez Segalen ?",
              options: [
                "La diversité des paysages chinois",
                "Un genre littéraire",
                "La part de mystère de l’autre, qu’il faut accepter sans la réduire"
              ],
              answer: 2,
              explication: "Il s’oppose à l’exotisme superficiel."
            },
            {
              q: "Qu’a d’original le regard de Michaux ?",
              options: ["Il se désigne lui-même comme le barbare.", "Il idéalise la Chine.", "Il écrit en chinois."],
              answer: 0,
              explication: "Il retourne le regard européen."
            },
            {
              q: "Quelle limite l’auteur reconnaît-il à ces textes ?",
              options: [
                "Ils sont mal écrits.",
                "Ils parlent souvent plus de la France que de la Chine.",
                "Ils sont trop récents."
              ],
              answer: 1,
              explication: "Dernier paragraphe."
            },
            {
              q: "Comment l’auteur conclut-il ?",
              options: [
                "Seul Voltaire comprenait la Chine.",
                "Il faut cesser de lire ces textes.",
                "Le dialogue devient vraiment réciproque avec des écrivains chinois écrivant en français."
              ],
              answer: 2,
              explication: "François Cheng, Dai Sijie."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une professeure de littérature comparée",
          genre: "Interview",
          transcription: "Ce qui m’intéresse, ce n’est pas de savoir si ces écrivains avaient raison ou tort sur la Chine. C’est de comprendre ce que leurs erreurs révèlent. Prenez le XVIIIe siècle. Les philosophes admirent la Chine parce qu’ils y voient un pays gouverné sans Église : c’est évidemment une projection, mais une projection extrêmement utile dans leur combat contre l’absolutisme. Au XIXe siècle, le regard change complètement. Après les guerres de l’opium, la Chine est présentée comme un empire immobile, figé, en déclin. Là encore, c’est une image qui sert un discours : celui qui justifie l’intervention européenne. Ce que je dis à mes étudiants, c’est qu’une image de l’autre est toujours un document sur soi. Et cela vaut dans les deux sens : la France vue par la Chine, au début du XXe siècle, était elle aussi un mélange de fascination et de malentendus. Le travail du comparatiste consiste à mettre ces regards en dialogue."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une professeure de littérature comparée",
          duree: "40 min",
          doc: "e1",
          consigne: "Une professeure présente sa recherche sur l’image de la Chine dans la littérature française. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Qu’est-ce qui intéresse la professeure ?",
              options: [
                "Comprendre ce que ces erreurs révèlent",
                "Corriger les erreurs des écrivains",
                "Traduire ces textes en chinois"
              ],
              answer: 0,
              explication: "Première phrase."
            },
            {
              q: "Pourquoi les philosophes du XVIIIe siècle admirent-ils la Chine ?",
              options: [
                "Ils y ont tous voyagé.",
                "Ils y voient un pays gouverné sans Église, utile dans leur combat contre l’absolutisme.",
                "Ils aiment sa cuisine."
              ],
              answer: 1,
              explication: "C’est une projection."
            },
            {
              q: "Comment l’image de la Chine change-t-elle au XIXe siècle ?",
              options: [
                "Elle disparaît de la littérature.",
                "Elle devient plus positive.",
                "Elle devient celle d’un empire immobile et en déclin."
              ],
              answer: 2,
              explication: "Après les guerres de l’opium."
            },
            {
              q: "Que signifie « une image de l’autre est toujours un document sur soi » ?",
              options: [
                "La façon dont on représente l’autre révèle surtout nos propres préoccupations.",
                "On ne peut rien apprendre de l’étranger.",
                "Il faut écrire son autobiographie."
              ],
              answer: 0,
              explication: "C’est l’idée centrale de son travail."
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
          sousTitre: "Parler de littérature et de regard",
          duree: "25 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            {
              terme: "l’exotisme",
              definition: "le goût pour ce qui vient de pays lointains, souvent vu de façon superficielle"
            },
            {
              terme: "l’orientalisme",
              definition: "la représentation de l’Orient par l’Occident, souvent idéalisée ou stéréotypée"
            },
            { terme: "l’altérité", definition: "le fait d’être autre, différent de soi" },
            { terme: "une stèle", definition: "une pierre dressée portant une inscription" },
            {
              terme: "une projection",
              definition: "le fait d’attribuer à l’autre ses propres idées ou désirs"
            },
            {
              terme: "un recueil",
              definition: "un livre qui rassemble plusieurs textes (poèmes, nouvelles…)"
            },
            {
              terme: "un malentendu",
              definition: "une erreur d’interprétation entre deux personnes ou deux cultures"
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
          sousTitre: "Participe présent, adjectif verbal et participe passé",
          duree: "50 min",
          regles: ["gerondif-participe", "accord-participe-passe"],
          fiche: "<p>Le <strong>participe présent</strong> est invariable et exprime une action (<em>des écrivains fascinant leurs lecteurs</em>). L’<strong>adjectif verbal</strong> s’accorde et exprime une qualité (<em>des récits fascinants</em>) ; son orthographe change parfois : <em>convainquant / convaincant, différant / différent, négligeant / négligent</em>.</p><p class=\"ex\">Des arguments <strong>convaincants</strong>. Les auteurs, <strong>convainquant</strong> leurs lecteurs, ont imposé cette image.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "Ce sont des récits",
              options: ["fascinants", "fascinant"],
              answer: 0,
              apres: ".",
              explication: "Une qualité : adjectif verbal, accordé."
            },
            {
              avant: "Les missionnaires,",
              options: ["décrivants", "décrivant"],
              answer: 1,
              apres: "un empire idéal, ont inspiré Voltaire.",
              explication: "Une action avec complément : participe présent, invariable."
            },
            {
              avant: "Ses arguments sont très",
              options: ["convaincants", "convainquants"],
              answer: 0,
              apres: ".",
              explication: "Adjectif verbal : convaincant (c)."
            },
            {
              avant: "En",
              options: ["convaincant", "convainquant"],
              answer: 1,
              apres: "ses lecteurs, il a changé leur regard.",
              explication: "Gérondif, donc participe présent : convainquant (qu)."
            },
            {
              avant: "Les points de vue",
              options: ["différents", "différants"],
              answer: 0,
              apres: "enrichissent le débat.",
              explication: "Adjectif : différent (e)."
            },
            {
              avant: "Les poèmes qu’il a",
              options: ["écrit", "écrits"],
              answer: 1,
              apres: "en Chine sont réunis dans ce recueil.",
              explication: "Avoir + COD placé avant (« que » = les poèmes) : accord."
            },
            {
              avant: "Ce sont des images",
              options: ["surprenantes", "surprenant"],
              answer: 0,
              apres: ", parfois contradictoires.",
              explication: "Adjectif verbal accordé au féminin pluriel."
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
          sousTitre: "Un commentaire comparé",
          duree: "1 h 30",
          regles: ["connecteurs-logiques", "pronoms-relatifs-composes", "registres-de-langue"],
          consigne: "En t’appuyant sur le texte et l’enregistrement, rédige un développement argumenté : « Les écrivains voyageurs parlent-ils davantage des pays qu’ils visitent ou d’eux-mêmes ? » Tu peux ajouter un exemple personnel ou un auteur chinois ayant écrit sur la France.",
          min: 280,
          max: 350,
          checklist: [
            "J’ai une problématique claire",
            "J’ai mobilisé au moins trois auteurs ou exemples",
            "J’ai nuancé : la réponse n’est ni tout l’un ni tout l’autre",
            "J’ai utilisé un vocabulaire littéraire précis",
            "Ma conclusion ouvre sur une question plus large"
          ],
          modele: "Voyager, puis écrire : le geste semble promettre une connaissance de l’ailleurs. Pourtant, de Voltaire à Michaux, les écrivains français qui ont parlé de la Chine semblent souvent nous en apprendre davantage sur eux-mêmes que sur le pays qu’ils décrivent. Faut-il en conclure que tout récit de voyage est un autoportrait déguisé ?\n\nIl est indéniable que l’image de l’autre est d’abord une projection. Voltaire, qui n’a jamais quitté l’Europe, fait de la Chine le modèle d’un gouvernement éclairé dont la France manque cruellement. Au siècle suivant, l’image d’un empire immobile sert à l’inverse à justifier l’intervention européenne. Dans les deux cas, comme le souligne la professeure de littérature comparée, ce portrait est « un document sur soi ».\n\nCe constat mérite toutefois d’être nuancé. Certains auteurs ont fait de cette difficulté le sujet même de leur œuvre. Segalen, en refusant l’exotisme facile, reconnaît dans l’autre une part de mystère à laquelle il ne prétend pas accéder. Michaux, en se désignant comme le « barbare », retourne le regard contre lui-même. Leur lucidité constitue déjà une forme de connaissance.\n\nEnfin, le regard ne circule pas dans un seul sens. Lorsque j’ai lu les lettres d’étudiants chinois venus en France dans les années 1920, j’y ai retrouvé le même mélange de fascination et de malentendus.\n\nAinsi, les écrivains voyageurs parlent sans doute d’abord d’eux-mêmes ; mais les meilleurs d’entre eux le savent, et c’est précisément ce qui rend leur témoignage précieux. Reste à se demander si une véritable connaissance de l’autre est possible sans passer par sa langue."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un regard croisé",
          duree: "40 min",
          consigne: "Présente un livre, un film ou un auteur qui montre la France vue par la Chine, ou la Chine vue par la France. Explique quel regard il propose, ce qu’il révèle, et ce qu’il t’a appris sur ta propre culture.",
          preparation: [
            "L’œuvre dont je voudrais parler…",
            "Ce qui frappe d’emblée, c’est…",
            "On pourrait y voir…, mais il me semble plutôt que…",
            "Ce regard en dit long sur…",
            "Personnellement, cela m’a fait prendre conscience de…"
          ],
          dureeCible: "3 minutes",
          modele: "L’œuvre dont je voudrais parler est Balzac et la Petite Tailleuse chinoise, de Dai Sijie, un auteur chinois qui écrit en français. Le roman se passe pendant la Révolution culturelle : deux jeunes gens envoyés à la campagne découvrent en secret des romans français interdits. Ce qui frappe d’emblée, c’est que la littérature française y apparaît presque comme un trésor magique, capable de transformer une vie. On pourrait y voir une idéalisation naïve de la France, mais il me semble plutôt que l’auteur parle du pouvoir de la lecture en général, et de la liberté qu’elle offre. Ce regard en dit long sur l’époque, où les livres étrangers étaient rares et précieux. Personnellement, cela m’a fait prendre conscience que j’ai moi aussi une image de la France construite par les livres, et que la réalité quotidienne, celle des files d’attente à la préfecture, est un peu moins romanesque !",
          checklist: [
            "J’ai présenté l’œuvre et son contexte",
            "J’ai analysé le regard proposé",
            "J’ai nuancé mon interprétation",
            "J’ai fait un lien personnel",
            "J’ai parlé environ trois minutes"
          ]
        }
      ]
    }
  }
});
