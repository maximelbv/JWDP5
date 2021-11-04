let cart = JSON.parse(localStorage.getItem('cart'));

let idContainer = document.querySelector('.mainConfirmId');

for (let i = 0; i < Object.keys(cart).length; i++) {
    let id = document.createElement('p');
    id.innerText = '# ' + Object.keys(cart)[i];
    idContainer.appendChild(id);
}
