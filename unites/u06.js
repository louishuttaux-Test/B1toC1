/* Unité 6 : Se loger en France (B1)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 6,
  niveau: "b1",
  theme: "Vie quotidienne",
  titre: "Se loger en France",
  objectif: "Comprendre une annonce, visiter un logement, écrire à un propriétaire.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Une annonce et un premier échange",
          format: "long",
          texte: [
            "À louer, Bordeaux, quartier Saint-Michel : studio meublé de 24 m², au troisième étage sans ascenseur, dans un immeuble ancien. Pièce principale lumineuse avec coin cuisine équipé, salle d’eau avec douche, toilettes séparées. Loyer : 520 euros par mois charges comprises. Dépôt de garantie : un mois de loyer. Disponible à partir du 1er septembre. Proche du tramway et des commerces. Idéal étudiant. Garant demandé.",
            "Mei, étudiante en master, a répondu à l’annonce le soir même. Le propriétaire, monsieur Lambert, l’a rappelée le lendemain matin. Il lui a expliqué que plusieurs personnes étaient déjà intéressées et qu’il organisait des visites le samedi. Il lui a aussi demandé un dossier : une pièce d’identité, une attestation d’inscription à l’université et les justificatifs de son garant.",
            "Mei n’avait pas de garant en France. Une amie lui a parlé de Visale, une garantie gratuite proposée par l’État aux étudiants. En une soirée, elle a fait la demande en ligne et a reçu son attestation. Le samedi, elle est arrivée à la visite avec un dossier complet, rangé dans une pochette.",
            "Le studio était petit, mais la fenêtre donnait sur une jolie place avec un marché. Monsieur Lambert a apprécié son sérieux. Le lundi suivant, il lui a annoncé que le logement était pour elle. Ils ont fixé un rendez-vous pour signer le bail et faire l’état des lieux d’entrée."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Une annonce et un premier échange",
          duree: "40 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Le loyer de 520 euros…",
              options: ["comprend les charges", "ne comprend pas l’eau ni le chauffage", "est payé chaque semaine"],
              answer: 0,
              explication: "L’annonce indique « charges comprises » : les charges (eau, entretien de l’immeuble…) sont incluses."
            },
            {
              q: "Que doit fournir Mei dans son dossier ?",
              options: [
                "Une lettre de motivation et un CV",
                "Une pièce d’identité, une attestation d’inscription et les papiers d’un garant",
                "Uniquement un relevé bancaire"
              ],
              answer: 1,
              explication: "Le propriétaire demande ces trois éléments."
            },
            {
              q: "Qu’est-ce que Visale ?",
              options: [
                "Une agence immobilière",
                "Une banque pour étudiants",
                "Une garantie gratuite proposée par l’État"
              ],
              answer: 2,
              explication: "Visale remplace un garant personnel."
            },
            {
              q: "Pourquoi le propriétaire choisit-il Mei ?",
              options: [
                "Son dossier complet montre son sérieux.",
                "Elle est la seule candidate.",
                "Elle propose un loyer plus élevé."
              ],
              answer: 0,
              explication: "Il « a apprécié son sérieux » : elle est venue avec un dossier complet."
            },
            {
              q: "« Le dépôt de garantie » est…",
              options: [
                "le premier loyer",
                "une somme versée au début et rendue en partant si le logement est en bon état",
                "une assurance contre l’incendie"
              ],
              answer: 1,
              explication: "Il sert à couvrir d’éventuels dégâts ; il est rendu à la fin du bail."
            },
            {
              q: "Dans « le logement était pour elle », « était » est à l’imparfait parce que…",
              options: ["c’est une action soudaine", "c’est une habitude", "c’est un discours rapporté au passé"],
              answer: 2,
              explication: "Il « lui a annoncé que le logement était pour elle » : le présent du discours devient imparfait."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Une visite d’appartement",
          genre: "Dialogue (visite)",
          transcription: "Bonjour, entrez, je vous en prie. Alors, voici l’entrée, avec un grand placard où vous pouvez ranger vos manteaux. À droite, c’est le séjour : vingt mètres carrés, exposé plein sud, donc très lumineux l’après-midi. La cuisine est ouverte sur le séjour, elle a été refaite il y a deux ans. Le four et le réfrigérateur sont neufs, en revanche il n’y a pas de lave-vaisselle. Ici, au fond du couloir, vous avez la chambre, qui donne sur la cour : c’est très calme, vous n’entendrez pas la rue. La salle de bains est juste à côté, avec une baignoire. Le chauffage est individuel, au gaz. Pour le loyer, c’est huit cent soixante-dix euros, plus soixante euros de charges. Il y a une cave au sous-sol, mais pas de parking. Si l’appartement vous plaît, il faut nous envoyer votre dossier avant mercredi, parce que nous avons beaucoup de demandes."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Une visite d’appartement",
          duree: "30 min",
          doc: "e1",
          consigne: "Une agente immobilière fait visiter un deux-pièces à un jeune couple. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Pourquoi le séjour est-il lumineux ?",
              options: ["Il est exposé au sud.", "Il a de grandes fenêtres sur la rue.", "Il est au dernier étage."],
              answer: 0,
              explication: "« Exposé plein sud, donc très lumineux l’après-midi. »"
            },
            {
              q: "Qu’est-ce qui manque dans la cuisine ?",
              options: ["Un four", "Un lave-vaisselle", "Un réfrigérateur"],
              answer: 1,
              explication: "« En revanche, il n’y a pas de lave-vaisselle. »"
            },
            {
              q: "La chambre est calme parce qu’…",
              options: ["elle est loin de l’entrée", "elle a double vitrage", "elle donne sur la cour"],
              answer: 2,
              explication: "« Elle donne sur la cour : c’est très calme. »"
            },
            {
              q: "Combien le couple paiera-t-il en tout chaque mois ?",
              options: ["930 €", "870 €", "810 €"],
              answer: 0,
              explication: "870 € de loyer + 60 € de charges = 930 €."
            },
            {
              q: "Avant quand faut-il envoyer le dossier ?",
              options: ["Avant la fin du mois", "Avant mercredi", "Le jour même"],
              answer: 1,
              explication: "L’agente insiste : beaucoup de demandes."
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
          sousTitre: "Le vocabulaire du logement",
          duree: "20 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            { terme: "le bail", definition: "le contrat de location signé avec le propriétaire" },
            { terme: "meublé", definition: "loué avec un lit, une table, des rangements…" },
            {
              terme: "la colocation",
              definition: "le fait de partager un logement avec d’autres locataires"
            },
            {
              terme: "l’état des lieux",
              definition: "la description précise du logement à l’entrée et à la sortie"
            },
            { terme: "le garant", definition: "la personne qui paie si le locataire ne peut pas payer" },
            {
              terme: "les charges",
              definition: "les frais d’eau, d’entretien de l’immeuble, d’ordures ménagères…"
            },
            { terme: "un deux-pièces", definition: "un logement avec un séjour et une chambre" }
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
          sousTitre: "Qui, que, dont, où",
          duree: "45 min",
          regles: ["pronoms-relatifs"],
          fiche: "<p>Le pronom relatif reprend un nom et évite de le répéter. <strong>Qui</strong> remplace le sujet, <strong>que</strong> le complément d’objet direct, <strong>dont</strong> un complément introduit par <em>de</em>, et <strong>où</strong> un lieu ou un moment.</p><p class=\"ex\">Le studio <strong>que</strong> j’ai visité est petit. C’est le quartier <strong>où</strong> j’habite. Voici le garant <strong>dont</strong> je t’ai parlé.</p>",
          consigne: "Choisis le pronom relatif qui convient.",
          phrases: [
            {
              avant: "C’est un appartement",
              options: ["qui", "que", "dont"],
              answer: 0,
              apres: "donne sur un parc.",
              explication: "« Qui » est sujet de « donne »."
            },
            {
              avant: "Le studio",
              options: ["qui", "que", "où"],
              answer: 1,
              apres: "Mei a loué est près du tramway.",
              explication: "Mei a loué quoi ? le studio : complément d’objet direct, donc « que »."
            },
            {
              avant: "C’est la ville",
              options: ["que", "dont", "où"],
              answer: 2,
              apres: "j’ai fait mes études.",
              explication: "« Où » pour un lieu."
            },
            {
              avant: "Voici le dossier",
              options: ["dont", "que", "qui"],
              answer: 0,
              apres: "le propriétaire a besoin.",
              explication: "Avoir besoin de quelque chose : « dont »."
            },
            {
              avant: "Je me souviens du jour",
              options: ["que", "où", "dont"],
              answer: 1,
              apres: "j’ai reçu les clés.",
              explication: "« Où » s’emploie aussi pour un moment."
            },
            {
              avant: "La colocataire",
              options: ["dont", "qui", "que"],
              answer: 2,
              apres: "j’ai rencontrée hier est italienne.",
              explication: "J’ai rencontré qui ? la colocataire : COD, donc « que »."
            },
            {
              avant: "C’est un quartier",
              options: ["dont", "que", "où"],
              answer: 0,
              apres: "tout le monde parle.",
              explication: "Parler de quelque chose : « dont »."
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
          sousTitre: "Écrire au propriétaire",
          duree: "1 h",
          regles: ["registres-de-langue", "pronoms-relatifs"],
          consigne: "Tu as vu une annonce pour un studio. Écris un courriel au propriétaire : présente-toi, dis pourquoi le logement t’intéresse, pose deux questions précises et propose un moment pour une visite.",
          min: 120,
          max: 170,
          checklist: [
            "J’ai utilisé une formule d’appel et une formule de politesse adaptées",
            "Je me suis présentée en deux ou trois phrases",
            "J’ai posé deux questions précises (charges, date, quartier…)",
            "J’ai proposé une date de visite",
            "J’ai vouvoyé le propriétaire du début à la fin"
          ],
          modele: "Objet : Studio meublé, quartier Saint-Michel\n\nMadame, Monsieur,\n\nJe vous écris au sujet de votre annonce pour le studio meublé situé dans le quartier Saint-Michel. Je m’appelle Lin, j’ai vingt-quatre ans et je commence en septembre un master de lettres à l’université de Bordeaux.\n\nVotre logement m’intéresse beaucoup, car il est proche du tramway que je prendrai tous les jours pour aller à la faculté. J’aurais toutefois deux questions : les charges comprennent-elles le chauffage ? Et serait-il possible d’emménager quelques jours avant le 1er septembre ?\n\nJe dispose d’un dossier complet, avec une garantie Visale. Je suis disponible pour une visite samedi matin ou lundi en fin de journée.\n\nJe vous remercie par avance de votre réponse et vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.\n\nLin Zhou"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Décrire mon logement idéal",
          duree: "30 min",
          consigne: "Décris à voix haute ton logement idéal pendant tes études en France : la ville et le quartier, la taille, les pièces, ce qui est indispensable pour toi et ce qui ne l’est pas. Justifie au moins deux choix.",
          preparation: [
            "Mon logement idéal serait…",
            "Ce qui compte le plus pour moi, c’est…",
            "Je préférerais… plutôt que…",
            "En revanche, je peux me passer de…",
            "C’est un quartier où…"
          ],
          dureeCible: "1 à 2 minutes",
          modele: "Mon logement idéal serait un petit deux-pièces dans un quartier animé, mais pas trop bruyant. Ce qui compte le plus pour moi, c’est la lumière : j’ai besoin d’une grande fenêtre, parce que je travaille beaucoup chez moi. Je préférerais habiter près de l’université plutôt que dans le centre-ville, pour pouvoir y aller à pied. J’aimerais aussi avoir une vraie cuisine, car j’adore cuisiner des plats de mon pays pour mes amis. En revanche, je peux me passer de baignoire ou de balcon. Enfin, ce serait parfait si c’était un quartier où il y a un marché le week-end.",
          checklist: [
            "J’ai situé le logement (ville, quartier)",
            "J’ai décrit les pièces",
            "J’ai justifié au moins deux choix",
            "J’ai utilisé le conditionnel pour parler d’un idéal"
          ]
        }
      ]
    }
  }
});
