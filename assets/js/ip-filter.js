document.addEventListener("DOMContentLoaded", function(){
    var url = window.location.href;
    if (/NONE/.test(url)) {
        document.querySelector('#none').classList.add('img-75');
    } else if (/IP55/.test(url)) {
        document.querySelector('#ip55').classList.add('img-75');
    } else if (/IP66/.test(url)) {
        document.querySelector('#ip66').classList.add('img-75');
    } else if (/IP69K/.test(url)) {
        document.querySelector('#ip69k').classList.add('img-75');
    } else {
        document.querySelector('#any').classList.add('img-75');
    }
  });