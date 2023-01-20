# Git

## 1. Nommage des commits
```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- `Type` :
  - build : Modification qui affecte le système de build ou les dépendances externes (npm, webpack …).
  - ci : Intégration continue (Travis, Circle, Actions GitHub …)
  - docs : Modification de la documentation uniquement
  - feat : Ajout d'une fonctionnalité
  - fix : Correction de bug
  - perf : Amélioration des performances
  - refactor : Modification du code qui ne change rien au fonctionnement
  - style : Modification du style du code (formatage, espace, point-virgule manquant …)
  - test : Ajout de tests manquants ou modification de tests

<br/>

- `Scope` définit quelle partie de votre librairie/application est affectée par le commit (information facultative).

<br/>

- `Description` contient une description succincte des changements :
  - Utilisation de l'impératif présent ("change", et non pas "changed" ou "changes")
  - Sans majuscule au début
  - Pas de "." à la fin de la description

<br/>

- `Body` permet de détailler plus en profondeur les motivations derrière le changement (information facultative) :
  - Utilisation de l'impératif présent comme dans le sujet

<br/>  

- `Footer` contient les changements importants (Breaking Changes) et les références à des issues/PR (information facultative).   
Pour fermer une issue ou une PR, les mots-clés suivants peuvent être utilisés :   
  - close, closes, closed
  - fix, fixes, fixed
  - resolve, resolves, resolved
    
<br/>

Des exemples d’utilisation :  
[https://github.com/angular/angular/commits](https://github.com/angular/angular/commits/main)  
[https://github.com/karma-runner/karma/commits](https://github.com/karma-runner/karma/commits/master)