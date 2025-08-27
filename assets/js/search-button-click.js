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

      console.log('Pop search button is here')
        popSearchButton.addEventListener("click", function popSearchBtn(){
            overlaySearchBtn.classList.toggle("change");
            if (y.style.height === "100%") {
              y.style.height = "1px";
              y.style.top = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlaySearchBtn.classList.add("search-btn");
          if(window.innerWidth > 992) {
            if (scrollNav.classList.contains("scrolled-up")){
              scrollNav.classList.remove("scrolled-up");
              scrollNav.classList.add("scrolled-down")
            } else {
              scrollNav.classList.add("scrolled-down")
            }
          }
          document.querySelector('.overlay-btn').classList.remove("normText");
        } else {
          y.style.height = "100%";
          y.style.top = "0";
          if (x.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("overlay-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlaySearchBtn.classList.remove("search-btn");
          if(window.innerWidth > 992) {
            if (scrollNav.classList.contains("scrolled-down")){
              scrollNav.classList.remove("scrolled-down");
              scrollNav.classList.add("scrolled-up")
            } else {
              scrollNav.classList.add("scrolled-up")
            }
          }
          document.querySelector('.overlay-btn').classList.add("normText");
          document.querySelector('.main-search-bar').focus();
        }
      });
});