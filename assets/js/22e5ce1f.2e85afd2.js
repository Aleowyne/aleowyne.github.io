"use strict";(self.webpackChunkblog_notes_aleo=self.webpackChunkblog_notes_aleo||[]).push([[322],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7957:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},u="Docusaurus 2",l={unversionedId:"ssg/docusaurus",id:"ssg/docusaurus",title:"Docusaurus 2",description:"1. Pr\xe9sentation de Docusaurus",source:"@site/docs/ssg/docusaurus.md",sourceDirName:"ssg",slug:"/ssg/docusaurus",permalink:"/ssg/docusaurus",draft:!1,tags:[],version:"current",lastUpdatedBy:"Aleowyne",lastUpdatedAt:1673712568,formattedLastUpdatedAt:"14 janv. 2023",frontMatter:{},sidebar:"docs",previous:{title:"Sommaire",permalink:"/"}},c={},d=[{value:"1. Pr\xe9sentation de Docusaurus",id:"1-pr\xe9sentation-de-docusaurus",level:2},{value:"2. Installation d&#39;un nouveau projet Docusaurus",id:"2-installation-dun-nouveau-projet-docusaurus",level:2},{value:"3. Customisation du projet",id:"3-customisation-du-projet",level:2},{value:"3.1 Configuration globale du projet",id:"31-configuration-globale-du-projet",level:3},{value:"3.2 Menu lat\xe9ral de la documentation",id:"32-menu-lat\xe9ral-de-la-documentation",level:3},{value:"3.3 Modification du fichier de style",id:"33-modification-du-fichier-de-style",level:3},{value:"4. D\xe9ploiement du projet avec GitHub Pages",id:"4-d\xe9ploiement-du-projet-avec-github-pages",level:2}],p={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docusaurus-2"},"Docusaurus 2"),(0,i.kt)("h2",{id:"1-pr\xe9sentation-de-docusaurus"},"1. Pr\xe9sentation de Docusaurus"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2")," est un g\xe9n\xe9rateur de site web statique.",(0,i.kt)("br",{parentName:"p"}),"\n","Il est particuli\xe8rement utilis\xe9 pour g\xe9n\xe9rer des sites de documentation, mais il est possible de cr\xe9er n'importe quel type de site web statique. Docusaurus est construit avec React et peut \xeatre customis\xe9 selon les besoins.  "),(0,i.kt)("p",null,"Le contenu de votre site est r\xe9dig\xe9 gr\xe2ce \xe0 la syntaxe markdown (md et mdx).",(0,i.kt)("br",{parentName:"p"}),"\n","Un ",(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/search/"},"moteur de recherche")," bas\xe9 sur Algolia peut \xeatre install\xe9 sur votre site.",(0,i.kt)("br",{parentName:"p"}),"\n","Le ",(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/styling-layout/#styling-your-site-with-infima"},"style")," du site peut \xe9galement \xeatre modifi\xe9 avec ",(0,i.kt)("a",{parentName:"p",href:"https://facebookincubator.github.io/infima/"},"Infima"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Le support et la gestion des langues sont accessibles depuis la version 2.0.0-alpha.71 (i18n => internationalisation)."),(0,i.kt)("h2",{id:"2-installation-dun-nouveau-projet-docusaurus"},"2. Installation d'un nouveau projet Docusaurus"),(0,i.kt)("p",null,"En pr\xe9requis, il faut installer Node.js et Git. Si vous le souhaitez, vous pouvez utiliser Yarn pour la gestion des packages."),(0,i.kt)("p",null,"Cr\xe9ation d'un nouveau projet dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"mon_site")," avec le template classic propos\xe9 par Docusaurus."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init mon_site classic\n")),(0,i.kt)("p",null,"Le projet a la structure suivante :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"blog")," qui contient tous les articles du blog au format markdown"),(0,i.kt)("li",{parentName:"ul"},"Dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," qui contient les fichiers de la documentation au format markdown"),(0,i.kt)("li",{parentName:"ul"},"Dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"src/css")," qui contient les fichiers de style css"),(0,i.kt)("li",{parentName:"ul"},"Dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"src/pages")," qui contient les pages de premier niveau du site - ",(0,i.kt)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/creating-pages/"},"Cr\xe9ation de pages")),(0,i.kt)("li",{parentName:"ul"},"Dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"static/img")," qui contient les images du site"),(0,i.kt)("li",{parentName:"ul"},"Fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," qui contient la configuration du site"),(0,i.kt)("li",{parentName:"ul"},"Fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"sidebars.js")," qui contient le menu lat\xe9ral de la documentation")),(0,i.kt)("p",null,"Ex\xe9cution locale du site sur le serveur de d\xe9veloppement qui affichera automatiquement le site \xe0 l'adresse http://localhost:3000 dans votre navigateur pr\xe9f\xe9r\xe9 : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd mon_site\nnpm start\n")),(0,i.kt)("p",null,"Cr\xe9ation de la version statique du site dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.kt)("h2",{id:"3-customisation-du-projet"},"3. Customisation du projet"),(0,i.kt)("h3",{id:"31-configuration-globale-du-projet"},"3.1 Configuration globale du projet"),(0,i.kt)("p",null,"A la cr\xe9ation d'un nouveau projet, 3 parties sont disponibles dans le menu du site : la page d'accueil du site, la documentation et le blog.",(0,i.kt)("br",{parentName:"p"}),"\n","Sur mon blog-notes, la page d'accueil (fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/index.js"),") et le dossier blog ont \xe9t\xe9 supprim\xe9es pour n'avoir que la documentation."),(0,i.kt)("p",null,"Modification du fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," pour que la page principale du site pointe vers le contenu du fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"index.md")," pr\xe9sent dans les docs :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'{7-8} title="docusaurus.config.js"',"{7-8}":!0,title:'"docusaurus.config.js"'},"  ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          routeBasePath: '/',\n          sidebarPath: require.resolve('./sidebars.js'),\n          showLastUpdateAuthor: true,\n          showLastUpdateTime: true,\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      },\n    ],\n  ],\n  ...\n")),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture du projet",src:n(961).Z,width:"189",height:"436"}),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Architecture du projet")))),(0,i.kt)("p",null,"Le code minimal du fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"index.md")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="docs/index.md"',title:'"docs/index.md"'},"---\nid: index\nslug: /\ntitle: Bienvenue\nsidebar_label: Bienvenue\n---\n\nCeci est la page de bienvenue\n")),(0,i.kt)("h3",{id:"32-menu-lat\xe9ral-de-la-documentation"},"3.2 Menu lat\xe9ral de la documentation"),(0,i.kt)("p",null,"Le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"sidebar.js")," permet de g\xe9rer le menu lat\xe9ral de la documentation.\nA noter qu'il peut y avoir plusieurs menus lat\xe9raux dans ce fichier. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="sidebar.js"',title:'"sidebar.js"'},'module.exports = {\n  // Le menu lat\xe9ral "docs" s\'affiche que pour index.md et dev_web/docusaurus.md\n  docs: [ \n     // Un lien directement vers index.md\n    "index",\n    // Un sous-menu "D\xe9veloppement web" avec un lien vers dev_web/docusaurus.md\n    { "D\xe9veloppement web": ["dev_web/docusaurus"] },\n    // Un sous-menu "D\xe9veloppement logiciel". Ne s\'affiche pas, car pas de contenu\n    { "D\xe9veloppement logiciel": [] },\n    // Un sous-menu "SAP". Ne s\'affiche pas, car pas de contenu\n    { "SAP": [] }\n  ],\n\n  // Le menu lat\xe9ral "code" s\'affiche que pour code/intro.md\n  code: [ \n    "code/intro" \n  ]                      \n};\n')),(0,i.kt)("h3",{id:"33-modification-du-fichier-de-style"},"3.3 Modification du fichier de style"),(0,i.kt)("p",null,"Sur le blog-notes, les couleurs primaires du site ont \xe9t\xe9 modifi\xe9es pour qu\u2019elles s\u2019orientent sur du bleu plut\xf4t que du vert. Vous pouvez utiliser l'",(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/styling-layout#styling-your-site-with-infima"},"outil")," propos\xe9 sur le site de docusaurus pour g\xe9n\xe9rer les couleurs primaires."),(0,i.kt)("p",null,"Un fond bleu nuit et un texte grisonnant ont \xe9galement \xe9t\xe9 ajout\xe9s quand le site est avec le th\xe8me \u201cDark\u201d, afin de ne pas agresser les yeux."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/css/custom.css"',title:'"src/css/custom.css"'},":root {\n  --ifm-code-font-size: 95%;\n  --ifm-color-primary: #5c8cda;\n  --ifm-color-primary-dark: #437ad4;\n  --ifm-color-primary-darker: #3671d1;\n  --ifm-color-primary-darkest: #285cb1;\n  --ifm-color-primary-light: #759ee0;\n  --ifm-color-primary-lighter: #82a7e3;\n  --ifm-color-primary-lightest: #a8c1eb;\n}\n\n.docusaurus-highlight-code-line {\n  background-color: rgb(72, 77, 91);\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n}\n\nhtml[data-theme='dark'] {\n  --ifm-background-color: rgb(21, 32, 43); /* Couleur du background */\n  --ifm-color-content: #bbc2cf; /* Couleur du texte */\n}\n\nfigure {\n  text-align: center;\n}\n\nfigcaption {\n  font-style: italic; /* Texte des images en italique */\n}\n")),(0,i.kt)("h2",{id:"4-d\xe9ploiement-du-projet-avec-github-pages"},"4. D\xe9ploiement du projet avec GitHub Pages"),(0,i.kt)("p",null,"Le d\xe9p\xf4t GitHub ",(0,i.kt)("inlineCode",{parentName:"p"},"username.github.io")," doit \xeatre cr\xe9\xe9 au pr\xe9alable."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dans le dossier du projet Docusaurus, initialisation d'un d\xe9p\xf4t git")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd mon_site\ngit init\n")),(0,i.kt)("br",null),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Cr\xe9ation d'une connexion avec le d\xe9p\xf4t distant GitHub")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add origin https://github.com/username/username.github.io\n")),(0,i.kt)("p",null,"V\xe9rification que la connexion distante soit correcte :"),(0,i.kt)("div",{className:"container-code"},(0,i.kt)("div",{className:"code-left"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Code"',title:'"Code"'},"git remote -v\n"))),(0,i.kt)("div",{className:"code-right"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="R\xe9sultat"',title:'"R\xe9sultat"'},"origin  https://github/com/username/username.github.io (fetch)\norigin  https://github/com/username/username.github.io (push)\n")))),(0,i.kt)("p",null,"Si l'URL n'est pas la bonne, elle peut \xeatre chang\xe9e avec la commande suivante :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote set-url origin https://github.com/username/username.github.io\n")),(0,i.kt)("br",null),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Cr\xe9ation de deux branches ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")," avec la branche ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")," d\xe9finie par d\xe9faut.")),(0,i.kt)("p",null,"La branche ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," contiendra le code g\xe9n\xe9r\xe9 du site statique et la branche ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," contiendra le code source du site statique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit checkout -b dev\n")),(0,i.kt)("p",null,"V\xe9rification de la cr\xe9ation des branches : "),(0,i.kt)("div",{className:"container-code"},(0,i.kt)("div",{className:"code-left"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Code"',title:'"Code"'},"git branch\n"))),(0,i.kt)("div",{className:"code-right"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="R\xe9sultat"',title:'"R\xe9sultat"'},"* dev\n  main\n")))),(0,i.kt)("br",null),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Ajout des fichiers du projet dans le r\xe9pertoire de travail pour pr\xe9parer le contenu du prochain commit")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,i.kt)("br",null),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Commit des modifications")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "Message du commit"\n')),(0,i.kt)("br",null),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Envoi des modifications dans la branche ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")," sur le d\xe9p\xf4t GitHub")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin dev\n")),(0,i.kt)("br",null),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"D\xe9ploiement du site sur la branche ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," via l\u2019invite de commande Git BASH")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_USER=<username> DEPLOYMENT_BRANCH=main npm run deploy \n")))}m.isMDXComponent=!0},961:function(e,t,n){t.Z=n.p+"assets/images/docusaurus_1-7c6999fddcaf1ef96e4e10686dad35f7.png"}}]);