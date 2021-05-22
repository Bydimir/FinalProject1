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