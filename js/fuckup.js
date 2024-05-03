// const $sliderImages = document.querySelectorAll('.promotion-img'),
// $sliderDots = document.querySelectorAll('.dot'),
// $sliderLine = document.querySelector('.slider-photos__item')

// window.addEventListener('resize', showSlide)

// let sliderCount = 0,
//     sliderWidth;

// function showSlide() {
//     sliderWidth = document.querySelector('.item-picture').offsetWidth;
//     $sliderLine.style.width = sliderWidth * $sliderImages.length + 'px';
//     $sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
//     rollSlider()
// }

// showSlide();

// function nextSlide() {
//     sliderCount++;
//     if (sliderCount >= $sliderImages.length) sliderCount = 0;
//     rollSlider();
//     thisDotSlide(sliderCount);
// }

// function prevSlide() {
//     sliderCount--;
//     if (sliderCount < 0) sliderCount = $sliderImages -1;
//     rollSlider();
//     thisDotSlide(sliderCount);
// }
// function rollSlider() {
//    $sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
// }

// function thisDotSlide(index) {
//     $sliderDots.forEach(dots => dots.classList.remove('active-dot'));
//     $sliderDots[index].classList.add('active-dot');
// }

// $sliderDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         sliderCount = index;
//         rollSlider();
//         thisDotSlide(sliderCount);
//         console.log(dot);
//     })
// })



// const slidesImg = document.querySelectorAll('.promotion-img');
// const dotWrapper = document.querySelector('.dot-wrapper');

// const paginationDots = [];
// let currentSlideIndex = 0;

// function createPaginationDot() {
//     const divDot = document.createElement('div');
//     divDot.className = 'dot';
//     dotWrapper.appendChild(divDot);
//     paginationDots.push(divDot);
// }

// function addPaginationDot() {
//     slidesImg.forEach(createPaginationDot);
//     paginationDots[0].classList.add('active-dot');
//     paginationDots.forEach((dot, index) => {
//         dot.addEventListener('click', () => changeSlide(index));
//     });
// };

// function addActiveClass() {
//     paginationDots[currentSlideIndex].classList.add('active-dot');
// }
// function removeActiveClass() {
//     paginationDots[currentSlideIndex].classList.remove('active-dot');
// }

// function showSlide() {
//     slidesImg[currentSlideIndex].classList.add('.promotion-img__block');
// }
// function hideSlide() {
//     slidesImg[currentSlideIndex].classList.remove('.promotion-img__block');
// }

// function changeSlide(slideIndex) {
//     hideSlide();
//     removeActiveClass();
//     currentSlideIndex = slideIndex;
//     addActiveClass();
//     showSlide();
// }

// function nexSlide() {
//     let newSlideIndex = currentSlideIndex + 1;
//     if(newSlideIndex > slidesImg.length - 1) {
//         newSlideIndex = 0;
//     }
//     changeSlide(newSlideIndex);
// }

// function prevSlide() {
//     let newSlideIndex = currentSlideIndex - 1;
    
//     if(newSlideIndex < 0) {
//         newSlideIndex = slidesImg.length - 1;
//     }
//     changeSlide(newSlideIndex);
// }

// addPaginationDot();

const nameOfDocumentElement = [
    // {
        $promotionItemBox = 'promotion-item__box',
        $itemPicture = 'item-picture',
        $sliderPhotosItems = 'slider-photos__items',
        $promotionImgFirst = 'promotion-img',
        $promotionImgSecond = 'promotion-img',
        $promotionImgThird = 'promotion-img',
        $percentBox = 'percent-box',
        $dotWrapper = 'dot-wrapper',
        $promotionTitle = 'promotion-title',
        $promotionPrice = 'promotion-price',
        $mainPrice = 'main-price',
        $discountPrice = 'discount-price',
        $favoritesInfo = 'favorites-info',

    // }
]

// function createElementDiv(nameElement) {
//     let createElement = nameElement;
//     createElement = document.createElement('div');
//     createElement.classList.add(nameElement) ;
    
//     return createElement
// }



nameOfDocumentElement.map(function(nameElement) {
    // console.log(nameElement);
    let createElement = nameElement;
    createElement = document.createElement('div');
    createElement.classList.add(`${nameElement}`);
    console.log(createElement);
    return createElement
})

let $promotionFirstPhoto = document.querySelectorAll('promotion-img');

console.log($promotionFirstPhoto.length);
console.log($promotionFirstPhoto);
// $promotionFirstPhoto[0].classList.add('promotion-img__block');

const nameOfDocumentElement = [
    // {
        $promotionItemBox = 'promotion-item__box',
        $itemPicture = 'item-picture',
        $sliderPhotosItems = 'slider-photos__items',
        $promotionImgFirst = 'promotion-img',
        $promotionImgSecond = 'promotion-img',
        $promotionImgThird = 'promotion-img',
        $percentBox = 'percent-box',
        $dotWrapper = 'dot-wrapper',
        $promotionTitle = 'promotion-title',
        $promotionPrice = 'promotion-price',
        $mainPrice = 'main-price',
        $discountPrice = 'discount-price',
        $favoritesInfo = 'favorites-info',

    // }
]

// function createElementDiv(nameElement) {
//     let createElement = nameElement;
//     createElement = document.createElement('div');
//     createElement.classList.add(nameElement) ;
    
//     return createElement
// }



nameOfDocumentElement.map(function(nameElement) {
    // console.log(nameElement);
    let createElement = nameElement;
    createElement = document.createElement('div');
    createElement.classList.add(`${nameElement}`);
    console.log(createElement);
    return createElement
})
