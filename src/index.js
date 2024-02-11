import"./style/style.scss";
import 'reset-css';

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

