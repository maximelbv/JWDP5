// stock l'objet converti depuis le JSON 'cart' du local storage
let cart = JSON.parse(localStorage.getItem('cart'));

// le tableau 'prices' va récupréer les prix et les additionner entre eux pour afficher le montant total
let prices = [];

// Si le panier existe: boucle les données de 'cart' et pour chaque donnée:
// récupère ses éléments depuis l'API et lance la fonction 'displayCartItems'
// avec en paramètres les données récupérées de l'API
if (cart) {                                                           
    for (let i = 0; i< Object.keys(cart).length; i++) {              
        fetch(`http://localhost:3000/api/furniture/${Object.keys(cart)[i]}`)
            .then(res => {
                if(res.ok) {
                    res.json().then(data => {
                        displayCartItems(data, Object.values(cart)[i]);
                    });
                } else {
                    console.log('Error');
                }
            })
    }
}


// Créé les balises html et affiche les éléments (res) dans le panier
// de la page panier (cart.html)
function displayCartItems(res, val){
    let item = document.createElement('div');
    item.classList.add('cartItem');
    let container = document.querySelector('.cartItems');
    container.appendChild(item);
    
    let imageCtn = document.createElement('div');
    imageCtn.classList.add('cartItemImage');
    item.appendChild(imageCtn);

    let image = document.createElement('img');
    image.src = res.imageUrl;
    imageCtn.appendChild(image);

    let name = document.createElement('p');
    name.innerText = res.name;
    name.classList.add('cartItemName');
    item.appendChild(name);

    let price = document.createElement('p');
    price.innerText = ((res.price / 100) * val) + ' €'; // le prix est divisé par 100 pour le convertir en €
    price.classList.add('cartItemPrice');
    item.appendChild(price);

    let quantity = document.createElement('p')
    quantity.innerText = val;
    item.appendChild(quantity);

    prices.push(val * (res.price / 100)); // ajoute le prix de l'article au tableau 'prices'
    const reducer = (acc, cur) => acc +cur;
    let total = prices.reduce(reducer) // total = la somme du prix des articles;

    // affiche le prix total sur les éléments
    document.querySelector('.cartTotalValue').innerText = total + ' €';
    document.querySelector('.checkoutBtn').setAttribute('value', `Payer ${total} €`);

}

let checkoutName = document.getElementById('checkoutInputName');

let checkoutMail = document.getElementById('checkoutInputMail');
let checkoutTel = document.getElementById('checkoutInputTel');

let checkoutCardNumber = document.getElementById('checkoutInputCardNumber');
let checkoutCardDate = document.getElementById('checkoutInputCardDate');
let checkoutCardCvc = document.getElementById('checkoutInputCardCvc');

let checkoutAdress = document.getElementById('checkoutInputAdress');
let checkoutPostalCode = document.getElementById('checkoutInputPostalCode');
let checkoutCity = document.getElementById('checkoutInputCity');

const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexTel = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const regexCardNumber = /^[0-9]/;
const regexCardDate = /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/;
const regexCardCvc = /^[0-9]{3,4}$/;
const regexAdress = /\w+(\s\w+){2,}/;
const regexPostalCode = /\d{2}[ ]?\d{3}/;
const regexCity = /^[a-zA-Z',.\s-]{1,25}$/;


function regexCheck(input, regex) {
    input.addEventListener('input', () => {
        if (!input.value.match(regex)) {
            input.classList.remove('validInput');
            input.classList.add('invalidInput');
            return false;
        } else {
            input.classList.remove('invalidInput');
            input.classList.add('validInput');
            return true;
        }
    })
}

regexCheck(checkoutName, regexName);
regexCheck(checkoutMail, regexMail);
regexCheck(checkoutTel, regexTel);
regexCheck(checkoutCardNumber, regexCardNumber);
regexCheck(checkoutCardDate, regexCardDate);
regexCheck(checkoutCardCvc, regexCardCvc);
regexCheck(checkoutAdress, regexAdress);
regexCheck(checkoutPostalCode, regexPostalCode);
regexCheck(checkoutCity, regexCity);
