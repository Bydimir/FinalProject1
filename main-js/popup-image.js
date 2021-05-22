const cardImage = document.querySelector('.card-image');
const imagePopupActive = document.querySelector('.enlargement-picture');
const closeImagePopup = document.querySelector('.close-picture');

cardImage.addEventListener('click', () => {
    imagePopupActive.style.display = 'block';
});

closeImagePopup.addEventListener('click', () => {
    imagePopupActive.style.display = 'none';
});

const zoomImage = document.querySelector('.zoom-image');
const popupImage = document.querySelector('.popup-image');

popupImage.addEventListener('click', () => {
    zoomImage.style.display = 'block';
    popupImage.style.display = 'none';
});

zoomImage.addEventListener('click', () => {
    popupImage.style.display = 'block';
    zoomImage.style.display = 'none';
});