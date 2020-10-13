---
id: javascript
title: JavaScript
sidebar_label: JavaScript
---

:::info
En cours de rédaction : commencé le 12/07/2020.
:::

## 1. Informations en vrac
Les spécifications ECMA sont disponibles via ce lien : https://www.ecma-international.org/publications/standards/Ecma-262.htm  
Il n'est plus utile d'utiliser l’attribut `type` dans la balise `<script>`.  
La directive `"use scrict";` peut être ajoutée au début des fichiers js.  
Le mot-clé `var` n’a plus besoin d’être utilisé.  
Le mot-clé `debugger` est utilisé pour mettre un point d’arrêt.  

Les règles de nommage que j'ai choisies :
- Variables et constantes : camelCase
- Constantes qui seront utilisées dans tout le script et la plupart du temps créées au début du script (Exemple : COLOR_RED) : majuscule et underscore
- Fonctions : camelCase


## 2. Types de données
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
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(0xFF); // Hexadécimal
console.log(0b11111111); // Binaire
console.log(0o377); // Octal
```
</div>
<div class="code-right">

```txt title="Résultat"
255
255
255
```
</div>
</div>


Utilisation de `toString(base)` :
- La base va de 2 à 36
- Si la base choisie est 36, tous les chiffres et les caractères de l’alphabet latin sont utilisés (0-9 et a-z)
- Deux points après le nombre ou des parenthèses autour du nombre si ce n’est pas une variable qui est utilisée

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(123456..toString(36));
console.log((123456).toString(36));
```
</div>
<div class="code-right">

```txt title="Résultat"
2n9c
2n9c
```
</div>
</div>

Les fonctions mathématiques :
- `Math.floor(n)` : Arrondi à l’entier inférieur
- `Math.ceil(n)` : Arrondi à l’entier supérieur
- `Math.round(n)` : Arrondi à l’entier le plus proche
- `Math.trunc(n)` : Suppression des décimales
- `Math.random()` : Un nombre aléatoire entre 0 et 1
- `Math.max(n1, n2, n3 …)` et `Math.min(n1, n2, n3 …)` : Le maximum et le minimum parmi une liste de nombres
- `Math.pow(n, p)` : Le nombre n à la puissance p

<br/>

Les calculs imprécis :
<div class="container-code">
<div class="code-left">

```js title="Code"
let sum = 0.1 + 0.2;
console.log(sum);
console.log(+sum.toFixed(2)); 
```
</div>
<div class="code-right">

```txt title="Résultat"
0.30000000000000004
0.3
```
</div>
</div>

La fonction `isNaN(value)` contrôle si une valeur n’est pas un nombre :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(isNaN("str"));
```
</div>
<div class="code-right">

```txt title="Résultat"
true
```
</div>
</div>

La fonction `isFinite(value)` contrôle si une valeur est finie :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(isFinite("15"));
```
</div>
<div class="code-right">

```txt title="Résultat"
true
```
</div>
</div>

La fonction `parseInt(str, base)` prend une chaîne de caractères en paramètre et renvoie un entier dans une base :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(parseInt("100px"));
```
</div>
<div class="code-right">

```txt title="Résultat"
100
```
</div>
</div>

La fonction `parseFloat(str)` prend une chaîne de caractères en paramètre et renvoie un nombre à virgule flottant :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(parseFloat("12.5em"));
```
</div>
<div class="code-right">

```txt title="Résultat"
12.5
```
</div>
</div>


### 2.2 Chaîne de caractères
Les backticks permettent d’intégrer des variables et des expressions dans une chaîne :

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(`Le résultat est ${1 + 2}` );
```
</div>
<div class="code-right">

```txt title="Résultat"
Le résultat est 3
```
</div>
</div>

Ils permettent également d’écrire une chaîne de caractères sur plusieurs lignes :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(`ceci
est
un message
sur plusieurs lignes`);
```
</div>
<div class="code-right">

```txt title="Résultat"
ceci
est
un message
sur plusieurs lignes
```
</div>
</div>

Il est possible d’utiliser les guillemets simples et doubles avec des caractères spéciaux :
- `\n` : Nouvelle ligne
- `\r` : Retour chariot. Utilisé avec \n pour sauter une ligne (\r\n).
- `\'` ou `\"` : Guillemets
- `\\` : Antislash
- `\t` : Tabulation
- `\xNN` : Caractère unicode avec le code hexadécimal NN
- `\uNNNN` : Symbole unicode avec le code hexadécimal NNNN avec un encodage UTF-16
- `\u{NNNNNN}` : Symbole unicode avec le code hexadécimal NNNNNN (1 à 6 caractères) avec un encodage UTF-32

<br/>

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
<div class="container-code">
<div class="code-left">

```js title="Code"
for (let char of "Bonjour") {
  console.log(char); 
}
```
</div>
<div class="code-right">

```txt title="Résultat"
B
o
n
j
o
u
r
```
</div>
</div>


### 2.3 Objet
#### 2.3.1 Propriétés
Pour créer un objet vide :
```js
let animal = new Object();
let animal = {};
```

Création d’un objet avec des propriétés :
```js
let animal = {
  name: "Sidonie",
  age: 5,
  "aime manger": true 
};
```

Accès à la valeur d’une des propriétés :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(animal.name);
```
</div>
<div class="code-right">

```txt title="Résultat"
Sidonie
```
</div>
</div>

Ajout d’une propriété :
```js
animal.isAlive = true;
```

Suppression d’une propriété :
```js
delete animal.age;
```

Pour les propriétés multi-mots : 
<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {};
 
// Alimentation de la propriété
animal["aime manger"] = true;
 
// Récupération de la valeur de la propriété
console.log(animal["aime manger"]);
 
// Suppression de la propriété
delete animal["aime manger"];
```
</div>
<div class="code-right">

```txt title="Résultat"
true
```
</div>
</div>

Les propriétés calculées :
<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {};
let key = "fly";
animal[key] = true;
console.log(animal.fly);
 
let fruit = "banana";
let bag = {
  [fruit]: 6, 
};
console.log(bag.banana);
```
</div>
<div class="code-right">

```txt title="Résultat"
true
6
```
</div>
</div>

Pour vérifier qu’une propriété existe dans un objet :
<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = { name: "Sidonie", age: 5 };
console.log("age" in animal);
 
let key = "age";
console.log(key in animal);
```
</div>
<div class="code-right">

```txt title="Résultat"
true
true
```
</div>
</div>


#### 2.3.2 Boucler sur les propriétés d'un objet
- En utilisant `… in …` :

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = { name: "Sidonie", age: 5 };
 
