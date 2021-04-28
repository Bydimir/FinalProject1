const hidenItems = document.querySelectorAll('.link-hidden');
const showButton = document.querySelector('.loadmore-mobile__btn');


for (let i = 0; i < hidenItems.length; i++) {
    /*     hidenItem = hidenItems[i];
     */
    showButton.addEventListener('click', () => {
        hidenItems[i].classList.remove('link-hidden');
        showButton.style.display = 'none';
    });
}