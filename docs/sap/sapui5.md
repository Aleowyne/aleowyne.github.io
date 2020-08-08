---
id: sapui5
title: SAPUI5
sidebar_label: SAPUI5
---

:::info
En cours de rédaction : commencé le 08/08/2020.
:::

## 1. Bibliothèques/Namespaces
Bibliothèque/Namespace | Description
-----------------------|------------
sap.ui.core | Fonctionnalités de base : charge et gère tous les ressources et contient des modèles et un gestionnaire de rendu qui s'occupe de présenter les vues, en écrivant dans le DOM.
sap.m | Contient l'ensemble des contrôles les plus importants, à partir du plus basique (comme les entrées) jusqu'aux contrôles qui peuvent servir de conteneurs pour les vues.
sap.ui.layout | Conçu pour aider à structurer l'affichage des éléments des vues.
sap.ui.unified | Contient des contrôles supplémentaires pour les smartphones et les ordinateurs de bureau.
sap.ui.table | Contient des contrôles comme `AnalyticalTable`, `Tree Table` …<br/>Ces contrôles ne sont pas conçus pour fonctionner sur les écrans de smartphones, ils ont été conçus pour les applications traitant de grands volumes de données.
sap.viz | Contient `sap.viz.ui5.controls.VizFrame`, qui permet d’utiliser différents types de graphiques. La plupart des autres namespace sont obsolètes.
sap.ui.comp | Contient des contrôles intelligents comme `SmartField`, `SmartFilterBar`, `SmartTable`, `SmartForm`, `ValueHelpDialog` ...
sap.suite | Il y a trois namespaces sous cette bibliothèque : la `sap.suite.ui.commons`, qui contient encore plus de contrôles, et deux autres qui contiennent des ressources supplémentaires, comme des types et des templates.
sap.ushell | Sous cette bibliothèque, il existe plusieurs namespaces qui contiennent toutes les fonctionnalités liées aux services du shell unifié.
sap.uxap | Contient davantage de contrôles, notamment des fils d’Ariane (breadcrumbs) et des entêtes de page (`ObjectPageHeader`).
sap.ui.commons | Il s'agit d'une bibliothèque en mode maintenance : aucun nouveau contrôle ou fonctionnalité y sont développés. Cette bibliothèque a été conçue pour les ordinateurs de bureau et les tablettes uniquement. Les contrôles à l'intérieur de cette bibliothèque sont les pendants de la bibliothèque sap.m qui sont compatibles multiplateformes et s'adaptent à toutes les tailles d'écran. Cette bibliothèque n'est pas dépréciée, mais doit être utilisée avec précaution lorsqu’elle est combinée avec d'autres bibliothèques (voir schéma ci-dessous).
sap.ui.richtexteditor | Contient toutes les fonctionnalités requises pour le contrôle `RichTextEditor` dans SAPUI5. Le contrôle utilise TinyMCE.
sap.ui.suite | Une bibliothèque de contrôles conçue pour les applications SAP Business Suite.
sap.ui.ux3 | Contrôles conçus principalement pour les applications de bureau et de tablette.<br/>Conçu à l'origine pour fonctionner avec le thème SAP Gold Reflection, qui était le prédécesseur de Blue Crystal.
sap.ui.vk | Contient des fonctionnalités et des contrôles permettant d'afficher des modèles en 3D.

<p align="center">
  <figure>
    <img alt="Compatibilité entre bibliothèques" src="/img/sapui5_1.png" />
    <figcaption>Compatibilité entre bibliothèques</figcaption>
  </figure>
</p>

Les bibliothèques qui sont seulement dans le cercle de gauche ne sont pas compatibles avec les bibliothèques qui sont seulement dans le cercle de droite. Les bibliothèques qui sont à l’intersection des deux cercles sont compatibles avec toutes les autres.

## 2. MVC
SAPUI5 utilise le MVC.
Les vues peuvent être écrites en JavaScript, XML, JSON ou HTML. La plupart du temps, ce sont les vues XML qui sont choisies.

<p align="center">
  <figure>
    <img alt="Fonctionnement du MVC sur SAPUI5" src="/img/sapui5_2.png" />
    <figcaption>Fonctionnement du MVC sur SAPUI5</figcaption>
  </figure>
</p>


<br/>

:::tip Sources
Livre : SAPUI5 The Comprehensive Guide (1st edition) de Christiane Goebels, Denise Nepraunig et Thilo Seidel
:::