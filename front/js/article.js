// Objet de test
let testObject = {
    name : 'test name',
    price : 12000,
    _id : 123456789,
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
    imageUrl : "https://via.placeholder.com/1000x1000",
    varnish : ['red', 'green', 'blue']
};

// paramètres de l'url, utilisés dans la fonction getIdProduct et addItem
let url = window.location;
let params = (new URL(url)).searchParams;

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
        colorList.appendChild(color);
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

// fonction d'ajout d'article au panier 
function addItem() {
    let id = params.get('id');
    let cart;
    
    if(localStorage.getItem('cart')) {                   // si le panier existe dans le local storage
        cart = JSON.parse(localStorage.getItem('cart')); // parse le JSON du panier
        if (cart[id]) {                                  // si l'idd e l'article est déjà présent dans le panier
            cart[id] += 1;                               // incrémente sa valeur de 1
        } else {                                         // sinon
            cart[id] = 1;                                // ajoute l'id au panier avec la valeur de 1
        }
    } else {                                             // sinon (si le panier n'existe pas dans le local storage)
        cart = {};                                       // créé le panier ('cart')
        cart[id] = 1;                                    // et ajoute l'id de l'élément séléctionné au panier avec la valeur de 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));  // stringify l'objet 'cart' (panier) et ajoute le au localStorage
}

document.getElementById('displayArticleBtn').addEventListener('click', addItem);
getIdProduct();