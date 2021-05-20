export function scrollUpp() {
    const offset = 300;
    const scrollUp = document.querySelector('.scroll-up');
    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    //click
    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        });
    });

    //onscroll
    window.addEventListener('scroll', () => {
        if (getTop() > offset) {
            scrollUp.classList.add('scroll-up__active');
        } else {
            scrollUp.classList.remove('scroll-up__active');
        }
    });

    setInterval(function () {
        scrollUp.classList.remove('scroll-up__active');
    }, 3000);
}

scrollUpp();