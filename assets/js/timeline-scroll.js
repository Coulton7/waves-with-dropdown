document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('.timeline')) {
        
        var timeline = document.querySelector(".timeline");
        var timelineContainer = document.querySelector(".timeline-container");
        var timelineImage = document.querySelector(".timeline-image");
        var imageWidth = timelineImage.clientWidth;
        var fifthOfImageWidth = imageWidth / 5;
        var scrollValue = 0;
        var lastScrollTop = 0;

        timeline.setAttribute("style", "height: " + imageWidth + "px");

        window.addEventListener('scroll', function(e){
            var timelineBounding = timeline.getBoundingClientRect();
            var navBounding = document.getElementById("autocollapse").getBoundingClientRect();
            const scrolled = window.scrollY;
            
            if (timelineBounding.top < navBounding.bottom) {
                timelineContainer.style.position = "sticky";
                timelineContainer.style.top = "5rem";
                timelineImage.style.position = "absolute";
            } else if (timelineBounding.top > navBounding.bottom
            ) {
                timelineContainer.style.position = "relative";
                timelineContainer.style.top = "0";
                timelineImage.style.position = "relative";
            }

            if(timelineBounding.bottom < navBounding.bottom) {
                timelineContainer.style.position = "relative";
                timelineContainer.style.top = "0";
                timelineImage.style.position = "relative";
            } else if (timelineBounding.bottom < navBounding.bottom) {
                timelineContainer.style.position = "sticky";
                timelineContainer.style.top = "5rem";
                timelineImage.style.position = "absolute";
            }

            if (timelineContainer.style.position === "sticky" ){
                var timelineTop = timelineBounding.top;
                var totalScrollableHeight = timeline.scrollHeight; - timeline.clientHeight;
                var scrollPercent = ((timelineTop / totalScrollableHeight) * 100);
                timelineImage.style.transform = 'translateX(' + Math.min(0, Math.max(-80, scrollPercent)) + '%)';
            }
            
        });

    }
            
});