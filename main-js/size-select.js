let select = function () {

    let selectHeader = document.querySelectorAll('.size-select__header');
    let selectItem = document.querySelectorAll('.size-select__item');
    let html = document.querySelector('html');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active'); /* нормально ли в таком случае использовать this? */
    }

    function selectChoose() {
        let text = this.textContent;
        let select = this.closest('.size-select');
        let currentText = select.querySelector('.size-select__current');
        currentText.textContent = text;
        select.classList.remove('is-active');
    }

};

select();