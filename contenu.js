/*
  CONTENU DU PARCOURS
  -------------------
  Pour ajouter une unité : remplacer sa ligne courte (« À venir ») par un bloc complet
  avec "activites", sur le modèle des unités complètes.

  Types d'activités : lecture, ecoute, association, trous, ecriture, oral.
  Option "regles": ["id"] sur une activité : lien vers une règle du mémento.
  Option "chine": true sur une unité : badge et filtre « Liens avec la Chine ».

  Important : pour ne pas perdre la progression enregistrée, ne change pas l'id
  d'une unité existante et ajoute les nouvelles activités à la fin de sa liste.
*/

// Thèmes repris de TV5 Monde, plus les études universitaires.
window.THEMES = [
  "Information, géopolitique et histoire",
  "Culture, littérature et francophonie",
  "Droits humains",
  "Gastronomie, mode",
  "Sciences, innovation et environnement",
  "Vie quotidienne",
  "Sport et tourisme",
  "Études et université"
];

window.PARCOURS = {
  niveaux: [
    { id: "b1", titre: "Consolider le B1", description: "Raconter, décrire, comparer, donner son avis : gagner en aisance dans les situations de tous les jours." },
    { id: "b2", titre: "Installer le B2", description: "Argumenter, comprendre l’histoire et l’actualité, adapter son registre à la situation." },
    { id: "c1", titre: "Viser le C1", description: "Saisir l’implicite, écrire avec précision, nuancer sa pensée." }
  ],

  unites: [
    {
      id: 1,
      niveau: "b1",
      theme: "Vie quotidienne",
      titre: "Raconter un souvenir",
      objectif: "Raconter un événement passé en alternant récit et description.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Le jour où j’ai raté mon train",
          duree: "40 min",
          texte: [
            "C’était un vendredi de décembre, il y a maintenant cinq ans. Je vivais à Lyon depuis seulement trois mois et je ne connaissais pas encore très bien la ville. Ce soir-là, je devais prendre le train de 18 h 42 pour rejoindre des amis à Marseille. Il faisait froid, il pleuvait, et la gare de la Part-Dieu était pleine de voyageurs pressés.",
            "J’étais pourtant partie en avance. Mais dans le métro, je me suis rendu compte que j’avais oublié mon billet sur la table de la cuisine. J’ai fait demi-tour en courant, je suis remontée chez moi, puis je suis repartie aussi vite que possible. Quand je suis enfin arrivée sur le quai, le train venait de partir. J’avais envie de pleurer.",
            "C’est alors qu’une dame âgée, qui attendait sur un banc, m’a demandé si tout allait bien. Je lui ai tout raconté, un peu gênée. Elle m’a souri et m’a expliqué qu’il y avait un autre train une heure plus tard et qu’avec mon billet, je pourrais sans doute le prendre en payant un petit supplément. Pendant que nous attendions, elle m’a parlé de sa jeunesse : elle aussi était arrivée à Lyon seule, à vingt ans, sans connaître personne.",
            "Finalement, je suis arrivée à Marseille avec une heure de retard, mais je n’ai jamais oublié cette rencontre. Aujourd’hui encore, quand je rate quelque chose, je repense à cette dame et je me dis qu’un contretemps peut parfois devenir un beau souvenir."
          ],
          questions: [
            { q: "Depuis combien de temps l’auteure vivait-elle à Lyon ?", options: ["Cinq ans", "Trois mois", "Un an"], answer: 1, explication: "« Je vivais à Lyon depuis seulement trois mois. » Les cinq ans, c’est le temps écoulé depuis l’histoire." },
            { q: "Pourquoi a-t-elle raté son train ?", options: ["Elle s’est trompée de gare.", "Elle a dû retourner chez elle chercher son billet.", "Le métro était en panne."], answer: 1, explication: "Elle avait oublié son billet sur la table de la cuisine." },
            { q: "Qui l’a aidée sur le quai ?", options: ["Un employé de la gare", "Une dame âgée", "Une amie"], answer: 1, explication: "Une dame âgée qui attendait sur un banc." },
            { q: "Quel point commun la dame a-t-elle avec l’auteure ?", options: ["Elle allait aussi à Marseille.", "Elle était aussi arrivée seule à Lyon, jeune.", "Elle avait aussi raté son train."], answer: 1, explication: "« Elle aussi était arrivée à Lyon seule, à vingt ans. »" },
            { q: "Dans « il pleuvait, et la gare était pleine », l’imparfait sert à :", options: ["décrire le décor de l’histoire", "raconter une action soudaine", "parler du futur"], answer: 0, explication: "L’imparfait pose le décor ; le passé composé raconte les événements. C’est le sujet de l’activité de grammaire." },
            { q: "Que signifie « un contretemps » ?", options: ["Un événement imprévu qui dérange", "Une dispute", "Un moment de bonheur"], answer: 0, explication: "Un contretemps est un imprévu qui empêche de faire ce qui était prévu." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Un souvenir d’enfance",
          duree: "30 min",
          consigne: "Une femme raconte un souvenir de ses vacances d’enfance. Lis d’abord les questions, puis écoute.",
          transcription: "Quand j’étais petite, je passais tous mes étés chez mes grands-parents, en Bretagne, dans un petit village au bord de la mer. Le matin, mon grand-père m’emmenait au marché, et l’après-midi, nous allions à la plage, même quand il faisait gris, ce qui arrivait souvent ! Ma grand-mère, elle, faisait des crêpes presque tous les soirs. Un été, je devais avoir huit ans, il s’est passé quelque chose que je n’oublierai jamais. Un soir, pendant une tempête, l’électricité a été coupée dans tout le village. Mes parents étaient restés à Paris, et j’avais un peu peur. Alors mon grand-père a allumé des bougies, il a sorti sa vieille guitare, et il a chanté des chansons bretonnes jusqu’à minuit. Le lendemain matin, le soleil était revenu, comme si de rien n’était. Mes grands-parents sont partis depuis longtemps, mais chaque fois qu’il y a de l’orage, je repense à cette nuit-là.",
          questions: [
            { q: "Où passait-elle ses étés ?", options: ["Chez ses grands-parents, en Bretagne", "Dans une colonie de vacances", "À Paris, avec ses parents"], answer: 0, explication: "Dans un petit village au bord de la mer, en Bretagne." },
            { q: "Que faisait sa grand-mère presque tous les soirs ?", options: ["Elle chantait.", "Elle faisait des crêpes.", "Elle allait au marché."], answer: 1, explication: "C’est le grand-père qui allait au marché, le matin." },
            { q: "Quel âge avait-elle, environ, au moment de la tempête ?", options: ["Six ans", "Huit ans", "Dix ans"], answer: 1, explication: "« Je devais avoir huit ans » : devoir à l’imparfait exprime ici une supposition." },
            { q: "Comment son grand-père l’a-t-il rassurée ?", options: ["En lui racontant une histoire", "En jouant de la guitare et en chantant", "En appelant ses parents"], answer: 1, explication: "Il a allumé des bougies et chanté des chansons bretonnes." },
            { q: "« Comme si de rien n’était » signifie :", options: ["comme si rien ne s’était passé", "comme s’il n’y avait personne", "comme si c’était dangereux"], answer: 0, explication: "Le lendemain, tout semblait normal, comme si la tempête n’avait pas eu lieu." }
          ]
        },
        {
          type: "association",
          titre: "Vocabulaire",
          sousTitre: "Le temps et les émotions",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "autrefois", definition: "dans le passé, il y a longtemps" },
            { terme: "tout à coup", definition: "soudainement, de façon inattendue" },
            { terme: "la veille", definition: "le jour d’avant" },
            { terme: "le lendemain", definition: "le jour d’après" },
            { terme: "être aux anges", definition: "être extrêmement heureux" },
            { terme: "avoir le cœur serré", definition: "ressentir de la tristesse ou de l’angoisse" },
            { terme: "avoir la chair de poule", definition: "avoir des frissons, de froid ou de peur" },
            { terme: "se sentir dépaysé", definition: "se sentir perdu dans un environnement inhabituel" }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Passé composé ou imparfait ?",
          duree: "45 min",
          regles: ["passe-compose-imparfait", "plus-que-parfait"],
          fiche: `
            <p>Dans un récit, l’<strong>imparfait</strong> pose le décor, décrit et exprime les habitudes. Le <strong>passé composé</strong> raconte les événements qui font avancer l’histoire. Le <strong>plus-que-parfait</strong> exprime une action antérieure à une autre action passée.</p>
            <p class="ex">Il <strong>pleuvait</strong> (décor) quand je <strong>suis sortie</strong> (événement). J’<strong>avais oublié</strong> mon parapluie (avant).</p>`,
          consigne: "Choisis la forme qui convient.",
          phrases: [
            { avant: "Quand j’étais enfant, je", options: ["allais", "suis allée"], answer: 0, apres: "à la piscine tous les mercredis.", explication: "« Tous les mercredis » : une habitude, donc l’imparfait." },
            { avant: "Hier soir, je", options: ["suis rentrée", "rentrais"], answer: 0, apres: "à 23 h, puis je me suis couchée tout de suite.", explication: "Une succession d’actions ponctuelles : passé composé." },
            { avant: "Il", options: ["pleuvait", "a plu"], answer: 0, apres: "quand nous sommes sortis du cinéma.", explication: "La pluie est le décor, l’action en cours au moment de la sortie." },
            { avant: "Je lisais tranquillement quand le téléphone", options: ["a sonné", "sonnait"], answer: 0, apres: ".", explication: "Une action soudaine qui interrompt une action en cours." },
            { avant: "Nous", options: ["avons habité", "habitions"], answer: 0, apres: "deux ans à Nantes, puis nous avons déménagé.", explication: "Une durée délimitée et terminée (deux ans) : passé composé." },
            { avant: "La maison", options: ["était", "a été"], answer: 0, apres: "grande et lumineuse, avec un jardin plein de fleurs.", explication: "Une description : imparfait." },
            { avant: "Quand je suis arrivée, le cours", options: ["avait déjà commencé", "a déjà commencé"], answer: 0, apres: ".", explication: "Le cours a commencé avant mon arrivée : plus-que-parfait." },
            { avant: "Soudain, quelqu’un", options: ["a frappé", "frappait"], answer: 0, apres: "à la porte.", explication: "« Soudain » annonce un événement : passé composé." }
          ]
        },
        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Raconter un souvenir marquant",
          duree: "1 h",
          regles: ["passe-compose-imparfait", "accord-participe-passe"],
          consigne: "Raconte un souvenir marquant : un voyage, une rencontre, une première fois. Pose le décor, raconte les événements, puis dis ce que ce souvenir représente pour toi aujourd’hui.",
          min: 140,
          max: 190,
          checklist: [
            "Le décor et les descriptions sont à l’imparfait",
            "Les événements sont au passé composé",
            "Au moins un plus-que-parfait (une action antérieure)",
            "Des repères de temps : un jour, soudain, le lendemain…",
            "Au moins une expression d’émotion",
            "Une conclusion sur ce que ce souvenir représente aujourd’hui",
            "J’ai vérifié les accords des participes passés"
          ],
          modele: `C’était en juillet 2019, pendant mon premier voyage seule à l’étranger. J’avais vingt-deux ans et je venais d’arriver à Lisbonne. Il faisait une chaleur incroyable, les rues étaient pleines de touristes et je me sentais un peu dépaysée.

Le deuxième jour, j’ai décidé de visiter l’Alfama, le vieux quartier de la ville. Je n’avais pas pris de carte, car je pensais retrouver mon chemin facilement. Évidemment, je me suis perdue. Tout à coup, un vieil homme qui jouait de la guitare devant sa porte m’a appelée. Il ne parlait pas français, je ne parlais pas portugais, mais il m’a offert un verre d’eau et m’a accompagnée jusqu’à la place principale, en chantant.

Le lendemain, je suis retournée dans sa rue pour le remercier, mais il n’était plus là. Aujourd’hui encore, ce souvenir me rappelle qu’on peut se comprendre sans parler la même langue.`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Raconter un souvenir à voix haute",
          duree: "30 min",
          consigne: "Raconte à voix haute un souvenir d’enfance qui t’a marquée : où et quand c’était, ce qui s’est passé, ce que tu as ressenti. Parle entre une et deux minutes, sans lire un texte écrit.",
          preparation: ["Quand j’étais petite, …", "Je me souviens très bien de…", "Un jour, … / Ce jour-là, …", "Tout à coup, …", "J’avais un peu peur. / J’étais aux anges.", "Aujourd’hui encore, quand je repense à…"],
          dureeCible: "1 à 2 minutes",
          modele: "Quand j’étais petite, je passais souvent le week-end chez ma tante, à la campagne. Je me souviens très bien d’un dimanche d’hiver : il avait neigé toute la nuit, et le matin, le jardin était complètement blanc. C’était la première fois que je voyais autant de neige ! Avec mes cousins, nous avons construit un bonhomme de neige énorme, puis nous avons fait une bataille de boules de neige. Tout à coup, ma tante nous a appelés : elle avait préparé du chocolat chaud. J’étais aux anges. Aujourd’hui encore, chaque fois qu’il neige, je repense à ce dimanche-là.",
          checklist: ["J’ai situé le souvenir : où et quand", "L’imparfait pour le décor", "Le passé composé pour les événements", "J’ai exprimé au moins une émotion", "J’ai parlé au moins une minute sans lire", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 2,
      niveau: "b1",
      theme: "Études et université",
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
          regles: ["connecteurs-logiques"],
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
          regles: ["registres-de-langue", "conditionnel"],
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
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Se présenter au premier TD",
          duree: "30 min",
          consigne: "C’est le premier TD du semestre : chaque étudiant se présente au groupe. Dis ton nom, d’où tu viens, ce que tu étudies, pourquoi tu as choisi ces études, un centre d’intérêt et ce que tu attends du cours.",
          preparation: ["Je m’appelle…, mais vous pouvez m’appeler…", "Je viens de…, dans le … de la Chine.", "Je suis en première année de…", "J’ai choisi cette discipline parce que…", "En dehors des cours, j’aime…", "Ce que j’attends de ce cours, c’est…"],
          dureeCible: "environ 1 minute",
          modele: "Bonjour à tous. Je m’appelle Wang Fang, mais vous pouvez m’appeler Fang. Je viens de Chengdu, dans le sud-ouest de la Chine, et je suis arrivée à Lyon il y a deux mois. Je suis en première année de licence de sociologie. J’ai choisi cette discipline parce que je m’intéresse beaucoup à la vie dans les grandes villes et à la façon dont elles changent. En dehors des cours, j’aime la photographie et la cuisine, surtout la cuisine épicée de ma région ! Ce que j’attends de ce TD, c’est de progresser à l’oral et de mieux comprendre la méthode française. Merci !",
          checklist: ["Une salutation adaptée au groupe", "Mon nom et mon origine", "Ma formation", "Ma motivation, avec « parce que »", "Un centre d’intérêt", "Une attente pour le cours", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 3,
      niveau: "b1",
      theme: "Gastronomie, mode",
      chine: true,
      titre: "Deux repas de fête, en France et en Chine",
      objectif: "Décrire un repas, ses plats et ses traditions ; utiliser les articles partitifs.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Noël et Nouvel An lunaire : deux fêtes à table",
          duree: "40 min",
          texte: [
            "En France comme en Chine, les grandes fêtes se célèbrent d’abord à table. En France, le repas le plus important de l’année est souvent celui de Noël, le soir du 24 ou le midi du 25 décembre. En Chine, c’est le dîner de la veille du Nouvel An lunaire, entre la fin janvier et la mi-février, qui réunit toute la famille.",
            "Le repas de Noël français est long et suit un ordre précis : l’apéritif, l’entrée (souvent des huîtres, du saumon fumé ou du foie gras), le plat principal, comme une dinde aux marrons, puis le fromage et enfin le dessert, traditionnellement une bûche de Noël. On peut rester à table quatre ou cinq heures ! D’ailleurs, en 2010, l’UNESCO a inscrit le « repas gastronomique des Français » au patrimoine culturel immatériel de l’humanité.",
            "En Chine, le dîner du Nouvel An est aussi un moment de partage, mais les plats sont posés au centre de la table et chacun se sert. Beaucoup de plats ont une valeur symbolique. Dans le nord, on prépare des raviolis, les jiaozi, dont la forme rappelle les anciens lingots d’or. On sert aussi un poisson entier, car en chinois, le mot « poisson » se prononce comme le mot « surplus » : il annonce une année d’abondance.",
            "Les deux traditions ont donc un point commun essentiel : plus que la nourriture elle-même, ce qui compte, c’est d’être ensemble. Pour une Chinoise qui fête Noël en France, ou pour un Français invité au Nouvel An chinois, la meilleure attitude reste la curiosité… et l’appétit."
          ],
          questions: [
            { q: "Selon le texte, quel est le repas le plus important en Chine ?", options: ["Le déjeuner du jour de l’An", "Le dîner de la veille du Nouvel An lunaire", "Le repas de la fête de la Lune"], answer: 1, explication: "« C’est le dîner de la veille du Nouvel An lunaire […] qui réunit toute la famille. »" },
            { q: "Dans quel ordre se déroule le repas de Noël français ?", options: ["Entrée, apéritif, plat, dessert, fromage", "Apéritif, entrée, plat, fromage, dessert", "Plat, fromage, entrée, dessert"], answer: 1, explication: "En France, le fromage se mange après le plat principal et avant le dessert." },
            { q: "Pourquoi sert-on un poisson entier au Nouvel An chinois ?", options: ["Parce que c’est un plat bon marché", "Parce que son nom se prononce comme le mot « surplus »", "Parce que c’est la tradition du sud seulement"], answer: 1, explication: "鱼 (yú, poisson) et 余 (yú, surplus) se prononcent de la même façon : c’est un vœu d’abondance." },
            { q: "Qu’est-ce que l’UNESCO a reconnu en 2010 ?", options: ["La bûche de Noël", "Le repas gastronomique des Français", "La cuisine chinoise"], answer: 1, explication: "Il a été inscrit au patrimoine culturel immatériel de l’humanité." },
            { q: "Quelle différence de service le texte souligne-t-il ?", options: ["En Chine, les plats sont au centre et chacun se sert.", "En France, on mange plus vite.", "En Chine, il n’y a pas de dessert."], answer: 0, explication: "En France, les plats arrivent l’un après l’autre ; en Chine, on partage les plats posés au centre." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Un message pour le réveillon",
          duree: "25 min",
          consigne: "Mei reçoit un message vocal de son amie Claire. Lis les questions, puis écoute.",
          transcription: "Salut Mei, c’est Claire ! Je t’appelle pour samedi soir. Comme prévu, on fête le réveillon chez mes parents, à Lyon. On sera une dizaine. Ma mère prépare la dinde, mon frère s’occupe du fromage, et moi, je fais la bûche. Est-ce que tu pourrais apporter quelque chose ? Mes parents seraient ravis de goûter tes raviolis ! Si c’est trop de travail, ne t’inquiète pas, une bouteille de jus de fruits, c’est parfait aussi. Pour venir, prends le train de 17 h 12, je viendrai te chercher à la gare. Et n’oublie pas : chez nous, on se fait la bise, même la première fois ! Rappelle-moi quand tu as ce message. Bisous !",
          questions: [
            { q: "Où aura lieu le réveillon ?", options: ["Chez Claire, à Paris", "Chez les parents de Claire, à Lyon", "Au restaurant"], answer: 1, explication: "« On fête le réveillon chez mes parents, à Lyon. »" },
            { q: "Que prépare Claire ?", options: ["La dinde", "La bûche", "Le fromage"], answer: 1, explication: "Sa mère fait la dinde, son frère le fromage." },
            { q: "Qu’est-ce que les parents de Claire aimeraient ?", options: ["Goûter les raviolis de Mei", "Que Mei apporte du vin", "Que Mei vienne en voiture"], answer: 0, explication: "« Mes parents seraient ravis de goûter tes raviolis ! » Le conditionnel rend la demande polie." },
            { q: "Comment Mei viendra-t-elle ?", options: ["En train, et Claire viendra la chercher à la gare", "En bus", "À pied"], answer: 0, explication: "« Prends le train de 17 h 12, je viendrai te chercher à la gare. »" },
            { q: "Quel conseil culturel Claire donne-t-elle ?", options: ["Apporter des fleurs", "Se faire la bise, même la première fois", "Enlever ses chaussures"], answer: 1, explication: "La bise est très courante entre amis et en famille en France." }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Du, de la, des, de : les articles partitifs",
          duree: "40 min",
          regles: ["articles-partitifs"],
          fiche: `
            <p>Pour parler d’une <strong>quantité non précisée</strong>, on utilise le partitif : <em>du</em> pain, <em>de la</em> farine, <em>de l’</em>eau, <em>des</em> raviolis.</p>
            <p>Après une <strong>négation</strong> ou une <strong>expression de quantité</strong>, il devient <em>de</em> (ou <em>d’</em>) : je ne mange pas <em>de</em> viande, un kilo <em>de</em> marrons, beaucoup <em>de</em> farine.</p>
            <p>Après les verbes de goût (<em>aimer, adorer, détester, préférer</em>), on utilise l’article défini : j’adore <em>le</em> fromage.</p>`,
          consigne: "Choisis l’article qui convient.",
          phrases: [
            { avant: "Je voudrais", options: ["du", "de", "le"], answer: 0, apres: "pain, s’il vous plaît.", explication: "Une quantité non précisée de pain (masculin) : du." },
            { avant: "Elle ne mange pas", options: ["de", "du", "des"], answer: 0, apres: "viande.", explication: "Après une négation, le partitif devient « de »." },
            { avant: "Au Nouvel An, on prépare", options: ["des", "de", "les"], answer: 0, apres: "raviolis.", explication: "Une quantité non précisée au pluriel : des." },
            { avant: "J’adore", options: ["le", "du", "de"], answer: 0, apres: "fromage.", explication: "Après « adorer », on parle du fromage en général : article défini." },
            { avant: "Il faut beaucoup", options: ["de", "des", "du"], answer: 0, apres: "farine pour la pâte.", explication: "Après « beaucoup », on utilise « de »." },
            { avant: "Tu veux", options: ["de l’", "du", "de"], answer: 0, apres: "eau ?", explication: "Devant un nom qui commence par une voyelle : de l’." },
            { avant: "Nous avons acheté un kilo", options: ["de", "des", "du"], answer: 0, apres: "marrons.", explication: "Après une quantité précise (un kilo, une bouteille…) : de." },
            { avant: "Après le repas, on boit", options: ["du", "de", "le"], answer: 0, apres: "thé.", explication: "Une quantité non précisée de thé (masculin) : du." }
          ]
        },
        {
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
          modele: `Salut Claire,

Merci pour ta question ! Chez nous, le Nouvel An est la fête la plus importante de l’année.

D’abord, quelques jours avant, on fait un grand ménage pour chasser la malchance, puis on colle des papiers rouges sur la porte. Le soir de la veille, toute la famille se réunit chez mes grands-parents. On prépare ensemble des jiaozi, des raviolis farcis de porc et de chou. Ma grand-mère cache parfois une pièce dans l’un d’eux : celui qui la trouve aura de la chance toute l’année !

Ensuite, on dîne autour d’une grande table. Il y a toujours du poisson, parce que son nom ressemble au mot « abondance », et beaucoup de légumes. Enfin, vers minuit, on regarde le grand spectacle de la télévision et on reçoit des hongbao, des enveloppes rouges avec de l’argent.

Et toi, tu viens fêter ça avec nous l’an prochain ?

Bises,
Mei`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un plat de fête",
          duree: "30 min",
          consigne: "Présente à des amis français un plat de fête que tu aimes, en Chine ou ailleurs : son nom, ses ingrédients, quand on le mange, ce qu’il symbolise et pourquoi tu l’aimes.",
          preparation: ["Je voudrais vous présenter…", "C’est un plat qu’on mange surtout pour…", "Il est fait avec…, du…, de la…", "On dit que… / Il symbolise…", "Chez moi, …", "Pour moi, ce plat représente…"],
          dureeCible: "1 à 2 minutes",
          modele: "Je voudrais vous présenter les tangyuan. Ce sont de petites boules de riz gluant, souvent fourrées au sésame noir, qu’on sert dans un bouillon sucré. On les mange surtout pour la fête des Lanternes, le quinzième jour du Nouvel An. Leur forme ronde symbolise la réunion de la famille. Chez moi, ma grand-mère les préparait avec nous : on roulait la pâte dans nos mains, et c’était toujours un moment très joyeux. Pour moi, ce plat représente la douceur et les retrouvailles. Si vous en trouvez dans une épicerie asiatique, goûtez-les bien chauds !",
          checklist: ["J’ai nommé et décrit le plat", "J’ai cité les ingrédients avec des partitifs", "J’ai dit quand on le mange", "J’ai expliqué un symbole ou une tradition", "J’ai donné mon avis personnel", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 4,
      niveau: "b1",
      theme: "Vie quotidienne",
      chine: true,
      titre: "Vivre entre deux cultures",
      objectif: "Comparer des habitudes, parler de ses surprises et donner des conseils.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Six mois en France : ce qui m’a surprise",
          duree: "40 min",
          texte: [
            "Je m’appelle Lin, j’ai vingt-quatre ans et je viens de Hangzhou. Il y a six mois, je suis arrivée à Bordeaux pour faire un master de commerce. Avant de partir, j’avais lu beaucoup de choses sur la France, mais la vie quotidienne m’a quand même réservé quelques surprises.",
            "D’abord, les horaires. En Chine, je déjeunais vers midi et je dînais vers six heures. Ici, beaucoup de gens dînent à huit heures, et parfois plus tard ! Les premiers temps, j’avais faim tout l’après-midi. Ensuite, le dimanche : presque tous les magasins sont fermés. À Hangzhou, je faisais mes courses n’importe quand, même tard le soir, et je commandais tout sur mon téléphone. Ici, j’ai appris à m’organiser.",
            "La bise m’a aussi beaucoup étonnée. Quand ma colocataire m’a présenté ses amis, chacun m’a fait deux bises sur les joues. Je ne savais pas quoi faire ! Aujourd’hui, je m’y suis habituée, même si je préfère encore serrer la main au travail.",
            "Ce qui me manque le plus ? La cuisine de ma mère, bien sûr, et la rapidité de tout : en France, il faut parfois attendre plusieurs semaines pour un rendez-vous chez le médecin. Mais j’aime la lenteur des repas, les longues discussions en terrasse et les marchés du samedi. Finalement, je crois que je deviens un peu bordelaise !"
          ],
          questions: [
            { q: "Pourquoi Lin est-elle venue en France ?", options: ["Pour travailler", "Pour faire un master de commerce", "Pour rejoindre sa famille"], answer: 1, explication: "« Je suis arrivée à Bordeaux pour faire un master de commerce. »" },
            { q: "Qu’est-ce qui l’a surprise au sujet des repas ?", options: ["Les Français mangent très vite.", "Les Français dînent tard.", "Les Français ne déjeunent pas."], answer: 1, explication: "« Beaucoup de gens dînent à huit heures, et parfois plus tard ! »" },
            { q: "Pourquoi a-t-elle dû apprendre à s’organiser ?", options: ["Parce que les magasins sont fermés le dimanche", "Parce qu’elle n’a pas de téléphone", "Parce qu’elle travaille le week-end"], answer: 0, explication: "À Hangzhou, elle faisait ses courses à toute heure." },
            { q: "Que pense-t-elle de la bise aujourd’hui ?", options: ["Elle la refuse toujours.", "Elle s’y est habituée, mais préfère serrer la main au travail.", "Elle la fait à tout le monde, même au travail."], answer: 1, explication: "« Je m’y suis habituée » : y remplace « à la bise »." },
            { q: "« Je deviens un peu bordelaise » signifie :", options: ["Je m’intègre à la vie de Bordeaux.", "Je veux quitter Bordeaux.", "Je travaille dans le vin."], answer: 0, explication: "Elle adopte peu à peu les habitudes de la ville." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Les conseils de la colocataire",
          duree: "25 min",
          consigne: "Juliette, la colocataire de Lin, lui explique quelques règles de l’appartement avant de partir en week-end. Lis les questions, puis écoute.",
          transcription: "Bon, Lin, avant que je parte, quelques petites choses sur l’appartement. Les poubelles : le bac jaune, c’est pour le plastique, le carton et les canettes ; le bac vert, c’est pour le verre ; et tout le reste va dans le bac gris. On les sort le mardi soir. Pour le chauffage, ne le mets pas trop fort, la facture est partagée entre nous trois. Si tu as un problème avec la machine à laver, appelle le propriétaire : son numéro est sur le frigo. Ah, et samedi, il y a un vide-grenier dans la rue. Si tu cherches une lampe pour ta chambre, c’est l’occasion idéale, ce n’est vraiment pas cher. Bon week-end !",
          questions: [
            { q: "Où met-on les bouteilles en verre ?", options: ["Dans le bac jaune", "Dans le bac vert", "Dans le bac gris"], answer: 1, explication: "Les couleurs des bacs peuvent varier selon les villes : vérifie toujours les consignes locales." },
            { q: "Quand sort-on les poubelles ?", options: ["Le lundi soir", "Le mardi soir", "Le samedi matin"], answer: 1, explication: "« On les sort le mardi soir. »" },
            { q: "Pourquoi ne pas mettre le chauffage trop fort ?", options: ["C’est dangereux.", "La facture est partagée.", "Le propriétaire l’interdit."], answer: 1, explication: "« La facture est partagée entre nous trois. »" },
            { q: "Qu’est-ce qu’un vide-grenier ?", options: ["Un marché où des particuliers vendent des objets d’occasion", "Un magasin de meubles", "Une fête de quartier sans vente"], answer: 0, explication: "On y trouve des objets anciens ou usagés, pour pas cher." }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Les pronoms en et y",
          duree: "35 min",
          regles: ["pronoms-en-y"],
          fiche: `
            <p><strong>Y</strong> remplace un lieu ou un complément introduit par <em>à</em> : Je vais au marché → J’<em>y</em> vais. Je pense à mon examen → J’<em>y</em> pense.</p>
            <p><strong>En</strong> remplace un complément introduit par <em>de</em>, ou une quantité : Elle parle de sa ville → Elle <em>en</em> parle. J’ai deux colocataires → J’<em>en</em> ai deux.</p>`,
          consigne: "Choisis le pronom qui convient.",
          phrases: [
            { avant: "Vous allez au marché samedi ? Oui, nous", options: ["y", "en", "le"], answer: 0, apres: "allons.", explication: "« Au marché » est un lieu : y." },
            { avant: "Vous avez acheté des légumes ? Oui, nous", options: ["en", "y", "les"], answer: 0, apres: "avons acheté.", explication: "« Des légumes » : une quantité non précisée, donc en." },
            { avant: "Tu penses à ton examen ? Oui, je", options: ["y", "en", "lui"], answer: 0, apres: "pense tout le temps.", explication: "Penser à quelque chose : y." },
            { avant: "Elle parle souvent de sa ville natale ? Oui, elle", options: ["en", "y", "la"], answer: 0, apres: "parle souvent.", explication: "Parler de quelque chose : en." },
            { avant: "Vous vous êtes habitués à la bise ? Oui, nous nous", options: ["y", "en", "la"], answer: 0, apres: "sommes habitués.", explication: "S’habituer à quelque chose : y." },
            { avant: "Combien de colocataires a-t-elle ? Elle", options: ["en", "y", "les"], answer: 0, apres: "a deux.", explication: "Avec un nombre, on garde le nombre et on utilise en." }
          ]
        },
        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Des conseils sur un forum",
          duree: "50 min",
          regles: ["pronoms-en-y", "connecteurs-logiques"],
          consigne: "Sur un forum d’étudiants, un jeune Chinois écrit : « J’arrive en France le mois prochain. Vous avez des conseils pour la vie de tous les jours ? » Réponds-lui en donnant au moins quatre conseils concrets, avec tes propres expériences.",
          min: 140,
          max: 190,
          checklist: [
            "Je salue et je me présente rapidement",
            "Au moins quatre conseils concrets",
            "Des formes variées : impératif, « je te conseille de », « il vaut mieux »",
            "Au moins une comparaison entre la Chine et la France",
            "Au moins un pronom en ou y bien employé",
            "Une formule finale encourageante"
          ],
          modele: `Salut !

Je suis arrivée à Bordeaux il y a six mois, alors je comprends tes questions.

D’abord, je te conseille de faire tes courses le samedi : le dimanche, la plupart des magasins sont fermés, ce qui surprend quand on vient de Chine. Ensuite, n’attends pas pour prendre rendez-vous chez le médecin ou à la banque, car il faut souvent plusieurs semaines. Pour le logement, il vaut mieux chercher une colocation : c’est moins cher et on pratique le français tous les jours.

Pour les repas, prépare-toi à dîner tard ! Au début, j’avais faim à six heures, alors je prenais un goûter vers seize heures, comme les Français. Enfin, ne t’inquiète pas pour la bise : tu t’y habitueras vite. Au travail, on se serre plutôt la main.

Surtout, profite des marchés et des terrasses : c’est là qu’on rencontre les gens.

Bon courage et bienvenue en France !
Lin`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Raconter ses surprises",
          duree: "30 min",
          consigne: "Au téléphone, un ami français te demande ce qui t’a surprise quand tu es arrivée en France (ou dans un autre pays). Compare avec tes habitudes en Chine et dis comment tu as changé.",
          preparation: ["Ce qui m’a le plus surprise, c’est…", "En Chine, on a l’habitude de…, alors qu’ici…", "Au début, …, mais maintenant…", "Je m’y suis habituée.", "Ce qui me manque, c’est…", "Ce que j’adore ici, c’est…"],
          dureeCible: "1 minute 30",
          modele: "Ce qui m’a le plus surprise en arrivant, c’est le rythme de la journée. En Chine, on a l’habitude de dîner vers six heures, alors qu’ici, beaucoup de gens dînent à huit heures. Au début, j’avais toujours faim, mais maintenant, je prends un petit goûter l’après-midi, comme les Français. Les magasins fermés le dimanche aussi, ça m’a étonnée ! Chez moi, tout est ouvert tout le temps. Ce qui me manque, c’est la cuisine de ma mère, surtout ses nouilles. Mais ce que j’adore ici, c’est prendre le temps : les longs repas, les cafés en terrasse… Je crois que je suis devenue un peu plus patiente !",
          checklist: ["J’ai cité au moins deux surprises", "J’ai comparé avec la Chine (alors que, tandis que)", "J’ai utilisé l’imparfait et le présent pour montrer un changement", "J’ai dit ce qui me manque et ce que j’aime", "J’ai parlé au moins une minute", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 5,
      niveau: "b1",
      theme: "Sport et tourisme",
      chine: true,
      titre: "Paris et Pékin, villes olympiques",
      objectif: "Comprendre un texte sur un grand événement, comparer des lieux, présenter un site touristique.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Deux villes, plusieurs Jeux",
          duree: "40 min",
          texte: [
            "Peu de villes au monde ont accueilli plusieurs fois les Jeux olympiques. Paris et Pékin font partie de ce club très fermé, chacune avec une histoire bien particulière.",
            "Paris a organisé les Jeux d’été à trois reprises : en 1900, en 1924, puis en 2024, exactement un siècle plus tard. Les Jeux de 2024 ont marqué les esprits par leurs sites spectaculaires : le beach-volley au pied de la tour Eiffel, l’escrime sous la verrière du Grand Palais, l’équitation dans les jardins du château de Versailles. Pour la première fois, la cérémonie d’ouverture ne s’est pas déroulée dans un stade, mais sur la Seine, où les athlètes ont défilé en bateau.",
            "Pékin, de son côté, a accueilli les Jeux d’été en 2008, puis les Jeux d’hiver en 2022. Elle est ainsi devenue la première ville de l’histoire à organiser les deux. Le stade national, surnommé « le Nid d’oiseau » à cause de sa structure d’acier entrelacé, est resté le symbole de 2008. En 2022, il a de nouveau accueilli les cérémonies.",
            "Pour les villes hôtes, l’enjeu est immense : il faut construire, transporter des millions de visiteurs et laisser un héritage utile aux habitants. À Paris, par exemple, de gros travaux ont amélioré la qualité de l’eau de la Seine, avec l’objectif de pouvoir à nouveau s’y baigner. Les Jeux passent, mais les villes restent."
          ],
          questions: [
            { q: "Combien de fois Paris a-t-elle organisé les Jeux d’été ?", options: ["Deux fois", "Trois fois", "Quatre fois"], answer: 1, explication: "En 1900, 1924 et 2024." },
            { q: "Qu’est-ce qui était nouveau lors de la cérémonie d’ouverture de 2024 ?", options: ["Elle a eu lieu la nuit.", "Elle s’est déroulée sur la Seine, et non dans un stade.", "Elle a eu lieu à Versailles."], answer: 1, explication: "Les athlètes ont défilé en bateau sur la Seine." },
            { q: "Pourquoi Pékin est-elle une ville olympique unique ?", options: ["C’est la première ville à avoir organisé les Jeux d’été et d’hiver.", "C’est la plus grande ville olympique.", "Elle a organisé les Jeux trois fois."], answer: 0, explication: "Jeux d’été en 2008, Jeux d’hiver en 2022." },
            { q: "Pourquoi le stade de Pékin s’appelle-t-il « le Nid d’oiseau » ?", options: ["Des oiseaux y vivent.", "Sa structure d’acier entrelacé ressemble à un nid.", "Il est construit en bois."], answer: 1, explication: "鸟巢 (niǎocháo) : le nid d’oiseau." },
            { q: "Selon le dernier paragraphe, quel est l’enjeu principal pour une ville hôte ?", options: ["Gagner des médailles", "Laisser un héritage utile aux habitants", "Attirer des touristes une seule fois"], answer: 1, explication: "« Les Jeux passent, mais les villes restent. »" }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Une croisière sur la Seine",
          duree: "25 min",
          consigne: "Tu fais une croisière sur la Seine à Paris. Écoute le guide.",
          transcription: "Bienvenue à bord ! Notre croisière sur la Seine va durer une heure. Sur votre gauche, vous voyez le musée d’Orsay, une ancienne gare transformée en musée en 1986, célèbre pour ses peintures impressionnistes. En face, sur la rive droite, le jardin des Tuileries mène au musée du Louvre. Dans quelques minutes, nous passerons sous le pont Alexandre-III, le plus décoré de Paris. Puis nous arriverons au pied de la tour Eiffel, construite pour l’Exposition universelle de 1889. À l’origine, elle ne devait rester que vingt ans ! Pendant les Jeux de 2024, des athlètes du monde entier ont défilé ici même, sur des bateaux comme le nôtre. N’hésitez pas à prendre des photos depuis le pont supérieur, mais restez assis pendant les manœuvres. Bonne croisière !",
          questions: [
            { q: "Combien de temps dure la croisière ?", options: ["Trente minutes", "Une heure", "Deux heures"], answer: 1, explication: "« Notre croisière sur la Seine va durer une heure. »" },
            { q: "Qu’était le musée d’Orsay autrefois ?", options: ["Une gare", "Un palais royal", "Une usine"], answer: 0, explication: "Une ancienne gare, transformée en musée en 1986." },
            { q: "Pourquoi la tour Eiffel a-t-elle été construite ?", options: ["Pour l’Exposition universelle de 1889", "Pour les Jeux olympiques de 1900", "Pour la radio"], answer: 0, explication: "Elle ne devait d’ailleurs rester que vingt ans." },
            { q: "Quelle consigne de sécurité le guide donne-t-il ?", options: ["Ne pas prendre de photos", "Rester assis pendant les manœuvres", "Rester sur le pont inférieur"], answer: 1, explication: "Les photos sont autorisées depuis le pont supérieur." }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Comparer : plus, moins, aussi, le plus",
          duree: "35 min",
          regles: ["comparatif-superlatif"],
          fiche: `
            <p><strong>Comparatif</strong> : <em>plus / moins / aussi</em> + adjectif + <em>que</em> ; <em>plus de / moins de / autant de</em> + nom + <em>que</em>.</p>
            <p><strong>Superlatif</strong> : <em>le / la / les plus</em> + adjectif (+ <em>de</em>) : le pont <em>le plus</em> décoré <em>de</em> Paris.</p>
            <p>Formes irrégulières : <em>bon → meilleur</em>, <em>bien → mieux</em>.</p>`,
          consigne: "Choisis la forme qui convient.",
          phrases: [
            { avant: "Pékin est", options: ["la première", "le premier", "première"], answer: 0, apres: "ville à organiser les Jeux d’été et d’hiver.", explication: "« Ville » est féminin : la première." },
            { avant: "La tour Eiffel est", options: ["plus haute", "la plus haut", "plus haut"], answer: 0, apres: "que l’Arc de triomphe.", explication: "Comparatif accordé avec « la tour » : plus haute… que." },
            { avant: "C’est le pont", options: ["le plus", "plus", "le mieux"], answer: 0, apres: "décoré de Paris.", explication: "Superlatif : le plus + adjectif." },
            { avant: "Ce restaurant est", options: ["meilleur", "plus bon", "mieux"], answer: 0, apres: "que l’autre.", explication: "On ne dit pas « plus bon » : bon → meilleur." },
            { avant: "Elle nage", options: ["mieux", "meilleur", "plus bien"], answer: 0, apres: "que moi.", explication: "Avec un verbe, c’est l’adverbe bien → mieux." },
            { avant: "Il y a", options: ["autant de", "autant que", "aussi"], answer: 0, apres: "touristes que l’an dernier.", explication: "Devant un nom : autant de." },
            { avant: "Le métro est", options: ["moins cher", "moins de cher", "plus moins cher"], answer: 0, apres: "que le taxi.", explication: "Devant un adjectif : moins + adjectif." },
            { avant: "Versailles est l’un des sites", options: ["les plus visités", "plus visités", "le plus visités"], answer: 0, apres: "de France.", explication: "« L’un des » + superlatif au pluriel : les plus visités." }
          ]
        },
        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Un avis de voyageuse",
          duree: "45 min",
          regles: ["comparatif-superlatif"],
          consigne: "Écris un avis sur un site de voyage à propos d’un lieu que tu as visité, en France ou en Chine : décris-le, donne ses points forts et ses points faibles, compare-le à un autre lieu, puis fais une recommandation.",
          min: 130,
          max: 180,
          checklist: [
            "Un titre accrocheur",
            "Une description du lieu",
            "Des points forts et au moins un point faible",
            "Au moins deux comparatifs et un superlatif",
            "Un conseil pratique (moment, transport, prix)",
            "Une recommandation finale claire"
          ],
          modele: `Le plus beau lever de soleil de mon voyage

Je suis montée au Mont-Saint-Michel un matin de mai, et c’est sans doute le site le plus impressionnant que j’aie vu en France. L’abbaye semble posée sur la mer, et à marée haute, le rocher devient une île.

Le village est charmant, mais beaucoup plus touristique que je ne l’imaginais : les rues sont étroites et les restaurants sont plus chers qu’ailleurs en Normandie. En revanche, la vue depuis les remparts est extraordinaire.

Comparé à la Montagne jaune, en Chine, le Mont-Saint-Michel est moins sportif, mais tout aussi magique au lever du soleil.

Mon conseil : arrivez avant neuf heures, prenez la navette gratuite depuis le parking et regardez l’horaire des marées.

Je le recommande à tous ceux qui aiment l’histoire… et les belles photos !`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un site touristique chinois",
          duree: "30 min",
          consigne: "Des amis français veulent voyager en Chine. Présente-leur un lieu que tu aimes : où il se trouve, comment y aller, ce qu’il faut voir, un conseil pratique.",
          preparation: ["Si vous allez en Chine, je vous conseille vivement…", "C’est une ville / un site qui se trouve…", "On peut y aller en…", "Le plus beau, c’est…", "C’est plus… que…", "Évitez… / Pensez à…"],
          dureeCible: "1 minute 30",
          modele: "Si vous allez en Chine, je vous conseille vivement de visiter Guilin, dans le sud du pays. On peut y aller en train à grande vitesse depuis Canton en un peu moins de trois heures. Le plus beau, c’est la croisière sur la rivière Li jusqu’à Yangshuo : les montagnes en forme de pains de sucre sont si célèbres qu’elles figurent sur le billet de vingt yuans ! À Yangshuo, louez un vélo pour vous promener entre les rizières, c’est beaucoup plus calme que dans les grandes villes. Un dernier conseil : évitez la semaine de la fête nationale, début octobre, car il y a énormément de monde.",
          checklist: ["J’ai situé le lieu", "J’ai expliqué comment y aller", "J’ai décrit ce qu’il faut voir", "Au moins une comparaison", "Un conseil pratique", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      "id": 6,
      "niveau": "b1",
      "theme": "Vie quotidienne",
      "titre": "Se loger en France",
      "objectif": "Comprendre une annonce, visiter un logement, écrire à un propriétaire.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Une annonce et un premier échange",
          "duree": "40 min",
          "texte": [
            "À louer, Bordeaux, quartier Saint-Michel : studio meublé de 24 m², au troisième étage sans ascenseur, dans un immeuble ancien. Pièce principale lumineuse avec coin cuisine équipé, salle d’eau avec douche, toilettes séparées. Loyer : 520 euros par mois charges comprises. Dépôt de garantie : un mois de loyer. Disponible à partir du 1er septembre. Proche du tramway et des commerces. Idéal étudiant. Garant demandé.",
            "Mei, étudiante en master, a répondu à l’annonce le soir même. Le propriétaire, monsieur Lambert, l’a rappelée le lendemain matin. Il lui a expliqué que plusieurs personnes étaient déjà intéressées et qu’il organisait des visites le samedi. Il lui a aussi demandé un dossier : une pièce d’identité, une attestation d’inscription à l’université et les justificatifs de son garant.",
            "Mei n’avait pas de garant en France. Une amie lui a parlé de Visale, une garantie gratuite proposée par l’État aux étudiants. En une soirée, elle a fait la demande en ligne et a reçu son attestation. Le samedi, elle est arrivée à la visite avec un dossier complet, rangé dans une pochette.",
            "Le studio était petit, mais la fenêtre donnait sur une jolie place avec un marché. Monsieur Lambert a apprécié son sérieux. Le lundi suivant, il lui a annoncé que le logement était pour elle. Ils ont fixé un rendez-vous pour signer le bail et faire l’état des lieux d’entrée."
          ],
          "questions": [
            {
              "q": "Le loyer de 520 euros…",
              "options": [
                "ne comprend pas l’eau ni le chauffage",
                "comprend les charges",
                "est payé chaque semaine"
              ],
              "answer": 1,
              "explication": "L’annonce indique « charges comprises » : les charges (eau, entretien de l’immeuble…) sont incluses."
            },
            {
              "q": "Que doit fournir Mei dans son dossier ?",
              "options": [
                "Une lettre de motivation et un CV",
                "Une pièce d’identité, une attestation d’inscription et les papiers d’un garant",
                "Uniquement un relevé bancaire"
              ],
              "answer": 1,
              "explication": "Le propriétaire demande ces trois éléments."
            },
            {
              "q": "Qu’est-ce que Visale ?",
              "options": [
                "Une agence immobilière",
                "Une garantie gratuite proposée par l’État",
                "Une banque pour étudiants"
              ],
              "answer": 1,
              "explication": "Visale remplace un garant personnel."
            },
            {
              "q": "Pourquoi le propriétaire choisit-il Mei ?",
              "options": [
                "Elle propose un loyer plus élevé.",
                "Elle est la seule candidate.",
                "Son dossier complet montre son sérieux."
              ],
              "answer": 2,
              "explication": "Il « a apprécié son sérieux » : elle est venue avec un dossier complet."
            },
            {
              "q": "« Le dépôt de garantie » est…",
              "options": [
                "une somme versée au début et rendue en partant si le logement est en bon état",
                "le premier loyer",
                "une assurance contre l’incendie"
              ],
              "answer": 0,
              "explication": "Il sert à couvrir d’éventuels dégâts ; il est rendu à la fin du bail."
            },
            {
              "q": "Dans « le logement était pour elle », « était » est à l’imparfait parce que…",
              "options": [
                "c’est une action soudaine",
                "c’est un discours rapporté au passé",
                "c’est une habitude"
              ],
              "answer": 1,
              "explication": "Il « lui a annoncé que le logement était pour elle » : le présent du discours devient imparfait."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une visite d’appartement",
          "duree": "30 min",
          "consigne": "Une agente immobilière fait visiter un deux-pièces à un jeune couple. Lis les questions, puis écoute.",
          "transcription": "Bonjour, entrez, je vous en prie. Alors, voici l’entrée, avec un grand placard où vous pouvez ranger vos manteaux. À droite, c’est le séjour : vingt mètres carrés, exposé plein sud, donc très lumineux l’après-midi. La cuisine est ouverte sur le séjour, elle a été refaite il y a deux ans. Le four et le réfrigérateur sont neufs, en revanche il n’y a pas de lave-vaisselle. Ici, au fond du couloir, vous avez la chambre, qui donne sur la cour : c’est très calme, vous n’entendrez pas la rue. La salle de bains est juste à côté, avec une baignoire. Le chauffage est individuel, au gaz. Pour le loyer, c’est huit cent soixante-dix euros, plus soixante euros de charges. Il y a une cave au sous-sol, mais pas de parking. Si l’appartement vous plaît, il faut nous envoyer votre dossier avant mercredi, parce que nous avons beaucoup de demandes.",
          "questions": [
            {
              "q": "Pourquoi le séjour est-il lumineux ?",
              "options": [
                "Il a de grandes fenêtres sur la rue.",
                "Il est exposé au sud.",
                "Il est au dernier étage."
              ],
              "answer": 1,
              "explication": "« Exposé plein sud, donc très lumineux l’après-midi. »"
            },
            {
              "q": "Qu’est-ce qui manque dans la cuisine ?",
              "options": [
                "Un four",
                "Un réfrigérateur",
                "Un lave-vaisselle"
              ],
              "answer": 2,
              "explication": "« En revanche, il n’y a pas de lave-vaisselle. »"
            },
            {
              "q": "La chambre est calme parce qu’…",
              "options": [
                "elle donne sur la cour",
                "elle a double vitrage",
                "elle est loin de l’entrée"
              ],
              "answer": 0,
              "explication": "« Elle donne sur la cour : c’est très calme. »"
            },
            {
              "q": "Combien le couple paiera-t-il en tout chaque mois ?",
              "options": [
                "870 €",
                "930 €",
                "810 €"
              ],
              "answer": 1,
              "explication": "870 € de loyer + 60 € de charges = 930 €."
            },
            {
              "q": "Avant quand faut-il envoyer le dossier ?",
              "options": [
                "Avant mercredi",
                "Avant la fin du mois",
                "Le jour même"
              ],
              "answer": 0,
              "explication": "L’agente insiste : beaucoup de demandes."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le vocabulaire du logement",
          "duree": "20 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "le bail",
              "definition": "le contrat de location signé avec le propriétaire"
            },
            {
              "terme": "meublé",
              "definition": "loué avec un lit, une table, des rangements…"
            },
            {
              "terme": "la colocation",
              "definition": "le fait de partager un logement avec d’autres locataires"
            },
            {
              "terme": "l’état des lieux",
              "definition": "la description précise du logement à l’entrée et à la sortie"
            },
            {
              "terme": "le garant",
              "definition": "la personne qui paie si le locataire ne peut pas payer"
            },
            {
              "terme": "les charges",
              "definition": "les frais d’eau, d’entretien de l’immeuble, d’ordures ménagères…"
            },
            {
              "terme": "un deux-pièces",
              "definition": "un logement avec un séjour et une chambre"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Qui, que, dont, où",
          "duree": "45 min",
          "regles": [
            "pronoms-relatifs"
          ],
          "fiche": "<p>Le pronom relatif reprend un nom et évite de le répéter. <strong>Qui</strong> remplace le sujet, <strong>que</strong> le complément d’objet direct, <strong>dont</strong> un complément introduit par <em>de</em>, et <strong>où</strong> un lieu ou un moment.</p><p class=\"ex\">Le studio <strong>que</strong> j’ai visité est petit. C’est le quartier <strong>où</strong> j’habite. Voici le garant <strong>dont</strong> je t’ai parlé.</p>",
          "consigne": "Choisis le pronom relatif qui convient.",
          "phrases": [
            {
              "avant": "C’est un appartement",
              "options": [
                "qui",
                "que",
                "dont"
              ],
              "answer": 0,
              "apres": "donne sur un parc.",
              "explication": "« Qui » est sujet de « donne »."
            },
            {
              "avant": "Le studio",
              "options": [
                "qui",
                "que",
                "où"
              ],
              "answer": 1,
              "apres": "Mei a loué est près du tramway.",
              "explication": "Mei a loué quoi ? le studio : complément d’objet direct, donc « que »."
            },
            {
              "avant": "C’est la ville",
              "options": [
                "que",
                "dont",
                "où"
              ],
              "answer": 2,
              "apres": "j’ai fait mes études.",
              "explication": "« Où » pour un lieu."
            },
            {
              "avant": "Voici le dossier",
              "options": [
                "que",
                "dont",
                "qui"
              ],
              "answer": 1,
              "apres": "le propriétaire a besoin.",
              "explication": "Avoir besoin de quelque chose : « dont »."
            },
            {
              "avant": "Je me souviens du jour",
              "options": [
                "où",
                "que",
                "dont"
              ],
              "answer": 0,
              "apres": "j’ai reçu les clés.",
              "explication": "« Où » s’emploie aussi pour un moment."
            },
            {
              "avant": "La colocataire",
              "options": [
                "dont",
                "qui",
                "que"
              ],
              "answer": 2,
              "apres": "j’ai rencontrée hier est italienne.",
              "explication": "J’ai rencontré qui ? la colocataire : COD, donc « que »."
            },
            {
              "avant": "C’est un quartier",
              "options": [
                "que",
                "dont",
                "où"
              ],
              "answer": 1,
              "apres": "tout le monde parle.",
              "explication": "Parler de quelque chose : « dont »."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Écrire au propriétaire",
          "duree": "1 h",
          "regles": [
            "registres-de-langue",
            "pronoms-relatifs"
          ],
          "consigne": "Tu as vu une annonce pour un studio. Écris un courriel au propriétaire : présente-toi, dis pourquoi le logement t’intéresse, pose deux questions précises et propose un moment pour une visite.",
          "min": 120,
          "max": 170,
          "checklist": [
            "J’ai utilisé une formule d’appel et une formule de politesse adaptées",
            "Je me suis présentée en deux ou trois phrases",
            "J’ai posé deux questions précises (charges, date, quartier…)",
            "J’ai proposé une date de visite",
            "J’ai vouvoyé le propriétaire du début à la fin"
          ],
          "modele": "Objet : Studio meublé, quartier Saint-Michel\n\nMadame, Monsieur,\n\nJe vous écris au sujet de votre annonce pour le studio meublé situé dans le quartier Saint-Michel. Je m’appelle Lin, j’ai vingt-quatre ans et je commence en septembre un master de lettres à l’université de Bordeaux.\n\nVotre logement m’intéresse beaucoup, car il est proche du tramway que je prendrai tous les jours pour aller à la faculté. J’aurais toutefois deux questions : les charges comprennent-elles le chauffage ? Et serait-il possible d’emménager quelques jours avant le 1er septembre ?\n\nJe dispose d’un dossier complet, avec une garantie Visale. Je suis disponible pour une visite samedi matin ou lundi en fin de journée.\n\nJe vous remercie par avance de votre réponse et vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.\n\nLin Zhou"
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Décrire mon logement idéal",
          "duree": "30 min",
          "consigne": "Décris à voix haute ton logement idéal pendant tes études en France : la ville et le quartier, la taille, les pièces, ce qui est indispensable pour toi et ce qui ne l’est pas. Justifie au moins deux choix.",
          "preparation": [
            "Mon logement idéal serait…",
            "Ce qui compte le plus pour moi, c’est…",
            "Je préférerais… plutôt que…",
            "En revanche, je peux me passer de…",
            "C’est un quartier où…"
          ],
          "dureeCible": "1 à 2 minutes",
          "modele": "Mon logement idéal serait un petit deux-pièces dans un quartier animé, mais pas trop bruyant. Ce qui compte le plus pour moi, c’est la lumière : j’ai besoin d’une grande fenêtre, parce que je travaille beaucoup chez moi. Je préférerais habiter près de l’université plutôt que dans le centre-ville, pour pouvoir y aller à pied. J’aimerais aussi avoir une vraie cuisine, car j’adore cuisiner des plats de mon pays pour mes amis. En revanche, je peux me passer de baignoire ou de balcon. Enfin, ce serait parfait si c’était un quartier où il y a un marché le week-end.",
          "checklist": [
            "J’ai situé le logement (ville, quartier)",
            "J’ai décrit les pièces",
            "J’ai justifié au moins deux choix",
            "J’ai utilisé le conditionnel pour parler d’un idéal"
          ]
        }
      ]
    },

    {
      "id": 7,
      "niveau": "b1",
      "theme": "Gastronomie, mode",
      "titre": "La mode, de la rue aux défilés",
      "objectif": "Décrire des vêtements et un style, donner son avis sur une tendance.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "La friperie, nouvelle boutique préférée des étudiants",
          "duree": "40 min",
          "texte": [
            "Il y a encore quinze ans, acheter des vêtements d’occasion avait une image un peu triste. Aujourd’hui, c’est devenu tendance. Dans les grandes villes françaises, les friperies se multiplient, et les applications de revente en ligne comptent des millions d’utilisateurs. Chez les moins de trente ans, la seconde main n’est plus un choix par défaut : c’est un style.",
            "Pourquoi ce succès ? D’abord pour le prix. Un manteau en laine coûte souvent trois ou quatre fois moins cher qu’en boutique. Ensuite pour l’originalité : en friperie, on trouve des pièces uniques, que personne d’autre ne portera. « J’aime l’idée qu’un vêtement ait déjà une histoire », explique Inès, 21 ans, étudiante en design à Lille.",
            "Il y a aussi une raison écologique. L’industrie textile est l’une des plus polluantes au monde : il faut beaucoup d’eau pour produire un seul jean, et les vêtements bon marché sont vite jetés. Acheter d’occasion permet de prolonger leur vie.",
            "Tout le monde n’est pas convaincu pour autant. Certains trouvent les friperies trop chères depuis qu’elles sont à la mode. D’autres remarquent que beaucoup de jeunes achètent d’occasion… pour revendre aussitôt et racheter encore. Finalement, la question n’est peut-être pas seulement où l’on achète, mais combien."
          ],
          "questions": [
            {
              "q": "Selon l’article, la seconde main chez les jeunes est aujourd’hui…",
              "options": [
                "un choix par défaut",
                "un style",
                "une habitude des personnes âgées"
              ],
              "answer": 1,
              "explication": "« Ce n’est plus un choix par défaut : c’est un style. »"
            },
            {
              "q": "Quelles sont les trois raisons du succès des friperies ?",
              "options": [
                "Le prix, l’originalité, l’écologie",
                "La mode, la publicité, le prix",
                "La qualité, la rapidité, le service"
              ],
              "answer": 0,
              "explication": "Les paragraphes 2 et 3 les présentent dans cet ordre."
            },
            {
              "q": "Qu’apprécie Inès dans les vêtements d’occasion ?",
              "options": [
                "Ils sont toujours neufs.",
                "Ils ont déjà une histoire.",
                "Ils sont faciles à revendre."
              ],
              "answer": 1,
              "explication": "« J’aime l’idée qu’un vêtement ait déjà une histoire. »"
            },
            {
              "q": "Quelle critique est faite à la fin ?",
              "options": [
                "Les vêtements d’occasion sont sales.",
                "Certains achètent et revendent sans cesse.",
                "Les friperies ferment trop tôt."
              ],
              "answer": 1,
              "explication": "La quantité achetée reste un problème."
            },
            {
              "q": "« Pour autant » (dernier paragraphe) signifie :",
              "options": [
                "pourtant, malgré cela",
                "par conséquent",
                "par exemple"
              ],
              "answer": 0,
              "explication": "Le connecteur introduit une opposition."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une créatrice parle de son métier",
          "duree": "30 min",
          "consigne": "Camille, jeune créatrice de mode à Marseille, répond aux questions d’une journaliste. Lis les questions, puis écoute.",
          "transcription": "Comment j’ai commencé ? Un peu par hasard, en fait. Pendant mes études de commerce, je retouchais les vêtements de mes amies, je raccourcissais des robes, je changeais des boutons. Et un jour, une amie m’a dit : tu devrais vendre tes créations. Alors j’ai acheté une vieille machine à coudre et j’ai commencé dans ma chambre. Aujourd’hui, j’ai un petit atelier près du Vieux-Port et nous sommes trois. Je travaille surtout avec des tissus récupérés : des fins de rouleaux que les grandes marques n’utilisent plus. Mes vêtements sont simples, colorés, faciles à porter, et ils sont fabriqués en petites séries, jamais plus de cinquante pièces. Ce qui est difficile ? Le prix. Une robe fabriquée ici coûte forcément plus cher qu’une robe produite à l’autre bout du monde. Il faut l’expliquer aux clients. Mais je remarque que de plus en plus de gens préfèrent acheter moins, et mieux.",
          "questions": [
            {
              "q": "Que faisait Camille pendant ses études ?",
              "options": [
                "Elle travaillait dans une boutique.",
                "Elle retouchait les vêtements de ses amies.",
                "Elle étudiait la mode."
              ],
              "answer": 1,
              "explication": "Elle faisait des études de commerce et des retouches pour ses amies."
            },
            {
              "q": "Avec quels tissus travaille-t-elle surtout ?",
              "options": [
                "Des tissus récupérés",
                "De la soie importée",
                "Des tissus synthétiques neufs"
              ],
              "answer": 0,
              "explication": "Des fins de rouleaux inutilisés par les grandes marques."
            },
            {
              "q": "Combien de pièces fabrique-t-elle au maximum par série ?",
              "options": [
                "Cinq",
                "Cinquante",
                "Cinq cents"
              ],
              "answer": 1,
              "explication": "« Jamais plus de cinquante pièces. »"
            },
            {
              "q": "Quelle est la principale difficulté de son métier ?",
              "options": [
                "Trouver des clients",
                "Le prix de ses vêtements",
                "Le manque de place"
              ],
              "answer": 1,
              "explication": "Une robe fabriquée en France coûte plus cher."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Décrire des vêtements et un style",
          "duree": "20 min",
          "consigne": "Associe chaque expression à son sens.",
          "items": [
            {
              "terme": "être à la mode",
              "definition": "correspondre aux goûts du moment"
            },
            {
              "terme": "démodé",
              "definition": "qui ne plaît plus, qui date d’une autre époque"
            },
            {
              "terme": "une tenue",
              "definition": "l’ensemble des vêtements portés en même temps"
            },
            {
              "terme": "assorti",
              "definition": "qui va bien avec autre chose (couleur, style)"
            },
            {
              "terme": "d’occasion",
              "definition": "qui a déjà appartenu à quelqu’un"
            },
            {
              "terme": "sur mesure",
              "definition": "fabriqué exactement à la taille d’une personne"
            },
            {
              "terme": "ça te va bien",
              "definition": "ce vêtement te rend joli·e, il te convient"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Comparer : comparatif et superlatif",
          "duree": "45 min",
          "regles": [
            "comparatif-superlatif"
          ],
          "fiche": "<p>Pour comparer : <strong>plus / moins / aussi</strong> + adjectif + <strong>que</strong>. Attention aux formes irrégulières : <em>bon → meilleur</em>, <em>bien → mieux</em>. Le superlatif ajoute l’article : <strong>le plus</strong>, <strong>la moins</strong>, <strong>les meilleurs</strong>.</p><p class=\"ex\">Ce manteau est <strong>moins cher que</strong> l’autre. C’est <strong>la meilleure</strong> friperie de la ville.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "Ce jean d’occasion est",
              "options": [
                "plus bon marché",
                "moins cher"
              ],
              "answer": 1,
              "apres": "que le neuf.",
              "explication": "« Bon marché » ne se compare pas avec « plus » : on dit « moins cher » ou « meilleur marché »."
            },
            {
              "avant": "La qualité de ce pull est",
              "options": [
                "meilleure",
                "plus bonne"
              ],
              "answer": 0,
              "apres": "que celle du mien.",
              "explication": "Bon → meilleur, jamais « plus bon »."
            },
            {
              "avant": "Elle s’habille",
              "options": [
                "mieux",
                "meilleur"
              ],
              "answer": 0,
              "apres": "que sa sœur.",
              "explication": "« S’habiller » est un verbe : on compare avec l’adverbe bien → mieux."
            },
            {
              "avant": "C’est la robe",
              "options": [
                "la plus",
                "plus"
              ],
              "answer": 0,
              "apres": "élégante de la collection.",
              "explication": "Superlatif : l’article est répété devant « plus » après le nom."
            },
            {
              "avant": "Ces chaussures sont",
              "options": [
                "aussi",
                "autant"
              ],
              "answer": 0,
              "apres": "confortables que des baskets.",
              "explication": "« Aussi » devant un adjectif ; « autant » avec un verbe ou un nom."
            },
            {
              "avant": "J’achète",
              "options": [
                "moins de",
                "moins des"
              ],
              "answer": 0,
              "apres": "vêtements qu’avant.",
              "explication": "Avec un nom : « moins de », « plus de », « autant de »."
            },
            {
              "avant": "C’est le",
              "options": [
                "pire",
                "plus pire"
              ],
              "answer": 0,
              "apres": "achat de ma vie !",
              "explication": "Mauvais → pire. « Plus pire » est une faute : « pire » est déjà un comparatif."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "La mode rapide : pour ou contre ?",
          "duree": "1 h",
          "regles": [
            "donner-son-avis",
            "connecteurs-logiques"
          ],
          "consigne": "Sur un forum étudiant, quelqu’un demande : « Faut-il arrêter d’acheter dans les grandes chaînes de mode bon marché ? » Réponds en donnant ton avis, avec deux arguments et un exemple personnel.",
          "min": 140,
          "max": 190,
          "checklist": [
            "Mon avis est clair dès le début",
            "J’ai donné deux arguments différents",
            "J’ai utilisé au moins trois connecteurs (d’abord, de plus, pourtant, donc…)",
            "J’ai ajouté un exemple personnel",
            "J’ai utilisé au moins un comparatif"
          ],
          "modele": "À mon avis, il ne faut pas forcément arrêter, mais il faut acheter beaucoup moins.\n\nD’abord, je comprends que les étudiants choisissent ces magasins : avec un petit budget, c’est difficile de payer une robe cent euros. Pourtant, ces vêtements sont souvent de moins bonne qualité. Un t-shirt bon marché se déforme après trois lavages, alors on en rachète un autre, et finalement, on dépense autant.\n\nDe plus, cette production a un coût pour la planète et pour les ouvriers qui fabriquent nos vêtements à l’autre bout du monde.\n\nPersonnellement, l’année dernière, j’ai décidé de n’acheter que deux vêtements neufs par saison. Le reste, je le trouve en friperie ou je l’échange avec des amies. Je m’habille mieux qu’avant, et je dépense moins.\n\nDonc, plutôt que d’interdire, apprenons à choisir !"
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Présenter mon style",
          "duree": "30 min",
          "consigne": "Présente ton style vestimentaire : ce que tu portes au quotidien, ce que tu portes pour une occasion spéciale, et comment ton style a changé depuis que tu étais adolescente. Compare la mode en France et en Chine si tu le souhaites.",
          "preparation": [
            "D’habitude, je porte…",
            "Pour une occasion spéciale, je mets…",
            "Quand j’étais adolescente, je…",
            "Aujourd’hui, je fais plus attention à…",
            "Ce qui me frappe en France, c’est que…"
          ],
          "dureeCible": "1 à 2 minutes",
          "modele": "D’habitude, je porte des vêtements simples et confortables : un jean, un pull et des baskets. J’aime les couleurs douces, le beige, le bleu clair. Pour une occasion spéciale, je mets plutôt une robe longue et des boucles d’oreilles. Quand j’étais adolescente, je suivais beaucoup la mode coréenne, je changeais de style tous les mois ! Aujourd’hui, je fais plus attention à la qualité : je préfère avoir moins de vêtements, mais qui durent. Ce qui me frappe en France, c’est que les gens s’habillent de façon assez sobre, souvent en noir ou en gris.",
          "checklist": [
            "J’ai parlé du quotidien et d’une occasion spéciale",
            "J’ai comparé le passé et le présent (imparfait / présent)",
            "J’ai utilisé au moins cinq mots de vocabulaire de la mode",
            "J’ai parlé sans lire"
          ]
        }
      ]
    },

    {
      "id": 8,
      "niveau": "b1",
      "theme": "Sport et tourisme",
      "titre": "Voyager en train",
      "objectif": "Réserver un billet, comprendre une annonce en gare, raconter un trajet.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Voyager en train en France sans se ruiner",
          "duree": "40 min",
          "texte": [
            "La France possède l’un des réseaux ferroviaires les plus denses d’Europe. Les TGV, les trains à grande vitesse, relient Paris à Lyon en deux heures et à Marseille en un peu plus de trois heures. Pour les trajets régionaux, on prend le TER, plus lent mais souvent moins cher. La nuit, quelques trains de nuit permettent aussi de partir le soir et d’arriver le matin, sans payer d’hôtel.",
            "Le prix d’un billet de TGV varie beaucoup : plus on réserve tôt, moins on paie. Les billets sont souvent mis en vente trois à quatre mois avant le départ. Les jeunes de 12 à 27 ans peuvent acheter une carte de réduction valable un an, qui devient vite rentable si l’on voyage plusieurs fois. Il existe aussi des TGV à bas prix, avec moins de confort et des gares parfois éloignées du centre.",
            "Quelques conseils pratiques : arriver au moins vingt minutes avant le départ, car le numéro de la voie n’est souvent affiché qu’au dernier moment. Vérifier le numéro de sa voiture sur le billet, pour monter directement au bon endroit. Et garder son billet sur son téléphone jusqu’à l’arrivée : le contrôleur peut passer à tout moment.",
            "En cas de retard important, la compagnie rembourse une partie du billet. Encore faut-il le demander ! Beaucoup de voyageurs l’ignorent et ne font jamais la démarche."
          ],
          "questions": [
            {
              "q": "Quelle est la différence entre le TGV et le TER ?",
              "options": [
                "Le TER est plus rapide.",
                "Le TGV relie les grandes villes à grande vitesse, le TER fait des trajets régionaux.",
                "Le TER ne circule que la nuit."
              ],
              "answer": 1,
              "explication": "Le TER est « plus lent mais souvent moins cher »."
            },
            {
              "q": "Comment payer un billet de TGV moins cher ?",
              "options": [
                "En l’achetant à la gare le jour même",
                "En réservant tôt",
                "En voyageant en première classe"
              ],
              "answer": 1,
              "explication": "« Plus on réserve tôt, moins on paie. »"
            },
            {
              "q": "Pourquoi faut-il arriver en avance ?",
              "options": [
                "Parce qu’il faut composter son billet",
                "Parce que la voie est affichée tardivement",
                "Parce que les contrôles de sécurité sont longs"
              ],
              "answer": 1,
              "explication": "Le numéro de voie n’apparaît qu’au dernier moment."
            },
            {
              "q": "Que doit-on faire en cas de retard important ?",
              "options": [
                "Rien, c’est automatique",
                "Demander un remboursement partiel",
                "Changer de train"
              ],
              "answer": 1,
              "explication": "Le remboursement n’est pas automatique : il faut faire la démarche."
            },
            {
              "q": "Dans « plus on réserve tôt, moins on paie », la structure exprime…",
              "options": [
                "une proportion",
                "une cause",
                "un but"
              ],
              "answer": 0,
              "explication": "« Plus… moins… » : les deux éléments varient ensemble."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Annonces en gare",
          "duree": "30 min",
          "consigne": "Tu es à la gare de Lyon-Part-Dieu. Écoute ces trois annonces et réponds aux questions.",
          "transcription": "Votre attention, s’il vous plaît. Le TGV numéro six mille cent quatorze, à destination de Paris gare de Lyon, départ prévu à quatorze heures douze, partira voie H. Nous vous rappelons que les voitures une à huit se trouvent en tête du train. Votre attention, s’il vous plaît. Le TER à destination de Grenoble, prévu à quatorze heures trente, est annoncé avec un retard d’environ vingt-cinq minutes, en raison d’un problème de signalisation. Nous vous prions de nous excuser pour la gêne occasionnée. Dernière annonce : les voyageurs à destination de Chambéry sont invités à changer à Saint-André-le-Gaz. Une correspondance est assurée par autocar. Nous vous souhaitons un agréable voyage.",
          "questions": [
            {
              "q": "De quelle voie part le TGV pour Paris ?",
              "options": [
                "Voie A",
                "Voie H",
                "Voie 8"
              ],
              "answer": 1,
              "explication": "« Partira voie H. »"
            },
            {
              "q": "Où se trouvent les voitures 1 à 8 ?",
              "options": [
                "En tête du train",
                "En queue du train",
                "Au milieu du train"
              ],
              "answer": 0,
              "explication": "« En tête du train », c’est-à-dire à l’avant."
            },
            {
              "q": "Pourquoi le TER pour Grenoble est-il en retard ?",
              "options": [
                "À cause d’une grève",
                "À cause d’un problème de signalisation",
                "À cause de la météo"
              ],
              "answer": 1,
              "explication": "Un problème de signalisation."
            },
            {
              "q": "Comment les voyageurs pour Chambéry termineront-ils leur trajet ?",
              "options": [
                "En taxi",
                "En autocar",
                "Avec le même train"
              ],
              "answer": 1,
              "explication": "« Une correspondance est assurée par autocar. »"
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "À la gare",
          "duree": "20 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "un aller simple",
              "definition": "un billet pour partir, sans retour"
            },
            {
              "terme": "un aller-retour",
              "definition": "un billet pour partir et revenir"
            },
            {
              "terme": "la voie",
              "definition": "l’endroit où arrive et part le train, numéroté ou lettré"
            },
            {
              "terme": "le quai",
              "definition": "la plateforme où l’on attend le train"
            },
            {
              "terme": "une correspondance",
              "definition": "un changement de train pour continuer son trajet"
            },
            {
              "terme": "le contrôleur",
              "definition": "la personne qui vérifie les billets dans le train"
            },
            {
              "terme": "la voiture",
              "definition": "chacune des parties d’un train (on dit aussi wagon)"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Les pronoms en et y",
          "duree": "45 min",
          "regles": [
            "pronoms-en-y"
          ],
          "fiche": "<p><strong>Y</strong> remplace un lieu ou un complément introduit par <em>à</em> (penser à, s’habituer à). <strong>En</strong> remplace un complément introduit par <em>de</em> (venir de, avoir besoin de, parler de) ou une quantité.</p><p class=\"ex\">Tu vas à Lyon ? Oui, j’<strong>y</strong> vais demain. Tu as des billets ? Oui, j’<strong>en</strong> ai deux.</p>",
          "consigne": "Choisis le pronom qui convient.",
          "phrases": [
            {
              "avant": "Tu vas à la gare à pied ? Non, j’",
              "options": [
                "y",
                "en"
              ],
              "answer": 0,
              "apres": "vais en bus.",
              "explication": "Aller à la gare : un lieu, donc « y »."
            },
            {
              "avant": "Tu reviens de Marseille ? Oui, j’",
              "options": [
                "en",
                "y"
              ],
              "answer": 0,
              "apres": "reviens à l’instant.",
              "explication": "Revenir de : « en »."
            },
            {
              "avant": "Combien de valises as-tu ? J’",
              "options": [
                "en",
                "y"
              ],
              "answer": 0,
              "apres": "ai trois.",
              "explication": "Une quantité : « en »."
            },
            {
              "avant": "Tu as pensé à réserver ? Oui, j’",
              "options": [
                "y",
                "en"
              ],
              "answer": 0,
              "apres": "ai pensé hier soir.",
              "explication": "Penser à quelque chose : « y »."
            },
            {
              "avant": "Ta carte de réduction ? Je n’",
              "options": [
                "en",
                "y"
              ],
              "answer": 0,
              "apres": "ai plus besoin.",
              "explication": "Avoir besoin de : « en »."
            },
            {
              "avant": "Le train de nuit ? Je m’",
              "options": [
                "y",
                "en"
              ],
              "answer": 0,
              "apres": "suis vite habituée.",
              "explication": "S’habituer à : « y »."
            },
            {
              "avant": "Des retards ? Il y",
              "options": [
                "en",
                "y"
              ],
              "answer": 0,
              "apres": "a eu beaucoup cette semaine.",
              "explication": "« Il y en a » : « y » fait partie de « il y a », « en » remplace « des retards »."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Demander un remboursement",
          "duree": "1 h",
          "regles": [
            "registres-de-langue",
            "passe-compose-imparfait"
          ],
          "consigne": "Ton train a eu deux heures de retard et tu as raté un rendez-vous important. Écris au service clients de la compagnie : raconte ce qui s’est passé, explique les conséquences et demande un remboursement.",
          "min": 130,
          "max": 180,
          "checklist": [
            "J’ai indiqué la date, le trajet et le numéro du train",
            "J’ai raconté les faits au passé (passé composé et imparfait)",
            "J’ai expliqué les conséquences du retard",
            "J’ai formulé une demande claire et polie",
            "J’ai utilisé des formules adaptées à un courrier formel"
          ],
          "modele": "Objet : Demande de remboursement – TGV 6114 du 12 mars\n\nMadame, Monsieur,\n\nLe 12 mars, j’ai pris le TGV 6114 de Lyon à Paris, qui devait arriver à 16 h 05. Le train s’est arrêté pendant plus d’une heure en pleine campagne, à cause d’un problème technique. Nous n’avions aucune information et il n’y avait plus d’eau à la voiture-bar. Finalement, nous sommes arrivés à 18 h 10, avec plus de deux heures de retard.\n\nÀ cause de ce retard, j’ai manqué un entretien à l’université, que j’attendais depuis un mois et qu’il a fallu reporter.\n\nJe vous serais reconnaissante de bien vouloir me rembourser une partie de mon billet, comme le prévoient vos conditions en cas de retard important. Vous trouverez ci-joint mon billet.\n\nJe vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.\n\nLin Zhou"
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Raconter un voyage en train",
          "duree": "30 min",
          "consigne": "Raconte un voyage en train qui t’a marquée, en France, en Chine ou ailleurs : où tu allais, comment s’est passé le trajet, ce que tu as vu ou vécu. Compare, si tu veux, avec les trains de ton pays.",
          "preparation": [
            "Il y a quelque temps, j’ai pris le train pour…",
            "Le trajet a duré…",
            "Pendant le voyage, …",
            "Ce qui m’a surprise, c’est…",
            "En Chine, les trains sont…, alors qu’en France…"
          ],
          "dureeCible": "1 à 2 minutes",
          "modele": "L’été dernier, j’ai pris le train de nuit de Paris à Briançon, dans les Alpes. Je suis partie à neuf heures du soir et j’avais une couchette dans un compartiment de six personnes. Au début, j’avais un peu peur de ne pas dormir, mais le bruit du train m’a finalement bercée. Le matin, quand j’ai ouvert le rideau, il y avait des montagnes partout : c’était magnifique. Ce qui m’a surprise, c’est que tout le monde se parlait, on partageait même le petit-déjeuner. En Chine, les trains à grande vitesse sont très rapides et modernes, alors qu’en France, j’ai découvert le charme des voyages lents.",
          "checklist": [
            "J’ai donné le cadre (quand, où, avec qui)",
            "J’ai raconté au moins trois étapes du trajet",
            "J’ai dit ce que j’ai ressenti",
            "J’ai utilisé au moins un pronom en ou y"
          ]
        }
      ]
    },

    {
      "id": 9,
      "niveau": "b1",
      "theme": "Information, géopolitique et histoire",
      "titre": "Comprendre un journal télévisé",
      "objectif": "Repérer les informations essentielles d’un reportage court.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Comment se fabrique un journal télévisé",
          "duree": "40 min",
          "texte": [
            "Chaque soir, à 20 heures, plusieurs millions de Français regardent le journal télévisé, qu’on appelle souvent le « JT ». En une demi-heure, il présente une quinzaine de sujets. Mais derrière ces trente minutes, il y a une journée entière de travail.",
            "Tout commence le matin, à la conférence de rédaction. Les journalistes et le rédacteur en chef choisissent les sujets du jour. Ils doivent faire des choix difficiles : l’actualité internationale, la politique, l’économie, les faits divers, le sport, la culture… Tout ne peut pas entrer dans le journal. On décide aussi de l’ordre : le premier sujet, celui qu’on appelle « l’ouverture », est considéré comme le plus important.",
            "Ensuite, des équipes partent en reportage, souvent un journaliste et un caméraman. Ils filment, interrogent des témoins, puis reviennent monter leur sujet : un reportage dure rarement plus de deux minutes. Pendant ce temps, d’autres journalistes vérifient les informations, préparent les cartes et les graphiques.",
            "Le présentateur, lui, n’improvise presque rien. Il lit ses textes sur un prompteur, un écran placé sous la caméra. Pourtant, en cas d’événement imprévu, il doit être capable de changer tout le programme en quelques minutes, en direct."
          ],
          "questions": [
            {
              "q": "Combien de sujets présente un JT en moyenne ?",
              "options": [
                "Environ cinq",
                "Une quinzaine",
                "Une cinquantaine"
              ],
              "answer": 1,
              "explication": "« Une quinzaine de sujets » en une demi-heure."
            },
            {
              "q": "À quoi sert la conférence de rédaction ?",
              "options": [
                "À présenter le journal",
                "À choisir les sujets et leur ordre",
                "À vérifier le matériel"
              ],
              "answer": 1,
              "explication": "On y choisit les sujets et l’ordre."
            },
            {
              "q": "Qu’est-ce que « l’ouverture » ?",
              "options": [
                "Le générique du journal",
                "Le premier sujet, jugé le plus important",
                "La météo"
              ],
              "answer": 1,
              "explication": "C’est le premier sujet du journal."
            },
            {
              "q": "Combien de temps dure en général un reportage ?",
              "options": [
                "Moins de deux minutes environ",
                "Dix minutes",
                "Une demi-heure"
              ],
              "answer": 0,
              "explication": "« Rarement plus de deux minutes. »"
            },
            {
              "q": "Qu’est-ce qu’un prompteur ?",
              "options": [
                "Un journaliste stagiaire",
                "Un écran où le présentateur lit ses textes",
                "Une caméra"
              ],
              "answer": 1,
              "explication": "Il est placé sous la caméra."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Les titres du journal",
          "duree": "30 min",
          "consigne": "Voici les titres d’un journal régional à la radio. Lis les questions, puis écoute.",
          "transcription": "Bonsoir à tous, voici les titres de ce journal. À Toulouse, la nouvelle ligne de métro a été inaugurée ce matin. Elle relie le nord et le sud de la ville en vingt minutes et devrait transporter deux cent mille voyageurs par jour. Dans les Pyrénées, un randonneur blessé a été secouru hier soir par hélicoptère, après une nuit passée en montagne. Il souffre d’une fracture à la jambe, mais ses jours ne sont pas en danger. Économie : les ventes de vélos électriques ont encore augmenté cette année, de douze pour cent selon les professionnels du secteur. Et puis la culture, avec l’ouverture ce week-end du festival de jazz de Marciac, qui fête cette année sa quarante-septième édition. Enfin, la météo : il fera beau demain sur toute la région, avec des températures jusqu’à vingt-huit degrés l’après-midi.",
          "questions": [
            {
              "q": "Que s’est-il passé à Toulouse ?",
              "options": [
                "Une grève des transports",
                "L’inauguration d’une ligne de métro",
                "Un festival de musique"
              ],
              "answer": 1,
              "explication": "La nouvelle ligne a été inaugurée ce matin."
            },
            {
              "q": "Quel est l’état du randonneur ?",
              "options": [
                "Il est gravement blessé.",
                "Il a une jambe cassée mais il n’est pas en danger.",
                "Il est toujours perdu."
              ],
              "answer": 1,
              "explication": "« Ses jours ne sont pas en danger » signifie qu’il ne va pas mourir."
            },
            {
              "q": "De combien les ventes de vélos électriques ont-elles augmenté ?",
              "options": [
                "De 2 %",
                "De 12 %",
                "De 47 %"
              ],
              "answer": 1,
              "explication": "47, c’est l’édition du festival."
            },
            {
              "q": "Quel temps fera-t-il demain ?",
              "options": [
                "Pluvieux",
                "Beau et chaud",
                "Froid et nuageux"
              ],
              "answer": 1,
              "explication": "Beau temps, jusqu’à 28 degrés."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Les mots de l’information",
          "duree": "20 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "un reportage",
              "definition": "un sujet filmé ou enregistré sur le terrain"
            },
            {
              "terme": "une brève",
              "definition": "une information très courte, en quelques lignes"
            },
            {
              "terme": "un fait divers",
              "definition": "un événement local : accident, vol, sauvetage…"
            },
            {
              "terme": "l’envoyé spécial",
              "definition": "le journaliste envoyé sur le lieu d’un événement"
            },
            {
              "terme": "la une",
              "definition": "la première page d’un journal, ou l’information principale"
            },
            {
              "terme": "un témoin",
              "definition": "une personne qui a vu ce qui s’est passé"
            },
            {
              "terme": "en direct",
              "definition": "diffusé au moment même où cela se passe"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "La voix passive",
          "duree": "45 min",
          "regles": [
            "voix-passive"
          ],
          "fiche": "<p>La voix passive met en valeur la personne ou la chose qui subit l’action. On la forme avec <strong>être</strong> au temps voulu + <strong>participe passé</strong>, accordé avec le sujet. L’agent est introduit par <strong>par</strong>. Elle est très fréquente dans les informations.</p><p class=\"ex\">Le randonneur <strong>a été secouru</strong> par les pompiers. La ligne <strong>sera inaugurée</strong> lundi.</p>",
          "consigne": "Choisis la forme passive correcte.",
          "phrases": [
            {
              "avant": "La nouvelle ligne de métro",
              "options": [
                "a été inaugurée",
                "a inauguré"
              ],
              "answer": 0,
              "apres": "ce matin.",
              "explication": "La ligne ne fait pas l’action : elle la subit."
            },
            {
              "avant": "Les blessés",
              "options": [
                "ont été transportés",
                "ont été transporté"
              ],
              "answer": 0,
              "apres": "à l’hôpital.",
              "explication": "Le participe s’accorde avec le sujet : masculin pluriel."
            },
            {
              "avant": "Le festival",
              "options": [
                "sera ouvert",
                "est ouvert"
              ],
              "answer": 0,
              "apres": "samedi prochain par le maire.",
              "explication": "« Samedi prochain » : futur, donc « sera »."
            },
            {
              "avant": "Chaque année, ce prix",
              "options": [
                "est remis",
                "a remis"
              ],
              "answer": 0,
              "apres": "à un jeune auteur.",
              "explication": "Une habitude au présent passif : « est » + participe."
            },
            {
              "avant": "La décision",
              "options": [
                "a été prise",
                "a été pris"
              ],
              "answer": 0,
              "apres": "hier soir par le conseil municipal.",
              "explication": "Décision est féminin : « prise »."
            },
            {
              "avant": "Le pont",
              "options": [
                "était construit",
                "avait été construit"
              ],
              "answer": 1,
              "apres": "en 1890, bien avant la guerre.",
              "explication": "Antériorité dans le passé : plus-que-parfait passif."
            },
            {
              "avant": "Les résultats",
              "options": [
                "seront publiés",
                "publieront"
              ],
              "answer": 0,
              "apres": "la semaine prochaine.",
              "explication": "Les résultats ne publient pas : ils sont publiés."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Rédiger une brève",
          "duree": "45 min",
          "regles": [
            "voix-passive"
          ],
          "consigne": "Rédige deux brèves pour le journal de ton université : un événement qui a eu lieu (une fête, une conférence, une inauguration…) et un événement à venir. Chaque brève doit répondre aux questions : qui ? quoi ? où ? quand ? pourquoi ?",
          "min": 100,
          "max": 150,
          "checklist": [
            "Chaque brève a un titre court",
            "Les réponses à qui, quoi, où, quand sont dans les deux premières phrases",
            "J’ai utilisé au moins deux phrases à la voix passive",
            "Le ton est neutre : je ne donne pas mon avis"
          ],
          "modele": "Une nouvelle bibliothèque pour les étudiants de langues\nLa bibliothèque de langues du campus a été inaugurée mardi par la présidente de l’université. Elle propose 12 000 livres en 35 langues, ainsi que des salles de travail en groupe. Elle sera ouverte du lundi au samedi, de 8 h à 22 h. Plus de 300 étudiants l’ont déjà visitée le premier jour.\n\nUne conférence sur la francophonie en Asie\nJeudi 14 novembre, à 18 h, l’amphithéâtre B accueillera une conférence sur la place du français en Asie. Elle sera animée par deux chercheurs de Lyon et de Hanoï. L’entrée est libre, mais l’inscription est conseillée, car le nombre de places est limité."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Présenter une information",
          "duree": "30 min",
          "consigne": "Choisis une information que tu as lue ou entendue cette semaine (en français ou dans ta langue). Présente-la comme un ou une journaliste : les faits d’abord, puis une phrase de conclusion. Ne donne ton avis qu’à la fin, en le présentant clairement comme une opinion.",
          "preparation": [
            "Cette semaine, on a appris que…",
            "Selon…, …",
            "Cela s’est passé à…",
            "Il s’agit de…",
            "Pour ma part, je trouve que…"
          ],
          "dureeCible": "1 minute",
          "modele": "Cette semaine, on a appris qu’une nouvelle ligne de métro avait été inaugurée à Toulouse. Elle relie le nord et le sud de la ville en vingt minutes. Selon la mairie, elle devrait transporter deux cent mille voyageurs par jour et réduire les embouteillages. Les travaux ont duré six ans et ont coûté plus de deux milliards d’euros. Pour ma part, je trouve que c’est une bonne nouvelle, surtout pour les étudiants qui habitent loin du centre.",
          "checklist": [
            "J’ai présenté les faits avant mon avis",
            "J’ai cité une source (selon…)",
            "J’ai parlé de façon claire et posée",
            "J’ai utilisé au moins une phrase passive"
          ]
        }
      ]
    },

    {
      "id": 10,
      "niveau": "b1",
      "theme": "Sciences, innovation et environnement",
      "titre": "Imaginer la ville de demain",
      "objectif": "Faire des hypothèses avec si et parler d’innovations du quotidien.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "À quoi ressembleront nos villes en 2050 ?",
          "duree": "40 min",
          "texte": [
            "En 2050, près de sept personnes sur dix vivront en ville. Comment rendre ces villes plus agréables, alors que les étés deviennent plus chauds et que l’air est souvent pollué ? Urbanistes et architectes multiplient les idées.",
            "La première, c’est de remettre la nature en ville. Des arbres dans chaque rue, des toits végétalisés, des cours d’école transformées en jardins : la végétation fait baisser la température de plusieurs degrés en été. Paris, par exemple, a commencé à transformer des cours d’école goudronnées en « cours oasis », plus vertes et plus fraîches.",
            "La deuxième idée, c’est la « ville du quart d’heure » : un quartier où l’on trouve, à moins de quinze minutes à pied ou à vélo, tout ce dont on a besoin au quotidien, comme l’école, le travail, les commerces, le médecin, un parc. Si on se déplaçait moins en voiture, il y aurait moins de bruit, moins de pollution et plus de place pour les piétons.",
            "Enfin, la technologie pourrait aider : des capteurs mesureraient la qualité de l’air, l’éclairage public s’allumerait seulement au passage des piétons… Mais beaucoup d’urbanistes rappellent qu’une ville intelligente n’est pas seulement une ville connectée : c’est d’abord une ville où les habitants ont envie de vivre ensemble."
          ],
          "questions": [
            {
              "q": "Quelle proportion de la population vivra en ville en 2050 ?",
              "options": [
                "Environ la moitié",
                "Près de sept personnes sur dix",
                "Neuf personnes sur dix"
              ],
              "answer": 1,
              "explication": "« Près de sept personnes sur dix. »"
            },
            {
              "q": "Pourquoi mettre plus de végétation en ville ?",
              "options": [
                "Pour faire baisser la température en été",
                "Pour attirer les touristes",
                "Pour produire de la nourriture"
              ],
              "answer": 0,
              "explication": "La végétation fait baisser la température de plusieurs degrés."
            },
            {
              "q": "Qu’est-ce que la « ville du quart d’heure » ?",
              "options": [
                "Une ville où les transports passent tous les quarts d’heure",
                "Un quartier où tout l’essentiel est à moins de quinze minutes à pied ou à vélo",
                "Une ville construite en quinze ans"
              ],
              "answer": 1,
              "explication": "Tout ce dont on a besoin est proche."
            },
            {
              "q": "Quelle est l’idée de la dernière phrase ?",
              "options": [
                "La technologie suffit à rendre une ville agréable.",
                "Une bonne ville est d’abord une ville où l’on aime vivre ensemble.",
                "Les capteurs sont dangereux."
              ],
              "answer": 1,
              "explication": "La technologie ne remplace pas le lien entre habitants."
            },
            {
              "q": "« Si on se déplaçait moins en voiture, il y aurait moins de bruit. » Cette phrase exprime…",
              "options": [
                "un fait certain",
                "une hypothèse",
                "un ordre"
              ],
              "answer": 1,
              "explication": "Si + imparfait, conditionnel présent : une hypothèse."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Deux habitants imaginent leur quartier",
          "duree": "30 min",
          "consigne": "Nadia et Thomas habitent le même quartier. Ils discutent du projet de la mairie. Lis les questions, puis écoute.",
          "transcription": "Tu as vu le projet de la mairie pour la place du marché ? Oui, ils veulent supprimer le parking et planter des arbres. Moi, je trouve ça génial. Si on enlevait les voitures, les enfants pourraient jouer dehors, et on aurait enfin un endroit pour s’asseoir. Je comprends, mais pense aux commerçants ! Si les clients ne pouvaient plus se garer, ils iraient au supermarché en dehors de la ville. Pas forcément. Dans d’autres villes, les commerces ont même vendu plus après la création de rues piétonnes. Les gens viennent à pied, ils restent plus longtemps. Bon, peut-être. Mais alors, il faudrait plus de bus, parce que les personnes âgées ne vont pas venir à vélo ! Là, je suis d’accord avec toi. Et un parking à vélos, aussi. On pourrait proposer tout ça à la réunion publique de jeudi. D’accord, j’y serai.",
          "questions": [
            {
              "q": "Que veut faire la mairie ?",
              "options": [
                "Construire un supermarché",
                "Remplacer le parking par des arbres",
                "Agrandir le marché"
              ],
              "answer": 1,
              "explication": "Supprimer le parking et planter des arbres."
            },
            {
              "q": "Quelle est l’inquiétude de Thomas ?",
              "options": [
                "Le bruit des enfants",
                "La perte de clients pour les commerçants",
                "Le prix des arbres"
              ],
              "answer": 1,
              "explication": "Il pense que les clients iraient ailleurs."
            },
            {
              "q": "Sur quoi sont-ils finalement d’accord ?",
              "options": [
                "Il faut garder le parking.",
                "Il faudrait plus de bus et un parking à vélos.",
                "Le projet doit être abandonné."
              ],
              "answer": 1,
              "explication": "Ils proposent ensemble ces deux idées."
            },
            {
              "q": "Que vont-ils faire jeudi ?",
              "options": [
                "Aller à une réunion publique",
                "Faire une manifestation",
                "Planter des arbres"
              ],
              "answer": 0,
              "explication": "Ils présenteront leurs idées à la réunion publique."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "La ville durable",
          "duree": "20 min",
          "consigne": "Associe chaque expression à sa définition.",
          "items": [
            {
              "terme": "végétaliser",
              "definition": "ajouter des plantes, des arbres, de la verdure"
            },
            {
              "terme": "un piéton",
              "definition": "une personne qui se déplace à pied"
            },
            {
              "terme": "le covoiturage",
              "definition": "le fait de partager une voiture pour un trajet"
            },
            {
              "terme": "une piste cyclable",
              "definition": "une voie réservée aux vélos"
            },
            {
              "terme": "un îlot de chaleur",
              "definition": "une zone de la ville beaucoup plus chaude que les alentours"
            },
            {
              "terme": "le tri des déchets",
              "definition": "le fait de séparer verre, papier, plastique… pour les recycler"
            },
            {
              "terme": "un urbaniste",
              "definition": "un spécialiste de l’organisation des villes"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "L’hypothèse avec si",
          "duree": "45 min",
          "regles": [
            "hypothese-si",
            "conditionnel"
          ],
          "fiche": "<p>Pour une hypothèse <strong>probable</strong> : <em>si + présent → futur</em>. Pour une hypothèse <strong>imaginaire</strong> ou peu probable : <em>si + imparfait → conditionnel présent</em>. Pour un regret sur le passé : <em>si + plus-que-parfait → conditionnel passé</em>. Jamais de futur ni de conditionnel juste après <strong>si</strong>.</p><p class=\"ex\">S’il <strong>fait</strong> beau, j’<strong>irai</strong> à vélo. Si j’<strong>étais</strong> maire, je <strong>planterais</strong> des arbres.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "Si la mairie",
              "options": [
                "plantait",
                "planterait"
              ],
              "answer": 0,
              "apres": "plus d’arbres, il ferait moins chaud.",
              "explication": "Jamais de conditionnel après « si » : imparfait."
            },
            {
              "avant": "Si j’étais maire, je",
              "options": [
                "créerai",
                "créerais"
              ],
              "answer": 1,
              "apres": "des rues piétonnes.",
              "explication": "Si + imparfait → conditionnel présent."
            },
            {
              "avant": "S’il pleut demain, nous",
              "options": [
                "prendrons",
                "prendrions"
              ],
              "answer": 0,
              "apres": "le tramway.",
              "explication": "Hypothèse probable : si + présent → futur."
            },
            {
              "avant": "Si on",
              "options": [
                "avait construit",
                "aurait construit"
              ],
              "answer": 0,
              "apres": "ce métro plus tôt, il y aurait eu moins d’embouteillages.",
              "explication": "Regret sur le passé : si + plus-que-parfait."
            },
            {
              "avant": "Si tu habitais plus près, tu",
              "options": [
                "pourrais",
                "pourras"
              ],
              "answer": 0,
              "apres": "venir à pied.",
              "explication": "Si + imparfait → conditionnel."
            },
            {
              "avant": "Si les loyers",
              "options": [
                "baissent",
                "baisseront"
              ],
              "answer": 0,
              "apres": ", plus de familles resteront en ville.",
              "explication": "Après « si », le présent, pas le futur."
            },
            {
              "avant": "Nous aurions économisé de l’énergie si nous",
              "options": [
                "avions éteint",
                "aurions éteint"
              ],
              "answer": 0,
              "apres": "les lumières.",
              "explication": "Si + plus-que-parfait, même quand la proposition avec si vient en second."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Si j’étais maire de ma ville…",
          "duree": "1 h",
          "regles": [
            "hypothese-si",
            "conditionnel"
          ],
          "consigne": "Imagine que tu es maire de ta ville (en France ou en Chine) pour un an. Écris un texte où tu présentes trois mesures pour améliorer la vie des habitants et leurs effets attendus.",
          "min": 140,
          "max": 190,
          "checklist": [
            "J’ai présenté trois mesures différentes",
            "J’ai utilisé au moins trois phrases avec si + imparfait / conditionnel",
            "J’ai expliqué l’effet de chaque mesure",
            "J’ai utilisé des connecteurs pour organiser mon texte",
            "J’ai conclu par une phrase personnelle"
          ],
          "modele": "Si j’étais maire de Chengdu pendant un an, je commencerais par m’occuper des transports. Je créerais de nouvelles pistes cyclables, larges et protégées, le long des grandes avenues. Si les habitants pouvaient circuler à vélo en sécurité, beaucoup laisseraient leur voiture au garage, et l’air serait plus pur.\n\nEnsuite, je transformerais les toits des bâtiments publics en jardins. Ils feraient baisser la température en été et les écoles pourraient y organiser des ateliers de jardinage.\n\nEnfin, j’ouvrirais les bibliothèques le soir et le dimanche. Ce serait un lieu calme pour les étudiants qui vivent dans de petits logements, et un endroit où les générations se rencontreraient.\n\nBien sûr, un an, c’est court. Mais si chaque maire faisait de petites choses concrètes, nos villes changeraient vraiment."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Défendre une idée pour mon quartier",
          "duree": "30 min",
          "consigne": "Lors d’une réunion publique, tu proposes une idée pour améliorer ton quartier. Présente-la, explique pourquoi elle est utile et réponds à une objection que quelqu’un pourrait faire.",
          "preparation": [
            "Je voudrais proposer…",
            "Si on…, on pourrait…",
            "Cela permettrait de…",
            "On pourrait m’objecter que…, mais…",
            "Pour conclure, …"
          ],
          "dureeCible": "1 à 2 minutes",
          "modele": "Bonsoir à tous. Je voudrais proposer de créer un jardin partagé sur le terrain vide derrière la bibliothèque. Si on installait quelques bacs et un point d’eau, les habitants pourraient cultiver des légumes et des fleurs ensemble. Cela permettrait de rendre le quartier plus vert, mais aussi de créer des liens entre voisins, qui souvent ne se connaissent pas. On pourrait m’objecter que personne ne s’en occuperait pendant l’été. Mais on pourrait organiser un planning avec l’école et les associations. Pour conclure, je pense que ce projet coûterait peu et apporterait beaucoup.",
          "checklist": [
            "J’ai présenté clairement mon idée",
            "J’ai utilisé l’hypothèse avec si",
            "J’ai répondu à une objection",
            "J’ai conclu"
          ]
        }
      ]
    },

    {
      id: 11,
      niveau: "b2",
      theme: "Sciences, innovation et environnement",
      titre: "Débattre d’un sujet de société",
      objectif: "Comprendre des positions opposées et défendre la sienne en la nuançant.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Le téléphone portable a-t-il sa place au lycée ?",
          duree: "45 min",
          texte: [
            "Depuis 2018, la loi interdit l’usage du téléphone portable dans les écoles et les collèges français, sauf pour des activités pédagogiques. La question revient pourtant régulièrement dans le débat public : faut-il aller plus loin et étendre cette interdiction aux lycées ?",
            "Pour les partisans d’une interdiction, les arguments ne manquent pas. Le téléphone serait d’abord une source permanente de distraction : une notification suffit à interrompre la concentration, et il faut ensuite plusieurs minutes pour la retrouver. Ils soulignent également ses effets sur la vie sociale des élèves. Dans certaines cours de récréation, les adolescents ne se parlent presque plus, chacun restant les yeux fixés sur son écran. Enfin, le harcèlement en ligne, qui se poursuit souvent jusque dans l’établissement, constitue à leurs yeux un argument de poids.",
            "Leurs opposants ne nient pas ces difficultés, mais ils jugent l’interdiction à la fois inefficace et contre-productive. Inefficace, parce qu’il est presque impossible de la faire respecter auprès d’élèves de seize ou dix-sept ans. Contre-productive, parce que le téléphone est aussi un outil : il permet de chercher une information, de travailler une langue étrangère ou de s’organiser. Selon eux, l’école devrait plutôt apprendre aux jeunes à utiliser ces outils de manière responsable, puisqu’ils devront de toute façon vivre avec.",
            "Entre ces deux positions, certains établissements expérimentent des solutions intermédiaires : casiers où les téléphones sont déposés à l’entrée, moments sans écran dans la journée, ateliers d’éducation aux médias. Il est encore trop tôt pour en mesurer tous les effets. Une chose semble pourtant faire consensus : la question n’est pas seulement technique, elle touche à la manière dont une société souhaite éduquer ses enfants."
          ],
          questions: [
            { q: "Que prévoit la loi de 2018 ?", options: ["L’interdiction du portable dans tous les établissements scolaires", "L’interdiction de son usage dans les écoles et collèges, sauf usage pédagogique", "L’interdiction du portable pour les moins de seize ans"], answer: 1, explication: "Le texte précise : « dans les écoles et les collèges », « sauf pour des activités pédagogiques »." },
            { q: "Pourquoi l’auteur écrit-il « Le téléphone serait d’abord une source de distraction » au conditionnel ?", options: ["Il rapporte l’opinion des partisans sans la prendre à son compte.", "Il exprime un souhait.", "Il fait une hypothèse irréelle."], answer: 0, explication: "Le conditionnel signale une information ou une opinion rapportée, non confirmée par l’auteur. Voir la règle sur le conditionnel." },
            { q: "Pour les opposants, l’interdiction est « contre-productive » car :", options: ["elle coûte cher aux établissements", "elle prive les élèves d’un outil utile", "elle augmente le harcèlement"], answer: 1, explication: "Contre-productif : qui produit l’effet inverse de celui recherché." },
            { q: "Quelle est la position de l’auteur ?", options: ["Il est favorable à l’interdiction.", "Il y est opposé.", "Il présente les deux positions sans trancher."], answer: 2, explication: "Le texte expose les deux camps puis des solutions intermédiaires, sans prendre parti." },
            { q: "« Un argument de poids » est :", options: ["un argument important et convaincant", "un argument exagéré", "un argument difficile à comprendre"], answer: 0, explication: "« De poids » signifie ici « important, qui compte »." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Une chronique à la radio",
          duree: "30 min",
          consigne: "Écoute cette chronique radio sur les écrans et les jeunes enfants. Concentre-toi sur les différentes opinions et sur celle du chroniqueur.",
          transcription: "Bonjour à tous. Ce matin, je voudrais revenir sur un sujet qui divise les familles : le temps d’écran des tout-petits. Faut-il s’en inquiéter ? Les pédiatres que nous avons interrogés sont plutôt prudents. La plupart estiment qu’il ne faut pas diaboliser les écrans, mais qu’il est essentiel que les parents fixent des limites claires, surtout avant trois ans. D’autres vont plus loin et recommandent de supprimer complètement les écrans pendant les repas et avant le coucher, car ils perturberaient le sommeil. Pour ma part, ce qui me frappe, c’est que le débat oppose souvent deux camps qui ne s’écoutent pas. Or, la vraie question n’est peut-être pas combien de temps, mais comment. Regarder un dessin animé seul, ce n’est pas la même chose que le regarder avec un adulte qui en parle avec l’enfant. Bonne journée à tous.",
          questions: [
            { q: "Quel est le sujet de la chronique ?", options: ["Le téléphone au lycée", "Le temps d’écran des jeunes enfants", "Les dessins animés violents"], answer: 1, explication: "« Le temps d’écran des tout-petits »." },
            { q: "Que pensent la plupart des pédiatres ?", options: ["Il faut interdire les écrans.", "Il ne faut pas diaboliser les écrans, mais fixer des limites.", "Les écrans sont sans danger."], answer: 1, explication: "Diaboliser : présenter quelque chose comme entièrement mauvais." },
            { q: "Pourquoi certains recommandent-ils d’éviter les écrans avant le coucher ?", options: ["Ils perturberaient le sommeil.", "Ils rendraient les enfants agressifs.", "Ils fatigueraient les yeux."], answer: 0, explication: "Encore un conditionnel de prudence : c’est leur avis, pas un fait présenté comme certain." },
            { q: "Selon le chroniqueur, quelle est la vraie question ?", options: ["La durée passée devant l’écran", "La manière dont l’enfant regarde", "L’âge de l’enfant"], answer: 1, explication: "« Pas combien de temps, mais comment. » Le connecteur « or » introduit son point de vue." }
          ]
        },
        {
          type: "association",
          titre: "Vocabulaire",
          sousTitre: "Le vocabulaire du débat",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "être favorable à", definition: "soutenir une idée, être pour" },
            { terme: "s’opposer à", definition: "être contre, refuser une idée" },
            { terme: "réfuter un argument", definition: "démontrer qu’un argument est faux" },
            { terme: "concéder", definition: "reconnaître qu’un argument adverse a une part de vérité" },
            { terme: "un enjeu", definition: "ce que l’on peut gagner ou perdre dans une situation" },
            { terme: "à double tranchant", definition: "qui peut avoir des effets positifs comme négatifs" },
            { terme: "faire consensus", definition: "être accepté par la plupart des gens" },
            { terme: "nuancer", definition: "rendre un propos moins catégorique" }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Indicatif ou subjonctif ?",
          duree: "45 min",
          regles: ["subjonctif-emploi", "subjonctif-formation"],
          fiche: `
            <p>Pour donner son avis, le choix du mode compte. L’<strong>indicatif</strong> présente un fait comme certain ou affirmé (<em>je pense que, il est évident que, j’espère que</em>). Le <strong>subjonctif</strong> présente l’action comme souhaitée, nécessaire, possible ou douteuse (<em>il faut que, je doute que, il est possible que, bien que</em>).</p>
            <p class="ex">Je pense qu’il <strong>a</strong> raison. Je ne pense pas qu’il <strong>ait</strong> raison.</p>`,
          consigne: "Choisis la forme qui convient.",
          phrases: [
            { avant: "Je pense que l’école", options: ["doit", "doive"], answer: 0, apres: "protéger les élèves.", explication: "« Je pense que » à la forme affirmative : indicatif." },
            { avant: "Je ne pense pas que l’interdiction", options: ["soit", "est"], answer: 0, apres: "la bonne solution.", explication: "À la forme négative, « penser que » est en général suivi du subjonctif." },
            { avant: "Il est évident que les écrans", options: ["ont", "aient"], answer: 0, apres: "des effets sur le sommeil.", explication: "La certitude appelle l’indicatif." },
            { avant: "Il faut que les parents", options: ["fixent", "fixeront"], answer: 0, apres: "des limites claires.", explication: "« Il faut que » : toujours le subjonctif." },
            { avant: "Bien que cette mesure", options: ["soit", "est"], answer: 0, apres: "populaire, elle reste difficile à appliquer.", explication: "« Bien que » est toujours suivi du subjonctif." },
            { avant: "J’espère que les élèves", options: ["feront", "fassent"], answer: 0, apres: "bon usage de leur téléphone.", explication: "Attention : « espérer que » est suivi de l’indicatif." },
            { avant: "Je doute que cette loi", options: ["puisse", "peut"], answer: 0, apres: "changer les habitudes.", explication: "Le doute appelle le subjonctif." },
            { avant: "Il est possible que l’expérience", options: ["réussisse", "réussit"], answer: 0, apres: "dans certains lycées.", explication: "La possibilité appelle le subjonctif, contrairement à la probabilité (« il est probable que » + indicatif)." }
          ]
        },
        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Un court essai argumenté",
          duree: "1 h 15",
          regles: ["connecteurs-logiques", "donner-son-avis", "subjonctif-emploi"],
          consigne: "Faut-il interdire le téléphone portable au lycée ? Rédige un court essai : une introduction qui pose la question, deux ou trois arguments illustrés par des exemples, une concession, puis une conclusion qui donne ta position.",
          min: 220,
          max: 280,
          checklist: [
            "L’introduction présente le sujet et pose la question",
            "Chaque argument est relié par un connecteur logique",
            "Au moins un exemple concret",
            "Une concession : certes…, mais… ou bien que…",
            "Au moins deux subjonctifs bien employés",
            "Une conclusion qui donne clairement ma position",
            "Un registre courant ou soutenu, sans expressions familières"
          ],
          modele: `Depuis 2018, le téléphone portable est interdit dans les écoles et les collèges français. Faut-il aller plus loin et étendre cette interdiction aux lycées ? La question divise, car elle oppose deux visions de l’éducation.

D’un côté, il est évident que le téléphone nuit à la concentration. Une simple notification suffit à détourner l’attention d’un élève, qui met ensuite plusieurs minutes à se remettre au travail. De plus, l’omniprésence des écrans appauvrit les relations entre adolescents : dans certaines cours, on ne se parle presque plus.

Certes, une interdiction totale serait difficile à faire respecter auprès d’élèves presque majeurs. Il serait également absurde de priver les lycéens d’un outil qui leur permet de chercher une information ou de réviser une langue. Je ne pense pas pour autant que ces arguments justifient le statu quo.

Il me semble en effet qu’une solution intermédiaire est possible. Les établissements pourraient interdire le téléphone pendant les cours et les pauses, tout en l’autorisant pour des activités encadrées par un enseignant. Il faudrait aussi que l’école propose de véritables ateliers d’éducation aux médias, afin que les élèves apprennent à maîtriser leur usage plutôt qu’à le subir.

En définitive, interdire ne suffit pas : il est indispensable que l’école enseigne aussi à vivre avec les écrans. C’est à cette condition qu’une règle, même stricte, pourra être comprise et acceptée.`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Donner son avis en une minute trente",
          duree: "40 min",
          consigne: "Lors d’un débat en classe, on te demande ton avis : faut-il interdire le téléphone portable au lycée ? Prends position, donne deux arguments avec un exemple, fais une concession et conclus.",
          preparation: ["À mon avis, …", "D’un côté, … De l’autre, …", "Prenons un exemple : …", "Certes, …, mais…", "Je ne pense pas que + subjonctif", "Pour conclure, je dirais que…"],
          dureeCible: "1 minute 30",
          modele: "À mon avis, interdire complètement le téléphone au lycée serait une erreur, mais il faut des règles claires. D’un côté, je comprends les enseignants : quand un élève regarde ses notifications, il ne suit plus le cours. De l’autre, le téléphone peut être un véritable outil de travail. Prenons un exemple : en cours de langue, on peut écouter un podcast ou vérifier un mot rapidement. Certes, certains élèves en abusent, mais je ne pense pas que l’interdiction soit la meilleure réponse. Il vaudrait mieux leur apprendre à l’utiliser intelligemment. Pour conclure, je dirais : oui à des règles, non à une interdiction totale.",
          checklist: ["Ma position est claire dès le début", "Deux arguments reliés par des connecteurs", "Un exemple concret", "Une concession : certes…, mais…", "Au moins un subjonctif bien employé", "Une conclusion", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 12,
      niveau: "b2",
      theme: "Information, géopolitique et histoire",
      titre: "L’Europe, une construction pas à pas",
      objectif: "Comprendre un texte historique, utiliser la voix passive, résumer sans donner son avis.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "De la guerre à l’Union européenne",
          duree: "45 min",
          texte: [
            "Au lendemain de la Seconde Guerre mondiale, l’Europe est en ruines. Comment empêcher qu’une nouvelle guerre éclate entre la France et l’Allemagne ? Le 9 mai 1950, le ministre français des Affaires étrangères, Robert Schuman, propose une idée audacieuse : mettre en commun la production de charbon et d’acier, deux ressources indispensables à l’industrie… et à l’armement.",
            "L’idée aboutit en 1951 à la Communauté européenne du charbon et de l’acier (CECA), qui réunit six pays : la France, l’Allemagne de l’Ouest, l’Italie, la Belgique, les Pays-Bas et le Luxembourg. En 1957, ces mêmes pays signent les traités de Rome, qui créent la Communauté économique européenne : les marchandises doivent pouvoir circuler librement entre eux.",
            "Au cours des décennies suivantes, la communauté s’élargit et s’approfondit. Le traité de Maastricht, signé en 1992, donne naissance à l’Union européenne et prévoit une monnaie commune. Depuis le 1er janvier 2002, les pièces et les billets en euros ont remplacé le franc, le mark ou la lire dans la vie quotidienne de millions d’Européens.",
            "Aujourd’hui, l’Union compte vingt-sept États membres. Elle reste pourtant l’objet de vifs débats : certains lui reprochent d’être trop éloignée des citoyens, d’autres regrettent qu’elle ne soit pas plus unie face aux grandes puissances. Le Royaume-Uni l’a d’ailleurs quittée en 2020. Une chose est sûre : la paix entre ses membres, qui semblait improbable en 1945, est devenue une évidence."
          ],
          questions: [
            { q: "Quel était l’objectif principal de la proposition de Robert Schuman ?", options: ["Développer le tourisme", "Empêcher une nouvelle guerre entre la France et l’Allemagne", "Créer une monnaie commune"], answer: 1, explication: "La question posée dans le premier paragraphe annonce cet objectif." },
            { q: "Pourquoi mettre en commun le charbon et l’acier ?", options: ["Parce qu’ils sont indispensables à l’industrie et à l’armement", "Parce que ce sont les seules ressources de l’Europe", "Parce qu’ils sont bon marché"], answer: 0, explication: "Contrôler ensemble ces ressources rendait une guerre beaucoup plus difficile." },
            { q: "Que crée le traité de Maastricht ?", options: ["La CECA", "L’Union européenne", "Les traités de Rome"], answer: 1, explication: "Signé en 1992, il prévoit aussi la monnaie commune." },
            { q: "« La communauté s’élargit et s’approfondit » signifie :", options: ["Elle accueille de nouveaux pays et renforce sa coopération.", "Elle devient seulement plus grande.", "Elle se divise."], answer: 0, explication: "S’élargir : plus de membres. S’approfondir : plus de domaines communs." },
            { q: "Quel ton l’auteur adopte-t-il dans la conclusion ?", options: ["Très critique", "Nuancé, mais positif sur la paix", "Indifférent"], answer: 1, explication: "Il mentionne les critiques, puis souligne un acquis : la paix." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Pourquoi le 14 Juillet ?",
          duree: "25 min",
          consigne: "Écoute cette courte chronique historique à la radio.",
          transcription: "Pourquoi les Français font-ils la fête le 14 juillet ? On pense souvent qu’ils célèbrent la prise de la Bastille, le 14 juillet 1789, quand le peuple de Paris s’est emparé de cette prison, symbole du pouvoir du roi. C’est vrai… mais seulement en partie. Quand la fête nationale a été instituée, en 1880, les députés ont aussi voulu rappeler la fête de la Fédération, organisée le 14 juillet 1790, un an après la prise de la Bastille, pour célébrer l’unité de la nation. Un double anniversaire, donc ! Aujourd’hui, la journée commence par le défilé militaire sur les Champs-Élysées et se termine par des feux d’artifice et des bals populaires, souvent organisés par les pompiers. Une fête à la fois solennelle et joyeuse.",
          questions: [
            { q: "Que s’est-il passé le 14 juillet 1789 ?", options: ["La prise de la Bastille", "La fête de la Fédération", "La création de la fête nationale"], answer: 0, explication: "Le peuple de Paris s’est emparé de la prison." },
            { q: "Quand la fête nationale a-t-elle été instituée ?", options: ["En 1790", "En 1880", "En 1945"], answer: 1, explication: "Près d’un siècle après la Révolution." },
            { q: "Pourquoi parle-t-on d’un « double anniversaire » ?", options: ["Il rappelle la prise de la Bastille et la fête de la Fédération.", "Il y a deux défilés.", "On le fête dans deux villes."], answer: 0, explication: "1789 et 1790." },
            { q: "Qui organise souvent les bals du 14 Juillet ?", options: ["Les mairies", "Les pompiers", "L’armée"], answer: 1, explication: "Les « bals des pompiers » sont une tradition très populaire." }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "La voix passive",
          duree: "40 min",
          regles: ["voix-passive", "accord-participe-passe"],
          fiche: `
            <p>La voix passive met en avant ce qui <strong>subit</strong> l’action : <em>être</em> (au temps du verbe actif) + participe passé accordé avec le sujet.</p>
            <p class="ex">Les six pays <strong>créent</strong> la CECA. → La CECA <strong>est créée</strong> par les six pays.<br>On <strong>a signé</strong> les traités. → Les traités <strong>ont été signés</strong>.</p>`,
          consigne: "Choisis la forme qui convient.",
          phrases: [
            { avant: "La CECA", options: ["a été créée", "a créé", "est créant"], answer: 0, apres: "en 1951.", explication: "Passé composé passif : a été + participe accordé (créée, féminin)." },
            { avant: "Les traités de Rome", options: ["ont été signés", "ont signé", "sont signant"], answer: 0, apres: "en 1957.", explication: "Les traités subissent l’action : ont été signés (masculin pluriel)." },
            { avant: "L’euro", options: ["est utilisé", "utilise", "est utilisant"], answer: 0, apres: "par des millions d’Européens.", explication: "Présent passif : est + participe passé." },
            { avant: "La Bastille", options: ["a été prise", "a pris", "est prenant"], answer: 0, apres: "par le peuple de Paris.", explication: "Participe passé de prendre, accordé au féminin : prise." },
            { avant: "La loi", options: ["sera votée", "votera", "sera voter"], answer: 0, apres: "par le Parlement le mois prochain.", explication: "Futur passif : sera + participe passé." },
            { avant: "Ce traité est connu", options: ["de", "par", "à"], answer: 0, apres: "tous les historiens.", explication: "Avec connaître, aimer, respecter…, le complément d’agent est souvent introduit par de." },
            { avant: "Les nouvelles règles", options: ["ont été adoptées", "ont été adoptés", "ont adoptées"], answer: 0, apres: "l’an dernier.", explication: "Accord avec le sujet féminin pluriel : adoptées." },
            { avant: "Le mur de Berlin", options: ["a été ouvert", "a ouvert", "est ouvrant"], answer: 0, apres: "le 9 novembre 1989.", explication: "Passé composé passif." }
          ]
        },
        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Résumer un texte historique",
          duree: "50 min",
          regles: ["voix-passive", "nominalisation"],
          consigne: "Résume le texte « De la guerre à l’Union européenne » sans donner ton avis. Reformule avec tes propres mots : ne recopie pas de phrases entières.",
          min: 100,
          max: 130,
          checklist: [
            "Les idées essentielles, dans l’ordre du texte",
            "Aucune opinion personnelle",
            "Pas de phrase recopiée",
            "Au moins deux phrases à la voix passive",
            "Des connecteurs pour relier les étapes",
            "Le texte respecte la longueur demandée"
          ],
          modele: `Après la Seconde Guerre mondiale, Robert Schuman propose en 1950 de mettre en commun le charbon et l’acier afin de rendre impossible un nouveau conflit franco-allemand. Ce projet aboutit en 1951 à la CECA, qui rassemble six pays. Six ans plus tard, un marché commun est instauré par les traités de Rome.

La coopération se développe ensuite progressivement : l’Union européenne est fondée par le traité de Maastricht en 1992, puis l’euro remplace les monnaies nationales en 2002.

Aujourd’hui composée de vingt-sept États, l’Union suscite des critiques, et le Royaume-Uni s’en est retiré en 2020. Elle a cependant rendu la paix durable entre ses membres.`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter un événement historique",
          duree: "40 min",
          consigne: "Comme dans un court exposé, présente un événement historique important de ton pays ou du monde : la date, le contexte, ce qui s’est passé et ses conséquences.",
          preparation: ["Je vais vous présenter…", "Pour comprendre cet événement, il faut savoir que…", "Le …, …", "Cet événement a eu pour conséquence…", "Il a été suivi de…", "Aujourd’hui encore, …"],
          dureeCible: "1 minute 30 à 2 minutes",
          modele: "Je vais vous présenter la chute du mur de Berlin. Pour comprendre cet événement, il faut savoir qu’après la Seconde Guerre mondiale, l’Allemagne était divisée en deux pays, et que Berlin était coupée par un mur depuis 1961. Le soir du 9 novembre 1989, après des semaines de manifestations, les autorités de l’Allemagne de l’Est annoncent que les habitants peuvent franchir la frontière. Des milliers de Berlinois se précipitent vers le mur, et les postes de contrôle sont ouverts dans la nuit. Cet événement a eu pour conséquence la réunification de l’Allemagne, moins d’un an plus tard, le 3 octobre 1990. Aujourd’hui encore, il symbolise la fin de la guerre froide en Europe.",
          checklist: ["J’ai annoncé le sujet", "J’ai donné le contexte", "J’ai raconté les faits avec des dates précises", "J’ai présenté au moins une conséquence", "Au moins une phrase à la voix passive", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 13,
      niveau: "b2",
      theme: "Droits humains",
      titre: "Les droits de l’homme, de 1789 à aujourd’hui",
      objectif: "Comprendre l’histoire des droits fondamentaux et défendre une valeur avec des arguments.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "Deux déclarations qui ont changé le monde",
          duree: "45 min",
          texte: [
            "Le 26 août 1789, quelques semaines après la prise de la Bastille, l’Assemblée nationale adopte la Déclaration des droits de l’homme et du citoyen. Son premier article est resté célèbre : « Les hommes naissent et demeurent libres et égaux en droits. » Pour la première fois en France, un texte affirme que ces droits appartiennent à chaque individu, et non au bon vouloir d’un roi.",
            "Ce texte fondateur a pourtant ses limites. Les femmes n’y sont pas réellement incluses : en 1791, Olympe de Gouges publie une Déclaration des droits de la femme et de la citoyenne pour le dénoncer. L’esclavage, lui, n’est définitivement aboli dans les colonies françaises qu’en 1848, et les Françaises n’obtiennent le droit de vote qu’en 1944.",
            "Après les horreurs de la Seconde Guerre mondiale, la communauté internationale veut aller plus loin. Le 10 décembre 1948, à Paris, l’Assemblée générale des Nations unies adopte la Déclaration universelle des droits de l’homme. Le juriste français René Cassin participe activement à sa rédaction, aux côtés notamment de l’Américaine Eleanor Roosevelt et du Chinois Zhang Pengchun. Le texte proclame des droits civils et politiques, mais aussi économiques et sociaux, comme le droit à l’éducation.",
            "Ces déclarations ne suffisent pas à garantir le respect des droits dans les faits. Elles servent néanmoins de référence commune : c’est en leur nom que des citoyens, des associations ou des juges peuvent aujourd’hui dénoncer une injustice."
          ],
          questions: [
            { q: "Quelle idée nouvelle la Déclaration de 1789 affirme-t-elle ?", options: ["Les droits appartiennent à chaque individu.", "Le roi décide des droits de chacun.", "Seuls les citoyens riches ont des droits."], answer: 0, explication: "« Et non au bon vouloir d’un roi »." },
            { q: "Pourquoi Olympe de Gouges écrit-elle sa propre déclaration ?", options: ["Pour dénoncer l’exclusion des femmes", "Pour soutenir le roi", "Pour abolir l’esclavage"], answer: 0, explication: "Le titre même de son texte répond à celui de 1789." },
            { q: "En quelle année les Françaises obtiennent-elles le droit de vote ?", options: ["1848", "1944", "1789"], answer: 1, explication: "1848 est la date de l’abolition définitive de l’esclavage." },
            { q: "Quelle nouveauté apporte la Déclaration de 1948 ?", options: ["Elle ajoute des droits économiques et sociaux.", "Elle ne concerne que la France.", "Elle remplace celle de 1789."], answer: 0, explication: "Par exemple, le droit à l’éducation." },
            { q: "Selon la conclusion, à quoi servent ces déclarations ?", options: ["Elles garantissent automatiquement le respect des droits.", "Elles servent de référence pour dénoncer les injustices.", "Elles permettent de punir les États."], answer: 1, explication: "« Néanmoins » introduit leur utilité, malgré leurs limites." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "Portrait : Simone Veil",
          duree: "30 min",
          consigne: "Écoute ce portrait radiophonique d’une grande figure française.",
          transcription: "Aujourd’hui, notre portrait est consacré à Simone Veil. Née à Nice en 1927, elle est déportée à Auschwitz à seize ans avec sa famille, parce qu’elle est juive. Elle survit, mais perd sa mère, son père et son frère. Après la guerre, elle devient magistrate. En 1974, elle est nommée ministre de la Santé et défend devant les députés, dans un climat très hostile, la loi sur l’interruption volontaire de grossesse, adoptée au début de l’année 1975. En 1979, elle devient la première présidente du Parlement européen élu au suffrage universel. Européenne convaincue, elle voyait dans l’union des peuples la meilleure garantie contre le retour de la barbarie. Elle repose depuis 2018 au Panthéon, aux côtés de son mari.",
          questions: [
            { q: "Quel âge avait Simone Veil lorsqu’elle a été déportée ?", options: ["Seize ans", "Vingt ans", "Douze ans"], answer: 0, explication: "Elle est née en 1927 et a été déportée en 1944." },
            { q: "Quel métier exerce-t-elle après la guerre ?", options: ["Avocate", "Magistrate", "Journaliste"], answer: 1, explication: "Un magistrat travaille dans la justice : juge ou procureur, par exemple." },
            { q: "Quelle fonction occupe-t-elle à partir de 1979 ?", options: ["Ministre de la Santé", "Présidente du Parlement européen", "Députée"], answer: 1, explication: "La première présidente du Parlement européen élu au suffrage universel." },
            { q: "Selon elle, quelle était la meilleure protection contre la barbarie ?", options: ["L’union des peuples européens", "L’armée", "La croissance économique"], answer: 0, explication: "On retrouve ici l’idée de la construction européenne." }
          ]
        },
        {
          type: "association",
          titre: "Vocabulaire",
          sousTitre: "Le vocabulaire des droits",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            { terme: "un droit fondamental", definition: "un droit essentiel que possède tout être humain" },
            { terme: "abolir", definition: "supprimer officiellement une loi ou une pratique" },
            { terme: "l’égalité", definition: "le fait d’avoir les mêmes droits que les autres" },
            { terme: "une discrimination", definition: "un traitement injuste fondé sur une différence (origine, sexe…)" },
            { terme: "dénoncer", definition: "révéler publiquement quelque chose d’injuste" },
            { terme: "le suffrage universel", definition: "le droit de vote accordé à tous les citoyens adultes" },
            { terme: "une association", definition: "un groupe de personnes réunies autour d’un but commun, sans chercher le profit" },
            { terme: "militer", definition: "agir activement pour défendre une cause" }
          ]
        },
        {
          type: "ecriture",
          titre: "Écrire",
          sousTitre: "Défendre un droit dans le courrier des lecteurs",
          duree: "1 h",
          regles: ["connecteurs-logiques", "subjonctif-emploi"],
          consigne: "Un magazine pose cette question à ses lecteurs : « Quel droit fondamental vous semble le plus important ? » Écris ta contribution : choisis un droit, justifie ton choix avec deux arguments et un exemple, puis conclus.",
          min: 140,
          max: 200,
          checklist: [
            "Le droit choisi est annoncé clairement",
            "Deux arguments, reliés par des connecteurs",
            "Un exemple précis",
            "Une concession ou une nuance",
            "Au moins un subjonctif après il faut que, pour que, bien que…",
            "Une conclusion qui reprend la position"
          ],
          modele: `Parmi tous les droits proclamés en 1948, celui qui me semble le plus essentiel est le droit à l’éducation.

D’abord, l’éducation rend possibles tous les autres droits. Comment défendre sa liberté d’expression si l’on ne sait pas lire ? Comment voter librement si l’on ne peut pas comprendre un programme ? Savoir lire, écrire et compter, c’est pouvoir participer à la vie de la société.

Ensuite, l’éducation est le meilleur outil contre les inégalités. Dans de nombreux pays, scolariser les filles a permis de faire reculer la pauvreté et d’améliorer la santé des familles. Une génération instruite transforme un pays entier.

Certes, l’éducation ne suffit pas : sans liberté ni sécurité, apprendre devient impossible. Mais pour que ces droits soient défendus durablement, il faut que chaque citoyen sache les connaître et les revendiquer.

C’est pourquoi l’éducation n’est pas un droit parmi d’autres : c’est la clé qui ouvre toutes les portes.`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Défendre une valeur à l’oral",
          duree: "40 min",
          consigne: "Choisis un article de la Déclaration universelle (droit à l’éducation, liberté d’expression, égalité entre les femmes et les hommes…) et explique pourquoi il te semble essentiel, avec un exemple.",
          preparation: ["J’ai choisi de vous parler de…", "Ce droit me semble essentiel parce que…", "Prenons l’exemple de…", "Sans ce droit, …", "Il faut que + subjonctif", "C’est pourquoi je pense que…"],
          dureeCible: "1 minute 30",
          modele: "J’ai choisi de vous parler de l’égalité entre les femmes et les hommes. Ce droit me semble essentiel parce qu’il concerne la moitié de l’humanité. Prenons l’exemple du droit de vote : en France, les femmes ne l’ont obtenu qu’en 1944, plus d’un siècle et demi après la Déclaration de 1789. Cela montre qu’un droit écrit dans un texte n’est pas forcément appliqué. Aujourd’hui encore, les femmes sont souvent moins bien payées que les hommes pour le même travail. Sans égalité réelle, la liberté reste incomplète. Il faut donc que chacun, à son niveau, refuse les discriminations. C’est pourquoi je pense que ce combat nous concerne tous.",
          checklist: ["J’ai annoncé le droit choisi", "Au moins deux justifications", "Un exemple précis, avec une date ou un fait", "Au moins un subjonctif", "Une conclusion claire", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      id: 14,
      niveau: "b2",
      theme: "Culture, littérature et francophonie",
      chine: true,
      titre: "François Cheng, un pont entre deux langues",
      objectif: "Découvrir un parcours d’écrivain, comprendre la francophonie, présenter une œuvre.",
      activites: [
        {
          type: "lecture",
          titre: "Lire",
          sousTitre: "De Nanchang à l’Académie française",
          duree: "45 min",
          texte: [
            "En 2002, l’Académie française, gardienne de la langue française depuis 1635, accueille un nouveau membre au parcours singulier : François Cheng. Né en 1929 en Chine, dans la province du Jiangxi, il est le premier écrivain d’origine asiatique à rejoindre l’institution.",
            "Rien ne le destinait pourtant à devenir un grand écrivain de langue française. Arrivé à Paris en 1949, à vingt ans, il ne parle presque pas le français. Il vit modestement, apprend la langue avec acharnement, lit les poètes et fréquente les musées. Pendant des années, il traduit en français la poésie chinoise classique, et des poètes français en chinois.",
            "Ce n’est qu’à près de soixante-dix ans qu’il publie son premier roman, Le Dit de Tianyi, qui reçoit le prix Femina en 1998. Il y raconte le destin d’un peintre chinois partagé entre deux mondes. Suivront des recueils de poèmes et des essais, notamment sur la beauté et sur la mort, qui touchent un large public.",
            "François Cheng a souvent évoqué ce que la langue française lui avait apporté : là où le chinois suggère par images, le français lui permet d’analyser et de nommer avec précision. On le présente volontiers comme un passeur entre deux cultures. Son parcours offre une belle définition de la francophonie : on peut appartenir à une langue non seulement par sa naissance, mais aussi par choix."
          ],
          questions: [
            { q: "Pourquoi l’élection de François Cheng en 2002 est-elle remarquable ?", options: ["Il est le premier écrivain d’origine asiatique à l’Académie française.", "Il est le plus jeune membre de l’Académie.", "Il est le premier traducteur élu."], answer: 0, explication: "L’Académie existe depuis 1635." },
            { q: "Comment a-t-il appris le français ?", options: ["À l’université, en Chine", "Seul, avec acharnement, par la lecture et les musées", "Avec un professeur particulier"], answer: 1, explication: "« Avec acharnement » : avec beaucoup d’efforts, sans abandonner." },
            { q: "Quel a été son premier grand travail littéraire ?", options: ["La traduction de poésie", "Un roman policier", "Le journalisme"], answer: 0, explication: "Il traduit la poésie chinoise en français et des poètes français en chinois." },
            { q: "Que raconte Le Dit de Tianyi ?", options: ["Le destin d’un peintre chinois partagé entre deux mondes", "L’histoire de l’Académie française", "Un voyage touristique en Europe"], answer: 0, explication: "Un roman qui fait écho au parcours de l’auteur." },
            { q: "Selon la conclusion, la francophonie est :", options: ["seulement une affaire de naissance", "aussi une affaire de choix", "réservée aux Français"], answer: 1, explication: "« Non seulement par sa naissance, mais aussi par choix »." }
          ]
        },
        {
          type: "ecoute",
          titre: "Écouter",
          sousTitre: "La francophonie en quelques chiffres",
          duree: "25 min",
          consigne: "Écoute cette courte présentation de la francophonie.",
          transcription: "Savez-vous combien de personnes parlent français dans le monde ? Selon l’Organisation internationale de la Francophonie, elles sont aujourd’hui plus de trois cents millions, sur les cinq continents. Et contrairement à une idée reçue, la majorité d’entre elles ne vivent pas en Europe, mais en Afrique. Le français est langue officielle, seul ou avec d’autres langues, dans une trentaine de pays, de la Belgique au Sénégal, de la Suisse au Canada, où il est notamment la langue du Québec. L’Organisation internationale de la Francophonie, dont l’ancêtre a été créé en 1970, réunit aujourd’hui près de quatre-vingt-dix États et gouvernements. Chaque année, le 20 mars, la Journée internationale de la francophonie célèbre cette langue partagée et toutes ses variantes : on ne parle pas exactement le même français à Montréal, à Dakar ou à Bruxelles !",
          questions: [
            { q: "Combien de personnes parlent français dans le monde ?", options: ["Environ cent millions", "Plus de trois cents millions", "Un milliard"], answer: 1, explication: "Selon l’Organisation internationale de la Francophonie." },
            { q: "Où vit la majorité des francophones ?", options: ["En Europe", "En Afrique", "En Amérique"], answer: 1, explication: "« Contrairement à une idée reçue » annonce une information surprenante." },
            { q: "Le Québec est :", options: ["un pays indépendant", "une province du Canada", "une ville de Belgique"], answer: 1, explication: "Le français y est la langue officielle." },
            { q: "Que célèbre-t-on le 20 mars ?", options: ["La Journée internationale de la francophonie", "La fête nationale du Québec", "La création de l’Académie française"], answer: 0, explication: "Avec toutes les variantes du français." }
          ]
        },
        {
          type: "trous",
          titre: "Grammaire",
          sousTitre: "Qui, que, dont, où",
          duree: "40 min",
          regles: ["pronoms-relatifs"],
          fiche: `
            <p><strong>qui</strong> : sujet du verbe qui suit. <strong>que</strong> : complément d’objet direct. <strong>dont</strong> : remplace un complément introduit par <em>de</em>. <strong>où</strong> : un lieu ou un moment.</p>
            <p class="ex">L’écrivain <strong>dont</strong> je parle (parler <em>de</em>). La ville <strong>où</strong> il est né. L’année <strong>où</strong> il est arrivé.</p>`,
          consigne: "Choisis le pronom relatif qui convient.",
          phrases: [
            { avant: "François Cheng est un écrivain", options: ["qui", "que", "dont"], answer: 0, apres: "est né en Chine.", explication: "Le pronom est sujet de « est né » : qui." },
            { avant: "Le roman", options: ["que", "qui", "dont"], answer: 0, apres: "je lis raconte la vie d’un peintre.", explication: "« Je lis le roman » : complément d’objet direct, donc que." },
            { avant: "C’est un auteur", options: ["dont", "que", "où"], answer: 0, apres: "on parle beaucoup.", explication: "Parler de quelqu’un : dont." },
            { avant: "La ville", options: ["où", "dont", "que"], answer: 0, apres: "il est né s’appelle Nanchang.", explication: "Un lieu : où." },
            { avant: "L’Académie française est une institution", options: ["dont", "que", "qui"], answer: 0, apres: "le rôle est de protéger la langue.", explication: "Le rôle de l’institution : dont." },
            { avant: "1949 est l’année", options: ["où", "que", "dont"], answer: 0, apres: "il est arrivé à Paris.", explication: "Un moment : où (jamais « l’année que »)." },
            { avant: "Voici les poèmes", options: ["que", "qui", "dont"], answer: 0, apres: "mon professeur préfère.", explication: "« Mon professeur préfère ces poèmes » : que." },
            { avant: "C’est la langue", options: ["dont", "que", "où"], answer: 0, apres: "il est tombé amoureux.", explication: "Tomber amoureux de : dont." }
          ]
        },
        {
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
          modele: `Zao Wou-Ki est un peintre dont l’œuvre réunit la tradition chinoise et l’art moderne occidental.

Né à Pékin en 1920, il étudie la peinture à l’École des beaux-arts de Hangzhou, où il découvre aussi les impressionnistes grâce à des cartes postales. En 1948, il s’installe à Paris, la ville dont il rêvait depuis longtemps. Il y rencontre de nombreux artistes et visite inlassablement les musées.

Au fil des années, il abandonne la figuration pour une peinture abstraite, faite de couleurs, de lumière et de mouvement, qui rappelle pourtant les paysages à l’encre de son enfance. Naturalisé français en 1964, il entre à l’Académie des beaux-arts en 2002.

Zao Wou-Ki n’a jamais choisi entre ses deux cultures : il les a fait dialoguer. C’est ce qui rend sa peinture si singulière, et c’est aussi pour cela qu’elle me touche autant.`
        },
        {
          type: "oral",
          titre: "Parler",
          sousTitre: "Présenter une œuvre chinoise",
          duree: "40 min",
          consigne: "Présente à des amis français un livre, un film ou un artiste chinois que tu aimes : de quoi il s’agit, pourquoi c’est important, ce qui te plaît et à qui tu le recommandes.",
          preparation: ["Je voudrais vous parler de…", "C’est un auteur / un film qui…", "L’histoire se passe…", "Ce qui est intéressant, c’est que…", "Ce qui me touche, c’est…", "Je le recommande à ceux qui…"],
          dureeCible: "1 minute 30 à 2 minutes",
          modele: "Je voudrais vous parler de Lu Xun, un écrivain que tous les élèves chinois étudient à l’école. Il a vécu de 1881 à 1936, à une époque où la Chine changeait profondément. En 1918, il publie Le Journal d’un fou, une nouvelle considérée comme l’une des premières œuvres de la littérature chinoise moderne, parce qu’elle est écrite dans la langue parlée et non dans la langue classique. Ce qui est intéressant, c’est que ses textes sont à la fois drôles et très critiques envers la société de son temps. Son personnage le plus célèbre, Ah Q, est devenu un symbole. Je le recommande à ceux qui veulent comprendre la Chine du vingtième siècle.",
          checklist: ["J’ai présenté l’œuvre ou l’artiste", "J’ai situé dans le temps", "J’ai expliqué son importance", "J’ai donné mon avis personnel", "Au moins deux pronoms relatifs", "Le navigateur a compris la plupart de mes mots"]
        }
      ]
    },

    {
      "id": 15,
      "niveau": "b2",
      "theme": "Culture, littérature et francophonie",
      "titre": "Les voix de la francophonie",
      "objectif": "Découvrir des auteurs d’Afrique, du Québec et des Caraïbes.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Le français, une langue qui n’appartient pas qu’à la France",
          "duree": "45 min",
          "texte": [
            "On compte aujourd’hui plus de trois cents millions de francophones dans le monde, et la majorité d’entre eux ne vivent pas en France. Le français est langue officielle dans une trentaine de pays, du Québec au Sénégal, de la Belgique à Madagascar. Selon les projections démographiques, l’Afrique pourrait rassembler la grande majorité des francophones d’ici quelques décennies.",
            "Cette diversité se retrouve dans la littérature. Dans les années 1930, des étudiants venus des colonies, comme le Sénégalais Léopold Sédar Senghor et le Martiniquais Aimé Césaire, inventent à Paris le mouvement de la négritude. Ils revendiquent la fierté des cultures africaines et dénoncent le colonialisme… en français. Senghor deviendra le premier président du Sénégal, puis, en 1983, le premier Africain élu à l’Académie française.",
            "D’autres écrivains ont suivi des chemins différents. Né en Haïti, installé à Montréal, Dany Laferrière écrit avec humour sur l’exil et le déracinement ; il entre lui aussi à l’Académie française en 2013. La Guadeloupéenne Maryse Condé, qui a vécu en Afrique et aux États-Unis, a raconté dans ses romans les histoires croisées de l’Afrique et des Caraïbes.",
            "Pour ces auteurs, écrire en français n’est pas imiter Paris. C’est au contraire transformer la langue, y faire entrer d’autres rythmes, d’autres mots, d’autres façons de voir le monde. Comme on le dit souvent, le français a « plusieurs centres », et c’est peut-être ce qui le garde vivant."
          ],
          "questions": [
            {
              "q": "Où vit la majorité des francophones ?",
              "options": [
                "En France",
                "Hors de France",
                "En Belgique"
              ],
              "answer": 1,
              "explication": "« La majorité d’entre eux ne vivent pas en France. »"
            },
            {
              "q": "Qu’est-ce que la négritude ?",
              "options": [
                "Un mouvement littéraire qui revendique la fierté des cultures africaines",
                "Une école de langue à Dakar",
                "Un journal parisien"
              ],
              "answer": 0,
              "explication": "Créé dans les années 1930 par Senghor, Césaire et d’autres."
            },
            {
              "q": "Quel point commun ont Senghor et Laferrière ?",
              "options": [
                "Ils sont nés en Haïti.",
                "Ils ont été élus à l’Académie française.",
                "Ils ont été présidents."
              ],
              "answer": 1,
              "explication": "Senghor en 1983, Laferrière en 2013."
            },
            {
              "q": "Pour ces auteurs, écrire en français, c’est…",
              "options": [
                "imiter les écrivains parisiens",
                "transformer la langue en y apportant d’autres cultures",
                "renoncer à leur culture"
              ],
              "answer": 1,
              "explication": "Dernier paragraphe."
            },
            {
              "q": "Que signifie « le français a plusieurs centres » ?",
              "options": [
                "Il est enseigné dans plusieurs centres culturels.",
                "Il n’y a pas une seule norme ni un seul lieu de référence.",
                "Il a plusieurs accents en France."
              ],
              "answer": 1,
              "explication": "Paris n’est plus le seul centre de la langue."
            },
            {
              "q": "« Le déracinement », c’est…",
              "options": [
                "le fait d’être coupé de son pays d’origine",
                "une technique de jardinage",
                "une maladie"
              ],
              "answer": 0,
              "explication": "Le mot est employé au sens figuré : on perd ses « racines »."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une étudiante québécoise à Paris",
          "duree": "30 min",
          "consigne": "Émilie vient de Montréal. Elle raconte ses premières semaines en France. Lis les questions, puis écoute.",
          "transcription": "Quand je suis arrivée à Paris, je pensais que la langue ne poserait aucun problème. On parle français tous les deux, non ? Eh bien, pas tout à fait ! Le premier jour, j’ai dit à ma colocataire que j’allais magasiner. Elle m’a regardée comme si je venais d’une autre planète. Ici, on dit « faire les magasins » ou « faire du shopping », ce qui est drôle, parce qu’au Québec on évite justement les mots anglais. Pour nous, le week-end, c’est la fin de semaine, un e-mail, c’est un courriel, et une voiture, c’est souvent un char. Et puis il y a les repas : chez moi, le déjeuner, c’est le matin, le dîner le midi et le souper le soir. Alors quand un camarade m’a invitée à déjeuner, je suis arrivée à huit heures du matin… Il dormait encore ! Mais ce qui m’a le plus frappée, c’est qu’on me parle de mon accent. Moi, je trouve que ce sont les Parisiens qui ont un accent !",
          "questions": [
            {
              "q": "Qu’est-ce qui a surpris la colocataire d’Émilie ?",
              "options": [
                "Le mot « magasiner »",
                "Son accent",
                "Son retard"
              ],
              "answer": 0,
              "explication": "Au Québec, « magasiner » veut dire faire les magasins."
            },
            {
              "q": "Pourquoi Émilie trouve-t-elle « faire du shopping » amusant ?",
              "options": [
                "Parce que c’est un mot très ancien",
                "Parce qu’au Québec on évite les mots anglais",
                "Parce que c’est un mot québécois"
              ],
              "answer": 1,
              "explication": "Le français du Québec remplace souvent les anglicismes."
            },
            {
              "q": "Au Québec, « le dîner » est le repas…",
              "options": [
                "du matin",
                "de midi",
                "du soir"
              ],
              "answer": 1,
              "explication": "Déjeuner le matin, dîner le midi, souper le soir."
            },
            {
              "q": "Que pense Émilie de la question de l’accent ?",
              "options": [
                "Elle veut perdre son accent.",
                "Pour elle, ce sont les Parisiens qui ont un accent.",
                "Elle n’a pas d’accent."
              ],
              "answer": 1,
              "explication": "Tout le monde a un accent… pour les autres."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Les mots de la francophonie",
          "duree": "20 min",
          "consigne": "Associe chaque mot ou expression à son sens.",
          "items": [
            {
              "terme": "septante (Belgique, Suisse)",
              "definition": "soixante-dix"
            },
            {
              "terme": "nonante (Belgique, Suisse)",
              "definition": "quatre-vingt-dix"
            },
            {
              "terme": "magasiner (Québec)",
              "definition": "faire les magasins"
            },
            {
              "terme": "un courriel (Québec)",
              "definition": "un message électronique, un e-mail"
            },
            {
              "terme": "la fin de semaine (Québec)",
              "definition": "le week-end"
            },
            {
              "terme": "une essencerie (Sénégal)",
              "definition": "une station-service"
            },
            {
              "terme": "un francophone",
              "definition": "une personne qui parle français"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Lequel, auquel, duquel",
          "duree": "45 min",
          "regles": [
            "pronoms-relatifs-composes",
            "pronoms-relatifs"
          ],
          "fiche": "<p>Après une préposition (<em>avec, pour, sans, dans, grâce à, près de…</em>), on emploie <strong>lequel, laquelle, lesquels, lesquelles</strong>. Avec <em>à</em>, ils se contractent en <strong>auquel, auxquels, auxquelles</strong> ; avec <em>de</em> (dans une locution comme <em>près de, à cause de</em>), en <strong>duquel, desquels, desquelles</strong>. Pour une personne, on peut aussi dire <em>préposition + qui</em>.</p><p class=\"ex\">C’est la langue <strong>dans laquelle</strong> il écrit. Le prix <strong>auquel</strong> elle pense. Le fleuve <strong>près duquel</strong> il a grandi.</p>",
          "consigne": "Choisis le pronom qui convient.",
          "phrases": [
            {
              "avant": "C’est la langue dans",
              "options": [
                "laquelle",
                "lequel",
                "que"
              ],
              "answer": 0,
              "apres": "Senghor a écrit ses poèmes.",
              "explication": "Langue est féminin singulier."
            },
            {
              "avant": "Voici le mouvement",
              "options": [
                "auquel",
                "duquel",
                "lequel"
              ],
              "answer": 0,
              "apres": "Césaire a participé.",
              "explication": "Participer à : à + lequel = auquel."
            },
            {
              "avant": "Ce sont des auteurs",
              "options": [
                "auxquels",
                "auquel",
                "desquels"
              ],
              "answer": 0,
              "apres": "je m’intéresse beaucoup.",
              "explication": "S’intéresser à + masculin pluriel : auxquels."
            },
            {
              "avant": "La ville près",
              "options": [
                "de laquelle",
                "duquel",
                "dont"
              ],
              "answer": 0,
              "apres": "il a grandi s’appelle Joal.",
              "explication": "Près de + féminin : de laquelle (pas « dont » après une locution)."
            },
            {
              "avant": "Le roman grâce",
              "options": [
                "auquel",
                "duquel",
                "lequel"
              ],
              "answer": 0,
              "apres": "elle est devenue célèbre est traduit en vingt langues.",
              "explication": "Grâce à + masculin : auquel."
            },
            {
              "avant": "Les raisons pour",
              "options": [
                "lesquelles",
                "lesquels",
                "laquelle"
              ],
              "answer": 0,
              "apres": "il a quitté Haïti sont politiques.",
              "explication": "Raisons : féminin pluriel."
            },
            {
              "avant": "L’amie avec",
              "options": [
                "qui",
                "que",
                "dont"
              ],
              "answer": 0,
              "apres": "je suis partie au Québec parle aussi créole.",
              "explication": "Pour une personne, « avec qui » est possible (ou « avec laquelle »)."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Présenter un écrivain francophone",
          "duree": "1 h 15",
          "regles": [
            "pronoms-relatifs-composes",
            "connecteurs-logiques"
          ],
          "consigne": "Pour le blog de ton cours de français, présente un écrivain ou une écrivaine francophone non français (cité dans le texte ou un autre). Explique d’où il ou elle vient, de quoi parlent ses livres et pourquoi tu as envie de le lire.",
          "min": 180,
          "max": 240,
          "checklist": [
            "J’ai présenté l’auteur, son origine et son époque",
            "J’ai résumé un ou deux thèmes de son œuvre",
            "J’ai utilisé au moins deux pronoms relatifs composés",
            "J’ai exprimé un avis personnel argumenté",
            "Mon texte est organisé en paragraphes"
          ],
          "modele": "Dany Laferrière, l’écrivain qui fait rire de l’exil\n\nNé à Port-au-Prince en 1953, Dany Laferrière a grandi chez sa grand-mère, dans une petite ville d’Haïti à laquelle il consacrera plusieurs de ses livres. Journaliste sous la dictature, il doit quitter son pays en 1976, après l’assassinat d’un ami. Il s’installe alors à Montréal, où il travaille en usine avant de publier son premier roman.\n\nL’exil est le thème autour duquel tourne presque toute son œuvre. Mais Laferrière en parle sans pathos : avec ironie, avec humour, parfois avec une grande tendresse. Ses courts chapitres se lisent comme des instantanés de la vie quotidienne, à Montréal comme à Port-au-Prince.\n\nEn 2013, il est élu à l’Académie française, ce qui montre que la littérature en français ne se limite pas à la France.\n\nPourquoi ai-je envie de le lire ? Parce que, moi aussi, je vis loin de mon pays, dans une langue qui n’est pas la mienne. Je suis curieuse de découvrir comment il a fait de cette distance une force."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Les mots de chez moi",
          "duree": "30 min",
          "consigne": "Présente trois mots ou expressions de ta langue (ou de ta région) qui n’ont pas d’équivalent exact en français. Explique leur sens, donne un exemple d’utilisation et dis ce qu’ils révèlent de ta culture.",
          "preparation": [
            "Il y a un mot en chinois qui…",
            "On l’utilise quand…",
            "La traduction la plus proche serait…, mais…",
            "Ce mot montre que…",
            "C’est un peu comme…"
          ],
          "dureeCible": "2 minutes",
          "modele": "Il y a un mot en chinois qui me manque souvent en français : « 热闹 », rènao. On l’utilise pour un lieu plein de monde, de bruit et de vie, comme un marché ou un repas de famille pendant la fête du Printemps. La traduction la plus proche serait « animé », mais en français, ce mot est plus neutre. En chinois, rènao est presque toujours positif : c’est un compliment. Je crois que cela montre l’importance du collectif dans ma culture : être ensemble, nombreux, c’est le bonheur. En France, au contraire, j’ai l’impression qu’on apprécie davantage le calme.",
          "checklist": [
            "J’ai présenté trois mots ou un mot en détail",
            "J’ai expliqué pourquoi la traduction est difficile",
            "J’ai donné un exemple d’utilisation",
            "J’ai fait un lien avec la culture"
          ]
        }
      ]
    },

    {
      "id": 16,
      "niveau": "b2",
      "theme": "Sciences, innovation et environnement",
      "titre": "Écologie et mode de vie",
      "objectif": "Comprendre et discuter les enjeux environnementaux du quotidien.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "La sobriété, une contrainte ou une liberté ?",
          "duree": "45 min",
          "texte": [
            "Pendant longtemps, le mot « sobriété » évoquait surtout la modération face à l’alcool. Depuis quelques années, il a pris un nouveau sens : consommer moins d’énergie et de ressources, non par obligation, mais par choix. Baisser le chauffage d’un degré, prendre le train plutôt que l’avion, réparer au lieu de racheter : autant de gestes qui, mis bout à bout, pourraient réduire notablement notre empreinte carbone.",
            "Pour ses défenseurs, la sobriété n’est pas un retour en arrière. Elle permettrait au contraire de retrouver du temps et de la qualité de vie. Manger local et de saison, c’est aussi redécouvrir le goût des produits ; se déplacer à vélo, c’est faire du sport sans y penser. « Il ne s’agit pas de vivre moins bien, mais de vivre mieux avec moins », résume une sociologue.",
            "Ses détracteurs, eux, soulignent deux limites. D’une part, tout le monde ne part pas du même point : demander à une famille qui a du mal à payer ses factures de « consommer moins » peut sembler injuste. D’autre part, les choix individuels ne suffiront pas si les entreprises et les États ne changent pas eux aussi leurs pratiques.",
            "Entre culpabilité et indifférence, il existe sans doute une voie plus apaisée : faire ce qui est possible à son échelle, tout en exigeant que les plus gros pollueurs fassent leur part. Car si chaque geste compte, tous les gestes ne comptent pas autant."
          ],
          "questions": [
            {
              "q": "Quel est le nouveau sens du mot « sobriété » ?",
              "options": [
                "Ne pas boire d’alcool",
                "Consommer moins d’énergie et de ressources par choix",
                "Vivre à la campagne"
              ],
              "answer": 1,
              "explication": "Premier paragraphe."
            },
            {
              "q": "Pour ses défenseurs, la sobriété permet…",
              "options": [
                "de vivre mieux avec moins",
                "de gagner plus d’argent",
                "de voyager davantage"
              ],
              "answer": 0,
              "explication": "Citation de la sociologue."
            },
            {
              "q": "Quelles sont les deux limites citées par ses détracteurs ?",
              "options": [
                "Le coût et le manque de temps",
                "L’injustice sociale et l’insuffisance des choix individuels",
                "Le manque d’information et la météo"
              ],
              "answer": 1,
              "explication": "« D’une part… d’autre part… »"
            },
            {
              "q": "Que signifie la dernière phrase ?",
              "options": [
                "Aucun geste n’est utile.",
                "Les gestes n’ont pas tous le même impact.",
                "Seuls les gestes individuels comptent."
              ],
              "answer": 1,
              "explication": "« Tous les gestes ne comptent pas autant » : certains ont beaucoup plus d’effet."
            },
            {
              "q": "Quelle est la position de l’auteur ?",
              "options": [
                "Il défend la culpabilité.",
                "Il propose une position nuancée entre deux extrêmes.",
                "Il rejette totalement la sobriété."
              ],
              "answer": 1,
              "explication": "Il cherche « une voie plus apaisée »."
            },
            {
              "q": "« Mis bout à bout » signifie…",
              "options": [
                "additionnés les uns aux autres",
                "coupés en morceaux",
                "oubliés"
              ],
              "answer": 0,
              "explication": "Ensemble, les petits gestes forment un effet important."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Débat à la radio : faut-il renoncer à l’avion ?",
          "duree": "35 min",
          "consigne": "Deux invités débattent à la radio. Lis les questions, puis écoute.",
          "transcription": "Je ne dis pas qu’il faut interdire l’avion, je dis qu’il faut arrêter de le prendre pour un week-end à Barcelone quand le train met six heures. Un aller-retour Paris-New York, c’est environ une tonne de CO2 par passager, soit à peu près la moitié de ce que chacun devrait émettre en un an pour respecter les objectifs climatiques. Je comprends l’argument, mais vous oubliez une chose : pour beaucoup de gens, l’avion est le seul moyen de voir leur famille. Une étudiante chinoise à Lyon ne va pas rentrer chez elle en train ! Bien sûr, et personne ne lui demande de le faire. Le problème, ce sont les vols courts et répétés, pris surtout par une minorité de voyageurs très fréquents. Alors taxons ces voyageurs-là, plutôt que de culpabiliser tout le monde. Là-dessus, nous sommes d’accord. Et investissons dans les trains de nuit, qui sont une vraie alternative en Europe.",
          "questions": [
            {
              "q": "Que propose le premier invité ?",
              "options": [
                "Interdire tous les vols",
                "Éviter l’avion quand le train est une alternative raisonnable",
                "Prendre l’avion plus souvent"
              ],
              "answer": 1,
              "explication": "Il vise les trajets courts possibles en train."
            },
            {
              "q": "Combien émet environ un aller-retour Paris-New York par passager ?",
              "options": [
                "Une tonne de CO2",
                "Dix kilos de CO2",
                "Dix tonnes de CO2"
              ],
              "answer": 0,
              "explication": "« Environ une tonne de CO2 par passager. »"
            },
            {
              "q": "Quel exemple donne le second invité ?",
              "options": [
                "Un homme d’affaires",
                "Une étudiante chinoise qui veut voir sa famille",
                "Un touriste à Barcelone"
              ],
              "answer": 1,
              "explication": "L’avion est parfois indispensable."
            },
            {
              "q": "Sur quoi les deux invités se mettent-ils d’accord ?",
              "options": [
                "Taxer les voyageurs très fréquents et développer les trains de nuit",
                "Supprimer les vols internationaux",
                "Ne rien changer"
              ],
              "answer": 0,
              "explication": "« Là-dessus, nous sommes d’accord. »"
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "L’écologie au quotidien",
          "duree": "20 min",
          "consigne": "Associe chaque expression à sa définition.",
          "items": [
            {
              "terme": "l’empreinte carbone",
              "definition": "la quantité de gaz à effet de serre produite par une activité ou une personne"
            },
            {
              "terme": "un circuit court",
              "definition": "une vente directe du producteur au consommateur, avec peu d’intermédiaires"
            },
            {
              "terme": "le gaspillage",
              "definition": "le fait de jeter ou d’utiliser sans nécessité"
            },
            {
              "terme": "durable",
              "definition": "qui peut se maintenir longtemps sans épuiser les ressources"
            },
            {
              "terme": "la sobriété",
              "definition": "le fait de consommer moins, avec modération"
            },
            {
              "terme": "culpabiliser",
              "definition": "faire sentir à quelqu’un qu’il est en faute"
            },
            {
              "terme": "le réchauffement climatique",
              "definition": "l’augmentation de la température moyenne de la Terre"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Exprimer la nécessité et la concession",
          "duree": "45 min",
          "regles": [
            "subjonctif-emploi",
            "subjonctif-formation"
          ],
          "fiche": "<p>Le <strong>subjonctif</strong> suit les expressions de nécessité (<em>il faut que, il est indispensable que</em>), de volonté (<em>je veux que, je souhaite que</em>) et de concession (<em>bien que, quoique</em>). Avec <em>même si</em>, on garde l’indicatif.</p><p class=\"ex\">Il faut que chacun <strong>fasse</strong> sa part. Bien que ce <strong>soit</strong> difficile, j’essaie. Même si c’<strong>est</strong> difficile, j’essaie.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "Il faut que les entreprises",
              "options": [
                "prennent",
                "prendront"
              ],
              "answer": 0,
              "apres": "leurs responsabilités.",
              "explication": "Il faut que + subjonctif."
            },
            {
              "avant": "Bien que le train",
              "options": [
                "soit",
                "est"
              ],
              "answer": 0,
              "apres": "plus lent, je le préfère.",
              "explication": "Bien que + subjonctif."
            },
            {
              "avant": "Même si le train",
              "options": [
                "est",
                "soit"
              ],
              "answer": 0,
              "apres": "plus cher, je le prends.",
              "explication": "Même si + indicatif."
            },
            {
              "avant": "Je souhaite que mes enfants",
              "options": [
                "puissent",
                "peuvent"
              ],
              "answer": 0,
              "apres": "respirer un air pur.",
              "explication": "Souhait : subjonctif. Pouvoir → que je puisse."
            },
            {
              "avant": "Il est indispensable que nous",
              "options": [
                "réduisions",
                "réduisons"
              ],
              "answer": 0,
              "apres": "nos déchets.",
              "explication": "Subjonctif : nous réduisions (comme l’imparfait)."
            },
            {
              "avant": "Je pense que chacun",
              "options": [
                "peut",
                "puisse"
              ],
              "answer": 0,
              "apres": "agir à son niveau.",
              "explication": "« Je pense que » affirmatif : indicatif."
            },
            {
              "avant": "Quoiqu’il",
              "options": [
                "fasse",
                "fait"
              ],
              "answer": 0,
              "apres": "beaucoup d’efforts, il prend encore l’avion chaque mois.",
              "explication": "Quoique + subjonctif (à ne pas confondre avec « quoi que »)."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Un essai argumenté",
          "duree": "1 h 15",
          "regles": [
            "subjonctif-emploi",
            "connecteurs-logiques",
            "donner-son-avis"
          ],
          "consigne": "Sujet : « Les gestes individuels peuvent-ils vraiment sauver la planète ? » Rédige un texte argumenté en trois parties : introduction, développement (au moins deux arguments et une concession), conclusion.",
          "min": 200,
          "max": 260,
          "checklist": [
            "Mon introduction présente le sujet et la question",
            "J’ai au moins deux arguments, chacun avec un exemple",
            "J’ai intégré une concession (certes…, mais ; bien que…)",
            "J’ai utilisé au moins trois subjonctifs",
            "Ma conclusion répond clairement à la question"
          ],
          "modele": "Éteindre la lumière, trier ses déchets, prendre son vélo : on nous répète que chaque geste compte. Mais ces efforts individuels suffisent-ils face à l’ampleur du réchauffement climatique ?\n\nCertes, les gestes du quotidien ont une utilité réelle. Si des millions de personnes réduisent leur consommation de viande ou renoncent aux vols courts, l’effet devient mesurable. De plus, ces changements modifient peu à peu les normes sociales : quand mes amis voient que je voyage en train, certains se laissent tenter.\n\nPourtant, il serait naïf de penser que cela suffira. Une grande partie des émissions dépend de choix qui ne sont pas individuels : la production d’électricité, l’organisation des transports, l’industrie. Il faut donc que les États investissent et que les entreprises changent leurs méthodes de production. Bien que chaque citoyen puisse agir, il ne peut pas construire seul une ligne de chemin de fer.\n\nEn conclusion, les gestes individuels sont nécessaires, mais pas suffisants. Ils prennent tout leur sens lorsqu’ils s’accompagnent d’un engagement collectif, par exemple en votant, en s’informant et en soutenant les projets locaux."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Prendre position dans un débat",
          "duree": "30 min",
          "consigne": "Un ami te dit : « De toute façon, ce que je fais ne changera rien. » Réponds-lui à voix haute : montre que tu comprends son point de vue, puis défends le tien avec deux arguments.",
          "preparation": [
            "Je comprends ce que tu veux dire, mais…",
            "Il est vrai que…",
            "Ce n’est pas parce que… que…",
            "Il faut que…",
            "Au fond, ce qui compte, c’est…"
          ],
          "dureeCible": "1 min 30 à 2 minutes",
          "modele": "Je comprends ce que tu veux dire : face aux grandes entreprises et aux gouvernements, on se sent tout petit. Il est vrai qu’une personne seule ne va pas arrêter le réchauffement climatique. Mais ce n’est pas parce que notre action est limitée qu’elle est inutile. D’abord, nos habitudes s’additionnent : si toute notre résidence étudiante triait vraiment ses déchets, ce serait des tonnes chaque année. Ensuite, nos choix influencent les autres, et même les entreprises, qui suivent la demande. Il faut aussi que nous fassions entendre notre voix, en votant, en signant des pétitions. Au fond, ce qui compte, c’est de ne pas rester spectateur.",
          "checklist": [
            "J’ai reconnu le point de vue de l’autre",
            "J’ai donné deux arguments",
            "J’ai utilisé au moins deux subjonctifs",
            "J’ai conclu avec une phrase forte"
          ]
        }
      ]
    },

    {
      "id": 17,
      "niveau": "b2",
      "theme": "Droits humains",
      "titre": "L’égalité entre les femmes et les hommes",
      "objectif": "Analyser des chiffres et argumenter sur un sujet de société.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Égalité femmes-hommes : où en est la France ?",
          "duree": "45 min",
          "texte": [
            "En France, les femmes ont obtenu le droit de vote en 1944 et l’ont exercé pour la première fois en 1945, bien après la Nouvelle-Zélande ou la Finlande. Depuis, l’égalité a beaucoup progressé dans la loi : égalité salariale inscrite dans le droit en 1972, parité en politique en 2000, quotas de femmes dans les conseils d’administration des grandes entreprises en 2011.",
            "Pourtant, les chiffres montrent que l’égalité réelle n’est pas encore atteinte. Selon l’Insee, à temps de travail égal, les femmes gagnent en moyenne environ 14 % de moins que les hommes dans le secteur privé. Une partie de cet écart s’explique par les métiers exercés : les femmes sont plus nombreuses dans des secteurs moins bien payés, comme l’aide à la personne ou l’enseignement. Mais à poste comparable, il reste un écart de quelques pour cent que rien ne justifie.",
            "Les spécialistes parlent aussi de « plafond de verre » : une barrière invisible qui empêche les femmes d’accéder aux postes les plus élevés. Elles sont aujourd’hui majoritaires parmi les diplômés de l’enseignement supérieur, mais restent minoritaires à la tête des grandes entreprises. L’arrivée des enfants joue un rôle important : ce sont encore surtout les mères qui réduisent leur temps de travail.",
            "Pour avancer, plusieurs pistes sont discutées : un congé paternité plus long, pour mieux partager les tâches dès la naissance ; plus de transparence sur les salaires ; et une éducation qui lutte contre les stéréotypes dès l’école, pour que les filles osent davantage les métiers scientifiques et les garçons ceux du soin."
          ],
          "questions": [
            {
              "q": "Quand les Françaises ont-elles voté pour la première fois ?",
              "options": [
                "En 1944",
                "En 1945",
                "En 1972"
              ],
              "answer": 1,
              "explication": "Droit obtenu en 1944, premier vote en 1945."
            },
            {
              "q": "Selon l’Insee, à temps de travail égal, l’écart de salaire moyen est d’environ…",
              "options": [
                "4 %",
                "14 %",
                "40 %"
              ],
              "answer": 1,
              "explication": "Environ 14 % dans le secteur privé ; à poste comparable, il ne reste que quelques pour cent."
            },
            {
              "q": "Qu’est-ce que le « plafond de verre » ?",
              "options": [
                "Un type d’architecture moderne",
                "Une barrière invisible qui freine l’accès des femmes aux postes élevés",
                "Une loi sur la parité"
              ],
              "answer": 1,
              "explication": "C’est une métaphore."
            },
            {
              "q": "Quel paradoxe le texte souligne-t-il ?",
              "options": [
                "Les femmes sont plus diplômées mais moins présentes à la tête des entreprises.",
                "Les hommes travaillent moins mais gagnent plus.",
                "Les femmes votent moins que les hommes."
              ],
              "answer": 0,
              "explication": "Troisième paragraphe."
            },
            {
              "q": "À quoi servirait un congé paternité plus long ?",
              "options": [
                "À mieux partager les tâches dès la naissance",
                "À réduire le chômage",
                "À augmenter les salaires des pères"
              ],
              "answer": 0,
              "explication": "Dernier paragraphe."
            },
            {
              "q": "« Que rien ne justifie » signifie que cet écart…",
              "options": [
                "est logique",
                "n’a pas d’explication objective",
                "va disparaître"
              ],
              "answer": 1,
              "explication": "On ne peut l’expliquer par aucune différence de poste ou d’expérience."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Portrait d’une ingénieure",
          "duree": "30 min",
          "consigne": "Sophie est ingénieure dans l’aéronautique à Toulouse. Elle répond aux questions d’un journaliste. Lis les questions, puis écoute.",
          "transcription": "Dans ma promotion d’école d’ingénieurs, nous étions douze filles sur quatre-vingt-dix. Au début, je ne me posais pas de questions : j’aimais les maths, j’aimais les avions, voilà tout. C’est plus tard, en entreprise, que j’ai commencé à remarquer certaines choses. En réunion, on me coupait la parole plus souvent qu’à mes collègues masculins. Un jour, un client a même demandé à parler au responsable du projet… alors que c’était moi ! Aujourd’hui, je dirige une équipe de quinze personnes, dont cinq femmes. Les choses changent, mais lentement. Ce qui a le plus aidé, je crois, ce sont les modèles. Quand j’étais lycéenne, une ingénieure était venue présenter son métier dans ma classe. Ce jour-là, je me suis dit : c’est possible. C’est pour ça que, maintenant, je vais à mon tour dans les lycées.",
          "questions": [
            {
              "q": "Combien de filles y avait-il dans sa promotion ?",
              "options": [
                "Douze sur quatre-vingt-dix",
                "Quinze sur cinquante",
                "La moitié"
              ],
              "answer": 0,
              "explication": "Douze sur quatre-vingt-dix."
            },
            {
              "q": "Quelle anecdote montre un stéréotype ?",
              "options": [
                "Un client a voulu parler au responsable sans imaginer que c’était elle.",
                "Elle a raté un examen.",
                "Son équipe a refusé de travailler avec elle."
              ],
              "answer": 0,
              "explication": "Il pensait que le responsable était forcément un homme."
            },
            {
              "q": "Selon Sophie, qu’est-ce qui aide le plus ?",
              "options": [
                "Les lois",
                "Les modèles",
                "Les salaires"
              ],
              "answer": 1,
              "explication": "Voir une femme ingénieure lui a montré que c’était possible."
            },
            {
              "q": "Que fait-elle maintenant ?",
              "options": [
                "Elle enseigne à l’université.",
                "Elle va présenter son métier dans les lycées.",
                "Elle a quitté l’aéronautique."
              ],
              "answer": 1,
              "explication": "Elle devient à son tour un modèle."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Parler d’égalité",
          "duree": "20 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "la parité",
              "definition": "l’égalité du nombre de femmes et d’hommes"
            },
            {
              "terme": "l’écart salarial",
              "definition": "la différence de salaire entre deux groupes"
            },
            {
              "terme": "un stéréotype",
              "definition": "une idée toute faite et simplificatrice sur un groupe"
            },
            {
              "terme": "une discrimination",
              "definition": "un traitement différent et injuste d’une personne"
            },
            {
              "terme": "le congé parental",
              "definition": "la période où un parent arrête ou réduit son travail pour s’occuper de son enfant"
            },
            {
              "terme": "un plafond de verre",
              "definition": "une barrière invisible qui freine une carrière"
            },
            {
              "terme": "revendiquer",
              "definition": "réclamer un droit avec force"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Exprimer l’opposition et la concession",
          "duree": "45 min",
          "regles": [
            "connecteurs-logiques",
            "subjonctif-emploi"
          ],
          "fiche": "<p>L’<strong>opposition</strong> met deux faits face à face : <em>alors que, tandis que, en revanche, au contraire</em>. La <strong>concession</strong> reconnaît un fait sans que la conclusion attendue se réalise : <em>pourtant, cependant, malgré + nom, bien que + subjonctif, même si + indicatif</em>.</p><p class=\"ex\"><strong>Bien qu’</strong>elles soient plus diplômées, elles dirigent moins d’entreprises. <strong>Malgré</strong> la loi, l’écart persiste.</p>",
          "consigne": "Choisis le connecteur qui convient.",
          "phrases": [
            {
              "avant": "",
              "options": [
                "Malgré",
                "Bien que"
              ],
              "answer": 0,
              "apres": "les lois, l’égalité n’est pas encore atteinte.",
              "explication": "« Malgré » + nom ; « bien que » + verbe."
            },
            {
              "avant": "Les femmes sont plus diplômées,",
              "options": [
                "pourtant",
                "donc"
              ],
              "answer": 0,
              "apres": "elles sont moins nombreuses à diriger.",
              "explication": "Le résultat est contraire à ce qu’on attendrait : concession."
            },
            {
              "avant": "",
              "options": [
                "Bien qu’",
                "Même si"
              ],
              "answer": 0,
              "apres": "elle soit compétente, on lui coupe la parole.",
              "explication": "« Soit » est un subjonctif : « bien que »."
            },
            {
              "avant": "Il travaille à temps plein,",
              "options": [
                "alors qu’",
                "parce qu’"
              ],
              "answer": 0,
              "apres": "elle a dû réduire son temps de travail.",
              "explication": "Deux situations opposées : « alors que »."
            },
            {
              "avant": "",
              "options": [
                "Même si",
                "Bien que"
              ],
              "answer": 0,
              "apres": "la situation progresse, il reste beaucoup à faire.",
              "explication": "« Progresse » est à l’indicatif : « même si »."
            },
            {
              "avant": "Dans certains pays, le congé paternité est long ; en France,",
              "options": [
                "en revanche",
                "par conséquent"
              ],
              "answer": 0,
              "apres": ", il reste court.",
              "explication": "Opposition entre deux pays."
            },
            {
              "avant": "Elle a obtenu le poste",
              "options": [
                "malgré",
                "grâce à"
              ],
              "answer": 0,
              "apres": "les préjugés de son entourage.",
              "explication": "Les préjugés étaient un obstacle : « malgré »."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Commenter des chiffres",
          "duree": "1 h 15",
          "regles": [
            "connecteurs-logiques",
            "nominalisation"
          ],
          "consigne": "Ton professeur te demande de commenter ces données imaginaires sur une école d’ingénieurs : en 2005, 18 % de filles ; en 2015, 24 % ; en 2025, 31 %. Dans la même école, les filles représentent 45 % des étudiants en biologie, mais 12 % en informatique. Décris l’évolution, compare les filières, propose une explication et une solution.",
          "min": 180,
          "max": 240,
          "checklist": [
            "J’ai décrit l’évolution avec des verbes précis (augmenter, progresser, doubler…)",
            "J’ai comparé les filières",
            "J’ai proposé au moins une explication",
            "J’ai proposé une solution concrète",
            "J’ai utilisé au moins deux connecteurs d’opposition ou de concession"
          ],
          "modele": "Les données présentées montrent une nette progression de la place des filles dans cette école d’ingénieurs. Leur proportion est passée de 18 % en 2005 à 31 % en 2025, soit une hausse de 13 points en vingt ans. Cette évolution est régulière, mais elle reste lente : à ce rythme, la parité ne serait pas atteinte avant plusieurs décennies.\n\nPar ailleurs, la situation varie fortement selon les filières. Alors que les filles représentent près de la moitié des étudiants en biologie (45 %), elles ne sont que 12 % en informatique.\n\nCet écart s’explique sans doute par des stéréotypes anciens : la biologie est associée au soin et au vivant, tandis que l’informatique reste perçue comme un domaine masculin. Bien que les compétences des filles en mathématiques soient comparables à celles des garçons, beaucoup n’osent pas choisir cette voie.\n\nPour réduire cet écart, l’école pourrait inviter des informaticiennes dans les lycées et créer un programme de mentorat. Montrer des modèles est souvent le premier pas vers le changement."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Débattre d’une mesure",
          "duree": "30 min",
          "consigne": "Faut-il imposer un congé paternité aussi long que le congé maternité ? Donne ton avis à voix haute, avec deux arguments, une concession, et un exemple tiré de ton expérience ou de ton pays.",
          "preparation": [
            "Selon moi, …",
            "Il est vrai que…, mais…",
            "Prenons l’exemple de…",
            "Bien que…, je pense que…",
            "C’est pourquoi…"
          ],
          "dureeCible": "2 minutes",
          "modele": "Selon moi, un congé paternité aussi long que le congé maternité serait une très bonne mesure. D’abord, il permettrait aux pères de créer un lien fort avec leur bébé dès les premières semaines. Ensuite, il réduirait les discriminations à l’embauche : si les hommes et les femmes s’absentent autant, un employeur n’aurait plus de raison de préférer un homme. Il est vrai que cela coûterait cher à l’État et que certaines petites entreprises auraient du mal à remplacer un salarié. Mais bien que ce soit difficile, d’autres pays l’ont fait, comme la Suède. Dans mon entourage, les pères qui ont pris un long congé disent que c’est la meilleure période de leur vie. C’est pourquoi je pense que cela vaut la peine.",
          "checklist": [
            "J’ai donné un avis clair",
            "J’ai donné deux arguments",
            "J’ai fait une concession",
            "J’ai donné un exemple concret"
          ]
        }
      ]
    },

    {
      "id": 18,
      "niveau": "b2",
      "theme": "Gastronomie, mode",
      "chine": true,
      "titre": "Le thé, de la Chine à la France",
      "objectif": "Retracer le voyage d’un produit et décrire une dégustation.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Le long voyage du thé",
          "duree": "45 min",
          "texte": [
            "Selon la légende chinoise, le thé aurait été découvert il y a près de cinq mille ans par l’empereur Shennong, quand quelques feuilles seraient tombées dans l’eau qu’il faisait bouillir. Ce qui est certain, c’est qu’en Chine, le thé est consommé depuis l’Antiquité et qu’il est devenu, sous la dynastie Tang, un véritable art de vivre. Au VIIIe siècle, Lu Yu lui consacre un traité entier, le Classique du thé.",
            "L’Europe ne le découvre qu’au début du XVIIe siècle, grâce aux marchands néerlandais. Le thé arrive en France vers le milieu de ce siècle. D’abord vendu en pharmacie comme un remède, il devient vite une boisson à la mode dans l’aristocratie. On raconte que Louis XIV en buvait pour soulager sa goutte, et Madame de Sévigné évoque dans ses lettres des amies qui en boivent plusieurs tasses par jour.",
            "Le mot lui-même raconte ce voyage. Les langues qui ont reçu le thé par la mer, grâce aux marchands passés par les ports du Fujian, l’appellent souvent d’un nom proche de « te » : thé en français, tea en anglais. Celles qui l’ont reçu par la terre, par les routes de la soie, ont gardé un nom proche du mandarin « chá » : chai en russe, çay en turc, chá en portugais, les Portugais ayant commercé par Macao.",
            "Aujourd’hui, la France boit beaucoup moins de thé que le Royaume-Uni, mais les salons de thé parisiens attirent une clientèle fidèle. Certaines maisons, fondées au XIXe siècle, proposent des centaines de variétés. Et dans les boutiques, on voit de plus en plus de thés chinois d’origine précise : longjing du Zhejiang, pu’er du Yunnan, oolong du Fujian."
          ],
          "questions": [
            {
              "q": "Pourquoi le texte utilise-t-il le conditionnel « aurait été découvert » ?",
              "options": [
                "Parce que l’information est certaine",
                "Parce qu’il s’agit d’une légende non vérifiée",
                "Parce qu’on parle du futur"
              ],
              "answer": 1,
              "explication": "Le conditionnel signale une information non confirmée."
            },
            {
              "q": "Qui a fait connaître le thé en Europe ?",
              "options": [
                "Des marchands néerlandais",
                "Des moines français",
                "Des explorateurs anglais"
              ],
              "answer": 0,
              "explication": "Au début du XVIIe siècle."
            },
            {
              "q": "Comment le thé était-il d’abord vendu en France ?",
              "options": [
                "En épicerie fine",
                "En pharmacie, comme un remède",
                "Dans les cafés"
              ],
              "answer": 1,
              "explication": "Il était considéré comme un médicament."
            },
            {
              "q": "Pourquoi dit-on « thé » en français mais « chá » en portugais ?",
              "options": [
                "À cause des routes par lesquelles le thé est arrivé",
                "Parce que les Portugais ont inventé le thé",
                "Par hasard"
              ],
              "answer": 0,
              "explication": "Par la mer depuis le Fujian (te) ou par la terre et Macao (chá)."
            },
            {
              "q": "Le pu’er vient…",
              "options": [
                "du Fujian",
                "du Zhejiang",
                "du Yunnan"
              ],
              "answer": 2,
              "explication": "Dernier paragraphe."
            },
            {
              "q": "« Une clientèle fidèle » est une clientèle…",
              "options": [
                "qui revient régulièrement",
                "très riche",
                "étrangère"
              ],
              "answer": 0,
              "explication": "Fidèle : qui reste attaché, qui revient."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une dégustation dans un salon de thé",
          "duree": "30 min",
          "consigne": "Dans un salon de thé à Paris, une spécialiste fait déguster un thé à deux clients. Lis les questions, puis écoute.",
          "transcription": "Voici un oolong de Taïwan, un thé semi-oxydé, c’est-à-dire entre le thé vert et le thé noir. Regardez d’abord les feuilles sèches : elles sont roulées en petites billes. Je verse de l’eau à quatre-vingt-dix degrés, pas bouillante, sinon on brûle les feuilles et le thé devient amer. On laisse infuser une minute seulement. Voilà. Sentez d’abord : vous percevez ces notes de fleurs blanches, presque de lilas ? Maintenant, goûtez par petites gorgées, en laissant le thé envahir la bouche. C’est doux, rond, avec une légère touche de miel à la fin. La particularité de ce thé, c’est qu’on peut le faire infuser plusieurs fois. La deuxième infusion sera plus ouverte, plus parfumée, et la cinquième sera encore agréable. En Chine et à Taïwan, on dit d’ailleurs que la première infusion est pour les ennemis, la deuxième pour les amis !",
          "questions": [
            {
              "q": "Qu’est-ce qu’un thé semi-oxydé ?",
              "options": [
                "Un thé entre le vert et le noir",
                "Un thé fumé",
                "Un thé aux fleurs"
              ],
              "answer": 0,
              "explication": "Elle le définit tout de suite."
            },
            {
              "q": "Pourquoi ne pas utiliser d’eau bouillante ?",
              "options": [
                "Le thé deviendrait amer.",
                "Le thé refroidirait trop vite.",
                "Les feuilles ne s’ouvriraient pas."
              ],
              "answer": 0,
              "explication": "On « brûle les feuilles »."
            },
            {
              "q": "Quelles notes la spécialiste décrit-elle ?",
              "options": [
                "Fruits rouges et chocolat",
                "Fleurs blanches et miel",
                "Bois et fumée"
              ],
              "answer": 1,
              "explication": "Lilas, fleurs blanches, touche de miel."
            },
            {
              "q": "Que signifie le dicton final ?",
              "options": [
                "La première infusion est souvent la moins bonne.",
                "Il ne faut jamais partager son thé.",
                "Il faut boire le thé très vite."
              ],
              "answer": 0,
              "explication": "La deuxième infusion est meilleure : on la garde pour les amis."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Décrire une dégustation",
          "duree": "20 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "infuser",
              "definition": "laisser des feuilles dans un liquide chaud pour en extraire le goût"
            },
            {
              "terme": "une théière",
              "definition": "le récipient dans lequel on prépare le thé"
            },
            {
              "terme": "corsé",
              "definition": "qui a un goût fort et prononcé"
            },
            {
              "terme": "l’arôme",
              "definition": "l’odeur agréable d’un aliment ou d’une boisson"
            },
            {
              "terme": "amer",
              "definition": "qui a un goût âpre, comme le café sans sucre"
            },
            {
              "terme": "la gorgée",
              "definition": "la quantité de liquide qu’on avale en une fois"
            },
            {
              "terme": "déguster",
              "definition": "goûter avec attention pour apprécier"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Le gérondif et le participe présent",
          "duree": "45 min",
          "regles": [
            "gerondif-participe"
          ],
          "fiche": "<p>Le <strong>gérondif</strong> (<em>en + -ant</em>) exprime une action simultanée, la manière ou la condition ; il a le même sujet que le verbe principal. Le <strong>participe présent</strong> (sans <em>en</em>) remplace une relative avec <em>qui</em> ou exprime une cause, surtout à l’écrit.</p><p class=\"ex\">Elle lit <strong>en buvant</strong> son thé. Les marchands <strong>venant</strong> du Fujian (= qui venaient) l’ont apporté.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "On apprécie mieux le thé",
              "options": [
                "en le buvant",
                "le buvant"
              ],
              "answer": 0,
              "apres": "lentement.",
              "explication": "La manière : gérondif."
            },
            {
              "avant": "Les marchands",
              "options": [
                "venant",
                "en venant"
              ],
              "answer": 0,
              "apres": "de Chine apportaient aussi de la porcelaine.",
              "explication": "= qui venaient : participe présent."
            },
            {
              "avant": "",
              "options": [
                "En versant",
                "Versant"
              ],
              "answer": 0,
              "apres": "l’eau trop chaude, tu vas brûler les feuilles.",
              "explication": "Une condition : gérondif."
            },
            {
              "avant": "",
              "options": [
                "Étant",
                "En étant"
              ],
              "answer": 0,
              "apres": "fragile, cette théière doit être lavée à la main.",
              "explication": "La cause, à l’écrit : participe présent."
            },
            {
              "avant": "Elle a découvert ce thé",
              "options": [
                "en voyageant",
                "voyagé"
              ],
              "answer": 0,
              "apres": "au Yunnan.",
              "explication": "Action simultanée : gérondif."
            },
            {
              "avant": "Les feuilles",
              "options": [
                "ayant infusé",
                "en ayant infusé"
              ],
              "answer": 0,
              "apres": "trop longtemps donnent un goût amer.",
              "explication": "Participe composé, antérieur : = qui ont infusé."
            },
            {
              "avant": "Il s’est brûlé",
              "options": [
                "en goûtant",
                "goûtant"
              ],
              "answer": 0,
              "apres": "le thé trop tôt.",
              "explication": "Même sujet, action simultanée : gérondif."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Décrire un rituel du thé",
          "duree": "1 h 15",
          "regles": [
            "gerondif-participe",
            "pronoms-relatifs"
          ],
          "consigne": "Pour un magazine français, décris une façon de préparer et de boire le thé dans ta région ou ta famille : les objets, les gestes, le moment de la journée, ce que ce rituel représente pour toi.",
          "min": 180,
          "max": 240,
          "checklist": [
            "J’ai décrit les objets avec précision",
            "J’ai décrit les gestes dans l’ordre",
            "J’ai utilisé au moins deux gérondifs",
            "J’ai employé au moins cinq mots du vocabulaire de la dégustation",
            "J’ai dit ce que ce rituel représente pour moi"
          ],
          "modele": "Chez mes grands-parents, à Chaozhou, le thé n’est pas une boisson : c’est une façon d’accueillir. Dès qu’un invité entre, mon grand-père sort son plateau en bois, sur lequel il pose une minuscule théière en terre cuite et des tasses pas plus grandes qu’une noix.\n\nIl commence toujours par réchauffer les objets en les arrosant d’eau bouillante. Puis il remplit la théière de feuilles d’oolong, presque jusqu’au bord. La première infusion, très courte, sert seulement à « réveiller » les feuilles : il la jette en souriant. Ensuite, il verse le thé dans les tasses en passant rapidement de l’une à l’autre, pour que chacun ait le même goût.\n\nOn boit en trois petites gorgées, en sentant l’arôme monter, puis on repose la tasse, qu’il remplit aussitôt. Le thé est corsé, un peu amer au début, puis étonnamment doux.\n\nPour moi, ce rituel représente le temps qu’on offre aux autres. Depuis que je vis en France, je le refais avec mes amis : c’est ma manière de les inviter chez moi, et un peu chez mes grands-parents."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Faire découvrir un thé",
          "duree": "30 min",
          "consigne": "Tu fais découvrir un thé de ton choix à des amis français. Présente son origine, explique comment le préparer et décris son goût, comme la spécialiste de l’enregistrement.",
          "preparation": [
            "Je vais vous faire goûter…",
            "Il vient de…",
            "On le prépare en…",
            "Au nez, on sent…",
            "En bouche, il est…"
          ],
          "dureeCible": "1 min 30 à 2 minutes",
          "modele": "Je vais vous faire goûter un longjing, qu’on appelle aussi « puits du dragon ». Il vient de la région de Hangzhou, près du lac de l’Ouest. C’est un thé vert, donc on le prépare avec une eau qui n’est pas trop chaude, environ quatre-vingts degrés. On le laisse infuser deux minutes, en regardant les feuilles plates s’ouvrir doucement dans le verre. Au nez, on sent une odeur de châtaigne grillée et d’herbe fraîche. En bouche, il est très doux, sans amertume, avec une fin légèrement sucrée. Chez moi, on le boit au printemps, quand les nouvelles feuilles arrivent.",
          "checklist": [
            "J’ai présenté l’origine du thé",
            "J’ai expliqué la préparation",
            "J’ai décrit l’odeur et le goût",
            "J’ai utilisé au moins un gérondif"
          ]
        }
      ]
    },

    {
      "id": 19,
      "niveau": "b2",
      "theme": "Vie quotidienne",
      "titre": "L’entretien d’embauche",
      "objectif": "Se présenter, valoriser ses compétences, répondre aux questions difficiles.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Réussir un entretien d’embauche en France",
          "duree": "45 min",
          "texte": [
            "Un entretien d’embauche se prépare. Avant le rendez-vous, il est indispensable de se renseigner sur l’entreprise : son activité, ses produits, ses valeurs, son actualité récente. Rien ne fait plus mauvaise impression qu’un candidat qui ne sait pas ce que fait l’entreprise à laquelle il postule.",
            "En France, l’entretien commence souvent par une question ouverte : « Présentez-vous. » Le recruteur n’attend pas un récit de toute votre vie, mais une présentation de deux minutes environ, centrée sur votre parcours, vos compétences et ce qui vous amène à postuler. Viennent ensuite des questions sur vos expériences, puis, souvent, les questions qu’on redoute : « Quels sont vos défauts ? » ou « Où vous voyez-vous dans cinq ans ? »",
            "Pour y répondre, la sincérité vaut mieux que les réponses toutes faites. Citer un vrai défaut, en expliquant comment on travaille à le corriger, est plus convaincant que de prétendre être « trop perfectionniste ». De même, mieux vaut s’appuyer sur des exemples concrets que sur des adjectifs : plutôt que de dire « je suis organisée », racontez comment vous avez géré un projet difficile.",
            "Enfin, n’oubliez pas que l’entretien est un échange. À la fin, le recruteur demande presque toujours : « Avez-vous des questions ? » Répondre non peut laisser croire à un manque d’intérêt. Préparez deux ou trois questions sur le poste, l’équipe ou les perspectives d’évolution. Et le lendemain, un court message de remerciement peut faire la différence."
          ],
          "questions": [
            {
              "q": "Que faut-il faire avant l’entretien ?",
              "options": [
                "Se renseigner sur l’entreprise",
                "Préparer un cadeau",
                "Apprendre son CV par cœur"
              ],
              "answer": 0,
              "explication": "Premier paragraphe."
            },
            {
              "q": "Quand le recruteur dit « Présentez-vous », il attend…",
              "options": [
                "un récit détaillé de toute votre vie",
                "une présentation de deux minutes sur votre parcours et votre motivation",
                "votre CV imprimé"
              ],
              "answer": 1,
              "explication": "Deuxième paragraphe."
            },
            {
              "q": "Comment répondre à la question sur les défauts ?",
              "options": [
                "Dire qu’on n’en a pas",
                "Dire « je suis trop perfectionniste »",
                "Citer un vrai défaut et expliquer comment on le corrige"
              ],
              "answer": 2,
              "explication": "La sincérité est plus convaincante."
            },
            {
              "q": "Pourquoi faut-il poser des questions à la fin ?",
              "options": [
                "Pour montrer son intérêt",
                "Pour gagner du temps",
                "Pour connaître le salaire tout de suite"
              ],
              "answer": 0,
              "explication": "Répondre non peut sembler un manque d’intérêt."
            },
            {
              "q": "Que conseille le texte plutôt que des adjectifs ?",
              "options": [
                "Des exemples concrets",
                "Des diplômes",
                "Des recommandations écrites"
              ],
              "answer": 0,
              "explication": "Raconter une expérience précise."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Un entretien pour un stage",
          "duree": "35 min",
          "consigne": "Lin passe un entretien pour un stage dans une maison d’édition. Lis les questions, puis écoute.",
          "transcription": "Bonjour, asseyez-vous. Alors, pour commencer, pourriez-vous vous présenter ? Bien sûr. Je m’appelle Lin, je suis en première année de master de lettres à Lyon. Avant de venir en France, j’ai travaillé deux ans comme traductrice pour une agence à Shanghai, surtout des livres pour enfants. C’est d’ailleurs ce qui m’a donné envie de travailler dans l’édition. Très bien. Et pourquoi notre maison en particulier ? Parce que vous publiez de plus en plus d’auteurs asiatiques traduits, et je pense que je pourrais vous aider à repérer des textes chinois intéressants, que vous ne pouvez pas lire en version originale. Intéressant. Et quel serait votre principal défaut ? J’ai parfois du mal à déléguer : je préfère tout vérifier moi-même. Mais pendant un projet de groupe à l’université, j’ai appris à faire davantage confiance aux autres, et le résultat était meilleur. D’accord. Avez-vous des questions ? Oui : comment se passe le choix des livres à traduire ? Et est-ce que le stagiaire peut participer aux réunions éditoriales ?",
          "questions": [
            {
              "q": "Quelle expérience Lin a-t-elle avant son master ?",
              "options": [
                "Libraire à Lyon",
                "Traductrice à Shanghai",
                "Professeure d’anglais"
              ],
              "answer": 1,
              "explication": "Deux ans comme traductrice."
            },
            {
              "q": "Pourquoi a-t-elle choisi cette maison d’édition ?",
              "options": [
                "Elle est proche de chez elle.",
                "Elle publie de plus en plus d’auteurs asiatiques traduits.",
                "Elle paie bien ses stagiaires."
              ],
              "answer": 1,
              "explication": "Elle peut repérer des textes chinois."
            },
            {
              "q": "Quel défaut cite-t-elle ?",
              "options": [
                "Elle est souvent en retard.",
                "Elle a du mal à déléguer.",
                "Elle parle trop."
              ],
              "answer": 1,
              "explication": "Elle préfère tout vérifier elle-même."
            },
            {
              "q": "Comment montre-t-elle qu’elle progresse sur ce défaut ?",
              "options": [
                "Elle donne l’exemple d’un projet de groupe.",
                "Elle promet de changer.",
                "Elle dit que ce n’est pas grave."
              ],
              "answer": 0,
              "explication": "Un exemple concret, comme le conseille l’article."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le monde du travail",
          "duree": "20 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "un CDI",
              "definition": "un contrat de travail à durée indéterminée"
            },
            {
              "terme": "un CDD",
              "definition": "un contrat de travail à durée déterminée"
            },
            {
              "terme": "un stage",
              "definition": "une période de formation pratique en entreprise pendant les études"
            },
            {
              "terme": "postuler",
              "definition": "présenter sa candidature à un poste"
            },
            {
              "terme": "une lettre de motivation",
              "definition": "un courrier qui explique pourquoi on veut le poste"
            },
            {
              "terme": "un recruteur",
              "definition": "la personne chargée de choisir les candidats"
            },
            {
              "terme": "les perspectives d’évolution",
              "definition": "les possibilités de progresser dans l’entreprise"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Le conditionnel de politesse et de projet",
          "duree": "45 min",
          "regles": [
            "conditionnel",
            "registres-de-langue"
          ],
          "fiche": "<p>Le <strong>conditionnel présent</strong> adoucit une demande (<em>je voudrais, pourriez-vous</em>), exprime un souhait ou présente une situation imaginée (<em>dans ce poste, je serais chargée de…</em>). Le <strong>conditionnel passé</strong> exprime un regret ou un reproche (<em>j’aurais dû</em>).</p><p class=\"ex\"><strong>Pourriez</strong>-vous me préciser les horaires ? J’<strong>aurais aimé</strong> en savoir plus sur l’équipe.</p>",
          "consigne": "Choisis la forme qui convient.",
          "phrases": [
            {
              "avant": "",
              "options": [
                "Pourriez",
                "Pouvez"
              ],
              "answer": 0,
              "apres": "-vous me dire quand je recevrai une réponse ?",
              "explication": "Le conditionnel est plus poli dans un contexte professionnel."
            },
            {
              "avant": "Je",
              "options": [
                "souhaiterais",
                "souhaiterai"
              ],
              "answer": 0,
              "apres": "obtenir des informations sur le poste.",
              "explication": "« -rais » : conditionnel ; « -rai » : futur."
            },
            {
              "avant": "Dans ce stage, je",
              "options": [
                "serais",
                "serai"
              ],
              "answer": 0,
              "apres": "heureuse de participer aux réunions.",
              "explication": "Un souhait poli, pas une certitude : conditionnel."
            },
            {
              "avant": "J’",
              "options": [
                "aurais dû",
                "devrais"
              ],
              "answer": 0,
              "apres": "préparer davantage de questions.",
              "explication": "Regret sur le passé : conditionnel passé."
            },
            {
              "avant": "Il",
              "options": [
                "faudrait",
                "faudra"
              ],
              "answer": 0,
              "apres": "que je relise ma lettre avant de l’envoyer.",
              "explication": "Conseil adouci : conditionnel."
            },
            {
              "avant": "Si vous me retenez, je",
              "options": [
                "commencerai",
                "commencerais"
              ],
              "answer": 0,
              "apres": "dès le 1er mars.",
              "explication": "Si + présent → futur."
            },
            {
              "avant": "Auriez-vous",
              "options": [
                "l’amabilité",
                "la gentil"
              ],
              "answer": 0,
              "apres": "de me rappeler ?",
              "explication": "Formule figée : « auriez-vous l’amabilité de… »"
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Une lettre de motivation",
          "duree": "1 h 15",
          "regles": [
            "conditionnel",
            "registres-de-langue"
          ],
          "consigne": "Rédige une lettre de motivation pour un stage ou un emploi étudiant qui t’intéresse vraiment (bibliothèque, musée, entreprise, association…). Présente ton parcours, explique ta motivation et ce que tu peux apporter.",
          "min": 200,
          "max": 260,
          "checklist": [
            "J’ai indiqué le poste visé dans l’objet ou la première phrase",
            "J’ai présenté mon parcours en lien avec le poste",
            "J’ai expliqué pourquoi cette organisation en particulier",
            "J’ai donné au moins un exemple concret de compétence",
            "J’ai utilisé une formule de politesse finale correcte"
          ],
          "modele": "Objet : Candidature pour un stage de médiation culturelle\n\nMadame la Directrice,\n\nÉtudiante en master de lettres à l’université Lyon 2, je souhaiterais effectuer au sein du musée des Confluences le stage de trois mois que vous proposez au printemps.\n\nAvant mes études en France, j’ai travaillé deux ans comme traductrice à Shanghai, où j’ai appris à rendre des textes complexes accessibles à un jeune public. Cette expérience m’a convaincue que la transmission est au cœur de ce que j’aime faire. Je suis par ailleurs bénévole dans une association qui organise des visites de Lyon pour des étudiants étrangers : j’y conçois des parcours et j’accompagne des groupes de vingt personnes.\n\nVotre musée m’attire particulièrement par la place qu’il accorde aux collections extra-européennes, notamment asiatiques. Grâce à ma connaissance du chinois et de la culture chinoise, je pourrais contribuer à la conception de visites ou de documents destinés aux visiteurs sinophones, de plus en plus nombreux.\n\nJe serais heureuse de vous exposer ma motivation lors d’un entretien.\n\nJe vous prie d’agréer, Madame la Directrice, l’expression de mes salutations respectueuses.\n\nLin Zhou"
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Me présenter en deux minutes",
          "duree": "30 min",
          "consigne": "Simule le début d’un entretien : présente-toi en deux minutes pour le stage ou l’emploi de ton choix. Parle de ton parcours, d’une compétence illustrée par un exemple, et de ta motivation. Puis réponds à voix haute à la question : « Quel est votre principal défaut ? »",
          "preparation": [
            "Je suis actuellement…",
            "Auparavant, j’ai…",
            "Par exemple, lorsque…",
            "Ce qui me motive, c’est…",
            "Mon principal défaut, c’est…, mais…"
          ],
          "dureeCible": "2 minutes",
          "modele": "Je suis actuellement étudiante en master de lettres à Lyon. Auparavant, j’ai travaillé deux ans comme traductrice à Shanghai, principalement pour des livres jeunesse. Cette expérience m’a appris la rigueur, mais aussi l’organisation : par exemple, lorsque nous avons dû traduire une collection de six albums en un mois, j’ai proposé un planning à toute l’équipe et nous avons rendu le travail à temps. Ce qui me motive dans ce stage, c’est la possibilité de découvrir l’édition de l’intérieur. Quant à mon principal défaut, j’ai parfois du mal à déléguer. Mais j’ai appris à faire confiance aux autres, et je me rends compte que le travail collectif est souvent meilleur.",
          "checklist": [
            "J’ai parlé environ deux minutes",
            "J’ai donné un exemple concret",
            "J’ai expliqué ma motivation",
            "J’ai répondu à la question sur le défaut de façon sincère"
          ]
        }
      ]
    },

    {
      "id": 20,
      "niveau": "b2",
      "theme": "Études et université",
      "titre": "Suivre un cours magistral",
      "objectif": "Repérer le plan d’un exposé oral et prendre des notes efficaces.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Prendre des notes en amphithéâtre",
          "duree": "45 min",
          "texte": [
            "Pour beaucoup d’étudiants étrangers, le premier cours magistral en France est un choc. Dans un amphithéâtre de deux cents places, le professeur parle pendant deux heures, souvent sans support écrit détaillé. Il n’attend pas de questions pendant le cours, et c’est aux étudiants de noter l’essentiel.",
            "La première règle est de ne pas tout écrire. Un professeur parle environ trois fois plus vite qu’on n’écrit à la main : vouloir tout noter, c’est la meilleure manière de tout perdre. Il faut repérer la structure du cours. Les enseignants l’annoncent souvent dès le début : « Nous verrons d’abord…, puis… ». Les mots de liaison aident aussi : « en revanche » annonce une opposition, « autrement dit » une reformulation, « en somme » une conclusion.",
            "La deuxième règle est d’utiliser des abréviations et des symboles : « gvt » pour gouvernement, « qqch » pour quelque chose, une flèche pour une conséquence, le signe « ≠ » pour une différence. L’essentiel est d’être cohérent et de toujours utiliser les mêmes.",
            "Enfin, une prise de notes ne sert à rien si on ne la relit pas. Les spécialistes de la mémoire conseillent de reprendre ses notes le jour même, de les compléter, et de résumer le cours en quelques lignes. C’est à ce moment-là que l’on comprend vraiment ce qu’on a entendu."
          ],
          "questions": [
            {
              "q": "Qu’est-ce qui surprend les étudiants étrangers dans un cours magistral ?",
              "options": [
                "Le professeur pose beaucoup de questions.",
                "Le professeur parle longtemps et les étudiants doivent noter seuls l’essentiel.",
                "Les cours sont très courts."
              ],
              "answer": 1,
              "explication": "Premier paragraphe."
            },
            {
              "q": "Pourquoi ne faut-il pas tout écrire ?",
              "options": [
                "Parce que le professeur parle beaucoup plus vite qu’on n’écrit",
                "Parce que c’est interdit",
                "Parce que le cours est en ligne"
              ],
              "answer": 0,
              "explication": "Environ trois fois plus vite."
            },
            {
              "q": "Que signale « autrement dit » ?",
              "options": [
                "Une opposition",
                "Une reformulation",
                "Une conclusion"
              ],
              "answer": 1,
              "explication": "On dit la même chose autrement."
            },
            {
              "q": "Quelle est la règle pour les abréviations ?",
              "options": [
                "En inventer de nouvelles à chaque cours",
                "Toujours utiliser les mêmes",
                "N’en utiliser aucune"
              ],
              "answer": 1,
              "explication": "Être cohérent."
            },
            {
              "q": "Que conseillent les spécialistes de la mémoire ?",
              "options": [
                "Relire ses notes le jour même et résumer le cours",
                "Recopier le cours au propre une semaine plus tard",
                "Enregistrer le cours"
              ],
              "answer": 0,
              "explication": "Dernier paragraphe."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Extrait d’un cours magistral",
          "duree": "35 min",
          "consigne": "Voici le début d’un cours d’histoire du livre. Prends des notes pendant l’écoute, puis réponds aux questions.",
          "transcription": "Bonjour à tous. Aujourd’hui, nous allons parler de l’invention de l’imprimerie et de ses conséquences. Nous verrons d’abord les origines de cette technique, puis ses effets sur la diffusion du savoir, et enfin les résistances qu’elle a suscitées. Premier point, donc, les origines. On attribue souvent l’invention de l’imprimerie à Gutenberg, vers 1450, à Mayence. Or, c’est inexact. En Chine, on imprimait déjà des textes avec des planches de bois gravées depuis au moins le huitième siècle, et un artisan nommé Bi Sheng avait mis au point des caractères mobiles en terre cuite dès le onzième siècle. Ce que Gutenberg invente, en revanche, c’est un système complet : des caractères mobiles en métal, une encre adaptée et une presse inspirée des pressoirs à vin. Autrement dit, il ne crée pas l’idée, mais il la rend industrielle. Et c’est là qu’intervient notre deuxième point : en à peine cinquante ans, des millions de livres sont imprimés en Europe.",
          "questions": [
            {
              "q": "Quel est le plan annoncé par le professeur ?",
              "options": [
                "Origines, effets sur la diffusion du savoir, résistances",
                "Gutenberg, la Chine, la Bible",
                "Le papier, l’encre, la presse"
              ],
              "answer": 0,
              "explication": "Il l’annonce dès le début : « d’abord…, puis…, et enfin… »."
            },
            {
              "q": "Selon le professeur, l’idée que Gutenberg a inventé l’imprimerie est…",
              "options": [
                "exacte",
                "inexacte",
                "récente"
              ],
              "answer": 1,
              "explication": "« Or, c’est inexact. »"
            },
            {
              "q": "Qu’avait inventé Bi Sheng ?",
              "options": [
                "Une presse à vin",
                "Des caractères mobiles en terre cuite",
                "Le papier"
              ],
              "answer": 1,
              "explication": "Au XIe siècle, en Chine."
            },
            {
              "q": "Que signifie « il la rend industrielle » ?",
              "options": [
                "Il permet une production en grande quantité.",
                "Il la vend à des usines.",
                "Il la rend plus chère."
              ],
              "answer": 0,
              "explication": "Son système permet d’imprimer massivement."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Les mots qui structurent un cours",
          "duree": "20 min",
          "consigne": "Associe chaque expression à sa fonction.",
          "items": [
            {
              "terme": "d’une part… d’autre part",
              "definition": "présenter deux aspects d’une même question"
            },
            {
              "terme": "en revanche",
              "definition": "introduire une opposition"
            },
            {
              "terme": "autrement dit",
              "definition": "reformuler une idée"
            },
            {
              "terme": "notamment",
              "definition": "introduire un exemple parmi d’autres"
            },
            {
              "terme": "en somme",
              "definition": "résumer, conclure"
            },
            {
              "terme": "à savoir",
              "definition": "préciser ce qui vient d’être annoncé"
            },
            {
              "terme": "or",
              "definition": "introduire un élément qui fait avancer ou contredit le raisonnement"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "La nominalisation",
          "duree": "45 min",
          "regles": [
            "nominalisation"
          ],
          "fiche": "<p>La <strong>nominalisation</strong> transforme un verbe ou un adjectif en nom : <em>inventer → l’invention</em>, <em>diffuser → la diffusion</em>, <em>rapide → la rapidité</em>. Elle permet d’écrire de façon concise : c’est la base de la prise de notes et des titres.</p><p class=\"ex\">Gutenberg a inventé l’imprimerie → <strong>l’invention</strong> de l’imprimerie par Gutenberg.</p>",
          "consigne": "Choisis le nom qui correspond au verbe ou à l’adjectif.",
          "phrases": [
            {
              "avant": "Les livres se diffusent rapidement → la",
              "options": [
                "diffusion",
                "diffusement"
              ],
              "answer": 0,
              "apres": "rapide des livres.",
              "explication": "Diffuser → la diffusion."
            },
            {
              "avant": "Le savoir se développe → le",
              "options": [
                "développement",
                "développage"
              ],
              "answer": 0,
              "apres": "du savoir.",
              "explication": "Suffixe -ment."
            },
            {
              "avant": "L’Église résiste → la",
              "options": [
                "résistance",
                "résistation"
              ],
              "answer": 0,
              "apres": "de l’Église.",
              "explication": "Résister → la résistance."
            },
            {
              "avant": "Les prix baissent → la",
              "options": [
                "baisse",
                "baissement"
              ],
              "answer": 0,
              "apres": "des prix.",
              "explication": "Certains noms viennent du radical seul : baisser → la baisse."
            },
            {
              "avant": "Le texte est clair → la",
              "options": [
                "clarté",
                "clairté"
              ],
              "answer": 0,
              "apres": "du texte.",
              "explication": "Clair → la clarté."
            },
            {
              "avant": "Les étudiants réussissent → la",
              "options": [
                "réussite",
                "réussissement"
              ],
              "answer": 0,
              "apres": "des étudiants.",
              "explication": "Réussir → la réussite."
            },
            {
              "avant": "On analyse les sources → l’",
              "options": [
                "analyse",
                "analysement"
              ],
              "answer": 0,
              "apres": "des sources.",
              "explication": "Analyser → l’analyse."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Résumer un cours",
          "duree": "1 h",
          "regles": [
            "nominalisation",
            "connecteurs-logiques"
          ],
          "consigne": "À partir de l’extrait du cours d’histoire du livre (activité d’écoute) et de tes notes, rédige un résumé clair pour une camarade absente. Reprends le plan annoncé et les informations essentielles.",
          "min": 120,
          "max": 170,
          "checklist": [
            "J’ai repris le plan du cours",
            "J’ai gardé les dates et les noms essentiels",
            "J’ai utilisé au moins trois nominalisations",
            "J’ai écrit avec mes propres mots, sans recopier la transcription",
            "Mon résumé est compréhensible sans avoir écouté le cours"
          ],
          "modele": "Cours d’histoire du livre : l’imprimerie et ses conséquences\n\nLe professeur a annoncé trois parties : les origines de l’imprimerie, ses effets sur la diffusion du savoir et les résistances qu’elle a provoquées.\n\n1. Les origines. L’attribution de l’invention à Gutenberg (vers 1450, Mayence) est inexacte. En Chine, l’impression sur planches de bois existait au moins dès le VIIIe siècle, et Bi Sheng avait créé des caractères mobiles en terre cuite au XIe siècle. L’apport de Gutenberg réside dans la mise au point d’un système complet : caractères en métal, encre adaptée, presse inspirée du pressoir à vin. Il a donc permis l’industrialisation de l’imprimerie plutôt que son invention.\n\n2. Les effets. En cinquante ans, des millions de livres ont été imprimés en Europe. (Suite au prochain cours.)"
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Restituer un cours",
          "duree": "30 min",
          "consigne": "Une camarade n’a pas pu venir au cours. Explique-lui à voix haute, en t’appuyant uniquement sur tes notes, ce que le professeur a dit sur les origines de l’imprimerie. Utilise les marqueurs de structure.",
          "preparation": [
            "Le prof a commencé par annoncer…",
            "D’abord, il a expliqué que…",
            "Ce qui est intéressant, c’est que…",
            "Autrement dit, …",
            "En somme, …"
          ],
          "dureeCible": "1 min 30",
          "modele": "Alors, le prof a commencé par annoncer le plan : les origines de l’imprimerie, ses effets sur le savoir, et les résistances. On n’a vu que la première partie. D’abord, il a expliqué que, contrairement à ce qu’on croit, ce n’est pas Gutenberg qui a inventé l’imprimerie. Ce qui est intéressant, c’est qu’en Chine on imprimait déjà au huitième siècle avec des planches de bois, et qu’un certain Bi Sheng avait inventé des caractères mobiles en terre cuite. Gutenberg, lui, a créé un système complet, avec du métal et une presse. Autrement dit, il n’a pas eu l’idée, mais il l’a rendue industrielle. En somme, il faut retenir que l’innovation de Gutenberg, c’est l’échelle.",
          "checklist": [
            "J’ai suivi le plan du cours",
            "J’ai utilisé au moins trois marqueurs de structure",
            "J’ai gardé les informations essentielles",
            "J’ai parlé à partir de notes, pas d’un texte rédigé"
          ]
        }
      ]
    },

    {
      "id": 21,
      "niveau": "c1",
      "theme": "Information, géopolitique et histoire",
      "titre": "Lire la presse d’opinion",
      "objectif": "Analyser un éditorial et ses procédés de persuasion.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Éditorial : « Le bureau est mort, vive le bureau ! »",
          "duree": "50 min",
          "texte": [
            "Il y a quelques années encore, on nous promettait la fin du bureau. Le télétravail, imposé dans l’urgence, allait libérer les salariés des transports, des open spaces bruyants et des réunions interminables. Les entreprises, ravies d’économiser sur leurs loyers, rendaient leurs étages les uns après les autres. Le monde d’après, nous disait-on, serait sans badge ni machine à café.",
            "Force est de constater que la prophétie a fait long feu. Dans bien des entreprises, on rappelle désormais les troupes au moins trois jours par semaine, au nom de la « cohésion d’équipe » et de la « créativité », ces deux vertus qui, paraît-il, ne se transmettent pas par visioconférence. Les mêmes dirigeants qui vantaient hier la confiance et l’autonomie redécouvrent aujourd’hui les charmes de la présence, c’est-à-dire du contrôle.",
            "Il ne s’agit pas de nier que le travail à distance ait ses limites. Les jeunes recrues, en particulier, apprennent mal leur métier derrière un écran, et l’isolement pèse sur certains. Mais ces difficultés appelaient une réflexion sur l’organisation du travail, non un retour pur et simple au monde d’avant. Car le véritable enjeu n’est pas le lieu : c’est le sens. Un salarié qui traverse la ville pour répondre à des courriels qu’il aurait pu écrire chez lui n’en sort ni plus créatif ni plus soudé.",
            "Le bureau n’est donc pas mort. Il lui reste à prouver qu’il sert encore à quelque chose."
          ],
          "questions": [
            {
              "q": "Quel est le ton du premier paragraphe ?",
              "options": [
                "Neutre et informatif",
                "Ironique : l’auteur rappelle des promesses qui ne se sont pas réalisées",
                "Enthousiaste"
              ],
              "answer": 1,
              "explication": "« On nous promettait », « nous disait-on » : l’auteur prend ses distances."
            },
            {
              "q": "« La prophétie a fait long feu » signifie que…",
              "options": [
                "la prévision s’est réalisée rapidement",
                "la prévision ne s’est pas réalisée",
                "la prévision a provoqué un incendie"
              ],
              "answer": 1,
              "explication": "Faire long feu : échouer, ne pas atteindre son but."
            },
            {
              "q": "Pourquoi l’auteur met-il « cohésion d’équipe » et « créativité » entre guillemets ?",
              "options": [
                "Pour citer un livre",
                "Pour se moquer de justifications qu’il juge peu sincères",
                "Pour souligner leur importance"
              ],
              "answer": 1,
              "explication": "Le « paraît-il » qui suit confirme le doute ironique."
            },
            {
              "q": "Selon l’auteur, quel est le véritable motif du retour au bureau ?",
              "options": [
                "Le contrôle des salariés",
                "La créativité",
                "Les économies"
              ],
              "answer": 0,
              "explication": "« Les charmes de la présence, c’est-à-dire du contrôle. »"
            },
            {
              "q": "Quelle concession l’auteur fait-il ?",
              "options": [
                "Le télétravail coûte cher.",
                "Le travail à distance a des limites, notamment pour les jeunes recrues.",
                "Les dirigeants ont toujours raison."
              ],
              "answer": 1,
              "explication": "« Il ne s’agit pas de nier que… »"
            },
            {
              "q": "Quelle est la thèse de l’éditorial ?",
              "options": [
                "Il faut supprimer les bureaux.",
                "Le bureau doit justifier son utilité ; l’enjeu est le sens du travail.",
                "Le télétravail doit être interdit."
              ],
              "answer": 1,
              "explication": "Le titre et la chute jouent sur cette idée."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une chronique radio",
          "duree": "35 min",
          "consigne": "Écoute cette chronique humoristique d’une radio publique. Attention à l’ironie : ce qui est dit n’est pas toujours ce qui est pensé.",
          "transcription": "Bonne nouvelle ce matin : selon une étude très sérieuse, financée par un fabricant de montres connectées, nous serions désormais quarante pour cent plus productifs grâce aux montres connectées. Je dois dire que j’en suis la preuve vivante. Depuis que je porte la mienne, je sais à chaque instant que je n’ai pas assez marché, pas assez dormi et pas assez respiré. C’est formidable. Avant, je vivais dans l’ignorance ; maintenant, je culpabilise en temps réel. Hier, ma montre m’a félicité pour mes onze mille pas. J’avais simplement cherché mes clés pendant une heure. Et puis il y a cette fonction merveilleuse qui me rappelle de me lever toutes les heures. Je l’ai réglée pour l’émission, du coup, je vous parle debout. Vous ne le voyez pas, mais c’est très professionnel. Bref, si vous voulez être plus productifs, achetez une montre connectée. Ou, je dis ça comme ça, dormez.",
          "questions": [
            {
              "q": "Pourquoi le chroniqueur précise-t-il qui a financé l’étude ?",
              "options": [
                "Pour donner une information neutre",
                "Pour faire douter de son objectivité",
                "Pour remercier le fabricant"
              ],
              "answer": 1,
              "explication": "Une étude financée par un fabricant de montres n’est pas indépendante."
            },
            {
              "q": "« Maintenant, je culpabilise en temps réel » : que critique-t-il ?",
              "options": [
                "La montre le rend anxieux plutôt que plus efficace.",
                "La montre est trop chère.",
                "La montre ne fonctionne pas."
              ],
              "answer": 0,
              "explication": "Le compliment apparent est une critique."
            },
            {
              "q": "Que montre l’anecdote des onze mille pas ?",
              "options": [
                "Il fait beaucoup de sport.",
                "Les chiffres de la montre ne disent rien de l’utilité de l’activité.",
                "Il a perdu sa montre."
              ],
              "answer": 1,
              "explication": "Il a seulement cherché ses clés."
            },
            {
              "q": "Quel est le vrai conseil du chroniqueur ?",
              "options": [
                "Acheter une montre connectée",
                "Dormir",
                "Travailler debout"
              ],
              "answer": 1,
              "explication": "« Je dis ça comme ça » : la chute révèle sa vraie pensée."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le vocabulaire de la presse d’opinion",
          "duree": "25 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "un éditorial",
              "definition": "un article qui exprime la position du journal, souvent signé par sa direction"
            },
            {
              "terme": "une tribune",
              "definition": "un texte d’opinion écrit par une personne extérieure au journal"
            },
            {
              "terme": "une chronique",
              "definition": "une rubrique régulière, souvent personnelle ou humoristique"
            },
            {
              "terme": "l’ironie",
              "definition": "le fait de dire le contraire de ce qu’on pense pour critiquer"
            },
            {
              "terme": "un sous-entendu",
              "definition": "une idée suggérée sans être dite clairement"
            },
            {
              "terme": "plaider pour",
              "definition": "défendre une cause avec des arguments"
            },
            {
              "terme": "une polémique",
              "definition": "un débat vif, souvent public, entre des positions opposées"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Les connecteurs de l’argumentation",
          "duree": "50 min",
          "regles": [
            "connecteurs-logiques",
            "donner-son-avis"
          ],
          "fiche": "<p>À l’écrit soutenu, on varie les connecteurs. <strong>Cause</strong> : <em>dans la mesure où, étant donné que, faute de</em>. <strong>Conséquence</strong> : <em>dès lors, si bien que, de sorte que</em>. <strong>Concession</strong> : <em>certes… mais, quand bien même + conditionnel, il n’en demeure pas moins que</em>. <strong>Addition et gradation</strong> : <em>non seulement… mais encore, voire</em>.</p><p class=\"ex\"><strong>Certes</strong>, le télétravail isole. <strong>Il n’en demeure pas moins qu’</strong>il répond à une attente forte.</p>",
          "consigne": "Choisis le connecteur qui convient.",
          "phrases": [
            {
              "avant": "",
              "options": [
                "Certes",
                "Dès lors"
              ],
              "answer": 0,
              "apres": "le bureau favorise les échanges, mais il impose aussi des trajets épuisants.",
              "explication": "« Certes… mais » : concession."
            },
            {
              "avant": "Les salariés sont plus autonomes ;",
              "options": [
                "dès lors",
                "certes"
              ],
              "answer": 0,
              "apres": ", pourquoi les surveiller davantage ?",
              "explication": "Conséquence logique : dès lors."
            },
            {
              "avant": "",
              "options": [
                "Quand bien même",
                "Puisque"
              ],
              "answer": 0,
              "apres": "le télétravail serait plus productif, certains métiers ne pourront jamais s’en passer.",
              "explication": "« Quand bien même » + conditionnel : concession hypothétique."
            },
            {
              "avant": "Ce choix est coûteux,",
              "options": [
                "voire",
                "donc"
              ],
              "answer": 0,
              "apres": "absurde.",
              "explication": "« Voire » renchérit : et même."
            },
            {
              "avant": "",
              "options": [
                "Faute de",
                "Grâce à"
              ],
              "answer": 0,
              "apres": "formation, les nouveaux salariés se sentent perdus.",
              "explication": "« Faute de » : cause négative (par manque de)."
            },
            {
              "avant": "Le débat a été mal posé,",
              "options": [
                "si bien que",
                "bien que"
              ],
              "answer": 0,
              "apres": "personne n’en est sorti convaincu.",
              "explication": "« Si bien que » + indicatif : conséquence."
            },
            {
              "avant": "Ces critiques sont fondées. Il n’en",
              "options": [
                "demeure",
                "demeurent"
              ],
              "answer": 0,
              "apres": "pas moins que le bureau garde des avantages.",
              "explication": "Tournure impersonnelle : le verbe reste au singulier. On dit aussi « il n’en reste pas moins que »."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Écrire une tribune",
          "duree": "1 h 30",
          "regles": [
            "connecteurs-logiques",
            "donner-son-avis",
            "registres-de-langue"
          ],
          "consigne": "Un grand quotidien publie une série de tribunes sur le thème : « L’université doit-elle rester en présentiel ? » Rédige ta tribune : un titre accrocheur, une thèse claire, des arguments, une concession, et une chute marquante. Tu peux utiliser une touche d’ironie.",
          "min": 250,
          "max": 320,
          "checklist": [
            "Mon titre donne envie de lire et annonce ma position",
            "Ma thèse apparaît dès le premier paragraphe",
            "J’ai au moins deux arguments développés avec des exemples",
            "J’ai intégré et réfuté un argument adverse",
            "J’ai varié les connecteurs (au moins cinq différents)",
            "Ma dernière phrase est marquante"
          ],
          "modele": "L’amphithéâtre n’est pas un cinéma\n\nOn entend souvent qu’à l’heure des cours en ligne, l’université en présentiel serait un luxe dépassé. Pourquoi traverser la ville pour écouter un professeur qu’on pourrait regarder depuis son lit, à vitesse 1,5 ? L’argument est séduisant. Il repose pourtant sur un malentendu : il confond l’université avec la diffusion d’un contenu.\n\nCertes, un cours magistral enregistré transmet des informations, et il rend service aux étudiants qui travaillent ou vivent loin. Il n’en demeure pas moins qu’apprendre ne se réduit pas à recevoir. On apprend en posant une question maladroite à la fin du cours, en se trompant devant ses camarades lors d’un travail dirigé, en discutant à la cafétéria d’une idée qu’on n’a pas comprise.\n\nPour les étudiants étrangers, l’enjeu est plus grand encore. Arrivée en France sans connaître personne, je n’ai pas appris le français dans mes vidéos, mais dans les couloirs, les bibliothèques et les files d’attente du restaurant universitaire. Dès lors, fermer les amphithéâtres, ce serait aussi fermer une porte d’entrée dans la société.\n\nQue l’on enregistre les cours, soit. Qu’on les mette en ligne pour ceux qui ne peuvent pas venir, très bien. Mais quand bien même ces outils seraient parfaits, ils resteraient des compléments.\n\nL’amphithéâtre n’est pas un cinéma : on n’y vient pas seulement pour voir, mais pour être vu, entendu, et parfois contredit."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Réagir à un éditorial",
          "duree": "35 min",
          "consigne": "Résume oralement en trois phrases l’éditorial sur le bureau, en expliquant le ton de l’auteur. Puis dis si tu partages son point de vue, en nuançant ta réponse.",
          "preparation": [
            "L’auteur de cet éditorial soutient que…",
            "Il adopte un ton…, comme le montre…",
            "Je partage en partie son analyse : …",
            "En revanche, il me semble qu’il néglige…",
            "Tout bien considéré, …"
          ],
          "dureeCible": "2 à 3 minutes",
          "modele": "L’auteur de cet éditorial soutient que le retour au bureau imposé par de nombreuses entreprises n’est pas justifié par des raisons sérieuses, mais par un besoin de contrôle. Il adopte un ton ironique, comme le montrent les guillemets autour de « cohésion d’équipe » ou l’expression « paraît-il ». Il reconnaît toutefois que le télétravail a des limites, notamment pour les débutants. Je partage en partie son analyse : se déplacer pour faire seul ce qu’on pourrait faire chez soi n’a pas de sens. En revanche, il me semble qu’il néglige un point : beaucoup de salariés vivent dans de petits logements où il est difficile de travailler. Pour eux, le bureau est aussi un espace de liberté. Tout bien considéré, je dirais que la vraie question est celle du choix.",
          "checklist": [
            "J’ai résumé la thèse de l’auteur",
            "J’ai identifié et illustré le ton",
            "J’ai exprimé un accord partiel et un désaccord",
            "J’ai conclu de façon nuancée"
          ]
        }
      ]
    },

    {
      "id": 22,
      "niveau": "c1",
      "theme": "Sciences, innovation et environnement",
      "titre": "Grandes découvertes, grands débats",
      "objectif": "Comprendre un texte de vulgarisation scientifique et ses enjeux éthiques.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Quand la science bouscule la morale",
          "duree": "50 min",
          "texte": [
            "L’histoire des sciences est aussi celle de leurs controverses. Lorsque Louis Pasteur administre en 1885 son vaccin contre la rage au jeune Joseph Meister, mordu par un chien enragé, il n’a encore jamais testé son traitement sur un être humain. L’enfant survit, et le succès est immense. Mais certains de ses contemporains lui reprocheront d’avoir pris un risque considérable, sans le consentement éclairé que l’on exigerait aujourd’hui.",
            "Quelques années plus tard, Marie Curie, première femme à recevoir un prix Nobel, puis seule personne à en recevoir deux dans deux sciences différentes, travaille sur la radioactivité. Personne ne mesure alors les dangers des rayonnements : elle transporte des tubes de radium dans ses poches, et ses carnets de laboratoire sont, dit-on, encore radioactifs. La découverte ouvrira la voie à la radiothérapie, mais aussi, plus tard, à la bombe atomique.",
            "Plus près de nous, en 2020, la Française Emmanuelle Charpentier et l’Américaine Jennifer Doudna reçoivent le prix Nobel de chimie pour CRISPR-Cas9, des « ciseaux moléculaires » capables de modifier l’ADN avec une précision inédite. Les espoirs sont considérables, notamment pour soigner certaines maladies génétiques. Pourtant, dès 2018, l’annonce de la naissance en Chine de deux bébés génétiquement modifiés par un chercheur avait suscité un tollé international, et le scientifique avait été condamné.",
            "Ces trois épisodes posent la même question : qui doit fixer les limites de la recherche ? Les chercheurs eux-mêmes, au nom de leur expertise ? Les États, au nom de l’intérêt général ? Ou la société tout entière, au risque de freiner des découvertes dont elle ne mesure pas encore la portée ? La réponse, sans doute, ne peut être que collective et provisoire, à mesure que les savoirs progressent."
          ],
          "questions": [
            {
              "q": "Que reproche-t-on rétrospectivement à Pasteur ?",
              "options": [
                "D’avoir copié un autre chercheur",
                "D’avoir testé un traitement jamais essayé sur un humain sans consentement éclairé",
                "D’avoir échoué"
              ],
              "answer": 1,
              "explication": "Le succès n’efface pas le risque pris."
            },
            {
              "q": "Qu’a de particulier Marie Curie ?",
              "options": [
                "Elle est la seule personne à avoir reçu deux prix Nobel dans deux sciences différentes.",
                "Elle a inventé la bombe atomique.",
                "Elle a découvert le vaccin contre la rage."
              ],
              "answer": 0,
              "explication": "Physique (1903) et chimie (1911)."
            },
            {
              "q": "Pourquoi le texte évoque-t-il les poches de Marie Curie ?",
              "options": [
                "Pour montrer qu’on ignorait les dangers de la radioactivité",
                "Pour décrire sa façon de s’habiller",
                "Pour expliquer sa découverte"
              ],
              "answer": 0,
              "explication": "Personne ne mesurait le danger."
            },
            {
              "q": "Qu’est-ce que CRISPR-Cas9 ?",
              "options": [
                "Un vaccin",
                "Un outil qui permet de modifier l’ADN",
                "Un médicament contre le cancer"
              ],
              "answer": 1,
              "explication": "Des « ciseaux moléculaires »."
            },
            {
              "q": "Que signifie « un tollé » ?",
              "options": [
                "Une indignation générale et bruyante",
                "Une récompense",
                "Une loi"
              ],
              "answer": 0,
              "explication": "Un ensemble de protestations."
            },
            {
              "q": "Quelle est la conclusion de l’auteur ?",
              "options": [
                "Les chercheurs doivent décider seuls.",
                "Il faut arrêter la recherche génétique.",
                "Les limites doivent être fixées collectivement et revues au fil des connaissances."
              ],
              "answer": 2,
              "explication": "« Collective et provisoire. »"
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Débat : faut-il une pause dans le développement de l’IA ?",
          "duree": "40 min",
          "consigne": "Une chercheuse et un entrepreneur débattent à la radio. Lis les questions, puis écoute.",
          "transcription": "Je ne demande pas qu’on arrête la recherche, je demande qu’on prenne le temps de comprendre ce que nous construisons. Aujourd’hui, des systèmes sont déployés auprès de millions de personnes alors que leurs concepteurs reconnaissent eux-mêmes qu’ils ne savent pas entièrement expliquer leur fonctionnement. Dans n’importe quel autre domaine, la médecine, l’aviation, on exigerait des tests approfondis avant la mise sur le marché. Je comprends cette prudence, mais une pause, concrètement, qui la respecterait ? Si l’Europe s’arrête et que d’autres continuent, nous aurons simplement perdu notre capacité à peser sur les règles. Je crois au contraire qu’il faut être à la pointe pour imposer des normes. C’est l’argument de la course : je dois courir parce que les autres courent. C’est précisément ce qui m’inquiète. On a entendu le même raisonnement pour d’autres technologies. Peut-être, mais l’alternative n’est pas entre courir et s’arrêter : c’est entre courir avec des règles et courir sans. Là, je vous rejoins : la vraie question, c’est la régulation, et elle doit être internationale.",
          "questions": [
            {
              "q": "Que demande la chercheuse ?",
              "options": [
                "L’arrêt définitif de la recherche",
                "Du temps pour comprendre et tester les systèmes avant de les déployer",
                "Plus d’investissements"
              ],
              "answer": 1,
              "explication": "Elle compare avec la médecine et l’aviation."
            },
            {
              "q": "Quel est le principal argument de l’entrepreneur ?",
              "options": [
                "Une pause ne serait pas respectée par tous, et l’Europe perdrait son influence.",
                "L’IA ne présente aucun risque.",
                "Les tests sont trop chers."
              ],
              "answer": 0,
              "explication": "C’est « l’argument de la course »."
            },
            {
              "q": "Pourquoi la chercheuse se méfie-t-elle de « l’argument de la course » ?",
              "options": [
                "Parce qu’il a déjà justifié des développements risqués par le passé",
                "Parce qu’elle n’aime pas le sport",
                "Parce qu’il est trop technique"
              ],
              "answer": 0,
              "explication": "« On a entendu le même raisonnement pour d’autres technologies. »"
            },
            {
              "q": "Sur quoi s’accordent-ils à la fin ?",
              "options": [
                "La nécessité d’une régulation internationale",
                "L’arrêt de la recherche en Europe",
                "La suppression des normes"
              ],
              "answer": 0,
              "explication": "« Là, je vous rejoins. »"
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Science et éthique",
          "duree": "25 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "le consentement éclairé",
              "definition": "l’accord donné par une personne après avoir été informée des risques"
            },
            {
              "terme": "une controverse",
              "definition": "une discussion argumentée et prolongée sur une question contestée"
            },
            {
              "terme": "le principe de précaution",
              "definition": "l’obligation d’agir pour éviter un risque grave, même incertain"
            },
            {
              "terme": "réfuter",
              "definition": "démontrer qu’une affirmation est fausse"
            },
            {
              "terme": "un essai clinique",
              "definition": "une étude qui teste un traitement sur des volontaires"
            },
            {
              "terme": "l’éthique",
              "definition": "la réflexion sur ce qu’il est juste ou non de faire"
            },
            {
              "terme": "la portée",
              "definition": "l’importance, l’étendue des effets d’une chose"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Reconnaître le passé simple",
          "duree": "45 min",
          "regles": [
            "passe-simple",
            "passe-compose-imparfait"
          ],
          "fiche": "<p>Le <strong>passé simple</strong> est le temps du récit historique et littéraire. On le rencontre surtout à la 3e personne : <em>il découvrit, elle reçut, ils firent, elle vint</em>. Il s’emploie comme le passé composé à l’oral, pour les événements de premier plan, avec l’imparfait pour l’arrière-plan.</p><p class=\"ex\">En 1885, Pasteur <strong>administra</strong> son vaccin à un enfant qui <strong>avait été</strong> mordu.</p>",
          "consigne": "Choisis la forme correcte du passé simple.",
          "phrases": [
            {
              "avant": "Marie Curie",
              "options": [
                "reçut",
                "recevut"
              ],
              "answer": 0,
              "apres": "deux prix Nobel.",
              "explication": "Recevoir → elle reçut."
            },
            {
              "avant": "Ils",
              "options": [
                "firent",
                "fairent"
              ],
              "answer": 0,
              "apres": "une découverte inattendue.",
              "explication": "Faire → ils firent."
            },
            {
              "avant": "Pasteur",
              "options": [
                "prit",
                "prenda"
              ],
              "answer": 0,
              "apres": "un risque considérable.",
              "explication": "Prendre → il prit."
            },
            {
              "avant": "Elle",
              "options": [
                "vint",
                "venut"
              ],
              "answer": 0,
              "apres": "à Paris pour étudier la physique.",
              "explication": "Venir → elle vint."
            },
            {
              "avant": "Les chercheuses",
              "options": [
                "obtinrent",
                "obtenurent"
              ],
              "answer": 0,
              "apres": "le prix en 2020.",
              "explication": "Obtenir → elles obtinrent (comme venir)."
            },
            {
              "avant": "Le public",
              "options": [
                "fut",
                "sera"
              ],
              "answer": 0,
              "apres": "stupéfait par la nouvelle.",
              "explication": "Être → il fut."
            },
            {
              "avant": "Ils",
              "options": [
                "eurent",
                "avèrent"
              ],
              "answer": 0,
              "apres": "beaucoup de mal à convaincre.",
              "explication": "Avoir → ils eurent."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Le progrès scientifique doit-il avoir des limites ?",
          "duree": "1 h 30",
          "regles": [
            "connecteurs-logiques",
            "subjonctif-emploi",
            "nominalisation"
          ],
          "consigne": "Rédige un essai argumenté sur cette question, en t’appuyant sur au moins deux exemples (ceux du texte ou d’autres). Adopte un plan dialectique : arguments pour, arguments contre, position personnelle nuancée.",
          "min": 280,
          "max": 350,
          "checklist": [
            "Mon introduction amène le sujet, pose la question et annonce le plan",
            "Chaque partie commence par une idée directrice claire",
            "J’ai utilisé au moins deux exemples précis",
            "J’ai employé des connecteurs variés et soutenus",
            "Ma conclusion répond à la question et ouvre une perspective"
          ],
          "modele": "De la vaccination aux outils de modification génétique, chaque grande découverte a suscité à la fois l’enthousiasme et l’inquiétude. Faut-il, dès lors, fixer des limites au progrès scientifique, au risque de freiner des avancées bénéfiques ? Nous verrons d’abord pourquoi la liberté de la recherche est essentielle, puis en quoi elle ne saurait être absolue, avant de proposer une voie médiane.\n\nLa liberté de chercher constitue le moteur même du progrès. Bien des découvertes majeures sont nées d’une curiosité sans application immédiate : en étudiant la radioactivité, Marie Curie ne visait aucun traitement, et pourtant ses travaux ont permis la radiothérapie. Limiter la recherche, c’est donc courir le risque de se priver de ce qu’on ne peut pas encore imaginer.\n\nIl n’en demeure pas moins que certaines expériences engagent des vies humaines. L’affaire des bébés génétiquement modifiés en 2018 a montré qu’un chercheur isolé pouvait prendre des décisions irréversibles pour des générations entières. Dans ce cas, il est indispensable que des règles existent, et qu’elles soient fixées collectivement.\n\nAinsi, plutôt que d’opposer liberté et contrôle, il semble préférable de distinguer la recherche fondamentale, qui doit rester libre, de ses applications sur l’être humain, qui exigent un encadrement strict. Les comités d’éthique, réunissant scientifiques et citoyens, offrent un modèle intéressant.\n\nEn définitive, ce n’est pas la connaissance qu’il faut limiter, mais l’usage qu’on en fait. Reste à savoir si ces règles pourront être appliquées à l’échelle mondiale."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Un exposé de trois minutes",
          "duree": "40 min",
          "consigne": "Présente une grande découverte scientifique (de ton choix, française, chinoise ou autre) sous forme d’un exposé : contexte, découverte, conséquences, débat qu’elle a suscité. Annonce ton plan au début.",
          "preparation": [
            "Je vais vous présenter…",
            "Dans un premier temps, … ; dans un second temps, …",
            "À cette époque, …",
            "Cette découverte a eu des conséquences considérables…",
            "Elle a néanmoins suscité un débat…",
            "Pour conclure, …"
          ],
          "dureeCible": "3 minutes",
          "modele": "Je vais vous présenter la découverte de l’artémisinine, un traitement contre le paludisme. Dans un premier temps, je rappellerai le contexte ; dans un second temps, j’évoquerai ses conséquences et les débats qu’elle a suscités. À la fin des années 1960, le paludisme tue des centaines de milliers de personnes chaque année et les traitements existants deviennent inefficaces. En Chine, une équipe dirigée par la pharmacologue Tu Youyou étudie alors des textes de médecine traditionnelle et identifie une plante, l’armoise annuelle. Après de nombreux essais, elle parvient à en extraire une molécule efficace. Cette découverte a eu des conséquences considérables : elle a permis de sauver des millions de vies, et Tu Youyou a reçu le prix Nobel de médecine en 2015. Elle a néanmoins suscité un débat : certains y ont vu une validation de la médecine traditionnelle, alors que d’autres soulignent que c’est la méthode scientifique qui a permis d’isoler la molécule. Pour conclure, cette histoire montre que les savoirs anciens peuvent nourrir la science moderne, à condition d’être rigoureusement testés.",
          "checklist": [
            "J’ai annoncé mon plan",
            "J’ai présenté le contexte et la découverte",
            "J’ai évoqué au moins une conséquence et un débat",
            "J’ai respecté environ trois minutes",
            "J’ai parlé à partir de notes"
          ]
        }
      ]
    },

    {
      "id": 23,
      "niveau": "c1",
      "theme": "Droits humains",
      "titre": "La liberté d’expression et ses limites",
      "objectif": "Construire une argumentation nuancée sur un sujet sensible.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "La liberté d’expression : un principe, des limites",
          "duree": "50 min",
          "texte": [
            "« La libre communication des pensées et des opinions est un des droits les plus précieux de l’Homme. » Ainsi commence l’article 11 de la Déclaration des droits de l’homme et du citoyen de 1789. Mais la phrase ne s’arrête pas là : chacun peut parler, écrire et imprimer librement, « sauf à répondre de l’abus de cette liberté dans les cas déterminés par la loi ». Dès l’origine, la liberté d’expression est donc pensée avec ses limites.",
            "En France, la grande loi du 29 juillet 1881 sur la liberté de la presse fixe encore aujourd’hui l’essentiel du cadre. Elle supprime la censure préalable : on n’a pas besoin d’autorisation pour publier. En revanche, on peut être poursuivi après publication pour certains abus, notamment la diffamation (accuser quelqu’un d’un fait précis qui porte atteinte à son honneur), l’injure, ou la provocation à la haine et à la violence.",
            "Cette conception distingue la France d’autres traditions juridiques. Aux États-Unis, le Premier amendement protège la parole de manière beaucoup plus large, y compris des propos que la loi française punirait. Les partisans du modèle américain estiment que les idées dangereuses se combattent mieux par le débat que par les tribunaux ; ceux du modèle français répondent que certains discours, en désignant des boucs émissaires, préparent la violence réelle.",
            "Les réseaux sociaux ont rendu la question plus brûlante encore. Désormais, ce ne sont plus seulement les juges qui tracent la frontière, mais aussi des plateformes privées, selon leurs propres règles. Qui doit décider de ce qui peut être dit ? La question, vieille de plus de deux siècles, n’a jamais été aussi actuelle."
          ],
          "questions": [
            {
              "q": "Que montre la fin de l’article 11 ?",
              "options": [
                "Que la liberté d’expression est absolue",
                "Que la liberté d’expression a été pensée dès le départ avec des limites fixées par la loi",
                "Que la presse était interdite en 1789"
              ],
              "answer": 1,
              "explication": "« Sauf à répondre de l’abus de cette liberté… »"
            },
            {
              "q": "Qu’a supprimé la loi de 1881 ?",
              "options": [
                "La censure préalable",
                "Les journaux",
                "Le droit de critiquer le gouvernement"
              ],
              "answer": 0,
              "explication": "Plus besoin d’autorisation avant publication."
            },
            {
              "q": "Qu’est-ce que la diffamation ?",
              "options": [
                "Une insulte sans fait précis",
                "L’accusation d’un fait précis qui porte atteinte à l’honneur",
                "Une critique d’un livre"
              ],
              "answer": 1,
              "explication": "L’injure, elle, ne repose pas sur un fait précis."
            },
            {
              "q": "Quelle est la position des défenseurs du modèle américain ?",
              "options": [
                "Les idées dangereuses se combattent par le débat plutôt que par les tribunaux.",
                "Il faut interdire les réseaux sociaux.",
                "La justice doit contrôler toutes les publications."
              ],
              "answer": 0,
              "explication": "Troisième paragraphe."
            },
            {
              "q": "Qu’est-ce qu’un « bouc émissaire » ?",
              "options": [
                "Un animal sacré",
                "Une personne ou un groupe accusé à tort de tous les maux",
                "Un journaliste"
              ],
              "answer": 1,
              "explication": "Expression d’origine biblique."
            },
            {
              "q": "Quelle nouveauté apportent les réseaux sociaux ?",
              "options": [
                "Des plateformes privées tracent elles-mêmes des limites.",
                "La censure préalable revient.",
                "Les juges disparaissent."
              ],
              "answer": 0,
              "explication": "Dernier paragraphe."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Un cours d’introduction au droit",
          "duree": "40 min",
          "consigne": "Une enseignante de droit répond à la question d’un étudiant. Lis les questions, puis écoute.",
          "transcription": "Votre question est excellente : peut-on tout dire au nom de l’humour ? Le droit français répond : presque. La satire et la caricature bénéficient d’une protection particulière, parce qu’elles participent au débat public. Les juges admettent que l’humour exagère, choque, voire blesse. Ce qu’ils examinent, c’est l’intention et le contexte. Un dessin qui se moque d’une religion, d’un dirigeant ou d’une idée est en principe protégé, même s’il est de mauvais goût. En revanche, si sous couvert d’humour, on vise des personnes en raison de leur origine ou de leur religion, pour les rabaisser ou appeler à les rejeter, le juge peut considérer que la limite est franchie. Autrement dit, on peut critiquer une croyance, mais pas inciter à la haine contre ceux qui la partagent. La frontière n’est pas toujours facile à tracer, et c’est pourquoi chaque affaire est jugée au cas par cas.",
          "questions": [
            {
              "q": "Pourquoi la satire est-elle particulièrement protégée ?",
              "options": [
                "Parce qu’elle participe au débat public",
                "Parce qu’elle est toujours drôle",
                "Parce qu’elle est rare"
              ],
              "answer": 0,
              "explication": "C’est le premier argument de l’enseignante."
            },
            {
              "q": "Qu’examinent les juges ?",
              "options": [
                "Le nombre de lecteurs",
                "L’intention et le contexte",
                "Le prix du journal"
              ],
              "answer": 1,
              "explication": "« Ce qu’ils examinent, c’est l’intention et le contexte. »"
            },
            {
              "q": "Quelle distinction fondamentale l’enseignante fait-elle ?",
              "options": [
                "Entre critiquer une croyance et inciter à la haine contre des personnes",
                "Entre l’humour et le sérieux",
                "Entre la presse et la télévision"
              ],
              "answer": 0,
              "explication": "C’est le cœur de sa réponse."
            },
            {
              "q": "Pourquoi chaque affaire est-elle jugée au cas par cas ?",
              "options": [
                "Parce que la frontière n’est pas toujours facile à tracer",
                "Parce que la loi n’existe pas",
                "Parce que les juges manquent de temps"
              ],
              "answer": 0,
              "explication": "Dernière phrase."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le vocabulaire juridique",
          "duree": "25 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "la censure",
              "definition": "le contrôle et l’interdiction d’une publication par une autorité"
            },
            {
              "terme": "la diffamation",
              "definition": "l’affirmation d’un fait précis qui porte atteinte à l’honneur de quelqu’un"
            },
            {
              "terme": "l’injure",
              "definition": "une expression outrageante qui ne repose sur aucun fait précis"
            },
            {
              "terme": "l’autocensure",
              "definition": "le fait de se retenir soi-même de dire ou d’écrire quelque chose"
            },
            {
              "terme": "la satire",
              "definition": "une œuvre qui se moque des mœurs ou des personnes pour les critiquer"
            },
            {
              "terme": "être poursuivi",
              "definition": "faire l’objet d’une action en justice"
            },
            {
              "terme": "un abus",
              "definition": "un usage excessif ou injuste d’un droit"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Le subjonctif dans l’argumentation",
          "duree": "50 min",
          "regles": [
            "subjonctif-emploi",
            "subjonctif-formation"
          ],
          "fiche": "<p>Au niveau avancé, le subjonctif apparaît après : la <strong>concession</strong> (<em>bien que, quoique, si… que, quel que soit</em>), la <strong>condition</strong> (<em>à condition que, pourvu que, à moins que</em>), le <strong>but</strong> (<em>pour que, afin que, de peur que</em>), l’<strong>antériorité</strong> (<em>avant que, jusqu’à ce que</em>) et le doute (<em>il est peu probable que, il n’est pas certain que</em>). Attention : <em>après que</em> est suivi de l’indicatif.</p><p class=\"ex\"><strong>Quelle que soit</strong> l’opinion exprimée, elle peut être débattue, <strong>à moins qu’</strong>elle n’<strong>incite</strong> à la haine.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "",
              "options": [
                "Quelle que soit",
                "Quelle que est"
              ],
              "answer": 0,
              "apres": "votre opinion, vous avez le droit de l’exprimer.",
              "explication": "Quel que soit + nom : subjonctif, accordé avec le nom."
            },
            {
              "avant": "On peut tout publier, à moins que le texte n’",
              "options": [
                "incite",
                "incite pas"
              ],
              "answer": 0,
              "apres": "à la violence.",
              "explication": "« Ne » explétif, sans valeur négative : « à moins qu’il n’incite »."
            },
            {
              "avant": "Il faut protéger les journalistes afin qu’ils",
              "options": [
                "puissent",
                "peuvent"
              ],
              "answer": 0,
              "apres": "enquêter librement.",
              "explication": "But : subjonctif."
            },
            {
              "avant": "Après que la loi",
              "options": [
                "a été votée",
                "ait été votée"
              ],
              "answer": 0,
              "apres": ", la censure a disparu.",
              "explication": "« Après que » : indicatif (l’action est réalisée)."
            },
            {
              "avant": "Il est peu probable que ce débat",
              "options": [
                "soit",
                "est"
              ],
              "answer": 0,
              "apres": "tranché rapidement.",
              "explication": "Doute : subjonctif."
            },
            {
              "avant": "Si choquante que",
              "options": [
                "soit",
                "est"
              ],
              "answer": 0,
              "apres": "cette caricature, elle reste protégée.",
              "explication": "Si + adjectif + que : concession, subjonctif."
            },
            {
              "avant": "Le débat continuera jusqu’à ce qu’on",
              "options": [
                "trouve",
                "trouvera"
              ],
              "answer": 0,
              "apres": "un équilibre.",
              "explication": "Jusqu’à ce que + subjonctif."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Peut-on tout dire sur les réseaux sociaux ?",
          "duree": "1 h 30",
          "regles": [
            "subjonctif-emploi",
            "connecteurs-logiques",
            "registres-de-langue"
          ],
          "consigne": "Rédige un article de réflexion pour un magazine étudiant. Présente le problème, confronte au moins deux positions en t’appuyant sur le texte et l’enregistrement, puis défends une position personnelle argumentée.",
          "min": 280,
          "max": 350,
          "checklist": [
            "J’ai présenté le problème et sa portée",
            "J’ai exposé honnêtement la position que je ne partage pas",
            "J’ai cité au moins un élément du texte ou de l’enregistrement",
            "J’ai utilisé au moins quatre subjonctifs dans des constructions variées",
            "Ma position finale est nuancée et argumentée"
          ],
          "modele": "Peut-on tout dire sur les réseaux sociaux ?\n\nChaque jour, des millions de messages sont publiés sans relecture, sans éditeur, souvent sous pseudonyme. Jamais la parole n’a été aussi libre ; jamais, peut-être, elle n’a été aussi violente. Faut-il, dès lors, encadrer davantage ce qui s’écrit en ligne ?\n\nPour certains, toute restriction supplémentaire serait dangereuse. Selon eux, les idées choquantes doivent pouvoir circuler afin qu’on puisse les réfuter publiquement. Interdire, ce serait leur donner l’attrait du fruit défendu. Cet argument, central dans la tradition américaine, rappelle qu’aucune autorité n’est à l’abri de l’erreur lorsqu’elle décide de ce qui peut être dit.\n\nD’autres soulignent toutefois que les réseaux sociaux ne sont pas une simple place publique. Leurs algorithmes amplifient les contenus qui suscitent l’indignation, si bien qu’un message haineux peut atteindre des millions de personnes en quelques heures. Comme le rappelait l’enseignante de droit, on peut critiquer une croyance, mais non inciter à la haine contre ceux qui la partagent.\n\nÀ mon sens, la question n’est pas tant de savoir si l’on peut tout dire, que de savoir qui décide. Il me paraît indispensable que les limites soient fixées par la loi, débattues démocratiquement et contrôlées par des juges, plutôt que par des entreprises privées, quelle que soit leur bonne volonté. Il faudrait aussi que les plateformes rendent leurs algorithmes plus transparents, pour que chacun comprenne pourquoi tel contenu lui est montré.\n\nLa liberté d’expression n’est pas menacée par les règles ; elle l’est par l’absence de règles claires."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Un débat nuancé",
          "duree": "35 min",
          "consigne": "Un humoriste a fait une blague sur ton pays qui a provoqué une polémique. Certains demandent qu’il soit sanctionné. Donne ton avis à voix haute, en distinguant ce qui relève de l’humour et ce qui relève, éventuellement, du mépris.",
          "preparation": [
            "Tout dépend de…",
            "Si la blague vise…, alors…",
            "Je peux comprendre que…, mais…",
            "Il ne faudrait pas que…",
            "En fin de compte, je dirais que…"
          ],
          "dureeCible": "2 à 3 minutes",
          "modele": "Tout dépend, à mon avis, de ce que vise la blague. Si elle se moque de nos habitudes, de notre façon de faire la queue ou de notre passion pour les photos, je trouve qu’elle fait partie du jeu : on rit bien des Français en Chine ! Je peux comprendre que certains se sentent blessés, mais être choqué ne signifie pas forcément que la limite est franchie. En revanche, si la blague réduit tout un peuple à un stéréotype méprisant, ou si elle laisse entendre que les Chinois seraient dangereux, alors ce n’est plus de l’humour, c’est de la stigmatisation. Il ne faudrait pas que ce genre de propos devienne banal. En fin de compte, je dirais qu’une sanction juridique n’est justifiée que dans les cas les plus graves ; pour le reste, la meilleure réponse, c’est la critique, et parfois… une meilleure blague.",
          "checklist": [
            "J’ai distingué deux cas",
            "J’ai reconnu la position opposée",
            "J’ai utilisé au moins deux subjonctifs",
            "J’ai conclu de façon nuancée"
          ]
        }
      ]
    },

    {
      "id": 24,
      "niveau": "c1",
      "theme": "Culture, littérature et francophonie",
      "chine": true,
      "titre": "La Chine vue par les écrivains français",
      "objectif": "Découvrir le regard de Voltaire, Claudel, Segalen ou Michaux sur la Chine, et le mettre en perspective.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "La Chine dans le miroir des écrivains français",
          "duree": "50 min",
          "texte": [
            "Pendant des siècles, la plupart des écrivains français ont parlé de la Chine sans jamais y être allés. Au XVIIIe siècle, Voltaire s’appuie sur les récits des missionnaires jésuites pour faire de l’empire chinois un modèle : un État gouverné, croit-il, par des lettrés et une morale sans dogmes, qu’il oppose volontiers à la France de son temps. En 1755, il fait jouer L’Orphelin de la Chine, une tragédie inspirée d’une pièce chinoise. La Chine lui sert surtout de miroir pour critiquer l’Europe.",
            "Au tournant du XXe siècle, d’autres écrivains font le voyage. Paul Claudel, consul en Chine pendant près de quinze ans, compose les poèmes en prose de Connaissance de l’Est. Victor Segalen, médecin de marine, parcourt le pays à cheval et publie en 1912 Stèles, un recueil inspiré des inscriptions gravées sur pierre. Segalen se méfie de l’exotisme superficiel : pour lui, la rencontre de l’autre suppose d’accepter sa part irréductible de mystère, ce qu’il appelle le « Divers ».",
            "Le regard peut aussi se faire ironique, voire critique. Dans Un barbare en Asie, en 1933, Henri Michaux se décrit lui-même comme le « barbare », retournant le regard européen contre celui qui voyage. Plus tard, Marguerite Yourcenar, dans une nouvelle qui se déroule dans une Chine légendaire, imagine un vieux peintre sauvé par son propre tableau : la Chine y devient le lieu d’une réflexion sur le pouvoir de l’art.",
            "Il serait tentant de ne voir dans ces textes qu’un orientalisme naïf. Ce serait oublier qu’ils témoignent aussi d’une curiosité sincère, et parfois d’une remise en question. Reste qu’ils parlent souvent davantage de la France que de la Chine. C’est peut-être en lisant aujourd’hui des écrivains chinois écrivant en français, comme François Cheng ou Dai Sijie, que le dialogue devient véritablement réciproque."
          ],
          "questions": [
            {
              "q": "À quoi sert la Chine dans l’œuvre de Voltaire ?",
              "options": [
                "De sujet d’étude scientifique",
                "De miroir pour critiquer l’Europe",
                "De décor pour des romans d’aventure"
              ],
              "answer": 1,
              "explication": "Il idéalise la Chine pour mieux critiquer la France."
            },
            {
              "q": "Qu’ont en commun Claudel et Segalen ?",
              "options": [
                "Ils ont vécu ou voyagé en Chine.",
                "Ils n’ont jamais quitté la France.",
                "Ils sont philosophes."
              ],
              "answer": 0,
              "explication": "Claudel était consul, Segalen médecin de marine."
            },
            {
              "q": "Que signifie le « Divers » chez Segalen ?",
              "options": [
                "La diversité des paysages chinois",
                "La part de mystère de l’autre, qu’il faut accepter sans la réduire",
                "Un genre littéraire"
              ],
              "answer": 1,
              "explication": "Il s’oppose à l’exotisme superficiel."
            },
            {
              "q": "Qu’a d’original le regard de Michaux ?",
              "options": [
                "Il se désigne lui-même comme le barbare.",
                "Il idéalise la Chine.",
                "Il écrit en chinois."
              ],
              "answer": 0,
              "explication": "Il retourne le regard européen."
            },
            {
              "q": "Quelle limite l’auteur reconnaît-il à ces textes ?",
              "options": [
                "Ils sont mal écrits.",
                "Ils parlent souvent plus de la France que de la Chine.",
                "Ils sont trop récents."
              ],
              "answer": 1,
              "explication": "Dernier paragraphe."
            },
            {
              "q": "Comment l’auteur conclut-il ?",
              "options": [
                "Le dialogue devient vraiment réciproque avec des écrivains chinois écrivant en français.",
                "Il faut cesser de lire ces textes.",
                "Seul Voltaire comprenait la Chine."
              ],
              "answer": 0,
              "explication": "François Cheng, Dai Sijie."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une professeure de littérature comparée",
          "duree": "40 min",
          "consigne": "Une professeure présente sa recherche sur l’image de la Chine dans la littérature française. Lis les questions, puis écoute.",
          "transcription": "Ce qui m’intéresse, ce n’est pas de savoir si ces écrivains avaient raison ou tort sur la Chine. C’est de comprendre ce que leurs erreurs révèlent. Prenez le XVIIIe siècle. Les philosophes admirent la Chine parce qu’ils y voient un pays gouverné sans Église : c’est évidemment une projection, mais une projection extrêmement utile dans leur combat contre l’absolutisme. Au XIXe siècle, le regard change complètement. Après les guerres de l’opium, la Chine est présentée comme un empire immobile, figé, en déclin. Là encore, c’est une image qui sert un discours : celui qui justifie l’intervention européenne. Ce que je dis à mes étudiants, c’est qu’une image de l’autre est toujours un document sur soi. Et cela vaut dans les deux sens : la France vue par la Chine, au début du XXe siècle, était elle aussi un mélange de fascination et de malentendus. Le travail du comparatiste consiste à mettre ces regards en dialogue.",
          "questions": [
            {
              "q": "Qu’est-ce qui intéresse la professeure ?",
              "options": [
                "Corriger les erreurs des écrivains",
                "Comprendre ce que ces erreurs révèlent",
                "Traduire ces textes en chinois"
              ],
              "answer": 1,
              "explication": "Première phrase."
            },
            {
              "q": "Pourquoi les philosophes du XVIIIe siècle admirent-ils la Chine ?",
              "options": [
                "Ils y voient un pays gouverné sans Église, utile dans leur combat contre l’absolutisme.",
                "Ils y ont tous voyagé.",
                "Ils aiment sa cuisine."
              ],
              "answer": 0,
              "explication": "C’est une projection."
            },
            {
              "q": "Comment l’image de la Chine change-t-elle au XIXe siècle ?",
              "options": [
                "Elle devient celle d’un empire immobile et en déclin.",
                "Elle devient plus positive.",
                "Elle disparaît de la littérature."
              ],
              "answer": 0,
              "explication": "Après les guerres de l’opium."
            },
            {
              "q": "Que signifie « une image de l’autre est toujours un document sur soi » ?",
              "options": [
                "On ne peut rien apprendre de l’étranger.",
                "La façon dont on représente l’autre révèle surtout nos propres préoccupations.",
                "Il faut écrire son autobiographie."
              ],
              "answer": 1,
              "explication": "C’est l’idée centrale de son travail."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Parler de littérature et de regard",
          "duree": "25 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "l’exotisme",
              "definition": "le goût pour ce qui vient de pays lointains, souvent vu de façon superficielle"
            },
            {
              "terme": "l’orientalisme",
              "definition": "la représentation de l’Orient par l’Occident, souvent idéalisée ou stéréotypée"
            },
            {
              "terme": "l’altérité",
              "definition": "le fait d’être autre, différent de soi"
            },
            {
              "terme": "une stèle",
              "definition": "une pierre dressée portant une inscription"
            },
            {
              "terme": "une projection",
              "definition": "le fait d’attribuer à l’autre ses propres idées ou désirs"
            },
            {
              "terme": "un recueil",
              "definition": "un livre qui rassemble plusieurs textes (poèmes, nouvelles…)"
            },
            {
              "terme": "un malentendu",
              "definition": "une erreur d’interprétation entre deux personnes ou deux cultures"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Participe présent, adjectif verbal et participe passé",
          "duree": "50 min",
          "regles": [
            "gerondif-participe",
            "accord-participe-passe"
          ],
          "fiche": "<p>Le <strong>participe présent</strong> est invariable et exprime une action (<em>des écrivains fascinant leurs lecteurs</em>). L’<strong>adjectif verbal</strong> s’accorde et exprime une qualité (<em>des récits fascinants</em>) ; son orthographe change parfois : <em>convainquant / convaincant, différant / différent, négligeant / négligent</em>.</p><p class=\"ex\">Des arguments <strong>convaincants</strong>. Les auteurs, <strong>convainquant</strong> leurs lecteurs, ont imposé cette image.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "Ce sont des récits",
              "options": [
                "fascinants",
                "fascinant"
              ],
              "answer": 0,
              "apres": ".",
              "explication": "Une qualité : adjectif verbal, accordé."
            },
            {
              "avant": "Les missionnaires,",
              "options": [
                "décrivant",
                "décrivants"
              ],
              "answer": 0,
              "apres": "un empire idéal, ont inspiré Voltaire.",
              "explication": "Une action avec complément : participe présent, invariable."
            },
            {
              "avant": "Ses arguments sont très",
              "options": [
                "convaincants",
                "convainquants"
              ],
              "answer": 0,
              "apres": ".",
              "explication": "Adjectif verbal : convaincant (c)."
            },
            {
              "avant": "En",
              "options": [
                "convainquant",
                "convaincant"
              ],
              "answer": 0,
              "apres": "ses lecteurs, il a changé leur regard.",
              "explication": "Gérondif, donc participe présent : convainquant (qu)."
            },
            {
              "avant": "Les points de vue",
              "options": [
                "différents",
                "différants"
              ],
              "answer": 0,
              "apres": "enrichissent le débat.",
              "explication": "Adjectif : différent (e)."
            },
            {
              "avant": "Les poèmes qu’il a",
              "options": [
                "écrits",
                "écrit"
              ],
              "answer": 0,
              "apres": "en Chine sont réunis dans ce recueil.",
              "explication": "Avoir + COD placé avant (« que » = les poèmes) : accord."
            },
            {
              "avant": "Ce sont des images",
              "options": [
                "surprenantes",
                "surprenant"
              ],
              "answer": 0,
              "apres": ", parfois contradictoires.",
              "explication": "Adjectif verbal accordé au féminin pluriel."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Un commentaire comparé",
          "duree": "1 h 30",
          "regles": [
            "connecteurs-logiques",
            "pronoms-relatifs-composes",
            "registres-de-langue"
          ],
          "consigne": "En t’appuyant sur le texte et l’enregistrement, rédige un développement argumenté : « Les écrivains voyageurs parlent-ils davantage des pays qu’ils visitent ou d’eux-mêmes ? » Tu peux ajouter un exemple personnel ou un auteur chinois ayant écrit sur la France.",
          "min": 280,
          "max": 350,
          "checklist": [
            "J’ai une problématique claire",
            "J’ai mobilisé au moins trois auteurs ou exemples",
            "J’ai nuancé : la réponse n’est ni tout l’un ni tout l’autre",
            "J’ai utilisé un vocabulaire littéraire précis",
            "Ma conclusion ouvre sur une question plus large"
          ],
          "modele": "Voyager, puis écrire : le geste semble promettre une connaissance de l’ailleurs. Pourtant, de Voltaire à Michaux, les écrivains français qui ont parlé de la Chine semblent souvent nous en apprendre davantage sur eux-mêmes que sur le pays qu’ils décrivent. Faut-il en conclure que tout récit de voyage est un autoportrait déguisé ?\n\nIl est indéniable que l’image de l’autre est d’abord une projection. Voltaire, qui n’a jamais quitté l’Europe, fait de la Chine le modèle d’un gouvernement éclairé dont la France manque cruellement. Au siècle suivant, l’image d’un empire immobile sert à l’inverse à justifier l’intervention européenne. Dans les deux cas, comme le souligne la professeure de littérature comparée, ce portrait est « un document sur soi ».\n\nCe constat mérite toutefois d’être nuancé. Certains auteurs ont fait de cette difficulté le sujet même de leur œuvre. Segalen, en refusant l’exotisme facile, reconnaît dans l’autre une part de mystère à laquelle il ne prétend pas accéder. Michaux, en se désignant comme le « barbare », retourne le regard contre lui-même. Leur lucidité constitue déjà une forme de connaissance.\n\nEnfin, le regard ne circule pas dans un seul sens. Lorsque j’ai lu les lettres d’étudiants chinois venus en France dans les années 1920, j’y ai retrouvé le même mélange de fascination et de malentendus.\n\nAinsi, les écrivains voyageurs parlent sans doute d’abord d’eux-mêmes ; mais les meilleurs d’entre eux le savent, et c’est précisément ce qui rend leur témoignage précieux. Reste à se demander si une véritable connaissance de l’autre est possible sans passer par sa langue."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Présenter un regard croisé",
          "duree": "40 min",
          "consigne": "Présente un livre, un film ou un auteur qui montre la France vue par la Chine, ou la Chine vue par la France. Explique quel regard il propose, ce qu’il révèle, et ce qu’il t’a appris sur ta propre culture.",
          "preparation": [
            "L’œuvre dont je voudrais parler…",
            "Ce qui frappe d’emblée, c’est…",
            "On pourrait y voir…, mais il me semble plutôt que…",
            "Ce regard en dit long sur…",
            "Personnellement, cela m’a fait prendre conscience de…"
          ],
          "dureeCible": "3 minutes",
          "modele": "L’œuvre dont je voudrais parler est Balzac et la Petite Tailleuse chinoise, de Dai Sijie, un auteur chinois qui écrit en français. Le roman se passe pendant la Révolution culturelle : deux jeunes gens envoyés à la campagne découvrent en secret des romans français interdits. Ce qui frappe d’emblée, c’est que la littérature française y apparaît presque comme un trésor magique, capable de transformer une vie. On pourrait y voir une idéalisation naïve de la France, mais il me semble plutôt que l’auteur parle du pouvoir de la lecture en général, et de la liberté qu’elle offre. Ce regard en dit long sur l’époque, où les livres étrangers étaient rares et précieux. Personnellement, cela m’a fait prendre conscience que j’ai moi aussi une image de la France construite par les livres, et que la réalité quotidienne, celle des files d’attente à la préfecture, est un peu moins romanesque !",
          "checklist": [
            "J’ai présenté l’œuvre et son contexte",
            "J’ai analysé le regard proposé",
            "J’ai nuancé mon interprétation",
            "J’ai fait un lien personnel",
            "J’ai parlé environ trois minutes"
          ]
        }
      ]
    },

    {
      "id": 25,
      "niveau": "c1",
      "theme": "Sport et tourisme",
      "titre": "Le tourisme de masse en débat",
      "objectif": "Analyser les effets du tourisme sur les villes et les sites naturels.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Surtourisme : quand le voyage devient un problème",
          "duree": "50 min",
          "texte": [
            "La France est le pays le plus visité au monde : environ cent millions de touristes internationaux y séjournent chaque année. Pour l’économie, c’est une manne : le tourisme représente une part importante du produit intérieur brut et des centaines de milliers d’emplois. Mais dans certains lieux, cette affluence est devenue un fardeau. On parle désormais de surtourisme.",
            "Le phénomène tient moins au nombre total de visiteurs qu’à leur concentration. Quelques sites concentrent l’essentiel des flux, souvent aux mêmes périodes : le Mont-Saint-Michel en plein été, les calanques de Marseille, certains villages de Provence. Les habitants voient les loyers grimper sous l’effet des locations de courte durée, les commerces de proximité céder la place aux boutiques de souvenirs, et l’environnement se dégrader.",
            "Les réponses se multiplient. Depuis quelques années, l’accès à la calanque de Sugiton, près de Marseille, se fait sur réservation pendant la haute saison. Venise a expérimenté un droit d’entrée pour les visiteurs à la journée. D’autres villes limitent les locations touristiques ou encouragent les visiteurs à découvrir des lieux moins connus. Ces mesures suscitent pourtant des critiques : réserver la beauté à ceux qui savent planifier, ou qui peuvent payer, n’est-ce pas transformer le patrimoine en produit de luxe ?",
            "La question touche en réalité à notre rapport au voyage. Réseaux sociaux aidant, beaucoup cherchent moins à découvrir un lieu qu’à en rapporter l’image attendue. Or, le voyage le plus mémorable est souvent celui qui n’était pas prévu : un village traversé par hasard, une conversation, un détour. Peut-être le remède au surtourisme passe-t-il moins par des quotas que par une autre manière de voyager."
          ],
          "questions": [
            {
              "q": "Selon le texte, le surtourisme est surtout lié…",
              "options": [
                "au nombre total de touristes",
                "à la concentration des visiteurs sur quelques sites et périodes",
                "au prix des billets d’avion"
              ],
              "answer": 1,
              "explication": "Deuxième paragraphe."
            },
            {
              "q": "Quelles conséquences subissent les habitants ?",
              "options": [
                "Hausse des loyers, disparition des commerces de proximité, dégradation de l’environnement",
                "Baisse des salaires et chômage",
                "Fermeture des écoles"
              ],
              "answer": 0,
              "explication": "Deuxième paragraphe."
            },
            {
              "q": "Quelle mesure a été mise en place pour la calanque de Sugiton ?",
              "options": [
                "Un péage",
                "Une réservation obligatoire en haute saison",
                "Une interdiction totale"
              ],
              "answer": 1,
              "explication": "Troisième paragraphe."
            },
            {
              "q": "Quelle critique est adressée à ces mesures ?",
              "options": [
                "Elles sont inefficaces.",
                "Elles risquent de réserver le patrimoine à une élite.",
                "Elles coûtent trop cher aux villes."
              ],
              "answer": 1,
              "explication": "« Transformer le patrimoine en produit de luxe. »"
            },
            {
              "q": "« Réseaux sociaux aidant » signifie…",
              "options": [
                "grâce, en partie, aux réseaux sociaux",
                "malgré les réseaux sociaux",
                "pour aider les réseaux sociaux"
              ],
              "answer": 0,
              "explication": "Construction participiale à valeur de cause."
            },
            {
              "q": "Quelle est la thèse finale ?",
              "options": [
                "Il faut interdire le tourisme.",
                "La solution passe aussi par une autre manière de voyager.",
                "Les quotas suffisent."
              ],
              "answer": 1,
              "explication": "Dernier paragraphe."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Témoignages d’un village de Provence",
          "duree": "40 min",
          "consigne": "Trois personnes d’un village très touristique donnent leur point de vue. Lis les questions, puis écoute.",
          "transcription": "Moi, je suis née ici, et je ne reconnais plus mon village. En juillet, on ne peut plus se garer, la boulangerie vend des macarons pour les touristes au lieu du pain pour nous, et ma fille ne trouve pas de logement à louer à l’année : tout est loué aux vacanciers. Je comprends madame, mais je tiens un restaurant et, sans les touristes, je fermerais en deux ans. Le village vit grâce à eux. Ce qu’il faut, c’est mieux les répartir sur l’année. Au printemps et à l’automne, la Provence est magnifique, et il n’y a personne ! Je suis guide, et je crois que le problème vient aussi de la façon dont on présente la région. Tout le monde veut la même photo du même champ de lavande, le même jour. Quand je propose une randonnée dans un village voisin, moins connu, les gens sont d’abord déçus, puis ils me remercient. Ils ont vu la vraie Provence, pas celle des cartes postales.",
          "questions": [
            {
              "q": "Quel problème de logement la première personne évoque-t-elle ?",
              "options": [
                "Sa fille ne trouve pas de location à l’année.",
                "Les loyers ont baissé.",
                "Les maisons sont abandonnées."
              ],
              "answer": 0,
              "explication": "Tout est loué aux vacanciers."
            },
            {
              "q": "Quelle est la position du restaurateur ?",
              "options": [
                "Il faut interdire les touristes.",
                "Les touristes font vivre le village ; il faudrait mieux les répartir dans l’année.",
                "Il veut vendre son restaurant."
              ],
              "answer": 1,
              "explication": "Il défend l’étalement des saisons."
            },
            {
              "q": "Selon la guide, d’où vient une partie du problème ?",
              "options": [
                "De la météo",
                "De l’image stéréotypée de la région",
                "Des prix des hôtels"
              ],
              "answer": 1,
              "explication": "Tout le monde veut la même photo."
            },
            {
              "q": "Comment réagissent les clients de la guide après la randonnée ?",
              "options": [
                "Ils sont déçus.",
                "Ils se plaignent.",
                "Ils la remercient d’avoir vu la vraie Provence."
              ],
              "answer": 2,
              "explication": "D’abord déçus, puis reconnaissants."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le tourisme en débat",
          "duree": "25 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "le surtourisme",
              "definition": "une fréquentation touristique excessive qui dégrade un lieu"
            },
            {
              "terme": "une manne",
              "definition": "une source abondante et inespérée de profit"
            },
            {
              "terme": "les flux",
              "definition": "les mouvements importants de personnes ou de marchandises"
            },
            {
              "terme": "la saisonnalité",
              "definition": "la concentration d’une activité sur certaines périodes de l’année"
            },
            {
              "terme": "les retombées économiques",
              "definition": "les effets positifs d’une activité sur l’économie"
            },
            {
              "terme": "un quota",
              "definition": "une limite chiffrée imposée"
            },
            {
              "terme": "le patrimoine",
              "definition": "l’ensemble des biens culturels et naturels hérités du passé"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Exprimer la cause et la conséquence avec nuance",
          "duree": "50 min",
          "regles": [
            "connecteurs-logiques",
            "gerondif-participe"
          ],
          "fiche": "<p>Au-delà de <em>parce que</em> et <em>donc</em>, le français soutenu dispose de nombreuses tournures. <strong>Cause</strong> : <em>sous l’effet de, en raison de, du fait de, à force de, faute de</em> + nom ; participe présent ou passé (<em>la ville, envahie de visiteurs, …</em>). <strong>Conséquence</strong> : <em>si bien que, au point que, d’où, entraîner, provoquer, engendrer</em>.</p><p class=\"ex\"><strong>Sous l’effet des</strong> locations courtes, les loyers grimpent, <strong>d’où</strong> le départ des familles.</p>",
          "consigne": "Choisis l’expression qui convient.",
          "phrases": [
            {
              "avant": "Les loyers ont augmenté",
              "options": [
                "sous l’effet des",
                "à force des"
              ],
              "answer": 0,
              "apres": "locations de courte durée.",
              "explication": "« Sous l’effet de » + cause impersonnelle."
            },
            {
              "avant": "Les visiteurs affluent en juillet,",
              "options": [
                "d’où",
                "si bien"
              ],
              "answer": 0,
              "apres": "des embouteillages permanents.",
              "explication": "« D’où » + nom : conséquence."
            },
            {
              "avant": "",
              "options": [
                "Faute de",
                "En raison du"
              ],
              "answer": 0,
              "apres": "logements disponibles, les jeunes quittent le village.",
              "explication": "Faute de + nom sans article : cause négative."
            },
            {
              "avant": "Le site a été fermé",
              "options": [
                "en raison de",
                "afin de"
              ],
              "answer": 0,
              "apres": "la sécheresse.",
              "explication": "Cause neutre et administrative."
            },
            {
              "avant": "La fréquentation est telle",
              "options": [
                "que",
                "si"
              ],
              "answer": 0,
              "apres": "les sentiers s’érodent.",
              "explication": "« Tel… que » : conséquence d’une intensité."
            },
            {
              "avant": "",
              "options": [
                "À force de",
                "Grâce à"
              ],
              "answer": 0,
              "apres": "piétiner les dunes, les visiteurs les détruisent.",
              "explication": "« À force de » + infinitif : cause par répétition."
            },
            {
              "avant": "Cette politique",
              "options": [
                "a engendré",
                "a résulté"
              ],
              "answer": 0,
              "apres": "de nombreuses critiques.",
              "explication": "Engendrer quelque chose ; « résulter de » a le sens inverse."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Faut-il limiter l’accès aux sites touristiques ?",
          "duree": "1 h 30",
          "regles": [
            "connecteurs-logiques",
            "subjonctif-emploi"
          ],
          "consigne": "La région où tu étudies envisage de mettre en place des quotas pour ses sites les plus fréquentés. Rédige une contribution argumentée à la consultation publique : analyse le problème, évalue la mesure proposée, et formule au moins une proposition alternative ou complémentaire.",
          "min": 280,
          "max": 350,
          "checklist": [
            "J’ai analysé les causes et les conséquences du problème",
            "J’ai évalué la mesure (avantages et limites)",
            "J’ai formulé au moins une proposition concrète",
            "J’ai utilisé au moins cinq expressions de cause et de conséquence variées",
            "Le registre est adapté à une contribution publique"
          ],
          "modele": "Contribution à la consultation sur la fréquentation des sites naturels\n\nChaque été, les sites les plus célèbres de notre région accueillent des visiteurs par milliers, au point que certains sentiers se transforment en files d’attente. Sous l’effet de cette fréquentation, la végétation recule, les déchets s’accumulent et les habitants voient leur qualité de vie se dégrader. Il est donc légitime que les pouvoirs publics cherchent à agir.\n\nLa mise en place de quotas présente des avantages évidents. Elle permet de protéger les milieux les plus fragiles et d’offrir aux visiteurs une expérience plus agréable. L’exemple de la calanque de Sugiton montre qu’un système de réservation gratuit peut être accepté par le public, à condition qu’il soit simple et bien expliqué.\n\nCette mesure comporte néanmoins des limites. Faute d’accompagnement, elle risque de déplacer le problème vers les sites voisins, moins protégés. Elle pourrait aussi pénaliser les personnes qui ne peuvent pas planifier leurs sorties longtemps à l’avance, d’où un risque d’inégalité.\n\nC’est pourquoi je propose de compléter les quotas par trois actions. D’abord, valoriser des sites moins connus, en développant des itinéraires et des transports en commun pour y accéder. Ensuite, réserver une partie des places aux habitants de la région. Enfin, mener des campagnes de communication qui montrent la région en dehors de la haute saison.\n\nProtéger un lieu ne doit pas revenir à l’interdire, mais à mieux le partager."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Un débat contradictoire",
          "duree": "35 min",
          "consigne": "Joue successivement deux rôles : d’abord une habitante qui demande des quotas, puis un restaurateur qui s’y oppose. Pour chaque rôle, parle une minute avec deux arguments. Termine en donnant ta propre position en une phrase.",
          "preparation": [
            "En tant qu’habitante, je constate que…",
            "Ce qui est en jeu, c’est…",
            "Mettons-nous à la place de…",
            "Je ne nie pas que…, mais…",
            "Pour ma part, j’estime que…"
          ],
          "dureeCible": "2 à 3 minutes",
          "modele": "En tant qu’habitante, je constate que mon village est devenu invivable l’été. Ce qui est en jeu, ce n’est pas seulement notre confort, c’est la survie même du lieu : à force d’être piétinés, les chemins s’effondrent. Et si plus aucune famille ne peut se loger ici, il ne restera qu’un décor. Je demande donc des quotas. Maintenant, mettons-nous à la place du restaurateur. Je ne nie pas que la fréquentation pose problème, mais nos emplois dépendent des visiteurs : un quota, c’est moins de clients, et peut-être des fermetures. De plus, le problème ne dure que deux mois ; il serait plus intelligent d’attirer les touristes au printemps et à l’automne. Pour ma part, j’estime que les quotas sont utiles pour les sites les plus fragiles, mais qu’ils ne remplaceront jamais une vraie politique d’étalement des saisons.",
          "checklist": [
            "J’ai tenu deux points de vue opposés",
            "Chaque rôle a deux arguments",
            "J’ai utilisé des expressions de cause et de conséquence",
            "J’ai conclu par ma position personnelle"
          ]
        }
      ]
    },

    {
      "id": 26,
      "niveau": "c1",
      "theme": "Culture, littérature et francophonie",
      "titre": "Lire un texte littéraire",
      "objectif": "Comprendre un extrait classique et reconnaître le passé simple.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Maupassant, Le Horla (début, 1887)",
          "duree": "50 min",
          "texte": [
            "Présentation. Le Horla est une nouvelle de Guy de Maupassant écrite sous la forme d’un journal intime. Le narrateur, un homme aisé qui vit au bord de la Seine, près de Rouen, va peu à peu se croire habité par une présence invisible. Voici la toute première page, avant que l’inquiétude n’apparaisse.",
            "« 8 mai. – Quelle journée admirable ! J’ai passé toute la matinée étendu sur l’herbe, devant ma maison, sous l’énorme platane qui la couvre, l’abrite et l’ombrage tout entière. J’aime ce pays, et j’aime y vivre parce que j’y ai mes racines, ces profondes et délicates racines, qui attachent un homme à la terre où sont nés et morts ses aïeux, qui l’attachent à ce qu’on pense et à ce qu’on mange, aux usages comme aux nourritures, aux locutions locales, aux intonations des paysans, aux odeurs du sol, des villages et de l’air lui-même. »",
            "« J’aime ma maison où j’ai grandi. De mes fenêtres, je vois la Seine qui coule, le long de mon jardin, derrière la route, presque chez moi, la grande et large Seine, qui va de Rouen au Havre, couverte de bateaux qui passent. »",
            "Ce début paisible est un piège savamment tendu. Quelques lignes plus loin, le narrateur salue un grand trois-mâts brésilien qui remonte le fleuve. Le lecteur n’y prête guère attention ; il comprendra bien plus tard que c’est peut-être avec ce navire que « l’être invisible » est arrivé."
          ],
          "questions": [
            {
              "q": "Quelle est la forme du texte ?",
              "options": [
                "Une lettre",
                "Un journal intime",
                "Un dialogue de théâtre"
              ],
              "answer": 1,
              "explication": "La date « 8 mai » et le « je » l’indiquent."
            },
            {
              "q": "Quelle impression domine dans ces premières lignes ?",
              "options": [
                "L’angoisse",
                "La sérénité et l’attachement au lieu",
                "La colère"
              ],
              "answer": 1,
              "explication": "« Quelle journée admirable ! », « j’aime » répété."
            },
            {
              "q": "Dans la première citation, la métaphore des « racines » exprime…",
              "options": [
                "le lien profond entre l’homme et sa terre natale",
                "un intérêt pour le jardinage",
                "un sentiment d’étouffement"
              ],
              "answer": 0,
              "explication": "Les racines attachent l’homme à la terre de ses ancêtres."
            },
            {
              "q": "« Qui l’attachent à ce qu’on pense et à ce qu’on mange, aux usages comme aux nourritures… » : quel procédé reconnais-tu ?",
              "options": [
                "Une énumération",
                "Une litote",
                "Une antithèse"
              ],
              "answer": 0,
              "explication": "Une longue liste de compléments, qui élargit le sens du mot « racines »."
            },
            {
              "q": "Le verbe triple « la couvre, l’abrite et l’ombrage » crée un effet de…",
              "options": [
                "protection et d’enveloppement",
                "danger",
                "vitesse"
              ],
              "answer": 0,
              "explication": "Le platane semble protéger la maison : un effet d’autant plus ironique pour la suite."
            },
            {
              "q": "Pourquoi peut-on parler d’un « piège » ?",
              "options": [
                "Parce que le calme du début rend l’irruption de l’étrange plus inquiétante",
                "Parce que le narrateur ment",
                "Parce que le texte n’a pas de fin"
              ],
              "answer": 0,
              "explication": "Le bateau brésilien, détail anodin, prendra plus tard tout son sens."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Une explication de texte en classe",
          "duree": "40 min",
          "consigne": "Une professeure de lettres analyse le début du Horla avec ses étudiants. Lis les questions, puis écoute.",
          "transcription": "Regardez bien la construction de la première phrase longue. Maupassant part d’un sentiment simple, « j’aime ce pays », puis il élargit progressivement : la terre, les ancêtres, la pensée, la nourriture, la langue, les odeurs, et finalement « l’air lui-même ». C’est une gradation : on va du plus concret au plus immatériel. Et c’est loin d’être innocent. L’air, l’invisible, c’est précisément ce qui va devenir menaçant dans la suite de la nouvelle. Autre élément : le rythme. Les phrases sont amples, régulières, presque musicales, comme le cours de la Seine. Le narrateur est encore maître de son discours. Quand l’angoisse apparaîtra, vous verrez les phrases se raccourcir, se briser, se remplir de points d’exclamation et de points de suspension. Le style épouse l’état psychologique du personnage. Retenez donc ceci pour vos commentaires : on n’analyse jamais un procédé pour lui-même, mais pour l’effet qu’il produit et le sens qu’il construit.",
          "questions": [
            {
              "q": "Quel procédé la professeure identifie-t-elle dans la longue phrase ?",
              "options": [
                "Une gradation du concret vers l’immatériel",
                "Une comparaison",
                "Une répétition sonore"
              ],
              "answer": 0,
              "explication": "De la terre jusqu’à « l’air lui-même »."
            },
            {
              "q": "Pourquoi la mention de « l’air » n’est-elle pas innocente ?",
              "options": [
                "Parce que l’invisible deviendra menaçant",
                "Parce que l’air est pollué",
                "Parce que Maupassant aimait la météo"
              ],
              "answer": 0,
              "explication": "Elle annonce le thème de la nouvelle."
            },
            {
              "q": "Comment le style évoluera-t-il quand l’angoisse apparaîtra ?",
              "options": [
                "Les phrases deviendront plus courtes et brisées.",
                "Les phrases deviendront plus longues.",
                "Le texte deviendra un poème."
              ],
              "answer": 0,
              "explication": "Le style « épouse l’état psychologique »."
            },
            {
              "q": "Quel conseil de méthode donne-t-elle ?",
              "options": [
                "Relever le plus de procédés possible",
                "Toujours relier un procédé à son effet et à son sens",
                "Apprendre le texte par cœur"
              ],
              "answer": 1,
              "explication": "Dernière phrase."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Les figures de style",
          "duree": "25 min",
          "consigne": "Associe chaque figure à sa définition.",
          "items": [
            {
              "terme": "la métaphore",
              "definition": "une image qui rapproche deux réalités sans mot de comparaison"
            },
            {
              "terme": "la comparaison",
              "definition": "un rapprochement explicite, avec « comme », « tel », « pareil à »…"
            },
            {
              "terme": "la gradation",
              "definition": "une suite de termes d’intensité ou de portée croissante"
            },
            {
              "terme": "l’énumération",
              "definition": "une liste de termes qui se suivent"
            },
            {
              "terme": "la personnification",
              "definition": "le fait d’attribuer des traits humains à une chose ou un animal"
            },
            {
              "terme": "l’anaphore",
              "definition": "la répétition d’un même mot en début de phrase ou de vers"
            },
            {
              "terme": "la litote",
              "definition": "dire moins pour suggérer plus (« ce n’est pas mal »)"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Passé simple et imparfait dans le récit",
          "duree": "50 min",
          "regles": [
            "passe-simple",
            "passe-compose-imparfait"
          ],
          "fiche": "<p>Dans un récit littéraire, le <strong>passé simple</strong> marque les actions de premier plan, qui font avancer l’histoire. L’<strong>imparfait</strong> peint l’arrière-plan : décor, description, état d’âme, habitude. Une action en cours à l’imparfait est souvent interrompue par une action au passé simple.</p><p class=\"ex\">Il <strong>contemplait</strong> la Seine quand un grand navire <strong>apparut</strong>.</p>",
          "consigne": "Choisis le temps qui convient.",
          "phrases": [
            {
              "avant": "Le soleil",
              "options": [
                "brillait",
                "brilla"
              ],
              "answer": 0,
              "apres": "sur la Seine, et le jardin semblait immobile.",
              "explication": "Description du décor : imparfait."
            },
            {
              "avant": "Soudain, un trois-mâts",
              "options": [
                "apparut",
                "apparaissait"
              ],
              "answer": 0,
              "apres": "au tournant du fleuve.",
              "explication": "« Soudain » : événement de premier plan, passé simple."
            },
            {
              "avant": "Chaque matin, il",
              "options": [
                "s’asseyait",
                "s’assit"
              ],
              "answer": 0,
              "apres": "sous le platane.",
              "explication": "Habitude : imparfait."
            },
            {
              "avant": "Ce soir-là, il",
              "options": [
                "ferma",
                "fermait"
              ],
              "answer": 0,
              "apres": "toutes les portes à clé avant de se coucher.",
              "explication": "Action ponctuelle et datée : passé simple."
            },
            {
              "avant": "Il",
              "options": [
                "eut",
                "avait"
              ],
              "answer": 0,
              "apres": "brusquement l’impression qu’on le regardait.",
              "explication": "« Brusquement » : passé simple."
            },
            {
              "avant": "La nuit",
              "options": [
                "tombait",
                "tomba"
              ],
              "answer": 0,
              "apres": "lentement, et l’angoisse grandissait.",
              "explication": "Évolution progressive, en arrière-plan : imparfait."
            },
            {
              "avant": "Il se leva, alluma la bougie et",
              "options": [
                "regarda",
                "regardait"
              ],
              "answer": 0,
              "apres": "autour de lui.",
              "explication": "Succession d’actions : passé simple."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Commenter un paragraphe",
          "duree": "1 h 30",
          "regles": [
            "connecteurs-logiques",
            "nominalisation"
          ],
          "consigne": "Rédige un paragraphe de commentaire sur la première citation du Horla. Montre comment Maupassant exprime l’attachement du narrateur à sa terre, en analysant au moins trois procédés et en citant le texte. Termine par une phrase qui suggère ce que ce passage prépare.",
          "min": 200,
          "max": 260,
          "checklist": [
            "Mon paragraphe commence par une idée directrice",
            "J’ai analysé au moins trois procédés différents",
            "J’ai cité le texte entre guillemets pour chaque procédé",
            "J’ai expliqué l’effet de chaque procédé, pas seulement son nom",
            "Ma dernière phrase ouvre sur la suite de la nouvelle"
          ],
          "modele": "Dès les premières lignes, Maupassant fait du narrateur un homme profondément enraciné, en harmonie avec le lieu où il vit. L’exclamation initiale, « Quelle journée admirable ! », installe d’emblée un climat de plénitude, renforcé par l’attitude du personnage, « étendu sur l’herbe », dans un abandon confiant. Le platane qui « couvre », « abrite » et « ombrage » la maison forme une gradation protectrice : la nature semble veiller sur l’homme. Mais c’est surtout la métaphore des « racines » qui traduit cet attachement. Qualifiées de « profondes et délicates », elles relient le narrateur à la fois à ses « aïeux » et à toute une culture, comme le montre la longue énumération qui suit : « ce qu’on pense », « ce qu’on mange », « les locutions locales », « les intonations des paysans ». Cette énumération progresse du plus concret vers le plus impalpable, jusqu’à « l’air lui-même ». Le rythme ample et régulier de la phrase, scandé par la reprise de « qui attachent », mime d’ailleurs cette stabilité. Pourtant, en achevant la phrase sur l’élément le plus invisible, Maupassant glisse discrètement le thème qui va bientôt menacer ce bonheur."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Lire et commenter à voix haute",
          "duree": "40 min",
          "consigne": "Lis d’abord à voix haute la première citation du Horla, en soignant le rythme et les liaisons. Puis présente oralement, en deux minutes, ce que ce passage exprime et comment.",
          "preparation": [
            "Ce passage ouvre la nouvelle…",
            "Ce qui frappe d’abord, c’est…",
            "On remarque notamment…",
            "Ce procédé permet de…",
            "Ainsi, le début paisible prépare…"
          ],
          "dureeCible": "2 à 3 minutes",
          "modele": "Ce passage ouvre la nouvelle Le Horla, écrite sous forme de journal intime. Ce qui frappe d’abord, c’est le bonheur du narrateur : la journée est « admirable », il est allongé dans l’herbe, à l’ombre d’un grand platane qui semble protéger sa maison. On remarque notamment la métaphore des racines, qui exprime son attachement à sa région et à ses ancêtres. Elle est développée par une longue énumération, qui va des choses les plus concrètes, comme la nourriture, jusqu’aux plus invisibles, comme l’air. Ce procédé permet de montrer que ce lien touche tous les aspects de la vie. Ainsi, le début paisible prépare un contraste très fort : c’est justement par l’invisible que l’angoisse va entrer dans la nouvelle.",
          "checklist": [
            "Ma lecture était fluide, avec des pauses aux virgules",
            "J’ai respecté les liaisons obligatoires",
            "J’ai nommé et expliqué au moins deux procédés",
            "J’ai relié le passage à la suite de la nouvelle"
          ]
        }
      ]
    },

    {
      "id": 27,
      "niveau": "c1",
      "theme": "Information, géopolitique et histoire",
      "titre": "La synthèse de documents",
      "objectif": "Croiser plusieurs sources et produire une synthèse objective.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Un dossier : lire sur papier ou sur écran ?",
          "duree": "50 min",
          "texte": [
            "Document 1 – Extrait d’un article de vulgarisation scientifique. Plusieurs synthèses de recherche, dont une méta-analyse publiée en 2018 portant sur plusieurs dizaines d’études, suggèrent que la compréhension des textes informatifs est en moyenne légèrement meilleure sur papier que sur écran. L’écart est faible, mais il augmente lorsque les lecteurs disposent de peu de temps. Les chercheurs avancent une explication : sur écran, nous aurions tendance à lire plus vite, en survolant, et à surestimer notre compréhension.",
            "Document 2 – Tribune d’un enseignant. Opposer le papier à l’écran n’a guère de sens. Les élèves lisent aujourd’hui sur tous les supports, et le numérique offre des ressources précieuses : dictionnaires intégrés, taille de caractères ajustable, accès à des livres introuvables en bibliothèque. Plutôt que de diaboliser l’écran, apprenons aux jeunes à y lire lentement, à annoter, à revenir en arrière. C’est la manière de lire, non le support, qui fait la différence.",
            "Document 3 – Témoignage d’une directrice de bibliothèque universitaire. Les prêts de livres papier ont baissé, mais nos salles de lecture n’ont jamais été aussi pleines. Les étudiants consultent les articles en ligne, puis viennent ici imprimer les textes qu’ils doivent étudier en profondeur. Beaucoup nous disent qu’ils réservent l’écran aux recherches rapides, et le papier à la lecture attentive.",
            "Consigne habituelle de l’épreuve : confronter les documents, sans ajouter d’opinion personnelle, en montrant leurs points de convergence et de divergence."
          ],
          "questions": [
            {
              "q": "Quelle est l’idée principale du document 1 ?",
              "options": [
                "La lecture sur écran est impossible.",
                "La compréhension est en moyenne légèrement meilleure sur papier, surtout quand on manque de temps.",
                "Le papier est plus écologique."
              ],
              "answer": 1,
              "explication": "L’écart est faible mais réel."
            },
            {
              "q": "Quelle explication les chercheurs avancent-ils ?",
              "options": [
                "Les écrans fatiguent les yeux.",
                "Sur écran, on lit plus vite et on surestime sa compréhension.",
                "Les textes numériques sont plus courts."
              ],
              "answer": 1,
              "explication": "Fin du document 1."
            },
            {
              "q": "Quelle est la thèse du document 2 ?",
              "options": [
                "Il faut interdire les écrans à l’école.",
                "La manière de lire compte plus que le support.",
                "Le papier est dépassé."
              ],
              "answer": 1,
              "explication": "Dernière phrase du document 2."
            },
            {
              "q": "Que montre le document 3 ?",
              "options": [
                "Les étudiants n’utilisent plus la bibliothèque.",
                "Les étudiants combinent les supports selon le type de lecture.",
                "Les étudiants préfèrent l’écran pour tout."
              ],
              "answer": 1,
              "explication": "Écran pour chercher, papier pour approfondir."
            },
            {
              "q": "Quel point commun relie les trois documents ?",
              "options": [
                "L’idée que la qualité de la lecture dépend de l’attention et du rythme",
                "Le rejet total du numérique",
                "L’éloge exclusif du papier"
              ],
              "answer": 0,
              "explication": "Lire vite / lire lentement est au cœur des trois."
            },
            {
              "q": "Qu’interdit la consigne de la synthèse ?",
              "options": [
                "De citer les auteurs",
                "D’ajouter une opinion personnelle",
                "De faire des paragraphes"
              ],
              "answer": 1,
              "explication": "La synthèse est objective."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "La méthode de la synthèse de documents",
          "duree": "40 min",
          "consigne": "Un tuteur explique la synthèse de documents à des étudiants qui préparent le DALF C1. Lis les questions, puis écoute.",
          "transcription": "Première erreur à éviter : résumer les documents les uns après les autres. Ça, c’est un résumé en trois morceaux, pas une synthèse. Une synthèse, c’est un texte organisé par idées, dans lequel vous faites dialoguer les documents. Concrètement, commencez par lire tous les documents et repérez, pour chacun, l’idée principale et deux ou trois idées secondaires. Ensuite, faites un tableau : en ligne, les grandes questions ; en colonne, les documents. Vous verrez tout de suite où ils se rejoignent et où ils s’opposent. C’est ce tableau qui vous donnera votre plan. Deuxième règle : la neutralité. Vous n’avez pas le droit de donner votre avis, même indirectement. Attention aux adjectifs comme « évidemment » ou « heureusement » qui trahissent une opinion. Troisième règle : reformulez. Ne recopiez pas les phrases des documents. Et enfin, n’oubliez pas le titre, et respectez le nombre de mots, à dix pour cent près.",
          "questions": [
            {
              "q": "Quelle est la première erreur à éviter ?",
              "options": [
                "Faire un plan",
                "Résumer les documents l’un après l’autre",
                "Donner un titre"
              ],
              "answer": 1,
              "explication": "Ce serait un résumé en trois morceaux."
            },
            {
              "q": "À quoi sert le tableau conseillé ?",
              "options": [
                "À compter les mots",
                "À repérer convergences et divergences pour construire le plan",
                "À noter son opinion"
              ],
              "answer": 1,
              "explication": "Le tableau donne le plan."
            },
            {
              "q": "Pourquoi éviter des mots comme « heureusement » ?",
              "options": [
                "Ils sont trop familiers.",
                "Ils trahissent une opinion.",
                "Ils sont trop longs."
              ],
              "answer": 1,
              "explication": "La synthèse doit être neutre."
            },
            {
              "q": "Quelle tolérance est accordée sur le nombre de mots ?",
              "options": [
                "Environ 10 %",
                "Aucune",
                "50 %"
              ],
              "answer": 0,
              "explication": "« À dix pour cent près. »"
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Les verbes pour rapporter et confronter",
          "duree": "25 min",
          "consigne": "Associe chaque verbe à son sens.",
          "items": [
            {
              "terme": "souligner",
              "definition": "insister sur un point pour le mettre en valeur"
            },
            {
              "terme": "nuancer",
              "definition": "apporter des réserves, des précisions qui atténuent une idée"
            },
            {
              "terme": "rejoindre",
              "definition": "être d’accord avec une autre position, aller dans le même sens"
            },
            {
              "terme": "s’opposer à",
              "definition": "défendre une position contraire"
            },
            {
              "terme": "mettre en évidence",
              "definition": "montrer clairement, faire apparaître"
            },
            {
              "terme": "déplorer",
              "definition": "regretter vivement une situation"
            },
            {
              "terme": "avancer",
              "definition": "proposer une idée, une hypothèse, une explication"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Rapporter des propos : concordance et verbes introducteurs",
          "duree": "50 min",
          "regles": [
            "discours-rapporte"
          ],
          "fiche": "<p>Au <strong>discours indirect</strong>, si le verbe introducteur est au passé, les temps se décalent : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel. Le choix du verbe introducteur (<em>affirmer, admettre, suggérer, contester, regretter</em>) indique la position de l’auteur, ce qui est essentiel dans une synthèse.</p><p class=\"ex\">« La compréhension est meilleure sur papier. » → Les chercheurs <strong>ont affirmé</strong> que la compréhension <strong>était</strong> meilleure sur papier.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "L’enseignant affirmait que le support",
              "options": [
                "comptait",
                "compte"
              ],
              "answer": 0,
              "apres": "moins que la manière de lire.",
              "explication": "Verbe introducteur au passé : présent → imparfait."
            },
            {
              "avant": "Les chercheurs ont expliqué que les lecteurs",
              "options": [
                "avaient surestimé",
                "ont surestimé"
              ],
              "answer": 0,
              "apres": "leur compréhension lors de l’expérience.",
              "explication": "Passé composé → plus-que-parfait."
            },
            {
              "avant": "La directrice a annoncé que la bibliothèque",
              "options": [
                "ouvrirait",
                "ouvrira"
              ],
              "answer": 0,
              "apres": "le dimanche l’année suivante.",
              "explication": "Futur → conditionnel présent."
            },
            {
              "avant": "L’auteur",
              "options": [
                "admet",
                "prétend"
              ],
              "answer": 0,
              "apres": "que le numérique a des avantages, même s’il préfère le papier.",
              "explication": "« Admettre » : reconnaître une idée qui ne va pas dans son sens."
            },
            {
              "avant": "Le document 2",
              "options": [
                "conteste",
                "confirme"
              ],
              "answer": 0,
              "apres": "l’opposition entre papier et écran : il la juge sans intérêt.",
              "explication": "Contester : remettre en cause."
            },
            {
              "avant": "Elle a demandé",
              "options": [
                "si",
                "que"
              ],
              "answer": 0,
              "apres": "les étudiants lisaient plus qu’avant.",
              "explication": "Question totale au discours indirect : « si »."
            },
            {
              "avant": "Il a ajouté qu’il",
              "options": [
                "fallait",
                "faut"
              ],
              "answer": 0,
              "apres": "apprendre aux jeunes à annoter.",
              "explication": "Concordance au passé : imparfait."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Rédiger une synthèse",
          "duree": "1 h 30",
          "regles": [
            "discours-rapporte",
            "connecteurs-logiques",
            "nominalisation"
          ],
          "consigne": "À partir des trois documents, rédige une synthèse d’environ 220 mots (entre 200 et 240), avec un titre. Organise-la par idées et non par documents, reformule, et ne donne aucun avis personnel.",
          "min": 200,
          "max": 240,
          "checklist": [
            "Mon texte a un titre",
            "Il est organisé par idées, pas document par document",
            "Chaque idée est attribuée à sa source (document, auteur)",
            "J’ai reformulé sans recopier",
            "Je n’ai donné aucune opinion personnelle",
            "J’ai respecté le nombre de mots"
          ],
          "modele": "Lire sur papier ou sur écran : le support, une question secondaire ?\n\nLa généralisation des écrans soulève la question de leur effet sur la lecture. Les trois documents s’accordent sur un point : la qualité de la compréhension dépend avant tout du rythme et de l’attention du lecteur, mais ils divergent sur le rôle du support.\n\nUne synthèse de recherches relayée par un article de vulgarisation met en évidence un léger avantage du papier pour les textes informatifs, surtout lorsque le temps de lecture est limité. Les chercheurs l’expliquent par une tendance, sur écran, à survoler les textes et à surestimer sa propre compréhension.\n\nUn enseignant conteste toutefois l’opposition entre les deux supports. Selon lui, le numérique offre des outils précieux, et c’est l’apprentissage d’une lecture lente et active, non le choix du support, qui détermine la réussite.\n\nLe témoignage d’une directrice de bibliothèque universitaire rejoint en partie ces deux analyses. Il souligne que les étudiants combinent désormais les supports : l’écran pour la recherche rapide d’informations, le papier pour l’étude approfondie.\n\nAinsi, loin d’un affrontement entre deux technologies, les documents dessinent une complémentarité, chaque support étant associé à un mode de lecture particulier."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Présenter une synthèse à l’oral",
          "duree": "40 min",
          "consigne": "Présente oralement le dossier en trois minutes, comme dans la première partie de l’épreuve orale du DALF : présente le thème, la problématique, puis les idées des documents de façon organisée. Garde ton avis pour la fin, et annonce-le clairement.",
          "preparation": [
            "Le dossier porte sur…",
            "La question qui se pose est la suivante : …",
            "D’un côté, … ; de l’autre, …",
            "Les documents se rejoignent sur…",
            "Pour ma part, et c’est un avis personnel, …"
          ],
          "dureeCible": "3 minutes",
          "modele": "Le dossier porte sur la lecture à l’heure du numérique. La question qui se pose est la suivante : le support de lecture a-t-il une influence sur notre compréhension ? D’un côté, un article de vulgarisation présente des recherches qui montrent un léger avantage du papier, surtout quand on lit vite. Les chercheurs expliquent que sur écran, on survole davantage. De l’autre, un enseignant estime que le support importe peu : selon lui, il faut surtout apprendre aux élèves à lire lentement et activement, quel que soit l’outil. Enfin, une directrice de bibliothèque observe que les étudiants utilisent les deux supports de façon complémentaire. Les documents se rejoignent donc sur l’idée que c’est l’attention qui compte. Pour ma part, et c’est un avis personnel, je me reconnais dans ce dernier témoignage : je lis mes articles sur écran, mais j’imprime toujours les textes que je dois vraiment comprendre.",
          "checklist": [
            "J’ai annoncé le thème et la problématique",
            "J’ai organisé mon propos par idées",
            "J’ai séparé clairement la synthèse et mon avis",
            "J’ai parlé environ trois minutes"
          ]
        }
      ]
    },

    {
      "id": 28,
      "niveau": "c1",
      "theme": "Études et université",
      "titre": "La dissertation",
      "objectif": "Problématiser un sujet et construire un plan dialectique.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "La dissertation, mode d’emploi",
          "duree": "50 min",
          "texte": [
            "Exercice emblématique de l’université française, la dissertation déroute souvent les étudiants étrangers. Il ne s’agit pas de réciter ses connaissances, ni de donner librement son opinion, mais de construire une réflexion organisée en réponse à une question qui n’a pas de réponse évidente.",
            "Tout commence par l’analyse du sujet. Chaque mot compte. Soit le sujet : « Le bonheur est-il une affaire privée ? » Que signifie « bonheur » : un état durable ou un moment ? Que veut dire « affaire privée » : ce qui ne regarde que l’individu, par opposition à la société, à l’État ? En définissant les termes, on fait apparaître une tension, et cette tension devient la problématique : par exemple, « Le bonheur, que chacun définit pour soi, peut-il pourtant se passer des autres et des institutions ? »",
            "Vient ensuite le plan. Le plus courant, dit dialectique, procède en trois temps : on examine d’abord une première réponse (le bonheur est une affaire personnelle), puis ses limites (il dépend des autres et de conditions sociales), avant de proposer un dépassement (l’État ne peut pas rendre heureux, mais il peut rendre le bonheur possible). Chaque partie s’appuie sur des arguments et des exemples précis, tirés de la littérature, de la philosophie, de l’histoire ou de l’actualité.",
            "L’introduction obéit à une structure codifiée : une amorce qui amène le sujet, la citation du sujet, sa problématique, puis l’annonce du plan. La conclusion répond clairement à la question et peut s’achever par une ouverture. Entre les parties, des transitions montrent comment le raisonnement progresse. C’est cette progression, bien plus que la quantité de connaissances, que le correcteur évalue."
          ],
          "questions": [
            {
              "q": "Qu’est-ce qu’une dissertation selon le texte ?",
              "options": [
                "Une récitation de connaissances",
                "L’expression libre d’une opinion",
                "Une réflexion organisée en réponse à une question ouverte"
              ],
              "answer": 2,
              "explication": "Premier paragraphe."
            },
            {
              "q": "Comment fait-on apparaître la problématique ?",
              "options": [
                "En définissant les termes du sujet pour faire apparaître une tension",
                "En choisissant une citation",
                "En donnant son avis dès le début"
              ],
              "answer": 0,
              "explication": "Deuxième paragraphe."
            },
            {
              "q": "Quelles sont les trois étapes du plan dialectique ?",
              "options": [
                "Introduction, développement, conclusion",
                "Une première réponse, ses limites, un dépassement",
                "Passé, présent, futur"
              ],
              "answer": 1,
              "explication": "Thèse, antithèse, synthèse."
            },
            {
              "q": "Quelle est la structure de l’introduction ?",
              "options": [
                "Amorce, sujet, problématique, annonce du plan",
                "Conclusion, plan, exemples",
                "Citation, avis, résumé"
              ],
              "answer": 0,
              "explication": "Dernier paragraphe."
            },
            {
              "q": "Qu’évalue avant tout le correcteur ?",
              "options": [
                "La longueur de la copie",
                "La progression du raisonnement",
                "Le nombre de citations"
              ],
              "answer": 1,
              "explication": "Dernière phrase."
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Un professeur corrige une introduction",
          "duree": "40 min",
          "consigne": "Un professeur commente l’introduction d’une étudiante sur le sujet « Le bonheur est-il une affaire privée ? ». Lis les questions, puis écoute.",
          "transcription": "Votre amorce est intéressante : vous partez de l’indice du bonheur national brut, créé au Bhoutan. C’est concret, c’est original, et surtout, cela pose directement la question du rôle de l’État. Très bien. En revanche, votre problématique est trop proche du sujet : vous écrivez « Le bonheur est-il une question individuelle ou collective ? ». Vous avez reformulé la question, mais vous ne l’avez pas problématisée. Il manque la tension, le paradoxe. Par exemple : si chacun définit son bonheur, comment la société pourrait-elle s’en mêler, et pourtant, peut-on être heureux seul ? Ensuite, l’annonce du plan. Elle est claire, mais trop mécanique : « dans une première partie, dans une deuxième partie, dans une troisième partie ». Essayez d’annoncer les idées plutôt que les numéros. Enfin, une remarque de forme : évitez le « je » dans une dissertation. Préférez le « nous » ou des tournures impersonnelles. Dans l’ensemble, c’est une bonne base ; avec ces corrections, votre introduction sera solide.",
          "questions": [
            {
              "q": "Pourquoi le professeur apprécie-t-il l’amorce ?",
              "options": [
                "Elle est concrète, originale et pose la question du rôle de l’État.",
                "Elle est très longue.",
                "Elle cite un philosophe célèbre."
              ],
              "answer": 0,
              "explication": "L’indice du bonheur national brut, au Bhoutan."
            },
            {
              "q": "Quel est le défaut de la problématique ?",
              "options": [
                "Elle est trop longue.",
                "Elle reformule la question sans faire apparaître de tension.",
                "Elle est hors sujet."
              ],
              "answer": 1,
              "explication": "« Vous ne l’avez pas problématisée. »"
            },
            {
              "q": "Que reproche-t-il à l’annonce du plan ?",
              "options": [
                "Elle est trop mécanique.",
                "Elle n’existe pas.",
                "Elle annonce quatre parties."
              ],
              "answer": 0,
              "explication": "Il faut annoncer les idées, pas les numéros."
            },
            {
              "q": "Quel conseil de forme donne-t-il ?",
              "options": [
                "Utiliser le « je »",
                "Éviter le « je », préférer « nous » ou des tournures impersonnelles",
                "Écrire des phrases courtes"
              ],
              "answer": 1,
              "explication": "C’est une convention de la dissertation."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le vocabulaire de la dissertation",
          "duree": "25 min",
          "consigne": "Associe chaque terme à sa définition.",
          "items": [
            {
              "terme": "l’amorce",
              "definition": "la première phrase de l’introduction, qui amène le sujet"
            },
            {
              "terme": "la problématique",
              "definition": "la question précise, souvent paradoxale, à laquelle répond le devoir"
            },
            {
              "terme": "l’annonce du plan",
              "definition": "la présentation des grandes étapes du raisonnement"
            },
            {
              "terme": "une transition",
              "definition": "un passage qui relie deux parties en montrant la progression"
            },
            {
              "terme": "l’ouverture",
              "definition": "la fin de la conclusion, qui élargit la réflexion"
            },
            {
              "terme": "un plan dialectique",
              "definition": "un plan en trois temps : thèse, antithèse, synthèse"
            },
            {
              "terme": "une copie",
              "definition": "le devoir rendu par l’étudiant"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Organiser son raisonnement",
          "duree": "50 min",
          "regles": [
            "connecteurs-logiques",
            "nominalisation"
          ],
          "fiche": "<p>Une dissertation se reconnaît à ses articulations. Pour <strong>annoncer</strong> : <em>nous verrons dans un premier temps…, avant de…</em>. Pour <strong>passer d’une partie à l’autre</strong> : <em>si…, il n’en reste pas moins que… ; cette conception, pour séduisante qu’elle soit, se heurte à…</em>. Pour <strong>dépasser</strong> : <em>dès lors, il convient de…, c’est pourquoi…</em>. Pour <strong>conclure</strong> : <em>en définitive, au terme de cette réflexion</em>.</p><p class=\"ex\"><strong>Si</strong> le bonheur semble relever de l’intime, <strong>il n’en reste pas moins qu’</strong>il dépend de conditions collectives.</p>",
          "consigne": "Choisis l’articulation qui convient.",
          "phrases": [
            {
              "avant": "Nous verrons dans un premier temps que le bonheur est une affaire intime,",
              "options": [
                "avant de",
                "afin de"
              ],
              "answer": 0,
              "apres": "montrer ses limites.",
              "explication": "Annonce de plan : « avant de »."
            },
            {
              "avant": "",
              "options": [
                "Si",
                "Puisque"
              ],
              "answer": 0,
              "apres": "le bonheur semble personnel, il n’en reste pas moins qu’il dépend d’autrui.",
              "explication": "« Si… il n’en reste pas moins » : transition concessive."
            },
            {
              "avant": "Cette conception, pour séduisante qu’elle",
              "options": [
                "soit",
                "est"
              ],
              "answer": 0,
              "apres": ", se heurte à une objection.",
              "explication": "« Pour + adjectif + que » : concession, subjonctif."
            },
            {
              "avant": "",
              "options": [
                "Dès lors",
                "Pourtant"
              ],
              "answer": 0,
              "apres": ", il convient de dépasser cette opposition.",
              "explication": "Conséquence logique qui ouvre la troisième partie."
            },
            {
              "avant": "",
              "options": [
                "Au terme de",
                "Au début de"
              ],
              "answer": 0,
              "apres": "cette réflexion, il apparaît que le bonheur ne se décrète pas.",
              "explication": "Formule de conclusion."
            },
            {
              "avant": "L’État ne peut rendre personne heureux ;",
              "options": [
                "en revanche",
                "par exemple"
              ],
              "answer": 0,
              "apres": ", il peut créer les conditions du bonheur.",
              "explication": "Opposition entre deux idées."
            },
            {
              "avant": "Il s’agit moins de garantir le bonheur",
              "options": [
                "que",
                "de"
              ],
              "answer": 0,
              "apres": "de le rendre possible.",
              "explication": "« Moins… que… » : comparaison qui déplace la question."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Une introduction de dissertation",
          "duree": "1 h 30",
          "regles": [
            "connecteurs-logiques",
            "registres-de-langue"
          ],
          "consigne": "Rédige l’introduction complète d’une dissertation sur le sujet : « Apprendre une langue étrangère, est-ce changer de regard sur le monde ? » Respecte les quatre étapes : amorce, sujet, problématique, annonce du plan (en annonçant les idées).",
          "min": 150,
          "max": 220,
          "checklist": [
            "Mon amorce est concrète et amène naturellement le sujet",
            "J’ai cité le sujet exactement",
            "J’ai défini ou interrogé les termes clés",
            "Ma problématique fait apparaître une tension",
            "J’ai annoncé un plan en trois idées, sans « première partie, deuxième partie »",
            "Je n’ai pas utilisé le « je »"
          ],
          "modele": "En chinois, on ne dit pas « il pleut » mais « tomber pluie », sans sujet : la pluie arrive, sans que personne ne la fasse tomber. Cette différence, minuscule en apparence, invite à une question plus vaste : « Apprendre une langue étrangère, est-ce changer de regard sur le monde ? » Apprendre une langue, ce n’est pas seulement mémoriser un vocabulaire et une grammaire ; c’est aussi, peut-être, découvrir d’autres manières de découper la réalité. Mais si chaque langue imposait sa vision du monde, comment expliquer que les êtres humains parviennent à traduire, à se comprendre et à partager des idées universelles ? Le problème est donc de savoir dans quelle mesure une langue façonne la pensée de celui qui l’apprend. Nous verrons d’abord que chaque langue propose une manière singulière de nommer le monde, avant de montrer que cette influence a des limites, puisque la pensée excède les mots. Il conviendra enfin de se demander si le véritable changement de regard ne naît pas moins de la langue elle-même que du passage d’une langue à l’autre."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Proposer un plan à l’oral",
          "duree": "35 min",
          "consigne": "Tu as dix minutes de préparation. Sujet : « Faut-il voyager pour comprendre le monde ? » Présente oralement ta problématique et ton plan en trois parties, avec un exemple par partie.",
          "preparation": [
            "Ce sujet invite à se demander si…",
            "Le paradoxe, c’est que…",
            "Dans un premier temps, on pourrait soutenir que…",
            "Cependant, il faut nuancer…",
            "Enfin, on peut dépasser cette opposition en…"
          ],
          "dureeCible": "2 à 3 minutes",
          "modele": "Ce sujet invite à se demander si l’expérience directe de l’ailleurs est indispensable à la compréhension du monde. Le paradoxe, c’est qu’on n’a jamais autant voyagé, et pourtant les préjugés n’ont pas disparu. Dans un premier temps, on pourrait soutenir que le voyage est irremplaçable : il confronte à d’autres façons de vivre, comme le montrent les récits de Montaigne ou de Nicolas Bouvier. Cependant, il faut nuancer : beaucoup de touristes traversent des pays sans les rencontrer, alors que d’autres comprennent le monde par la lecture ou l’étude, comme Voltaire qui a admiré la Chine sans y être allé, même si ce regard avait ses limites. Enfin, on peut dépasser cette opposition en montrant que ce qui compte n’est pas le déplacement, mais la disponibilité d’esprit : on peut voyager sans comprendre, et comprendre sans voyager, à condition de s’ouvrir réellement à l’autre.",
          "checklist": [
            "J’ai formulé une problématique avec un paradoxe",
            "J’ai présenté trois parties qui progressent",
            "J’ai donné un exemple par partie",
            "J’ai utilisé des articulations logiques"
          ]
        }
      ]
    },

    {
      "id": 29,
      "niveau": "c1",
      "theme": "Gastronomie, mode",
      "chine": true,
      "titre": "Luxe et savoir-faire",
      "objectif": "Comprendre ce que le luxe et l’artisanat d’art doivent aux échanges entre la France et la Chine.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "Le luxe français et la Chine : une histoire de savoir-faire",
          "duree": "50 min",
          "texte": [
            "Lorsque Thierry Hermès ouvre son atelier de harnais à Paris en 1837, il fabrique des selles et des brides pour les chevaux de l’aristocratie. Près de deux siècles plus tard, la maison est devenue l’un des symboles mondiaux du luxe, mais elle revendique toujours la même valeur : le travail de la main. Un sac peut demander une quinzaine d’heures de travail à un seul artisan, du premier point de couture au dernier.",
            "Ce culte du savoir-faire est au cœur de la stratégie des marques françaises. L’État l’a même consacré en 2005 en créant le label « Entreprise du patrimoine vivant », qui distingue des ateliers aux techniques rares : verriers, brodeurs, tapissiers, porcelainiers. Car le luxe ne vend pas seulement un objet ; il vend une histoire, une rareté, un geste transmis de génération en génération.",
            "La Chine occupe dans cette histoire une place paradoxale. Pendant des siècles, c’est l’Europe qui a rêvé de ses produits de luxe : la soie, qui a donné son nom aux routes commerciales, et la porcelaine, que les Européens ont longtemps cherché à imiter. Ce n’est qu’au XVIIIe siècle que la découverte de gisements de kaolin, près de Limoges, permet à la France de produire sa propre porcelaine dure. Lyon, de son côté, avait bâti sa prospérité sur une soierie dont la matière première venait d’abord d’Orient.",
            "Aujourd’hui, le mouvement s’est inversé : avant la pandémie, les consommateurs chinois représentaient, selon les estimations du secteur, environ un tiers des achats de luxe dans le monde. Les marques françaises y voient une chance, mais aussi un défi : une clientèle jeune, connectée et exigeante, qui attend des maisons européennes non seulement un logo, mais un récit et, de plus en plus, une reconnaissance de sa propre culture. Le luxe, dès lors, devient aussi un lieu de dialogue entre deux traditions de l’excellence."
          ],
          "questions": [
            {
              "q": "Que fabriquait Thierry Hermès à l’origine ?",
              "options": [
                "Des sacs à main",
                "Des harnais et des selles pour chevaux",
                "Des parfums"
              ],
              "answer": 1,
              "explication": "Atelier de harnais en 1837."
            },
            {
              "q": "Qu’est-ce que le label « Entreprise du patrimoine vivant » ?",
              "options": [
                "Une distinction pour des ateliers aux savoir-faire rares",
                "Une taxe sur le luxe",
                "Un musée"
              ],
              "answer": 0,
              "explication": "Créé en 2005."
            },
            {
              "q": "Pourquoi la place de la Chine est-elle « paradoxale » ?",
              "options": [
                "Parce qu’elle a d’abord été une source de produits de luxe convoités par l’Europe, avant de devenir un marché pour le luxe européen",
                "Parce qu’elle refuse le luxe",
                "Parce qu’elle copie tout"
              ],
              "answer": 0,
              "explication": "Le mouvement s’est inversé."
            },
            {
              "q": "Qu’a permis la découverte du kaolin près de Limoges ?",
              "options": [
                "La production française de porcelaine dure",
                "La production de soie",
                "L’industrie du verre"
              ],
              "answer": 0,
              "explication": "Au XVIIIe siècle."
            },
            {
              "q": "Qu’attend la clientèle chinoise actuelle, selon le texte ?",
              "options": [
                "Uniquement des prix bas",
                "Un récit et une reconnaissance de sa propre culture, pas seulement un logo",
                "Des produits fabriqués en Chine"
              ],
              "answer": 1,
              "explication": "Dernier paragraphe."
            },
            {
              "q": "Quelle est la tonalité de la conclusion ?",
              "options": [
                "Pessimiste",
                "Ouverte : le luxe comme lieu de dialogue",
                "Ironique"
              ],
              "answer": 1,
              "explication": "« Un lieu de dialogue entre deux traditions de l’excellence. »"
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Entretien avec une porcelainière",
          "duree": "40 min",
          "consigne": "Claire est porcelainière à Limoges. Elle a passé six mois en résidence à Jingdezhen, en Chine. Lis les questions, puis écoute.",
          "transcription": "Jingdezhen, pour une porcelainière, c’est un peu La Mecque. Cela fait plus de mille ans qu’on y fabrique de la porcelaine. Ce qui m’a le plus frappée en arrivant, c’est l’organisation du travail : là-bas, chaque étape est confiée à un spécialiste. L’un tourne, un autre émaille, un autre encore peint uniquement les fleurs, et un autre les paysages. À Limoges, nous sommes plutôt polyvalents : je fais presque tout moi-même. Au début, je trouvais ça déroutant, et puis j’ai compris que cette spécialisation permettait un niveau de précision incroyable. J’ai aussi appris l’humilité. Je pensais apporter mon savoir-faire, et c’est moi qui ai tout réappris, jusqu’à la manière de tenir un pinceau. Ce que nous partageons, en revanche, c’est la même inquiétude : la transmission. Ici comme là-bas, les jeunes hésitent à se lancer dans des métiers longs à apprendre et mal payés au début. Si nous ne formons pas d’apprentis, ces gestes disparaîtront. Aujourd’hui, avec un ancien collègue de Jingdezhen, nous préparons une collection commune.",
          "questions": [
            {
              "q": "Pourquoi compare-t-elle Jingdezhen à « La Mecque » ?",
              "options": [
                "Parce que c’est un lieu de référence, presque sacré, pour la porcelaine",
                "Parce que c’est une ville religieuse",
                "Parce que c’est loin"
              ],
              "answer": 0,
              "explication": "Plus de mille ans de tradition."
            },
            {
              "q": "Quelle différence d’organisation a-t-elle remarquée ?",
              "options": [
                "À Jingdezhen, chaque étape est confiée à un spécialiste ; à Limoges, l’artisan est plus polyvalent.",
                "À Limoges, tout est fait par des machines.",
                "Il n’y a aucune différence."
              ],
              "answer": 0,
              "explication": "C’est le cœur de son témoignage."
            },
            {
              "q": "Qu’a-t-elle appris en Chine ?",
              "options": [
                "L’humilité, et même à tenir un pinceau autrement",
                "À diriger une usine",
                "Le chinois parfaitement"
              ],
              "answer": 0,
              "explication": "« C’est moi qui ai tout réappris. »"
            },
            {
              "q": "Quelle inquiétude partagent les deux traditions ?",
              "options": [
                "La concurrence des machines",
                "La transmission aux jeunes générations",
                "Le prix de l’argile"
              ],
              "answer": 1,
              "explication": "Sans apprentis, les gestes disparaîtront."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Le vocabulaire du luxe et de l’artisanat",
          "duree": "25 min",
          "consigne": "Associe chaque mot à sa définition.",
          "items": [
            {
              "terme": "le savoir-faire",
              "definition": "l’habileté acquise par l’expérience dans un métier"
            },
            {
              "terme": "un artisan",
              "definition": "une personne qui exerce un métier manuel à son compte ou dans un atelier"
            },
            {
              "terme": "une maison (de couture)",
              "definition": "une entreprise de luxe ou de mode, souvent ancienne"
            },
            {
              "terme": "la contrefaçon",
              "definition": "la copie illégale d’un produit de marque"
            },
            {
              "terme": "haut de gamme",
              "definition": "de qualité et de prix supérieurs"
            },
            {
              "terme": "un apprenti",
              "definition": "une personne qui apprend un métier auprès d’un professionnel"
            },
            {
              "terme": "la transmission",
              "definition": "le fait de faire passer un savoir d’une génération à l’autre"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Varier les tournures passives",
          "duree": "50 min",
          "regles": [
            "voix-passive",
            "nominalisation"
          ],
          "fiche": "<p>À l’écrit soutenu, on évite d’accumuler les passifs en <em>être + participe</em>. On peut utiliser : la <strong>forme pronominale</strong> à sens passif (<em>la porcelaine se fabrique ici depuis mille ans</em>), <strong>se faire / se voir + infinitif</strong> (<em>la maison s’est vu décerner un label</em>), le pronom <strong>on</strong>, ou la <strong>nominalisation</strong> (<em>la création du label en 2005</em>).</p><p class=\"ex\">Ce sac <strong>se fabrique</strong> en quinze heures. L’atelier <strong>s’est vu attribuer</strong> le label.</p>",
          "consigne": "Choisis la tournure correcte.",
          "phrases": [
            {
              "avant": "Ces objets",
              "options": [
                "se vendent",
                "se sont vendus par"
              ],
              "answer": 0,
              "apres": "surtout en Asie.",
              "explication": "Forme pronominale à sens passif, sans agent."
            },
            {
              "avant": "L’atelier",
              "options": [
                "s’est vu décerner",
                "s’est vu décerné"
              ],
              "answer": 0,
              "apres": "le label en 2018.",
              "explication": "Se voir + infinitif : « décerner »."
            },
            {
              "avant": "Cette technique",
              "options": [
                "se transmet",
                "est transmettée"
              ],
              "answer": 0,
              "apres": "de maître à apprenti.",
              "explication": "Le participe de transmettre est « transmis » ; la forme pronominale est plus légère."
            },
            {
              "avant": "La porcelaine de Limoges",
              "options": [
                "a été rendue possible",
                "a été rendu possible"
              ],
              "answer": 0,
              "apres": "par la découverte du kaolin.",
              "explication": "Accord avec « porcelaine », féminin."
            },
            {
              "avant": "",
              "options": [
                "La création",
                "Le créement"
              ],
              "answer": 0,
              "apres": "du label date de 2005.",
              "explication": "Créer → la création."
            },
            {
              "avant": "Le jeune artisan",
              "options": [
                "s’est fait",
                "s’est faite"
              ],
              "answer": 0,
              "apres": "remarquer lors d’un concours.",
              "explication": "Se faire + infinitif : « fait » reste invariable."
            },
            {
              "avant": "Ces motifs",
              "options": [
                "s’inspirent",
                "sont inspirés de"
              ],
              "answer": 0,
              "apres": "de la peinture chinoise.",
              "explication": "Forme pronominale active, plus élégante ici (s’inspirer de)."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Un article pour un magazine culturel",
          "duree": "1 h 30",
          "regles": [
            "voix-passive",
            "connecteurs-logiques",
            "nominalisation"
          ],
          "consigne": "Écris un article pour un magazine culturel francophone : « Savoir-faire français, savoir-faire chinois : un dialogue possible ? » Appuie-toi sur le texte et l’entretien, et ajoute un exemple que tu connais (une technique, un objet, un artisan).",
          "min": 260,
          "max": 330,
          "checklist": [
            "Mon article a un titre et un chapeau (deux phrases d’introduction)",
            "J’ai présenté au moins deux savoir-faire",
            "J’ai cité l’entretien ou le texte",
            "J’ai varié les tournures passives",
            "J’ai conclu sur une idée forte"
          ],
          "modele": "Porcelaine, soie, laque : quand deux excellences se rencontrent\n\nOn oppose souvent le luxe français, héritier des cours royales, à l’artisanat chinois, perçu comme anonyme et collectif. Pourtant, des deux côtés, les mêmes gestes patients se transmettent depuis des siècles.\n\nL’histoire commence par une admiration à sens unique. Pendant longtemps, la porcelaine de Chine s’est vendue à prix d’or en Europe, où l’on cherchait en vain à en percer le secret. Il a fallu attendre la découverte du kaolin près de Limoges, au XVIIIe siècle, pour que la France produise sa propre porcelaine dure.\n\nAujourd’hui, l’échange s’est rééquilibré. Claire, porcelainière à Limoges, a passé six mois à Jingdezhen. Elle y a découvert une organisation où chaque étape est confiée à un spécialiste, quand elle-même réalise presque tout seule. « Je pensais apporter mon savoir-faire, et c’est moi qui ai tout réappris », confie-t-elle.\n\nLa laque offre un autre exemple. Cette technique, née en Asie il y a des millénaires, a fasciné les décorateurs parisiens des années 1920, qui l’ont adaptée au mobilier Art déco. Le savoir-faire ne s’est pas contenté de voyager : il s’est transformé.\n\nLes deux traditions partagent enfin une inquiétude : la disparition des apprentis. Sans transmission, aucun label ni aucun prestige ne sauveront ces métiers.\n\nPlus qu’une rivalité, c’est donc une conversation qui s’engage entre deux excellences, et elle ne fait que commencer."
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Présenter un objet d’artisanat",
          "duree": "35 min",
          "consigne": "Présente un objet artisanal de ta région ou de ta famille comme le ferait une guide de musée : son origine, sa fabrication, sa valeur symbolique, et ce qu’il pourrait dire à un public français.",
          "preparation": [
            "L’objet que je vous présente…",
            "Il est fabriqué…",
            "Ce qui fait sa valeur, c’est…",
            "Pour un public français, il pourrait évoquer…",
            "Il se transmet…"
          ],
          "dureeCible": "2 à 3 minutes",
          "modele": "L’objet que je vous présente est un éventail en soie brodée de Suzhou, qui appartenait à ma grand-mère. La broderie de Suzhou est l’une des quatre grandes broderies chinoises, et elle se pratique depuis plus de deux mille ans. Elle est réalisée avec des fils de soie si fins qu’une brodeuse peut séparer un seul fil en plusieurs brins. Sur cet éventail, un chat est brodé des deux côtés, avec deux expressions différentes : c’est ce qu’on appelle la broderie double face. Ce qui fait sa valeur, c’est le temps : une pièce comme celle-ci peut demander plusieurs mois de travail. Pour un public français, elle pourrait évoquer la haute couture, et ses ateliers de broderie où l’on travaille aussi à la main pendant des centaines d’heures. Dans ma famille, cet éventail se transmet de mère en fille : un jour, il sera à moi.",
          "checklist": [
            "J’ai présenté l’origine et la fabrication",
            "J’ai expliqué la valeur de l’objet",
            "J’ai fait un lien avec la culture française",
            "J’ai utilisé au moins une forme pronominale à sens passif"
          ]
        }
      ]
    },

    {
      "id": 30,
      "niveau": "c1",
      "theme": "Vie quotidienne",
      "titre": "Nuancer sa pensée à l’oral",
      "objectif": "Exprimer des degrés de certitude, d’accord et de réserve.",
      "activites": [
        {
          "type": "lecture",
          "titre": "Lire",
          "sousTitre": "L’art de la nuance à la française",
          "duree": "50 min",
          "texte": [
            "Un étudiant étranger raconte son étonnement : après avoir présenté un exposé, il demande à son professeur ce qu’il en a pensé. Réponse : « Ce n’est pas mal du tout. » Inquiet, il interroge ses camarades, qui le rassurent : c’est presque un compliment. Bienvenue dans le monde de la litote, cette figure qui consiste à dire moins pour faire entendre plus, et qui est l’un des ressorts discrets de la conversation française.",
            "La nuance passe d’abord par les marqueurs de certitude. Entre « c’est vrai » et « c’est faux », le français dispose d’une gamme infinie : « il me semble que », « j’ai l’impression que », « il se pourrait que », « sans doute », « à mon sens », « dans une certaine mesure ». Paradoxalement, « sans doute » exprime souvent… un doute, alors que « sans aucun doute » marque la certitude. Ces nuances, qui paraissent des détails, changent profondément la manière dont un propos est reçu.",
            "Elle passe aussi par l’art de ne pas contredire de front. Plutôt que « vous avez tort », on dira « je ne suis pas certaine de vous suivre sur ce point », « c’est une piste intéressante, mais… », ou encore « on pourrait aussi voir les choses autrement ». À l’université comme au travail, ces précautions ne sont pas de l’hypocrisie : elles permettent de maintenir le dialogue tout en marquant un désaccord.",
            "Encore faut-il ne pas en abuser. Un propos qui accumule les précautions finit par ne plus rien dire. La vraie maîtrise, au niveau C1, consiste à savoir doser : affirmer nettement ce dont on est sûr, nuancer ce qui le mérite, et choisir, selon l’interlocuteur, le degré de franchise qui convient."
          ],
          "questions": [
            {
              "q": "Pourquoi l’étudiant est-il inquiet ?",
              "options": [
                "Il interprète « ce n’est pas mal du tout » comme une critique.",
                "Il a eu une mauvaise note.",
                "Il n’a pas compris la question."
              ],
              "answer": 0,
              "explication": "En réalité, c’était presque un compliment."
            },
            {
              "q": "Qu’est-ce qu’une litote ?",
              "options": [
                "Une exagération",
                "Dire moins pour faire entendre plus",
                "Une répétition"
              ],
              "answer": 1,
              "explication": "Premier paragraphe."
            },
            {
              "q": "Que signifie souvent « sans doute » ?",
              "options": [
                "Une certitude absolue",
                "Une probabilité, un léger doute",
                "Un refus"
              ],
              "answer": 1,
              "explication": "Alors que « sans aucun doute » marque la certitude."
            },
            {
              "q": "Pourquoi éviter de contredire de front ?",
              "options": [
                "Pour maintenir le dialogue tout en marquant un désaccord",
                "Parce que c’est interdit",
                "Pour éviter de répondre"
              ],
              "answer": 0,
              "explication": "Ce n’est pas de l’hypocrisie."
            },
            {
              "q": "Quel danger le dernier paragraphe signale-t-il ?",
              "options": [
                "Être trop direct",
                "Accumuler tant de précautions qu’on ne dit plus rien",
                "Parler trop vite"
              ],
              "answer": 1,
              "explication": "Il faut savoir doser."
            },
            {
              "q": "« Encore faut-il… » (dernier paragraphe) introduit…",
              "options": [
                "une condition, une réserve",
                "un exemple",
                "une conclusion"
              ],
              "answer": 0,
              "explication": "Inversion du sujet après « encore » : « mais il faut aussi… »"
            }
          ]
        },
        {
          "type": "ecoute",
          "titre": "Écouter",
          "sousTitre": "Deux amis parlent d’un film",
          "duree": "35 min",
          "consigne": "Léa et Hugo sortent du cinéma. Écoute comment ils nuancent leurs avis. Lis les questions, puis écoute.",
          "transcription": "Alors, tu en as pensé quoi ? Franchement, c’est pas mal. La photographie est superbe, les acteurs sont justes. Mais j’ai trouvé ça un peu long, non ? Un peu long ? Deux heures quarante, tu veux dire ! Non, je plaisante, je comprends ce que tu veux dire. Moi, je l’ai trouvé bouleversant, surtout la fin. Bouleversant, peut-être pas, mais touchant, oui, je te l’accorde. Ce qui me gêne, c’est le personnage du père : il me semble qu’il est un peu caricatural. Je ne suis pas sûre d’être d’accord. Il est excessif, d’accord, mais c’est voulu, c’est le regard de l’enfant sur lui. Ah, vu comme ça… Tu marques un point. N’empêche, quarante minutes de moins, et c’était un chef-d’œuvre. Là, tu exagères ! Bon, disons un très bon film. On est d’accord ?",
          "questions": [
            {
              "q": "Que signifie « c’est pas mal » dans la bouche de Hugo ?",
              "options": [
                "Il a détesté le film.",
                "Il a plutôt aimé, avec des réserves.",
                "Il n’a pas d’avis."
              ],
              "answer": 1,
              "explication": "C’est une litote : il cite ensuite des qualités."
            },
            {
              "q": "Comment Hugo nuance-t-il le mot « bouleversant » ?",
              "options": [
                "Il propose « touchant » à la place.",
                "Il dit que c’était ennuyeux.",
                "Il est entièrement d’accord."
              ],
              "answer": 0,
              "explication": "« Bouleversant, peut-être pas, mais touchant, oui. »"
            },
            {
              "q": "Comment Léa défend-elle le personnage du père ?",
              "options": [
                "Elle dit que l’acteur est célèbre.",
                "Elle explique que son excès est voulu, car on le voit par les yeux de l’enfant.",
                "Elle ne le défend pas."
              ],
              "answer": 1,
              "explication": "Hugo reconnaît : « tu marques un point »."
            },
            {
              "q": "Sur quoi s’accordent-ils finalement ?",
              "options": [
                "C’est un chef-d’œuvre.",
                "C’est un très bon film.",
                "C’est un film raté."
              ],
              "answer": 1,
              "explication": "Un compromis final."
            }
          ]
        },
        {
          "type": "association",
          "titre": "Vocabulaire",
          "sousTitre": "Les expressions de la nuance",
          "duree": "25 min",
          "consigne": "Associe chaque expression à sa fonction.",
          "items": [
            {
              "terme": "il me semble que",
              "definition": "exprimer un avis avec prudence"
            },
            {
              "terme": "je te l’accorde",
              "definition": "concéder un point à son interlocuteur"
            },
            {
              "terme": "tu marques un point",
              "definition": "reconnaître la pertinence d’un argument"
            },
            {
              "terme": "dans une certaine mesure",
              "definition": "limiter la portée d’une affirmation"
            },
            {
              "terme": "force est de constater que",
              "definition": "reconnaître un fait qu’on ne peut pas nier"
            },
            {
              "terme": "je ne suis pas certaine de vous suivre",
              "definition": "marquer poliment un désaccord"
            },
            {
              "terme": "n’empêche",
              "definition": "maintenir son idée malgré tout (familier)"
            }
          ]
        },
        {
          "type": "trous",
          "titre": "Grammaire",
          "sousTitre": "Degrés de certitude : indicatif ou subjonctif ?",
          "duree": "50 min",
          "regles": [
            "subjonctif-emploi",
            "donner-son-avis"
          ],
          "fiche": "<p>Plus la certitude baisse, plus le subjonctif apparaît. <strong>Indicatif</strong> : <em>il est certain que, il est probable que, il me semble que, je suis sûre que</em>. <strong>Subjonctif</strong> : <em>il est possible que, il se peut que, il semble que, je doute que, il est peu probable que, je ne pense pas que</em>. Attention : <em>il me semble que</em> (indicatif) mais <em>il semble que</em> (plutôt subjonctif).</p><p class=\"ex\">Il <strong>me</strong> semble qu’il <strong>a</strong> raison. Il semble qu’il <strong>ait</strong> raison.</p>",
          "consigne": "Choisis la forme correcte.",
          "phrases": [
            {
              "avant": "Il me semble que ce film",
              "options": [
                "est",
                "soit"
              ],
              "answer": 0,
              "apres": "un peu long.",
              "explication": "« Il me semble que » : indicatif."
            },
            {
              "avant": "Il semble que le réalisateur",
              "options": [
                "ait",
                "a"
              ],
              "answer": 0,
              "apres": "voulu exagérer ce personnage.",
              "explication": "« Il semble que » (sans pronom) : subjonctif, le plus souvent."
            },
            {
              "avant": "Il est probable que nous",
              "options": [
                "irons",
                "allions"
              ],
              "answer": 0,
              "apres": "le revoir.",
              "explication": "« Probable » : indicatif (forte probabilité)."
            },
            {
              "avant": "Il est possible que tu",
              "options": [
                "aies",
                "as"
              ],
              "answer": 0,
              "apres": "raison.",
              "explication": "« Possible » : subjonctif."
            },
            {
              "avant": "Je ne pense pas qu’il",
              "options": [
                "soit",
                "est"
              ],
              "answer": 0,
              "apres": "caricatural.",
              "explication": "Pensée à la forme négative : subjonctif."
            },
            {
              "avant": "Je suis convaincue que cette fin",
              "options": [
                "restera",
                "reste"
              ],
              "answer": 0,
              "apres": "dans les mémoires.",
              "explication": "Certitude : indicatif (ici futur)."
            },
            {
              "avant": "Il se peut que je",
              "options": [
                "me trompe",
                "me trompe pas"
              ],
              "answer": 0,
              "apres": ", mais je l’ai trouvé touchant.",
              "explication": "« Il se peut que » : subjonctif."
            }
          ]
        },
        {
          "type": "ecriture",
          "titre": "Écrire",
          "sousTitre": "Répondre avec nuance",
          "duree": "1 h 15",
          "regles": [
            "donner-son-avis",
            "subjonctif-emploi",
            "registres-de-langue"
          ],
          "consigne": "Une camarade t’envoie le message suivant : « J’ai lu que les cours en ligne étaient tout aussi efficaces que les cours en présentiel. Je pense donc ne plus venir en amphi. Tu en penses quoi ? » Réponds-lui par écrit : reconnais ce qui est juste dans son raisonnement, exprime tes réserves avec tact, et propose une solution intermédiaire.",
          "min": 180,
          "max": 240,
          "checklist": [
            "J’ai reconnu au moins un point juste dans son raisonnement",
            "J’ai exprimé mon désaccord sans contredire de front",
            "J’ai utilisé au moins quatre marqueurs de nuance différents",
            "J’ai employé correctement indicatif et subjonctif après des expressions d’opinion",
            "J’ai proposé une solution intermédiaire",
            "Le ton est amical mais pas familier"
          ],
          "modele": "Coucou Clara,\n\nJe comprends tout à fait ton envie : avec le trajet et les cours à huit heures, venir en amphi demande un vrai effort ! Et tu as en partie raison : certaines études montrent que, pour transmettre des connaissances, les cours en ligne peuvent être efficaces, surtout quand on peut revoir les vidéos.\n\nCela dit, je ne suis pas certaine que la question se réduise à l’efficacité. Il me semble qu’en amphi, on apprend aussi des choses qu’aucune vidéo ne remplace : poser une question au prof à la fin, comparer ses notes, entendre les questions des autres. Et je doute que tu puisses suivre aussi bien à la maison, avec ton téléphone à côté… Je parle d’expérience, sans doute !\n\nPar ailleurs, il est possible que certains profs donnent en cours des indications sur l’examen qu’ils ne mettent pas en ligne.\n\nAlors pourquoi ne pas faire un compromis ? Tu pourrais suivre en ligne les cours magistraux les plus théoriques, et venir aux TD et aux cours où l’on discute. Et si tu veux, on peut se retrouver à la bibliothèque après, pour comparer nos notes.\n\nDis-moi ce que tu en penses !\n\nLin"
        },
        {
          "type": "oral",
          "titre": "Parler",
          "sousTitre": "Nuancer une affirmation",
          "duree": "35 min",
          "consigne": "Réagis à voix haute à l’affirmation suivante : « Les réseaux sociaux ont rendu les jeunes plus seuls. » Tu dois montrer trois degrés : ce dont tu es sûre, ce qui te paraît probable, et ce dont tu doutes. Termine par une conclusion nette.",
          "preparation": [
            "Ce dont je suis certaine, c’est que…",
            "Il est probable que…",
            "En revanche, je doute que…",
            "Dans une certaine mesure, …",
            "Au bout du compte, je dirais que…"
          ],
          "dureeCible": "2 minutes",
          "modele": "Ce dont je suis certaine, c’est que les réseaux sociaux ont profondément changé la façon dont les jeunes communiquent : on échange plus souvent, mais plus brièvement. Il est probable aussi que certains, en se comparant sans cesse aux autres, se sentent plus isolés ou moins satisfaits de leur vie. En revanche, je doute que l’on puisse dire que les jeunes sont plus seuls en général. Pour beaucoup, et je pense par exemple aux étudiants étrangers comme moi, ces outils permettent au contraire de garder un lien avec la famille et les amis restés au pays. Dans une certaine mesure, tout dépend de l’usage qu’on en fait. Au bout du compte, je dirais que les réseaux sociaux ne créent pas la solitude, mais qu’ils peuvent l’aggraver chez ceux qui sont déjà fragiles.",
          "checklist": [
            "J’ai exprimé trois degrés de certitude",
            "J’ai utilisé correctement indicatif et subjonctif",
            "J’ai donné un exemple personnel",
            "Ma conclusion est nette"
          ]
        }
      ]
    }
  ]
};
