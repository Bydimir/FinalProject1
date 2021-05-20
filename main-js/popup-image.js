const cardImage = document.querySelector('.card-image');
const imagePopupActive = document.querySelector('.enlargement-picture');
const closeImagePopup = document.querySelector('.close-picture');

cardImage.addEventListener('click', () => {
    imagePopupActive.style.display = 'block';
});

closeImagePopup.addEventListener('click', () => {
    imagePopupActive.style.display = 'none';
});

const zoomImage = document.querySelector('.zoom-image');
const popupImage = document.querySelector('.popup-image');

popupImage.addEventListener('click', () => {
    zoomImage.style.display = 'block';
    popupImage.style.display = 'none';
});

zoomImage.addEventListener('click', () => {
    popupImage.style.display = 'block';
    zoomImage.style.display = 'none';
});

/* const boxer = boxercontainer.querySelector('.image-zoom'),
    maxMove = boxercontainer.offsetWidth / 30,
    boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
    boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2);

function getMousePos(xRef, yRef) {
    let panelRect = boxercontainer.getBoundingClientRect();
    return {
        x: Math.floor(xRef - panelRect.left) /
            (panelRect.right - panelRect.left) * boxercontainer.offsetWidth,
        y: Math.floor(yRef - panelRect.top) /
            (panelRect.bottom - panelRect.top) * boxercontainer.offsetHeight
    };
}

document.body.addEventListener("mousemove", function (e) {
    let mousePos = getMousePos(e.clientX, e.clientY),
        distX = mousePos.x - boxerCenterX,
        distY = mousePos.y - boxerCenterY;
    if (Math.abs(distX) < 500 && distY < 200) {
        boxer.style.transform =
            "translate(" + (-1 * distX) / 12 + "px," + (-1 * distY) / 12 + "px)";
    }
}); */