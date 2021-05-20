export function burger() {
    const burgerButton = document.querySelector('.burger');
    const burgerBlocks = document.querySelectorAll('.burger-toggle');

    burgerButton.addEventListener('click', () => {
        for (let burgerBlock of burgerBlocks) {
            burgerBlock.classList.toggle('burger-open');
        }
    });
}

burger();