document.addEventListener("DOMContentLoaded", function() {
    var timeline = document.querySelector(".timeline");
    var timelineImage = document.querySelector(".timeline-image");
    var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var topofImage = timeline.getBoundingClientRect().top;
    var imageWidth = timelineImage.clientWidth;

    timeline.setAttribute("style", "height: " + imageWidth + "px");
    console.log(topofImage);

    window.addEventListener('scroll', function(){
        console.log(topofImage);
        if (timeline.getBoundingClientRect().top < 0) {
            timeline.style.display = "sticky";
            timeline.style.transform = 'translateX(' + (-scrollPos) + 'px)';
        }
    });
});