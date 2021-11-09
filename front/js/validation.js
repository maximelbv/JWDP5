// stock l'objet converti depuis le JSON 'cart' du local storage
let cart = JSON.parse(localStorage.getItem('cart'));

// stock l'élement html avec la classe 'mainConfirmid'
let idContainer = document.querySelector('.mainConfirmId');

function getIds() {                                                             // boucle les données de l'objet 'cart' (les articles du panier) 
    for (let i = 0; i < Object.keys(cart).length; i++) {                        // Pour chaque donnée de l'objet 'cart':   
        let id = document.createElement('p');                                   // créée une balise <p>
        id.innerText = Object.values(cart)[i] + 'x # ' + Object.keys(cart)[i] ; // ajoute à cette balise le nom de la donnée et sa valeur  
        idContainer.appendChild(id);                                            // affiche la balise <p> dans le conteneur
    }
}                                                                            

getIds();

// au clic de l'élément (btn) vide le local storage
function emptyTheLocalStorage (btn) {
    btn.addEventListener('click', () => {
        localStorage.clear();
    })
}

emptyTheLocalStorage(document.getElementById('returnHomeAfterValidation'));
emptyTheLocalStorage(document.querySelector('.headerLogo'));