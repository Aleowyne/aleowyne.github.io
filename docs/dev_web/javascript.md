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
<table class="code"><tr><td>

```js title="Code"
console.log(0xFF); // Hexadécimal
console.log(0b11111111); // Binaire
console.log(0o377); // Octal
```

</td><td>

```txt title="Résultat"
255
255
255
```
</td></tr></table>

Utilisation de `toString(base)` :
- La base va de 2 à 36
- Si la base choisie est 36, tous les chiffres et les caractères de l’alphabet latin sont utilisés (0-9 et a-z)
- Deux points après le nombre ou des parenthèse autour du nombre si ce n’est pas une variable qui est utilisée

<table class="code"><tr><td>

```js title="Code"
console.log(123456..toString(36));
console.log((123456).toString(36));
```

</td><td>

```txt title="Résultat"
2n9c
2n9c
```
</td></tr></table>

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
<table class="code"><tr><td>

```js title="Code"
let sum = 0.1 + 0.2;
console.log(sum);
console.log(+sum.toFixed(2)); 
```

</td><td>

```txt title="Résultat"
0.30000000000000004
0.3
```
</td></tr></table>

La fonction `isNaN(value)` contrôle si une valeur n’est pas un nombre :
<table class="code"><tr><td>

```js title="Code"
console.log(isNaN("str"));
```

</td><td>

```txt title="Résultat"
true
```
</td></tr></table>

La fonction `isFinite(value)` contrôle si une valeur est finie :
<table class="code"><tr><td>

```js title="Code"
console.log(isFinite("15"));
```

</td><td>

```txt title="Résultat"
true
```
</td></tr></table>

La fonction `parseInt(str, base)` prend une chaîne de caractères en paramètre et renvoie un entier dans une base :
<table class="code"><tr><td>

```js title="Code"
console.log(parseInt("100px"));
```

</td><td>

```txt title="Résultat"
100
```
</td></tr></table>

La fonction `parseFloat(str)` prend une chaîne de caractères en paramètre et renvoie un nombre à virgule flottant :
<table class="code"><tr><td>

```js title="Code"
console.log(parseFloat("12.5em"));
```

</td><td>

```txt title="Résultat"
12.5
```
</td></tr></table>


### 2.2 Chaîne de caractères
Les backticks permettent d’intégrer des variables et des expressions dans une chaîne :

<table class="code"><tr><td>

```js title="Code"
console.log(`Le résultat est ${1 + 2}` );
```

</td><td>

```txt title="Résultat"
Le résultat est 3
```
</td></tr></table>

Ils permettent également d’écrire une chaîne de caractères sur plusieurs lignes :
<table class="code"><tr><td>

```js title="Code"
console.log(`ceci
est
un message
sur plusieurs lignes`);
```

</td><td>

```txt title="Résultat"
ceci
est
un message
sur plusieurs lignes
```
</td></tr></table>

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
<table class="code"><tr><td>

```js title="Code"
for (let char of "Hello") {
  console.log(char); 
}
```

</td><td>

```txt title="Résultat"
H
e
l
l
o
```
</td></tr></table>


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
<table class="code"><tr><td>

```js title="Code"
console.log(user.name);
```

</td><td>

```txt title="Résultat"
John
```
</td></tr></table>

Ajout d’une propriété :
```js
user.isAdmin = true;
```

Suppression d’une propriété :
```js
delete user.age;
```

Pour les propriétés multi-mots : 
<table class="code"><tr><td>

```js title="Code"
let user = {};
 
// Alimentation de la propriété
user["likes birds"] = true;
 
// Récupération de la valeur de la propriété
console.log(user["likes birds"]);
 
// Suppression de la propriété
delete user["likes birds"];
```

</td><td>

```txt title="Résultat"
true
```
</td></tr></table>

Les propriétés calculées :
<table class="code"><tr><td>

```js title="Code"
let user = {};
let key = "test";
user[key] = true;
 
let fruit = "apple";
let bag = {
  [fruit]: 5, 
};

console.log(bag.apple);
```

</td><td>

```txt title="Résultat"
5
```
</td></tr></table>

Pour vérifier qu’une propriété existe dans un objet :
<table class="code"><tr><td>

```js title="Code"
let user = { name: "John", age: 30 };
console.log("age" in user);
 
let key = "age";
console.log(key in user);
```

</td><td>

```txt title="Résultat"
true
true
```
</td></tr></table>


#### 2.3.2 Boucler sur les propriétés d'un objet
- En utilisant `… in …` :

<table class="code"><tr><td>

