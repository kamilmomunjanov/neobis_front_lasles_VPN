

let burger = document.querySelector('.burger')
let burgerNav = document.querySelector('.header-burger-nav')
let headerNav = document.querySelector('.header-nav')
let headerNavLink = document.querySelector('.header-nav-link')
let headerList = document.querySelector('.header-list')


burger.addEventListener('click', function()  {
    burger.classList.toggle('burger_active')
    burgerNav.classList.toggle('burgerNav_active')
    headerNav.classList.toggle('headerNav_active')
    headerNavLink.classList.toggle('headerNavLink_active')
    headerList.classList.toggle('headerList_active')
})