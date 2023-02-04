const nav = document.querySelector('.mobile')
const navBtn = document.querySelector('.burger')
const allNavItems = document.querySelectorAll('.mobile__navi')

const handleNav = () => {
    nav.classList.toggle('mobile--active')
    navBtn.classList.toggle('burger--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('mobile--active')
        })
    })
} 


navBtn.addEventListener('click', handleNav)