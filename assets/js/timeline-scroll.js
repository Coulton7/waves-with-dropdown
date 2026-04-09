document.addEventListener("DOMContentLoaded", function() {
    var timeline = document.querySelector(".timeline");
    var timelineContainer = document.querySelector(".timeline-container");
    var timelineImage = document.querySelector(".timeline-image");
    var imageWidth = timelineImage.clientWidth;

    timeline.setAttribute("style", "height: " + imageWidth + "px");

    window.addEventListener('scroll', function(){
        var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

        var scroll = window.scrollY;
        var scrollTop = 0;
         if (scroll > scrollTop) {
            console.log("Scrolling down");
        } else {
            console.log("Scrolling up");
        }
        
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
            window.addEventListener('scroll', function(e){
                timelineImage.style.transform = 'translateX( -' + Math.min(imageWidth, Math.max(0, scrollPos/8)) + 'px)';
            });
        };
            
    });
});