```js title="Code"
let user = { name: "John", age: 30 };
 
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
```

</td><td>

```txt title="Résultat"
name : John
age : 30
```
</td></tr></table>

- En utilisant `Object.keys(obj)` pour récupérer les clés :

<table class="code"><tr><td>

```js title="Code"
for (let key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}
```

</td><td>

```txt title="Résultat"
name : John
age : 30
```
</td></tr></table>

- En utilisant `Object.values(obj)` pour récupérer les valeurs des propriétés :

<table class="code"><tr><td>

```js title="Code"
for (let value of Object.values(user)) {
  console.log(value);
}
```

</td><td>

```txt title="Résultat"
John
30
```
</td></tr></table>

- En utilisant `Object.entries(obj)` pour récupérer les propriétés avec leurs valeurs :

<table class="code"><tr><td>

```js title="Code"
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}
```

</td><td>

```txt title="Résultat"
name : John
age : 30
```
</td></tr></table>


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
<table class="code"><tr><td>

```js title="Code"
let prices = {
  banane: 1,
  orange: 2,
  viande: 4
};
 
let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);
```
</td><td>

```txt title="Résultat"
{ banane: 2, orange: 4, viande: 8 }
```
</td></tr></table>

Quand une méthode d’un objet est appelé comme suit : `object.method()`, le `this` correspond à `object`.


#### 2.3.6 Attributs des propriétés
- `writable` : Si `true`, la valeur peut être modifiée
- `enumerable` : Si `true`, la propriété peut être listée dans une boucle
- `configurable` : Si `true`, la propriété peut être supprimée et ses attributs peuvent être modifiés

Les méthodes pour gérer les attributs des propriétés :
- `Object.getOwnPropertyDescriptor(obj, propertyName)` : permet de récupérer l’information sur les attributs d’une propriété propertyName présente dans un objet.

<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Robert"
}

console.log(
  JSON.stringify(
    Object.getOwnPropertyDescriptor(user, 'name'), null, 2
  )
);
```
</td><td>

```json title="Résultat"
{
  "value": "Robert",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
```
</td></tr></table>

- `Object.defineProperty(obj, propertyName, descriptor)` : permet de modifier les attributs d’une propriété propertyName présente dans un objet.

<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Robert",
  age: 35
}
 
Object.defineProperty(user, "age", {
  "writable": false
});
 
user.age = 13;
console.log(user); 
```
</td><td>

```txt title="Résultat"
{ name: 'Robert', age: 35 }
```
</td></tr></table>

- `Object.getOwnPropertyDescriptors(obj)` : permet de récupérer l’information sur les attributs de toutes les propriétés présentes sur un objet.

<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Robert",
  age: 35
}

console.log(
  JSON.stringify(
    Object.getOwnPropertyDescriptors(user), null, 2
  )
);
```
</td><td>

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
</td></tr></table>

- `Object.defineProperties(obj, descriptors)` : permet de modifier les attributs des propriétés présentes dans un objet.

<table class="code"><tr><td>

```js title="Code"
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
console.log(user);
```
</td><td>

```txt title="Résultat"
{ name: 'Robert', age: 35 }
```
</td></tr></table>

- `Object.preventExtensions(obj)` : permet d’interdire l’ajout de nouvelles propriétés à un objet.
- `Object.seal(obj)` : permet d’interdire l’ajout et la suppression de propriétés dans un objet.
- `Object.freeze(obj)` : permet d’interdire l’ajout, la modification et la suppression des propriétés existantes dans un objet.
- `Object.isExtensible(obj)` : retourne `false` si l’ajout de nouvelles propriétés est interdite, sinon `true`.
- `Object.isSealed(obj)` : retourne `true` si l’ajout de nouvelles propriétés et la suppression des propriétés existantes est interdite, sinon `false`.
- `Object.isFrozen(obj)` : retourne `true` si l’ajout, la modification et la suppression de propriétés est interdite, sinon `false`.

#### 2.3.7 Les getters et setters

<table class="code"><tr><td>

```js title="Code"
let user = {
  get name() {
    return this._name;
  },
 
  set name(value) {
    this._name = value;
  }
};
 
user.name = "Robert";
console.log(user.name);
```
</td><td>

```txt title="Résultat"
Robert
```
</td></tr></table>


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

<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
[ 1, 3, 4, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 3, 4 ]
```
</td></tr></table>

- `arr.slice([start, [end]])` : 
  - Si au moins un index est renseigné, il copie le tableau de l’index `start` à l’index `end` non inclus. Les index négatifs sont autorisés.
  - Si aucun index n’est renseigné, il permet de créer une copie du tableau.

