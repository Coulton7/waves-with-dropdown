document.addEventListener("DOMContentLoaded", function() {
    var timeline = document.querySelector(".timeline");
    var timelineContainer = document.querySelector(".timeline-container");
    var timelineImage = document.querySelector(".timeline-image");
    var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var topofImage = timeline.getBoundingClientRect().top;
    var imageWidth = timelineImage.clientWidth;

    timeline.setAttribute("style", "height: " + imageWidth + "px");

    window.addEventListener('scroll', function(){
        if (timeline.getBoundingClientRect().top < 0) {
            timelineContainer.style.position = "sticky";
            timelineContainer.style.top = "0";
            timelineImage.style.position = "absolute";
        }

        console.log(scrollPos);

        if (timelineContainer.style.position === "sticky" ){
            window.addEventListener('scroll', function(e){
                timelineImage.style.transform = 'translateX( -' + scrollPos + 'px)';
            });
        };
            
    });
});