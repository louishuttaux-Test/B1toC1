/* Unité 15 : Les voix de la francophonie (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 15,
  niveau: "b2",
  theme: "Culture, littérature et francophonie",
  titre: "Les voix de la francophonie",
  objectif: "Découvrir des auteurs d’Afrique, du Québec et des Caraïbes.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Le français, une langue qui n’appartient pas qu’à la France",
          format: "long",
          texte: [
            "On compte aujourd’hui plus de trois cents millions de francophones dans le monde, et la majorité d’entre eux ne vivent pas en France. Le français est langue officielle dans une trentaine de pays, du Québec au Sénégal, de la Belgique à Madagascar. Selon les projections démographiques, l’Afrique pourrait rassembler la grande majorité des francophones d’ici quelques décennies.",
            "Cette diversité se retrouve dans la littérature. Dans les années 1930, des étudiants venus des colonies, comme le Sénégalais Léopold Sédar Senghor et le Martiniquais Aimé Césaire, inventent à Paris le mouvement de la négritude. Ils revendiquent la fierté des cultures africaines et dénoncent le colonialisme… en français. Senghor deviendra le premier président du Sénégal, puis, en 1983, le premier Africain élu à l’Académie française.",
            "D’autres écrivains ont suivi des chemins différents. Né en Haïti, installé à Montréal, Dany Laferrière écrit avec humour sur l’exil et le déracinement ; il entre lui aussi à l’Académie française en 2013. La Guadeloupéenne Maryse Condé, qui a vécu en Afrique et aux États-Unis, a raconté dans ses romans les histoires croisées de l’Afrique et des Caraïbes.",
            "Pour ces auteurs, écrire en français n’est pas imiter Paris. C’est au contraire transformer la langue, y faire entrer d’autres rythmes, d’autres mots, d’autres façons de voir le monde. Comme on le dit souvent, le français a « plusieurs centres », et c’est peut-être ce qui le garde vivant."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Le français, une langue qui n’appartient pas qu’à la France",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Où vit la majorité des francophones ?",
              options: ["Hors de France", "En France", "En Belgique"],
              answer: 0,
              explication: "« La majorité d’entre eux ne vivent pas en France. »"
            },
            {
              q: "Qu’est-ce que la négritude ?",
              options: [
                "Une école de langue à Dakar",
                "Un mouvement littéraire qui revendique la fierté des cultures africaines",
                "Un journal parisien"
              ],
              answer: 1,
              explication: "Créé dans les années 1930 par Senghor, Césaire et d’autres."
            },
            {
              q: "Quel point commun ont Senghor et Laferrière ?",
              options: [
                "Ils sont nés en Haïti.",
                "Ils ont été présidents.",
                "Ils ont été élus à l’Académie française."
              ],
              answer: 2,
              explication: "Senghor en 1983, Laferrière en 2013."
            },
            {
              q: "Pour ces auteurs, écrire en français, c’est…",
              options: [
                "transformer la langue en y apportant d’autres cultures",
                "imiter les écrivains parisiens",
                "renoncer à leur culture"
              ],
              answer: 0,
              explication: "Dernier paragraphe."
            },
            {
              q: "Que signifie « le français a plusieurs centres » ?",
              options: [
                "Il est enseigné dans plusieurs centres culturels.",
                "Il n’y a pas une seule norme ni un seul lieu de référence.",
                "Il a plusieurs accents en France."
              ],
              answer: 1,
              explication: "Paris n’est plus le seul centre de la langue."
            },
            {
              q: "« Le déracinement », c’est…",
              options: ["une maladie", "une technique de jardinage", "le fait d’être coupé de son pays d’origine"],
              answer: 2,
              explication: "Le mot est employé au sens figuré : on perd ses « racines »."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une étudiante québécoise à Paris",
          genre: "Témoignage",
          transcription: "Quand je suis arrivée à Paris, je pensais que la langue ne poserait aucun problème. On parle français tous les deux, non ? Eh bien, pas tout à fait ! Le premier jour, j’ai dit à ma colocataire que j’allais magasiner. Elle m’a regardée comme si je venais d’une autre planète. Ici, on dit « faire les magasins » ou « faire du shopping », ce qui est drôle, parce qu’au Québec on évite justement les mots anglais. Pour nous, le week-end, c’est la fin de semaine, un e-mail, c’est un courriel, et une voiture, c’est souvent un char. Et puis il y a les repas : chez moi, le déjeuner, c’est le matin, le dîner le midi et le souper le soir. Alors quand un camarade m’a invitée à déjeuner, je suis arrivée à huit heures du matin… Il dormait encore ! Mais ce qui m’a le plus frappée, c’est qu’on me parle de mon accent. Moi, je trouve que ce sont les Parisiens qui ont un accent !"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une étudiante québécoise à Paris",
          duree: "30 min",
          doc: "e1",
          consigne: "Émilie vient de Montréal. Elle raconte ses premières semaines en France. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Qu’est-ce qui a surpris la colocataire d’Émilie ?",
              options: ["Le mot « magasiner »", "Son accent", "Son retard"],
              answer: 0,
              explication: "Au Québec, « magasiner » veut dire faire les magasins."
            },
            {
              q: "Pourquoi Émilie trouve-t-elle « faire du shopping » amusant ?",
              options: [
                "Parce que c’est un mot très ancien",
                "Parce qu’au Québec on évite les mots anglais",
                "Parce que c’est un mot québécois"
              ],
              answer: 1,
              explication: "Le français du Québec remplace souvent les anglicismes."
            },
            {
              q: "Au Québec, « le dîner » est le repas…",
              options: ["du matin", "du soir", "de midi"],
              answer: 2,
              explication: "Déjeuner le matin, dîner le midi, souper le soir."
            },
            {
              q: "Que pense Émilie de la question de l’accent ?",
              options: [
                "Pour elle, ce sont les Parisiens qui ont un accent.",
                "Elle veut perdre son accent.",
                "Elle n’a pas d’accent."
              ],
              answer: 0,
              explication: "Tout le monde a un accent… pour les autres."
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
          sousTitre: "Les mots de la francophonie",
          duree: "20 min",
          consigne: "Associe chaque mot ou expression à son sens.",
          items: [
            { terme: "septante (Belgique, Suisse)", definition: "soixante-dix" },
            { terme: "nonante (Belgique, Suisse)", definition: "quatre-vingt-dix" },
            { terme: "magasiner (Québec)", definition: "faire les magasins" },
            { terme: "un courriel (Québec)", definition: "un message électronique, un e-mail" },
            { terme: "la fin de semaine (Québec)", definition: "le week-end" },
            { terme: "une essencerie (Sénégal)", definition: "une station-service" },
            { terme: "un francophone", definition: "une personne qui parle français" }
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
          sousTitre: "Lequel, auquel, duquel",
          duree: "45 min",
          regles: ["pronoms-relatifs-composes", "pronoms-relatifs"],
          fiche: "<p>Après une préposition (<em>avec, pour, sans, dans, grâce à, près de…</em>), on emploie <strong>lequel, laquelle, lesquels, lesquelles</strong>. Avec <em>à</em>, ils se contractent en <strong>auquel, auxquels, auxquelles</strong> ; avec <em>de</em> (dans une locution comme <em>près de, à cause de</em>), en <strong>duquel, desquels, desquelles</strong>. Pour une personne, on peut aussi dire <em>préposition + qui</em>.</p><p class=\"ex\">C’est la langue <strong>dans laquelle</strong> il écrit. Le prix <strong>auquel</strong> elle pense. Le fleuve <strong>près duquel</strong> il a grandi.</p>",
          consigne: "Choisis le pronom qui convient.",
          phrases: [
            {
              avant: "C’est la langue dans",
              options: ["laquelle", "lequel", "que"],
              answer: 0,
              apres: "Senghor a écrit ses poèmes.",
              explication: "Langue est féminin singulier."
            },
            {
              avant: "Voici le mouvement",
              options: ["duquel", "auquel", "lequel"],
              answer: 1,
              apres: "Césaire a participé.",
              explication: "Participer à : à + lequel = auquel."
            },
            {
              avant: "Ce sont des auteurs",
              options: ["desquels", "auquel", "auxquels"],
              answer: 2,
              apres: "je m’intéresse beaucoup.",
              explication: "S’intéresser à + masculin pluriel : auxquels."
            },
            {
              avant: "La ville près",
              options: ["de laquelle", "duquel", "dont"],
              answer: 0,
              apres: "il a grandi s’appelle Joal.",
              explication: "Près de + féminin : de laquelle (pas « dont » après une locution)."
            },
            {
              avant: "Le roman grâce",
              options: ["duquel", "auquel", "lequel"],
              answer: 1,
              apres: "elle est devenue célèbre est traduit en vingt langues.",
              explication: "Grâce à + masculin : auquel."
            },
            {
              avant: "Les raisons pour",
              options: ["laquelle", "lesquels", "lesquelles"],
              answer: 2,
              apres: "il a quitté Haïti sont politiques.",
              explication: "Raisons : féminin pluriel."
            },
            {
              avant: "L’amie avec",
              options: ["qui", "que", "dont"],
              answer: 0,
              apres: "je suis partie au Québec parle aussi créole.",
              explication: "Pour une personne, « avec qui » est possible (ou « avec laquelle »)."
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
          sousTitre: "Présenter un écrivain francophone",
          duree: "1 h 15",
          regles: ["pronoms-relatifs-composes", "connecteurs-logiques"],
          consigne: "Pour le blog de ton cours de français, présente un écrivain ou une écrivaine francophone non français (cité dans le texte ou un autre). Explique d’où il ou elle vient, de quoi parlent ses livres et pourquoi tu as envie de le lire.",
          min: 180,
          max: 240,
          checklist: [
            "J’ai présenté l’auteur, son origine et son époque",
            "J’ai résumé un ou deux thèmes de son œuvre",
            "J’ai utilisé au moins deux pronoms relatifs composés",
            "J’ai exprimé un avis personnel argumenté",
            "Mon texte est organisé en paragraphes"
          ],
          modele: "Dany Laferrière, l’écrivain qui fait rire de l’exil\n\nNé à Port-au-Prince en 1953, Dany Laferrière a grandi chez sa grand-mère, dans une petite ville d’Haïti à laquelle il consacrera plusieurs de ses livres. Journaliste sous la dictature, il doit quitter son pays en 1976, après l’assassinat d’un ami. Il s’installe alors à Montréal, où il travaille en usine avant de publier son premier roman.\n\nL’exil est le thème autour duquel tourne presque toute son œuvre. Mais Laferrière en parle sans pathos : avec ironie, avec humour, parfois avec une grande tendresse. Ses courts chapitres se lisent comme des instantanés de la vie quotidienne, à Montréal comme à Port-au-Prince.\n\nEn 2013, il est élu à l’Académie française, ce qui montre que la littérature en français ne se limite pas à la France.\n\nPourquoi ai-je envie de le lire ? Parce que, moi aussi, je vis loin de mon pays, dans une langue qui n’est pas la mienne. Je suis curieuse de découvrir comment il a fait de cette distance une force."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Les mots de chez moi",
          duree: "30 min",
          consigne: "Présente trois mots ou expressions de ta langue (ou de ta région) qui n’ont pas d’équivalent exact en français. Explique leur sens, donne un exemple d’utilisation et dis ce qu’ils révèlent de ta culture.",
          preparation: [
            "Il y a un mot en chinois qui…",
            "On l’utilise quand…",
            "La traduction la plus proche serait…, mais…",
            "Ce mot montre que…",
            "C’est un peu comme…"
          ],
          dureeCible: "2 minutes",
          modele: "Il y a un mot en chinois qui me manque souvent en français : « 热闹 », rènao. On l’utilise pour un lieu plein de monde, de bruit et de vie, comme un marché ou un repas de famille pendant la fête du Printemps. La traduction la plus proche serait « animé », mais en français, ce mot est plus neutre. En chinois, rènao est presque toujours positif : c’est un compliment. Je crois que cela montre l’importance du collectif dans ma culture : être ensemble, nombreux, c’est le bonheur. En France, au contraire, j’ai l’impression qu’on apprécie davantage le calme.",
          checklist: [
            "J’ai présenté trois mots ou un mot en détail",
            "J’ai expliqué pourquoi la traduction est difficile",
            "J’ai donné un exemple d’utilisation",
            "J’ai fait un lien avec la culture"
          ]
        }
      ]
    }
  }
});