- `arr.concat([value1, [value2 …]])` : Créé un nouveau tableau constitué des éléments du tableau d’origine et des valeurs à ajouter. Le tableau d’origine n’est pas modifié.

- `arr.forEach((item, [index, array]) => { … })` : Exécute une fonction une fois sur chaque élément du tableau.

<table class="code"><tr><td>

```js title="Code"
let arr = new Array(1, 2, 3);
 
arr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
```
</td><td>

```txt title="Résultat"
1 is at index 0 in 1,2,3
2 is at index 1 in 1,2,3
3 is at index 2 in 1,2,3
```
</td></tr></table>

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

<table class="code"><tr><td>

```js title="Code"
let arr = new Array(1, 2, 3);

for (let i = 0; i < arr.length; i++) {
  console.log(`Index ${i} : ${arr[i]}`);
}
```
</td><td>

```txt title="Résultat"
Index 0 : 1
Index 1 : 2
Index 2 : 3
```
</td></tr></table>

- Pour avoir accès seulement aux éléments :

<table class="code"><tr><td>

```js title="Code"
let fruits = new Array("Pomme", "Poire", "Abricot");

for (let fruit of fruits) {
  console.log(fruit);
}
```
</td><td>

```txt title="Résultat"
Pomme
Poire
Abricot
```
</td></tr></table>

### 2.5 Symbole
Un symbole est un type de données primitif représentant une donnée unique et inchangeable qui peut être utilisée afin de représenter des identifiants pour des propriétés d'un objet.
<table class="code"><tr><td>

```js title="Code"
let id = Symbol("12");
console.log(id.toString());
console.log(id.description);
```
</td><td>

```txt title="Résultat"
Symbol(12)
12
```
</td></tr></table>

Comparaison entre une propriété "id" et un symbole "id" :
<table class="code"><tr><td>

```js title="Code"
let id = Symbol("id");
let user = { name: "John" };
 
// Ajout d'un identifiant unique à l’objet user
user[id] = "12";
 
// Ajout d'une propriété "id" à l’objet user
user.id = "Un identifiant";
 
console.log(user[id]);
console.log(user.id);
```
</td><td>

```txt title="Résultat"
12
Un identifiant
```
</td></tr></table>

Les symboles ne sont pas pris en compte lors de l'utilisation de la boucle `for … in`, `Object.keys()` et `JSON.stringify()`.

Les symboles globaux :
<table class="code"><tr><td>

```js title="Code"
let sym = Symbol.for("name");
console.log(Symbol.keyFor(sym)); // Affiche : name
```
</td><td>

```txt title="Résultat"
name
```
</td></tr></table>

Les méthodes pour les symboles globaux : https://tc39.es/ecma262/#sec-well-known-symbols


### 2.6 Map
L’objet `Map` permet de stocker des couples (clé, valeur). Les clés peuvent être de n’importe quel type de données.

La création d’un objet `Map` peut se faire ainsi :
<table class="code"><tr><td>

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
</td><td>

```bash title="Résultat"
Map(0) {}
Map(3) { 1 => 'Banane', 2 => 'Poire', 3 => 'Pomme' }
```
</td></tr></table>

<br/>

Les méthodes disponibles sont les suivantes :
- `map.set(key, value)` : Stocke un nouveau couple (clé, valeur)

<table class="code"><tr><td>

```js title="Code"
let fruits = new Map();
fruits.set(1, "Pomme");
fruits.set(2, "Poire");
console.log(fruits);
```
</td><td>

```bash title="Résultat"
Map(2) { 1 => 'Pomme', 2 => 'Poire' }
```
</td></tr></table>

Il est possible de chaîner les appels de la méthode :
```js
fruits.set(1, "Pomme")
      .set(2, "Poire");
```

<br/>

- `map.get(key)` : Récupère la valeur à partir d'une clé

<table class="code"><tr><td>

```js title="Code"
console.log(fruits.get(1)); 
console.log(fruits.get(3)); 
```
</td><td>

```txt title="Résultat"
Pomme
undefined
```
</td></tr></table>

- `map.has(key)` : Retourne `true` si la clé existe, sinon `false`

<table class="code"><tr><td>

```js title="Code"
console.log(fruits.has(2));
console.log(fruits.has("Poire"));
```
</td><td>

```txt title="Résultat"
true
false
```
</td></tr></table>

- `map.size` : Retourne la taille de l'objet `Map`

<table class="code"><tr><td>

```js title="Code"
console.log(fruits.size);
```
</td><td>

