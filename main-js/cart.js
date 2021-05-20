export function cart() {
    const openBusket = document.querySelector('.basket-link');
    const basketWindow = document.querySelector('.basket-active');

    openBusket.addEventListener('click', () => {
        basketWindow.classList.toggle('.basket-active');
    });
}

cart();