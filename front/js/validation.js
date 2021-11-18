let url = window.location;
let params = (new URL(url)).searchParams;

document.querySelector('.mainConfirmId').innerHTML = params.get('id');

// au clic de l'élément (btn) vide le local storage
function emptyTheLocalStorage (btn) {
    btn.addEventListener('click', () => {
        localStorage.clear();
    })
}

// lance les fonctions au chargement de la page
emptyTheLocalStorage(document.getElementById('returnHomeAfterValidation'));
emptyTheLocalStorage(document.querySelector('.headerLogo'));