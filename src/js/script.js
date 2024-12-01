//MENU V1
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Submenu toggle logic
const submenuToggles = document.querySelectorAll('.header__nav--submenu-toggle');

submenuToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
        const parent = toggle.closest('.has-submenu');
        const expanded = toggle.getAttribute('aria-expanded') === 'true';

        // Toggle aria-expanded
        toggle.setAttribute('aria-expanded', !expanded);

        // Toggle submenu visibility
        parent.classList.toggle('active-submenu');
    });
});



//Adicionando sombra à header ao scrollar 50px
const scrollHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

//TROCA DE TEMA 
// AJUSTAR CSS FUTURAMENTE
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//SLIDER DE DESENVOLVEDORES
$(document).ready(function () {
    $('.group__development--container').slick({
        arrows: false,
        infinite: true,
        dots: false,
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 2500,
                    dots: false
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: false,
                    autoplaySpeed: 2500,
                    dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 2500,
                    dots: false
                },
            },
        ],
    });
});

//ACCORDION FAQ
document.querySelectorAll('.faq__container--question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('svg');

        document.querySelectorAll('.faq__container--answer').forEach(content => {
            if (content !== answer) content.style.maxHeight = null;
        });
        document.querySelectorAll('.faq__container--question svg').forEach(otherIcon => {
            if (otherIcon !== icon) otherIcon.style.transform = 'rotate(0deg)';
        });

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

