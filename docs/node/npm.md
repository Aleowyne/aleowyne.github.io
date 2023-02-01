# Gestionnaire de paquets npm

## 1. Création d’un fichier package.json

Création du fichier `package.json` :
```bash
npm init
```

<br/>

Exemple de fichier `package.json` :
```json title="package.json"
{
  "name": "nom_module",
  "version": "0.1.0",
  "description": "Description",
  "author": "Aleowyne",
  "keywords": ["tag1", "tag2"],
  "homepage": "https://github.com/owner/project/readme.md",
  "license": "ISC",
  "bugs": {
    "url" : "https://github.com/owner/project/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/owner/project"
  },
  "private": true, 
  "main": "src/index.js",
  "scripts": {
    "dev": "webpack --watch --mode=development",
    "build": "webpack --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "typescript": "^4.7.4",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"
  }
}
```

| Section | Description |
| --- | --- |
| name | Nom du module |
| version | Version du module |
| description | Description du module |
| author | Auteur du module |
| keywords | Mots-clés |
| homepage | URL pour trouver la doc, des exemples d’utilisation |
| license | Licence |
| bugs | URL du tracker de bugs (ou adresse mail) |
| repository | URL vers le dépôt Git |
| private | Empêche la publication sur npm (true) |
| main | Fichier principal qui est le point d’entrée du module |
| scripts | Scripts |
| dependencies | Liste des modules en dépendance |
| devDependencies | Liste des modules en dépendance pour le développement |

<br/>

## 2. Installation des modules

Installation d’un module globalement (hors projet) :
```bash
npm install -g <nom_module>
```

> 💡 `npm install` peut être remplacé par `npm i`

<br/>

Installation d’un module dans le projet :
```bash
npm install <nom_module>
```

<br/>

Installation d’un module utilisé seulement lors du développement :
```bash
npm install --save-dev <nom_module>
```

> 💡 `--save-dev` peut être remplacé par `-D`

<br/>

Désinstallation d’un module :
```bash
npm uninstall <nom_module>

# Et globalement
npm uninstall -g <nom_module>
```

> 💡 `npm uninstall` peut être remplacé par `npm r`

<br/>

Installation des modules à partir du fichier `package.json` :
```bash
npm install
```

<br/>

Installation d’une version précise d'un module :
```bash
npm install <nom_module>@<version>
```

<br/>

Installation de la dernière version d'un module sans tenir compte du fichier `package.json` :
```bash
npm install <nom_module>@latest
```

<br/>

Pour connaître toutes les versions d’un module :
```bash
npm view <nom_module> versions
```

<br/>

Installation depuis un dépôt git :
```bash
npm install <url>
```

<br/>

Pour lister les modules installés :
```bash
npm list

# Et globalement
npm list -g
```

<br/>

## 3. Mise à jour des modules

Mise à jour des modules dans le projet :
```bash
npm outdated
npm update
```

<br/>

Mise à jour des modules globalement :
```bash
npm outdated -g
npm update -g
```

<br/>

Ou avec le module `ncu` :
```bash
# Dans le projet
ncu
ncu -u

# Globalement
ncu -g
```

<br/>

## 4. Versions

| Version | Représentation |
| --- | --- |
| ^1.0.0 | 1.X.X |
| ~1.0.0 | 1.0.X |
| * | X.X.X |
| 1.0.0 | 1.0.0 |

<br/>

## 5. Scripts

Les scripts sont présents dans le fichier `package.json` et sont exécutés comme suit :
```bash
# Lancer l'application
npm start

# Exécuter des test
npm test

# Exécuter un script personnalisé
npm run <script>
```

<br/>

Exécution d’un script à partir d’un autre script dans le fichier `package.json` :
```json
{
  "scripts": {
    "dev": "npm run dev:backend && npm run dev:frontend",
    "dev:backend": "npm run dev --prefix backend",
    "dev:frontend": "npm run dev --prefix frontend"
  }
}
```

Ou avec le module `npm-run-all` :
```json
{
  "scripts": {
    "dev": "npm-run-all --parallel dev:*",
    "dev:backend": "npm run dev --prefix backend",
    "dev:frontend": "npm run dev --prefix frontend"
  }
}
```

<br/>

Exécution d’un script avant ou après un autre script :
```json
{
  "scripts" : {
    "pretest": "echo pretest",
    "test": "jest --config ./jest.config.json",
    "posttest": "echo posttest"
  }
}
```

<br/>

## 6. Liens utiles
[Node.js - Apprendre par la pratique (Chapitre 5 - Jouer avec npm)](https://apprendre-nodejs.fr/v1/chapter-05/index.html)