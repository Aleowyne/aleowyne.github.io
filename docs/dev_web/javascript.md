---
id: javascript
title: JavaScript
sidebar_label: JavaScript
---

:::info
En cours de rédaction : commencé le 12/07/2020.
:::

## 1 Informations en vrac
Les spécifications ECMA sont disponibles via ce lien : https://www.ecma-international.org/publications/standards/Ecma-262.htm  
Il n'est plus utile d'utiliser l’attribut `type` dans la balise `<script>`.  
La directive `"use scrict";` peut être ajoutée au début des fichiers js.  
Le mot-clé `var` n’a plus besoin d’être utilisé.  
Le mot-clé `debugger` est utilisé pour mettre un point d’arrêt.  

Les règles de nommage que j'ai choisies :
- Variables et constantes : camelCase
- Constantes qui seront utilisées dans tout le script et la plupart du temps créées au début du script (Exemple : COLOR_RED) : majuscule et underscore
- Fonctions : camelCase


## 2 Types de données
Utiliser `null` pour écrire une valeur "vide" ou "inconnue" dans la variable, et `undefined` pour les vérifications, c'est-à-dire pour voir si la variable est affectée ou similaire.

L’opérateur `typeof` permet d’indiquer le type d’une variable. Il existe 8 types de données de base :
- `number` pour les nombres de toute nature : entier ou virgule flottante, les nombres entiers sont limités à ±253
- `bigint` pour des nombres entiers de longueur arbitraire
- `string` pour les chaîne de caractères
- `boolean` pour true/false
- `null` pour les valeurs inconnues
- `undefined` pour les valeurs non attribuées
- `object` pour des structures de données plus complexes
- `symbol` pour les identifiants uniques


### 2.1 Nombre
Pour représenter des grands et des petits nombres :
```javascript
let billion = 1e9;  // 1 milliard
let ms = 1e-6; // 0.000001
```

Nombres hexadécimaux, binaires, octaux :
```javascript
console.log(0xFF); // Hexadécimal
console.log(0b11111111); // Binaire
console.log(0o377); // Octal
```

Utilisation de `toString(base)` :
- La base va de 2 à 36
- Si la base choisie est 36, tous les chiffres et les caractères de l’alphabet latin sont utilisés (0-9 et a-z)
- Deux points après le nombre ou des parenthèse autour du nombre si ce n’est pas une variable qui est utilisée
```javascript
console.log(123456..toString(36));
console.log((123456).toString(36));
```

Les fonctions mathématiques :
- `Math.floor(n)` : Arrondi à l’entier inférieur
- `Math.ceil(n)` : Arrondi à l’entier supérieur
- `Math.round(n)` : Arrondi à l’entier le plus proche
- `Math.trunc(n)` : Suppression des décimales
- `Math.random()` : Un nombre aléatoire entre 0 et 1
- `Math.max(n1, n2, n3 …)` et `Math.min(n1, n2, n3 …)` : Le maximum et le minimum parmi une liste de nombres
- `Math.pow(n, p)` : Le nombre n à la puissance p

Les calculs imprécis :
```javascript
let sum = 0.1 + 0.2;
console.log(sum); // Affiche : 0.30000000000000004
console.log(+sum.toFixed(2)); // Affiche : 0.3
```

La fonction `isNaN(value)` contrôle si une valeur n’est pas un nombre :
```javascript
console.log(isNaN("str")); // Affiche : true
```

La fonction `isFinite(value)` contrôle si une valeur est finie :
```javascript
console.log(isFinite("15")); // Affiche : true
```

La fonction `parseInt(str, base)` prend une chaîne de caractères en paramètre et renvoie un entier dans une base :
```javascript
console.log(parseInt("100px")); // Affiche : 100
```
La fonction `parseFloat(str)` prend une chaîne de caractères en paramètre et renvoie un nombre à virgule flottant :
```javascript
console.log(parseFloat("12.5em")); // Affiche : 12.5
```


### 2.2 Chaîne de caractères
Les backticks permettent d’intégrer des variables et des expressions dans une chaîne :
```javascript
console.log(`Le résultat est ${1 + 2}` ); // Affiche : Le résultat est 3
```

Ils permettent également d’écrire une chaîne de caractères sur plusieurs lignes :
```javascript
console.log(`ceci
est
un message
sur plusieurs lignes`);
```

