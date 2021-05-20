export function formValid() {
    const userName = document.querySelector('.user-name');
    const formPassword = document.getElementById('user-password');
    const formEmail = document.querySelector('.form-log__input');

    const loginButton = document.querySelector('.login-enter__button');
    const errorText = document.querySelector('.error-text');

    /* for (let loginButton of loginButtons) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            checkInputs();
        });
    } */

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const formEmailValue = formEmail.value.trim();
        const formPasswordValue = formPassword.value.trim();

        if (formEmailValue === '') {
            setErrorFor(formEmail, 'Email cannot be blank');
        } else if (!isEmail(formEmailValue)) {
            setErrorFor(formEmail, 'Double check your email and try again.');
        } else {
            setSuccsessFor(formEmail);
        }

        if (formPasswordValue === '') {
            setErrorFor(formPassword, 'Make sure you enter a password.');
        } else {
            setSuccsessFor(formPassword);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-log__block error';
        small.innerText = message;
    }

    function setSuccsessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-log__block succsess';
    }

    function isEmail(formEmail) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formEmail);
    }
}

formValid();