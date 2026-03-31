document.addEventListener("DOMContentLoaded", function() {
    var timeline = document.querySelector(".timeline");
    var timelineImage = document.querySelector(".timeline-image");
    var scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var topofImage = timeline.getBoundingClientRect().top;
    var imageWidth = timelineImage.naturalWidth;

    timeline.setAttribute("height", imageWidth);
    console.log(topofImage);

    window.addEventListener('scroll', function(){
        if (topofImage <= 0) {
            timeline.style.display = "sticky";
            timeline.style.transform = 'translateX(' + (-scrollPos) + 'px)';
        } else {
            timeline.style.display = "block";
        }
    });
});