Il est possible d’utiliser les guillemets simples et doubles avec des caractères spéciaux :
- `\n` : Nouvelle ligne
- `\r` : Retour chariot. Utilisé avec \n pour sauter une ligne (\r\n).
- `\'` ou `\"` : Guillemets
- `\\` : Antislash
- `\t` : Tabulation
- `\xNN` : Caractère unicode avec le code hexadécimal NN
- `\uNNNN` : Symbole unicode avec le code hexadécimal NNNN avec un encodage UTF-16
- `\u{NNNNNN}` : Symbole unicode avec le code hexadécimal NNNNNN (1 à 6 caractères) avec un encodage UTF-32

Les propriétés et les méthodes :
- `str.length` : longueur de la chaîne de caractères.
- `str[index]` ou `str.charAt(index)` : récupération d’un caractère de la chaîne de caractères à l’index donné.
Si aucun caractère trouvé, `str[index]` renvoie `undefined` et `str.charAt(index)` renvoie une chaîne vide.
- `str.toUpperCase()` : transforme la chaîne de caractères en majuscules.
- `str.toLowerCase()` : transforme la chaîne de caractères en minuscules.
- `str.indexOf(substr, [index])` : renvoie la position de la première occurrence de la sous-chaîne dans la chaîne de caractères à partir d’un index. Si la sous-chaîne n’est pas présente, la fonction renvoie -1.
- `str.lastIndexOf(substr, [index])` : le même fonctionnement que `indexOf()` mais en partant de la fin de la chaîne.
- `str.includes(substr, [index])` : renvoie `true` si la sous-chaîne est présente dans la chaîne de caractères à partir d’un index, sinon renvoie `false`.
- `str.startsWith(substr)` : renvoie `true` si la chaîne de caractères commence par la sous-chaîne, sinon renvoie `false`.
- `str.endsWith(substr)` : renvoie `true` si la chaîne de caractères finit par la sous-chaîne, sinon renvoie `false`.
- `str.slice(begin, [end])` : renvoie la sous-chaîne de la chaîne de caractères de l’index begin à l’index end non inclus. Si les index sont négatifs, la récupération se fait à partir de la fin.
- `str.substring(begin, [end])` : le même fonctionnement que `str.slice()`, mais autorise l’index begin a être supérieur à l’index end. Les index négatifs ne sont pas utilisés.
- `str.substr(begin, [length])` : renvoie la sous-chaîne de la chaîne de caractères qui commence à l’index begin avec une longueur donnée en paramètre.
- `str.split([separator, [limit]])` : découpe la chaîne de caractères en fonction du séparateur et renvoie un tableau avec les sous-chaînes. Le paramètre facultatif limit permet de définir le nombre de sous-chaînes maximum pouvant être extraites.

Liste des méthodes : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

Pour parcourir une chaîne de caractères :
```javascript
for (let char of "Hello") {
  console.log(char); 
}
```


### 2.3 Objet
#### 2.3.1 Propriétés
Pour créer un objet vide :
```javascript
let user = new Object();
let user = {};
```

Création d’un objet avec des propriétés :
```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true 
};
```

Accès à la valeur d’une des propriétés :
```javascript
console.log(user.name); // Affiche : John
```

Ajout d’une propriété :
```javascript
user.isAdmin = true;
```

Suppression d’une propriété :
```javascript
delete user.age;
```

Pour les propriétés multi-mots : 
```javascript
let user = {};
 
// Alimentation de la propriété
user["likes birds"] = true;
 
// Récupération de la valeur de la propriété
console.log(user["likes birds"]); // Affiche : true
 
// Suppression de la propriété
delete user["likes birds"];
```

Les propriétés calculées :
```javascript
let user = {};
let key = "test";
user[key] = true; // Affiche : true
 
let fruit = "apple";
let bag = {
  [fruit]: 5, 
};

console.log(bag.apple); // Affiche : 5
```

Pour vérifier qu’une propriété existe dans un objet :
```javascript
let user = { name: "John", age: 30 };
console.log("age" in user); // Affiche : true
 
let key = "age";
console.log(key in user); // Affiche : true
```

