document.addEventListener("DOMContentLoaded", function() {
    var timeline = document.querySelector(".timeline");
    var timelineContainer = document.querySelector(".timeline-container");
    var timelineImage = document.querySelector(".timeline-image");
    var imageWidth = timelineImage.clientWidth;
    var fifthOfImageWidth = imageWidth / 5;
    var scrollValue = 0;

    timeline.setAttribute("style", "height: " + imageWidth + "px");

    window.addEventListener('scroll', function(e){
        let lastScrollTop = 0;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (timeline.getBoundingClientRect().top < 0) {
            timelineContainer.style.position = "sticky";
            timelineContainer.style.top = "5rem";
            timelineImage.style.position = "absolute";
        }

        if(timeline.offsetHeight + timeline.scrollTop > timeline.scrollHeight){
            timelineContainer.style.position = "relative";
            timelineImage.style.position = "relative";
            console.log("Timeline end reached");
        }

        if (timelineContainer.style.position === "sticky" ){
            
                if (scrollTop > lastScrollTop) {                    
                    scrollValue -= 1; 
                    console.log("scroll down");
                } else {
                    scrollValue += 1;
                    console.log("scroll up");
                }
                timelineImage.style.transform = 'translateX( -' + Math.min(imageWidth - fifthOfImageWidth, Math.max(0, scrollValue * 5)) + 'px)';
            }
        });
            
    });