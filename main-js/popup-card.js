const popupLinks = document.querySelectorAll('.popup-card-link');
const curentPopup = document.querySelector('.popup-card');


if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', (e) => {
            curentPopup.classList.add('open');
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup-card');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const popupClose = popupCloseIcon[i];
        popupClose.addEventListener('click', (e) => {
            curentPopup.classList.remove('open');
            e.preventDefault();
        });

    }
}
// window.addEventListener('click', (e) => {
//     if (e.target == curentPopup) {
//         curentPopup.style.display = "none";
//     }
// });