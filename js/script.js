var botao_menu = document.getElementById('botao')
    botao_menu.addEventListener('click', toggle_botao)


function toggle_botao() {
    var nav = document.querySelector('.navbar')
        nav.classList.toggle('active');
}

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animatButton() {
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/5);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);

        } else {
            element.classList.remove(animationClass);
        }
    })
}

animatButton();

if(target.length){
    window.addEventListener('scroll', function() {
        animatButton();
    })
}