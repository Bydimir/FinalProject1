export function mobileFilter() {
    const filterMobile = document.querySelector('.filter-bar');
    const buttonFilterMobile = document.querySelector('.filter-mobile__btn');
    const filterMobileClose = document.querySelector('.filter-mobile-close');

    buttonFilterMobile.addEventListener('click', () => {
        filterMobile.style.transform = 'translateX(0)';
    });

    filterMobileClose.addEventListener('click', () => {
        filterMobile.style.transform = 'translateX(100%)';
    });
}

mobileFilter();