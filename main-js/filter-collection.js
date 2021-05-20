export function filterCollection() {
    const filterList = document.querySelector('.filter-bar__collection-list');
    const productItems = document.querySelectorAll('.shop-arrival__link');
    const filterListItems = document.querySelectorAll('.filter-bar__collection-list-link');


    function filterChoose() {
        filterList.addEventListener('click', (e) => {
            const targetId = e.target.dataset.id;
            const target = e.target;

            e.preventDefault();

            filterListItems.forEach((filterListItem) => {
                filterListItem.classList.remove('active-filter');
            });
            target.classList.add('active-filter');

            switch (targetId) {
                case 'all':
                    getItems('shop-arrival__link');
                    break;
                case 'sport-bras-items':
                    getItems(targetId);
                    break;

                case 'leggins-items':
                    getItems(targetId);
                    break;

                case 'shirts-items':
                    getItems(targetId);
                    break;

                case 'shorts-items':
                    getItems(targetId);
                    break;

                case 'new-items':
                    getItems(targetId);
                    break;

                case 'best-items':
                    getItems(targetId);
                    break;
            }
        });
    }
    filterChoose();

    function getItems(className) {
        productItems.forEach((productItem) => {
            if (productItem.classList.contains(className)) {
                productItem.style.display = 'inline';
            } else {
                productItem.style.display = 'none';
            }
        });
    }
}

filterCollection();