```txt title="Résultat"
2
```
</td></tr></table>

- `map.delete(key)` : Supprime le couple (clé, valeur) à partir d'une clé

<table class="code"><tr><td>

```js title="Code"
fruits.delete(1);
console.log(fruits);
```
</td><td>

```bash title="Résultat"
Map(1) { 2 => 'Poire' }
```
</td></tr></table>

- `map.clear()` : Vide l'objet `Map`

<table class="code"><tr><td>

```js title="Code"
fruits.clear();
console.log(fruits);
```
</td><td>

```bash title="Résultat"
Map(0) {}
```
</td></tr></table>

L’itération sur un objet `Map` peut se faire de différentes manières :
- En utilisant `forEach()` :

<table class="code"><tr><td>

```js title="Code"
let fruits = new Map();
fruits.set(1, "Pomme")
      .set(2, "Poire");

fruits.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});
```
</td><td>

```txt title="Résultat"
1 : Pomme
2 : Poire
```
</td></tr></table>

- En utilisant la déstructuration d’`Array` :

<table class="code"><tr><td>

```js title="Code"
for (let [key, value] of fruits) {
  console.log(`${key} : ${value}`);
}
```
</td><td>

```txt title="Résultat"
1 : Pomme
2 : Poire
```
</td></tr></table>

- Boucle sur les clés :

<table class="code"><tr><td>

```js title="Code"
for (let key of fruits.keys()) {
  console.log(key);
}
```
</td><td>

```txt title="Résultat"
1
2
```
</td></tr></table>

- Boucle sur les valeurs :

<table class="code"><tr><td>

```js title="Code"
for (let value of fruits.values()) {
  console.log(value);
}
```
</td><td>

```txt title="Résultat"
Pomme
Poire
```
</td></tr></table>


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
<table class="code"><tr><td>

```js title="Code"
// Initialisation d'un objet Set
let legumes = new Set();
console.log(legumes);
 
// Initialisation d'un objet Set à partir d'un Array
const fruitsArray = ['Banane', 'Poire', 'Pomme'];
let fruits = new Set(fruitsArray);
console.log(fruits);
```
</td><td>

```bash title="Résultat"
Set(0) {}
Set(3) { 'Banane', 'Poire', 'Pomme' }
```
</td></tr></table>

Les méthodes disponibles sont les suivantes :
- `set.add(value)` : Stocke une nouvelle valeur. Elle n’est pas ajoutée si elle existe déjà.

<table class="code"><tr><td>

```js title="Code"
let fruits = new Set();
fruits.add("Pomme");
fruits.add("Poire");
fruits.add("Pomme");
console.log(fruits); 
```
</td><td>

```bash title="Résultat"
Set(2) { 'Pomme', 'Poire' }
```
</td></tr></table>

Il est possible de chaîner les appels de la méthode :
```js
fruits.add("Pomme")
      .add("Poire");
```

<br/>

- `set.has(value)` : Retourne `true` si la valeur existe, sinon `false`

<table class="code"><tr><td>

```js title="Code"
console.log(fruits.has("Pomme")); 
console.log(fruits.has("Banane")); 
```
</td><td>

```txt title="Résultat"
true
false
```
</td></tr></table>

- `set.size` : Retourne la taille de l'objet `Set`

<table class="code"><tr><td>

```js title="Code"
console.log(fruits.size);
```
</td><td>

```txt title="Résultat"
2
```
</td></tr></table>

- `set.delete(value)` : Supprime la valeur

<table class="code"><tr><td>

```js title="Code"
fruits.delete("Pomme");
console.log(fruits);
```
</td><td>

```bash title="Résultat"
Set(1) { 'Poire' }
```
</td></tr></table>

- `set.clear()` : Vide l'objet `Set`

<table class="code"><tr><td>

```js title="Code"
fruits.clear();
console.log(fruits);
```
</td><td>

```txt title="Résultat"
Set(0) {}
```
</td></tr></table>


L’itération sur un objet `Set` peut se faire de différentes manières :
- En utilisant `forEach()` :

<table class="code"><tr><td>

```js title="Code"
let fruits = new Set();
fruits.add("Pomme")
      .add("Poire");

fruits.forEach((value, valueAgain, set) => {
  console.log(value);
})
```
</td><td>

```txt title="Résultat"
Pomme
Poire
```
</td></tr></table>

- En utilisant `for … of` :

<table class="code"><tr><td>

```js title="Code"
for (let fruit of fruits) {
  console.log(fruit);
}
```
</td><td>

```txt title="Résultat"
Pomme
Poire
```
</td></tr></table>


