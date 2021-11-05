if (!localStorage.getItem('cart')) {
    document.getElementById('indexCartBtn').setAttribute('href','emptyCart.html');
    console.log('test')
} else {
    document.getElementById('indexCartBtn').setAttribute('href','cart.html');
}