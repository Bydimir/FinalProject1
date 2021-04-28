const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.navigations');
const burgerLogin = document.querySelector('.login-section');
/* let openedWimdows = burgerMenu,
    burgerLogin; */

const bodyLock = document.querySelector('body'); /* для блокировки скролла */

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-open');
    burgerButton.classList.toggle('burger-open');
    burgerLogin.classList.toggle('burger-open');
});