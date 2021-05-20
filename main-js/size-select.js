export function select() {

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
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.textContent;
        let select = this.closest('.size-select');
        let currentText = select.querySelector('.size-select__current');
        currentText.textContent = text;
        select.classList.remove('is-active');
    }


    /*   window.addEventListener('click', (e) => {
          if (e.target == select) {
              select.classList.remove('is-active');
          }
      }); */

}

select();