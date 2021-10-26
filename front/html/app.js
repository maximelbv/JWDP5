let baseHrefUrl = 'article.html?id=';

let url = window.location;
let params = (new URL(url)).searchParams;

// let url = 'https://www.example.com?name=a,b,c';
// let params = (new URL(url)).searchParams;
// // console.log(window.location);
// console.log('id ====', params.get('name').split(','));


function displayProducts(res) {
    let card = document.createElement('div');
    card.classList.add('catalogListItem');
    document.getElementById('catalogList').appendChild(card);

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
                    displayProducts(data[i])
                }
            });
        } else {
            console.log('Error');
            document.getElementById('error').innerHTML = "Erreur";
        }
    })
}

getProducts()


function displayIdProduct(res){
    let articleDisplay = document.querySelector('.displayArticle');
    let articleDisplayText = document.querySelector('.displayArticleTxt');
    let articleInfos = document.querySelector('.displayArticleInfo');
    let descriptionContainer = document.querySelector('.informationsDescription');
    let colorList = document.querySelector('.informationsColors');

    let img = document.querySelector('.articleImg');
    img.setAttribute('src', res.imageUrl);
    articleDisplay.appendChild(img);

    let name = document.createElement('p');
    name.classList.add('displayArticleInfoName');
    name.innerText = res.name;
    articleInfos.appendChild(name);

    let price = document.createElement('p');
    price.classList.add('displayArticleInfoPrice');
    price.innerText = (res.price/100) + ' €';
    articleInfos.appendChild(price);

    let cartAdd = document.createElement('a');
    cartAdd.classList.add('displayArticleBtn');
    cartAdd.innerText = 'Ajouter au panier';
    articleDisplayText.appendChild(cartAdd);

    let description = document.querySelector('.informationsDescriptionDesc');
    description.innerText = res.description;
    descriptionContainer.appendChild(description);

    for(i = 0;i < res.varnish.length; i++){
        let color = document.createElement('div');
        color.style.backgroundColor = res.varnish[i];
        color.classList.add('informationsColorsColor');
        colorList.appendChild(color);
        console.log(res.varnish[i]);
    }

    
}

function getIdProduct() {
    fetch(`http://localhost:3000/api/furniture/${params.get('id')}`)
    .then(res => {
        if(res.ok) {
            res.json().then(data => {
                displayIdProduct(data);
            });
        } else {
            console.log('Error');
            document.getElementById('error').innerHTML = "Erreur";
        }
    })
}

getIdProduct();
