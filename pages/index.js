const popupProfile = document.querySelector('.popup_profile');
const profileClose = popupProfile.querySelector('.popup__close');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const inputName = document.querySelector('.form__input_name');
const inputAbout = document.querySelector('.form__input_about');
const form = document.querySelector('.form');
const botonGuardar = document.querySelector('.form__submit');
const profileEditButton = document.querySelector('.profile__button');


profileEditButton.addEventListener('click', function(){
    popupProfile.classList.add('popup_open')
})


profileClose.addEventListener('click', function(){
    popupProfile.classList.remove('popup_open')

})

form.addEventListener('submit', function(event){
    event.preventDefault();
    if (inputName.value !== '' && inputAbout.value !=='') {
        validateForm();
        resetInputs();
    } else {
        alert('Datos incorrectos')
    }

})


function validateForm(){
    nameProfile.textContent = inputName.value;
    aboutProfile.textContent = inputAbout.value;
    popupProfile.classList.remove('popup_open')
}
function resetInputs(){
    inputName.value = '';
    inputAbout.value = '';
}