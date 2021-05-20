const chooseBurgundyColor = document.querySelector('.choose-burgundy');
const chooseGreenColor = document.querySelector('.choose-green');

const imageColor = document.querySelector('.product-010');
const colorName = document.querySelector('.choose-color__title');


chooseBurgundyColor.addEventListener('click', () => {
    imageColor.classList.add('product-010-burgundy');
    imageColor.classList.remove('product-010-green');
    colorName.textContent = 'Color: Burgundy';
});

chooseGreenColor.addEventListener('click', () => {
    imageColor.classList.add('product-010-green');
    imageColor.classList.remove('product-010-burgundy');
    colorName.textContent = 'Color: Green';
});