const chooseTealColorItems = document.querySelectorAll('.choose-teal');
const chooseGreenColorItems = document.querySelectorAll('.choose-green');

const imageColor = document.querySelector('.seamless');
const colorName = document.querySelector('.choose-color__title');


const removeColor = () => {
    imageColor.classList.remove('seamless-teal');
    imageColor.classList.remove('seamless-green');
};

const addColor = () => {
    imageColor.classList.add('seamless-green');
    imageColor.classList.add('seamless-teal');
};

chooseGreenColorItems.forEach((chooseGreenColorItem) => {
    chooseGreenColorItem.addEventListener('click', () => {
        removeColor();
        addColor();
        colorName.textContent = 'Color: Light Green';
    });
});


chooseTealColorItems.forEach((chooseTealColorItem) => {
    chooseTealColorItem.addEventListener('click', () => {
        addColor();
        removeColor();
        colorName.textContent = 'Color: Teal';
    });
});













/* вариант с подключением миниатюр, добавлением класса и перебором for

const chooseTealColors = document.querySelector('.choose-teal');
const chooseGreenColors = document.querySelector('.choose-green');


if (chooseGreenColors.length > 0) {
    for (let i = 0; i < chooseGreenColors.length; i++) {
        const chooseGreenColor = chooseGreenColors[i];
        chooseGreenColor.addEventListener('click', () => {
            imageColor.classList.add('seamless-green');
            imageColor.classList.remove('seamless-teal');
            colorName.textContent = 'Color: Light Green';
        });
    }
}

if (chooseTealColors.length > 0) {
    for (let i = 0; i < chooseTealColors.length; i++) {
        const chooseTealColor = chooseTealColors[i];
        chooseTealColor.addEventListener('click', () => {
            imageColor.classList.add('seamless-green');
            imageColor.classList.remove('seamless-teal');
            colorName.textContent = 'Color: Light Green';
        });
    }
} */