let baseHrefUrl = 'article.html?id=';

let url = window.location;
let params = (new URL(url)).searchParams;


function displayCarrousel(res) {

    let item = document.createElement('div');
    item.classList.add('carrouselItem');
    document.querySelector('.carrousel').appendChild(item);

    let itemInfos = document.createElement('div');            
    itemInfos.classList.add('carrouselItemInfos');            
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


function displayCatalog(res) {
    let card = document.createElement('div');
    card.classList.add('catalogListItem');
    let catalog = document.getElementById('catalogList');
    catalog.appendChild(card);

    let name = document.createElement('p');
    name.classList.add('catalogListItemName');
    name.innerHTML = res.name;
    card.appendChild(name);

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



function getProducts() {
    fetch('http://localhost:3000/api/furniture')
    .then(res => {
        if(res.ok) {
            res.json().then(data => {
                for(let i=0; i<data.length; i++) {
                    displayCatalog(data[i]);
                }
                for(let i=0; i < 3; i++) {
                    displayCarrousel(data[i]);
                }
            });
        } else {
            console.log('Error');
            document.getElementById('error').innerHTML = "Erreur";
        }
    })
}

getProducts()
