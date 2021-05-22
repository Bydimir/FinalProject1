export function range() {
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
}
range();