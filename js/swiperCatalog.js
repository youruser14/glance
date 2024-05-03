const catalogSwiperData = [
    {
        nameItemCatalog: 'Смартфоны',
        imgCatalogSwiper: 'smartphones',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Ноутбуки',
        imgCatalogSwiper: 'laptop',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Компьютеры',
        imgCatalogSwiper: 'computer',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Телевизоры',
        imgCatalogSwiper: 'tv',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Планшеты',
        imgCatalogSwiper: 'tablets',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Колонки',
        imgCatalogSwiper: 'column',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Смартфоны',
        imgCatalogSwiper: 'smartphones',
        linkItem: '#'
    },
    {
        nameItemCatalog: 'Ноутбуки',
        imgCatalogSwiper: 'laptop',
        linkItem: '#'
    }
];


const $swiperContainer = document.querySelector('.catalog-swiper');

for (let swiper of catalogSwiperData) {
    const $catalogSlide = document.createElement('div')
    const $catalogLink = document.createElement('a');
    const $itemBox = document.createElement('div');
    const $catalogItemImg = document.createElement('img');
    const $catalogCategoryName = document.createElement('h3');

    $catalogSlide.classList.add('catalog-slide');
    $catalogLink.classList.add('catalog-link');
    $itemBox.classList.add('item-box');
    $catalogItemImg.classList.add('catalog-item__img');
    $catalogCategoryName.classList.add('catalog__category-name');

    $catalogItemImg.src = `images/catalog-swiper/${swiper.imgCatalogSwiper}.png`
    $catalogCategoryName.textContent = swiper.nameItemCatalog;
    $catalogLink.href = swiper.linkItem;

    $swiperContainer.append($catalogSlide);
    $catalogSlide.append($catalogLink);
    $catalogLink.append($itemBox);
    $itemBox.append($catalogItemImg)
    $catalogLink.append($catalogCategoryName)

}


const initSlider = () => {
    const catalogSwiper = document.querySelector(".catalog-swiper");
    const swipeButtons = document.querySelectorAll(".swiper-btn");
    const maxScrollLeft = catalogSwiper.scrollWidth - catalogSwiper.clientWidth;

    swipeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const direction = btn.id === 'prev-swipe-id' ? -1 : 1;
            const scrollAmount = catalogSwiper.clientWidth * direction;
            catalogSwiper.scrollBy({left: scrollAmount, behavior: 'smooth'})
        });
    });

    const handleSlideButtons = () => {
        swipeButtons[0].style.display = catalogSwiper.scrollLeft <= 0 ? 'none' : 'block'
        swipeButtons[1].style.display = catalogSwiper.scrollLeft >= maxScrollLeft ? 'none' : 'block'
    }

    catalogSwiper.addEventListener('scroll', () => {
        handleSlideButtons();
    })
}



window.addEventListener("load", initSlider);