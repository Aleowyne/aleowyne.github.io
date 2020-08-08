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
```js
let billion = 1e9;  // 1 milliard
let ms = 1e-6; // 0.000001
```

Nombres hexadécimaux, binaires, octaux :
```js
console.log(0xFF); // Hexadécimal
console.log(0b11111111); // Binaire
console.log(0o377); // Octal
```

Utilisation de `toString(base)` :
- La base va de 2 à 36
- Si la base choisie est 36, tous les chiffres et les caractères de l’alphabet latin sont utilisés (0-9 et a-z)
- Deux points après le nombre ou des parenthèse autour du nombre si ce n’est pas une variable qui est utilisée
```js
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
```js
let sum = 0.1 + 0.2;
console.log(sum); // Affiche : 0.30000000000000004
console.log(+sum.toFixed(2)); // Affiche : 0.3
```

La fonction `isNaN(value)` contrôle si une valeur n’est pas un nombre :
```js
console.log(isNaN("str")); // Affiche : true
```

La fonction `isFinite(value)` contrôle si une valeur est finie :
```js
console.log(isFinite("15")); // Affiche : true
```

La fonction `parseInt(str, base)` prend une chaîne de caractères en paramètre et renvoie un entier dans une base :
```js
console.log(parseInt("100px")); // Affiche : 100
```
La fonction `parseFloat(str)` prend une chaîne de caractères en paramètre et renvoie un nombre à virgule flottant :
```js
console.log(parseFloat("12.5em")); // Affiche : 12.5
```


### 2.2 Chaîne de caractères
Les backticks permettent d’intégrer des variables et des expressions dans une chaîne :
```js
console.log(`Le résultat est ${1 + 2}` ); // Affiche : Le résultat est 3
```

Ils permettent également d’écrire une chaîne de caractères sur plusieurs lignes :
```js
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
```js
for (let char of "Hello") {
  console.log(char); 
}
```


### 2.3 Objet
#### 2.3.1 Propriétés
Pour créer un objet vide :
```js
let user = new Object();
let user = {};
```

Création d’un objet avec des propriétés :
```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true 
};
```

Accès à la valeur d’une des propriétés :
```js
console.log(user.name); // Affiche : John
```

Ajout d’une propriété :
```js
user.isAdmin = true;
```

Suppression d’une propriété :
```js
delete user.age;
```

Pour les propriétés multi-mots : 
```js
let user = {};
 
// Alimentation de la propriété
user["likes birds"] = true;
 
// Récupération de la valeur de la propriété
console.log(user["likes birds"]); // Affiche : true
 
// Suppression de la propriété
delete user["likes birds"];
```

Les propriétés calculées :
```js
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
```js
let user = { name: "John", age: 30 };
console.log("age" in user); // Affiche : true
 
let key = "age";
console.log(key in user); // Affiche : true
```

#### 2.3.2 Boucler sur les propriétés d'un objet
- En utilisant `… in …` :
```js
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
```js
for (let key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}
```
```json title="Résultat"
name : John
age : 30
```

- En utilisant `Object.values(obj)` pour récupérer les valeurs des propriétés :
```js
for (let value of Object.values(user)) {
  console.log(value);
}
```
```json title="Résultat"
John
30
```

- En utilisant `Object.entries(obj)` pour récupérer les propriétés avec leurs valeurs :
```js
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
```js
Object.assign(dest, [src1, src2, src3...])
```

Copie vers un objet vide :
```js
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
```js
let user = {
  name: "Robert"
}

console.log(user);
```

Vers un nombre :
```js
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
```js
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
```js
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
```js
let user = {
  name: "Robert",
  age: 35
}
 
Object.defineProperty(user, "age", {
  "writable": false
});
 
user.age = 13;
console.log(user); // Affiche : { name: 'Robert', age: 35 }
```

- `Object.getOwnPropertyDescriptors(obj)` : permet de récupérer l’information sur les attributs de toutes les propriétés présentes sur un objet.
```js
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
```js
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
console.log(user); // Affiche : { name: 'Robert', age: 35 }
```

- `Object.preventExtensions(obj)` : permet d’interdire l’ajout de nouvelles propriétés à un objet.
- `Object.seal(obj)` : permet d’interdire l’ajout et la suppression de propriétés dans un objet.
- `Object.freeze(obj)` : permet d’interdire l’ajout, la modification et la suppression des propriétés existantes dans un objet.
- `Object.isExtensible(obj)` : retourne `false` si l’ajout de nouvelles propriétés est interdite, sinon `true`.
- `Object.isSealed(obj)` : retourne `true` si l’ajout de nouvelles propriétés et la suppression des propriétés existantes est interdite, sinon `false`.
- `Object.isFrozen(obj)` : retourne `true` si l’ajout, la modification et la suppression de propriétés est interdite, sinon `false`.

#### 2.3.7 Les getters et setters
```js
let user = {
  get name() {
    return this._name;
  },
 
  set name(value) {
    this._name = value;
  }
};
 
user.name = "Robert";
console.log(user.name); // Affiche : Robert
```


