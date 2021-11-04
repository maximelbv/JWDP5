keys = Object.keys(localStorage);
let values = Object.values(localStorage)

let cart = JSON.parse(localStorage.getItem('cart'));

if (cart) {
    for (let i = 0; i< Object.keys(cart).length; i++) {
        fetch(`http://localhost:3000/api/furniture/${Object.keys(cart)[i]}`)
            .then(res => {
                if(res.ok) {
                    res.json().then(data => {
                        displayCartItems(data);
                        console.log(Object.keys(cart)[i])
                    });
                } else {
                    console.log('Error');
                }
            })
    }
}



function displayCartItems(res){
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
    price.innerText = (res.price / 100) + ' €';
    price.classList.add('cartItemPrice');
    item.appendChild(price);

    let quantity = document.createElement('input')
    quantity.setAttribute('type', 'number');
    quantity.setAttribute('value', res.quantity);
    quantity.classList.add('cartItemQtt');
    item.appendChild(quantity);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('cartItemDelete');
    deleteBtn.setAttribute('id', `DL${res._id}`)
    item.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteItem(res))
}

function deleteItem(item) {
    localStorage.removeItem(item);
}