for (let key in animal) {
  console.log(`${key} : ${animal[key]}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
name : Sidonie
age : 5
```
</div>
</div>

- En utilisant `Object.keys(obj)` pour récupérer les clés :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let key of Object.keys(animal)) {
  console.log(`${key} : ${animal[key]}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
name : Sidonie
age : 5
```
</div>
</div>

- En utilisant `Object.values(obj)` pour récupérer les valeurs des propriétés :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let value of Object.values(animal)) {
  console.log(value);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Sidonie
5
```
</div>
</div>

- En utilisant `Object.entries(obj)` pour récupérer les propriétés avec leurs valeurs :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let [key, value] of Object.entries(animal)) {
  console.log(`${key} : ${value}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
name : Sidonie
age : 5
```
</div>
</div>


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
let animal = {
  name: "Sidonie"
}
 
console.log(animal);
```

Vers un nombre :
```js
let delta = date1 - date2;
let greater = animal1 > animal2;
```

Vers un type "default" : Pas sûr du type.  
Le binaire "+" peut fonctionner à la fois avec des chaînes de caractères et des nombres.  
Si un objet est comparé à l’aide de "==" avec une chaîne de caractères, un nombre ou un symbole, il est également difficile de savoir quelle conversion doit être effectuée.

Pour choisir son propre traitement de conversion, il faut implémenter la méthode :
- `toString()` pour une conversion vers une chaîne de caractères
- `valueOf()` pour une conversion vers un nombre ou un type "default"


Il est possible d’utiliser les méthodes des tableaux sur les données d’un objet. Il faut transformer l’objet en tableau, puis effectuer les modifications souhaitées avec les méthodes choisies, puis ensuite re-transformer le tableau en objet.
<div class="container-code">
<div class="code-left">

```js title="Code"
let nbAnimals = {
  hen: 4,
  sheep: 2,
  rooster: 1
};
 
let addAnimals = Object.fromEntries(
  Object.entries(nbAnimals).map(([key, value]) => [key, value + 1])
);

console.log(addAnimals);
```
</div>
<div class="code-right">

```txt title="Résultat"
{ hen: 5, sheep: 3, rooster: 2 }
```
</div>
</div>

Quand une méthode d’un objet est appelé comme suit : `object.method()`, le `this` correspond à `object`.


#### 2.3.6 Attributs des propriétés
- `writable` : Si `true`, la valeur peut être modifiée
- `enumerable` : Si `true`, la propriété peut être listée dans une boucle
- `configurable` : Si `true`, la propriété peut être supprimée et ses attributs peuvent être modifiés

Les méthodes pour gérer les attributs des propriétés :
- `Object.getOwnPropertyDescriptor(obj, propertyName)` : permet de récupérer l’information sur les attributs d’une propriété propertyName présente dans un objet.

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie"
}

console.log(
  JSON.stringify(
    Object.getOwnPropertyDescriptor(animal, 'name'), null, 2
  )
);
```
</div>
<div class="code-right">

```json title="Résultat"
{
  "value": "Sidonie",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
```
</div>
</div>

- `Object.defineProperty(obj, propertyName, descriptor)` : permet de modifier les attributs d’une propriété propertyName présente dans un objet.

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5
}
 
Object.defineProperty(animal, "age", {
  "writable": false
});
 
animal.age = 6;
console.log(animal);
```
</div>
<div class="code-right">

```txt title="Résultat"
{ name: 'Sidonie', age: 5 }
```
</div>
</div>

- `Object.getOwnPropertyDescriptors(obj)` : permet de récupérer l’information sur les attributs de toutes les propriétés présentes sur un objet.

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5
}

console.log(
  JSON.stringify(
    Object.getOwnPropertyDescriptors(animal), null, 2
  )
);
```
</div>
<div class="code-right">

```json title="Résultat"
{
  "name": {
    "value": "Sidonie",
    "writable": true,
    "enumerable": true,
    "configurable": true
  },
  "age": {
    "value": 5,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
}
```
</div>
</div>

- `Object.defineProperties(obj, descriptors)` : permet de modifier les attributs des propriétés présentes dans un objet.

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5
}
 
Object.defineProperties(animal, {
  name: { writable: false },
  age: { writable: true},
});
 
animal.name = "Aglaé";
animal.age = 6;
console.log(animal); 
```
</div>
<div class="code-right">

```txt title="Résultat"
{ name: 'Sidonie', age: 6 }
```
</div>
</div>

- `Object.preventExtensions(obj)` : permet d’interdire l’ajout de nouvelles propriétés à un objet.
- `Object.seal(obj)` : permet d’interdire l’ajout et la suppression de propriétés dans un objet.
- `Object.freeze(obj)` : permet d’interdire l’ajout, la modification et la suppression des propriétés existantes dans un objet.
- `Object.isExtensible(obj)` : retourne `false` si l’ajout de nouvelles propriétés est interdite, sinon `true`.
- `Object.isSealed(obj)` : retourne `true` si l’ajout de nouvelles propriétés et la suppression des propriétés existantes est interdite, sinon `false`.
- `Object.isFrozen(obj)` : retourne `true` si l’ajout, la modification et la suppression de propriétés est interdite, sinon `false`.

#### 2.3.7 Les getters et setters

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  get name() {
    return this._name;
  },
 
  set name(value) {
    this._name = value;
  }
};
 
animal.name = "Sidonie";
console.log(animal.name); 
```
</div>
<div class="code-right">

```txt title="Résultat"
Sidonie
```
</div>
</div>


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

<div class="container-code">
<div class="code-left">

```js title="Code"
let arr = new Array(1, 2, 3);
 
// Ajout de [3, 4] à partir de l'index 1
arr.splice(1, 0, 3, 4); 
console.log(arr);
 
// Suppression de deux valeurs à partir de l'index 1
arr.splice(1, 2); 
console.log(arr);
 
// Suppression de deux valeurs à partir de l'index 1 + Ajout de [3,4] à partir de l'index 1
arr.splice(1, 2, 3, 4); 
console.log(arr);
```
</div>
<div class="code-right">

```txt title="Résultat"
[ 1, 3, 4, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 3, 4 ]
```
</div>
</div>

- `arr.slice([start, [end]])` : 
  - Si au moins un index est renseigné, il copie le tableau de l’index `start` à l’index `end` non inclus. Les index négatifs sont autorisés.
  - Si aucun index n’est renseigné, il permet de créer une copie du tableau.

- `arr.concat([value1, [value2 …]])` : Créé un nouveau tableau constitué des éléments du tableau d’origine et des valeurs à ajouter. Le tableau d’origine n’est pas modifié.

- `arr.forEach((item, [index, array]) => { … })` : Exécute une fonction une fois sur chaque élément du tableau.

<div class="container-code">
<div class="code-left">

```js title="Code"
let arr = new Array(1, 2, 3);
 
arr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```
</div>
<div class="code-right">

```txt title="Résultat"
1 is at index 0 in 1,2,3
2 is at index 1 in 1,2,3
3 is at index 2 in 1,2,3
```
</div>
</div>

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

<div class="container-code">
<div class="code-left">

```js title="Code"
let arr = new Array(1, 2, 3);

for (let i = 0; i < arr.length; i++) {
  console.log(`Index ${i} : ${arr[i]}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Index 0 : 1
Index 1 : 2
Index 2 : 3
```
</div>
</div>

- Pour avoir accès seulement aux éléments :

<div class="container-code">
<div class="code-left">

```js title="Code"
let animals = new Array("Sidonie", "Aglaé", "Milou");

for (let animal of animals) {
  console.log(animal);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Sidonie
Aglaé
Milou
```
</div>
</div>

### 2.5 Symbole
Un symbole est un type de données primitif représentant une donnée unique et inchangeable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet.
<div class="container-code">
<div class="code-left">

```js title="Code"
let id = Symbol("12");
console.log(id.toString());
console.log(id.description);
```
</div>
<div class="code-right">

```txt title="Résultat"
Symbol(12)
12
```
</div>
</div>

Comparaison entre une propriété "id" et un symbole "id" :
<div class="container-code">
<div class="code-left">

```js title="Code"
let id = Symbol("id");
let animal = { name: "Sidonie" };
 
// Ajout d'un identifiant unique à l’objet animal
animal[id] = "12";
 
// Ajout d'une propriété "id" à l’objet animal
animal.id = "Un identifiant";
 
console.log(animal[id]);
console.log(animal.id);
```
</div>
<div class="code-right">

```txt title="Résultat"
12
Un identifiant
```
</div>
</div>

Les symboles ne sont pas pris en compte lors de l'utilisation de la boucle `for … in`, `Object.keys()` et `JSON.stringify()`.

Les symboles globaux :
<div class="container-code">
<div class="code-left">

```js title="Code"
let sym = Symbol.for("name");
console.log(Symbol.keyFor(sym)); // Affiche : name
```
</div>
<div class="code-right">

```txt title="Résultat"
name
```
</div>
</div>

Les méthodes pour les symboles globaux : https://tc39.es/ecma262/#sec-well-known-symbols


### 2.6 Map
L’objet `Map` permet de stocker des couples (clé, valeur). Les clés peuvent être de n’importe quel type de données.

La création d’un objet `Map` peut se faire ainsi :
<div class="container-code">
<div class="code-left">

```js title="Code"
// Initialisation d'un objet Map
let legumes = new Map();
console.log(legumes);
 
// Initialisation d'un objet Map à partir d'un Array
const fruitsArray = [
  [1, 'Banane'],
  [2, 'Poire'],
  [3, 'Pomme'],
];
 
let fruits = new Map(fruitsArray);
console.log(fruits);
```
</div>
<div class="code-right">

```bash title="Résultat"
Map(0) {}
Map(3) { 1 => 'Banane', 2 => 'Poire', 3 => 'Pomme' }
```
</div>
</div>

<br/>

Les méthodes disponibles sont les suivantes :
- `map.set(key, value)` : Stocke un nouveau couple (clé, valeur)

<div class="container-code">
<div class="code-left">

```js title="Code"
let fruits = new Map();
fruits.set(1, "Pomme");
fruits.set(2, "Poire");
console.log(fruits);
```
</div>
<div class="code-right">

```bash title="Résultat"
Map(2) { 1 => 'Pomme', 2 => 'Poire' }
```
</div>
</div>

Il est possible de chaîner les appels de la méthode :
```js
fruits.set(1, "Pomme")
      .set(2, "Poire");
```

<br/>

- `map.get(key)` : Récupère la valeur à partir d'une clé

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(fruits.get(1)); 
console.log(fruits.get(3)); 
```
</div>
<div class="code-right">

```txt title="Résultat"
Pomme
undefined
```
</div>
</div>

- `map.has(key)` : Retourne `true` si la clé existe, sinon `false`

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(fruits.has(2));
console.log(fruits.has("Poire"));
```
</div>
<div class="code-right">

```txt title="Résultat"
true
false
```
</div>
</div>

- `map.size` : Retourne la taille de l'objet `Map`

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(fruits.size);
```
</div>
<div class="code-right">

```txt title="Résultat"
2
```
</div>
</div>

- `map.delete(key)` : Supprime le couple (clé, valeur) à partir d'une clé

<div class="container-code">
<div class="code-left">

```js title="Code"
fruits.delete(1);
console.log(fruits);
```
</div>
<div class="code-right">

```bash title="Résultat"
Map(1) { 2 => 'Poire' }
```
</div>
</div>

- `map.clear()` : Vide l'objet `Map`

<div class="container-code">
<div class="code-left">

```js title="Code"
fruits.clear();
console.log(fruits);
```
</div>
<div class="code-right">

```bash title="Résultat"
Map(0) {}
```
</div>
</div>

L’itération sur un objet `Map` peut se faire de différentes manières :
- En utilisant `forEach()` :

<div class="container-code">
<div class="code-left">

```js title="Code"
let fruits = new Map();
fruits.set(1, "Pomme")
      .set(2, "Poire");

fruits.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});
```
</div>
<div class="code-right">

```txt title="Résultat"
1 : Pomme
2 : Poire
```
</div>
</div>

- En utilisant la déstructuration d’`Array` :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let [key, value] of fruits) {
  console.log(`${key} : ${value}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
1 : Pomme
2 : Poire
```
</div>
</div>

- Boucle sur les clés :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let key of fruits.keys()) {
  console.log(key);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
1
2
```
</div>
</div>

- Boucle sur les valeurs :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let value of fruits.values()) {
  console.log(value);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Pomme
Poire
```
</div>
</div>


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
<div class="container-code">
<div class="code-left">

```js title="Code"
// Initialisation d'un objet Set
let legumes = new Set();
console.log(legumes);
 
// Initialisation d'un objet Set à partir d'un Array
const fruitsArray = ['Banane', 'Poire', 'Pomme'];
let fruits = new Set(fruitsArray);
console.log(fruits);
```
</div>
<div class="code-right">

```bash title="Résultat"
Set(0) {}
Set(3) { 'Banane', 'Poire', 'Pomme' }
```
</div>
</div>

Les méthodes disponibles sont les suivantes :
- `set.add(value)` : Stocke une nouvelle valeur. Elle n’est pas ajoutée si elle existe déjà.

<div class="container-code">
<div class="code-left">

```js title="Code"
let fruits = new Set();
fruits.add("Pomme");
fruits.add("Poire");
fruits.add("Pomme");
console.log(fruits); 
```
</div>
<div class="code-right">

```bash title="Résultat"
Set(2) { 'Pomme', 'Poire' }
```
</div>
</div>

Il est possible de chaîner les appels de la méthode :
```js
fruits.add("Pomme")
      .add("Poire");
```

<br/>

- `set.has(value)` : Retourne `true` si la valeur existe, sinon `false`

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(fruits.has("Pomme")); 
console.log(fruits.has("Banane")); 
```
</div>
<div class="code-right">

```txt title="Résultat"
true
false
```
</div>
</div>

- `set.size` : Retourne la taille de l'objet `Set`

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(fruits.size);
```
</div>
<div class="code-right">

```txt title="Résultat"
2
```
</div>
</div>

- `set.delete(value)` : Supprime la valeur

<div class="container-code">
<div class="code-left">

```js title="Code"
fruits.delete("Pomme");
console.log(fruits);
```
</div>
<div class="code-right">

```bash title="Résultat"
Set(1) { 'Poire' }
```
</div>
</div>

- `set.clear()` : Vide l'objet `Set`

<div class="container-code">
<div class="code-left">

```js title="Code"
fruits.clear();
console.log(fruits);
```
</div>
<div class="code-right">

```txt title="Résultat"
Set(0) {}
```
</div>
</div>


L’itération sur un objet `Set` peut se faire de différentes manières :
- En utilisant `forEach()` :

<div class="container-code">
<div class="code-left">

```js title="Code"
let fruits = new Set();
fruits.add("Pomme")
      .add("Poire");

fruits.forEach((value, valueAgain, set) => {
  console.log(value);
})
```
</div>
<div class="code-right">

```txt title="Résultat"
Pomme
Poire
```
</div>
</div>

- En utilisant `for … of` :

<div class="container-code">
<div class="code-left">

```js title="Code"
for (let fruit of fruits) {
  console.log(fruit);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Pomme
Poire
```
</div>
</div>


### 2.8 WeakMap
L’objet `WeakMap` représente une collection de couples (clé, valeur) dont les clés sont des objets et pour lesquelles les références sont faibles. Il n’est donc pas possible d’énumérer les clés de ce type d’objet. Si un objet lié à une clé du `WeakMap` est supprimé de la mémoire, alors le couple (clé, valeur) dans l’objet `WeakMap` est supprimé automatiquement.

La création d’un objet `WeakMap` s’effectue de la manière suivante :
```js
let weakMap = new WeakMap();
```

Les méthodes disponibles sont les suivantes :
- `weakMap.set(key, value)` : Stocke un nouveau couple (clé, valeur)
```js
let animals = new WeakMap();
let sidonie = { name : "Sidonie" };
let aglae = { name : "Aglaé" };
 
animals.set(sidonie, 1);
animals.set(aglae, 4);
```

Il est possible de chaîner les appels de la méthode :
```js
animals.set(sidonie, 1)
       .set(aglae, 4);
```

- `weakMap.get(key)` : Récupère la valeur à partir d'une clé

<div class="container-code">
<div class="code-left">

```js title="Code"
let animalsTwo = new WeakMap();
console.log(animals.get(sidonie));
console.log(animalsTwo.get(sidonie)); 
```
</div>
<div class="code-right">

```txt title="Résultat"
1
undefined
```
</div>
</div>

- `weakMap.has(key)` : Retourne `true` si la clé existe, sinon `false`

<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(animals.has(sidonie)); 
console.log(animalsTwo.has(sidonie)); 
```
</div>
<div class="code-right">

```txt title="Résultat"
true
false
```
</div>
</div>

- `weakMap.delete(key)` : Supprime le couple (clé, valeur) à partir d'une clé

<div class="container-code">
<div class="code-left">

```js title="Code"
animals.delete(sidonie);
console.log(animals.has(sidonie));
```
</div>
<div class="code-right">

```txt title="Résultat"
false
```
</div>
</div>


### 2.9 WeakSet
L’objet `WeakSet` permet de créer un ensemble dont les objets, uniques, sont contenus avec des références faibles. Il n’est donc pas possible d’énumérer les objets d’un `WeakSet`. Si un objet lié à un des objets du `WeakSet` est supprimé de la mémoire, alors cet objet est supprimé automatiquement dans le `WeakSet`.

La création d’un objet `WeakSet` s’effectue de la manière suivante :
```js
let weakSet = new WeakSet();
```

Les méthodes disponibles sont les suivantes :
- `weakSet.add(value)` : Stocke une nouvelle valeur. Elle n’est pas ajoutée si elle existe déjà.
```js
let animals = new WeakSet();
let sidonie = { name : "Sidonie" };
let aglae = { name : "Aglaé" };
 
animals.add(sidonie);
animals.add(aglae);
```

Il est possible de chaîner les appels de la méthode :
```js
animals.add(sidonie)
       .add(aglae);
```

- `weakSet.has(value)` : Retourne `true` si la valeur existe, sinon `false`

<div class="container-code">
<div class="code-left">

```js title="Code"
let animalsTwo = new WeakMap();
console.log(animals.has(sidonie));
console.log(animalsTwo.has(sidonie)); 
```
</div>
<div class="code-right">

```txt title="Résultat"
true
false
```
</div>
</div>

- `weakSet.delete(value)` : Supprime la valeur

<div class="container-code">
<div class="code-left">

```js title="Code"
animals.delete(sidonie);
console.log(animals.has(sidonie));
```
</div>
<div class="code-right">

```txt title="Résultat"
false
```
</div>
</div>



### 2.10 Déstructuration
La déstructuration permet d’extraire des données d’un tableau ou d’un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l’objet.

Exemple avec un tableau :
<div class="container-code">
<div class="code-left">

```js title="Code"
let arr = ["Paul", "Dubois"]
let [firstname, lastname] = arr;
console.log(`${firstname} - ${lastname}`);
```
</div>
<div class="code-right">

```txt title="Résultat"
Paul - Dubois
```
</div>
</div>

Des éléments peuvent être ignorés :
<div class="container-code">
<div class="code-left">

```js title="Code"
let [firstname, , profession] = ["Paul", "Dubois", "Plombier", "France"];
console.log(`${firstname} - ${profession}`);
```
</div>
<div class="code-right">

```txt title="Résultat"
Paul - Plombier
```
</div>
</div>


La partie droite peut être un itérable :
```js
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
```

La partie gauche peut être n’importe quel type de données assignable :
<div class="container-code">
<div class="code-left">

```js title="Code"
let user = {};
[user.firstname, user.lastname] = "Paul Dubois".split(' ');
console.log(user); 
```
</div>
<div class="code-right">

```bash title="Résultat"
{ firstname: 'Paul', lastname: 'Dubois' }
```
</div>
</div>


Le paramètre de reste, représenté par 3 points ```...```, permet de représenter un nombre indéfini d’arguments sous forme d’un tableau :
<div class="container-code">
<div class="code-left">

```js title="Code"
let [firstname, lastname, ...rest] = ["Paul", "Dubois", "Plombier", "France"];
console.log(rest);
```
</div>
<div class="code-right">

```bash title="Résultat"
[ 'Plombier', 'France' ]
```
</div>
</div>


Une valeur par défaut peut être utilisée :
<div class="container-code">
<div class="code-left">

```js title="Code"
let [firstname, lastname, profession, country = "France"] = ["Paul", "Dubois", "Plombier"];
console.log(country);
```
</div>
<div class="code-right">

```txt title="Résultat"
France
```
</div>
</div>


Exemple avec un objet :
<div class="container-code">
<div class="code-left">

```js title="Code"
let user = {
  name: "Paul",
  age: 30
};
 
let {name: n, age, country = "France"} = user;
console.log(`${n} - ${age} - ${country}`); 
 
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Paul - 30 - France
name : Paul
age : 30
```
</div>
</div>

Exemple avec un objet `Map` :
<div class="container-code">
<div class="code-left">

```js title="Code"
let user = new Map();
user.set("name", "Paul")
    .set("age", "30");
 
for (let [key, value] of user) {
  console.log(`${key} : ${value}`);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
name : Paul
age : 30
```
</div>
</div>

Exemple avec les paramètres d’une fonction :
<div class="container-code">
<div class="code-left">

```js title="Code"
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};
 
function showMenu({title = "Untitled", width: w = 200, height: h = 100, items = []}) {
  console.log(`${title} ${w} ${h}`); // Affiche : My menu 200 100    
  console.log(items); // Affiche : [ 'Item1', 'Item2' ]
}
 
showMenu(options);
```
</div>
<div class="code-right">

```bash title="Résultat"
My menu 200 100
[ 'Item1', 'Item2' ]
```
</div>
</div>


### 2.11 Date et heure
Création d’un nouvel objet `Date` :
- avec `new Date()` :

<div class="container-code">
<div class="code-left">

```js title="Code"
let dateNow = new Date();
console.log(dateNow);
```
</div>
<div class="code-right">

```txt title="Résultat"
2020-08-10T15:28:36.137Z
```
</div>
</div>

- avec `new Date(millisecondes)` :

<div class="container-code">
<div class="code-left">

```js title="Code"
let uneDate = new Date(24 * 3600 * 1000);
console.log(uneDate);
```
</div>
<div class="code-right">

```txt title="Résultat"
1970-01-02T00:00:00.000Z
```
</div>
</div>


- avec `new Date(datestring)` :

<div class="container-code">
<div class="code-left">

```js title="Code"
let uneDate = new Date("2020-01-01T00:02:00.000Z");
console.log(uneDate); 
```
</div>
<div class="code-right">

```txt title="Résultat"
2020-01-01T00:02:00.000Z
```
</div>
</div>

La méthode `parse(datestring)` a les mêmes paramètres, mais renvoie un timestamp.

- avec `new Date(year, month, [date], [hours], [minutes], [seconds], [ms])` :
  - `year` : sur 4 chiffres
  - `month` : de 0 (Janvier) à 11 (Décembre)
  - `date` : jour du mois. S’il n’est pas renseigné, alors il sera alimenté automatiquement par 1.
  - `hours`, `minutes`, `seconds`, `ms` : S’ils ne sont pas renseignés, alors ils seront alimentés par 0.

<div class="container-code">
<div class="code-left">

```js title="Code"
let uneDate = new Date(2020,0,2,2);
console.log(uneDate);
```
</div>
<div class="code-right">

```txt title="Résultat"
2020-01-02T01:00:00.000Z
```
</div>
</div>

Les getters :
- `getFullYear()` : Récupère l’année sur 4 chiffres
- `getMonth()` : Récupère le mois, de 0 à 11
- `getDate()` : Récupère le jour du mois
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()` : Récupère l’heure, les minutes, les secondes et les millisecondes
- `getDay()` : Récupère le jour de la semaine : de 0 (dimanche) à 6 (samedi)
- `getUTCFullYear()`, `getUTCMonth()`, `getUTCDate()`, `getUTCHours()`, `getUTCMinutes()`, `getUTCSeconds()`, `getUTCMilliseconds()` : Récupère les données précédentes, mais en fonction du fuseau horaire local
- `getTime()` : Récupère le timestamp
- `getTimezoneOffset()` : Retourne la différence en minutes, entre le fuseau horaire local et le fuseau horaire UTC

Les setters :
- `setFullYear(year, [month], [date])` : Alimente l’année
- `setMonth(month, [date])` : Alimente le mois
- `setDate(date)` : Alimente le jour du mois
- `setHours(hour, [min], [sec], [ms])` : Alimente l’heure
- `setMinutes(min, [sec], [ms])` : Alimente les minutes
- `setSeconds(sec, [ms])` : Alimente les secondes
- `setMilliseconds(ms)` : Alimente les millisecondes
- `setUTCFullYear()`, `setUTCMonth()`, `setUTCDate()`, `setUTCHours()`, `setUTCMinutes()`, `setUTCSeconds()`, `setUTCMilliseconds()` : Alimente les données précédentes, mais en fonction du fuseau horaire local
- `setTime(timestamp)` : Alimente la date à partir d’un timestamp


### 2.12 Les méthodes JSON
La méthode `JSON.stringify(value, [replacer], [space])` convertit un objet en JSON :
<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5
};
 
console.log(JSON.stringify(animal)); 
```
</div>
<div class="code-right">

```json title="Résultat"
{"name":"Sidonie","age":5}
```
</div>
</div>

Elle peut aussi prendre en paramètre :
- un tableau
- une donnée de type primitive

Cette méthode a également deux paramètres facultatifs : 
- `replacer` : 
  - Tableau de propriétés qui permet d’encoder seulement les propriétés présentes dans ce tableau
  - Fonction de type `function(key, value)` qui retourne une nouvelle valeur qui remplacera la valeur originale

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5
};
 
console.log(JSON.stringify(animal, (key, value) => {
  return (key == 'age') ? undefined : value;
}));
```
</div>
<div class="code-right">

```json title="Résultat"
{"name":"Sidonie"}
```
</div>
</div>

- `space` : Nombre d’espaces permettant de formater le résultat

<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5
};
 
console.log(JSON.stringify(animal, null, 2));
```
</div>
<div class="code-right">

```json title="Résultat"
{
  "name": "Sidonie",
  "age": 5
}
```
</div>
</div>

La méthode `toJSON()` peut être utilisée comme `toString()` :
<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  name: "Sidonie",
  age: 5,
  
  toJSON() {
    return this.age;
  }
};
 
console.log(JSON.stringify(animal));
```
</div>
<div class="code-right">

```txt title="Résultat"
5
```
</div>
</div>

La méthode `JSON.parse(str, [reviver])` convertit un JSON en objet :
<div class="container-code">
<div class="code-left">

```js title="Code"
let json = '{"name":"Sidonie","age":5}';
console.log(JSON.parse(json).name);
```
</div>
<div class="code-right">

```txt title="Résultat"
Sidonie
```
</div>
</div>


Cette méthode a également un paramètre facultatif :
- `reviver` : Fonction de type `function(key, value)` qui retourne une nouvelle valeur qui remplacera la valeur originale

<div class="container-code">
<div class="code-left">

```js title="Code"
let json = '{"name":"Sidonie", "age":5, "date":"2015-05-30T12:00:00.000Z"}';
 
console.log(
  JSON.parse(json, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  })
);
```
</div>
<div class="code-right">

```json title="Résultat"
{ name: 'Sidonie', age: 5, date: 2015-05-30T12:00:00.000Z }
```
</div>
</div>


### 2.13 Opérateurs
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

### 2.14 Conversion
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


## 3. Fonctions
### 3.1 Les paramètres
Paramètre par défaut dans une fonction : 
```js
let getName = (id = 1) => { … }
```

Les fonctions de rappel (callback) sont des fonctions passées en paramètre d’une autre fonction :
<div class="container-code">
<div class="code-left">

```js title="Code"
let ask = (id, yes, no) => {
  if (id == 1) yes()
  else no();
}
 