### 2.4 Tableau
Il y a deux syntaxes pour créer un tableau vide :
```js
let arr = new Array();
let arr = [];
```

Le premier élément d’un tableau commence à l’index 0.

Les propriétés et méthodes :
- `arr.length` : longueur du tableau
- `arr.push(item)` : ajoute un ou plusieurs élément(s) à la fin du tableau
- `arr.pop()` : renvoie et enlève le dernier élément du tableau
- `arr.unshift(item)` : ajoute un ou plusieurs élément(s) au début du tableau
- `arr.shift()` : renvoie et enlève le premier élément du tableau
- `arr.toString()` : transforme le tableau en une chaîne de caractères avec tous les éléments séparés par une virgule
- `arr.splice(start, [deleteCount, [item1, [item2 …]]])` : A partir de l’index `start` du tableau, suppression des `deleteCount` éléments (peut être égal à 0), puis insère les `item1`, `item2` … à leur place. Les index négatifs sont autorisés.
```js
let arr = new Array(1, 2, 3);
 
// Ajout
arr.splice(1, 0, 3, 4); // [1, 3, 4, 2, 3]
 
// Suppression
arr.splice(1, 2); // [1, 2, 3]
 
// Suppression + Ajout
arr.splice(1, 2, 3, 4); // [1, 3, 4]
```

- `arr.slice([start, [end]])` : 
  - Si au moins un index est renseigné, il copie le tableau de l’index `start` à l’index `end` non inclus. Les index négatifs sont autorisés.
  - Si aucun index n’est renseigné, il permet de créer une copie du tableau.

- `arr.concat([value1, [value2 …]])` : Créé un nouveau tableau constitué des éléments du tableau d’origine et des valeurs à ajouter. Le tableau d’origine n’est pas modifié.

- `arr.forEach((item, [index, array]) => { … })` : Exécute une fonction une fois sur chaque élément du tableau.
```js
let arr = new Array(1, 2, 3);
 
arr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```
```js title="Résultat"
1 is at index 0 in 1,2,3
2 is at index 1 in 1,2,3
3 is at index 2 in 1,2,3
```

- `arr.indexOf(item, [index])` : renvoie la position de la première occurrence de l'élément dans le tableau à partir d’un index (paramètre facultatif). Si l’élément n’est pas présent, la fonction renvoie -1.
- `arr.lastIndexOf(item, [index])` : le même fonctionnement que `indexOf()` mais en partant de la fin du tableau.
- `arr.includes(item, [index])` : renvoie `true` si l’élément est présent dans le tableau à partir d’un index (paramètre facultatif), sinon renvoie `false`.
- `arr.find(item, [index, array]) => { … })` : renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction passée en argument.
- `arr.findIndex(item, [index, array]) => { … })` : renvoie la position du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction passée en argument. Si l’élément n’est pas trouvé, la fonction renvoie -1.
- `arr.filter(item, [index, array]) => { … })` : crée un nouveau tableau avec tous les éléments trouvés dans le tableau qui respectent la condition donnée par la fonction passée en argument.
- `arr.map(item, [index, array]) => { … })` : crée un nouveau tableau avec les résultats de l’appel d’une fonction fournie sur chaque élément du tableau.
- `arr.sort((a, b) => { ... })` : trie les éléments du tableau. Par défaut, le tri s’effectue sur les éléments convertis en chaîne de caractères.
```js
// Trier des nombres
arr.sort((a, b) => a - b);
```

- `arr.reverse()` : inverse l’ordre des éléments dans le tableau.
- `arr.join([separator])` : renvoie une chaîne de caractères concaténant les éléments du tableau avec le séparateur.
- `arr.reduce((accumulator, item, [index, [array]]) => { … }, initial)` : applique une fonction à chaque élément du tableau afin de réduire le tableau à une seule valeur `accumulator`, qui est à la valeur de retour. Le paramètre facultatif `initial` permet de définir la valeur initiale de `accumulator`.
- `arr.reduceRight()` fait le même chose, mais en lisant les valeurs du tableau de la droite vers la gauche.

Liste des méthodes : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

Boucler sur un tableau :
- Pour avoir accès aux index et aux éléments :
```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

- Pour avoir accès seulement aux éléments :
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```


### 2.5 Symbole
Un symbole est un type de données primitif représentant une donnée unique et inchangeable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet.
```js
let id = Symbol("12");
console.log(id.toString()); // Affiche : Symbol(12)
console.log(id.description); // Affiche : 12
```
Comparaison entre une propriété "id" et un symbole "id" :
```js
let id = Symbol("id");
let user = { name: "John" };
 
// Ajout d'un identifiant unique à l’objet user
user[id] = "12";
 
// Ajout d'une propriété "id" à l’objet user
user.id = "Un identifiant";
 
console.log(user[id]); // Affiche : 12
console.log(user.id); // Affiche : Un identifiant
```

Les symboles ne sont pas pris en compte lors de l'utilisation de la boucle `for … in`, `Object.keys()` et `JSON.stringify()`.