### 2.8 WeakMap
L’objet `WeakMap` représente une collection de couples (clé, valeur) dont les clés sont des objets et pour lesquelles les références sont faibles. Il n’est donc pas possible d’énumérer les clés de ce type d’objet. Si un objet lié à une clé du `WeakMap` est supprimé de la mémoire, alors le couple (clé, valeur) dans l’objet `WeakMap` est supprimé automatiquement.

La création d’un objet `WeakMap` s’effectue de la manière suivante :
```js
let weakMap = new WeakMap();
```

Les méthodes disponibles sont les suivantes :
- `weakMap.set(key, value)` : Stocke un nouveau couple (clé, valeur)
```js
let users = new WeakMap();
let john = { name : "John" };
let georges = { name : "Georges" };

users.set(john, 1);
users.set(georges, 4);
```

Il est possible de chaîner les appels de la méthode :
```js
users.set(john, 1)
     .set(georges, 4);
```

- `weakMap.get(key)` : Récupère la valeur à partir d'une clé

<table class="code"><tr><td>

```js title="Code"
let usersTwo = new WeakMap();
console.log(users.get(john)); 
console.log(usersTwo.get(john)); 
```
</td><td>

```txt title="Résultat"
1
undefined
```
</td></tr></table>

- `weakMap.has(key)` : Retourne `true` si la clé existe, sinon `false`

<table class="code"><tr><td>

```js title="Code"
console.log(users.has(john));
console.log(usersTwo.has(john));
```
</td><td>

```txt title="Résultat"
true
false
```
</td></tr></table>

- `weakMap.delete(key)` : Supprime le couple (clé, valeur) à partir d'une clé

<table class="code"><tr><td>

```js title="Code"
users.delete(john);
console.log(users.has(john)); 
```
</td><td>

```txt title="Résultat"
false
```
</td></tr></table>


### 2.9 WeakSet
L’objet `WeakSet` permet de créer un ensemble dont les objets, uniques, sont contenus avec des références faibles. Il n’est donc pas possible d’énumérer les objets d’un `WeakSet`. Si un objet lié à un des objets du `WeakSet` est supprimé de la mémoire, alors cet objet est supprimé automatiquement dans le `WeakSet`.

La création d’un objet `WeakSet` s’effectue de la manière suivante :
```js
let weakSet = new WeakSet();
```

Les méthodes disponibles sont les suivantes :
- `weakSet.add(value)` : Stocke une nouvelle valeur. Elle n’est pas ajoutée si elle existe déjà.
```js
let users = new WeakSet();
let john = { name : "John" };
let georges = { name : "Georges" };
 
users.add(john);
users.add(georges);
```

Il est possible de chaîner les appels de la méthode :
```js
users.add(john)
     .add(georges);
```

- `weakSet.has(value)` : Retourne `true` si la valeur existe, sinon `false`

<table class="code"><tr><td>

```js title="Code"
let usersTwo = new WeakMap();
console.log(users.has(john));
console.log(usersTwo.has(john));
```
</td><td>

```txt title="Résultat"
true
false
```
</td></tr></table>

- `weakSet.delete(value)` : Supprime la valeur

<table class="code"><tr><td>

```js title="Code"
users.delete(john);
console.log(users.has(john)); 
```
</td><td>

```txt title="Résultat"
false
```
</td></tr></table>



### 2.10 Déstructuration
La déstructuration permet d’extraire des données d’un tableau ou d’un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l’objet.

Exemple avec un tableau :
<table class="code"><tr><td>

```js title="Code"
let arr = ["Paul", "Dubois"]
let [firstname, lastname] = arr;
console.log(`${firstname} - ${lastname}`);
```
</td><td>

```txt title="Résultat"
Paul - Dubois
```
</td></tr></table>

Des éléments peuvent être ignorés :
<table class="code"><tr><td>

```js title="Code"
let [firstname, , profession] = ["Paul", "Dubois", "Plombier", "France"];
console.log(`${firstname} - ${profession}`);
```
</td><td>

```txt title="Résultat"
Paul - Plombier
```
</td></tr></table>


La partie droite peut être un itérable :
```js
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
```

La partie gauche peut être n’importe quel type de données assignable :
<table class="code"><tr><td>

```js title="Code"
let user = {};
[user.firstname, user.lastname] = "Paul Dubois".split(' ');
console.log(user); 
```
</td><td>

```bash title="Résultat"
{ firstname: 'Paul', lastname: 'Dubois' }
```
</td></tr></table>


Le paramètre de reste, représenté par 3 points ```...```, permet de représenter un nombre indéfini d’arguments sous forme d’un tableau :
<table class="code"><tr><td>

