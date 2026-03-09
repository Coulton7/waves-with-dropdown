document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.getAttribute("data-arrow");
    var dots = document.getAttribute("data-dots");
    var slideAxis = document.getAttribute("data-axis");
    var slideItems = document.getAttribute("data-items");
    var itemsXs = document.getAttribute("data-items-xs");
    var itemsSm = document.getAttribute("data-items-sm");
    var itemsMd = document.getAttribute("data-items-md");
    var itemsLg = document.getAttribute("data-items-lg");
    var itemsXL = document.getAttribute("data-items-xl");
    var itemsXXL = document.getAttribute("data-items-xxl");
    var itemsXXXL = document.getAttribute("data-items-xxxl");
    var sliderSpeed = document.getAttribute("data-speed");
    var sliderGutter = document.getAttribute("data-gutter");
    var mobileTouch = document.getAttribute("data-touch");

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

    if(document.querySelectorAll('.test-slider').length > 0){
        var test_slider = tns ({
            container: ".test-slider",
            speed: sliderSpeed,
            loop: false,
            items: slideItems,
            axis: slideAxis,
            touch: mobileTouch,
            nav: dots,
            controls: arrow,
            controlsContainer: "#arrow-controls",
            gutter: sliderGutter,
            lazyload: true,
            autoplay: false,
            responsive: {
                1 : {
                items: itemsXs 
                },
        
                600 : {
                items: itemsSm
                },
        
                768: {
                    items: itemsMd
                },
        
                992: {
                    itmes: itemsLg
                },
        
                1200: {
                    items: itemsXL
                },

                1400: {
                    items: itemsXXL
                },

                1600: {
                    items: itemsXXXL
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