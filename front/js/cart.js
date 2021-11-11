// Objet de test
let testObject = {
    name : 'test name',
    price : 12000,
    _id : 123456789,
    imageUrl : "https://via.placeholder.com/150x150",
    varnish : ['red', 'green', 'blue']
};

// inputs html de la section checkout, utilisés dans les fonctions checkitems et regexCheck 
let checkoutName = document.getElementById('checkoutInputName');
let checkoutMail = document.getElementById('checkoutInputMail');
let checkoutTel = document.getElementById('checkoutInputTel');
let checkoutCardNumber = document.getElementById('checkoutInputCardNumber');
let checkoutCardDate = document.getElementById('checkoutInputCardDate');
let checkoutCardCvc = document.getElementById('checkoutInputCardCvc');
let checkoutAdress = document.getElementById('checkoutInputAdress');
let checkoutPostalCode = document.getElementById('checkoutInputPostalCode');
let checkoutCity = document.getElementById('checkoutInputCity');

// expressions régulières utilisés pour déterminer si les inputs du checkout sont valides 
// en savoir plus sur les expressions régulières en JavaScript : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp
const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexTel = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const regexCardNumber = /^[0-9]*$/;
const regexCardDate = /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/;
const regexCardCvc = /^[0-9]{3,4}$/;
const regexAdress = /\w+(\s\w+){2,}/;
const regexPostalCode = /\d{2}[ ]?\d{3}/;
const regexCity = /^[a-zA-Z',.\s-]{1,25}$/;

// stock l'objet converti depuis le JSON 'cart' du local storage
let cart = JSON.parse(localStorage.getItem('cart'));

// le tableau 'prices' va récupérer les prix et les additionner entre eux pour afficher le montant total
let prices = [];

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
    image.setAttribute('alt', res.name);
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

// Si le panier existe: boucle les données de 'cart' et pour chaque donnée:
// récupère ses éléments depuis l'API et lance la fonction 'displayCartItems'
// avec en paramètres les données récupérées de l'API
function getCart() {
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
}

// Si la valeur 'accept' de chaque input est 'true' alors on enlève l'attribut 'disabled' au bouton d'envoi de formulaire
function checkInputs() {
    if (checkoutName.accept && checkoutMail.accept && checkoutTel.accept && checkoutCardNumber.accept && checkoutCardDate.accept &&
        checkoutCardCvc.accept && checkoutAdress.accept && checkoutPostalCode.accept && checkoutCity.accept) {
        document.getElementById('CheckoutSubmit').removeAttribute('disabled');
    }
}

// Cette fonction vérifie si l'input entré en paramètre correspond au regex entré en paramètre.
function regexCheck(input, regex) {
    let selector = 'div' + input.id;                                            // permets de récupérer l'id du conteneur de l'input en question
    input.addEventListener('input', () => {                                     // écoute les évènements de l'input,
        if (input.value.match(regex)) {                                         // si la valeur entrée correspond au regex :
            input.classList.add('validInput');                                  // ajoute des bordures vertes à l'input,
            document.getElementById(selector).classList.remove('invalidInput'); // enlève le message d'erreur au conteneur de l'input
            input.setAttribute('accept', 'true');                               // donne l'attribut 'true' à la valeur 'accept' de l'input,
            checkInputs();                                                      // lance la fonction checkInputs
        } else {                                                                // sinon
            document.getElementById(selector).classList.add('invalidInput');    // affiche le message d'erreur dans le conteneur de l'input
            input.classList.remove('validInput');                               // enlève les bordures vertes à l'input
        }
    })
}

// lance les fonctions au chargement de la page
getCart();
regexCheck(checkoutName, regexName);
regexCheck(checkoutMail, regexMail);
regexCheck(checkoutTel, regexTel);
regexCheck(checkoutCardNumber, regexCardNumber);
regexCheck(checkoutCardDate, regexCardDate);
regexCheck(checkoutCardCvc, regexCardCvc);
regexCheck(checkoutAdress, regexAdress);
regexCheck(checkoutPostalCode, regexPostalCode);
regexCheck(checkoutCity, regexCity);

