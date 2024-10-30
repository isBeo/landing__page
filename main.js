



document.querySelector('.toggle__menu').addEventListener('click',()=>{
    const toggle = document.querySelector('.toggle__menu')
    const menu = document.querySelector('nav ul')

    document.body.style.backgroundColor='var(--darkbg)'
    menu.classList.toggle('menu-active')
    toggle.classList.toggle('active')
    if(toggle.classList.contains('active')){
        return  document.querySelector('main').style.display='none'
        
    }else{
        return  document.querySelector('main').style.display='block'
        
    }
})