export function loadMore() {
    const hidenItems = document.querySelectorAll('.link-hidden');
    const showButton = document.querySelector('.loadmore-mobile__btn');


    hidenItems.forEach((hidenItem) => {
        showButton.addEventListener('click', () => {
            hidenItem.classList.remove('link-hidden');
            showButton.style.display = 'none';
        });
    });
}

loadMore();