/* Unité 20 : Suivre un cours magistral (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 20,
  niveau: "b2",
  theme: "Études et université",
  titre: "Suivre un cours magistral",
  objectif: "Repérer le plan d’un exposé oral et prendre des notes efficaces.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "Prendre des notes en amphithéâtre",
          format: "long",
          texte: [
            "Pour beaucoup d’étudiants étrangers, le premier cours magistral en France est un choc. Dans un amphithéâtre de deux cents places, le professeur parle pendant deux heures, souvent sans support écrit détaillé. Il n’attend pas de questions pendant le cours, et c’est aux étudiants de noter l’essentiel.",
            "La première règle est de ne pas tout écrire. Un professeur parle environ trois fois plus vite qu’on n’écrit à la main : vouloir tout noter, c’est la meilleure manière de tout perdre. Il faut repérer la structure du cours. Les enseignants l’annoncent souvent dès le début : « Nous verrons d’abord…, puis… ». Les mots de liaison aident aussi : « en revanche » annonce une opposition, « autrement dit » une reformulation, « en somme » une conclusion.",
            "La deuxième règle est d’utiliser des abréviations et des symboles : « gvt » pour gouvernement, « qqch » pour quelque chose, une flèche pour une conséquence, le signe « ≠ » pour une différence. L’essentiel est d’être cohérent et de toujours utiliser les mêmes.",
            "Enfin, une prise de notes ne sert à rien si on ne la relit pas. Les spécialistes de la mémoire conseillent de reprendre ses notes le jour même, de les compléter, et de résumer le cours en quelques lignes. C’est à ce moment-là que l’on comprend vraiment ce qu’on a entendu."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "Prendre des notes en amphithéâtre",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Qu’est-ce qui surprend les étudiants étrangers dans un cours magistral ?",
              options: [
                "Le professeur pose beaucoup de questions.",
                "Les cours sont très courts.",
                "Le professeur parle longtemps et les étudiants doivent noter seuls l’essentiel."
              ],
              answer: 2,
              explication: "Premier paragraphe."
            },
            {
              q: "Pourquoi ne faut-il pas tout écrire ?",
              options: [
                "Parce que le professeur parle beaucoup plus vite qu’on n’écrit",
                "Parce que c’est interdit",
                "Parce que le cours est en ligne"
              ],
              answer: 0,
              explication: "Environ trois fois plus vite."
            },
            {
              q: "Que signale « autrement dit » ?",
              options: ["Une opposition", "Une reformulation", "Une conclusion"],
              answer: 1,
              explication: "On dit la même chose autrement."
            },
            {
              q: "Quelle est la règle pour les abréviations ?",
              options: [
                "En inventer de nouvelles à chaque cours",
                "N’en utiliser aucune",
                "Toujours utiliser les mêmes"
              ],
              answer: 2,
              explication: "Être cohérent."
            },
            {
              q: "Que conseillent les spécialistes de la mémoire ?",
              options: [
                "Relire ses notes le jour même et résumer le cours",
                "Recopier le cours au propre une semaine plus tard",
                "Enregistrer le cours"
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
          titre: "Extrait d’un cours magistral",
          genre: "Cours magistral",
          transcription: "Bonjour à tous. Aujourd’hui, nous allons parler de l’invention de l’imprimerie et de ses conséquences. Nous verrons d’abord les origines de cette technique, puis ses effets sur la diffusion du savoir, et enfin les résistances qu’elle a suscitées. Premier point, donc, les origines. On attribue souvent l’invention de l’imprimerie à Gutenberg, vers 1450, à Mayence. Or, c’est inexact. En Chine, on imprimait déjà des textes avec des planches de bois gravées depuis au moins le huitième siècle, et un artisan nommé Bi Sheng avait mis au point des caractères mobiles en terre cuite dès le onzième siècle. Ce que Gutenberg invente, en revanche, c’est un système complet : des caractères mobiles en métal, une encre adaptée et une presse inspirée des pressoirs à vin. Autrement dit, il ne crée pas l’idée, mais il la rend industrielle. Et c’est là qu’intervient notre deuxième point : en à peine cinquante ans, des millions de livres sont imprimés en Europe."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Extrait d’un cours magistral",
          duree: "35 min",
          doc: "e1",
          consigne: "Voici le début d’un cours d’histoire du livre. Prends des notes pendant l’écoute, puis réponds aux questions.",
          questions: [
            {
              q: "Quel est le plan annoncé par le professeur ?",
              options: [
                "Le papier, l’encre, la presse",
                "Gutenberg, la Chine, la Bible",
                "Origines, effets sur la diffusion du savoir, résistances"
              ],
              answer: 2,
              explication: "Il l’annonce dès le début : « d’abord…, puis…, et enfin… »."
            },
            {
              q: "Selon le professeur, l’idée que Gutenberg a inventé l’imprimerie est…",
              options: ["inexacte", "exacte", "récente"],
              answer: 0,
              explication: "« Or, c’est inexact. »"
            },
            {
              q: "Qu’avait inventé Bi Sheng ?",
              options: ["Une presse à vin", "Des caractères mobiles en terre cuite", "Le papier"],
              answer: 1,
              explication: "Au XIe siècle, en Chine."
            },
            {
              q: "Que signifie « il la rend industrielle » ?",
              options: [
                "Il la rend plus chère.",
                "Il la vend à des usines.",
                "Il permet une production en grande quantité."
              ],
              answer: 2,
              explication: "Son système permet d’imprimer massivement."
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
          sousTitre: "Les mots qui structurent un cours",
          duree: "20 min",
          consigne: "Associe chaque expression à sa fonction.",
          items: [
            { terme: "d’une part… d’autre part", definition: "présenter deux aspects d’une même question" },
            { terme: "en revanche", definition: "introduire une opposition" },
            { terme: "autrement dit", definition: "reformuler une idée" },
            { terme: "notamment", definition: "introduire un exemple parmi d’autres" },
            { terme: "en somme", definition: "résumer, conclure" },
            { terme: "à savoir", definition: "préciser ce qui vient d’être annoncé" },
            {
              terme: "or",
              definition: "introduire un élément qui fait avancer ou contredit le raisonnement"
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
          sousTitre: "La nominalisation",
          duree: "45 min",
          regles: ["nominalisation"],
          fiche: "<p>La <strong>nominalisation</strong> transforme un verbe ou un adjectif en nom : <em>inventer → l’invention</em>, <em>diffuser → la diffusion</em>, <em>rapide → la rapidité</em>. Elle permet d’écrire de façon concise : c’est la base de la prise de notes et des titres.</p><p class=\"ex\">Gutenberg a inventé l’imprimerie → <strong>l’invention</strong> de l’imprimerie par Gutenberg.</p>",
          consigne: "Choisis le nom qui correspond au verbe ou à l’adjectif.",
          phrases: [
            {
              avant: "Les livres se diffusent rapidement → la",
              options: ["diffusion", "diffusement"],
              answer: 0,
              apres: "rapide des livres.",
              explication: "Diffuser → la diffusion."
            },
            {
              avant: "Le savoir se développe → le",
              options: ["développage", "développement"],
              answer: 1,
              apres: "du savoir.",
              explication: "Suffixe -ment."
            },
            {
              avant: "L’Église résiste → la",
              options: ["résistance", "résistation"],
              answer: 0,
              apres: "de l’Église.",
              explication: "Résister → la résistance."
            },
            {
              avant: "Les prix baissent → la",
              options: ["baissement", "baisse"],
              answer: 1,
              apres: "des prix.",
              explication: "Certains noms viennent du radical seul : baisser → la baisse."
            },
            {
              avant: "Le texte est clair → la",
              options: ["clarté", "clairté"],
              answer: 0,
              apres: "du texte.",
              explication: "Clair → la clarté."
            },
            {
              avant: "Les étudiants réussissent → la",
              options: ["réussissement", "réussite"],
              answer: 1,
              apres: "des étudiants.",
              explication: "Réussir → la réussite."
            },
            {
              avant: "On analyse les sources → l’",
              options: ["analyse", "analysement"],
              answer: 0,
              apres: "des sources.",
              explication: "Analyser → l’analyse."
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
          sousTitre: "Résumer un cours",
          duree: "1 h",
          regles: ["nominalisation", "connecteurs-logiques"],
          consigne: "À partir de l’extrait du cours d’histoire du livre (activité d’écoute) et de tes notes, rédige un résumé clair pour une camarade absente. Reprends le plan annoncé et les informations essentielles.",
          min: 120,
          max: 170,
          checklist: [
            "J’ai repris le plan du cours",
            "J’ai gardé les dates et les noms essentiels",
            "J’ai utilisé au moins trois nominalisations",
            "J’ai écrit avec mes propres mots, sans recopier la transcription",
            "Mon résumé est compréhensible sans avoir écouté le cours"
          ],
          modele: "Cours d’histoire du livre : l’imprimerie et ses conséquences\n\nLe professeur a annoncé trois parties : les origines de l’imprimerie, ses effets sur la diffusion du savoir et les résistances qu’elle a provoquées.\n\n1. Les origines. L’attribution de l’invention à Gutenberg (vers 1450, Mayence) est inexacte. En Chine, l’impression sur planches de bois existait au moins dès le VIIIe siècle, et Bi Sheng avait créé des caractères mobiles en terre cuite au XIe siècle. L’apport de Gutenberg réside dans la mise au point d’un système complet : caractères en métal, encre adaptée, presse inspirée du pressoir à vin. Il a donc permis l’industrialisation de l’imprimerie plutôt que son invention.\n\n2. Les effets. En cinquante ans, des millions de livres ont été imprimés en Europe. (Suite au prochain cours.)"
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Restituer un cours",
          duree: "30 min",
          consigne: "Une camarade n’a pas pu venir au cours. Explique-lui à voix haute, en t’appuyant uniquement sur tes notes, ce que le professeur a dit sur les origines de l’imprimerie. Utilise les marqueurs de structure.",
          preparation: [
            "Le prof a commencé par annoncer…",
            "D’abord, il a expliqué que…",
            "Ce qui est intéressant, c’est que…",
            "Autrement dit, …",
            "En somme, …"
          ],
          dureeCible: "1 min 30",
          modele: "Alors, le prof a commencé par annoncer le plan : les origines de l’imprimerie, ses effets sur le savoir, et les résistances. On n’a vu que la première partie. D’abord, il a expliqué que, contrairement à ce qu’on croit, ce n’est pas Gutenberg qui a inventé l’imprimerie. Ce qui est intéressant, c’est qu’en Chine on imprimait déjà au huitième siècle avec des planches de bois, et qu’un certain Bi Sheng avait inventé des caractères mobiles en terre cuite. Gutenberg, lui, a créé un système complet, avec du métal et une presse. Autrement dit, il n’a pas eu l’idée, mais il l’a rendue industrielle. En somme, il faut retenir que l’innovation de Gutenberg, c’est l’échelle.",
          checklist: [
            "J’ai suivi le plan du cours",
            "J’ai utilisé au moins trois marqueurs de structure",
            "J’ai gardé les informations essentielles",
            "J’ai parlé à partir de notes, pas d’un texte rédigé"
          ]
        }
      ]
    }
  }
});
