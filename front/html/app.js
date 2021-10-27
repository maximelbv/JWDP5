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
    let catalog = document.getElementById('catalogList');
    catalog.appendChild(card);
    console.log(catalog);

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



