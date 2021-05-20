export function popupCard() {
    //Версия на открытие нужной карты-------------------
    const popupViews = document.querySelectorAll('.popup-card');
    const popupBtns = document.querySelectorAll('.item-details__title');
    const closeBtns = document.querySelectorAll('.close-popup-card');

    //код для кнопки быстрого просмотра
    const popup = function (popupClick) {
        popupViews[popupClick].classList.add('open');
    };

    popupBtns.forEach((popupBtn, i) => {
        popupBtn.addEventListener('click', (e) => {
            popup(i);
            e.preventDefault();
        });
    });

    //код для кнопки закрытия
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', (e) => {
            popupViews.forEach((popupView) => {
                popupView.classList.remove('open');
            });
            e.preventDefault();
        });
    });
}

popupCard();


/* const cards = [{
        id: 1,
        title: 'Im a Product',
        price: '55'
    },

    {
        id: 2,
        title: 'Seamless Bra',
        price: '15'
    },
];


document.addEventListener('click', event => {
    event.preventDefault();

    const btnType = event.target.dataset.btn;
    if (btnType === 'info') {
        console.log('Info');
    }
}); */


//рабочая версия на открытие одной карты--------------------------
/* 
const parentButtons = document.querySelector('.shop__items')
const popupLinks = document.querySelectorAll('.popup-card-link');
const curentPopup = document.querySelector('.popup-card');

const btnClickHandler = () => {
    curentPopup.classList.add('open');

};

parentButtons.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-details__title')) {
        btnClickHandler(e.target);
        e.preventDefault();
    }

});


const popupCloseIcon = document.querySelectorAll('.close-popup-card');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const popupClose = popupCloseIcon[i];
        popupClose.addEventListener('click', (e) => {
            curentPopup.classList.remove('open');
            e.preventDefault();
        });

    }
} */