showOk = () => {
  console.log( "Validation" );
}
 
showCancel = () => {
  console.log( "Annulation" );
}
 
ask(1, showOk, showCancel);
```
</div>
<div class="code-right">

```txt title="Résultat"
Validation
```
</div>
</div>


Pour utiliser un nombre indéfini de paramètres sous forme d’un tableau :
<div class="container-code">
<div class="code-left">

```js title="Code"
let total = (...args) => {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
 
console.log(total(1,3,4));
```
</div>
<div class="code-right">

```txt title="Résultat"
8
```
</div>
</div>

Le paramètre du reste doit obligatoirement être le dernier paramètre.

L’opérateur de décomposition permet de faire l’opération inverse, à savoir transformer un tableau en une liste d’arguments qui sera passée comme paramètre de fonction :
<div class="container-code">
<div class="code-left">

```js title="Code"
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(1, ...arr1, 2, ...arr2, 25));
```
</div>
<div class="code-right">

```txt title="Résultat"
25
```
</div>
</div>


Il peut aussi être utilisé pour fusionner plusieurs tableaux : 
<div class="container-code">
<div class="code-left">

```js title="Code"
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
console.log(merged);
```
</div>
<div class="code-right">

```txt title="Résultat"
[ 0, 3, 5, 1, 2, 8, 9, 15 ]
```
</div>
</div>

Et aussi pour copier un objet ou un tableau :
```js
let arr = [1, 2, 3];
let arrCopy = [...arr];
 
