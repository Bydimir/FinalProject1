export function basket() {
    const openBasket = document.querySelector('.basket-link');
    const containerBasket = document.querySelector('.basket-container');
    const closeBasket = document.querySelector('.basket-close');
    const basketBlocks = document.querySelectorAll('.active-basket');


    const closeAll = () => {
        basketBlocks.forEach((basketBlock) => {
            basketBlock.classList.remove('basket-open');
        });
    };

    const openAll = () => {
        basketBlocks.forEach((basketBlock) => {
            basketBlock.classList.add('basket-open');
        });
    };

    //обработчик открытия корзины
    openBasket.addEventListener('click', (e) => {
        openAll();
        e.preventDefault();
    });

    //обработчик закрытия корзины
    closeBasket.addEventListener('click', (e) => {
        closeAll();
        e.preventDefault();
    });

    //закрытие при нажатии на серую область
    window.addEventListener('click', (e) => {
        if (e.target == containerBasket) {
            closeAll();
        }
    });
}

basket();