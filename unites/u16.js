/* Unité 16 : Écologie et mode de vie (B2)
   État : contenu d’origine, à enrichir selon CHARTE.md.
   Les ids a0, a1… sont ceux de la progression déjà enregistrée : ne pas les changer. */
ajouterUnite({
  id: 16,
  niveau: "b2",
  theme: "Sciences, innovation et environnement",
  titre: "Écologie et mode de vie",
  objectif: "Comprendre et discuter les enjeux environnementaux du quotidien.",
  enrichie: false,
  competences: {
    lecture: {
      documents: {
        d1: {
          titre: "La sobriété, une contrainte ou une liberté ?",
          format: "long",
          texte: [
            "Pendant longtemps, le mot « sobriété » évoquait surtout la modération face à l’alcool. Depuis quelques années, il a pris un nouveau sens : consommer moins d’énergie et de ressources, non par obligation, mais par choix. Baisser le chauffage d’un degré, prendre le train plutôt que l’avion, réparer au lieu de racheter : autant de gestes qui, mis bout à bout, pourraient réduire notablement notre empreinte carbone.",
            "Pour ses défenseurs, la sobriété n’est pas un retour en arrière. Elle permettrait au contraire de retrouver du temps et de la qualité de vie. Manger local et de saison, c’est aussi redécouvrir le goût des produits ; se déplacer à vélo, c’est faire du sport sans y penser. « Il ne s’agit pas de vivre moins bien, mais de vivre mieux avec moins », résume une sociologue.",
            "Ses détracteurs, eux, soulignent deux limites. D’une part, tout le monde ne part pas du même point : demander à une famille qui a du mal à payer ses factures de « consommer moins » peut sembler injuste. D’autre part, les choix individuels ne suffiront pas si les entreprises et les États ne changent pas eux aussi leurs pratiques.",
            "Entre culpabilité et indifférence, il existe sans doute une voie plus apaisée : faire ce qui est possible à son échelle, tout en exigeant que les plus gros pollueurs fassent leur part. Car si chaque geste compte, tous les gestes ne comptent pas autant."
          ]
        }
      },
      exercices: [
        {
          id: "a0",
          type: "qcm",
          titre: "Lire",
          sousTitre: "La sobriété, une contrainte ou une liberté ?",
          duree: "45 min",
          doc: "d1",
          consigne: "Lis le texte une première fois sans dictionnaire. Puis réponds aux questions en revenant au texte.",
          questions: [
            {
              q: "Quel est le nouveau sens du mot « sobriété » ?",
              options: [
                "Ne pas boire d’alcool",
                "Consommer moins d’énergie et de ressources par choix",
                "Vivre à la campagne"
              ],
              answer: 1,
              explication: "Premier paragraphe."
            },
            {
              q: "Pour ses défenseurs, la sobriété permet…",
              options: ["de voyager davantage", "de gagner plus d’argent", "de vivre mieux avec moins"],
              answer: 2,
              explication: "Citation de la sociologue."
            },
            {
              q: "Quelles sont les deux limites citées par ses détracteurs ?",
              options: [
                "L’injustice sociale et l’insuffisance des choix individuels",
                "Le coût et le manque de temps",
                "Le manque d’information et la météo"
              ],
              answer: 0,
              explication: "« D’une part… d’autre part… »"
            },
            {
              q: "Que signifie la dernière phrase ?",
              options: [
                "Aucun geste n’est utile.",
                "Les gestes n’ont pas tous le même impact.",
                "Seuls les gestes individuels comptent."
              ],
              answer: 1,
              explication: "« Tous les gestes ne comptent pas autant » : certains ont beaucoup plus d’effet."
            },
            {
              q: "Quelle est la position de l’auteur ?",
              options: [
                "Il défend la culpabilité.",
                "Il rejette totalement la sobriété.",
                "Il propose une position nuancée entre deux extrêmes."
              ],
              answer: 2,
              explication: "Il cherche « une voie plus apaisée »."
            },
            {
              q: "« Mis bout à bout » signifie…",
              options: ["additionnés les uns aux autres", "coupés en morceaux", "oubliés"],
              answer: 0,
              explication: "Ensemble, les petits gestes forment un effet important."
            }
          ]
        }
      ]
    },
    ecoute: {
      documents: {
        e1: {
          titre: "Débat à la radio : faut-il renoncer à l’avion ?",
          genre: "Débat radio",
          transcription: "Je ne dis pas qu’il faut interdire l’avion, je dis qu’il faut arrêter de le prendre pour un week-end à Barcelone quand le train met six heures. Un aller-retour Paris-New York, c’est environ une tonne de CO2 par passager, soit à peu près la moitié de ce que chacun devrait émettre en un an pour respecter les objectifs climatiques. Je comprends l’argument, mais vous oubliez une chose : pour beaucoup de gens, l’avion est le seul moyen de voir leur famille. Une étudiante chinoise à Lyon ne va pas rentrer chez elle en train ! Bien sûr, et personne ne lui demande de le faire. Le problème, ce sont les vols courts et répétés, pris surtout par une minorité de voyageurs très fréquents. Alors taxons ces voyageurs-là, plutôt que de culpabiliser tout le monde. Là-dessus, nous sommes d’accord. Et investissons dans les trains de nuit, qui sont une vraie alternative en Europe."
        }
      },
      exercices: [
        {
          id: "a1",
          type: "qcm",
          titre: "Écouter",
          sousTitre: "Débat à la radio : faut-il renoncer à l’avion ?",
          duree: "35 min",
          doc: "e1",
          consigne: "Deux invités débattent à la radio. Lis les questions, puis écoute.",
          questions: [
            {
              q: "Que propose le premier invité ?",
              options: [
                "Interdire tous les vols",
                "Éviter l’avion quand le train est une alternative raisonnable",
                "Prendre l’avion plus souvent"
              ],
              answer: 1,
              explication: "Il vise les trajets courts possibles en train."
            },
            {
              q: "Combien émet environ un aller-retour Paris-New York par passager ?",
              options: ["Dix tonnes de CO2", "Dix kilos de CO2", "Une tonne de CO2"],
              answer: 2,
              explication: "« Environ une tonne de CO2 par passager. »"
            },
            {
              q: "Quel exemple donne le second invité ?",
              options: [
                "Une étudiante chinoise qui veut voir sa famille",
                "Un homme d’affaires",
                "Un touriste à Barcelone"
              ],
              answer: 0,
              explication: "L’avion est parfois indispensable."
            },
            {
              q: "Sur quoi les deux invités se mettent-ils d’accord ?",
              options: [
                "Supprimer les vols internationaux",
                "Taxer les voyageurs très fréquents et développer les trains de nuit",
                "Ne rien changer"
              ],
              answer: 1,
              explication: "« Là-dessus, nous sommes d’accord. »"
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
          sousTitre: "L’écologie au quotidien",
          duree: "20 min",
          consigne: "Associe chaque expression à sa définition.",
          items: [
            {
              terme: "l’empreinte carbone",
              definition: "la quantité de gaz à effet de serre produite par une activité ou une personne"
            },
            {
              terme: "un circuit court",
              definition: "une vente directe du producteur au consommateur, avec peu d’intermédiaires"
            },
            { terme: "le gaspillage", definition: "le fait de jeter ou d’utiliser sans nécessité" },
            { terme: "durable", definition: "qui peut se maintenir longtemps sans épuiser les ressources" },
            { terme: "la sobriété", definition: "le fait de consommer moins, avec modération" },
            { terme: "culpabiliser", definition: "faire sentir à quelqu’un qu’il est en faute" },
            {
              terme: "le réchauffement climatique",
              definition: "l’augmentation de la température moyenne de la Terre"
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
          sousTitre: "Exprimer la nécessité et la concession",
          duree: "45 min",
          regles: ["subjonctif-emploi", "subjonctif-formation"],
          fiche: "<p>Le <strong>subjonctif</strong> suit les expressions de nécessité (<em>il faut que, il est indispensable que</em>), de volonté (<em>je veux que, je souhaite que</em>) et de concession (<em>bien que, quoique</em>). Avec <em>même si</em>, on garde l’indicatif.</p><p class=\"ex\">Il faut que chacun <strong>fasse</strong> sa part. Bien que ce <strong>soit</strong> difficile, j’essaie. Même si c’<strong>est</strong> difficile, j’essaie.</p>",
          consigne: "Choisis la forme correcte.",
          phrases: [
            {
              avant: "Il faut que les entreprises",
              options: ["prennent", "prendront"],
              answer: 0,
              apres: "leurs responsabilités.",
              explication: "Il faut que + subjonctif."
            },
            {
              avant: "Bien que le train",
              options: ["est", "soit"],
              answer: 1,
              apres: "plus lent, je le préfère.",
              explication: "Bien que + subjonctif."
            },
            {
              avant: "Même si le train",
              options: ["est", "soit"],
              answer: 0,
              apres: "plus cher, je le prends.",
              explication: "Même si + indicatif."
            },
            {
              avant: "Je souhaite que mes enfants",
              options: ["peuvent", "puissent"],
              answer: 1,
              apres: "respirer un air pur.",
              explication: "Souhait : subjonctif. Pouvoir → que je puisse."
            },
            {
              avant: "Il est indispensable que nous",
              options: ["réduisions", "réduisons"],
              answer: 0,
              apres: "nos déchets.",
              explication: "Subjonctif : nous réduisions (comme l’imparfait)."
            },
            {
              avant: "Je pense que chacun",
              options: ["puisse", "peut"],
              answer: 1,
              apres: "agir à son niveau.",
              explication: "« Je pense que » affirmatif : indicatif."
            },
            {
              avant: "Quoiqu’il",
              options: ["fasse", "fait"],
              answer: 0,
              apres: "beaucoup d’efforts, il prend encore l’avion chaque mois.",
              explication: "Quoique + subjonctif (à ne pas confondre avec « quoi que »)."
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
          sousTitre: "Un essai argumenté",
          duree: "1 h 15",
          regles: ["subjonctif-emploi", "connecteurs-logiques", "donner-son-avis"],
          consigne: "Sujet : « Les gestes individuels peuvent-ils vraiment sauver la planète ? » Rédige un texte argumenté en trois parties : introduction, développement (au moins deux arguments et une concession), conclusion.",
          min: 200,
          max: 260,
          checklist: [
            "Mon introduction présente le sujet et la question",
            "J’ai au moins deux arguments, chacun avec un exemple",
            "J’ai intégré une concession (certes…, mais ; bien que…)",
            "J’ai utilisé au moins trois subjonctifs",
            "Ma conclusion répond clairement à la question"
          ],
          modele: "Éteindre la lumière, trier ses déchets, prendre son vélo : on nous répète que chaque geste compte. Mais ces efforts individuels suffisent-ils face à l’ampleur du réchauffement climatique ?\n\nCertes, les gestes du quotidien ont une utilité réelle. Si des millions de personnes réduisent leur consommation de viande ou renoncent aux vols courts, l’effet devient mesurable. De plus, ces changements modifient peu à peu les normes sociales : quand mes amis voient que je voyage en train, certains se laissent tenter.\n\nPourtant, il serait naïf de penser que cela suffira. Une grande partie des émissions dépend de choix qui ne sont pas individuels : la production d’électricité, l’organisation des transports, l’industrie. Il faut donc que les États investissent et que les entreprises changent leurs méthodes de production. Bien que chaque citoyen puisse agir, il ne peut pas construire seul une ligne de chemin de fer.\n\nEn conclusion, les gestes individuels sont nécessaires, mais pas suffisants. Ils prennent tout leur sens lorsqu’ils s’accompagnent d’un engagement collectif, par exemple en votant, en s’informant et en soutenant les projets locaux."
        }
      ]
    },
    oral: {
      exercices: [
        {
          id: "a5",
          type: "oral",
          titre: "Parler",
          sousTitre: "Prendre position dans un débat",
          duree: "30 min",
          consigne: "Un ami te dit : « De toute façon, ce que je fais ne changera rien. » Réponds-lui à voix haute : montre que tu comprends son point de vue, puis défends le tien avec deux arguments.",
          preparation: [
            "Je comprends ce que tu veux dire, mais…",
            "Il est vrai que…",
            "Ce n’est pas parce que… que…",
            "Il faut que…",
            "Au fond, ce qui compte, c’est…"
          ],
          dureeCible: "1 min 30 à 2 minutes",
          modele: "Je comprends ce que tu veux dire : face aux grandes entreprises et aux gouvernements, on se sent tout petit. Il est vrai qu’une personne seule ne va pas arrêter le réchauffement climatique. Mais ce n’est pas parce que notre action est limitée qu’elle est inutile. D’abord, nos habitudes s’additionnent : si toute notre résidence étudiante triait vraiment ses déchets, ce serait des tonnes chaque année. Ensuite, nos choix influencent les autres, et même les entreprises, qui suivent la demande. Il faut aussi que nous fassions entendre notre voix, en votant, en signant des pétitions. Au fond, ce qui compte, c’est de ne pas rester spectateur.",
          checklist: [
            "J’ai reconnu le point de vue de l’autre",
            "J’ai donné deux arguments",
            "J’ai utilisé au moins deux subjonctifs",
            "J’ai conclu avec une phrase forte"
          ]
        }
      ]
    }
  }
});
