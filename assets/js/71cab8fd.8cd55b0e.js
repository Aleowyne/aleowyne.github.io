"use strict";(self.webpackChunkblog_notes_aleo=self.webpackChunkblog_notes_aleo||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="Git",c={unversionedId:"tool/git",id:"tool/git",title:"Git",description:"1. Nommage des commits",source:"@site/docs/tool/git.md",sourceDirName:"tool",slug:"/tool/git",permalink:"/tool/git",draft:!1,tags:[],version:"current",lastUpdatedBy:"Aleowyne",lastUpdatedAt:1706739590,formattedLastUpdatedAt:"31 janv. 2024",frontMatter:{},sidebar:"docs",previous:{title:"Gestionnaire de paquets npm",permalink:"/node/npm"},next:{title:"Vite",permalink:"/tool/vite"}},s={},p=[{value:"1. Nommage des commits",id:"1-nommage-des-commits",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git"},"Git"),(0,i.kt)("h2",{id:"1-nommage-des-commits"},"1. Nommage des commits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"build : Modification qui affecte le syst\xe8me de build ou les d\xe9pendances externes (npm, webpack \u2026)."),(0,i.kt)("li",{parentName:"ul"},"ci : Int\xe9gration continue (Travis, Circle, Actions GitHub \u2026)"),(0,i.kt)("li",{parentName:"ul"},"docs : Modification de la documentation uniquement"),(0,i.kt)("li",{parentName:"ul"},"feat : Ajout d'une fonctionnalit\xe9"),(0,i.kt)("li",{parentName:"ul"},"fix : Correction de bug"),(0,i.kt)("li",{parentName:"ul"},"perf : Am\xe9lioration des performances"),(0,i.kt)("li",{parentName:"ul"},"refactor : Modification du code qui ne change rien au fonctionnement"),(0,i.kt)("li",{parentName:"ul"},"style : Modification du style du code (formatage, espace, point-virgule manquant \u2026)"),(0,i.kt)("li",{parentName:"ul"},"test : Ajout de tests manquants ou modification de tests")))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scope")," d\xe9finit quelle partie de votre librairie/application est affect\xe9e par le commit (information facultative).")),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description")," contient une description succincte des changements :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Utilisation de l\'imp\xe9ratif pr\xe9sent ("change", et non pas "changed" ou "changes")'),(0,i.kt)("li",{parentName:"ul"},"Sans majuscule au d\xe9but"),(0,i.kt)("li",{parentName:"ul"},'Pas de "." \xe0 la fin de la description')))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Body")," permet de d\xe9tailler plus en profondeur les motivations derri\xe8re le changement (information facultative) :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Utilisation de l'imp\xe9ratif pr\xe9sent comme dans le sujet")))),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Footer")," contient les changements importants (Breaking Changes) et les r\xe9f\xe9rences \xe0 des issues/PR (information facultative).",(0,i.kt)("br",{parentName:"li"}),"Pour fermer une issue ou une PR, les mots-cl\xe9s suivants peuvent \xeatre utilis\xe9s :   ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"close, closes, closed"),(0,i.kt)("li",{parentName:"ul"},"fix, fixes, fixed"),(0,i.kt)("li",{parentName:"ul"},"resolve, resolves, resolved")))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Des exemples d\u2019utilisation :",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/commits/main"},"https://github.com/angular/angular/commits"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/karma-runner/karma/commits/master"},"https://github.com/karma-runner/karma/commits")))}d.isMDXComponent=!0}}]);