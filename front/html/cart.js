// keys = Object.keys(localStorage);
// let values = Object.values(localStorage)

// for (let i = 0; i< localStorage.length; i++) {
//     fetch(`http://localhost:3000/api/furniture/${values[i]}`)
//         .then(res => {
//             if(res.ok) {
//                 res.json().then(data => {
//                     displayCartItems(data);
//                 });
//             } else {
//                 console.log('Error');
//             }
//         })
// }

// function displayCartItems(res){
//     let item = document.createElement('div');
//     item.classList.add('cartItem');
//     document.querySelector('.cart').appendChild(item);
    
//     let name = document.createElement('p');
//     name.innerText = res.name;
//     name.classList.add('cartItemName');
//     item.appendChild(name);
// }






keys = Object.keys(localStorage);
let values = Object.values(localStorage)

for (let i = 0; i< localStorage.length; i++) {
    fetch(`http://localhost:3000/api/furniture/${values[i]}`)
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    let item = document.createElement('div');
                    item.classList.add('cartItem');
                    let container = document.querySelector('.cartItems');
                    container.appendChild(item);
                    
                    let imageCtn = document.createElement('div');
                    imageCtn.classList.add('cartItemImage');
                    item.appendChild(imageCtn);

                    let image = document.createElement('img');
                    image.src = data.imageUrl;
                    imageCtn.appendChild(image);

                    let name = document.createElement('p');
                    name.innerText = data.name;
                    name.classList.add('cartItemName');
                    item.appendChild(name);

                    let price = document.createElement('p');
                    price.innerText = (data.price / 100) + ' €';
                    price.classList.add('cartItemPrice');
                    item.appendChild(price);

                    let quantity = document.createElement('input')
                    quantity.setAttribute('type', 'number');
                    quantity.setAttribute('value', data.quantity);
                    quantity.classList.add('cartItemQtt');
                    item.appendChild(quantity);

                    let deleteBtn = document.createElement('button');
                    deleteBtn.classList.add('cartItemDelete');
                    item.appendChild(deleteBtn);
                    let deleteCross = document;createElement('i');
                    deleteCross.classList.add('fa fa-times');
                    deleteBtn.appendChild(deleteCross);

                });
            } else {
                console.log('Error');
            }
        })
}

function displayCartItems(res){
    
}