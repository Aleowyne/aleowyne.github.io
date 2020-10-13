---
id: docusaurus
title: Docusaurus 2
sidebar_label: Docusaurus 2
---


## 1. Présentation de Docusaurus
Docusaurus 2 est un générateur de site web statique.  
Il est particulièrement utilisé pour générer des sites de documentation, mais il est possible de créer n'importe quel type de site web statique. Docusaurus est construit avec React et peut être customisé selon les besoins.  

Le contenu de votre site est rédigé grâce à la syntaxe markdown (md et mdx).  
Un [moteur de recherche](https://v2.docusaurus.io/docs/search/) basé sur Algolia peut être installé sur votre site.  
Le [style](https://v2.docusaurus.io/docs/styling-layout/#styling-your-site-with-infima) du site peut également être modifié avec [Infima](https://facebookincubator.github.io/infima/). Mais j'ai l'impression que le site Infima est toujours en cours de rédaction (section "Spacing" qui est vide).  
Le support et la gestion des langues sont en cours de développement (i18n => internationalisation). Si vous avez besoin de ces fonctionnalités, vous pouvez utiliser la version 1 de [Docusaurus](https://docusaurus.io/).


## 2. Installation d'un nouveau projet Docusaurus
En prérequis, il faut installer Node.js et Git. Si vous le souhaitez, vous pouvez utiliser Yarn pour la gestion des packages.

Création d'un nouveau projet *"mon_site"* sous le dossier *"mon_site"* avec le template classic proposé par Docusaurus.
```bash
npx @docusaurus/init@next init mon_site classic
```

Le projet a la structure suivante :
- Dossier *"blog"* qui contient tous les articles du blog au format markdown
- Dossier *"docs"* qui contient les fichiers de la documentation au format markdown
- Dossier *"src/css"* qui contient les fichiers de style css
- Dossier *"src/pages"* qui contient les pages de premier niveau du site - [Création de pages](https://v2.docusaurus.io/docs/creating-pages/)
- Dossier *"static/img"* qui contient les images du site
- Fichier *"docusaurus.config.js"* qui contient la configuration du site
- Fichier *"sidebar.js"* qui contient le menu latéral de la documentation

Exécution locale du site sur le serveur de développement qui affichera automatiquement le site à l'adresse http://localhost:3000 dans votre navigateur préféré : 
```bash
cd mon_site
npm start
```

Création de la version statique du site dans le dossier *"build"* :
```bash
npm build
```


## 3. Customisation du projet
### 3.1 Configuration globale du projet
A la création d'un nouveau projet, 3 parties sont disponibles dans le menu du site : la page d'accueil du site, la documentation et le blog.  
Sur mon blog-notes, la page d'accueil (fichier *"src/pages/index.js"*) et le dossier blog ont été supprimées pour n'avoir que la documentation.

Modification du fichier *"docusaurus.config.js"* pour que la page principale du site pointe vers le contenu du fichier *"index.md"* présent dans les docs :
```javascript {7-8} title="docusaurus.config.js"
  ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  ...
```

<p align="center">
  <figure>
    <img alt="Architecture projet" src="/img/docusaurus_1.png" />
    <figcaption>Architecture du projet</figcaption>
  </figure>
</p>

Le code minimal du fichier *"index.md"* :
```markdown title="docs/index.md"
---
id: index
slug: /
title: Bienvenue
sidebar_label: Bienvenue
---

Ceci est la page de bienvenue
```


### 3.2 Menu latéral de la documentation
Le fichier *"sidebar.js"* permet de gérer le menu latéral de la documentation.
A noter qu'il peut y avoir plusieurs menus latéraux dans ce fichier. 

Contenu du fichier *"sidebar.js"* :
```javascript title="sidebar.js"
module.exports = {
  // Le menu latéral "docs" s'affiche que pour index.md et dev_web/docusaurus.md
  docs: [ 
     // Un lien directement vers index.md
    "index",
    // Un sous-menu "Développement web" avec un lien vers dev_web/docusaurus.md
    { "Développement web": ["dev_web/docusaurus"] },
    // Un sous-menu "Développement logiciel". Ne s'affiche pas, car pas de contenu
    { "Développement logiciel": [] },
    // Un sous-menu "SAP". Ne s'affiche pas, car pas de contenu
    { "SAP": [] }
  ],

  // Le menu latéral "code" s'affiche que pour code/intro.md
  code: [ 
    "code/intro" 
  ]                      
};
```


### 3.3 Modification du fichier de style
Sur le blog-notes, les couleurs primaires du site ont été modifiées pour qu’elles s’orientent sur du bleu plutôt que du vert. Vous pouvez utiliser l'[outil](https://v2.docusaurus.io/docs/styling-layout#styling-your-site-with-infima) proposé sur le site de docusaurus pour générer les couleurs primaires.

Un fond bleu nuit et un texte grisonnant ont également été ajoutés quand le site est avec le thème “Dark”, afin de ne pas agresser les yeux.

```css title="src/css/custom.css"
:root {
  --ifm-code-font-size: 95%;
  --ifm-color-primary: #5c8cda;
  --ifm-color-primary-dark: #437ad4;
  --ifm-color-primary-darker: #3671d1;
  --ifm-color-primary-darkest: #285cb1;
  --ifm-color-primary-light: #759ee0;
  --ifm-color-primary-lighter: #82a7e3;
  --ifm-color-primary-lightest: #a8c1eb;
}

.docusaurus-highlight-code-line {
  background-color: rgb(72, 77, 91);
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
}

html[data-theme='dark'] {
  --ifm-background-color: rgb(21, 32, 43); /* Couleur du background */
  --ifm-color-content: #bbc2cf; /* Couleur du texte */
}

figcaption {
  font-style: italic; /* Texte des images en italique */
}
```


## 4. Déploiement du projet avec GitHub Pages
Le dépôt GitHub *"username.github.io"* doit être créé au préalable.

1. Dans le dossier du projet Docusaurus, initialisation d'un dépôt git
```bash
cd mon_site
git init
``` 
<br/>

2. Création d'une connexion avec le dépôt distant GitHub
```bash
git remote add origin https://github.com/username/username.github.io
```

Vérification que la connexion distante soit correcte :
<div class="container-code">
<div class="code-left">

```bash title="Code"
git remote -v
```
</div>
<div class="code-right">

```txt title="Résultat"
origin  https://github/com/username/username.github.io (fetch)
origin  https://github/com/username/username.github.io (push)
```
</div>
</div>


Si l'URL n'est pas la bonne, elle peut être changée avec la commande suivante :
```bash
git remote set-url origin https://github.com/username/username.github.io
```
<br/>

3. Création de deux branches *"master"* et *"dev"* avec la branche *"dev"* définie par défaut.

La branche *"master"* contiendra le code généré du site statique et la branche *"dev"* contiendra le code source du site statique.
```bash
git checkout master
git checkout -b dev
```
Vérification de la création des branches : 

<div class="container-code">
<div class="code-left">

```bash title="Code"
git branch
```
</div>
<div class="code-right">

```txt title="Résultat"
* dev
  master
```
</div>
</div>

<br/>

4. Ajout des fichiers du projet dans le répertoire de travail pour préparer le contenu du prochain commit
```bash
git add .
```
<br/>

5. Commit des modifications
```bash
git commit -m "Message du commit"
```
<br/>

6. Envoi des modifications dans la branche *"dev"* sur le dépôt GitHub
```bash
git push -u origin dev
```
<br/>


7. Déploiement du site sur la branche *"master"* via l’invite de commande Git BASH
```bash
GIT_USER=<username> npm run deploy
```
<br/>

:::tip Sources
https://v2.docusaurus.io/
:::