```js title="Code"
let [firstname, lastname, ...rest] = ["Paul", "Dubois", "Plombier", "France"];
console.log(rest);
```
</td><td>

```bash title="Résultat"
[ 'Plombier', 'France' ]
```
</td></tr></table>


Une valeur par défaut peut être utilisée :
<table class="code"><tr><td>

```js title="Code"
let [firstname, lastname, profession, country = "France"] = ["Paul", "Dubois", "Plombier"];
console.log(country);
```
</td><td>

```txt title="Résultat"
France
```
</td></tr></table>


Exemple avec un objet :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
Paul - 30 - France
name : Paul
age : 30
```
</td></tr></table>

Exemple avec un objet `Map` :
<table class="code"><tr><td>

```js title="Code"
let user = new Map();
user.set("name", "Paul")
    .set("age", "30");
 
for (let [key, value] of user) {
  console.log(`${key} : ${value}`);
}
```
</td><td>

```txt title="Résultat"
name : Paul
age : 30
```
</td></tr></table>

Exemple avec les paramètres d’une fonction :
<table class="code"><tr><td>

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
</td><td>

```bash title="Résultat"
My menu 200 100
[ 'Item1', 'Item2' ]
```
</td></tr></table>


### 2.11 Date et heure
Création d’un nouvel objet `Date` :
- avec `new Date()` :

<table class="code"><tr><td>

```js title="Code"
let dateNow = new Date();
console.log(dateNow);
```
</td><td>

```txt title="Résultat"
2020-08-10T15:28:36.137Z
```
</td></tr></table>

- avec `new Date(millisecondes)` :

<table class="code"><tr><td>

```js title="Code"
let uneDate = new Date(24 * 3600 * 1000);
console.log(uneDate);
```
</td><td>

```txt title="Résultat"
1970-01-02T00:00:00.000Z
```
</td></tr></table>


- avec `new Date(datestring)` :

<table class="code"><tr><td>

```js title="Code"
let uneDate = new Date("2020-01-01T00:02:00.000Z");
console.log(uneDate); 
```
</td><td>

```txt title="Résultat"
2020-01-01T00:02:00.000Z
```
</td></tr></table>

La méthode `parse(datestring)` a les mêmes paramètres, mais renvoie un timestamp.

- avec `new Date(year, month, [date], [hours], [minutes], [seconds], [ms])` :
  - `year` : sur 4 chiffres
  - `month` : de 0 (Janvier) à 11 (Décembre)
  - `date` : jour du mois. S’il n’est pas renseigné, alors il sera alimenté automatiquement par 1.
  - `hours`, `minutes`, `seconds`, `ms` : S’ils ne sont pas renseignés, alors ils seront alimentés par 0.

<table class="code"><tr><td>

```js title="Code"
let uneDate = new Date(2020,0,2,2);
console.log(uneDate);
```
</td><td>

```txt title="Résultat"
2020-01-02T01:00:00.000Z
```
</td></tr></table>

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
<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Paul",
  age: 30
};
 
console.log(JSON.stringify(user)); 
```
</td><td>

```json title="Résultat"
{"name":"Paul","age":30}
```
</td></tr></table>

Elle peut aussi prendre en paramètre :
- un tableau
- une donnée de type primitive

Cette méthode a également deux paramètres facultatifs : 
- `replacer` : 
  - Tableau de propriétés qui permet d’encoder seulement les propriétés présentes dans ce tableau
  - Fonction de type `function(key, value)` qui retourne une nouvelle valeur qui remplacera la valeur originale

<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Paul",
  age: 30
};
 
console.log(JSON.stringify(user, (key, value) => {
  return (key == 'age') ? undefined : value;
}));
```
</td><td>

```json title="Résultat"
{"name":"Paul"}
```
</td></tr></table>

- `space` : Nombre d’espaces permettant de formater le résultat

<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Paul",
  age: 30
};
 
console.log(JSON.stringify(user, null, 2));
```
</td><td>

```json title="Résultat"
{
  "name": "Paul",
  "age": 30
}
```
</td></tr></table>

La méthode `toJSON()` peut être utilisée comme `toString()` :
<table class="code"><tr><td>

```js title="Code"
let user = {
  name: "Paul",
  age: 30,
  
  toJSON() {
    return this.age;
  }
};
 
console.log(JSON.stringify(user));
```
</td><td>

```txt title="Résultat"
30
```
</td></tr></table>

La méthode `JSON.parse(str, [reviver])` convertit un JSON en objet :
<table class="code"><tr><td>

