const openBusket = document.querySelector('.basket-link');
const basketWindow = document.querySelector('.basket-active');
const basketClose = document.querySelector('.basket-close');

openBusket.addEventListener('click', () => {
    basketWindow.classList.toggle('.basket-active');
});