# Mon français : parcours B1 → C1

Site d'apprentissage du français, utilisable sur ordinateur et installable comme application sur iPhone.
30 unités complètes (174 activités), un mémento de 29 règles, une série de jours façon Duolingo,
un objectif quotidien et des rappels par notification. La mascotte est Summer, notre chienne. 🐾

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | la page |
| `style.css` | l'apparence (couleurs, animations, version téléphone) |
| `app.js` | le fonctionnement : comptes, exercices, série, rappels |
| `contenu.js` | les 30 unités |
| `regles.js` | le mémento de règles |
| `illustrations.js` | les dessins (thèmes et Summer) |
| `config.js` | les clés Supabase et la clé publique des notifications |
| `manifest.webmanifest`, `sw.js`, `icones/` | ce qui transforme le site en application |
| `supabase.sql` | création de la table de progression (déjà fait) |
| `supabase-rappels.sql` | création des rappels (à faire une fois) |
| `supabase/functions/rappel/index.ts` | la fonction qui envoie les notifications |

Tout se dépose à la racine du dépôt GitHub, dossiers `icones` et `supabase` compris.

## 1. Mettre à jour le site

Remplace tous les fichiers du dépôt par ceux de l'archive, puis attends une ou deux minutes.
La progression déjà enregistrée est conservée.

À chaque future mise à jour, change le numéro `VERSION` en haut de `sw.js` (par exemple `v3` → `v4`) :
c'est ce qui force les téléphones à charger la nouvelle version.

## 2. Installer l'application sur l'iPhone

1. Ouvre l'adresse du site dans **Safari** (pas Chrome).
2. Bouton **Partager** (carré avec une flèche) › **Sur l'écran d'accueil** › **Ajouter**.
3. Ouvre l'application depuis l'icône de Summer et connecte-toi.

Le nom sous l'icône se change dans `manifest.webmanifest` (`name`, `short_name`) et dans `index.html`
(`apple-mobile-web-app-title`).

## 3. Activer les rappels (une quinzaine de minutes, une seule fois)

Les notifications partent d'une petite fonction hébergée chez Supabase, appelée toutes les 15 minutes.
Elle envoie un rappel à l'heure choisie si l'objectif du jour n'est pas atteint, et un dernier message
vers 21 h 30 si une série d'au moins deux jours risque de s'arrêter.

**a. Les secrets.** Dans Supabase : **Edge Functions › Secrets** (ou Project Settings › Edge Functions).
Ajoute trois secrets ; les valeurs sont dans le fichier `cles-notifications.txt`, fourni à part :

- `VAPID_PUBLIC_KEY`
- `VAPID_PRIVATE_KEY` (à ne jamais mettre sur GitHub)
- `VAPID_SUBJECT` : `mailto:` suivi de ton adresse, par exemple `mailto:louis@exemple.fr`

**b. La fonction.** **Edge Functions › Deploy a new function › Via Editor**. Nom : `rappel` (exactement).
Remplace le code d'exemple par tout le contenu de `supabase/functions/rappel/index.ts`, puis **Deploy**.

**c. La table et le réveil.** **SQL Editor › New query**, colle `supabase-rappels.sql`, puis **Run**.
Si un message signale que `pg_cron` ou `pg_net` n'est pas disponible, active-les dans
**Database › Extensions** (ou **Integrations › Cron**), puis relance le script.

**d. Sur l'iPhone.** Dans l'application installée : **Profil › Activer les rappels**, accepte les
notifications, choisis l'heure, puis **Tester une notification**.

Pour vérifier que le réveil tourne : **Edge Functions › rappel › Logs** affiche un appel toutes les 15 minutes.

## Fonctionnement

- **Série** : un jour compte dès qu'une activité est terminée. La série affichée en haut est le nombre de jours consécutifs.
- **Objectif du jour** : réglable de 1 à 4 activités dans le profil. Une célébration s'affiche quand il est atteint.
- **Hors connexion** : l'application garde une copie des fichiers ; la progression est renvoyée dès que le réseau revient.
- **QCM** : l'ordre des réponses est mélangé à chaque affichage.
- **Comptes** : chaque compte ne peut lire et modifier que sa propre progression et ses propres rappels.
