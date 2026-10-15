/* Unité 19 : L’entretien d’embauche (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 19,
  niveau: "b2",
  theme: "Vie quotidienne",
  titre: "L’entretien d’embauche",
  objectif: "Se présenter, valoriser ses compétences, répondre aux questions difficiles.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Réussir un entretien d’embauche en France",
          format: "long",
          texte: [
            "Un entretien d’embauche se prépare. Avant le rendez-vous, il est indispensable de se renseigner sur l’entreprise : son activité, ses produits, ses valeurs, son actualité récente. Rien ne fait plus mauvaise impression qu’un candidat qui ne sait pas ce que fait l’entreprise à laquelle il postule.",
            "En France, l’entretien commence souvent par une question ouverte : « Présentez-vous. » Le recruteur n’attend pas un récit de toute votre vie, mais une présentation de deux minutes environ, centrée sur votre parcours, vos compétences et ce qui vous amène à postuler. Viennent ensuite des questions sur vos expériences, puis, souvent, les questions qu’on redoute : « Quels sont vos défauts ? » ou « Où vous voyez-vous dans cinq ans ? »",
            "Pour y répondre, la sincérité vaut mieux que les réponses toutes faites. Citer un vrai défaut, en expliquant comment on travaille à le corriger, est plus convaincant que de prétendre être « trop perfectionniste ». De même, mieux vaut s’appuyer sur des exemples concrets que sur des adjectifs : plutôt que de dire « je suis organisée », racontez comment vous avez géré un projet difficile.",
            "Enfin, n’oubliez pas que l’entretien est un échange. À la fin, le recruteur demande presque toujours : « Avez-vous des questions ? » Répondre non peut laisser croire à un manque d’intérêt. Préparez deux ou trois questions sur le poste, l’équipe ou les perspectives d’évolution. Et le lendemain, un court message de remerciement peut faire la différence."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Réussir un entretien d’embauche en France",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Que faut-il faire avant l’entretien ?",
              options: ["Préparer un cadeau", "Se renseigner sur l’entreprise", "Apprendre son CV par cœur"],
              answer: 1,
              explication: "Premier paragraphe."
            },
            {
              q: "Quand le recruteur dit « Présentez-vous », il attend…",
              options: [
                "un récit détaillé de toute votre vie",
                "votre CV imprimé",
                "une présentation de deux minutes sur votre parcours et votre motivation"
              ],
              answer: 2,
              explication: "Deuxième paragraphe."
            },
            {
              q: "Comment répondre à la question sur les défauts ?",
              options: [
                "Citer un vrai défaut et expliquer comment on le corrige",
                "Dire « je suis trop perfectionniste »",
                "Dire qu’on n’en a pas"
              ],
              answer: 0,
              explication: "La sincérité est plus convaincante."
            },
            {
              q: "Pourquoi faut-il poser des questions à la fin ?",
              options: ["Pour gagner du temps", "Pour montrer son intérêt", "Pour connaître le salaire tout de suite"],
              answer: 1,
              explication: "Répondre non peut sembler un manque d’intérêt."
            },
            {
              q: "Que conseille le texte plutôt que des adjectifs ?",
              options: ["Des recommandations écrites", "Des diplômes", "Des exemples concrets"],
              answer: 2,
              explication: "Raconter une expérience précise."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Un entretien pour un stage",
          genre: "Entretien",
          transcription: "Bonjour, asseyez-vous. Alors, pour commencer, pourriez-vous vous présenter ? Bien sûr. Je m’appelle Lin, je suis en première année de master de lettres à Lyon. Avant de venir en France, j’ai travaillé deux ans comme traductrice pour une agence à Shanghai, surtout des livres pour enfants. C’est d’ailleurs ce qui m’a donné envie de travailler dans l’édition. Très bien. Et pourquoi notre maison en particulier ? Parce que vous publiez de plus en plus d’auteurs asiatiques traduits, et je pense que je pourrais vous aider à repérer des textes chinois intéressants, que vous ne pouvez pas lire en version originale. Intéressant. Et quel serait votre principal défaut ? J’ai parfois du mal à déléguer : je préfère tout vérifier moi-même. Mais pendant un projet de groupe à l’université, j’ai appris à faire davantage confiance aux autres, et le résultat était meilleur. D’accord. Avez-vous des questions ? Oui : comment se passe le choix des livres à traduire ? Et est-ce que le stagiaire peut participer aux réunions éditoriales ?"
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Un entretien pour un stage",
          duree: "35 min",
          doc: "e1",
          consigne: "Lin passe un entretien pour un stage dans une maison d’édition. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Quelle expérience Lin a-t-elle avant son master ?",
              options: ["Libraire à Lyon", "Traductrice à Shanghai", "Professeure d’anglais"],
              answer: 1,
              explication: "Deux ans comme traductrice."
            },
            {
              q: "Pourquoi a-t-elle choisi cette maison d’édition ?",
              options: [
                "Elle est proche de chez elle.",
                "Elle paie bien ses stagiaires.",
                "Elle publie de plus en plus d’auteurs asiatiques traduits."
              ],
              answer: 2,
              explication: "Elle peut repérer des textes chinois."
            },
            {
              q: "Quel défaut cite-t-elle ?",
              options: ["Elle a du mal à déléguer.", "Elle est souvent en retard.", "Elle parle trop."],
              answer: 0,
              explication: "Elle préfère tout vérifier elle-même."
            },
            {
              q: "Comment montre-t-elle qu’elle progresse sur ce défaut ?",
              options: [
                "Elle promet de changer.",
                "Elle donne l’exemple d’un projet de groupe.",
                "Elle dit que ce n’est pas grave."
              ],
              answer: 1,
              explication: "Un exemple concret, comme le conseille l’article."
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
          sousTitre: "Le monde du travail",
          duree: "20 min",
          consigne: "Associe chaque mot à sa définition.",
          items: [
            { terme: "un CDI", definition: "un contrat de travail à durée indéterminée" },
            { terme: "un CDD", definition: "un contrat de travail à durée déterminée" },
            {
              terme: "un stage",
              definition: "une période de formation pratique en entreprise pendant les études"
            },
            { terme: "postuler", definition: "présenter sa candidature à un poste" },
            {
              terme: "une lettre de motivation",
              definition: "un courrier qui explique pourquoi on veut le poste"
            },
            { terme: "un recruteur", definition: "la personne chargée de choisir les candidats" },
            {
              terme: "les perspectives d’évolution",
              definition: "les possibilités de progresser dans l’entreprise"
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
          sousTitre: "Le conditionnel de politesse et de projet",
          duree: "45 min",
          regles: ["conditionnel", "registres-de-langue"],
          fiche: "<p>Le <strong>conditionnel présent</strong> adoucit une demande (<em>je voudrais, pourriez-vous</em>), exprime un souhait ou présente une situation imaginée (<em>dans ce poste, je serais chargée de…</em>). Le <strong>conditionnel passé</strong> exprime un regret ou un reproche (<em>j’aurais dû</em>).</p><p class=\"ex\"><strong>Pourriez</strong>-vous me préciser les horaires ? J’<strong>aurais aimé</strong> en savoir plus sur l’équipe.</p>",
          consigne: "Choisis la forme qui convient.",
          phrases: [
            {
              avant: "",
              options: ["Pouvez", "Pourriez"],
              answer: 1,
              apres: "-vous me dire quand je recevrai une réponse ?",
              explication: "Le conditionnel est plus poli dans un contexte professionnel."
            },
            {
              avant: "Je",
              options: ["souhaiterais", "souhaiterai"],
              answer: 0,
              apres: "obtenir des informations sur le poste.",
              explication: "« -rais » : conditionnel ; « -rai » : futur."
            },
            {
              avant: "Dans ce stage, je",
              options: ["serai", "serais"],
              answer: 1,
              apres: "heureuse de participer aux réunions.",
              explication: "Un souhait poli, pas une certitude : conditionnel."
            },
            {
              avant: "J’",
              options: ["aurais dû", "devrais"],
              answer: 0,
              apres: "préparer davantage de questions.",
              explication: "Regret sur le passé : conditionnel passé."
            },
            {
              avant: "Il",
              options: ["faudra", "faudrait"],
              answer: 1,
              apres: "que je relise ma lettre avant de l’envoyer.",
              explication: "Conseil adouci : conditionnel."
            },
            {
              avant: "Si vous me retenez, je",
              options: ["commencerai", "commencerais"],
              answer: 0,
              apres: "dès le 1er mars.",
              explication: "Si + présent → futur."
            },
            {
              avant: "Auriez-vous",
              options: ["la gentil", "l’amabilité"],
              answer: 1,
              apres: "de me rappeler ?",
              explication: "Formule figée : « auriez-vous l’amabilité de… »"
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
          sousTitre: "Une lettre de motivation",
          duree: "1 h 15",
          regles: ["conditionnel", "registres-de-langue"],
          consigne: "Rédige une lettre de motivation pour un stage ou un emploi étudiant qui t’intéresse vraiment (bibliothèque, musée, entreprise, association…). Présente ton parcours, explique ta motivation et ce que tu peux apporter.",
          min: 200,
          max: 260,
          checklist: [
            "J’ai indiqué le poste visé dans l’objet ou la première phrase",
            "J’ai présenté mon parcours en lien avec le poste",
            "J’ai expliqué pourquoi cette organisation en particulier",
            "J’ai donné au moins un exemple concret de compétence",
            "J’ai utilisé une formule de politesse finale correcte"
          ],
          modele: "Objet : Candidature pour un stage de médiation culturelle\n\nMadame la Directrice,\n\nÉtudiante en master de lettres à l’université Lyon 2, je souhaiterais effectuer au sein du musée des Confluences le stage de trois mois que vous proposez au printemps.\n\nAvant mes études en France, j’ai travaillé deux ans comme traductrice à Shanghai, où j’ai appris à rendre des textes complexes accessibles à un jeune public. Cette expérience m’a convaincue que la transmission est au cœur de ce que j’aime faire. Je suis par ailleurs bénévole dans une association qui organise des visites de Lyon pour des étudiants étrangers : j’y conçois des parcours et j’accompagne des groupes de vingt personnes.\n\nVotre musée m’attire particulièrement par la place qu’il accorde aux collections extra-européennes, notamment asiatiques. Grâce à ma connaissance du chinois et de la culture chinoise, je pourrais contribuer à la conception de visites ou de documents destinés aux visiteurs sinophones, de plus en plus nombreux.\n\nJe serais heureuse de vous exposer ma motivation lors d’un entretien.\n\nJe vous prie d’agréer, Madame la Directrice, l’expression de mes salutations respectueuses.\n\nLin Zhou"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Me présenter en deux minutes",
          duree: "30 min",
          consigne: "Simule le début d’un entretien : présente-toi en deux minutes pour le stage ou l’emploi de ton choix. Parle de ton parcours, d’une compétence illustrée par un exemple, et de ta motivation. Puis réponds à voix haute à la question : « Quel est votre principal défaut ? »",
          preparation: [
            "Je suis actuellement…",
            "Auparavant, j’ai…",
            "Par exemple, lorsque…",
            "Ce qui me motive, c’est…",
            "Mon principal défaut, c’est…, mais…"
          ],
          dureeCible: "2 minutes",
          modele: "Je suis actuellement étudiante en master de lettres à Lyon. Auparavant, j’ai travaillé deux ans comme traductrice à Shanghai, principalement pour des livres jeunesse. Cette expérience m’a appris la rigueur, mais aussi l’organisation : par exemple, lorsque nous avons dû traduire une collection de six albums en un mois, j’ai proposé un planning à toute l’équipe et nous avons rendu le travail à temps. Ce qui me motive dans ce stage, c’est la possibilité de découvrir l’édition de l’intérieur. Quant à mon principal défaut, j’ai parfois du mal à déléguer. Mais j’ai appris à faire confiance aux autres, et je me rends compte que le travail collectif est souvent meilleur.",
          checklist: [
            "J’ai parlé environ deux minutes",
            "J’ai donné un exemple concret",
            "J’ai expliqué ma motivation",
            "J’ai répondu à la question sur le défaut de façon sincère"
          ]
        }
      ]
    }
  }
});
