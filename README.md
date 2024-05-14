<div align="center"><img src="https://raw.githubusercontent.com/g-cssx/cdm/main/themes/cdm/public/cdm-logo.webp" alt="CDM e-commerce" height="250"></div>

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
[![GitHub Actions](https://img.shields.io/badge/Using_GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://docs.github.com/en/actions)
![Fully Dockerized](https://img.shields.io/badge/Fully_Dockerized-2496ED?logo=docker&logoColor=fff)
![Docker Build](https://github.com/g-cssx/cdm/actions/workflows/build.yml/badge.svg)
![ESLint Status](https://github.com/g-cssx/cdm/actions/workflows/eslint.yml/badge.svg)

</div>

# Projet e-commerce CDM

Bienvenue dans mon projet de e-commerce. Le projet vise à concrétiser le lancement d'un site e-commerce mettant en avant des vêtements confectionnés à la main par une association étudiante, à l'aide du framework Evershop.

## Prérequis

- Docker et Docker Compose
- Au moins 2GB de RAM

### Dépendances optionnelles pour un lancement sans Docker :

- (Optionnel) Node.js v16 ou supérieur
- (Optionnel) npm v10 ou supérieur
- (Optionnel) Une base de données PostgreSQL

## Installation

1. Clonez le dépôt
2. Modifier la configuration :

Copiez le fichier `.env.example` en `.env` et remplissez-le avec vos propres valeurs :

```bash
cp .env.example .env
```

Ensuite, générez une nouvelle valeur pour `TRAEFIK_PASSWORD_HASH` en utilisant la commande suivante :

```bash
htpasswd -nBC 10 admin
```

Copiez le résultat et remplacez la valeur existante de TRAEFIK_PASSWORD_HASH dans le fichier `.env`

## Démarrage du projet

Pour démarrer le projet, utilisez Docker Compose avec la commande suivante à la racine du projet :

```bash
docker compose up -d
```

Cette commande va démarrer tous les services définis dans le fichier docker-compose.yml en mode détaché (l'option -d), ce qui signifie que les conteneurs seront exécutés en arrière-plan.

Vous devriez maintenant pouvoir accéder à l'interface utilisateur de l'application à l'adresse http://localhost:3000 et à l'interface utilisateur de pgAdmin à l'adresse http://localhost:8080.

## Utilitaires NPM

Le fichier package.json contient plusieurs scripts que vous pouvez utiliser en éxécutant le script `evershop.sh` pour accéder au à l'application dans son conteneur :

```
npm run setup : Installe le framework Evershop.
npm run start : Démarre Evershop.
npm run build : Construit les assets pour la production.
npm run dev : Démarre Evershop en mode développement.
npm run user:create : Crée un nouvel utilisateur.
npm run user:changePassword : Change le mot de passe d'un utilisateur.
```

Ces script peuvent être utilisé pour gérer les mainteneur/administrateur du site.

## Utilitaires BASH

Pour faciliter certaines taches répétitives, plusieurs scripts BASH ont été créés à la racine :

- [start.sh](start.sh): Ce script est utilisé pour démarrer le projet. Il utilise Docker pour démarrer les services nécessaires, puis affiche les logs.
- [run.sh](run.sh): Ce script exécute le projet en mode développement en utilisant la commande npm run dev sans passer par Docker (requiert une base de donnée locale).
- [evershop.sh](run.sh): Ce script exécute des commandes npm dans le conteneur Docker de l'application.
- [upgrade.sh](upgrade.sh): Ce script est utilisé pour mettre à jour le package @evershop/evershop à la dernière version en utilisant npm.
- [build.sh](build.sh): Ce script est utilisé pour construire le projet en utilisant Docker. Il construit les images Docker sans utiliser le cache, démarre les services et affiche les logs.

## Architecture

![Architecture du projet](https://raw.githubusercontent.com/g-cssx/cdm/main/media/architecture.svg)

Le projet est structuré autour de plusieurs services qui sont définis dans le fichier [docker-compose.yml](docker-compose.yml).

- **app** : Il s'agit de l'application principale. Elle est construite à partir du Dockerfile dans le répertoire courant et utilise une base de données PostgreSQL pour le stockage des données.
- **database** : Il s'agit du service de base de données PostgreSQL. Il est configuré pour être redémarré automatiquement en cas de panne et pour effectuer des vérifications de santé régulières.
- **traefik** : Il s'agit d'un reverse proxy qui gère le routage des requêtes HTTP vers l'application et fournit également une interface utilisateur web pour la gestion des routes, des middlewares, etc.
- **pgadmin** : Il s'agit d'une interface web pour la gestion de la base de données PostgreSQL. C'est un outil d'administration optionnel et l'application peut fonctionner sans lui. Il est inclus pour faciliter le développement et le débogage, mais il n'est pas nécessaire pour le fonctionnement de l'application.

Chaque service est isolé dans son propre conteneur Docker, ce qui permet une séparation claire des préoccupations et une meilleure gestion des dépendances. Les services peuvent communiquer entre eux via des réseaux Docker définis (myevershop et traefik).

Enfin, les volumes Docker sont utilisés pour le stockage persistant des données pour les services database et pgadmin.

## Screenshots

**Vue Page Principale**

![Vue Page Principale](https://raw.githubusercontent.com/g-cssx/cdm/main/media/vue-page-principale.png)

**Vue Produit**

![Vue Produit](https://raw.githubusercontent.com/g-cssx/cdm/main/media/vue-produit.png)

**Vue Panier**

![Vue Panier](https://raw.githubusercontent.com/g-cssx/cdm/main/media/vue-panier.png)

## Licence

Ce projet est sous licence AGPLv3. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
