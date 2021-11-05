let cart = JSON.parse(localStorage.getItem('cart'));

let idContainer = document.querySelector('.mainConfirmId');

for (let i = 0; i < Object.keys(cart).length; i++) {
    let id = document.createElement('p');
    id.innerText = Object.values(cart)[i] + 'x # ' + Object.keys(cart)[i] ;
    idContainer.appendChild(id);
}

document.querySelector('.headerLogo').addEventListener('click', () => {
    localStorage.clear();
})

document.getElementById('returnHomeAfterValidation').addEventListener('click', () => {
    localStorage.clear();
})
