const priceSlider = document.querySelector('.price-filter');


if (priceSlider) {
    noUiSlider.create(priceSlider, {
        start: [9, 40],
        connect: true,

        step: 1,
        range: {
            'min': 9,
            'max': 40
        }
    });
}

const valueNumberMin = document.querySelector('.price-value__min-price');
const valueNumberMax = document.querySelector('.price-value__max-price');
const valueNumbers = [valueNumberMin, valueNumberMax];


priceSlider.noUiSlider.on('update', function (values, handle) {
    valueNumbers[handle].value = Math.round(values[handle]);
});



/* const inputLeft = document.querySelector('.input-left');
const inputRight = document.querySelector('.input-right');

const thumbLeft = document.querySelector('.slider > .thumb.left');
const thumbRight = document.querySelector('.slider > .thumb.right');
const range = document.querySelector('.slider> .range');

const outLeft = document.querySelector('.out-left');
const outRight = document.querySelector('.out-right');


function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 9);

    var percent = ((_this.value - min) / (max - min)) * 92;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";

    inputLeft.addEventListener('input', () => {
        let data = inputLeft.value;
        outLeft.textContent = data + ",00₴";
    });
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 9);

    var percent = ((_this.value - min) / (max - min)) * 92;
    thumbRight.style.right = (92 - percent) + "%";
    range.style.right = (92 - percent) + "%";

    inputRight.addEventListener('input', () => {
        let data = inputRight.value;
        outRight.textContent = data + ",00₴";
    });
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue); */