Les symboles globaux :
```js
let sym = Symbol.for("name");
console.log(Symbol.keyFor(sym)); // Affiche : name
```

Les méthodes pour les symboles globaux : https://tc39.es/ecma262/#sec-well-known-symbols


### 2.6 Map
L’objet `Map` permet de stocker des couples (clé, valeur). Les clés peuvent être de n’importe quel type de données.

La création d’un objet `Map` peut se faire ainsi :
```js
// Initialisation d'un objet Map
let legumes = new Map();
console.log(legumes); // Affiche : Map(0) {}
 
// Initialisation d'un objet Map à partir d'un Array
const fruitsArray = [
  [1, 'Banane'],
  [2, 'Poire'],
  [3, 'Pomme'],
];
 
let fruits = new Map(fruitsArray);
console.log(fruits); // Affiche : Map(3) { 1 => 'Banane', 2 => 'Poire', 3 => 'Pomme' }
```

<br/>

Les méthodes disponibles sont les suivantes :
- `map.set(key, value)` : Stocke un nouveau couple (clé, valeur)
```js
let fruits = new Map();
fruits.set(1, "Pomme");
fruits.set(2, "Poire");
console.log(fruits); // Affiche : Map(2) { 1 => 'Pomme', 2 => 'Poire' }
```

Il est possible de chaîner les appels de la méthode :
```js
fruits.set(1, "Pomme")
      .set(2, "Poire");
```

- `map.get(key)` : Récupère la valeur à partir d'une clé
```js
console.log(fruits.get(1)); // Affiche : Pomme
console.log(fruits.get(3)); // Affiche : undefined
```

- `map.has(key)` : Retourne `true` si la clé existe, sinon `false`
```js
console.log(fruits.has(2)); // Affiche : true
console.log(fruits.has("Poire")); // Affiche : false
```

- `map.size` : Retourne la taille de l'objet `Map`
```js
console.log(fruits.size); // Affiche : 2
```

- `map.delete(key)` : Supprime le couple (clé, valeur) à partir d'une clé
```js
fruits.delete(1);
console.log(fruits); // Affiche : Map(1) { 2 => 'Poire' }
```

- `map.clear()` : Vide l'objet `Map`
```js
fruits.clear();
console.log(fruits); // Affiche : Map(0) {}
```

<br/>

L’itération sur un objet `Map` peut se faire de différentes manières :
- En utilisant `forEach()` :
```js
fruits.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});
```

- En utilisant la déstructuration d’`Array` :
```js
for (let [key, value] of fruits) {
  console.log(`${key} : ${value}`);
}
```

- Boucle sur les clés :
```js
for (let key of fruits.keys()) {
  console.log(key);
}
```

- Boucle sur les valeurs :
```js
for (let value of fruits.values()) {
  console.log(value);
}
```

<br/>

Pour transformer un objet simple vers un objet `Map` :
```js
let map = new Map(Object.entries(obj));
```

Pour transformer un objet `Map` vers un objet simple :
```js
let obj = Object.fromEntries(map);
```


### 2.7 Set
L’objet `Set` permet de stocker un ensemble de valeurs uniques.

La création d’un objet `Set` peut se faire ainsi :
```js
// Initialisation d'un objet Set
let legumes = new Set();
console.log(legumes); // Affiche : Set(0) {}
 
// Initialisation d'un objet Set à partir d'un Array
const fruitsArray = ['Banane', 'Poire', 'Pomme'];
let fruits = new Set(fruitsArray);
console.log(fruits); // Affiche : Set(3) { 'Banane', 'Poire', 'Pomme' }
```

<br/>

Les méthodes disponibles sont les suivantes :
- `set.add(value)` : Stocke une nouvelle valeur. Elle n’est pas ajoutée si elle existe déjà.
```js
let fruits = new Set();
fruits.add("Pomme");
fruits.add("Poire");
fruits.add("Pomme");
console.log(fruits); // Affiche : Set(2) { 'Pomme', 'Poire' }
```

Il est possible de chaîner les appels de la méthode :
```js
fruits.add("Pomme")
      .add("Poire");
```

- `set.has(value)` : Retourne `true` si la valeur existe, sinon `false`
```js
console.log(fruits.has("Pomme")); // Affiche : true
console.log(fruits.has("Banane")); // Affiche : false
```

- `set.size` : Retourne la taille de l'objet `Set`
```js
console.log(fruits.size); // Affiche : 2
```

- `set.delete(value)` : Supprime la valeur
```js
fruits.delete("Pomme");
console.log(fruits); // Affiche : Set(1) { 'Poire' }
```

- `set.clear()` : Vide l'objet `Set`
```js
fruits.clear();
console.log(fruits); // Affiche : Set(0) {}
```

<br/>

L’itération sur un objet `Set` peut se faire de différentes manières :
- En utilisant `forEach()` :
```js
fruits.forEach((value, valueAgain, set) => {
  console.log(value);
})
```

- En utilisant `for … of` :
```js
for (let value of fruits) {
  console.log(value);
}
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