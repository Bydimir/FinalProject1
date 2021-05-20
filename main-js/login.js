export function login() {
    const loginWindow = document.querySelector('.login-window');
    const loginLinks = document.querySelectorAll('.popup-link');
    const closeLogBtns = document.querySelectorAll('.popup-close-btn');

    const loginMailBtn = document.querySelector('.login-window__email-reg');
    const loginEnter = document.querySelector('.login-enter');

    const signUpWindow = document.querySelector('.signup-window');
    const signUpLinks = document.querySelectorAll('.signup-link');

    const signUpBtn = document.querySelector('.signup-window__email-reg');
    const signUpEnter = document.querySelector('.signup-enter');

    const newPasswordLink = document.querySelector('.help-password__link');
    const newPasswordWindow = document.querySelector('.new-password');

    const closeAllpopups = document.querySelectorAll('.click-close');

    const body = document.querySelector('body'); /* для блокировки скролла */


    /* открытие модалки login */
    for (let loginLink of loginLinks) {
        loginLink.addEventListener("click", (e) => {
            loginWindow.style.display = 'flex';
            signUpWindow.style.display = 'none';
            signUpEnter.style.display = 'none';
            body.style.overflow = 'hidden';
            e.preventDefault();
        });
    }

    /* открытие модалки login регистрации */
    loginMailBtn.addEventListener('click', () => {
        loginEnter.style.display = 'flex';
    });

    /* открытие модалки signup */
    for (let signUpLink of signUpLinks) {
        signUpLink.addEventListener('click', (e) => {
            signUpWindow.style.display = 'flex';
            loginEnter.style.display = 'none';
            e.preventDefault();
        });
    }

    /* открытие модалки signup регистрации */
    signUpBtn.addEventListener('click', () => {
        signUpEnter.style.display = 'flex';
    });


    /* сброс пароля */
    newPasswordLink.addEventListener('click', (e) => {
        newPasswordWindow.style.display = 'flex';
        loginWindow.style.display = 'none';
        e.preventDefault();
    });

    /* закрытие всех модалок */
    const closePopup = () => {
        for (let closeAllpopup of closeAllpopups) {
            closeAllpopup.style.display = 'none';
            body.style.overflow = 'visible';
        }
    };

    closeLogBtns.forEach((closeLogBtn) => {
        closeLogBtn.addEventListener('click', () => {
            closePopup();
        });
    });
}

login();