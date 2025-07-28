document.addEventListener("DOMContentLoaded", function() {

    if (document.querySelectorAll('.news-slider').length > 0){
        var newsslider = tns({
            container: ".news-slider",
            loop: false,
            nav: false,
            controlsContainer: "#news-controls",
            gutter: 20,
            lazyload: true,
            responsive: {
                1 : {
                items: 1
                },
        
                600 : {
                items: 1
                },
        
                768: {
                    items: 2
                },
        
                992: {
                    itmes: 3
                },
        
                1200: {
                    items: 3
                }
            },
        })
        
        var info = newsslider.getInfo(),
            current = document.querySelector('.news-current'),
            total = document.querySelector('.news-total');
            activeSlide = info.displayIndex;
            
            total.textContent = info.slideCount;
            current.textContent = info.displayIndex + 2;
    
        newsslider.events.on('transitionEnd', function(info) {
            activeSlide = info.displayIndex +2;
            current.textContent = info.displayIndex +2;
        });
    }
    
    if (document.querySelectorAll('.pillar-slider').length > 0){
        var pillarslider = tns({
            container: ".pillar-slider",
            loop: false,
            nav: false,
            controlsContainer: "#pillar-controls",
            gutter: 20,
            lazyload: true,
            responsive: {
                1 : {
                    items: 1
                },
        
                600 : {
                    items: 1
                },
        
                768: {
                    items: 2
                },
        
                992: {
                    itmes: 3
                },
        
                1200: {
                    items: 3
                }
            },
        })
        
        pillarslider.events.on('transitionEnd', function(info) {
        
            if (activeSlide >= 1 && activeSlide <= 5) {
                document.getElementById('esg-icon').classList.add('active');
                document.getElementById('tech-icon').classList.remove('active');
                document.getElementById('cust-icon').classList.remove('active');
            }
        
            else if (activeSlide >= 6 && activeSlide <= 10) {
                document.getElementById('esg-icon').classList.remove('active');
                document.getElementById('tech-icon').classList.add('active');
                document.getElementById('cust-icon').classList.remove('active');
            }
        
            else if (activeSlide >= 11 && activeSlide <= 15) {
                document.getElementById('tech-icon').classList.remove('active');
                document.getElementById('esg-icon').classList.remove('active');
                document.getElementById('cust-icon').classList.add('active');
            }
        });
        
        document.getElementById('esg-icon').addEventListener('click', function() {
            document.getElementById('esg-icon').classList.add('active');
            pillarslider.goTo(0);
            document.getElementById('tech-icon').classList.remove('active');
            document.getElementById('cust-icon').classList.remove('active');
        });
        
        document.getElementById('tech-icon').addEventListener('click', function() {
            document.getElementById('tech-icon').classList.add('active');
            pillarslider.goTo(5);
            document.getElementById('esg-icon').classList.remove('active');
            document.getElementById('cust-icon').classList.remove('active');
        });
        
        document.getElementById('cust-icon').addEventListener('click', function() {
            document.getElementById('cust-icon').classList.add('active');
            pillarslider.goTo(10);
            document.getElementById('esg-icon').classList.remove('active');
            document.getElementById('tech-icon').classList.remove('active');
        });
    }

    if (document.querySelectorAll('.local-slider').length > 0){
        var localslider = tns({
            container: ".local-slider",
            loop: false,
            nav: false,
            controlsContainer: "#local-controls",
            gutter: 20,
            lazyload: true,
            responsive: {
                1 : {
                items: 1
                },
        
                600 : {
                items: 1
                },
        
                768: {
                    items: 2
                },
        
                992: {
                    itmes: 3
                },
        
                1200: {
                    items: 3
                }
            },
        })

    
        const localCounter = function (info, eventName) {
            var info = localslider.getInfo(),
                current = document.querySelector('.local-current'),
                total = document.querySelector('.local-total');
                activeSlide = info.displayIndex + 2;
                
                total.textContent = info.slideCount;
                current.textContent = info.displayIndex + 2;
            }

        localCounter();

        localslider.events.on('transitionEnd', localCounter);
    }

    if (document.querySelectorAll('.global-slider').length > 0){
        var globalslider = tns({
            container: ".global-slider",
            loop: false,
            nav: false,
            controlsContainer: "#global-controls",
            gutter: 20,
            lazyload: true,
            responsive: {
                1 : {
                items: 1
                },
        
                600 : {
                items: 1
                },
        
                768: {
                    items: 2
                },
        
                992: {
                    itmes: 3
                },
        
                1200: {
                    items: 3
                }
            },
        })
    
        const globalCounter = function(info, eventName) {
            var info = globalslider.getInfo(),
                current = document.querySelector('.global-current'),
                total = document.querySelector('.global-total');
                activeSlide = info.displayIndex;
                
                total.textContent = info.slideCount;
                current.textContent = info.displayIndex;
            }

        globalCounter();
    
        globalslider.events.on('transitionEnd', globalCounter);
    }

    if (document.querySelectorAll('.prod-slider').length > 0){
        var prod_slider = tns ({
            container: ".prod-slider",
            speed: 0,
            loop: false,
            nav: false,
            controlsContainer: "#prod-controls",
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
                    items: 2
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
});