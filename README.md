# Underlined

Bibliothèque personnelle de connaissances en français : 120 fiches originales (40 par domaine), 42 références (livres, articles et recherches), sans compte, sans abonnement et sans API.

## Démarrer

Node.js 22.13+ (Node 24 recommandé), npm et un navigateur moderne.

```sh
cd /workspace/uknow
npm ci
npm run dev
```

Le serveur utilise le port 3000. Le mode développement facilite les modifications ; son service worker ne prépare pas de cache hors ligne. Pour utiliser et tester la PWA :

```sh
npm run typecheck
npm run build
npm start
```

`npm run build` crée `out/`, puis génère un service worker avec la liste exacte des ressources et une version dérivée de leur contenu. `npm start` sert ces fichiers sur le port 3000 (`PORT` permet de le changer). Arrêter un autre serveur sur ce port avant de lancer celui de production.

L’hébergement final doit servir le contenu de `out/` à la racine d’un domaine **HTTPS**, avec `sw.js` servi sans cache HTTP prolongé. Aucun serveur Next.js, secret, service de base de données ou variable d’environnement n’est nécessaire. Le serveur local fourni sert au développement et aux vérifications ; la terminaison TLS doit être assurée par l’hébergeur.

## Fonctionnalités

- Découverte : sélection quotidienne, catégories, recherche insensible aux accents, découverte aléatoire et reprise de lecture.
- Lecture : paragraphes courts, exemple, conclusion, source, taille du texte réglable et progression conservée.
- Bibliothèque : favoris, historique et fiches regroupables par livre/source ; les ouvrages intégraux ne sont pas inclus.
- Collections : création, description, renommage, ajout/retrait de fiches et suppression confirmée.
- Préférences : thèmes clair/sombre, sauvegarde JSON et restauration validée, atomique et confirmée.
- IndexedDB/Dexie pour les fiches, sources et données personnelles. Aucune transmission de ces données.
- PWA : manifest, icônes iOS, service worker versionné, cache de toutes les ressources produites et message pour les ressources indisponibles.

## Tester le hors-ligne

1. Lancer le build et le serveur de production.
2. Ouvrir l’application en ligne et attendre « Prêt pour le hors-ligne » (bureau) ou le message de préparation terminée dans Réglages (mobile).
3. Dans les outils du navigateur, activer le mode réseau Offline, ou passer l’iPhone en mode avion.
4. Recharger la page. Ouvrir une fiche, sauvegarder un favori et créer une collection. Recharger encore pour vérifier la persistance.
5. Un lien vers une source externe nécessite Internet : l’application l’indique sans quitter la fiche. Une ressource locale absente du cache reçoit un message hors ligne.

Une première ouverture avec Internet est indispensable. Pour basculer d’un ancien build de production au développement sur le même domaine, désinscrire son service worker et vider **uniquement Cache Storage**, sans effacer IndexedDB. Utiliser un port différent en développement évite ce conflit.

## Installer sur iPhone

Ouvrir le site déployé en HTTPS dans Safari → Partager → **Sur l’écran d’accueil** → Ajouter. Lancer l’application installée une première fois avec Internet et vérifier la préparation hors ligne dans Réglages, puis tester le mode avion.

Le stockage iOS reste soumis aux quotas et aux règles d’éviction du navigateur. L’installation n’est pas une garantie de conservation permanente. Exporter régulièrement les données via Réglages → Exporter JSON. L’import **remplace** favoris, historique, collections et préférences après confirmation. Il ne modifie pas le catalogue. Aucune synchronisation entre appareils n’est incluse.

## Vérifications automatiques

```sh
npm run typecheck
npm run build
npm test
```

Playwright utilise Chromium installé à `/usr/bin/chromium` dans cet environnement. Ailleurs, définir `CHROMIUM_PATH` vers votre exécutable Chromium. Les tests démarrent le serveur de production si nécessaire, sur le port 3000. Ils s’exécutent en série et utilisent un nouveau contexte de navigateur par parcours.

Les parcours couvrent navigation, lecture, recherche, catégories, sources, favoris et thème persistants, cycle de vie des collections, export/import JSON et rejet d’un format incompatible, lecture et modification hors ligne, reprise de progression, découverte aléatoire et absence de débordement aux dimensions mobile et bureau. Les captures sont générées dans `test-results/` (ignoré par Git).

Ces vérifications Chromium avec dimensions iPhone ne remplacent pas un test sur un appareil iOS réel. L’installation Safari et l’éviction iOS ne sont pas automatisées ici.

## Organisation

- `app/` : App Router, métadonnées et styles adaptatifs avec Tailwind CSS 4.
- `components/` : application et carte réutilisable.
- `lib/types.ts` : modèles Book, Idea, Collection, History, Preferences, Backup et futur contrat IngestionJob.
- `lib/catalog.ts` : catalogue initial et intégration des 100 fiches de `lib/catalog-extra.ts`, textes originaux et références identifiables. Les interprétations sont signalées ; aucune prétention à une analyse intégrale des ouvrages.
- `lib/db.ts` : schéma IndexedDB indexé, initialisation idempotente, transactions et validation de sauvegarde.
- `lib/use-reading-progress.ts` : suivi et reprise de lecture avec effets isolés par fiche.
- `scripts/` : génération du cache et serveur statique.
- `tests/` : parcours Playwright sur le vrai build de production.

L’initialisation met à jour les fiches intégrées sans effacer les données personnelles. Les tables sont indexées par catégorie, livre, titre et date. Pour un catalogue de plusieurs milliers de fiches, prévoir une pagination des requêtes Dexie et un index de recherche dédié plutôt qu’une recherche sur tout le tableau en mémoire. Le format de sauvegarde est versionné ; une évolution devra prévoir une migration pour ses anciens identifiants.

L’interface `IngestionJob` prépare un pipeline futur PDF/article → extraction → génération → vérification humaine → dédoublonnage. Cette V1 ne contient ni import PDF ni génération IA. Les références externes sont identifiables, mais leur accès intégral et leur disponibilité ne sont pas garantis.

## Environnement cloud

Utiliser le checkout existant `/workspace/uknow`. Chaque tâche est déjà isolée : ne pas créer de worktree sans demande explicite. Les processus ne survivent pas forcément à une nouvelle tâche : relancer `npm start` après restauration si nécessaire. Webpack est sélectionné explicitement, car les workers Turbopack ne peuvent pas ouvrir leurs ports dans cet environnement.

Identité visuelle : Underlined, ivoire et bleu encre. Le nom technique du dépôt et la base IndexedDB `uknow` sont conservés pour préserver les données existantes.

Le fil affiche les fiches par lots de 24 via « Afficher plus d’idées ». La recherche porte sur les titres, auteurs, sources et textes complets, y compris les fiches encore non affichées. Toutes les fiches restent stockées et disponibles hors ligne. Les liens bibliographiques sont des DOI, des textes publics ou des recherches de référence ; ils ne garantissent pas l’accès intégral ni une vérification en ligne du texte source.
