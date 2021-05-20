export function filterAccordion() {

    const clickTitleLinks = document.querySelectorAll('.click-title');
    const showContents = document.querySelectorAll('.show-content');

    const accordionItem = function (accordionClick) {
        showContents[accordionClick].classList.toggle('active-accordion');
    };

    clickTitleLinks.forEach((clickTitleLink, i) => {
        clickTitleLink.addEventListener('click', () => {
            accordionItem(i);
            clickTitleLink.classList.toggle('switch-minus');
        });
    });
}

filterAccordion();