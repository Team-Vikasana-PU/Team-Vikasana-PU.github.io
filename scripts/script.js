const navbar = document.querySelector('#nav');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
};

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

$(".notch").click(() => {
    let popup = $("#popup")
    if(popup.hasClass('popup-active')) {
        $("#popup").removeClass('popup-active')
    }
    else {
        $("#popup").addClass('popup-active')
    }  
})

const mediaQuery = window.matchMedia('(max-width: 1280px)')
    if (mediaQuery.matches) {
        if($("#popup").hasClass('popup-active')) {
            $('#popup').removeClass('popup-active')
        }
    }