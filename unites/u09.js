/* Unité 9 : Comprendre un journal télévisé (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 9,
  niveau: "b1",
  theme: "Information, géopolitique et histoire",
  titre: "Comprendre un journal télévisé",
  objectif: "Repérer les informations essentielles d’un reportage court.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Comment se fabrique un journal télévisé",
          format: "long",
          texte: [
            "Chaque soir, à 20 heures, plusieurs millions de Français regardent le journal télévisé, qu’on appelle souvent le « JT ». En une demi-heure, il présente une quinzaine de sujets. Mais derrière ces trente minutes, il y a une journée entière de travail.",
            "Tout commence le matin, à la conférence de rédaction. Les journalistes et le rédacteur en chef choisissent les sujets du jour. Ils doivent faire des choix difficiles : l’actualité internationale, la politique, l’économie, les faits divers, le sport, la culture… Tout ne peut pas entrer dans le journal. On décide aussi de l’ordre : le premier sujet, celui qu’on appelle « l’ouverture », est considéré comme le plus important.",
            "Ensuite, des équipes partent en reportage, souvent un journaliste et un caméraman. Ils filment, interrogent des témoins, puis reviennent monter leur sujet : un reportage dure rarement plus de deux minutes. Pendant ce temps, d’autres journalistes vérifient les informations, préparent les cartes et les graphiques.",
            "Le présentateur, lui, n’improvise presque rien. Il lit ses textes sur un prompteur, un écran placé sous la caméra. Pourtant, en cas d’événement imprévu, il doit être capable de changer tout le programme en quelques minutes, en direct."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Comment se fabrique un journal télévisé",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Combien de sujets présente un JT en moyenne ?",
              options: ["Une quinzaine", "Environ cinq", "Une cinquantaine"],
              answer: 0,
              explication: "« Une quinzaine de sujets » en une demi-heure."
            },
            {
              q: "À quoi sert la conférence de rédaction ?",
              options: ["À présenter le journal", "À choisir les sujets et leur ordre", "À vérifier le matériel"],
              answer: 1,
              explication: "On y choisit les sujets et l’ordre."
            },
            {
              q: "Qu’est-ce que « l’ouverture » ?",
              options: ["Le générique du journal", "La météo", "Le premier sujet, jugé le plus important"],
              answer: 2,
              explication: "C’est le premier sujet du journal."
            },
            {
              q: "Combien de temps dure en général un reportage ?",
              options: ["Moins de deux minutes environ", "Dix minutes", "Une demi-heure"],
              answer: 0,
              explication: "« Rarement plus de deux minutes. »"
            },
            {
              q: "Qu’est-ce qu’un prompteur ?",
              options: ["Un journaliste stagiaire", "Un écran où le présentateur lit ses textes", "Une caméra"],
              answer: 1,
              explication: "Il est placé sous la caméra."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Les titres du journal",
          genre: "Journal radio",
          transcription: "Bonsoir à tous, voici les titres de ce journal. À Toulouse, la nouvelle ligne de métro a été inaugurée ce matin. Elle relie le nord et le sud de la ville en vingt minutes et devrait transporter deux cent mille voyageurs par jour. Dans les Pyrénées, un randonneur blessé a été secouru hier soir par hélicoptère, après une nuit passée en montagne. Il souffre d’une fracture à la jambe, mais ses jours ne sont pas en danger. Économie : les ventes de vélos électriques ont encore augmenté cette année, de douze pour cent selon les professionnels du secteur. Et puis la culture, avec l’ouverture ce week-end du festival de jazz de Marciac, qui fête cette année sa quarante-septième édition. Enfin, la météo : il fera beau demain sur toute la région, avec des températures jusqu’à vingt-huit degrés l’après-midi."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Les titres du journal",
          duree: "30 min",
          doc: "e1",
          consigne: "Voici les titres d’un journal régional à la radio. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Que s’est-il passé à Toulouse ?",
              options: ["L’inauguration d’une ligne de métro", "Une grève des transports", "Un festival de musique"],
              answer: 0,
              explication: "La nouvelle ligne a été inaugurée ce matin."
            },
            {
              q: "Quel est l’état du randonneur ?",
              options: [
                "Il est gravement blessé.",
                "Il a une jambe cassée mais il n’est pas en danger.",
                "Il est toujours perdu."
              ],
              answer: 1,
              explication: "« Ses jours ne sont pas en danger » signifie qu’il ne va pas mourir."
            },
            {
              q: "De combien les ventes de vélos électriques ont-elles augmenté ?",
              options: ["De 2 %", "De 47 %", "De 12 %"],
              answer: 2,
              explication: "47, c’est l’édition du festival."
            },
            {
              q: "Quel temps fera-t-il demain ?",
              options: ["Beau et chaud", "Pluvieux", "Froid et nuageux"],
              answer: 0,
              explication: "Beau temps, jusqu’à 28 degrés."
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
          sousTitre: "Les mots de l’information",
          duree: "20 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            { terme: "un reportage", definition: "un sujet filmé ou enregistré sur le terrain" },
            { terme: "une brève", definition: "une information très courte, en quelques lignes" },
            { terme: "un fait divers", definition: "un événement local : accident, vol, sauvetage…" },
            { terme: "l’envoyé spécial", definition: "le journaliste envoyé sur le lieu d’un événement" },
            { terme: "la une", definition: "la première page d’un journal, ou l’information principale" },
            { terme: "un témoin", definition: "une personne qui a vu ce qui s’est passé" },
            { terme: "en direct", definition: "diffusé au moment même où cela se passe" }
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
          sousTitre: "La voix passive",
          duree: "45 min",
          regles: ["voix-passive"],
          fiche: "<p>La voix passive met en valeur la personne ou la chose qui subit l’action. On la forme avec <strong>être</strong> au temps voulu + <strong>participe passé</strong>, accordé avec le sujet. L’agent est introduit par <strong>par</strong>. Elle est très fréquente dans les informations.</p><p class=\"ex\">Le randonneur <strong>a été secouru</strong> par les pompiers. La ligne <strong>sera inaugurée</strong> lundi.</p>",
          consigne: "Choisis la forme passive correcte.",
          phrases: [
            {
              avant: "La nouvelle ligne de métro",
              options: ["a inauguré", "a été inaugurée"],
              answer: 1,
              apres: "ce matin.",
              explication: "La ligne ne fait pas l’action : elle la subit."
            },
            {
              avant: "Les blessés",
              options: ["ont été transportés", "ont été transporté"],
              answer: 0,
              apres: "à l’hôpital.",
              explication: "Le participe s’accorde avec le sujet : masculin pluriel."
            },
            {
              avant: "Le festival",
              options: ["est ouvert", "sera ouvert"],
              answer: 1,
              apres: "samedi prochain par le maire.",
              explication: "« Samedi prochain » : futur, donc « sera »."
            },
            {
              avant: "Chaque année, ce prix",
              options: ["est remis", "a remis"],
              answer: 0,
              apres: "à un jeune auteur.",
              explication: "Une habitude au présent passif : « est » + participe."
            },
            {
              avant: "La décision",
              options: ["a été pris", "a été prise"],
              answer: 1,
              apres: "hier soir par le conseil municipal.",
              explication: "Décision est féminin : « prise »."
            },
            {
              avant: "Le pont",
              options: ["avait été construit", "était construit"],
              answer: 0,
              apres: "en 1890, bien avant la guerre.",
              explication: "Antériorité dans le passé : plus-que-parfait passif."
            },
            {
              avant: "Les résultats",
              options: ["publieront", "seront publiés"],
              answer: 1,
              apres: "la semaine prochaine.",
              explication: "Les résultats ne publient pas : ils sont publiés."
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
          sousTitre: "Rédiger une brève",
          duree: "45 min",
          regles: ["voix-passive"],
          consigne: "Rédige deux brèves pour le journal de ton université : un événement qui a eu lieu (une fête, une conférence, une inauguration…) et un événement à venir. Chaque brève doit répondre aux questions : qui ? quoi ? où ? quand ? pourquoi ?",
          min: 100,
          max: 150,
          checklist: [
            "Chaque brève a un titre court",
            "Les réponses à qui, quoi, où, quand sont dans les deux premières phrases",
            "J’ai utilisé au moins deux phrases à la voix passive",
            "Le ton est neutre : je ne donne pas mon avis"
          ],
          modele: "Une nouvelle bibliothèque pour les étudiants de langues\nLa bibliothèque de langues du campus a été inaugurée mardi par la présidente de l’université. Elle propose 12 000 livres en 35 langues, ainsi que des salles de travail en groupe. Elle sera ouverte du lundi au samedi, de 8 h à 22 h. Plus de 300 étudiants l’ont déjà visitée le premier jour.\n\nUne conférence sur la francophonie en Asie\nJeudi 14 novembre, à 18 h, l’amphithéâtre B accueillera une conférence sur la place du français en Asie. Elle sera animée par deux chercheurs de Lyon et de Hanoï. L’entrée est libre, mais l’inscription est conseillée, car le nombre de places est limité."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter une information",
          duree: "30 min",
          consigne: "Choisis une information que tu as lue ou entendue cette semaine (en français ou dans ta langue). Présente-la comme un ou une journaliste : les faits d’abord, puis une phrase de conclusion. Ne donne ton avis qu’à la fin, en le présentant clairement comme une opinion.",
          preparation: [
            "Cette semaine, on a appris que…",
            "Selon…, …",
            "Cela s’est passé à…",
            "Il s’agit de…",
            "Pour ma part, je trouve que…"
          ],
          dureeCible: "1 minute",
          modele: "Cette semaine, on a appris qu’une nouvelle ligne de métro avait été inaugurée à Toulouse. Elle relie le nord et le sud de la ville en vingt minutes. Selon la mairie, elle devrait transporter deux cent mille voyageurs par jour et réduire les embouteillages. Les travaux ont duré six ans et ont coûté plus de deux milliards d’euros. Pour ma part, je trouve que c’est une bonne nouvelle, surtout pour les étudiants qui habitent loin du centre.",
          checklist: [
            "J’ai présenté les faits avant mon avis",
            "J’ai cité une source (selon…)",
            "J’ai parlé de façon claire et posée",
            "J’ai utilisé au moins une phrase passive"
          ]
        }
      ]
    }
  }
});
