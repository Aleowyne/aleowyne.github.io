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