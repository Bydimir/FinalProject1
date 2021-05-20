const chooseGreyColor = document.querySelector('.choose-grey');
const chooseBrownColor = document.querySelector('.choose-brown');

const imageColor = document.querySelector('.product-006');
const colorName = document.querySelector('.choose-color__title');

const removeColor = () => {
    imageColor.classList.remove('product-006-brown');
    imageColor.classList.remove('product-006-grey');
};

chooseGreyColor.addEventListener('click', () => {
    removeColor();
    imageColor.classList.add('product-006-grey');
    colorName.textContent = 'Color: Grey';
});

chooseBrownColor.addEventListener('click', () => {
    removeColor();
    imageColor.classList.add('product-006-brown');
    colorName.textContent = 'Color: Brown';
});