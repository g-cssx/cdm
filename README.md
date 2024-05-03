# Projet e-commerce

Bienvenue dans mon projet de e-commerce. Le projet vise à concrétiser le lancement d'un site e-commerce mettant en avant des vêtements confectionnés à la main par une association étudiante, à l'aide du framework Evershop.

## Prérequis

- Docker et Docker Compose
- Au moins 2GB de RAM

### Dépendances optionnelles pour un lancement sans Docker:

- (Optionnel) Node.js v16 ou supérieur
- (Optionnel) npm v10 ou supérieur
- (Optionnel) Une base de donnée PostgreSQL

## Installation

1. Clonez le dépôt
2. Modifier la configuration:

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

Pour démarrer le projet, utilisez Docker Compose avec la commande suivante :

```bash
docker-compose up -d
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

## Licence

Ce projet est sous licence AGPLv3. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
