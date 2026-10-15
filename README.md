# Mon parcours de français (B1 → C1)

Site d'apprentissage du français : 30 unités sur trois paliers et huit thèmes (ceux de TV5 Monde, plus les études), un mémento de règles,
et un compte personnel qui synchronise la progression entre appareils.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | la page |
| `style.css` | l'apparence |
| `app.js` | le fonctionnement : comptes, navigation, exercices, sauvegarde |
| `contenu.js` | les unités du parcours (le fichier à enrichir) |
| `regles.js` | le mémento de règles |
| `config.js` | les deux clés Supabase |
| `supabase.sql` | le script de création de la base, à exécuter une fois |

## 1. Configurer Supabase (une dizaine de minutes, une seule fois)

1. Crée un compte gratuit sur supabase.com, puis un nouveau projet (région Europe, par exemple Paris ou Francfort). Note le mot de passe de la base, même s'il ne servira pas ici.
2. Dans le projet : **SQL Editor › New query**. Colle le contenu de `supabase.sql`, puis clique sur **Run**. Cela crée la table de progression et ses règles de sécurité.
3. **Project Settings › API** : copie la **Project URL** et la clé **anon public**, puis colle-les dans `config.js`.
4. **Authentication › URL Configuration** : dans **Site URL**, mets l'adresse du site GitHub Pages (par exemple `https://ton-pseudo.github.io/parcours-fle/`). Ajoute-la aussi dans **Redirect URLs**. C'est là que mèneront les liens de confirmation et de réinitialisation du mot de passe.
5. Facultatif, pour aller plus vite : **Authentication › Sign In / Providers › Email**, désactive **Confirm email**. Le compte sera alors utilisable dès sa création, sans clic dans un courriel.

Tant que `config.js` est vide, le site fonctionne en mode local (sans compte), ce qui permet de tester.

## 2. Mettre en ligne avec GitHub Pages

1. Dépose tous les fichiers à la racine du dépôt.
2. **Settings › Pages** : Source « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est en ligne après une ou deux minutes.

## Fonctionnement

- **Compte** : création avec prénom, adresse et mot de passe ; réinitialisation par courriel. Chaque compte ne peut lire et modifier que sa propre progression (règles de sécurité de la base).
- **Synchronisation** : chaque réponse est enregistrée en ligne quelques instants après. L'indicateur en haut à droite affiche « Synchronisé ». Hors connexion, la progression est gardée sur l'appareil et renvoyée dès que possible.
- **Progression existante** : à la première connexion, ce qui avait été fait sans compte sur cet appareil est récupéré automatiquement.
- **Navigation libre** : toutes les unités disponibles sont accessibles dans n'importe quel ordre. « Passer » retire une unité des suggestions sans la bloquer.
- **Expression orale** : l'activité « Parler » enregistre au micro (le navigateur demande l'autorisation la première fois). Elle ne fonctionne que sur la version en ligne du site (adresse en https), pas en ouvrant le fichier directement. Les enregistrements restent sur l'appareil et ne sont pas envoyés en ligne. Sur Chrome, Edge et Safari, une transcription automatique montre ce que le navigateur a compris.
- **Liens avec la Chine** : les unités marquées 中 relient le français à la Chine ; un filtre permet de les retrouver.
- **Règles** : 29 règles en cinq catégories, avec recherche (sans accents), règle du jour et suivi des règles lues. Les activités renvoient vers les règles utiles.

## Ajouter une unité

Dans `contenu.js`, remplace la ligne courte d'une unité « À venir » par un bloc complet sur le modèle des unités 1, 2 ou 11. Le champ `regles: ["id"]` d'une activité ajoute un lien vers une règle.

## Ajouter une règle

Dans `regles.js`, ajoute un bloc sur le modèle des autres. L'`id` doit être unique et sans espace.
