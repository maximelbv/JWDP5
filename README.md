![image](https://user-images.githubusercontent.com/58565963/167068263-f4ac2812-d678-488d-bf7b-25976485437c.png)

5ème projet de la formation 'Développeur Web' OpenClassrooms.<br>
L'objectif est de créer la partie frontend d'un site e-commerce de meubles à l'aide de l'API fournie.

## Prérequis 
<ul>
    <li>Node JS (v15.7.0 utilisée durant le développement)</li>
    <li>npm (8.1.3 utilisée durant le développement)</li>
</ul>

## Installation
- Clonez ce dépôt
- A partir du dossier du projet, entrez ces commandes dans le terminal:
```bash
cd back
npm install
node server
```

le serveur devrait se lancer sur le port 3000 du localhost. <br>

## Compétences évaluées 
<ul>
  <li>Gérer des événements Javascript</li>
  <li>Interagir avec un web service avec Javascript</li>
  <li>Valider des données issues de sources externes</li>
  <li>Créer un plan de test pour une application</li>
</ul>

## Technologies utilisées
<ul>
  <li>HTML</li>
  <li>SASS</li>
  <li>Javascript Vanilla</li>
  <li>Git</li>
</ul>

## Design

Police d'écriture : [Raleway](https://fonts.google.com/specimen/Raleway) <br>
icones : [FontAwesome](https://fontawesome.com/)

### Référence des couleurs
| Application            | Couleur                                                               |
| ----------------- | ------------------------------------------------------------------ |
| Texte | ![#2B2B2B](https://via.placeholder.com/10/2B2B2B?text=+) #2B2B2B |
| Fond | ![#F5F5F5](https://via.placeholder.com/10/F5F5F5?text=+) #F5F5F5 |
| Fond (carrousel) | ![#C2DEE0](https://via.placeholder.com/10/C2DEE0?text=+) #C2DEE0 |
| Fond (article) | ![#ADD4FF](https://via.placeholder.com/10/ADD4FF?text=+) #ADD4FF |
| Liens | ![#6888f3](https://via.placeholder.com/10/6888f3?text=+) #6888f3 |
| Boutons | ![#fbb03b](https://via.placeholder.com/10/fbb03b?text=+) #fbb03b |

## Architecture générale 

### Accueil
Page d'accueil qui affiche dynamiquement tout les articles disponibles à la vente + carrousel qui affiche les nouveaux produits / promotions <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/accueil.png?raw=true)
### Page produit
Page produit qui affiche dynamiquement le produit sélectionné par l'utilisateur <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/article.png?raw=true)
### Panier
Page panier qui affiche les articles ajoutés dans le panier + formulaire de commande à remplir par l'utilisateur <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/panier.png?raw=true)
### page de validation
Page de validation qui indique à l'utilisateur que sa commande est validée <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/validation.png?raw=true)
### Page d'annulation
Page d'annulation qui indique à l'utilisateur que sa commande n'a pas été validée <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/cancellation.png?raw=true)
### Panier vide
Page de panier vide <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/panierVide.png?raw=true)
### 404
Page d'erreur 404 <br>
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media/img/404.png?raw=true)

## Plan de tests 
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media//img/planDeTest1.png?raw=true)
![alt text](https://github.com/maximelbv/MaximeLefebvre_5_300921/blob/master/front/media//img/planDeTest2.png?raw=true)