```js title="Code"
let json = '{"name":"Paul","age":30}';
console.log(JSON.parse(json).name);
```
</td><td>

```txt title="Résultat"
Paul
```
</td></tr></table>


Cette méthode a également un paramètre facultatif :
- `reviver` : Fonction de type `function(key, value)` qui retourne une nouvelle valeur qui remplacera la valeur originale

<table class="code"><tr><td>

```js title="Code"
let json = '{"name":"Paul", "age":30, "date":"1990-05-30T12:00:00.000Z"}';
 
console.log(
  JSON.parse(json, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  })
);
```
</td><td>

```json title="Résultat"
{ name: 'Paul', age: 30, date: 1990-05-30T12:00:00.000Z }
```
</td></tr></table>


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


## 3 Fonctions
### 3.1 Les paramètres
Paramètre par défaut dans une fonction : 
```js
let getName = (id = 1) => { … }
```

Les fonctions de rappel (callback) sont des fonctions passées en paramètre d’une autre fonction :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
Validation
```
</td></tr></table>


Pour utiliser un nombre indéfini de paramètres sous forme d’un tableau :
<table class="code"><tr><td>

```js title="Code"
let total = (...args) => {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
 
console.log(total(1,3,4));
```
</td><td>

```txt title="Résultat"
8
```
</td></tr></table>

Le paramètre du reste doit obligatoirement être le dernier paramètre.

L’opérateur de décomposition permet de faire l’opération inverse, à savoir transformer un tableau en une liste d’arguments qui sera passée comme paramètre de fonction :
<table class="code"><tr><td>

```js title="Code"
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(1, ...arr1, 2, ...arr2, 25));
```
</td><td>

```txt title="Résultat"
25
```
</td></tr></table>


Il peut aussi être utilisé pour fusionner plusieurs tableaux : 
<table class="code"><tr><td>

```js title="Code"
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
console.log(merged);
```
</td><td>

```txt title="Résultat"
[ 0, 3, 5, 1, 2, 8, 9, 15 ]
```
</td></tr></table>

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

<table class="code"><tr><td>

```js title="Code"
// Appelle la fonction 6 secondes après l'exécution du code
let timer = setTimeout(() => {
  console.log("Un autre texte");
}, 6000);
```
</td><td>

```txt title="Résultat"
Un autre texte
```
</td></tr></table>

La fonction `clearTimeout(timer)` permet d’annuler l’exécution.

La fonction `setInterval(func, [delay], [arg1], [arg2] ...)` permet d’exécuter une fonction ou un bloc de code en boucle selon un intervalle de temps fixe entre chaque appel.
<table class="code"><tr><td>

```js title="Code"
// Appelle la fonction toutes les secondes
let interval = setInterval(() => {
  console.log("Un intervalle");
}, 1000);
```
</td><td>

```txt title="Résultat"
Un intervalle
Un intervalle
Un intervalle
Un intervalle
...
```
</td></tr></table>

La fonction `clearInterval(interval)` permet d'annuler l’exécution.


## 4 Prototypes
Lorsque l'on fait appel à une propriété sur un objet, JavaScript va chercher si la propriété est présente sur l'objet puis sur son prototype, puis sur le prototype de son prototype (et ainsi de suite...). 

Un objet hérite des propriétés et des méthodes de l’objet dit prototype :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
true
true
L'animal marche
Le lapin marche
```
</td></tr></table>

La valeur de `this` correspond à l’objet qui appelle la méthode :
<table class="code"><tr><td>

```js title="Code"
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
```
</td><td>

```txt title="Résultat"
true
undefined
```
</td></tr></table>

La méthode `Object.keys(obj)` retourne seulement les propres clés de l’objet.  
L’utilisation de `for...in` boucle sur les propres clés de l’objet ainsi que sur les clés héritées.

Il est possible de ne pas prendre en compte les clés héritées grâce à la méthode `object.hasOwnProperty(key)`.


## 5 Classes
### 5.1 Syntaxe de base
Création d’une classe, avec getter et setter, et d’une instance de classe :
<table class="code"><tr><td>

```js title="Code"
class User {
  job = "Plombier";
 
  constructor(name) {
    this.name = name; // Appelle le setter
  }
 
  get name() {
    return this.name;
  }
  
  set name(value) {
    this.name = value;
  }
 
  sayName() {
    console.log(`Je m'appelle ${this.name}`); // Appelle le getter
  }
}
 
