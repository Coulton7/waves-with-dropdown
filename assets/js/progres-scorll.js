let scrollTop = window.scrollY;
let viewportHeight = document.body.clientHeight - window.innerHeight;
let scrollPercent = (scrollTop / viewportHeight) * 100;
let progressBar = document.querySelector('.progress-bar');

progressBar.setAttribute('value', scrollPercent);

window.addEventListener('scroll', function() {
    scrollTop = window.scrollY;
    viewportHeight = document.body.clientHeight - window.innerHeight;
    scrollPercent = (scrollTop / viewportHeight) * 100;
    progressBar.setAttribute('value', scrollPercent);
});