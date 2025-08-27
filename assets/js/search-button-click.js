var x = document.getElementById("overlayNav");
var y = document.getElementById("searchOverlay");
var s = document.getElementById("shareOverlay");
var overlayNavBtn = document.querySelector("#overlay-btn");
var overlaySearchBtn = document.querySelector("#overlay-search");
var overlaySearchGlobal = document.querySelector("#global-overlay-search");
var overlayShareBtn = document.querySelector("#overlay-share");
var footerOverlayBtn = document.querySelector("#footer-overlay-btn");
var mobileNavOverlay = document.querySelector("[data-bs-target='#mobile-overlay']");
var mobileOverlaySearch  = document.querySelector("#mob-overlay-search");
var html = document.querySelector("html");
var body = document.querySelector("body");
var dialogOffCanvas = document.querySelector(".dialog-off-canvas-main-canvas");
var frontPage = document.querySelector(".path-frontpage");
var scrollNav = document.querySelector('.scroll-nav');
var navLinks = document.querySelectorAll(".nav-link");
var url = window.location.href;
var query = 'q';

document.addEventListener("DOMContentLoaded", function () {
  var popSearchButton = document.querySelector(".pop-search-button");
  if(popSearchButton){
      console.log('Pop search button is here');
  }
        
});