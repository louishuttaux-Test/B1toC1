/*
  CONTENU DU PARCOURS
  -------------------
  Pour ajouter une unité : copier le bloc de l'unité 1, changer l'id,
  remplir "activites". Une unité sans "activites" s'affiche comme « À venir ».

  Types d'activités disponibles :
    lecture      : texte + questions à choix
    ecoute       : texte lu par la voix du navigateur + questions
    association  : relier des termes et des définitions
    trous        : fiche de grammaire + phrases à compléter (menus déroulants)
    ecriture     : production écrite avec grille d'autocontrôle et modèle
*/

window.PARCOURS = {
  niveaux: [
    {
      id: "b1b2",
      titre: "Consolider le B1, entrer dans le B2",
      description: "Comprendre comment fonctionne l’université française et en maîtriser les situations de base."
    },
    {
      id: "b2",
      titre: "Installer le B2",
      description: "Argumenter, synthétiser, adapter son registre : les compétences attendues en licence."
    },
    {
      id: "c1",
      titre: "Viser le C1",
      description: "Lire et écrire avec les codes académiques : dissertation, compte rendu critique, soutenance."
    }
  ],

  unites: [
    {
      id: 1,
      niveau: "b1b2",
      titre: "Entrer à l’université française",
      objectif: "Comprendre l’organisation des études et écrire un courriel formel à un enseignant.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Étudier à l’université en France : ce qui change",
          duree: "45 min",
          texte: [
            "En France, l’enseignement supérieur est organisé selon le système LMD : licence (trois ans), master (deux ans) et doctorat (trois ans environ). Chaque année est divisée en deux semestres, et chaque semestre permet d’obtenir 30 crédits ECTS. Ce système, commun à la plupart des pays européens, facilite la mobilité des étudiants.",
            "Les cours prennent principalement deux formes. Le cours magistral (CM) se déroule dans un amphithéâtre : un enseignant présente le contenu devant plusieurs centaines d’étudiants, qui prennent des notes. Les échanges y sont rares. Les travaux dirigés (TD), au contraire, réunissent une trentaine d’étudiants : on y applique les notions du cours, on fait des exercices, on présente parfois un exposé. La présence en TD est généralement obligatoire, alors que l’assiduité en CM n’est pas toujours contrôlée.",
            "L’évaluation combine souvent contrôle continu et examens de fin de semestre, appelés partiels. Un étudiant qui échoue peut se présenter à une session de rattrapage, en général au début de l’été. Les notes sont attribuées sur 20, et une moyenne de 10 suffit pour valider une unité d’enseignement (UE).",
            "Pour beaucoup d’étudiants internationaux, la principale difficulté n’est pourtant pas la langue elle-même, mais l’autonomie attendue. Les enseignants donnent une bibliographie et considèrent que les étudiants la consulteront seuls ; personne ne vérifie si le travail personnel est fait. Par ailleurs, les copies doivent respecter des codes précis : une dissertation, par exemple, suit un plan annoncé dès l’introduction. Comprendre ces attentes implicites prend du temps, c’est pourquoi de nombreuses universités proposent des ateliers de méthodologie dès la première année."
          ],
          questions: [
            {
              q: "Combien de crédits ECTS un étudiant valide-t-il en une année complète ?",
              options: ["30", "60", "120"],
              answer: 1,
              explication: "Deux semestres de 30 crédits chacun, soit 60 crédits par an."
            },
            {
              q: "Quelle phrase décrit correctement la différence entre CM et TD ?",
              options: [
                "Le CM a lieu en petit groupe, le TD en amphithéâtre.",
                "Le CM est un exposé devant un grand public, le TD un travail pratique en petit groupe.",
                "Le TD est facultatif, alors que le CM est obligatoire."
              ],
              answer: 1,
              explication: "Le paragraphe 2 oppose l’amphithéâtre du CM aux trente étudiants du TD, où la présence est obligatoire."
            },
            {
              q: "Que sont les « partiels » ?",
              options: [
                "Des devoirs à rendre chaque semaine",
                "Les examens de fin de semestre",
                "Des examens réservés aux étudiants qui ont échoué"
              ],
              answer: 1,
              explication: "Les examens réservés aux étudiants qui ont échoué, c’est le rattrapage."
            },
            {
              q: "Selon l’auteur, quelle est la principale difficulté des étudiants internationaux ?",
              options: [
                "La langue française",
                "L’autonomie attendue dans le travail",
                "Le nombre d’examens"
              ],
              answer: 1,
              explication: "« La principale difficulté n’est pourtant pas la langue elle-même, mais l’autonomie attendue. »"
            },
            {
              q: "Dans le paragraphe 4, « des attentes implicites » désigne :",
              options: [
                "des règles écrites dans le règlement de l’université",
                "des règles que personne ne formule, mais que l’on suppose connues",
                "des règles facultatives"
              ],
              answer: 1,
              explication: "« Implicite » s’oppose à « explicite » : ce qui n’est pas dit clairement mais que l’on attend quand même."
            },
            {
              q: "Dans le paragraphe 2, le connecteur « au contraire » exprime :",
              options: ["une cause", "une opposition", "une conséquence"],
              answer: 1,
              explication: "Il oppose le fonctionnement du TD à celui du CM. Tu retrouveras ce connecteur dans l’activité de grammaire."
            }
          ]
        },

        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Le premier cours d’un semestre",
          duree: "30 min",
          consigne: "Un enseignant présente son cours lors de la première séance. Lis d’abord les questions, puis écoute. Tu peux réécouter autant de fois que nécessaire, et ralentir la voix si besoin.",
          transcription: "Bonjour à toutes et à tous, et bienvenue dans ce cours d’introduction à la sociologie urbaine. Avant de commencer, quelques informations pratiques. Le cours magistral a lieu tous les mardis, de dix heures à midi, ici, dans l’amphithéâtre B. Les TD commenceront la semaine prochaine seulement, et non pas cette semaine, comme c’est indiqué sur votre emploi du temps. Pour l’évaluation : la note finale sera composée à cinquante pour cent du contrôle continu en TD, et à cinquante pour cent d’un examen écrit en fin de semestre. Attention, l’examen dure trois heures, et il s’agira d’une dissertation, pas d’un questionnaire. Je vous conseille donc vivement de lire les deux premiers ouvrages de la bibliographie avant les vacances de la Toussaint. Vous trouverez le plan du cours et la bibliographie complète sur Moodle dès ce soir. Enfin, si vous avez une question, écrivez-moi plutôt par courriel que de venir me voir à la fin du cours : je ne suis pas toujours disponible. Je réponds en général sous quarante-huit heures. Bien, commençons.",
          questions: [
            {
              q: "Quand les TD commencent-ils ?",
              options: ["Cette semaine", "La semaine prochaine", "Après les vacances de la Toussaint"],
              answer: 1,
              explication: "L’enseignant corrige l’emploi du temps : « la semaine prochaine seulement, et non pas cette semaine »."
            },
            {
              q: "Comment la note finale est-elle calculée ?",
              options: [
                "Uniquement avec l’examen final",
                "Moitié contrôle continu, moitié examen final",
                "Deux tiers contrôle continu, un tiers examen"
              ],
              answer: 1,
              explication: "Cinquante pour cent pour chacun."
            },
            {
              q: "Quelle forme prendra l’examen ?",
              options: ["Un questionnaire à choix multiples", "Une dissertation de trois heures", "Un oral"],
              answer: 1,
              explication: "« Il s’agira d’une dissertation, pas d’un questionnaire. »"
            },
            {
              q: "Que conseille l’enseignant ?",
              options: [
                "Lire deux ouvrages de la bibliographie avant la Toussaint",
                "Venir le voir à la fin de chaque cours",
                "Imprimer le plan du cours"
              ],
              answer: 0,
              explication: "« Je vous conseille donc vivement de lire les deux premiers ouvrages… »"
            },
            {
              q: "Quel est le meilleur moyen de le contacter ?",
              options: ["À la fin du cours", "Par courriel", "Sur Moodle"],
              answer: 1,
              explication: "Il préfère les courriels et répond sous quarante-huit heures. C’est justement le sujet de l’activité d’écriture."
            }
          ]
        },

        {
          type: "association",
          titre: "Vocabulaire",
          sousTitre: "Le lexique de l’université",
          duree: "20 min",
          consigne: "Associe chaque mot ou expression à sa définition.",
          items: [
            { terme: "un amphithéâtre", definition: "une grande salle en gradins où ont lieu les cours magistraux" },
            { terme: "les partiels", definition: "les examens écrits organisés à la fin de chaque semestre" },
            { terme: "le rattrapage", definition: "une seconde session d’examen pour les étudiants qui ont échoué" },
            { terme: "le contrôle continu", definition: "une évaluation répartie sur tout le semestre" },
            { terme: "la bibliographie", definition: "la liste des ouvrages à lire pour un cours" },
            { terme: "un maître de conférences", definition: "un enseignant-chercheur titulaire à l’université" },
            { terme: "valider une UE", definition: "obtenir au moins 10 sur 20 dans une unité d’enseignement" },
            { terme: "l’assiduité", definition: "le fait d’être présent régulièrement en cours" }
          ]
        },

        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Les connecteurs logiques",
          duree: "45 min",
          fiche: `
            <p>Les connecteurs organisent ta pensée. À l’université, ils sont indispensables : un correcteur les cherche pour suivre ton raisonnement.</p>
            <table class="fiche-table">
              <thead><tr><th scope="col">Relation</th><th scope="col">Connecteurs</th><th scope="col">Exemple</th></tr></thead>
              <tbody>
                <tr><th scope="row">Cause</th><td>car, parce que, puisque, étant donné que, en raison de + nom</td><td>Le cours est annulé en raison de la grève.</td></tr>
                <tr><th scope="row">Conséquence</th><td>donc, c’est pourquoi, par conséquent, si bien que</td><td>J’ai échoué ; par conséquent, je passe le rattrapage.</td></tr>
                <tr><th scope="row">Opposition</th><td>mais, alors que, tandis que, au contraire, en revanche</td><td>Le CM est passif ; le TD, en revanche, est interactif.</td></tr>
                <tr><th scope="row">Concession</th><td>pourtant, cependant, même si, bien que + subjonctif</td><td>Bien qu’il soit malade, il est venu.</td></tr>
              </tbody>
            </table>
            <p><strong>À retenir.</strong> <em>Puisque</em> présente une cause que l’interlocuteur connaît déjà. <em>Bien que</em> est toujours suivi du subjonctif, contrairement à <em>même si</em>. <em>En raison de</em> est suivi d’un nom, jamais d’un verbe conjugué.</p>
          `,
          consigne: "Choisis le connecteur qui convient.",
          phrases: [
            { avant: "La présence en TD est obligatoire,", options: ["alors que", "donc", "puisque"], answer: 0, apres: "l’assiduité en CM n’est pas contrôlée.", explication: "Deux situations opposées : opposition." },
            { avant: "Il a raté le partiel ;", options: ["par conséquent", "pourtant", "tandis que"], answer: 0, apres: ", il devra passer le rattrapage.", explication: "Le rattrapage est la conséquence de l’échec." },
            { avant: "", options: ["Bien que", "Puisque", "Parce que"], answer: 0, apres: "son dossier soit complet, sa demande de bourse a été refusée.", explication: "« soit » est au subjonctif : seul « bien que » est possible, et le sens est une concession." },
            { avant: "Le cours a été annulé", options: ["en raison de", "bien que", "si bien que"], answer: 0, apres: "la grève des transports.", explication: "Suivi d’un nom (la grève) : « en raison de »." },
            { avant: "", options: ["Puisque", "Pourtant", "Alors que"], answer: 0, apres: "tu as déjà lu ce livre, tu pourrais me le résumer ?", explication: "La cause est connue des deux personnes : « puisque »." },
            { avant: "La bibliographie est longue ;", options: ["cependant", "car", "c’est pourquoi"], answer: 0, apres: ", les enseignants ne vérifient pas si on l’a lue.", explication: "On attendrait un contrôle, mais il n’y en a pas : concession." },
            { avant: "Elle parle très bien français", options: ["car", "mais", "en revanche"], answer: 0, apres: "elle a vécu cinq ans à Lyon.", explication: "Vivre à Lyon explique son niveau : cause." },
            { avant: "Les CM sont peu interactifs. Les TD,", options: ["en revanche", "donc", "puisque"], answer: 0, apres: ", favorisent les échanges.", explication: "On oppose les TD aux CM." }
          ]
        },

        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Un courriel formel à une enseignante",
          duree: "1 h",
          consigne: "Tu as manqué le premier TD de sociologie urbaine, car ton inscription administrative n’était pas encore finalisée. Écris un courriel à ta chargée de TD, Mme Lefèvre : excuse-toi, explique la raison de ton absence et demande comment rattraper la séance.",
          min: 120,
          max: 160,
          checklist: [
            "Un objet clair et précis",
            "Une formule d’appel adaptée (« Madame, »)",
            "Je me présente : formation et groupe de TD",
            "J’explique la raison avec un connecteur de cause",
            "Ma demande est polie, au conditionnel (« pourriez-vous… »)",
            "Une formule de politesse finale",
            "Le vouvoiement du début à la fin"
          ],
          modele: `Objet : Absence au TD du 8 octobre (groupe 3)

Madame,

Je suis étudiante en première année de licence de sociologie, inscrite dans votre groupe de TD du mercredi (groupe 3). Je vous écris pour vous présenter mes excuses : je n’ai pas pu assister à la séance du 8 octobre, car mon inscription administrative n’était pas encore finalisée et je devais me rendre au service de la scolarité ce jour-là.

Afin de ne pas prendre de retard, pourriez-vous m’indiquer les exercices ou les lectures à préparer pour la prochaine séance ? Si cela vous convient, je pourrais également passer à votre bureau pendant vos heures de permanence.

Je vous remercie par avance de votre compréhension.

Veuillez agréer, Madame, l’expression de mes salutations respectueuses.

Prénom Nom`
        }
      ]
    },

    { id: 2, niveau: "b1b2", titre: "Suivre un cours magistral", objectif: "Repérer le plan d’un cours oral et prendre des notes efficaces." },
    { id: 3, niveau: "b1b2", titre: "Lire un article de presse", objectif: "Distinguer faits et opinions, identifier la thèse d’un auteur." },
    { id: 4, niveau: "b1b2", titre: "Donner et nuancer son avis", objectif: "Exprimer une opinion avec précision, en TD comme à l’écrit." },
    { id: 5, niveau: "b1b2", titre: "Le subjonctif en contexte", objectif: "Employer le subjonctif après les expressions de volonté, de doute et de sentiment." },
    { id: 6, niveau: "b1b2", titre: "Résumer un texte", objectif: "Reformuler l’essentiel d’un texte en réduisant sa longueur." },

    { id: 7, niveau: "b2", titre: "Synthétiser plusieurs documents", objectif: "Croiser des sources et produire une synthèse sans donner son avis." },
    { id: 8, niveau: "b2", titre: "Préparer un exposé", objectif: "Construire un plan, annoncer et articuler une présentation orale." },
    { id: 9, niveau: "b2", titre: "Argumenter par écrit", objectif: "Rédiger un essai argumenté avec exemples et concessions." },
    { id: 10, niveau: "b2", titre: "Les registres de langue", objectif: "Passer du français parlé au français écrit académique." },
    { id: 11, niveau: "b2", titre: "Lire un texte scientifique", objectif: "Comprendre la structure d’un article de recherche." },
    { id: 12, niveau: "b2", titre: "Débattre en TD", objectif: "Prendre la parole, réfuter, reformuler la position d’un autre." },

    { id: 13, niveau: "c1", titre: "Comprendre une conférence", objectif: "Suivre un discours long et dense, en saisir l’implicite." },
    { id: 14, niveau: "c1", titre: "La nominalisation", objectif: "Condenser ses phrases à la manière du style académique." },
    { id: 15, niveau: "c1", titre: "La dissertation", objectif: "Problématiser un sujet et construire un plan dialectique." },
    { id: 16, niveau: "c1", titre: "Le compte rendu critique", objectif: "Présenter puis évaluer un ouvrage ou un article." },
    { id: 17, niveau: "c1", titre: "Citer et paraphraser", objectif: "Intégrer des sources sans plagiat, selon les normes universitaires." },
    { id: 18, niveau: "c1", titre: "Soutenir à l’oral", objectif: "Présenter un travail et répondre aux questions d’un jury." }
  ]
};
