// Objet de test
let testObject = {
    name : 'test name',
    price : 12000,
    _id : 123456789,
    imageUrl : "https://via.placeholder.com/150x150",
    varnish : ['red', 'green', 'blue']
};

// string utilisée dans les liens menant vers les pages article
let baseHrefUrl = 'article.html?id=';

// Créé les balises html et affiche les éléments (res) dans le carrousel 
// de la page d'accueil (index.html)
function displayCarrousel(res) {

    let item = document.createElement('div');
    item.classList.add('carrouselItem');
    document.querySelector('.carrousel').appendChild(item);

    let itemInfos = document.createElement('div');            
    itemInfos.classList.add('carrouselItemInfo');            
    item.appendChild(itemInfos);                              

    let name = document.createElement('p');
    name.classList.add('carrouselItemName');
    name.innerText = res.name;
    itemInfos.appendChild(name);

    let price = document.createElement('p');
    price.classList.add('carrouselItemPrice');
    price.innerText = (res.price / 100) + ' €';
    itemInfos.appendChild(price); 

    let btn = document.createElement('a');
    btn.classList.add('carrouselItemMore');
    btn.setAttribute('href', baseHrefUrl + res._id )
    btn.innerText = 'ACHETER';
    itemInfos.appendChild(btn);

    let img = document.createElement('img');
    img.classList.add('carrouselItemImg');
    img.setAttribute('src', res.imageUrl);
    img.setAttribute('height', '70%');
    item.appendChild(img);
}

// Créé les balises html et affiche les éléments (res) dans le catalogue 
// de la page d'accueil (index.html)
function displayCatalog(res) {
    
    let card = document.createElement('div');
    card.classList.add('catalogListItem');
    let catalog = document.getElementById('catalogList');
    catalog.appendChild(card);

    let nameLink = document.createElement('a');
    nameLink.setAttribute('href', baseHrefUrl + res._id);
    card.appendChild(nameLink);

    let name = document.createElement('p');
    name.classList.add('catalogListItemName');
    name.innerHTML = res.name;
    nameLink.appendChild(name);

    let img = document.createElement('img');
    img.classList.add('catalogListItemImg');
    img.setAttribute('width', '70%');
    img.src = res.imageUrl;
    card.appendChild(img)

    let moreInfo = document.createElement('a');
    moreInfo.classList.add('catalogListItemMore');
    moreInfo.setAttribute('href', baseHrefUrl + res._id);
    moreInfo.innerText = `Plus d'info`;
    card.appendChild(moreInfo);
}

// Récupère les éléments de l'API et lance les fonctions 'displayCatalog' et 
// 'displayCarrousel' avec en paramètre les données de l'API
function getProducts() {
    fetch('http://localhost:3000/api/furniture')
    .then(res => {
        if(res.ok) {
            res.json().then(data => {
                for(let i=0; i<data.length; i++) {
                    displayCatalog(data[i]);
                    displayCarrousel(data[i]);
                }
            });
        } else {
            console.log('Error');
        }
    }) 
}

// Lance la fonction 'getProducts'
getProducts()
