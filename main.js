
const burger = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-list');
const navItem =navMenu.querySelectorAll('li');

burger.addEventListener('click',function(){
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
}

)
navItem.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.classList.remove('active');
    });
});