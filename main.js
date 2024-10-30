



document.querySelector('.toggle__menu').addEventListener('click',()=>{
    const toggle = document.querySelector('.toggle__menu')
    const menu = document.querySelector('nav ul')

    menu.classList.toggle('menu-active')
    toggle.classList.toggle('active')
})