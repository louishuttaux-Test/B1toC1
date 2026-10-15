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

    { id: 6, niveau: "b1", theme: "Vie quotidienne", titre: "Se loger en France", objectif: "Comprendre une annonce, visiter un logement, écrire à un propriétaire." },

    { id: 7, niveau: "b1", theme: "Gastronomie, mode", titre: "La mode, de la rue aux défilés", objectif: "Décrire des vêtements et un style, donner son avis sur une tendance." },

    { id: 8, niveau: "b1", theme: "Sport et tourisme", titre: "Voyager en train", objectif: "Réserver un billet, comprendre une annonce en gare, raconter un trajet." },

    { id: 9, niveau: "b1", theme: "Information, géopolitique et histoire", titre: "Comprendre un journal télévisé", objectif: "Repérer les informations essentielles d’un reportage court." },

    { id: 10, niveau: "b1", theme: "Sciences, innovation et environnement", titre: "Imaginer la ville de demain", objectif: "Faire des hypothèses avec si et parler d’innovations du quotidien." },

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

    { id: 15, niveau: "b2", theme: "Culture, littérature et francophonie", titre: "Les voix de la francophonie", objectif: "Découvrir des auteurs d’Afrique, du Québec et des Caraïbes." },

    { id: 16, niveau: "b2", theme: "Sciences, innovation et environnement", titre: "Écologie et mode de vie", objectif: "Comprendre et discuter les enjeux environnementaux du quotidien." },

    { id: 17, niveau: "b2", theme: "Droits humains", titre: "L’égalité entre les femmes et les hommes", objectif: "Analyser des chiffres et argumenter sur un sujet de société." },

    { id: 18, niveau: "b2", theme: "Gastronomie, mode", chine: true, titre: "Le thé, de la Chine à la France", objectif: "Retracer le voyage d’un produit et décrire une dégustation." },

    { id: 19, niveau: "b2", theme: "Vie quotidienne", titre: "L’entretien d’embauche", objectif: "Se présenter, valoriser ses compétences, répondre aux questions difficiles." },

    { id: 20, niveau: "b2", theme: "Études et université", titre: "Suivre un cours magistral", objectif: "Repérer le plan d’un exposé oral et prendre des notes efficaces." },

    { id: 21, niveau: "c1", theme: "Information, géopolitique et histoire", titre: "Lire la presse d’opinion", objectif: "Analyser un éditorial et ses procédés de persuasion." },

    { id: 22, niveau: "c1", theme: "Sciences, innovation et environnement", titre: "Grandes découvertes, grands débats", objectif: "Comprendre un texte de vulgarisation scientifique et ses enjeux éthiques." },

    { id: 23, niveau: "c1", theme: "Droits humains", titre: "La liberté d’expression et ses limites", objectif: "Construire une argumentation nuancée sur un sujet sensible." },

    { id: 24, niveau: "c1", theme: "Culture, littérature et francophonie", chine: true, titre: "La Chine vue par les écrivains français", objectif: "Lire des extraits de Segalen, Claudel ou Malraux et les mettre en perspective." },

    { id: 25, niveau: "c1", theme: "Sport et tourisme", titre: "Le tourisme de masse en débat", objectif: "Analyser les effets du tourisme sur les villes et les sites naturels." },

    { id: 26, niveau: "c1", theme: "Culture, littérature et francophonie", titre: "Lire un texte littéraire", objectif: "Comprendre un extrait classique et reconnaître le passé simple." },

    { id: 27, niveau: "c1", theme: "Information, géopolitique et histoire", titre: "La synthèse de documents", objectif: "Croiser plusieurs sources et produire une synthèse objective." },

    { id: 28, niveau: "c1", theme: "Études et université", titre: "La dissertation", objectif: "Problématiser un sujet et construire un plan dialectique." },

    { id: 29, niveau: "c1", theme: "Gastronomie, mode", chine: true, titre: "Luxe et savoir-faire", objectif: "Comprendre l’économie de la mode et du luxe entre la France et la Chine." },

    { id: 30, niveau: "c1", theme: "Vie quotidienne", titre: "Nuancer sa pensée à l’oral", objectif: "Exprimer des degrés de certitude, d’accord et de réserve." }
  ]
};
