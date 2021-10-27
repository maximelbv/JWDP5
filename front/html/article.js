let baseHrefUrl = 'article.html?id=';

let url = window.location;
let params = (new URL(url)).searchParams;


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
        color.classList.add('informationsColorsColor');
        color.style.background = res.varnish[i];
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