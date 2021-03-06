---
id: sapui5
title: SAPUI5
sidebar_label: SAPUI5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
En cours de rédaction : commencé le 08/08/2020.
:::

## 1. Bibliothèques/Namespaces
Bibliothèque/Namespace | Description
-----------------------|------------
sap.ui.comp | Contient des contrôles composites comme `SmartField`, `SmartFilterBar`, `SmartTable`, `SmartForm`, `ValueHelpDialog` ...
sap.m | La principale bibliothèque de contrôles, avec des contrôles responsive qui peuvent être utilisés dans les appareils tactiles ainsi que dans les applications de bureau.
sap.f | Contient des contrôles spécialisés pour les applications SAP Fiori.
sap.tnt | Contient des contrôles spécialisés pour les applications administratives.
sap.suite.ui | Contient la bibliothèque `sap.suite.ui.commons` permettant de faire des opérations de calcul, des graphes ...
sap.ushell | Sous cette bibliothèque, il existe plusieurs namespaces qui contiennent toutes les fonctionnalités liées aux services du shell unifié.
sap.uxap | Contient des contrôles comme les fils d’Ariane (breadcrumbs) et les entêtes de page (`ObjectPageHeader`).
sap.gantt | Contient des contrôles spécialisés pour les diagrammes de Gantt.
sap.ui.core | Contient les plugins jQuery UI5 (`jQuery.sap.*`), le Core et tous ses composants, les classes de base pour les contrôles, les composants et les classes MVC.
sap.ui.layout | Conçu pour aider à structurer l'affichage des éléments des vues.
sap.ui.unified | Contient des contrôles supplémentaires pour les smartphones et les ordinateurs de bureau (Calendrier, Menu, Chargement de fichier ....)
sap.ui.table | Contient des contrôles pour gérer des tableaux.<br/>Ces contrôles ne sont pas conçus pour fonctionner sur les écrans de smartphones, ils ont été conçus pour les applications traitant de grands volumes de données.
sap.viz | Contient `sap.viz.ui5.controls.VizFrame`, qui permet d’utiliser différents types de graphiques.
sap.ui.richtexteditor | Contient toutes les fonctionnalités requises pour le contrôle `RichTextEditor` dans SAPUI5. Le contrôle utilise `TinyMCE`.
sap.ui.suite | Une bibliothèque de contrôles conçue pour les applications SAP Business Suite.

<p align="center">
  <figure>
    <img alt="Compatibilité entre bibliothèques" src="/img/sapui5_1.png" class="img500" />
    <figcaption>Compatibilité entre bibliothèques</figcaption>
  </figure>
</p>

Les bibliothèques qui sont seulement dans le cercle de gauche ne sont pas compatibles avec les bibliothèques qui sont seulement dans le cercle de droite. Les bibliothèques qui sont à l’intersection des deux cercles sont compatibles avec toutes les autres.

## 2. MVC
SAPUI5 utilise le MVC.
Les vues peuvent être écrites en JavaScript, XML, JSON ou HTML. La plupart du temps, ce sont les vues XML qui sont choisies.

<p align="center">
  <figure>
    <img alt="Fonctionnement du MVC sur SAPUI5" src="/img/sapui5_2.png" class="img500" />
    <figcaption>Fonctionnement du MVC sur SAPUI5</figcaption>
  </figure>
</p>

Le cycle de vie d’une vue et de son contrôleur :
- la fonction `onInit()` : Appelée lorsqu'une vue est instanciée. Utilisée pour modifier la vue avant qu'elle ne s'affiche pour lier les gestionnaires d'événements et effectuer une autre initialisation.
- la fonction `onBeforeRendering()` : Appelée chaque fois avant l'affichage de la vue.
- la fonction `onAfterRendering()` : Appelée lorsque la vue a été affichée. Utilisée pour effectuer des manipulations post-rendu du HTML.
- la fonction `onExit()` : Appelée lorsque la vue est détruite. Utilisée pour libérer des ressources et finaliser les activités.

<p align="center">
  <figure>
    <img alt="Cycle de vie d'une vue" src="/img/sapui5_3.png" class="img700" />
    <figcaption>Cycle de vie d'une vue et de son contrôleur</figcaption>
  </figure>
</p>


