/*
  MÉMENTO DE RÈGLES
  -----------------
  Chaque règle : id (unique, sans espace), cat, niveau, titre, resume, corps (HTML), voir (ids liés).
  Les unités peuvent renvoyer vers une règle avec  regles: ["id-de-la-regle"]  dans une activité.
*/

window.CATEGORIES = [
  { id: "grammaire", nom: "Grammaire" },
  { id: "conjugaison", nom: "Conjugaison" },
  { id: "orthographe", nom: "Orthographe" },
  { id: "vocabulaire", nom: "Vocabulaire" },
  { id: "ponctuation", nom: "Ponctuation et typographie" }
];

window.REGLES = [

  /* ===================== GRAMMAIRE ===================== */

  {
    id: "connecteurs-logiques", cat: "grammaire", niveau: "B1",
    titre: "Les connecteurs logiques",
    resume: "Exprimer la cause, la conséquence, l’opposition et la concession.",
    corps: `
      <p>Les connecteurs relient les idées et montrent le raisonnement. À l’écrit, un lecteur les cherche pour suivre ta pensée.</p>
      <table class="fiche-table">
        <thead><tr><th scope="col">Relation</th><th scope="col">Connecteurs</th><th scope="col">Exemple</th></tr></thead>
        <tbody>
          <tr><th scope="row">Cause</th><td>car, parce que, puisque, comme, étant donné que, en raison de + nom, grâce à + nom (cause positive), à cause de + nom</td><td>Comme il pleuvait, nous sommes restés.</td></tr>
          <tr><th scope="row">Conséquence</th><td>donc, alors, c’est pourquoi, par conséquent, si bien que, de sorte que</td><td>Il a beaucoup révisé, si bien qu’il a réussi.</td></tr>
          <tr><th scope="row">Opposition</th><td>mais, alors que, tandis que, au contraire, en revanche, par contre (oral)</td><td>Paul aime la ville, alors que sa sœur préfère la campagne.</td></tr>
          <tr><th scope="row">Concession</th><td>pourtant, cependant, néanmoins, même si + indicatif, bien que + subjonctif, malgré + nom</td><td>Bien qu’il soit fatigué, il continue.</td></tr>
        </tbody>
      </table>
      <h3>Les nuances à connaître</h3>
      <ul>
        <li><strong>Parce que</strong> répond à « pourquoi ? ». <strong>Puisque</strong> présente une cause déjà connue de l’interlocuteur. <strong>Comme</strong> se place en début de phrase.</li>
        <li><strong>Car</strong> ne se met jamais en début de phrase.</li>
        <li><strong>Opposition</strong> : deux faits différents sont mis côte à côte. <strong>Concession</strong> : un fait aurait dû empêcher l’autre, mais ne l’a pas empêché.</li>
      </ul>
      <p class="piege"><strong>Piège.</strong> <em>Malgré que</em> est à éviter à l’écrit : dis <em>bien que</em> ou <em>malgré</em> + nom (<em>malgré la pluie</em>).</p>`,
    voir: ["subjonctif-emploi", "virgule"]
  },

  {
    id: "pronoms-relatifs", cat: "grammaire", niveau: "B1",
    titre: "Qui, que, dont, où",
    resume: "Les pronoms relatifs simples, pour relier deux phrases sans répéter un nom.",
    corps: `
      <p>Le pronom relatif remplace un nom déjà cité (l’antécédent) et introduit une proposition relative. Son choix dépend de sa <strong>fonction</strong> dans la relative.</p>
      <table class="fiche-table">
        <thead><tr><th scope="col">Pronom</th><th scope="col">Fonction</th><th scope="col">Exemple</th></tr></thead>
        <tbody>
          <tr><th scope="row">qui</th><td>sujet du verbe qui suit</td><td>La femme <strong>qui</strong> parle est ma voisine.</td></tr>
          <tr><th scope="row">que (qu’)</th><td>complément d’objet direct</td><td>Le livre <strong>que</strong> je lis est passionnant.</td></tr>
          <tr><th scope="row">dont</th><td>remplace un complément introduit par <em>de</em></td><td>Le film <strong>dont</strong> je t’ai parlé. (parler <em>de</em> ce film)</td></tr>
          <tr><th scope="row">où</th><td>lieu ou moment</td><td>La ville <strong>où</strong> j’habite. Le jour <strong>où</strong> je suis arrivée.</td></tr>
        </tbody>
      </table>
      <h3>Méthode pour dont</h3>
      <p>Refais la phrase sans le relatif : <em>J’ai besoin <strong>de</strong> ce livre</em> → <em>C’est le livre <strong>dont</strong> j’ai besoin.</em> <em>Le père <strong>de</strong> cette étudiante est médecin</em> → <em>L’étudiante <strong>dont</strong> le père est médecin.</em></p>
      <p class="piege"><strong>Pièges.</strong> On dit <em>le jour où</em>, jamais <em>le jour que</em>. On dit <em>ce dont j’ai besoin</em>, pas <em>ce que j’ai besoin</em>.</p>`,
    voir: ["pronoms-relatifs-composes"]
  },

  {
    id: "pronoms-relatifs-composes", cat: "grammaire", niveau: "B2",
    titre: "Lequel, auquel, duquel",
    resume: "Les pronoms relatifs composés, après une préposition.",
    corps: `
      <p>Après une préposition (<em>sur, avec, pour, dans, à, près de</em>…), on utilise <strong>lequel</strong>, qui s’accorde avec l’antécédent : <em>lequel, laquelle, lesquels, lesquelles</em>.</p>
      <p class="ex">La table <strong>sur laquelle</strong> j’ai posé mes clés. Les raisons <strong>pour lesquelles</strong> il est parti.</p>
      <h3>Les formes contractées</h3>
      <ul>
        <li>à + lequel → <strong>auquel</strong>, auxquels, auxquelles (mais <em>à laquelle</em>) : <em>le projet auquel je participe</em> (participer à).</li>
        <li>de + lequel → <strong>duquel</strong>, desquels, desquelles (mais <em>de laquelle</em>), surtout après une locution : <em>le parc près duquel nous habitons</em>.</li>
      </ul>
      <h3>Pour une personne</h3>
      <p>On préfère <strong>qui</strong> après une préposition : <em>la collègue avec qui je travaille</em>, <em>l’ami à qui j’ai écrit</em>.</p>
      <p class="piege"><strong>Piège.</strong> <em>Dont</em> ne s’emploie pas après une locution comme <em>près de, à côté de, au milieu de</em> : on dit <em>le parc près duquel</em>, pas <em>près dont</em>.</p>`,
    voir: ["pronoms-relatifs"]
  },

  {
    id: "pronoms-en-y", cat: "grammaire", niveau: "B1",
    titre: "Les pronoms en et y",
    resume: "Remplacer un complément introduit par de ou par à, ou un lieu.",
    corps: `
      <h3>En</h3>
      <ul>
        <li>remplace un complément introduit par <em>de</em> : <em>Il parle de son voyage → Il <strong>en</strong> parle.</em></li>
        <li>remplace une quantité ou un partitif : <em>Tu veux du café ? Oui, j’<strong>en</strong> veux. J’ai trois frères → J’<strong>en</strong> ai trois.</em></li>
        <li>remplace un lieu d’où l’on vient : <em>Je reviens de Lyon → J’<strong>en</strong> reviens.</em></li>
      </ul>
      <h3>Y</h3>
      <ul>
        <li>remplace un lieu : <em>Je vais à Lyon → J’<strong>y</strong> vais.</em></li>
        <li>remplace un complément de chose introduit par <em>à</em> : <em>Je pense à mon examen → J’<strong>y</strong> pense.</em></li>
      </ul>
      <h3>Pour les personnes</h3>
      <p>Avec <em>penser à, s’intéresser à, parler de</em>, on reprend une personne par un pronom tonique : <em>Je pense à ma mère → Je pense <strong>à elle</strong>.</em></p>
      <h3>Place</h3>
      <p>Avant le verbe conjugué (<em>j’y vais</em>), avant l’infinitif (<em>je vais y aller</em>), après le verbe à l’impératif affirmatif, avec un trait d’union : <em>Vas-y ! Prends-en !</em> (on ajoute un <em>s</em> à la 2<sup>e</sup> personne pour la prononciation).</p>`,
    voir: []
  },

  {
    id: "articles-partitifs", cat: "grammaire", niveau: "B1",
    titre: "Du, de la, des : les articles partitifs",
    resume: "Parler d’une quantité qu’on ne compte pas, et savoir quand ils deviennent de.",
    corps: `
      <p>On utilise le partitif pour une <strong>quantité non précisée</strong>, surtout pour la nourriture et les matières.</p>
      <table class="fiche-table">
        <tbody>
          <tr><th scope="row">masculin</th><td><strong>du</strong></td><td>du pain, du thé, du riz</td></tr>
          <tr><th scope="row">féminin</th><td><strong>de la</strong></td><td>de la farine, de la soupe</td></tr>
          <tr><th scope="row">devant une voyelle</th><td><strong>de l’</strong></td><td>de l’eau, de l’huile</td></tr>
          <tr><th scope="row">pluriel</th><td><strong>des</strong></td><td>des raviolis, des légumes</td></tr>
        </tbody>
      </table>
      <h3>Quand le partitif devient de</h3>
      <ul>
        <li>Après une <strong>négation</strong> : <em>Je ne mange pas <strong>de</strong> viande. Il n’y a plus <strong>d’</strong>eau.</em></li>
        <li>Après une <strong>quantité</strong> : <em>beaucoup <strong>de</strong> farine, un peu <strong>de</strong> sel, un kilo <strong>de</strong> marrons, une bouteille <strong>d’</strong>eau.</em></li>
      </ul>
      <h3>Partitif ou article défini ?</h3>
      <p>Avec les verbes de goût (<em>aimer, adorer, préférer, détester</em>), on parle de la chose en général : article défini. <em>J’adore <strong>le</strong> fromage, mais ce soir, je ne mange pas <strong>de</strong> fromage.</em></p>
      <p class="piege"><strong>Exception.</strong> Avec le verbe <em>être</em>, la négation ne change rien : <em>Ce n’est pas <strong>du</strong> thé, c’est <strong>du</strong> café.</em></p>`,
    voir: ["comparatif-superlatif"]
  },

  {
    id: "comparatif-superlatif", cat: "grammaire", niveau: "B1",
    titre: "Comparatif et superlatif",
    resume: "Plus… que, aussi… que, le plus… de : comparer des personnes, des lieux, des choses.",
    corps: `
      <h3>Le comparatif</h3>
      <table class="fiche-table">
        <thead><tr><th scope="col"></th><th scope="col">avec un adjectif ou un adverbe</th><th scope="col">avec un nom</th></tr></thead>
        <tbody>
          <tr><th scope="row">supériorité</th><td>plus grand que</td><td>plus de touristes que</td></tr>
          <tr><th scope="row">égalité</th><td>aussi grand que</td><td>autant de touristes que</td></tr>
          <tr><th scope="row">infériorité</th><td>moins grand que</td><td>moins de touristes que</td></tr>
        </tbody>
      </table>
      <p>Avec un verbe : <em>Il voyage <strong>plus que</strong> moi. Elle travaille <strong>autant que</strong> lui.</em></p>
      <h3>Le superlatif</h3>
      <p><em>le / la / les</em> + <em>plus / moins</em> + adjectif, puis <em>de</em> pour le groupe de comparaison.</p>
      <p class="ex">C’est la ville <strong>la plus</strong> visitée <strong>de</strong> France. C’est l’un des sites <strong>les plus</strong> célèbres <strong>du</strong> monde.</p>
      <h3>Les formes irrégulières</h3>
      <ul>
        <li><strong>bon</strong> → meilleur, le meilleur : <em>Ce restaurant est meilleur que l’autre.</em></li>
        <li><strong>bien</strong> → mieux, le mieux : <em>Elle chante mieux que moi.</em></li>
        <li><strong>mauvais</strong> → plus mauvais ou pire.</li>
      </ul>
      <p class="piege"><strong>Pièges.</strong> On ne dit jamais <em>plus bon</em> ni <em>plus bien</em>. <em>Meilleur</em> accompagne un nom (adjectif), <em>mieux</em> accompagne un verbe (adverbe).</p>`,
    voir: ["articles-partitifs"]
  },

  {
    id: "hypothese-si", cat: "grammaire", niveau: "B1",
    titre: "L’hypothèse avec si",
    resume: "Les trois grands schémas : potentiel, irréel du présent, irréel du passé.",
    corps: `
      <table class="fiche-table">
        <thead><tr><th scope="col">Après si</th><th scope="col">Dans la principale</th><th scope="col">Exemple</th></tr></thead>
        <tbody>
          <tr><td>présent</td><td>présent, futur ou impératif</td><td>S’il pleut demain, je resterai chez moi.</td></tr>
          <tr><td>imparfait</td><td>conditionnel présent</td><td>Si j’avais le temps, je lirais davantage.</td></tr>
          <tr><td>plus-que-parfait</td><td>conditionnel passé</td><td>Si j’avais su, je serais venue.</td></tr>
        </tbody>
      </table>
      <p>On peut mélanger les deux derniers schémas : <em>Si j’avais pris ce train</em> (passé), <em>je serais à Paris maintenant</em> (présent).</p>
      <p class="piege"><strong>Piège majeur.</strong> Jamais de conditionnel après le <em>si</em> d’hypothèse : <em>si j’aurais</em> est fautif. Exception : le <em>si</em> interrogatif (<em>Je me demande s’il viendrait</em>).</p>`,
    voir: ["conditionnel", "plus-que-parfait"]
  },

  {
    id: "subjonctif-emploi", cat: "grammaire", niveau: "B1",
    titre: "Quand employer le subjonctif",
    resume: "Volonté, sentiment, doute, nécessité : le subjonctif exprime un regard sur l’action.",
    corps: `
      <p>Le subjonctif s’emploie surtout après <em>que</em>, quand l’action est vue comme souhaitée, possible, redoutée ou jugée, plutôt que comme un fait certain.</p>
      <table class="fiche-table">
        <thead><tr><th scope="col">Subjonctif après</th><th scope="col">Exemples</th></tr></thead>
        <tbody>
          <tr><th scope="row">Volonté, ordre</th><td>vouloir que, souhaiter que, exiger que, demander que</td></tr>
          <tr><th scope="row">Nécessité</th><td>il faut que, il est nécessaire que, il est important que</td></tr>
          <tr><th scope="row">Sentiment</th><td>être content que, regretter que, avoir peur que, être surpris que</td></tr>
          <tr><th scope="row">Doute, possibilité</th><td>douter que, il est possible que, il se peut que</td></tr>
          <tr><th scope="row">Certaines conjonctions</th><td>bien que, pour que, afin que, avant que, à condition que, sans que, jusqu’à ce que</td></tr>
        </tbody>
      </table>
      <h3>L’indicatif après la certitude et l’opinion affirmée</h3>
      <p><em>Je pense que, je crois que, il est certain que, il est évident que, il me semble que</em> et <strong>espérer que</strong> sont suivis de l’indicatif : <em>J’espère qu’il viendra.</em></p>
      <p>À la forme négative ou interrogative, <em>penser</em> et <em>croire</em> prennent en général le subjonctif : <em>Je ne pense pas qu’il <strong>soit</strong> là.</em></p>
      <h3>Même sujet : l’infinitif</h3>
      <p>Si les deux verbes ont le même sujet, on utilise l’infinitif : <em>Je veux partir</em>, et non <em>je veux que je parte</em>.</p>
      <p class="piege"><strong>Piège.</strong> <em>Après que</em> est suivi de l’indicatif (<em>après qu’il est parti</em>), contrairement à <em>avant que</em>.</p>`,
    voir: ["subjonctif-formation", "connecteurs-logiques"]
  },

  {
    id: "discours-rapporte", cat: "grammaire", niveau: "B2",
    titre: "Le discours rapporté",
    resume: "Rapporter les paroles de quelqu’un : pronoms, temps et repères changent.",
    corps: `
      <p>Quand le verbe introducteur est au passé (<em>il a dit que, elle m’a demandé si</em>), les temps se décalent.</p>
      <table class="fiche-table">
        <thead><tr><th scope="col">Paroles</th><th scope="col">Discours rapporté</th></tr></thead>
        <tbody>
          <tr><td>présent : « Je suis fatiguée. »</td><td>imparfait : Elle a dit qu’elle <strong>était</strong> fatiguée.</td></tr>
          <tr><td>passé composé : « J’ai fini. »</td><td>plus-que-parfait : Il a dit qu’il <strong>avait fini</strong>.</td></tr>
          <tr><td>futur : « Je viendrai. »</td><td>conditionnel présent : Il a promis qu’il <strong>viendrait</strong>.</td></tr>
          <tr><td>impératif : « Pars ! »</td><td>de + infinitif : Il m’a dit <strong>de partir</strong>.</td></tr>
        </tbody>
      </table>
      <p>L’imparfait, le plus-que-parfait et le conditionnel ne changent pas.</p>
      <h3>Les questions</h3>
      <p>« Est-ce que tu viens ? » → Il m’a demandé <strong>si</strong> je venais. « Qu’est-ce que tu fais ? » → Il m’a demandé <strong>ce que</strong> je faisais. « Où vas-tu ? » → Il m’a demandé <strong>où</strong> j’allais.</p>
      <h3>Les repères de temps</h3>
      <p>aujourd’hui → ce jour-là ; hier → la veille ; demain → le lendemain ; la semaine prochaine → la semaine suivante ; maintenant → à ce moment-là.</p>`,
    voir: ["plus-que-parfait", "conditionnel"]
  },

  {
    id: "voix-passive", cat: "grammaire", niveau: "B2",
    titre: "La voix passive",
    resume: "Mettre en avant celui qui subit l’action plutôt que celui qui la fait.",
    corps: `
      <p>Formation : <strong>être</strong>, conjugué au temps du verbe actif, + participe passé accordé avec le sujet.</p>
      <p class="ex">Le Parlement <strong>a voté</strong> la loi. → La loi <strong>a été votée</strong> par le Parlement.</p>
      <ul>
        <li>Le complément d’agent est introduit par <strong>par</strong>, ou par <strong>de</strong> avec les verbes de sentiment et de description : <em>Elle est aimée de tous. La place est entourée d’arbres.</em></li>
        <li>On peut omettre l’agent s’il est inconnu ou évident : <em>Le musée a été rénové.</em></li>
        <li>Seuls les verbes qui ont un complément d’objet direct peuvent se mettre au passif.</li>
      </ul>
      <h3>Deux alternatives fréquentes</h3>
      <p>Avec <strong>on</strong> : <em>On a volé mon vélo.</em> Avec un verbe pronominal à sens passif : <em>Ce plat se mange froid. Ce mot ne s’emploie plus.</em></p>`,
    voir: ["accord-participe-passe"]
  },

  {
    id: "gerondif-participe", cat: "grammaire", niveau: "B2",
    titre: "Gérondif et participe présent",
    resume: "En marchant, ayant compris : deux formes en -ant à ne pas confondre.",
    corps: `
      <h3>Le gérondif : en + participe présent</h3>
      <p>Il exprime la simultanéité, la manière ou la condition, et a <strong>le même sujet</strong> que le verbe principal.</p>
      <p class="ex">Elle écoute de la musique <strong>en travaillant</strong>. <strong>En lisant</strong> davantage, tu progresseras.</p>
      <h3>Le participe présent</h3>
      <p>Plus fréquent à l’écrit, il remplace une relative ou exprime une cause. Il est invariable.</p>
      <p class="ex">Les étudiants <strong>ayant réussi</strong> l’examen recevront un courriel. <strong>Ne connaissant</strong> personne, elle est restée seule.</p>
      <h3>L’adjectif verbal</h3>
      <p>Certains adjectifs ont une orthographe différente du participe : <em>fatiguant / fatigant, convainquant / convaincant, précédant / précédent, négligeant / négligent</em>. L’adjectif s’accorde : <em>des journées fatigantes</em>.</p>
      <p class="piege"><strong>Piège.</strong> <em>En sortant, la pluie a commencé</em> est fautif : ce n’est pas la pluie qui sort. Dis : <em>Quand je suis sortie, la pluie a commencé.</em></p>`,
    voir: []
  },

  {
    id: "nominalisation", cat: "grammaire", niveau: "C1",
    titre: "La nominalisation",
    resume: "Transformer un verbe ou un adjectif en nom pour condenser l’écrit.",
    corps: `
      <p>Le style écrit, journalistique et universitaire, préfère souvent les noms aux verbes. La phrase devient plus dense et plus neutre.</p>
      <p class="ex">Les prix ont fortement augmenté. → <strong>La forte augmentation</strong> des prix.<br>Le gouvernement a décidé de réformer le système. → <strong>La décision</strong> du gouvernement de réformer le système.</p>
      <h3>Les principaux suffixes</h3>
      <table class="fiche-table">
        <tbody>
          <tr><th scope="row">-tion, -ation</th><td>augmenter → augmentation, réduire → réduction</td></tr>
          <tr><th scope="row">-ment</th><td>développer → développement, changer → changement</td></tr>
          <tr><th scope="row">-age</th><td>arroser → arrosage, nettoyer → nettoyage</td></tr>
          <tr><th scope="row">-ure</th><td>ouvrir → ouverture, fermer → fermeture</td></tr>
          <tr><th scope="row">-ité, -esse, -eur</th><td>rapide → rapidité, riche → richesse, long → longueur</td></tr>
          <tr><th scope="row">forme courte</th><td>refuser → refus, choisir → choix, arriver → arrivée</td></tr>
        </tbody>
      </table>
      <p>Quand le verbe devient nom, l’adverbe devient adjectif (<em>fortement → forte</em>), et le sujet devient un complément du nom (<em>le gouvernement → du gouvernement</em>).</p>
      <p class="piege"><strong>Conseil.</strong> N’abuse pas : trop de noms rendent le texte lourd. Alterne avec des verbes.</p>`,
    voir: ["formation-des-mots"]
  },

  /* ===================== CONJUGAISON ===================== */

  {
    id: "passe-compose-imparfait", cat: "conjugaison", niveau: "B1",
    titre: "Passé composé ou imparfait ?",
    resume: "Les événements d’un côté, le décor et les habitudes de l’autre.",
    corps: `
      <table class="fiche-table">
        <thead><tr><th scope="col">Passé composé</th><th scope="col">Imparfait</th></tr></thead>
        <tbody>
          <tr><td>une action ponctuelle, terminée</td><td>une description, un décor, un état</td></tr>
          <tr><td>une succession d’actions qui font avancer l’histoire</td><td>une habitude dans le passé</td></tr>
          <tr><td>une action qui interrompt</td><td>une action en cours, interrompue</td></tr>
          <tr><td>une durée délimitée : <em>j’ai habité trois ans à Lyon</em></td><td>une durée sans limite précise</td></tr>
        </tbody>
      </table>
      <p class="ex">Il <strong>pleuvait</strong> et la gare <strong>était</strong> pleine. Soudain, une dame <strong>m’a parlé</strong>.<br>Quand j’<strong>étais</strong> enfant, j’<strong>allais</strong> chez ma grand-mère tous les étés.<br>Je <strong>lisais</strong> quand le téléphone <strong>a sonné</strong>.</p>
      <h3>Les mots qui aident</h3>
      <p>Plutôt passé composé : <em>soudain, tout à coup, un jour, ce jour-là, à ce moment-là, ensuite</em>. Plutôt imparfait : <em>d’habitude, souvent, autrefois, à cette époque, tous les jours, chaque été</em>.</p>
      <h3>Rappel de formation</h3>
      <p>Imparfait : radical de <em>nous</em> au présent + <em>-ais, -ais, -ait, -ions, -iez, -aient</em> (nous finissons → je finissais). Seule exception : <em>être → j’étais</em>.</p>`,
    voir: ["plus-que-parfait", "accord-participe-passe"]
  },

  {
    id: "plus-que-parfait", cat: "conjugaison", niveau: "B1",
    titre: "Le plus-que-parfait",
    resume: "Le passé du passé : une action antérieure à une autre action passée.",
    corps: `
      <p>Formation : <strong>avoir</strong> ou <strong>être</strong> à l’imparfait + participe passé.</p>
      <p class="ex">j’avais fini, tu avais pris, elle était partie, nous nous étions levés</p>
      <h3>Emplois</h3>
      <ul>
        <li>Action antérieure à une autre, dans un récit au passé : <em>Quand je suis arrivée, le cours <strong>avait</strong> déjà <strong>commencé</strong>.</em></li>
        <li>Hypothèse irréelle dans le passé : <em>Si j’<strong>avais su</strong>, je serais venue.</em></li>
        <li>Regret : <em>Ah, si j’<strong>avais travaillé</strong> davantage !</em></li>
        <li>Discours rapporté : <em>Il a dit qu’il <strong>avait réussi</strong>.</em></li>
      </ul>`,
    voir: ["passe-compose-imparfait", "hypothese-si", "discours-rapporte"]
  },

  {
    id: "conditionnel", cat: "conjugaison", niveau: "B2",
    titre: "Le conditionnel présent et passé",
    resume: "Politesse, conseil, hypothèse, information non confirmée.",
    corps: `
      <h3>Formation</h3>
      <p>Conditionnel présent : radical du futur + terminaisons de l’imparfait : <em>je parlerais, tu irais, il serait, nous aurions, vous pourriez, elles voudraient</em>.</p>
      <p>Conditionnel passé : <em>avoir</em> ou <em>être</em> au conditionnel + participe passé : <em>j’aurais dû, elle serait venue</em>.</p>
      <h3>Emplois</h3>
      <ul>
        <li>Politesse : <em>Pourriez-vous m’aider ? Je voudrais un renseignement.</em></li>
        <li>Souhait, conseil : <em>J’aimerais voyager. Tu devrais te reposer.</em></li>
        <li>Hypothèse : <em>Si j’avais le temps, je lirais.</em></li>
        <li>Information non confirmée, surtout dans la presse : <em>Le ministre <strong>démissionnerait</strong> demain.</em></li>
        <li>Regret, reproche (passé) : <em>J’aurais dû l’appeler. Tu aurais pu prévenir !</em></li>
        <li>Futur dans le passé : <em>Il m’a dit qu’il viendrait.</em></li>
      </ul>
      <p class="piege"><strong>Piège.</strong> <em>Je voudrais</em> (conditionnel) et <em>je voudrai</em> (futur) se prononcent presque pareil. Pour vérifier, remplace par <em>nous</em> : <em>nous voudrions</em> (conditionnel) ou <em>nous voudrons</em> (futur).</p>`,
    voir: ["hypothese-si"]
  },

  {
    id: "subjonctif-formation", cat: "conjugaison", niveau: "B1",
    titre: "Former le subjonctif présent",
    resume: "Une règle simple et une dizaine de verbes irréguliers à connaître par cœur.",
    corps: `
      <h3>La règle</h3>
      <p>Radical de la 3<sup>e</sup> personne du pluriel au présent + <strong>-e, -es, -e, -ions, -iez, -ent</strong>.</p>
      <p class="ex">ils finissent → que je finisse, que tu finisses, qu’il finisse, qu’ils finissent</p>
      <p>Pour <em>nous</em> et <em>vous</em>, la forme est celle de l’imparfait : <em>que nous prenions, que vous veniez</em>.</p>
      <h3>Les irréguliers essentiels</h3>
      <table class="fiche-table">
        <tbody>
          <tr><th scope="row">être</th><td>que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient</td></tr>
          <tr><th scope="row">avoir</th><td>que j’aie, tu aies, il ait, nous ayons, vous ayez, ils aient</td></tr>
          <tr><th scope="row">aller</th><td>que j’aille, nous allions, ils aillent</td></tr>
          <tr><th scope="row">faire</th><td>que je fasse, nous fassions</td></tr>
          <tr><th scope="row">pouvoir</th><td>que je puisse, nous puissions</td></tr>
          <tr><th scope="row">savoir</th><td>que je sache, nous sachions</td></tr>
          <tr><th scope="row">vouloir</th><td>que je veuille, nous voulions, ils veuillent</td></tr>
        </tbody>
      </table>
      <p class="piege"><strong>Piège.</strong> <em>Que j’aie</em> et <em>qu’il ait</em> s’écrivent différemment de l’indicatif <em>j’ai</em>, <em>il a</em>.</p>`,
    voir: ["subjonctif-emploi"]
  },

  {
    id: "passe-simple", cat: "conjugaison", niveau: "B2",
    titre: "Reconnaître le passé simple",
    resume: "Le temps du récit littéraire et historique, à reconnaître plutôt qu’à employer.",
    corps: `
      <p>Le passé simple remplace le passé composé dans les romans, les contes et les textes historiques. On ne l’utilise pas à l’oral. L’essentiel est de le <strong>reconnaître</strong>, surtout à la 3<sup>e</sup> personne.</p>
      <table class="fiche-table">
        <thead><tr><th scope="col">Type</th><th scope="col">Terminaisons</th><th scope="col">Exemples</th></tr></thead>
        <tbody>
          <tr><td>verbes en -er</td><td>-ai, -as, -a, -âmes, -âtes, -èrent</td><td>il parla, ils parlèrent</td></tr>
          <tr><td>verbes en -ir, beaucoup en -re</td><td>-is, -is, -it, -îmes, -îtes, -irent</td><td>elle finit, ils prirent</td></tr>
          <tr><td>beaucoup en -oir, et d’autres</td><td>-us, -us, -ut, -ûmes, -ûtes, -urent</td><td>il voulut, ils purent</td></tr>
        </tbody>
      </table>
      <p>Les plus fréquents : <em>il fut</em> (être), <em>il eut</em> (avoir), <em>il fit</em> (faire), <em>il vint</em> (venir), <em>il dit</em> (dire), <em>il vit</em> (voir), <em>il mit</em> (mettre).</p>
      <p class="piege"><strong>Attention.</strong> <em>Il finit</em> peut être un présent ou un passé simple : le contexte du récit tranche.</p>`,
    voir: ["passe-compose-imparfait"]
  },

  /* ===================== ORTHOGRAPHE ===================== */

  {
    id: "accord-participe-passe", cat: "orthographe", niveau: "B1",
    titre: "L’accord du participe passé",
    resume: "Avec être, avec avoir : deux règles différentes.",
    corps: `
      <h3>Avec être : accord avec le sujet</h3>
      <p class="ex">Elles sont <strong>parties</strong>. Ma sœur est <strong>arrivée</strong> hier.</p>
      <h3>Avec avoir : pas d’accord avec le sujet</h3>
      <p>Le participe s’accorde avec le <strong>complément d’objet direct</strong>, seulement s’il est placé <strong>avant</strong> le verbe.</p>
      <p class="ex">J’ai écrit des lettres. (COD après : pas d’accord)<br>Les lettres <strong>que</strong> j’ai <strong>écrites</strong>. (que = les lettres, placé avant)<br>Je <strong>les</strong> ai <strong>lues</strong>. Quelle robe as-tu <strong>choisie</strong> ?</p>
      <h3>La méthode</h3>
      <p>Pose la question « quoi ? » après le verbe avec avoir. Si la réponse se trouve avant le verbe, accorde.</p>
      <p class="piege"><strong>Pièges.</strong> Pas d’accord avec <em>en</em> : <em>Des pommes, j’en ai mangé.</em> Pas d’accord avec un complément indirect : <em>Elle nous a parlé.</em></p>`,
    voir: ["accord-participe-pronominaux", "voix-passive"]
  },

  {
    id: "accord-participe-pronominaux", cat: "orthographe", niveau: "C1",
    titre: "Le participe passé des verbes pronominaux",
    resume: "Elle s’est lavée, mais elle s’est lavé les mains : le cas le plus délicat.",
    corps: `
      <p>Les verbes pronominaux se conjuguent avec <em>être</em>, mais leur participe suit en réalité la logique d’<em>avoir</em> : on regarde ce que représente le pronom <em>se</em>.</p>
      <ul>
        <li>Le pronom est <strong>COD</strong> (laver qui ? elle-même) : accord. <em>Elle s’est <strong>lavée</strong>.</em></li>
        <li>Le COD est placé <strong>après</strong> le verbe : pas d’accord. <em>Elle s’est <strong>lavé</strong> les mains.</em></li>
        <li>Le pronom est <strong>COI</strong> (parler <em>à</em> quelqu’un) : pas d’accord. <em>Elles se sont <strong>parlé</strong>.</em> De même avec <em>se téléphoner, se sourire, se mentir, se ressembler, se plaire, se succéder, se nuire</em>.</li>
        <li>Verbes qui n’existent qu’à la forme pronominale (<em>se souvenir, s’évanouir, s’enfuir, se moquer</em>) : accord avec le sujet. <em>Ils se sont <strong>souvenus</strong>.</em></li>
      </ul>`,
    voir: ["accord-participe-passe"]
  },

  {
    id: "homophones", cat: "orthographe", niveau: "B1",
    titre: "Les homophones grammaticaux",
    resume: "a ou à, et ou est, ou ou où, ce ou se… avec un test pour chacun.",
    corps: `
      <table class="fiche-table">
        <thead><tr><th scope="col">Mots</th><th scope="col">Le test</th><th scope="col">Exemple</th></tr></thead>
        <tbody>
          <tr><th scope="row">a / à</th><td><em>a</em> se remplace par <em>avait</em></td><td>Elle a (avait) un livre à lire.</td></tr>
          <tr><th scope="row">et / est</th><td><em>est</em> se remplace par <em>était</em></td><td>Il est (était) grand et fort.</td></tr>
          <tr><th scope="row">ou / où</th><td><em>ou</em> se remplace par <em>ou bien</em></td><td>Où vas-tu ? À Lyon ou (ou bien) à Nice ?</td></tr>
          <tr><th scope="row">son / sont</th><td><em>sont</em> se remplace par <em>étaient</em></td><td>Ils sont (étaient) avec son frère.</td></tr>
          <tr><th scope="row">on / ont</th><td><em>ont</em> se remplace par <em>avaient</em></td><td>On sait qu’ils ont (avaient) raison.</td></tr>
          <tr><th scope="row">ce / se</th><td><em>se</em> précède un verbe pronominal</td><td>Ce garçon se lève tôt.</td></tr>
          <tr><th scope="row">ces / ses</th><td><em>ses</em> = les siens, les siennes</td><td>Ces livres sont à lui : ce sont ses livres.</td></tr>
          <tr><th scope="row">c’est / s’est</th><td><em>s’est</em> est suivi d’un participe passé</td><td>C’est Marie qui s’est trompée.</td></tr>
          <tr><th scope="row">peu / peut</th><td><em>peut</em> se remplace par <em>pouvait</em></td><td>Il peut (pouvait) manger un peu.</td></tr>
        </tbody>
      </table>`,
    voir: ["accents"]
  },

  {
    id: "tout", cat: "orthographe", niveau: "B2",
    titre: "L’accord de tout",
    resume: "Déterminant, pronom ou adverbe : tout ne s’accorde pas toujours.",
    corps: `
      <ul>
        <li><strong>Déterminant</strong>, devant un nom : il s’accorde. <em>tout le jour, toute la journée, tous les jours, toutes les semaines</em>.</li>
        <li><strong>Pronom</strong> : <em>Ils sont tous venus.</em> Au masculin pluriel, on prononce le <em>s</em> final.</li>
        <li><strong>Adverbe</strong>, au sens de « tout à fait, très » : invariable. <em>Ils sont tout contents. Elles sont tout étonnées.</em></li>
      </ul>
      <p class="piege"><strong>Exception.</strong> Devant un adjectif féminin qui commence par une consonne ou un h aspiré, l’adverbe s’accorde pour la prononciation : <em>Elle est toute petite. Elles sont toutes honteuses.</em></p>`,
    voir: []
  },

  {
    id: "accents", cat: "orthographe", niveau: "B1",
    titre: "Les accents",
    resume: "Aigu, grave, circonflexe, tréma : ce qu’ils changent.",
    corps: `
      <ul>
        <li><strong>é</strong> (aigu) : son fermé. <em>été, café, étudiant</em>.</li>
        <li><strong>è</strong> (grave) : son ouvert. <em>père, mère, très</em>. Sur <em>à, où, là</em>, il distingue des mots : <em>a / à, ou / où, la / là</em>.</li>
        <li><strong>ê, â, î, ô, û</strong> (circonflexe) : marque souvent un <em>s</em> disparu. <em>forêt</em> (forestier), <em>hôpital</em> (hospitalier), <em>fête</em> (festival).</li>
        <li><strong>ë, ï</strong> (tréma) : la voyelle se prononce séparément. <em>Noël, naïf, maïs</em>.</li>
      </ul>
      <h3>Bon à savoir</h3>
      <p>Les majuscules prennent aussi l’accent : <em>l’État, À bientôt</em>. Depuis les rectifications de 1990, l’accent circonflexe sur <em>i</em> et <em>u</em> est facultatif (<em>connaitre</em> ou <em>connaître</em>), sauf quand il distingue deux mots : <em>dû, sûr, mûr</em>.</p>`,
    voir: ["homophones"]
  },

  /* ===================== VOCABULAIRE ===================== */

  {
    id: "donner-son-avis", cat: "vocabulaire", niveau: "B1",
    titre: "Donner son avis et nuancer",
    resume: "Les expressions pour exprimer, accepter ou contester une opinion.",
    corps: `
      <h3>Exprimer une opinion</h3>
      <p>À mon avis, selon moi, d’après moi, je trouve que, il me semble que, je suis convaincue que, j’ai l’impression que.</p>
      <h3>Être d’accord, ou pas</h3>
      <p>Je suis d’accord avec toi. Tout à fait. Je partage ton avis. — Je ne suis pas d’accord. Je ne partage pas cet avis. Je ne suis pas du tout d’accord.</p>
      <h3>Nuancer</h3>
      <p>Dans une certaine mesure. Certes…, mais… Il est vrai que…, cependant… Ce n’est pas tout à fait exact. Tout dépend de…</p>
      <p class="piege"><strong>Pièges.</strong> On dit <em>je suis d’accord</em>, jamais <em>j’ai d’accord</em>. On dit <em>à mon avis</em> ou <em>selon moi</em>, mais pas <em>selon mon avis</em>.</p>`,
    voir: ["subjonctif-emploi", "connecteurs-logiques"]
  },

  {
    id: "registres-de-langue", cat: "vocabulaire", niveau: "B2",
    titre: "Les registres de langue",
    resume: "Familier, courant, soutenu : adapter ses mots à la situation.",
    corps: `
      <table class="fiche-table">
        <thead><tr><th scope="col">Familier</th><th scope="col">Courant</th><th scope="col">Soutenu</th></tr></thead>
        <tbody>
          <tr><td>un bouquin</td><td>un livre</td><td>un ouvrage</td></tr>
          <tr><td>le boulot, bosser</td><td>le travail, travailler</td><td>l’emploi, œuvrer</td></tr>
          <tr><td>une bagnole</td><td>une voiture</td><td>une automobile</td></tr>
          <tr><td>se planter</td><td>se tromper</td><td>commettre une erreur</td></tr>
          <tr><td>T’inquiète !</td><td>Ne t’inquiète pas.</td><td>Ne vous inquiétez pas.</td></tr>
        </tbody>
      </table>
      <h3>Ce qui change aussi</h3>
      <ul>
        <li>La négation : à l’oral familier, le <em>ne</em> disparaît (<em>je sais pas</em>). À l’écrit, il est obligatoire.</li>
        <li>Les questions : <em>Tu viens ?</em> (familier), <em>Est-ce que tu viens ?</em> (courant), <em>Viens-tu ?</em> (soutenu).</li>
        <li><em>On</em> remplace souvent <em>nous</em> à l’oral. À l’écrit formel, préfère <em>nous</em>.</li>
      </ul>`,
    voir: ["donner-son-avis"]
  },

  {
    id: "formation-des-mots", cat: "vocabulaire", niveau: "B2",
    titre: "Préfixes, suffixes et adverbes en -ment",
    resume: "Comprendre un mot inconnu en le décomposant.",
    corps: `
      <h3>Préfixes courants</h3>
      <p><strong>in-, im-, il-, ir-</strong> (contraire) : inutile, impossible, illégal, irrégulier. <strong>dé-, dés-</strong> : défaire, désordre. <strong>re-, ré-</strong> (répétition) : refaire, réécrire. <strong>pré-</strong> (avant) : prévoir. <strong>mal-</strong> : malheureux, maladroit.</p>
      <h3>Suffixes courants</h3>
      <p><strong>-able, -ible</strong> (qu’on peut) : lavable, lisible. <strong>-eur, -euse</strong> (qui fait) : chercheur, vendeuse. <strong>-ité</strong> (qualité) : facilité. <strong>-tion, -ment, -age</strong> (action) : création, changement, lavage.</p>
      <h3>Les adverbes en -ment</h3>
      <ul>
        <li>Adjectif au féminin + <em>-ment</em> : lente → lentement, heureuse → heureusement.</li>
        <li>Adjectif terminé par une voyelle : on part du masculin. vrai → vraiment, poli → poliment.</li>
        <li><em>-ant</em> → <strong>-amment</strong> (courant → couramment), <em>-ent</em> → <strong>-emment</strong> (évident → évidemment). Les deux se prononcent [amɑ̃].</li>
      </ul>
      <p class="piege"><strong>Exceptions.</strong> gentil → gentiment, bref → brièvement, précis → précisément, énorme → énormément.</p>`,
    voir: ["nominalisation"]
  },

  {
    id: "expressions-idiomatiques", cat: "vocabulaire", niveau: "B2",
    titre: "Expressions idiomatiques courantes",
    resume: "Les images que les Français utilisent tous les jours, avec leur registre.",
    corps: `
      <table class="fiche-table">
        <thead><tr><th scope="col">Expression</th><th scope="col">Sens</th><th scope="col">Registre</th></tr></thead>
        <tbody>
          <tr><td>coûter les yeux de la tête</td><td>coûter très cher</td><td>courant</td></tr>
          <tr><td>poser un lapin à quelqu’un</td><td>ne pas venir à un rendez-vous</td><td>courant</td></tr>
          <tr><td>mettre les pieds dans le plat</td><td>aborder maladroitement un sujet délicat</td><td>courant</td></tr>
          <tr><td>avoir le cafard</td><td>être triste, déprimé</td><td>courant</td></tr>
          <tr><td>tomber dans les pommes</td><td>s’évanouir</td><td>familier</td></tr>
          <tr><td>avoir un poil dans la main</td><td>être paresseux</td><td>familier</td></tr>
          <tr><td>en avoir marre</td><td>en avoir assez</td><td>familier</td></tr>
          <tr><td>avoir la flemme</td><td>ne pas avoir envie de faire un effort</td><td>familier</td></tr>
          <tr><td>ce n’est pas la mer à boire</td><td>ce n’est pas si difficile</td><td>courant</td></tr>
          <tr><td>avoir du pain sur la planche</td><td>avoir beaucoup de travail</td><td>courant</td></tr>
        </tbody>
      </table>
      <p class="piege"><strong>Conseil.</strong> Utilise les expressions familières à l’oral, avec des proches. Évite-les dans un courriel formel ou une copie.</p>`,
    voir: ["registres-de-langue"]
  },

  /* ===================== PONCTUATION ===================== */

  {
    id: "espaces-typographiques", cat: "ponctuation", niveau: "B1",
    titre: "Les espaces autour de la ponctuation",
    resume: "En français, on met une espace avant : ; ! ? et à l’intérieur des guillemets.",
    corps: `
      <table class="fiche-table">
        <thead><tr><th scope="col">Signe</th><th scope="col">Espace avant</th><th scope="col">Espace après</th></tr></thead>
        <tbody>
          <tr><td>. et ,</td><td>non</td><td>oui</td></tr>
          <tr><td>: ; ! ?</td><td><strong>oui</strong></td><td>oui</td></tr>
          <tr><td>« (ouvrant)</td><td>oui</td><td>oui</td></tr>
          <tr><td>» (fermant)</td><td>oui</td><td>oui</td></tr>
        </tbody>
      </table>
      <p class="ex">Il m’a dit : « Tu viens ? » Je lui ai répondu : oui !</p>
      <p>Les guillemets français sont <strong>« »</strong>. Les guillemets anglais (" ") sont réservés à une citation à l’intérieur d’une citation.</p>
      <p>Sur ordinateur, l’idéal est l’espace insécable, qui empêche le signe de se retrouver seul en début de ligne.</p>`,
    voir: ["majuscules", "virgule"]
  },

  {
    id: "majuscules", cat: "ponctuation", niveau: "B1",
    titre: "Les majuscules",
    resume: "Langues, nationalités, jours, mois : moins de majuscules qu’en anglais.",
    corps: `
      <ul>
        <li><strong>Langues</strong> : minuscule. <em>J’apprends le français.</em></li>
        <li><strong>Nationalités</strong> : minuscule pour l’adjectif, majuscule pour le nom de personne. <em>un film français</em>, mais <em>les Français</em>.</li>
        <li><strong>Jours et mois</strong> : minuscule. <em>lundi 3 mars</em>.</li>
        <li><strong>Titres d’œuvres</strong> : majuscule au premier mot seulement, en général. <em>À la recherche du temps perdu</em>.</li>
        <li><strong>Institutions</strong> : majuscule quand le mot désigne une institution unique. <em>l’État, le Sénat</em>.</li>
      </ul>`,
    voir: ["espaces-typographiques", "accents"]
  },

  {
    id: "virgule", cat: "ponctuation", niveau: "B2",
    titre: "Bien placer la virgule",
    resume: "Où la mettre, où l’éviter, et comment elle change le sens.",
    corps: `
      <h3>Virgule obligatoire ou recommandée</h3>
      <ul>
        <li>Dans une énumération : <em>des pommes, des poires et des prunes</em> (pas de virgule avant le dernier <em>et</em>).</li>
        <li>Après un complément placé en tête de phrase : <em>Depuis 2018, la loi interdit…</em></li>
        <li>Avant <em>mais</em> et <em>car</em> : <em>Il est venu, mais il est reparti.</em></li>
        <li>Autour d’une incise : <em>Ce livre, je crois, est épuisé.</em></li>
      </ul>
      <h3>Virgule interdite</h3>
      <p>Jamais entre le sujet et son verbe : <em>Les étudiants de première année, doivent…</em> est fautif.</p>
      <h3>Quand la virgule change le sens</h3>
      <p class="ex"><em>Les étudiants qui ont réussi partiront en stage.</em> (seulement ceux qui ont réussi)<br><em>Les étudiants, qui ont réussi, partiront en stage.</em> (tous ont réussi, et tous partiront)</p>`,
    voir: ["connecteurs-logiques", "pronoms-relatifs"]
  }
];
