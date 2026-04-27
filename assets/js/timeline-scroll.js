document.addEventListener("DOMContentLoaded", function() {
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
        const scrollableRange = timelineContainer.scrollHeight - timelineContainer.clientHeight;
        if (scrollableRange <= 0) return;
        const scrollPercentage = (timelineContainer.scrollTop / scrollableRange) * 100;
        
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
            console.log("Timeline end reached");
        } else if (timelineBounding.bottom < navBounding.bottom) {
            timelineContainer.style.position = "sticky";
            timelineContainer.style.top = "5rem";
            timelineImage.style.position = "absolute";
        }

        if (timelineContainer.style.position === "sticky" ){
            console.log('Scroll Percentage: ' + scrollPercentage + '%');

                if (scrolled <= lastScrollTop) {                    
                    scrollValue -= 1;
                    lastScrollTop = scrolled;
                    if(scrollValue < 0) {
                        scrollValue = 0;
                    }
                    console.log(scrollValue);
                } else if(scrolled >= lastScrollTop) {
                    scrollValue += 1; 
                    lastScrollTop = scrolled;
                    if(scrollValue > imageWidth / 10) {
                        scrollValue = imageWidth / 10;
                    }
                    console.log(scrollValue);
                }
                timelineImage.style.transform = 'translateX( -' + Math.min(imageWidth - fifthOfImageWidth, Math.max(0, scrollValue * 10)) + 'px)';
            }
        
        });
            
    });