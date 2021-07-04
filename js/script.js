const menu = document.getElementById('menu-icon')
menu.addEventListener("click", function() {
    var mobile = document.getElementById('mobile-nav')
    
    if(!mobile.classList.contains('mobile-activate')) {
        mobile.classList.add('mobile-activate')
    }

    else {
        mobile.classList.remove('mobile-activate')
    }
})
