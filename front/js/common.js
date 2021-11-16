// bouton 'panier' du header
let headerCartBtn = document.getElementById('indexCartBtn');

if (!localStorage.getItem('cart') || localStorage.getItem('cart').length <= 2) {                     // si le panier (cart) n'est pas présent dans le local storage :
    headerCartBtn.setAttribute('href','emptyCart.html'); // modifie le lien du bouton 'panier' pour qu'il renvoie vers la page 'emptyCart.html'
} else {                                                 // sinon
    headerCartBtn.setAttribute('href','cart.html');      // modifie le lien du bouton 'panier' pour qu'il renvoie vers la page 'cart.html'
}