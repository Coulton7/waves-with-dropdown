document.addEventListener("DOMContentLoaded", function() {
    el_scrollNav = document.querySelector('.scroll-nav');

    if(el_scrollNav) {
        var last_scroll_top = 0;
        if(window.innerWidth > 992) {
            
            window.addEventListener('scroll', function(){
                let scroll_top = window.scrollY;
                if(scroll_top === 0) {
                    el_scrollNav.classList.add('scrolled-up');
                    el_scrollNav.classList.remove('scrolled-down');   
                }
                 else if(scroll_top < last_scroll_top) {
                    el_scrollNav.classList.remove('scrolled-down');
                    el_scrollNav.classList.add('scrolled-up');
                }
                else {
                    el_scrollNav.classList.remove('scrolled-up');
                    el_scrollNav.classList.add('scrolled-down');
                }
                last_scroll_top = scroll_top;
         });
        } else {
            el_scrollNav.classList.add('scrolled-up')
        }
    }
});