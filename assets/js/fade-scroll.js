document.addEventListener("DOMContentLoaded", function() {
    const textLogo = document.querySelector('.textlogo');
    const sectionShadow = document.querySelector('.section-shadow');
    const enquiry = document.querySelector('.enq-icon');
    const navbar = document.querySelector('.bg-transparent .navbar-collapse');
    var navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    var overlayLink = document.querySelector('.overlay-btn');
    var scrollNav = document.querySelector('.scroll-nav');
    
    function fadeScroll() {
        window.addEventListener('scroll', function(e) {
            var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            sectionShadow.style.opacity = Math.max(0, Math.min(1, +scrollPos / 600));
            textLogo.style.opacity = Math.max(0, Math.min(1, +scrollPos / 600));
            enquiry.style.opacity = Math.max(0, Math.min(1, +scrollPos / 600));
            navbar.style.backgroundColor = "rgba(255,255,255,"+ Math.max(0, Math.min(1, +scrollPos / 600)); +")";
    
            if(scrollPos/600 >= 0.75) {
                for (var i = 0; i < navLinks.length; i++) {
                    navLinks[i].classList.add('normText');
                    overlayLink.classList.add('normText');
                }
                scrollNav.classList.add('shadow-back');
            }
    
            if(scrollPos/600 < 0.75) {
                for (var x = 0; x < navLinks.length; x++) {
                    navLinks[x].classList.remove('normText');
                    overlayLink.classList.remove('normText');
                }
                scrollNav.classList.remove('shadow-back');
            }
        });
    };

    if(window.innerWidth > 992) {
        sectionShadow.style.opacity = -1.03;
        textLogo.style.opacity = -1.03;
        enquiry.style.opacity = -1.03;
        navbar.style.backgroundColor = "rgba(255,255,255,0)";
        fadeScroll();

    } else {
        sectionShadow.style.opacity = 1;
        textLogo.style.opacity = 1;
        enquiry.style.opacity = 1;
        navbar.style.backgroundColor = "rgba(255,255,255,1)";
        scrollNav.classList.add('shadow-back')
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth > 992) {
            sectionShadow.style.opacity = -1.03;
            textLogo.style.opacity = -1.03;
            enquiry.style.opacity = -1.03;
            navbar.style.backgroundColor = "rgba(255,255,255,0)";
            fadeScroll();
        
        } else {
            sectionShadow.style.opacity = 1;
            textLogo.style.opacity = 1;
            enquiry.style.opacity = 1;
            navbar.style.backgroundColor = "rgba(255,255,255,1)";
            scrollNav.classList.add('shadow-back')
        }
    });

});