let obj = { a: 1, b: 2, c: 3 };
let objCopy = {...obj};
```


### 3.2 Fonctions d'interaction
La fonction `alert(message)` affiche une fenêtre modale avec le texte donné en paramètre.

La fonction `prompt(title, [default])` affiche une fenêtre modale avec :
- `title` : un texte donné en paramètre
-  `default` : un champ de saisie dont le contenu peut être pré-alimenté via le paramètre facultatif
- deux boutons Ok et Annuler  

Cette fonction renvoie le contenu du champ de saisie.

La fonction `confirm(question)` affiche une fenêtre modale avec une question donnée en paramètre et deux boutons Ok et Annuler. Elle renvoie true ou false en fonction du choix de l’utilisateur.


### 3.3 Fonctions de gestion du délai d’exécution
La fonction `setTimeout(func, [delay], [arg1], [arg2] ...)` permet d’exécuter une fonction ou un bloc de code après une certaine période définie :
- `func` : la fonction ou le code à exécuter
- `delay` : le délai avant l’exécution du code, en millisecondes. Par défaut, le délai est égal à 0.
- `arg1`, `arg2` … : les arguments de la fonction (ne fonctionne pas avec < IE9)

<div class="container-code">
<div class="code-left">

```js title="Code"
// Appelle la fonction 6 secondes après l'exécution du code
let timer = setTimeout(() => {
  console.log("Un autre texte");
}, 6000);
```
</div>
<div class="code-right">

```txt title="Résultat"
Un autre texte
```
</div>
</div>

La fonction `clearTimeout(timer)` permet d’annuler l’exécution.

La fonction `setInterval(func, [delay], [arg1], [arg2] ...)` permet d’exécuter une fonction ou un bloc de code en boucle selon un intervalle de temps fixe entre chaque appel.
<div class="container-code">
<div class="code-left">

```js title="Code"
// Appelle la fonction toutes les secondes
let interval = setInterval(() => {
  console.log("Un intervalle");
}, 1000);
```
</div>
<div class="code-right">

```txt title="Résultat"
Un intervalle
Un intervalle
Un intervalle
Un intervalle
...
```
</div>
</div>

La fonction `clearInterval(interval)` permet d'annuler l’exécution.


## 4. Prototypes
Lorsque l'on fait appel à une propriété sur un objet, JavaScript va chercher si la propriété est présente sur l'objet puis sur son prototype, puis sur le prototype de son prototype (et ainsi de suite...). 

Un objet hérite des propriétés et des méthodes de l’objet dit prototype :
<div class="container-code">
<div class="code-left">

```js title="Code"
let animal = {
  eats: true,
  walk() {
    console.log("L'animal marche");
  },
  sleep() {
    this.isSleeping = true;
  }
};
 