#### 2.3.2 Boucler sur les propriétés d'un objet
- En utilisant `… in …` :
```javascript
let user = { name: "John", age: 30 };
 
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
```
```json title="Résultat"
name : John
age : 30
```

- En utilisant `Object.keys(obj)` pour récupérer les clés :
```javascript
for (let key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}
```
```json title="Résultat"
name : John
age : 30
```

- En utilisant `Object.values(obj)` pour récupérer les valeurs des propriétés :
```javascript
for (let value of Object.values(user)) {
  console.log(value);
}
```
```json title="Résultat"
John
30
```

- En utilisant `Object.entries(obj)` pour récupérer les propriétés avec leurs valeurs :
```javascript
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
```
```json title="Résultat"
name : John
age : 30
```

#### 2.3.3 Copie
Copie des propriétés d’un (ou plusieurs) objet(s) vers un autre objet. Si la propriété existe déjà dans l’objet de destination, alors la valeur de cette propriété est remplacée.
```javascript
Object.assign(dest, [src1, src2, src3...])
```

Copie vers un objet vide :
```javascript
let clone = Object.assign({}, user);
```

S’il existe un ou plusieurs objets dans un objet, utiliser la copie en profondeur : https://lodash.com/docs#cloneDeep


#### 2.3.4 Chaînage optionnel `?.` 
La syntaxe `?.` revêt trois formes :
- `obj?.prop` : retourne `obj.prop` si l'objet existe, sinon `undefined`.
- `obj?.[prop]` : retourne `obj[prop]` if l'objet existe, sinon `undefined`.
- `obj?.method()` : exécute `obj.method()` si l'objet existe, sinon retourne `undefined`.


#### 2.3.5 Conversion d’un objet vers un type primitif
Vers une chaîne de caractères :
```javascript
let user = {
  name: "Robert"
}

console.log(user);
```

Vers un nombre :
```javascript
let delta = date1 - date2;
let greater = user1 > user2;
```

Vers un type "default" : Pas sûr du type.  
Le binaire "+" peut fonctionner à la fois avec des chaînes de caractères et des nombres.  
Si un objet est comparé à l’aide de "==" avec une chaîne de caractères, un nombre ou un symbole, il est également difficile de savoir quelle conversion doit être effectuée.

Pour choisir son propre traitement de conversion, il faut implémenter la méthode :
- `toString()` pour une conversion vers une chaîne de caractères
- `valueOf()` pour une conversion vers un nombre ou un type "default"


Il est possible d’utiliser les méthodes des tableaux sur les données d’un objet. Il faut transformer l’objet en tableau, puis effectuer les modifications souhaitées avec les méthodes choisies, puis ensuite re-transformer le tableau en objet.
```javascript
let prices = {
  banane: 1,
  orange: 2,
  viande: 4
};
 
let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
```

Quand une méthode d’un objet est appelé comme suit : `object.method()`, le `this` correspond à `object`.


#### 2.3.6 Attributs des propriétés
- `writable` : Si `true`, la valeur peut être modifiée
- `enumerable` : Si `true`, la propriété peut être listée dans une boucle
- `configurable` : Si `true`, la propriété peut être supprimée et ses attributs peuvent être modifiés

Les méthodes pour gérer les attributs des propriétés :
- `Object.getOwnPropertyDescriptor(obj, propertyName)` : permet de récupérer l’information sur les attributs d’une propriété propertyName présente dans un objet.
```javascript
let user = {
  name: "Robert"
}

console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, 'name'), null, 2));
```
```json title="Résultat"
{
  "value": "Robert",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
```

- `Object.defineProperty(obj, propertyName, descriptor)` : permet de modifier les attributs d’une propriété propertyName présente dans un objet.
```javascript
let user = {
  name: "Robert",
  age: 35
}
 
Object.defineProperty(user, "age", {
  "writable": false
});
 
user.age = 13;
console.log(user); // { name: 'Robert', age: 35 }
```

- `Object.getOwnPropertyDescriptors(obj)` : permet de récupérer l’information sur les attributs de toutes les propriétés présentes sur un objet.
```javascript
let user = {
  name: "Robert",
  age: 35
}

console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2));
```
```json title="Résultat"
{
  "name": {
    "value": "Robert",
    "writable": true,
    "enumerable": true,
    "configurable": true
  },
  "age": {
    "value": 35,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
}
```

