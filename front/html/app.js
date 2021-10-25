

// function getProducts() {
//     fetch('http://localhost:3000/api/furniture')
//     .then(res => {
//         if(res.ok) {
//              res.json().then(data => {
                
//                  for (i = 0; i < data.length; i++) {

//                     let card = document.createElement('div');
//                     card.classList.add('catalogListItem');
//                     document.getElementById('catalogList').appendChild(card);

//                     let name = document.createElement('p');
//                     name.classList.add('catalogListItemName');
//                     name.innerHTML = data[i].name;
//                     card.appendChild(name);

//                     let img = document.createElement('img');
//                     img.classList.add('catalogListItemImg');
//                     img.setAttribute('width', '70%');
//                     img.src = data[i].imageUrl;
//                     card.appendChild(img)

//                     let moreInfo = document.createElement('a');
//                     moreInfo.classList.add('catalogListItemMore');
//                     moreInfo.innerText = `Plus d'info`;
//                     card.appendChild(moreInfo);   
//                  }
                  
//              })
//         } else {
//             console.log('Error');
//             document.getElementById('error').innerHTML = "Erreur";
//         }
//     })
// }






function getProducts() {
    fetch('http://localhost:3000/api/furniture')
    .then(res => {
        if(res.ok) {
             res.json().then(data => {
                //  for (i = 0; i < data.length; i++) {
                //     let dat = data[i];
                //  }
                return data;
             })
        } else {
            console.log('Error');
            document.getElementById('error').innerHTML = "Erreur";
        }
    })
}

getProducts();

function generateDOM(dat){
    listTemplate().replace("{{{name}}}", dat.name);
}

function listTemplate() {
    return `<div class="catalogListItem">
                <a href=""> <p class="catalogListItemName"></p>{{{name}}}</a> 
                <a href="" class="catalogListItemImgLink"> 
                <img class="catalogListItemImg" src="" alt="" width="70%"> </a>
                <a href="" class="catalogListItemMore" > Plus d'infos </a>
            </div>`
}

