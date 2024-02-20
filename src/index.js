import"./style/style.scss";
import 'reset-css';



// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
// const innerSwiper = new Swiper('.inner-swiper', {
//     grabCursor: true,
    
// })
const innerSwiper = new Swiper ('.swiper-inner', {
    slidesPerView: 1,
    nested: true,
    pagination: {
        el: '.swiper-pagination',
      },
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // custom
  slidesPerView: 3,
  spaceBetween: 30,
  slideToClickedSlide: false,
  allowTouchMove: false,
  //   autoplay: {
//     delay : 2000,
//     stopOnLast: false,
//     disableOnInteraction : false
//   },
//   speed: 800,

  breakpoints: {
    320: {
        slidesPerView: 1.2

    },
    650: {   
        slidesPerView: 2
    
    },
    1200: {
        slidesPerView: 3
    },
  },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


// header search
const searchIconElem = document.querySelector('.header-right__svg-search');
const searchFormElem = document.querySelector('.search-form__field');
searchIconElem.addEventListener('click', () => {
    searchFormElem.classList.toggle('search-form__field-active');
    searchFormElem.value = ''
})

// ham-menu 
const body = document.querySelector('.body')
const hamMenu = document.querySelector('.ham-menu')
const hamMenuIcon = document.querySelector('.ham-wrapper');

hamMenuIcon.addEventListener('click', () => {
    hamMenu.classList.toggle('ham-menu__active');
    if (hamMenu.classList.contains('ham-menu__active')) {
        body.style.overflow = 'hidden';
    } else body.style.overflow = 'visible';
    hamMenuIcon.classList.toggle('ham-wrapper__active')
})

const details = document.querySelector('.product-details');
const detailsHeading = document.querySelector('.product-details__heading');
const arrow = document.querySelector('.product-details__arrow');
console.log(arrow)
detailsHeading.addEventListener('click', () => {
    if (details.open) {
        arrow.classList.remove('product-details__arrow_active')
    } else arrow.classList.add('product-details__arrow_active')

})

