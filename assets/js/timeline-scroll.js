document.addEventListener("DOMContentLoaded", function() {
    var timeline = document.querySelector(".timeline");
    var timelineContainer = document.querySelector(".timeline-container");
    var timelineImage = document.querySelector(".timeline-image");
    var imageWidth = timelineImage.clientWidth;
    var scrollTop = 0;
    var scrollValue = 0;

    timeline.setAttribute("style", "height: " + imageWidth + "px");

    window.addEventListener('wheel', function(e){
        
        if (timeline.getBoundingClientRect().top < 0) {
            timelineContainer.style.position = "sticky";
            timelineContainer.style.top = "0";
            timelineImage.style.position = "absolute";
        }

        if(timeline.offsetHeight + timeline.scrollTop > timeline.scrollHeight){
            timelineContainer.style.position = "relative";
            timelineImage.style.position = "relative";
            console.log("Timeline end reached");
        }

        if (timelineContainer.style.position === "sticky" ){
            
                const y = e.deltaY;
                if (y > 0) {                    
                    scrollValue += 1; 
                } else {
                    scrollValue -= 1; 
                }
                timelineImage.style.transform = 'translateX( -' + Math.min(imageWidth, Math.max(0, scrollValue)) + 'px)';
            }
        });
            
    });