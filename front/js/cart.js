
let cart = JSON.parse(localStorage.getItem('cart'));

let prices = [];

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
    price.innerText = ((res.price / 100) * val) + ' €';
    price.classList.add('cartItemPrice');
    item.appendChild(price);

    let quantity = document.createElement('p')
    quantity.innerText = val;
    item.appendChild(quantity);

    prices.push(val * (res.price / 100));
    const reducer = (acc, cur) => acc +cur;
    let total = prices.reduce(reducer)

    document.querySelector('.cartTotalValue').innerText = total + ' €';
    document.querySelector('.checkoutBtn').innerText = 'Payer ' + total + ' €';
    // let totalPrice = document.querySelector('.carttotalvalue');
    // totalPrice.innerText = 

}

document.getElementById('emptyTheCartBtn').addEventListener('click', () => {
    localStorage.clear();
    console.log('test');
})