- `Object.defineProperties(obj, descriptors)` : permet de modifier les attributs des propriétés présentes dans un objet.
```javascript
let user = {
  name: "Robert",
  age: 35
}
 
Object.defineProperties(user, {
  name: { writable: false },
  age: { writable: false },
});
 
user.name = "Paul";
user.age = 34;
console.log(user); // { name: 'Robert', age: 35 }
```

- `Object.preventExtensions(obj)` : permet d’interdire l’ajout de nouvelles propriétés à un objet.
- `Object.seal(obj)` : permet d’interdire l’ajout et la suppression de propriétés dans un objet.
- `Object.freeze(obj)` : permet d’interdire l’ajout, la modification et la suppression des propriétés existantes dans un objet.
- `Object.isExtensible(obj)` : retourne `false` si l’ajout de nouvelles propriétés est interdite, sinon `true`.
- `Object.isSealed(obj)` : retourne `true` si l’ajout de nouvelles propriétés et la suppression des propriétés existantes est interdite, sinon `false`.
- `Object.isFrozen(obj)` : retourne `true` si l’ajout, la modification et la suppression de propriétés est interdite, sinon `false`.

#### 2.3.7 Les getters et setters
```javascript
let user = {
  get name() {
    return this._name;
  },
 
  set name(value) {
    this._name = value;
  }
};
 
user.name = "Robert";
console.log(user.name); // Robert
```

<br/>

<!--
### 1.4 Fonctions d'interaction
La fonction `alert(message)` affiche une fenêtre modale avec le texte donné en paramètre.

La fonction `prompt(titre, [defaut])` affiche une fenêtre modale avec :
- un texte donné en paramètre (titre)
- un champ de saisie dont le contenu peut être pré-alimenté via le paramètre facultatif (defaut)
- deux boutons Ok et Annuler  

Cette fonction renvoie le contenu du champ de saisie.

La fonction `confirm(question)` affiche une fenêtre modale avec une question donnée en paramètre et deux boutons Ok et Annuler. Elle renvoie true ou false en fonction du choix de l’utilisateur.


### 1.5 Conversion
Les conversions d'un type vers un autre type sont effectuées avec les instructions suivantes :
- vers une chaîne de caractères : `String(valeur)`
- vers un nombre : `Number(valeur)`
  - Valeur de départ `undefined` ⇒ Valeur d'arrivée `NaN`
  - Valeur de départ `null` ⇒ Valeur d'arrivée 0
  - Valeur de départ `true` ⇒ Valeur d'arrivée 1
  - Valeur de départ `false` ⇒ Valeur d'arrivée 0
  - Valeur de départ de type `string` ⇒ Si chaîne vide, alors 0, sinon `NaN`
- vers un booléen : `Boolean(valeur)`
  - Valeur de départ 0, `null`, `undefined`, `NaN`, "" ⇒ Valeur d'arrivée `false`
  - Pour les autres valeurs ⇒ Valeur d'arrivée `true`


### 1.6 Opérateurs
L’opérateur "ou" représenté par `||` :
- Evalue les opérandes de gauche à droite
- Pour chaque opérande, les convertit en booléen. Si le résultat est vrai, alors la valeur originale de l’opérande est retournée
- Si tous les opérandes ont été évalués, c’est-à-dire qu’ils sont tous faux, alors le dernier opérande est retourné  

<br/>

L’opérateur "et" représenté par `&&` :
- Evalue les opérandes de gauche à droite
- Pour chaque opérande, les convertit en booléen. Si le résultat est faux, alors la valeur originale de l’opérande est retournée
- Si tous les opérandes ont été évalués, c’est-à-dire qu’ils sont tous vrais, alors le dernier opérande est retourné 

<br/>

L’opérateur de coalescence des nuls représenté par `??` :
- Ne fonctionne pas sur IE actuellement
- Renvoie son opérande de droite lorsque son opérande de gauche vaut `null` ou `undefined`
- Renvoie son opérande de gauche lorsque son opérande de gauche est `null` ou `undefined`
- Il ne faut pas utiliser cet opérateur avec les opérateurs `&&` et `||`

<br/>-->

:::tip Sources
https://javascript.info/  
https://developer.mozilla.org/fr/docs/Web/JavaScript
:::