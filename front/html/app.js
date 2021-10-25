

function getProducts() {
    fetch('http://localhost:3000/api/furniture')
    .then(res => {
        if(res.ok) {
             res.json().then(data => {
                
                 for (i = 0; i < data.length; i++) {

                    let card = document.createElement('div');
                    card.classList.add('catalogListItem');
                    document.getElementById('catalogList').appendChild(card);

                    let name = document.createElement('p');
                    name.classList.add('catalogListItemName');
                    name.innerHTML = data[i].name;
                    card.appendChild(name);

                    let img = document.createElement('img');
                    img.classList.add('catalogListItemImg');
                    img.setAttribute('width', '70%');
                    img.src = data[i].imageUrl;
                    card.appendChild(img)

                    let moreInfo = document.createElement('a');
                    moreInfo.classList.add('catalogListItemMore');
                    moreInfo.innerText = `Plus d'info`;
                    card.appendChild(moreInfo);   
                 }
                  
             })
        } else {
            console.log('Error');
            document.getElementById('error').innerHTML = "Erreur";
        }
    })
}






function getProducts() {
    fetch('http://localhost:3000/api/furniture')
    .then(res => {
        if(res.ok) {
            res.json().then(data => {
                return data
             })
        } else {
            console.log('Error');
            document.getElementById('error').innerHTML = "Erreur";
        }
    })
}





// function listTemplate() {
//     let template = document.createElement('div');
//     template.innerHTML = `<div class="catalogListItem">
//                           <a href="{{{urlPage}}}"> <p class="catalogListItemName"></p>{{{name}}}</a> 
//                           <a href="{{{urlPage}}}" class="catalogListItemImgLink"> 
//                           <img class="catalogListItemImg" src="{{{urlImg}}}" alt="" width="70%"> </a>
//                           <a href="{{{urlPage}}}" class="catalogListItemMore" > Plus d'infos </a>
//                       </div>`
//     return template;
// }

function generateDOM(data){
    getProducts();
    listTemplate().replace("{{{name}}}", data.name);
    listTemplate().replace("{{{urlPage}}}", data.id);
    listTemplate().replace("{{{urlImg}}}", data.urlImage);
}

// function createCard(){
//     let card = document.getElementById('catalogList').appendChild(listTemplate());
//     card.generateDOM();

// }

// data.forEach(createCard());


// console.log(listTemplate());

