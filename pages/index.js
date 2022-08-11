const editButton = document.querySelector('.profile__edit-button'),
    popup = document.querySelector('.page__popup'),
    closeButton = document.querySelector('.popup__close-button'),
    submitButton = document.querySelector('.popup__submit-button');

const popupToggle = function () {
    event.preventDefault()
    popup.classList.toggle('popup_hide')
}
   
editButton.addEventListener('click', popupToggle);
closeButton.addEventListener('click', popupToggle);

let formElement = document.querySelector('.popup__edit-form');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector('.popup__input_name').value,
    jobInput = document.querySelector('.popup__input_about').value,
    profileName = document.querySelector('.profile__name'),
    profileAbout = document.querySelector('.profile__about');
    profileName.textContent = nameInput;
    profileAbout.textContent = jobInput;
    popup.classList.add('popup_hide');
    }

formElement.addEventListener('submit', formSubmitHandler);