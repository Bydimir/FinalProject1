function mobileSlider() {
    const imagesSlider = document.querySelectorAll('.galery-slider__link');
    const sliderLine = document.querySelector('.galery-slider__line');

    let count = 0;
    let width;

    function init() {
        console.log('resize');
        width = document.querySelector('.galery-slider').offsetWidth;

        console.log(width);
        sliderLine.style.width = width * imagesSlider.length + 'px';
        imagesSlider.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = "auto";
        });
        rollSlider();

    }

    window.addEventListener('resize', init);
    init();

    document.querySelector('.galery-slider__prev').addEventListener('click', () => {
        count--;

        if (count < 0) {
            count = imagesSlider.length - 1;
        }
        rollSlider();
    });

    document.querySelector('.galery-slider__next').addEventListener('click', () => {
        count++;

        if (count >= imagesSlider.length) {
            count = 0;
        }
        rollSlider();
    });

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}

mobileSlider();