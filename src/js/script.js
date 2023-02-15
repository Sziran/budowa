const nav = document.querySelector('.mobile')
const navBtn = document.querySelector('.burger')
const allNavItems = document.querySelectorAll('.mobile__navi')
const navBar = document.querySelector('.burger__bar')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    nav.classList.toggle('mobile--active')
    navBtn.classList.toggle('burger--active')
    navBar.classList.toggle('bar--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('mobile--active')
        })
    })
} 

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();


navBtn.addEventListener('click', handleNav)