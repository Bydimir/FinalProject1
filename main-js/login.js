const loginWindow = document.querySelector('.login-window');
const loginLinks = document.querySelectorAll('.popup-link');
const loginClose = document.querySelector('.login-close');

const signUpWindow = document.querySelector('.signup-window');
const signUpLink = document.querySelector('.signup-link');
const signUpClose = document.querySelector('.signup-close');

const body = document.querySelector('body'); /* для блокировки скролла */

if (loginLinks.length > 0) {
    for (let i = 0; i < loginLinks.length; i++) {
        /* перебераем все ссылки на открытие */
        const loginLink = loginLinks[i];
        loginLink.addEventListener("click", (e) => {
            loginWindow.style.display = 'flex';
            signUpWindow.style.display = 'none';
            body.style.overflow = 'hidden';
            e.preventDefault();
        });
    }
}

loginClose.addEventListener('click', () => {
    loginWindow.style.display = 'none';
    body.style.overflow = 'visible';
});

signUpLink.addEventListener('click', (e) => {
    signUpWindow.style.display = 'flex';
    e.preventDefault();
});

signUpClose.addEventListener('click', () => {
    signUpWindow.style.display = 'none';
    loginWindow.style.display = 'none';
    body.style.overflow = 'visible';
});



/* if (closeLinks.length > 0) {
    for (let i = 0; i > closeLinks.length; i++) {
        const closeLink = closeLinks[i];
        closeLink.addEventListener('click', () => {
            body.style.overflow = 'visible';
            loginWindow.style.display = 'none';
            signUpWindow.style.display = 'none';
        });
    }
} */