Exemple sur l'utilisation des fonctions :
<Tabs
  defaultValue="html"
  values={[
    { label: 'index.html', value: 'html', },
    { label: 'index.js', value: 'js', },
    { label: 'view/App.view.xml', value: 'xml', },
    { label: 'controller/App.controller.js', value: 'app_js', },
  ]
}>
<TabItem value="html">

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Cycle de vie d'une vue</title>
  <script id="sap-ui-bootstrap"
          type="text/javascript"
          src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
          data-sap-ui-theme="sap_belize"
          data-sap-ui-libs="sap.m"
          data-sap-ui-resourceroots='{"Lifecycle": "./"}'
          data-sap-ui-onInit="module:Lifecycle/index"
          data-sap-ui-compatVersion="edge"
          data-sap-ui-async="true"
          data-sap-ui-logLevel="info">
  </script>
</head>

<body class="sapUiBody" id="content">
</body>
</html>
```

</TabItem>
<TabItem value="js">

```js
sap.ui.define([
  "sap/ui/core/mvc/XMLView"
], function (XMLView) {
  "use strict";

  XMLView.create({viewName: "Lifecycle.view.App"}).then(function (oView) {
    oView.placeAt("content");
  });
});
```

</TabItem>
<TabItem value="xml">

```xml
<mvc:View
  controllerName="Lifecycle.controller.App"
  xmlns="sap.m"
  xmlns:mvc="sap.ui.core.mvc" >
    
  <App>
    <Page title="Cycle de vie">
      <Button
        text="Destruction"
        press="onPress"/>
    </Page>
  </App>
</mvc:View>
```

</TabItem>
<TabItem value="app_js">

```js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log"
  ], function(Controller, Log) {
    "use strict";
  
    return Controller.extend("Lifecycle.App", {
      onInit: function() {
        Log.info("Fonction onInit() appelée");
      },
      
      onBeforeRendering: function() {
        Log.info("Fonction onBeforeRendering() appelée");
      },
      
      onAfterRendering: function() {
        Log.info("Fonction onAfterRendering() appelée");
      },
      
      onExit: function() {
        Log.info("Fonction onExit() appelée");
      },
      
      onPress: function(Event) {
        this.getView().destroy();
      }
    });
  }
);
```

</TabItem>
</Tabs>

## 3. Architecture d’une application SAPUI5

Exemple d'une architecture de projet pouvant être utilisée :
<p align="center">
  <figure>
    <img alt="Architecture d'un projet" src="/img/sapui5_4.png" />
    <figcaption>Architecture d'un projet</figcaption>
  </figure>
</p>

Le contenu d'un projet :
- Répertoire `webapp/controller` : Le contenu du répertoire des contrôleurs (controller) doit correspondre au contenu du répertoire des vues (view).
- Répertoire `webapp/css` : Le répertoire des fichiers de style de l’application.
- Répertoire `webapp/i18n` (internationalisation) : Le répertoire contient les fichiers qui permettent d’adapter l’application à toutes les langues. Le chemin vers un des fichiers de ce répertoire ne doit pas excéder les 100 caractères.
- Répertoire `webapp/img` : Le répertoire des images de l’application
- Répertoire `webapp/model` : Répertoire des modèles
- Répertoire `webapp/view` : Répertoire des vues.
- Fichier `webapp/Component.js` : C’est le contrôleur du composant et il fournit les métadonnées d'exécution et les méthodes du composant.
- Fichier `webapp/index.html` : Fichier d’entrée de l’application, avec les références aux bibliothèques, au thème utilisé …
- Fichier `webapp/manifest.json` : Fichier de configuration pour définir les informations de l’application, comme le nom de l’application, l’emplacement des différents fichiers …
- Fichier `.project.json` : Paramètres du projet.
- Fichier `neo-app.json` : Fichier de configuration du projet pour l’IDE SAP Web.

Les évènements d'une application SAPUI5 se déroulent comme suit :
<p align="center">
  <figure>
    <img alt="Ordre des évènements d’une application SAPUI5" src="/img/sapui5_5.png" class="img500" />
    <figcaption>Ordre des évènements d’une application SAPUI5</figcaption>
  </figure>
</p>

<br/>

:::tip Sources
Livre : SAPUI5 The Comprehensive Guide (1st edition) de Christiane Goebels, Denise Nepraunig et Thilo Seidel  
https://sapui5.hana.ondemand.com/
:::