let rabbit = Object.create(animal, { 
  jumps : {
    value: true
  }
});
 
console.log(rabbit.jumps);
console.log(rabbit.eats);
rabbit.walk();
 
rabbit.walk = () => {
  console.log("Le lapin marche");
};
 
rabbit.walk();
```
</div>
<div class="code-right">

```txt title="Résultat"
true
true
L'animal marche
Le lapin marche
```
</div>
</div>

La valeur de `this` correspond à l’objet qui appelle la méthode :
<div class="container-code">
<div class="code-left">

```js title="Code"
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
```
</div>
<div class="code-right">

```txt title="Résultat"
true
undefined
```
</div>
</div>

La méthode `Object.keys(obj)` retourne seulement les propres clés de l’objet.  
L’utilisation de `for...in` boucle sur les propres clés de l’objet ainsi que sur les clés héritées.

Il est possible de ne pas prendre en compte les clés héritées grâce à la méthode `object.hasOwnProperty(key)`.


## 5. Classes
### 5.1 Syntaxe de base
Création d’une classe, avec getter et setter, et d’une instance de classe :
<div class="container-code">
<div class="code-left">

```js title="Code"
class Animal {
  breed = "Poule";
 
  constructor(name) {
    this.name = name; // Appelle le setter
  }
 
