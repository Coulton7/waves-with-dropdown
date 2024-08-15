document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelectorAll('.base-slider').length > 0){
        var base_slider = tns ({
            container: ".base-slider",
            speed: 0,
            loop: false,
            nav: false,
            controlsContainer: "#arrow-controls",
            gutter: 20,
            lazyload: true,
            autoplay: false,
            responsive: {
                1 : {
                items: 2 
                },
        
                600 : {
                items: 2
                },
        
                768: {
                    items: 3
                },
        
                992: {
                    itmes: 4
                },
        
                1200: {
                    items: 4
                }
            },
        })
    }

    if (document.querySelectorAll('.second-slider').length > 0){
        var second_slider = tns ({
            container: ".second-slider",
            speed: 0,
            loop: false,
            nav: false,
            controlsContainer: "#arrow-nav",
            gutter: 20,
            lazyload: true,
            autoplay: false,
            responsive: {
                1 : {
                items: 2 
                },
        
                600 : {
                items: 3
                },
        
                768: {
                    items: 3
                },
        
                992: {
                    itmes: 4
                },
        
                1200: {
                    items: 4
                }
            },
        })
    }

    if (document.querySelectorAll('.third-slider').length > 0){
        var third_slider = tns ({
            container: ".third-slider",
            speed: 0,
            loop: false,
            nav: false,
            controlsContainer: "#nav-arrow",
            gutter: 20,
            lazyload: true,
            autoplay: false,
            responsive: {
                1 : {
                items: 2 
                },
        
                600 : {
                items: 3
                },
        
                768: {
                    items: 3
                },
        
                992: {
                    itmes: 4
                },
        
                1200: {
                    items: 4
                }
            },
        })
    }
    
    if (document.querySelectorAll('.focus-slider').length > 0){
        var focus_slider = tns({
            container: ".focus-slider",
            speed: 0,
            loop: false,
            nav: false,
            controls: false,
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayTimeout: 7000
        })
    }
    
    if (document.querySelectorAll('.esg-slider').length > 0){
        var esg_slider = tns({
            container: ".esg-slider",
            speed: 0,
            loop: false,
            nav: false,
            controls: false,
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayTimeout: 7000
        })
    }

    if (document.querySelectorAll('.tech-slider').length > 0){
        var tech_slider = tns({
            container: ".tech-slider",
            speed: 0,
            loop: false,
            nav: false,
            controls: false,
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayTimeout: 7000
        })
    }

    if (document.querySelectorAll('.cust-slider').length > 0){
        var cust_slider = tns({
            container: ".cust-slider",
            speed: 0,
            loop: false,
            nav: false,
            controls: false,
            autoplay: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            autoplayTimeout: 7000
        });
    }
});