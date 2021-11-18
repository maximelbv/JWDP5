// Objet de test
let testObject = {
    name : 'test name',
    price : 12000,
    _id : 123456789,
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
    imageUrl : "https://via.placeholder.com/1000x1000",
    varnish : ['red', 'green', 'blue']
};

// va stocker la couleur sélectionnée par l'utilisateur
var colorSelected;

// bouton 'ajouter au panier'
let addBtn = document.getElementById('displayArticleBtn');

// paramètres de l'url, utilisés dans la fonction getIdProduct et addItem
let url = window.location;
let params = (new URL(url)).searchParams;

// modèle pour les objets créés dans le 'cart' du local storage
class cartProduct {
    constructor(id, quantity, color) {
        this.id = id;
        this.quantity = quantity;
        this.color = color;
    }
}

// stock la couleur de background de l'élément en paramètre dans la variable 'colorSelected'
// elle est lancée au clic des divs qui affichent les couleurs
function getColor(color) {
    colorSelected = color.style.background;
}

// Créé les balises / récupère les élements html et 
// affiche les éléments (res) sur la page d'article (article.html)
function displayIdProduct(res){
    let articleDisplay       = document.querySelector('.displayArticle');
    let articleInfos         = document.querySelector('.displayArticleInfo');
    let descriptionContainer = document.querySelector('.informationsDescription');
    let colorList            = document.querySelector('.informationsColors');

    let img = document.querySelector('.articleImg');
    img.setAttribute('src', res.imageUrl);
    img.setAttribute('alt', res.name);
    articleDisplay.appendChild(img);

    let name = document.createElement('p');
    name.classList.add('displayArticleInfoName');
    name.innerText = res.name;
    articleInfos.appendChild(name);

    let price = document.createElement('p');
    price.classList.add('displayArticleInfoPrice');
    price.innerText = (res.price/100) + ' €'; // le prix est divisé par 100 pour le convertir en €
    articleInfos.appendChild(price);

    let description = document.querySelector('.informationsDescriptionDesc');
    description.innerText = res.description;
    descriptionContainer.appendChild(description);

    // 'varnish' possède plusieurs entrées donc on le boucle pour afficher toutes ses couleurs
    for(i = 0;i < res.varnish.length; i++){
        let color = document.createElement('div');   
        color.classList.add('informationsColorsColor');
        color.style.background = res.varnish[i];
        color.setAttribute('onClick', 'getColor(this)'); // au clic, lance la fonction 'getColor' qui va récupérer la couleur de fond et la stocker dans 'selectedColor'
        colorList.appendChild(color);
        color.addEventListener('click', () => {  // ajoute des bordures a la couleur sélectionnée, et active le bouton d'ajout au panier
            document.querySelectorAll('.informationsColorsColor').forEach(color => {
                color.removeAttribute('id', 'selectedColor');
            })
            color.setAttribute('id', 'selectedColor'); 
            addBtn.removeAttribute('disabled');
        })
    }
}

// Récupère les données de l'article et les lance en paramètres de la fonction 'displayProduct'
function getIdProduct() {
    fetch(`http://localhost:3000/api/furniture/${params.get('id')}`)
    .then(res => {
        if(res.ok) {
            res.json().then(data => {
                displayIdProduct(data);
            });
        } else {
            console.log('Error');
        }
    })
}

// Fonction d'ajout d'article au panier.
// Elle vérifie plusieurs conditions et crée l'item / crée la valeur / incrémente la valeur.quantité en fonction de ces conditions.

// 1 : crée une variable qui va être le nom de l'objet inséré dans le cart (sa valeur est une string de l'id de la page actuelle + la couleur sélectionnée par l'utilisateur)
// 2 : crée une variable 'cart' qui va être la clé insérée dans le local storage
// 3 : vérifie si la clé 'cart' existe dans le local storage :
//         si oui : - traduit le 'cart' du local storage en JSON
//                  - si l'objet existe déjà dans le cart : 
//                          vérifie si la valeur 'color' est égale à la couleur sélectionnée
//                              si oui : ajoute 1 à la quantité du produit
//                              si non : crée un nouveau produit dans le cart    
//                  - si non : crée un nouveau produit dans le cart
//         si non : - défini le cart comme un objet vide,
//                  - crée un nouveau produit dans le cart
// 4 : ajoute le 'cart' au local storage
function addItem() {
    let id = `${params.get('id')}${colorSelected}`;
    let cart;
    if(localStorage.getItem('cart')) {                  
        cart = JSON.parse(localStorage.getItem('cart'));
        if (cart[id]) {     
            if (cart[id].color === colorSelected) {
                cart[id].quantity += 1; 
            } else {
                cart[id] = new cartProduct(params.get('id'), 1, colorSelected);
            }                                           
        } else {                                        
            cart[id] = new cartProduct(params.get('id'), 1, colorSelected);                                  
        }
    } else {                                            
        cart = {};                                     
        cart[id] = new cartProduct(params.get('id'), 1, colorSelected);                           
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
}

addBtn.addEventListener('click', addItem);
getIdProduct();