  get name() {
    return this._name;
  }
  
  set name(value) {
    this._name = value;
  }
 
  sayName() {
    console.log(`Je m'appelle ${this.name}`); // Appelle le getter
  }
}
 
let animal = new Animal("Sidonie");
animal.sayName();
console.log(animal.name);
console.log(animal.breed);
```
</div>
<div class="code-right">

```txt title="Résultat"
Je m'appelle Sidonie
Sidonie
Poule
```
</div>
</div>

Dans une classe, nous avons :
<div class="container-code">
<div class="code-left">

```js title="Code"
// Une classe est une fonction
console.log(typeof Animal);
 
// La méthode "constructor"
console.log(Animal === Animal.prototype.constructor); 
 
// Les méthodes sont dans le prototype
console.log(Animal.prototype.sayName);
 
// Il y a deux méthodes dans le prototype (en plus du constructeur)
console.log(Object.getOwnPropertyNames(Animal.prototype));
```
</div>
<div class="code-right">

```txt title="Résultat"
function
true
[Function: sayName]
[ 'constructor', 'name', 'sayName' ]
```
</div>
</div>


L’instruction `obj instanceof class` permet de déterminer si oui ou non l’objet est une instance de la classe :
<div class="container-code">
<div class="code-left">

```js title="Code"
console.log(animal instanceof Animal);
```
</div>
<div class="code-right">

```txt title="Résultat"
true
```
</div>
</div>

### 5.2 Héritage
Héritage avec surcharge de méthode et du constructeur :
<div class="container-code">
<div class="code-left">

```js title="Code"
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
 
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} court avec une vitesse de ${this.speed}.`);
  }
}
 
class Chicken extends Animal {
  constructor(name, crest) {
    super(name);
    this.crest = crest;
  }
 
  // La poule court
  run(speed) {
    super.run(speed);
    this.fly();
  }
 
  // La poule vole
  fly() {
    console.log(`${this.name} vole !`);
  }
 
  // La poule a une crête ?
  haveCrest() {
    this.crest ? console.log(`${this.name} a une crête.`) : console.log(`${this.name} n'a pas de crête.`);
  }
}
 
let chicken = new Chicken("Sidonie", true);
chicken.run(10);
chicken.haveCrest();
```
</div>
<div class="code-right">

```txt title="Résultat"
Sidonie court avec une vitesse de 10.
Sidonie vole !
Sidonie a une crête.
```
</div>
</div>

### 5.3 Méthodes et propriétés static
Les méthodes et les propriétés `static` peuvent être exécutées sans passer par une instance. Elles peuvent être utilisées dans les classes héritées d'une classe de base.
<div class="container-code">
<div class="code-left">

```js title="Code"
class Animal {
  static planet = "Terre";
 
  static staticMethod() {
    console.log(this === Animal);
  }
}
 
Animal.staticMethod(); 
console.log(Animal.planet);
```
</div>
<div class="code-right">

```txt title="Résultat"
true
Terre
```
</div>
</div>

### 5.4 Méthodes et propriétés private et protected
L’utilisation du caractère `#` pour définir une propriété ou une méthode `private` n’est pas encore pris en charge dans les moteurs JavaScript ou partiellement pris en charge via polyfilling.

Une propriété ou méthode `private` n’est accessible qu’à l’intérieur de la classe.

<div class="container-code">
<div class="code-left">

```js title="Code"
class Animal {
  #country;
 
  constructor(name, country) {
    this.name = name;
    this.#country = country;
  }
 
  live() {
    console.log(`${this.name} habite en ${this.#country}`);
  }
}
 
