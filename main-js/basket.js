const openBasket = document.querySelector('.basket-link');
const containerBasket = document.querySelector('.basket-container');
const basketWindow = document.querySelector('.basket-active');
const closeBasket = document.querySelector('.basket-close');

const activeBasket = document.querySelector('.active-basket');

openBasket.addEventListener('click', (e) => {
    containerBasket.classList.add('basket-open');
    basketWindow.classList.add('basket-open');
    e.preventDefault();

    // activeBasket.classList.add('basket-open');
});

closeBasket.addEventListener('click', (e) => {
    containerBasket.classList.remove('basket-open');
    basketWindow.classList.remove('basket-open');
    e.preventDefault();

});

window.addEventListener('click', (e) => {
    if (e.target == containerBasket) {
        containerBasket.classList.remove('basket-open');
        basketWindow.classList.remove('basket-open');
    }
});