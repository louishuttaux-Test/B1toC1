/* Unité 3 : Deux repas de fête, en France et en Chine (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 3,
  niveau: "b1",
  theme: "Gastronomie, mode",
  chine: true,
  titre: "Deux repas de fête, en France et en Chine",
  objectif: "Décrire un repas, ses plats et ses traditions ; utiliser les articles partitifs.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Noël et Nouvel An lunaire : deux fêtes à table",
          format: "long",
          texte: [
            "En France comme en Chine, les grandes fêtes se célèbrent d’abord à table. En France, le repas le plus important de l’année est souvent celui de Noël, le soir du 24 ou le midi du 25 décembre. En Chine, c’est le dîner de la veille du Nouvel An lunaire, entre la fin janvier et la mi-février, qui réunit toute la famille.",
            "Le repas de Noël français est long et suit un ordre précis : l’apéritif, l’entrée (souvent des huîtres, du saumon fumé ou du foie gras), le plat principal, comme une dinde aux marrons, puis le fromage et enfin le dessert, traditionnellement une bûche de Noël. On peut rester à table quatre ou cinq heures ! D’ailleurs, en 2010, l’UNESCO a inscrit le « repas gastronomique des Français » au patrimoine culturel immatériel de l’humanité.",
            "En Chine, le dîner du Nouvel An est aussi un moment de partage, mais les plats sont posés au centre de la table et chacun se sert. Beaucoup de plats ont une valeur symbolique. Dans le nord, on prépare des raviolis, les jiaozi, dont la forme rappelle les anciens lingots d’or. On sert aussi un poisson entier, car en chinois, le mot « poisson » se prononce comme le mot « surplus » : il annonce une année d’abondance.",
            "Les deux traditions ont donc un point commun essentiel : plus que la nourriture elle-même, ce qui compte, c’est d’être ensemble. Pour une Chinoise qui fête Noël en France, ou pour un Français invité au Nouvel An chinois, la meilleure attitude reste la curiosité… et l’appétit."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Noël et Nouvel An lunaire : deux fêtes à table",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Selon le texte, quel est le repas le plus important en Chine ?",
              options: [
                "Le dîner de la veille du Nouvel An lunaire",
                "Le déjeuner du jour de l’An",
                "Le repas de la fête de la Lune"
              ],
              answer: 0,
              explication: "« C’est le dîner de la veille du Nouvel An lunaire […] qui réunit toute la famille. »"
            },
            {
              q: "Dans quel ordre se déroule le repas de Noël français ?",
              options: [
                "Entrée, apéritif, plat, dessert, fromage",
                "Apéritif, entrée, plat, fromage, dessert",
                "Plat, fromage, entrée, dessert"
              ],
              answer: 1,
              explication: "En France, le fromage se mange après le plat principal et avant le dessert."
            },
            {
              q: "Pourquoi sert-on un poisson entier au Nouvel An chinois ?",
              options: [
                "Parce que c’est un plat bon marché",
                "Parce que c’est la tradition du sud seulement",
                "Parce que son nom se prononce comme le mot « surplus »"
              ],
              answer: 2,
              explication: "鱼 (yú, poisson) et 余 (yú, surplus) se prononcent de la même façon : c’est un vœu d’abondance."
            },
            {
              q: "Qu’est-ce que l’UNESCO a reconnu en 2010 ?",
              options: ["Le repas gastronomique des Français", "La bûche de Noël", "La cuisine chinoise"],
              answer: 0,
              explication: "Il a été inscrit au patrimoine culturel immatériel de l’humanité."
            },
            {
              q: "Quelle différence de service le texte souligne-t-il ?",
              options: [
                "En France, on mange plus vite.",
                "En Chine, les plats sont au centre et chacun se sert.",
                "En Chine, il n’y a pas de dessert."
              ],
              answer: 1,
              explication: "En France, les plats arrivent l’un après l’autre ; en Chine, on partage les plats posés au centre."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Un message pour le réveillon",
          genre: "Message vocal",
          transcription: "Salut Mei, c’est Claire ! Je t’appelle pour samedi soir. Comme prévu, on fête le réveillon chez mes parents, à Lyon. On sera une dizaine. Ma mère prépare la dinde, mon frère s’occupe du fromage, et moi, je fais la bûche. Est-ce que tu pourrais apporter quelque chose ? Mes parents seraient ravis de goûter tes raviolis ! Si c’est trop de travail, ne t’inquiète pas, une bouteille de jus de fruits, c’est parfait aussi. Pour venir, prends le train de 17 h 12, je viendrai te chercher à la gare. Et n’oublie pas : chez nous, on se fait la bise, même la première fois ! Rappelle-moi quand tu as ce message. Bisous !"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Un message pour le réveillon",
          duree: "25 min",
          doc: "e1",
          consigne: "Mei reçoit un message vocal de son amie Claire. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Où aura lieu le réveillon ?",
              options: ["Chez les parents de Claire, à Lyon", "Chez Claire, à Paris", "Au restaurant"],
              answer: 0,
              explication: "« On fête le réveillon chez mes parents, à Lyon. »"
            },
            {
              q: "Que prépare Claire ?",
              options: ["La dinde", "La bûche", "Le fromage"],
              answer: 1,
              explication: "Sa mère fait la dinde, son frère le fromage."
            },
            {
              q: "Qu’est-ce que les parents de Claire aimeraient ?",
              options: ["Que Mei vienne en voiture", "Que Mei apporte du vin", "Goûter les raviolis de Mei"],
              answer: 2,
              explication: "« Mes parents seraient ravis de goûter tes raviolis ! » Le conditionnel rend la demande polie."
            },
            {
              q: "Comment Mei viendra-t-elle ?",
              options: ["En train, et Claire viendra la chercher à la gare", "En bus", "À pied"],
              answer: 0,
              explication: "« Prends le train de 17 h 12, je viendrai te chercher à la gare. »"
            },
            {
              q: "Quel conseil culturel Claire donne-t-elle ?",
              options: ["Apporter des fleurs", "Se faire la bise, même la première fois", "Enlever ses chaussures"],
              answer: 1,
              explication: "La bise est très courante entre amis et en famille en France."
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
          sousTitre: "Du, de la, des, de : les articles partitifs",
          duree: "40 min",
          regles: ["articles-partitifs"],
          fiche: "<p>Pour parler d’une <strong>quantité non précisée</strong>, on utilise le partitif : <em>du</em> pain, <em>de la</em> farine, <em>de l’</em>eau, <em>des</em> raviolis.</p> <p>Après une <strong>négation</strong> ou une <strong>expression de quantité</strong>, il devient <em>de</em> (ou <em>d’</em>) : je ne mange pas <em>de</em> viande, un kilo <em>de</em> marrons, beaucoup <em>de</em> farine.</p> <p>Après les verbes de goût (<em>aimer, adorer, détester, préférer</em>), on utilise l’article défini : j’adore <em>le</em> fromage.</p>",
          consigne: "Choisis l’article qui convient.",
          phrases: [
            {
              avant: "Je voudrais",
              options: ["du", "de", "le"],
              answer: 0,
              apres: "pain, s’il vous plaît.",
              explication: "Une quantité non précisée de pain (masculin) : du."
            },
            {
              avant: "Elle ne mange pas",
              options: ["du", "de", "des"],
              answer: 1,
              apres: "viande.",
              explication: "Après une négation, le partitif devient « de »."
            },
            {
              avant: "Au Nouvel An, on prépare",
              options: ["les", "de", "des"],
              answer: 2,
              apres: "raviolis.",
              explication: "Une quantité non précisée au pluriel : des."
            },
            {
              avant: "J’adore",
              options: ["le", "du", "de"],
              answer: 0,
              apres: "fromage.",
              explication: "Après « adorer », on parle du fromage en général : article défini."
            },
            {
              avant: "Il faut beaucoup",
              options: ["des", "de", "du"],
              answer: 1,
              apres: "farine pour la pâte.",
              explication: "Après « beaucoup », on utilise « de »."
            },
            {
              avant: "Tu veux",
              options: ["de", "du", "de l’"],
              answer: 2,
              apres: "eau ?",
              explication: "Devant un nom qui commence par une voyelle : de l’."
            },
            {
              avant: "Nous avons acheté un kilo",
              options: ["de", "des", "du"],
              answer: 0,
              apres: "marrons.",
              explication: "Après une quantité précise (un kilo, une bouteille…) : de."
            },
            {
              avant: "Après le repas, on boit",
              options: ["de", "du", "le"],
              answer: 1,
              apres: "thé.",
              explication: "Une quantité non précisée de thé (masculin) : du."
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
          sousTitre: "Raconter le Nouvel An à une amie",
          duree: "50 min",
          regles: ["articles-partitifs", "connecteurs-logiques"],
          consigne: "Ton amie française Claire te demande comment se passe le Nouvel An chinois dans ta famille. Écris-lui un courriel : les préparatifs, le repas, une tradition que tu aimes particulièrement.",
          min: 120,
          max: 170,
          checklist: [
            "Un ton amical et le tutoiement",
            "Le présent pour décrire les habitudes",
            "Au moins trois articles partitifs bien employés",
            "Des mots pour organiser : d’abord, ensuite, enfin",
            "J’explique en français au moins un mot chinois",
            "Une formule finale amicale"
          ],
          modele: "Salut Claire,\n\nMerci pour ta question ! Chez nous, le Nouvel An est la fête la plus importante de l’année.\n\nD’abord, quelques jours avant, on fait un grand ménage pour chasser la malchance, puis on colle des papiers rouges sur la porte. Le soir de la veille, toute la famille se réunit chez mes grands-parents. On prépare ensemble des jiaozi, des raviolis farcis de porc et de chou. Ma grand-mère cache parfois une pièce dans l’un d’eux : celui qui la trouve aura de la chance toute l’année !\n\nEnsuite, on dîne autour d’une grande table. Il y a toujours du poisson, parce que son nom ressemble au mot « abondance », et beaucoup de légumes. Enfin, vers minuit, on regarde le grand spectacle de la télévision et on reçoit des hongbao, des enveloppes rouges avec de l’argent.\n\nEt toi, tu viens fêter ça avec nous l’an prochain ?\n\nBises,\nMei"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a4",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un plat de fête",
          duree: "30 min",
          consigne: "Présente à des amis français un plat de fête que tu aimes, en Chine ou ailleurs : son nom, ses ingrédients, quand on le mange, ce qu’il symbolise et pourquoi tu l’aimes.",
          preparation: [
            "Je voudrais vous présenter…",
            "C’est un plat qu’on mange surtout pour…",
            "Il est fait avec…, du…, de la…",
            "On dit que… / Il symbolise…",
            "Chez moi, …",
            "Pour moi, ce plat représente…"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "Je voudrais vous présenter les tangyuan. Ce sont de petites boules de riz gluant, souvent fourrées au sésame noir, qu’on sert dans un bouillon sucré. On les mange surtout pour la fête des Lanternes, le quinzième jour du Nouvel An. Leur forme ronde symbolise la réunion de la famille. Chez moi, ma grand-mère les préparait avec nous : on roulait la pâte dans nos mains, et c’était toujours un moment très joyeux. Pour moi, ce plat représente la douceur et les retrouvailles. Si vous en trouvez dans une épicerie asiatique, goûtez-les bien chauds !",
          checklist: [
            "J’ai nommé et décrit le plat",
            "J’ai cité les ingrédients avec des partitifs",
            "J’ai dit quand on le mange",
            "J’ai expliqué un symbole ou une tradition",
            "J’ai donné mon avis personnel",
            "Le navigateur a compris la plupart de mes mots"
          ]
        }
      ]
    }
  }
});