animal = new Animal("Sidonie", "France");
animal.live();
console.log(animal.#name);
```
</div>
<div class="code-right">

```txt title="Résultat"
SyntaxError: Private field '#name' must be declared in an enclosing class
```
</div>
</div>

Une propriété ou méthode `protected` est accessible à l’intérieur de la classe de base et dans les classes héritées. Le caractère `_` est utilisé pour les identifier.


### 5.5 Les classes mixin (héritage multiple)
Une classe mixin est une classe destinée à être composée par héritage multiple avec une autre classe pour lui apporter des fonctionnalités.

Utilisation d’une classe mixin :
<div class="container-code">
<div class="code-left">

```js title="Code"
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
 
let Drawable = superclass => {
  return class extends superclass {
    draw() {
      console.log(`Dessiner une forme avec les dimensions : ${this.width}, ${this.height}`);
    }
  };
};
 
// Classe qui hérite de Shape et de Drawable
class DrawableShape extends Drawable(Shape) { }
 
let shapeDraw = new DrawableShape(200,100);
shapeDraw.draw();
```
</div>
<div class="code-right">

```txt title="Résultat"
Dessiner une forme avec les dimensions : 200, 100
```
</div>
</div>


Utilisation de plusieurs classes mixins :
<div class="container-code">
<div class="code-left">

```js title="Code"
let Moveable = superclass => {
  return class extends superclass {
    move() {
      console.log('Déplacement de la forme');
    }
  };
};
 
// Fonction permettant d'améliorer l'utilisation de plusieurs classes mixins
let mix = superclass => {
  return {
    with(...mixins) {
      return mixins.reduce((c, mixin) => mixin(c), superclass || class {});
    }
  };
};
 
// Classe qui hérite de Shape, de Moveable et de Drawable
class MoveableDrawableShape extends mix(Shape).with(Moveable, Drawable) { }
 
let shapeMoveDraw = new MoveableDrawableShape(300, 200);
shapeMoveDraw.draw();
shapeMoveDraw.move();
```
</div>
<div class="code-right">

```txt title="Résultat"
Dessiner une forme avec les dimensions : 300, 200
Déplacement de la forme
```
</div>
</div>


## 6. Gestion d'exceptions
### 6.1 La syntaxe try … catch
L’utilisation de la syntaxe `try … catch` :
- Le code à l’intérieur du `try` est exécuté.
- Si une erreur se produit, l’exécution du code dans `try` est arrêtée et le code à l’intérieur du `catch` est exécuté.
- S’il n’y a aucune erreur, le code dans `catch` n’est jamais exécuté.
- Elle ne gère que les erreurs qui se produisent dans du code valide et de manière synchrone.
- L’objet `err` dans le catch est facultatif.

```js 
try {
  // Code exécuté
}
catch (err) {
  // Code exécuté si erreur dans le try
}
```

L’objet `err` dans le catch a quelques propriétés principales :
- `name` : Nom de l’erreur. Par exemple : `ReferenceError`.
- `message` : Message sur le détail de l’erreur.
- `stack` : Pile d’appel en cours.

<div class="container-code">
<div class="code-left">

```js title="Code"
try {
  lalala;
} 
catch (err) {
  console.log(err.name); 
  console.log(err.message); 
  console.log(err.stack); 
}
```
</div>
<div class="code-right">

```txt title="Résultat"
ReferenceError
lalala is not defined
ReferenceError: lalala is not defined
    at Object.<anonymous> (D:\Projets\test\test.js:2:3)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
```
</div>
</div>

### 6.2 Créer ses propres erreurs
Création d'erreurs avec `SyntaxError, Error, ReferenceError` … :
<div class="container-code">
<div class="code-left">

```js title="Code"
let json = '{ "age": 30 }'; 
 
try {
  let user = JSON.parse(json); 
 
  // Si la propriété "name" n'est pas dans le JSON
  if (!user.name) {
    throw new SyntaxError("Données incomplètes : Pas de name"); 
  }
 
  console.log(user.name); 
} 
catch (err) {
  console.log("Erreur JSON : " + err.message);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Erreur JSON : Données incomplètes : Pas de name
```
</div>
</div>

### 6.3 La syntaxe try … catch … finally
L’utilisation de la syntaxe `try … catch … finally` :
- Le code à l’intérieur du `try` est exécuté.
- Si une erreur se produit, l’exécution du code dans `try` est arrêtée et le code à l’intérieur du `catch` est exécuté.
- S’il n’y a aucune erreur, le code dans `catch` n’est jamais exécuté.
- Le code à l’intérieur du `finally` est toujours exécuté après le `try` ou le `catch`.
- Si un return est présent dans `try`, le code dans `finally` est quand même exécuté.

```js
try {
  // Code exécuté
}
catch (err) {
  // Code exécuté si erreur dans le try
}
finally {
  // Code toujours exécuté
}
```

### 6.4 Le catch global
Utilisation du catch global dans le cas où une erreur a lieu en dehors d’un `try … catch`.
:::info Information
Le code suivant a été testé sur Firefox et les fichiers ont dû être déposés sur un serveur local pour que cela fonctionne (à cause du CORS).
:::
<div class="container-code">
<div class="code-left">

```js title="Code"
window.onerror = (message, url, line, col, error) => {
  console.log(`${message}\n A la ligne/colonne ${line}:${col} dans ${url}`);
};
 
function readData() {
  unknownFunction(); 
}
 
readData();
```
</div>
<div class="code-right">

```txt title="Résultat"
 ReferenceError: unknownFunction is not defined
 A la ligne/colonne 6:3 dans http://localhost/test/index.js
```
</div>
</div>


### 6.5 Héritage
Création d’une classe d’erreur spécifique qui hérite d’une classe d’erreur standard :
<div class="container-code">
<div class="code-left">

```js title="Code"
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
 
try {
  throw new ValidationError("Une erreur de validation");
} 
catch (err) {
  if (err instanceof ValidationError) {
    console.log(err.message);
    console.log(err.name); 
    console.log(err.stack);
  }
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Une erreur de validation
ValidationError
ValidationError: Une erreur de validation
    at Object.<anonymous> (D:\Projets\test\test.js:9:9)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
```
</div>
</div>


Création d’une classe d’erreur spécifique qui hérite d’une autre classe d’erreur spécifique :
<div class="container-code">
<div class="code-left">

```js title="Code"
// Une classe de base pour initialiser le nom de l'erreur
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
 
// La classe d'erreur pour les validations
class ValidationError extends MyError {
  constructor(message) {
    super(message);
  }
}
 
// La classe d'erreur pour les propriétés requises
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Aucune propriété : " + property);
    this.property = property;
  }
}
 
try {
  let json = '{ "age": 30 }'; 
  let user = JSON.parse(json);
 
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
} 
catch (err) {
  if (err instanceof ValidationError) {
    console.log(err.message);
    console.log(err.name); 
    console.log(err.stack);
  }
}
```
</div>
<div class="code-right">

```txt title="Résultat"
Aucune propriété : name
PropertyRequiredError
PropertyRequiredError: Aucune propriété : name
    at Object.<anonymous> (D:\Projets\test\test.js:29:11)
    at Module._compile (internal/modules/cjs/loader.js:1200:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
    at Module.load (internal/modules/cjs/loader.js:1049:32)
    at Function.Module._load (internal/modules/cjs/loader.js:937:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
```
</div>
</div>

## 7. Promesses
### 7.1 Introduction
Une promesse est un objet qui représente la complétion ou l'échec d'une opération asynchrone.  
Une promesse peut avoir plusieurs états au cours de son existence :
- pending (en attente) : état initial, la promesse n'est ni remplie, ni rompue
- fulfilled (tenue) : l'opération a réussi
- rejected (rompue) : l'opération a échoué
- settled (acquittée) : la promesse est tenue ou rompue mais elle n'est plus en attente

Création d’une promesse :
```js
let promise = success => {
  return new Promise((resolve, reject) => {
    success ? resolve("Succès") : reject("Echec");
  });
};
```

Les méthodes `then` et `catch` renvoient des promesses et peuvent ainsi être chaînées :
- `then` : 
  - Si elle n’a qu’un seul paramètre, le paramètre correspond à une fonction qui est exécuté si la promesse est tenue
  - Si elle a deux paramètres
    - Le premier correspond à une fonction qui est exécuté si la promesse est tenue
    - Le second correspond à une fonction qui est exécuté si la promesse est rompue

- `catch` : c’est l’équivalent du `then(null, reject)`, donc le paramètre correspond à une fonction qui est exécuté si la promesse est rompue

<div class="container-code">
<div class="code-left">

```js title="Code"
// Utilisation de then
promise(true)
  .then(resolve => console.log(resolve), 
        reject => console.log(reject));
 
// Utilisation de then et catch
promise(false)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));
 
L’utilisation des promesses chaînées :
promise(true)
  .then(resolve => { 
    console.log(resolve);
    return "2ème succès";
  })
  .then (resolve => console.log(resolve));
```
</div>
<div class="code-right">

```txt title="Résultat"
Succès
Echec
```
</div>
</div>
 

### 7.2 Méthodes des promesses
La méthode `all()` renvoie une promesse qui est résolue lorsque l'ensemble des promesses ont été résolues ou qui échoue avec la raison de la première promesse qui échoue.
<div class="container-code">
<div class="code-left">

```js title="Code"
Promise.all([
  new Promise((resolve, reject) => { resolve("Promesse 1") }),
  new Promise((resolve, reject) => { resolve("Promesse 2") }),
  new Promise((resolve, reject) => { resolve("Promesse 3") })
])
.then(response => { console.log(response); });
```
</div>
<div class="code-right">

```json title="Résultat"
[ 'Promesse 1', 'Promesse 2', 'Promesse 3' ]
```
</div>
</div>

La méthode `allSettled()` renvoie une promesse qui est résolue une fois que l'ensemble des promesses sont réussies ou rejetées. La valeur de résolution de cette promesse est un tableau d'objets contenant le résultat de chaque promesse.
<div class="container-code">
<div class="code-left">

```js title="Code"
Promise.allSettled([
  new Promise((resolve, reject) => resolve("Promesse 1")),
  new Promise((resolve, reject) => reject("Echec promesse 2")),
  new Promise((resolve, reject) => resolve("Promesse 3"))
])
.then(response => { console.log(response); });
```
</div>
<div class="code-right">

```json title="Résultat"
[
  { status: 'fulfilled', value: 'Promesse 1' },
  { status: 'rejected', reason: 'Echec promesse 2' },
  { status: 'fulfilled', value: 'Promesse 3' }
]
```
</div>
</div>

La méthode `race()` renvoie une promesse qui est résolue ou rejetée dès qu'une des promesses est résolue ou rejetée. La valeur ou la raison utilisée est celle de la promesse qui est résolue/qui échoue. 
<div class="container-code">
<div class="code-left">

```js title="Code"
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve("Promesse 1"), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Promesse 2"), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve("Promesse 3"), 3000)),
])
.then(response => { console.log(response); });
```
</div>
<div class="code-right">

```txt title="Résultat"
Promesse 2
```
</div>
</div>

La méthode `resolve()` renvoie une promesse qui est résolue avec la valeur donnée.
Les deux instructions suivantes sont équivalentes :
```js
let promise = Promise.resolve("Promesse 1");
let promise = new Promise(resolve => resolve("Promesse 1"));
```

La méthode `reject()` renvoie une promesse qui est rejetée à cause d'une raison donnée.
```js
let promise = Promise.reject("Erreur promesse 1");
let promise = new Promise((resolve, reject) => reject("Erreur promesse 1"));
```
 
### 7.3 Async/await
Le mot-clé `async` devant une fonction ou une méthode de classe permet d’indiquer que cette fonction retourne une promesse.
<div class="container-code">
<div class="code-left">

```js title="Code"
let resultat = async arg => {
  return Promise.resolve(1);
}
 
