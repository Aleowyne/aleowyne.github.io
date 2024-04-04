# Bash

Lien vers un cheatsheet : [https://devhints.io/bash](https://devhints.io/bash)

## 1. Navigation

La commande `pwd` permet d’afficher le chemin absolu du répertoire courant.

La commande `cd` permet de se déplacer dans le système de fichiers en indiquant, en argument, le chemin du répertoire qui remplacera le répertoire courant.

<br/>

## 2. Aide

La commande `man` permet d’afficher la documentation d’une commande.

Il est possible de changer la langue de la documentation avec l’option suivante :

```bash
man -L fr <command>
```

La commande `help` permet de faire la même chose avec les commandes internes.

L’option `--help` permet d’accéder à l’aide interne des commandes.

La commande `apropos` permet de lister les pages des manuels liées aux commandes dont le nom ou la description contient les mots passés en arguments.

<br/>

## 3. Répertoires et fichiers

Tous les chemins relatifs commencent par `/`, sinon ce sont des chemins absolus.

Les symboles spéciaux utilisés dans les chemins d’accès sont :

| Symbole | Description |
| --- | --- |
| `..` | Accès au répertoire parent |
| `/` | Permet de séparer les répertoires et fichiers |
| `.` | Accès au répertoire courant |
| `~` | Accès au répertoire personnel de l’utilisateur |

<br/>

La commande `ls` permet de lister les répertoires et fichiers présents dans le répertoire courant.

Le plus souvent, la commande est associée avec l’option `-l` qui permet d’afficher des informations détaillées sur le répertoire ou le fichier : 
- un premier caractère permettant d’indiquer si l’élément est un répertoire (`d`) ou un fichier (`-`)
- les droits d’accès (voir § sur les utilisateurs et les droits)
- le nom du propriétaire
- le nom/id du groupe propriétaire
- la taille en octets
- le jour de la dernière modification
- la date de dernière modification
- le nom du fichier ou du répertoire

Exemple :
```bash
> ls -l
total 1
-rw-r--r-- 1 aleowyne dev 191 Feb 28 23:09 index.md
drwxr-xr-x 1 aleowyne dev 0 Feb 10 22:43 node/
drwxr-xr-x 1 aleowyne dev 0 Mar  3 19:57 ssg/
drwxr-xr-x 1 aleowyne dev 0 Feb 28 23:04 tool/
```

<br/>

La commande `mkdir` permet de créer des répertoires et la commande `touch` permet de créer des fichiers.

La commande `rm` permet de supprimer des fichiers. Pour les répertoires, ils peuvent être supprimés de plusieurs façons :

```bash
# Supprime un répertoire vide
rmdir <directory>
# Ou
rm -d <directory>

# Supprime un répertoire et son contenu
rm -r <directory>
```

> ❗ La commande `rm -rf` permet de confirmer directement la suppression du répertoire et de son contenu.

<br/> 

La commande `mv` permet de :
- déplacer un fichier dans un répertoire cible
- déplacer un répertoire dans un autre répertoire cible
- renommer un fichier
- renommer un répertoire si le répertoire cible n’existe pas

```bash
# Format : mv <source> <destination>
# Renomme le fichier file1.txt en file2.txt
mv file1.txt file2.txt 
```

> ❗ Si le nouveau fichier existe déjà, il est écrasé.

<br/>

La commande `cp` permet de copier un fichier ou un répertoire (avec l’option `-R`) :

```bash
# Format : cp <source> <destination>
# Copie le fichier file1.txt pour créer le fichier file2.txt
cp file1.txt file2.txt
```

<br/>

## 4. Utilisateurs et droits

La commande `id` permet de connaître son identifiant utilisateur et les groupes dont on fait partie.

Exemple :

```bash
> id
uid=197609(aleowyne) gid=197609(dev) groups=197609(dev)
```

<br/>

Les fichiers à connaître :
- `/etc/passwd` : La liste des informations de connexion des utilisateurs
- `/etc/shadow` : La liste des mots de passe cryptés des utilisateurs (peut ne pas exister)
- `/etc/group` : La liste des groupes d’utilisateurs

<br/>

Les droits d’accès des fichiers et répertoires sont visibles avec la commande `ls -l`. 

Exemple : `rwxr-xr--`

Ils sont découpés en 3 parties de 3 caractères :
- La première partie concerne les droits pour le propriétaire du fichier/répertoire
- La seconde partie concerne les droits pour les membres du groupe propriétaire du fichier/répertoire
- La troisième partie concerne les droits pour les autres utilisateurs du système

Chaque partie est composé comme suit :
- Le premier caractère concerne les droits de lecture `r`.
  - Pour un fichier, il permet de le lire et de le copier.
  - Pour un répertoire, il permet de lister son contenu.
- Le second caractère concerne les droits d’écriture `w`.
  - Pour un fichier, il permet de modifier le contenu.
  - Pour un répertoire, il permet d’ajouter, de renommer et de supprimer les fichiers présents à l’intérieur.
- Le troisième caractère concerne les droits d’exécution `x`.
  - Pour un fichier, il permet de l’exécuter, s’il est exécutable.
  - Pour un répertoire, il permet de se positionner à l’intérieur (avec `cd`)

> 💡 Si un droit n’est pas actif, le caractère est remplacé par `-`.

<br/>

La commande `chmod` permet de modifier les droits d’accès d’un fichier ou d’un répertoire. L’option `-R` permet d’appliquer les droits aux fichiers/répertoires à l’intérieur d’un répertoire.

- Première notation `chmod <public><operation><auth> <file_or_repository>` avec :
  - `public` qui peut prendre les valeurs suivantes :
    - `u` : propriétaire
    - `g` : groupe du propriétaire
    - `o` : autres utilisateurs
    - `a` : toutes les valeurs (=`ugo`)
  - `operation` qui peut prendre l’une des valeurs suivantes :
    - `+` : ajout d’un droit
    - `-` : suppression d’un droit
    - `=` : affectation d’un droit
  - `auth` qui peut prendre les valeurs suivantes :
    - `r` : droit en lecture
    - `w` : droit en écriture
    - `x` : droit en exécution

  Exemple : 
  ```bash
  # Droits en écriture pour le groupe et les autres utilisateurs sur le fichier file.txt
  chmod go+w file.txt 
  ```

<br/>

- Seconde notation (sert à affecter directement des droits) `chmod <octal_owner><octal_group><octal_other> <file_or_repository>`.

  Les valeurs octales sont représentées comme suit :

  | Valeur octale | Droits |
  | --- | --- |
  | 0 | `---` |
  | 1 | `--x` |
  | 2 | `-w-` |
  | 3 | `-wx` |
  | 4 | `r--` |
  | 5 | `r-x` |
  | 6 | `rw-` |
  | 7 | `rwx` |

  Exemple : 
  ```bash
  # Tous les droits pour le propriétaire, les droits en lecture et écriture pour le groupe et 
  # les autres utilisateurs sur le fichier file.txt (équivalent à rwxrw-rw-)
  chmod 766 file.txt
  ```

<br/>

La commande `chown` permet de changer le propriétaire d’un fichier. Le super-utilisateur est souvent le seul à pouvoir utiliser cette commande. L’option `-R` permet de modifier également le propriétaire des fichiers/répertoires à l’intérieur d’un répertoire.

```bash
chown <user> <file_or_repository>
```

<br/>

La commande `chgrp` permet de changer le groupe d’utilisateurs d’un fichier. Le super-utilisateur et le propriétaire sont les seuls à pouvoir utiliser cette commande. L’option `-R` permet de modifier également le groupe d’utilisateurs des fichiers/répertoires à l’intérieur d’un répertoire.

```bash
chgrp <group> <file_or_repository>
```

<br/>

La commande `sudo` permet de prendre temporairement la place du super-utilisateur pour exécuter une commande, comme écrire dans un fichier présent dans le dossier `etc`. 

```bash
sudo <command>
```

<br/>

## 5. Manipuler des fichiers textes

La commande `cat` permet d’afficher le contenu d’un ou plusieurs fichiers dans le terminal.

La commande `head` permet d’afficher les 10 premières lignes d’un fichier.

La commande `tail` permet d’afficher les 10 dernières lignes d’un fichier.

Pour ces 2 commandes, des options sont disponibles :
- `-n` : Nombre de lignes affichées
- `-c` : Nombre de caractères affichés
- `-f` (pour `tail`) : Attend de nouvelles modifications à la fin du fichier pour les afficher

<br/>

La commande `more` permet d’afficher le contenu d’un fichier page par page avec un défilement du haut vers le bas.

La commande `less` permet d’afficher le contenu d’un fichier avec un défilement dans les deux sens haut ↔ bas. Elle permet également d’effectuer des recherches dans le fichier et d’afficher les lignes concernées grâce aux commandes internes :
- `X/pattern` : Recherche la Xème occurrence du motif de la position courante vers la fin du fichier. Si le nombre X n'est pas renseigné, alors une seule occurrence sera recherchée.
- `X?pattern` : Recherche la Xème occurrence du motif de la position courante vers le début du fichier. Si le nombre X n'est pas renseigné, alors une seule occurrence sera recherchée.
- `&pattern` : Sélectionne les lignes qui contiennent le motif.

<br/>

L’édition d’un fichier de texte peut être effectuée via les commandes `vi`, `vim`, `nano`, `emacs` …

Et également avec la commande `sed` qui permet d’éditer le contenu d’un fichier de façon automatisée.

<br/>

## 6. Recherche de fichiers avec les motifs

Des caractères spéciaux peuvent être utilisés pour désigner des fichiers :

| Caractère | Description |
| --- | --- |
| `*` | Une chaîne de caractères vide ou quelconque |
| `?` | Un caractère quelconque |
| `[alp]` | Un caractère parmi l’ensemble |
| `[a-z]` | Un caractère dans l’intervalle |
| `[!alp]` ou `[!a-z]` | Aucun caractère de l’ensemble ou de l’intervalle |

<br/>

> 💡 Le caractère `.` ne peut pas être trouvé avec les caractères spéciaux `*` et `?`, il doit donc être indiqué clairement dans le motif.

<br/>

Un exemple permettant d’afficher les fichiers dont le nom commence par un caractère entre "a" et "z" suivi par 0 ou plusieurs caractères et se termine par un chiffre suivi de l’extension ".txt" :
```bash
echo [a-z]*[0-9].txt
```

<br/>

Pour des motifs plus complexes, l’option `extglob` peut être utilisée.
```bash
# Pour l'activer
shopt -s extglob

# Pour le désactiver
shopt -u extglob
```

Les caractères spéciaux utilisés avec `extglob` activée sont les suivants :

| Caractère | Description |
| --- | --- |
| `?(pattern_list)` | 0 ou 1 fois un des motifs de la liste |
| `*(pattern_list)` | 0 ou X fois un des motifs de la liste |
| `+(pattern_list)` | 1 ou X fois un des motifs de la liste |
| `@(pattern_list)` | Un seul motif de la liste |
| `!(pattern_list)` | Aucun motif de la liste |
| <code>pattern1 &#124; pattern2</code> | L’un des deux motifs |

<br/>

Un exemple permettant de lister les fichiers commençant par "ab" ou "def", suivi par 0 ou plusieurs caractères et se terminant par ".jpg" ou ".gif" :

```bash
ls +(ab|def)*+(.jpg|.gif)
```

<br/>

La commande `find` permet de rechercher des fichiers/répertoires en fonction de plusieurs options :
- `-name <file>` : permet de rechercher en fonction du nom du fichier (motifs autorisés)
- `-iname <file>` : permet de rechercher en fonction du nom du fichier (motifs autorisés) sans être sensible à la casse
- `-user <username>` : permet de rechercher en fonction de l’utilisateur du fichier
- `-size <size>` : permet de rechercher en fonction de la taille du fichier
- `-mtime <time>` : permet de rechercher en fonction d’une durée en jours depuis la dernière modification du fichier
- `-exec <cmd>` : permet d’exécuter une commande sur les fichiers trouvés
- `-type <type>` : permet de rechercher des répertoires (`d`), des fichiers (`f`) ou des liens symboliques (`l`)
- `!` : négation de l’option qui suit
- `-o` : unions d’options (ou)

Un exemple permettant de trouver les fichiers se terminant par ".tmp" et modifiés depuis moins de 15 jours, dans le répertoire courant :
```bash
find . -iname "*.tmp" -mtime -15
```

<br/>

La commande `grep` permet de rechercher dans le contenu des fichiers et affiche les lignes trouvées. Les options les plus courantes sont :
- `-n` : pour afficher le numéro de ligne
- `-v` : pour récupérer toutes les lignes ne correspondant pas à la recherche
- `-c` : pour donner le nombre de lignes trouvées
- `-i` : insensible à la casse
- `-w` : pour limiter la recherche à un mot

Un exemple permettant de trouver toutes les lignes dans les fichiers "file1.txt" et "file2.txt" commençant par "Le" :
```bash
grep "^Le" file1.txt file2.txt
```

<br/>

Des expression régulières peuvent être utilisées avec `grep`, à l’aide des caractères suivants :

| Caractère | Description |
| --- | --- |
| `.` | Un caractère quelconque (sauf retour à la ligne) |
| `*` | 0 ou plusieurs fois ce qui précède |
| `+` | Au moins une fois ce qui précède |
| `?` | 0 ou une fois ce qui précède |
| `^` | Début de ligne |
| `$` | Fin de ligne |
| `\` | Inhibition du caractère qui suit |
| `[alp]` | Un caractère de l’ensemble |
| `[a-z]` | Un caractère de l’intervalle |
| `[^alp]` | Aucun caractère de l’ensemble ou de l’intervalle |
| <code>&#124;</code> | Alternative |
| `\{…\}` | Un nombre de fois ce qui précède (accolades) |
| `\(…\)` | Un groupe (parenthèses) |

<br/>

## 7. Constructions syntaxiques

### 7.1 Variables

Utilisation des variables :
```bash
> letter=a
> echo $letter
a
> echo ${letter}1
a1
```

Nombre de caractères dans une variable :

```bash
> echo ${#letter}
1
```

Assignation d’une valeur par défaut si la variable n’a pas été affectée :

```bash
# ${variable:-default_value}
> echo ${another_var:-nothing}
nothing
```

Substitution de motif :

```bash
> filename=/home/user/file11.txt

# Substitution du premier motif trouvé
# ${variable/pattern/new_pattern}
> echo ${filename/1/2}
/home/user/file21.txt

# Substitution de tous les motifs trouvés
# ${variable//pattern/new_pattern}
> echo ${filename//1/2}
/home/user/file22.txt

# Suppression du préfixe
# ${variable#pattern}
> echo ${filename#/*/}
user/file11.txt

# Suppression du préfixe le plus grand
# ${variable##pattern}
> echo ${filename##*/}
file11.txt

# Suppression du suffixe
# ${variable%pattern}
> echo ${filename%/*}
/home/user

# Suppression du suffixe le plus grand
# ${variable%%pattern}
> echo ${filename##/*} # Ne renvoie rien
```

Extraction de sous-chaînes avec la position qui est positive ou négative et la longueur qui est facultative.

```bash
# ${variable: position:size}
> filename=/home/user/file11.txt
> echo ${filename: 6:4}
user
```

<br/>

### 7.2 Substitution de commandes

Substitution de commandes :

```bash
> directory=$(pwd)
> echo $directory 
/home/user
```

<br/>

### 7.3 Inhibitions

Inhibitions des caractères spéciaux :

```bash
# Inhibition totale : empêche toutes interprétations
> echo '$(pwd)'
$pwd

# Inhibition partielle : substitutions de variables, de commandes et inhibition avec "\" fonctionnent
> echo "$(pwd)" 
/home/user

# Inhibition d'un seul caractère avec "\"
> echo \$letter 
$letter
```

<br/>

## 8. Gestion des processus

Il est possible d’afficher le code retour d’une commande avec `$?`. La valeur 0 indique que la commande s’est correctement déroulée. Ce qui n’est pas le cas avec une valeur différente de 0.
```bash
> pwd
> echo $?
0
```

<br/>

La commande `ps -f` permet d’afficher différentes informations sur les processus en cours :
- UID : Identifiant de l’utilisateur qui a lancé le processus
- PID : Identifiant du processus
- PPID : Identifiant du processus parent
- STIME : Heure de démarrage du processus
- TIME : Temps cumulé du processus
- CMD : Commande et arguments

Exemple :

```bash
UID        PID  PPID  C STIME TTY          TIME CMD                                       
aleowyne   197     1  0 23:11 tty1     00:00:00 bash                               
aleowyne   221   197  0 23:20 tty1     00:00:00 ps -f
```

<br/>

Pour exécuter un processus en arrière-plan, il faut ajouter le caractère `&` après la commande :
```bash
sleep 100 &
```

<br/>

La commande `jobs` permet d’afficher les processus qui sont en cours d’exécution en arrière-plan. Chaque processus se voit attribuer un numéro de tâche. La commande `fg %n` permet de reprendre la tâche "n" en avant-plan. Et la commande `bg` permet d’envoyer la tâche en arrière-plan après avoir tapé <kbd>Ctrl</kbd> + <kbd>Z</kbd>.

<br/>

Il est également possible d’arrêter ou de suspendre un processus avec la commande `kill`. 

```bash
# Format : kill -<signal_name_or_id> <PID>
# Permet d'arrêter le processus 221
kill -15 221 
```

Liste des signaux : [https://fr.wikipedia.org/wiki/Signal_(informatique)](https://fr.wikipedia.org/wiki/Signal_(informatique))

<br/>

## 9. Entrées et sorties

Les entrées et sorties d’une commande ont les caractéristiques suivantes :

| Type | Nom technique | Canal |
| --- | --- | --- |
| Entrée standard | stdin | 0 |
| Sortie standard | stdout | 1 |
| Sortie d’erreurs | stderr | 2 |

<br/>

### 9.1 Sortie standard

Pour rediriger vers la sortie, les caractères suivants peuvent être utilisés :

- `>` : place le résultat de la commande dans un fichier, par exemple (en écrasant ce qui existe déjà)
- `>>` : ajoute le résultat de la commande à la fin d’un fichier existant, par exemple

```bash
ls > file1.txt
ls >> file2.txt

# Vers un dispositif dit "trou noir"
ls > /dev/null
```

<br/>

### 9.2 Sortie des erreurs

Pour rediriger vers la sortie des erreurs, les caractères suivants peuvent être utilisés :

- `2>` : place les erreurs dans un fichier, par exemple (en écrasant ce qui existe déjà)
- `2>>` : ajoute les erreurs à la fin d’un fichier existant, par exemple

```bash
ls 2> file1.txt
ls 2>> file2.txt

# Vers un dispositif dit "trou noir"
ls no_exist 2> /dev/null 
```

Pour rediriger les sorties standard et des erreurs dans un fichier, en même temps :

```bash
ls no_exist exist &> file1.txt
```

<br/>

### 9.3 Entrée standard

Pour rediriger vers l’entrée standard, le caractère `<` peut être utilisé.

```bash
# Affiche le nombre de lignes dans le fichier
wc -l < file1.txt
```

<br/>

### 9.4 Redirection entre commandes

Plusieurs commandes sans aucun lien peuvent être saisies sur une seule ligne en les séparant avec le caractère `;`.

Plusieurs commandes, ayant besoin d’une redirection entre elles, peuvent être saisies sur une seule ligne en les reliant avec le caractère `|`.

```bash
# Affiche le nombre de fichiers dans le répertoire courant
ls | wc -l
```

<br/>

## 10. Filtres

La commande `split` permet de découper un fichier en plusieurs autres fichiers, en fonction d’un nombre d’octets ou de lignes.

```bash
# Le fichier "file.txt" est découpé en plusieurs parties de 30 octets qui seront ajoutées 
# dans des fichiers commençant par "file"
split -b 30 file.txt file

# Avec des blocs de 10 lignes
split -l 10 file.txt file
```

<br/>

La commande `sort` permet d’afficher la sortie standard ou le contenu d’un fichier en triant les lignes par ordre alphabétique. Les options suivantes peuvent être utilisées :
- `-n` : tri par ordre numérique
- `-k <num_column>` : tri en fonction d’une colonne
- `-t <char>` : permet de définir le séparateur de colonnes. Par défaut, c’est l’espace.
- `-r` : inversion du tri

Un exemple permettant d'afficher le contenu du fichier "file.txt" en triant les lignes en fonction de la seconde colonne (donnée numérique). Les colonnes sont séparées par le caractère `;`.
```bash
cat file.txt | sort -nk 2 -t ";"
# Ou
sort -nk 2 -t ";" file.txt
```

<br/>

La commande `cut` permet d’extraire les colonnes d’un fichier. Les options suivantes peuvent être utilisées :
- `-f <num_column>` : permet de sélectionner une colonne. Si plusieurs colonnes doivent être extraites, les séparer par une virgule ou un tiret.
  - Pour extraire les colonnes 1 et 3 : `-f 1,3`
  - Pour extraire les colonnes de 1 à 3 : `-f 1-3`
- `-d <char>` : permet de définir le séparateur de colonnes. Par défaut, c’est la tabulation.

Un exemple permettant d'afficher les colonnes 1 et 3 du fichier "file.txt". Les colonnes sont séparées par un espace.
```bash
cat file.txt | cut -d " " -f 1,3
# Ou
cut -d " " -f 1,3 file.txt
```

<br/>

La commande `paste` permet de concaténer les colonnes présentes dans plusieurs fichiers. L’option `-d` permet d’indiquer un caractère séparateur. Par défaut, c’est l’espace.

<br/>

La commande `join` permet de concaténer les colonnes présentes dans plusieurs fichiers, en fonction d’une jointure.

Un exemple permettant de faire une jointure entre la colonne 1 du fichier "file1.txt" et la colonne 2 du fichier "file2.txt" :
```bash
join -1 1 -2 2 file1.txt file2.txt
```

<br/>

La commande `uniq` permet de supprimer les lignes doublons qui sont adjacentes.

<br/>

La commande `tr` remplace une liste de caractère par une autre, par exemple pour transformer les majuscules en minuscule.

```bash
tr "[A-Z]" "[a-z]" < file.txt
```

<br/>

## 11. Expressions arithmétiques

La commande `expr` permet d’effectuer des calculs.

```bash
> a = 5
> expr $a + 10
15
```

Il est également possible d’utiliser la substitution arithmétique :

```bash
> a = 5
> $((a+10))
15
```

Ou avec la commande `let` :

```bash
> a = 5
> let "b=a+10"
> echo $b
15

# Ou en abrégé
> ((b=a+10))
> echo $b
15
```

<br/>

La déclaration d’une variable de type entier s’effectue avec la commande `declare`. Dans ce cas, plus besoin d'utiliser les commandes `let` et `expr`.

```bash
# Format : declare -i <name>=<expression>
> declare -i b=5+10
> b=(b*2)
> echo $b
30
```

<br/>

La commande `bc` a un mode interactif qui s’utilise comme une calculatrice et a un mode commande qui s’utilise comme un filtre. Les nombres décimaux peuvent être utilisés avec cette commande.

<br/>

## 12. Archives

La commande `tar` permet de gérer des archives.

Pour créer une archive à partir de fichiers ou d’un ensemble de fichiers présents dans un répertoire :
```bash
tar cvf <name_archive>.tar <file_or_repository>

# Avec compression
tar czvf <name_archive>.tar <file_or_repository>
```

Pour extraire une archive dans le répertoire courant :
```bash
tar xvf <name_archive>.tar

# Avec décompression
tar xzvf <name_archive>.tar
```

<br/>

La commande `gzip` permet de gérer la compression d’un fichier ou d’une archive.

La compression d’un fichier crée un autre fichier avec l’extension `.gz` :

```bash
gzip <filename>
```

Pour la décompression d’un fichier :

```bash
gunzip <compressed_file>.gz
```

<br/>

## 13. Scripts shell

### 13.1 Introduction

Au début d’un fichier contenant un script shell, le "shebang" doit toujours être présent :
```bash
#!/bin/bash
```

Le script doit être exécutable (à faire une seule fois) :
```bash
chmod +x <file>.sh
```

Pour exécuter un script :
```bash
./<file>.sh
```

<br/>

### 13.2 Arguments

Un script peut être appelé avec des arguments. 

Des variables spéciales peuvent être utilisées dans ce script pour les consulter :

| Variables | Description |
| --- | --- |
| `$0` | Le nom du script |
| `$1` `$2` `$3` ... | Pour lire le premier, deuxième, troisième ... argument. Pour les variables avec plus d’un chiffre, il faut utiliser les accolades : `${12}` |
| `$#` | Nombre d’arguments |
| `$*` et `$@` | Liste des arguments : arg1, arg2, arg3 ... |
| `${$1:-default}` | Permet d’indiquer une valeur par défaut à un argument non renseigné |
| `${$1:?"message"}` | Permet d’afficher un message si l’argument n’est pas renseigné |

<br/>

### 13.3 Test d’une expression

Le test d’une expression s’écrit de plusieurs façons différentes :
```bash
test <expression>
# ou
[ <expression> ]
# ou (test étendu)
[[ <expression> ]]
```

Les codes retour du test sont :
- 0 dans le cas où c’est vrai
- 1 dans le cas où c’est faux

<br/>

> ❗ Dans le cas où un argument n’existe pas, utiliser des guillemets autour de cet argument : `"$1"`.

<br/>

Les opérateurs de comparaison arithmétiques sur les entiers sont :

| Opérateur | Description |
| --- | --- |
| `-eq` | Egal à |
| `-ne` | Différent de |
| `-gt` | Plus grand que |
| `-ge` | Plus grand ou égal à |
| `-lt` | Plus petit que |
| `-le` | Plus petit ou égal à |

Exemple :
```bash
> [ 10 -gt 1 ]
# ou : test 10 -gt 1
> echo $?
0
```

<br/>

Les opérateurs de comparaison sur les chaînes de caractères sont :

| Opérateur | Opérateur (test étendu) | Description |
| --- | --- | --- |
| `=` ou `==` |  | Egal à |
| `!=` |  | Différent de |
| `\<` | `<` | Inférieur à |
| `\>` | `>` | Supérieur à |
| `-z` |  | Tester si une chaîne est vide |
| `-n` |  | Tester si une chaîne n’est pas vide |
|  | `=~` | Correspond à une expression régulière |
|  | `==` | Correspond à un motif |

Exemple :
```bash
# Si variable vide
> text="test"
> [ -z $text ]
> echo $?
1
```

<br/>

Les opérateurs de comparaison sur les fichiers/répertoires sont :

| Opérateur | Description |
| --- | --- |
| `-e` | Tester s’il existe |
| `-s` | Tester s’il est vide |
| `-f` | Tester si c’est un fichier ordinaire |
| `-d` | Tester si c’est un répertoire |
| `-r` | Tester s’il est accessible en lecture |
| `-w` | Tester s’il est accessible en écriture |
| `-x` | Tester s’il est exécutable |

<br/>

Les opérateurs logiques sont :

| Opérateur | Opérateur (test étendu) | Description |
| --- | --- | --- |
| `!` |  | NON (l’inverse) |
| `-a` | `&&` | ET |
| `-o`| <code>&#124;&#124;</code> | OU |

Exemple :

```bash
# Si variable vide ou variable égale à "test"
> text="test"
> [ -z $text -o $text=="test" ]
> echo $?
0
```

<br/>

### 13.4 Structures conditionnelles

Les conditions sont reliées par l’un des opérateurs suivants :
- `&&` : ET
- `||` : OU

<br/>

La structure conditionnelle avec `if` est sous la forme suivante :
```bash
if <test>
then
  ...
elif <other_test>
then
  ...
else
  ...
fi
```

<br/>

La structure de branchement conditionnel avec `case` est sous la forme suivante :
```bash
case <expression> in
<pattern1>)
  ...;;
<pattern2>)
  ...;;
<pattern3> | <pattern4>)
  ...;;
esac
```

<br/>

### 13.5 Structures itératives

La structure itérative avec `while` est sous la forme suivante :
```bash
while <test>
do
  ...
done
```

<br/>

La structure itérative avec `for` est sous la forme suivante :
```bash
for <variable> in <list>
do
  ...
done
```

Une liste de valeurs entre 2 chiffres est créée avec la commande `seq` :
```bash
seq <start_number> <end_number>
```

<br/>

La boucle `for` est également présente sous la forme suivante :
```bash
for ((i=1; i<=10; i++))
do
  ...
done
```

<br/>

Pour lire les lignes une par une d’un fichier donné en argument du script :
```bash
while read <variable>
do
  ...
done <$1
```

<br/>

La commande `continue` permet de renvoyer au début de la boucle sans exécuter le reste des instructions du corps de la boucle.

La commande `break` permet de sortir directement de la boucle.

<br/>

### 13.6 Fonctions

La déclaration d’une fonction se fait sous la forme suivante :
```bash
function <name> {
  ...
}
```

> 💡 Le mot-clé `function` est facultatif.

<br/>

Les arguments d’une fonction sont utilisés comme ceux d’un script : `$1`, `$2` …

La fonction est appelée juste en tapant le nom de la fonction suivi des arguments si nécessaire, comme pour une commande ou un script.
```bash
# Format : <function_name> <arg1> <arg2> ... <argn>
# Exemple avec la fonction get_max et 2 arguments :
get_max 3 10
```

<br/>

Le mot-clé `return` dans une fonction permet de renvoyer un entier entre 0 et 255.

Pour retourner autre chose, le résultat doit être envoyé sur la sortie standard avec la commande `echo`, puis la valeur est récupérée en utilisant la syntaxe de substitution de commande.

```bash
get_max() {
  if [[ $1 -gt $2 ]]
  then
    echo $1;
  else
    echo $2;
  fi
}

echo $(get_max 2 3); # Affiche 3
```