let user = new User("Robert");
user.sayName();
console.log(user.name);
console.log(user.job);
```
</td><td>

```txt title="Résultat"
Je m'appelle Robert
Robert
Plombier
```
</td></tr></table>

Dans une classe, nous avons :
<table class="code"><tr><td>

```js title="Code"
// Une classe est une fonction
console.log(typeof User);
 
// La méthode "constructor"
console.log(User === User.prototype.constructor); 
 
// Les méthodes sont dans le prototype
console.log(User.prototype.sayName);
 
// Il y a deux méthodes dans le prototype (en plus du constructeur)
console.log(Object.getOwnPropertyNames(User.prototype));
```
</td><td>

```txt title="Résultat"
function
true
[Function: sayName]
[ 'constructor', 'name', 'sayName' ]
```
</td></tr></table>


L’instruction `obj instanceof class` permet de déterminer si oui ou non l’objet est une instance de la classe :
<table class="code"><tr><td>

```js title="Code"
console.log(user instanceof User);
```
</td><td>

```txt title="Résultat"
true
```
</td></tr></table>

### 5.2 Héritage
Héritage avec surcharge de méthode et du constructeur :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
Sidonie court avec une vitesse de 10.
Sidonie vole !
Sidonie a une crête.
```
</td></tr></table>

### 5.3 Méthodes et propriétés static
Les méthodes et les propriétés `static` peuvent être exécutées sans passer par une instance. Elles peuvent être utilisées dans les classes héritées d'une classe de base.
<table class="code"><tr><td>

```js title="Code"
class User {
  static planet = "Terre";
 
  static staticMethod() {
    console.log(this === User);
  }
}
 
User.staticMethod(); 
console.log(User.planet);
```
</td><td>

```txt title="Résultat"
true
Terre
```
</td></tr></table>

### 5.4 Méthodes et propriétés private et protected
L’utilisation du caractère `#` pour définir une propriété ou une méthode `private` n’est pas encore pris en charge dans les moteurs JavaScript ou partiellement pris en charge via polyfilling.

Une propriété ou méthode `private` n’est accessible qu’à l’intérieur de la classe.

<table class="code"><tr><td>

```js title="Code"
class User {
  #country;
 
  constructor(name, country) {
    this.name = name;
    this.#country = country;
  }
 
  live() {
    console.log(`${this.name} habite en ${this.#country}`);
  }
}
 
user = new User("Paul", "France");
user.live();
console.log(user.#name);

```
</td><td>

```txt title="Résultat"
SyntaxError: Private field '#name' must be declared in an enclosing class
```
</td></tr></table>

Une propriété ou méthode `protected` est accessible à l’intérieur de la classe de base et dans les classes héritées. Le caractère `_` est utilisé pour les identifier.


### 5.5 Les classes mixin (héritage multiple)
Une classe mixin est une classe destinée à être composée par héritage multiple avec une autre classe pour lui apporter des fonctionnalités.

Utilisation d’une classe mixin :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
Dessiner une forme avec les dimensions : 200, 100
```
</td></tr></table>


Utilisation de plusieurs classes mixins :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
Dessiner une forme avec les dimensions : 300, 200
Déplacement de la forme
```
</td></tr></table>


## 6 Gestion d'exceptions
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

<table class="code"><tr><td>

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
</td><td>

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
</td></tr></table>

### 6.2 Créer ses propres erreurs
Création d'erreurs avec `SyntaxError, Error, ReferenceError` … :
<table class="code"><tr><td>

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
</td><td>

```txt title="Résultat"
Erreur JSON : Données incomplètes : Pas de name
```
</td></tr></table>

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
<table class="code"><tr><td>

```js title="Code"
window.onerror = (message, url, line, col, error) => {
  console.log(`${message}\n A la ligne/colonne ${line}:${col} dans ${url}`);
};
 
function readData() {
  unknownFunction(); 
}
 
readData();
```
</td><td>

```txt title="Résultat"
 ReferenceError: unknownFunction is not defined
 A la ligne/colonne 6:3 dans http://localhost/test/index.js
```
</td></tr></table>


### 6.5 Héritage
Création d’une classe d’erreur spécifique qui hérite d’une classe d’erreur standard :
<table class="code"><tr><td>

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
</td><td>

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
</td></tr></table>


Création d’une classe d’erreur spécifique qui hérite d’une autre classe d’erreur spécifique :
<table class="code"><tr><td>

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
</td><td>

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
</td></tr></table>



<br/>

:::tip Sources
https://javascript.info/  
https://developer.mozilla.org/fr/docs/Web/JavaScript  
https://www.codeheroes.fr/2017/12/23/javascript-heritage-multiple/
:::