resultat().then(console.log);
```
</div>
<div class="code-right">

```txt title="Résultat"
1
```
</div>
</div>

Le mot-clé `await` permet d’attendre la résolution d’une promesse. Il ne peut être utilisé que dans une fonction asynchrone.
<div class="container-code">
<div class="code-left">

```js title="Code"
let resultat = async arg => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(arg), 1000)
  });
 
  return await promise;
}
 
resultat("Test").then(console.log);
```
</div>
<div class="code-right">

```txt title="Résultat"
Test
```
</div>
</div>

## 8. Les fonctions génératrices
Une fonction génératrice permet de retourner plusieurs valeurs :
<div class="container-code">
<div class="code-left">

```js title="Code"
function* generate() {
  yield 1;
  yield 2;
  yield 3;
}
 
let generator = generate();
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```
</div>
<div class="code-right">

```json title="Résultat"
Object [Generator] {}
{ value: 1, done: false }       
{ value: 2, done: false }       
{ value: 3, done: false }       
{ value: undefined, done: true }
```
</div>
</div>

Les fonctions génératrices sont itérables :
<div class="container-code">
<div class="code-left">

```js title="Code"
function* generate() {
  yield 1;
  yield 2;
  yield 3;
}
 
let generator = generate();
 
for(let value of generator) {
  console.log(value);
}
```
</div>
<div class="code-right">

```txt title="Résultat"
1
2
3
```
</div>
</div>


## 9. Les modules
Le mot-clé `export` permet d’exporter les éléments d’un module.  
Le mot-clé `import` permet d’importer les éléments d’un module.

```js
// 1. Exporter/importer une variable :
export let nom1; // Utilisable avec const également
import {nom1} from 'modules.js';
 
// 2. Exporter/importer une fonction :
export function nomFonction() {...};
import {nomFonction} from 'modules.js';
 
// 3. Exporter/importer une classe :
export class NomClasse {...};
import {NomClasse} from 'modules.js';
 
// 4. Exporter/Importer une seule entité (un seul "default" par module)
export default class NomClasse {};
import NomClasse from 'modules.js';
 
// 5. Exporter/importer avec une liste :
export {nom1, nom2 ...};
import {nom1, nom2 ...} from 'modules.js';
 
// 6. Exporter/importer avec renommage :
export {variable1 as nom1, variable2 as nom2 ...};
import {variable1 as nom1, variable2 as nom2 ...} from 'modules.js';
 
// 7. Exporter/importer avec agrégation de modules :
// Fichier moduleParent.js 
export {maFonction, maVariable} from 'moduleFils1.js';
export {maClasse} from 'moduleFils2.js';
 
// Dans le module de plus haut niveau
import {maFonction, maVariable, maClasse} from 'moduleParent.js';
 
// 8. Exporter/Importer l'intégralité :
export * from 'module.js';
import * as monModule from 'modules.js';
```

<br/>

:::tip Sources
https://javascript.info/  
https://developer.mozilla.org/fr/docs/Web/JavaScript  
https://www.codeheroes.fr/2017/12/23/javascript-heritage-multiple/
:::