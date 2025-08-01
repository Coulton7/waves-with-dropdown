document.addEventListener("DOMContentLoaded", function () {
  var x = document.getElementById("overlayNav");
  var y = document.getElementById("searchOverlay");
  var s = document.getElementById("shareOverlay");
  var n = document.getElementById("newsOverlay");
  var overlayNavBtn = document.querySelector("#overlay-btn");
  var overlaySearchBtn = document.querySelector("#overlay-search");
  var overlayShareBtn = document.querySelector("#overlay-share");
  var footerOverlayBtn = document.querySelector("#footer-overlay-btn");
  var mobileNavOverlay = document.querySelector("[data-bs-target='#mobile-overlay']");
  var mobileOverlaySearch  = document.querySelector("#mob-overlay-search");
  var newsSearchBtn = document.querySelector("#news-search");
  var html = document.querySelector("html");
  var body = document.querySelector("body");
  var dialogOffCanvas = document.querySelector(".dialog-off-canvas-main-canvas");
  var frontPage = document.querySelector(".path-frontpage");
  var scrollNav = document.querySelector('.scroll-nav');
  var url = window.location.href;
  var query = 'q';

  if(!frontPage){
    if(overlayNavBtn){
      overlayNavBtn.addEventListener("click", function navBtn() {
        overlayNavBtn.classList.toggle("change");
          if (x.style.height === "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            html.classList.remove("noscroll");
            body.classList.remove("noscroll");
            dialogOffCanvas.classList.remove("noscroll");
            overlayNavBtn.classList.add("overlay-btn");
          } else {
            x.style.height = "100%";
            x.style.bottom = "0";
            if (y.style.height == "100%") {
              y.style.height = "1px";
              y.style.top = "-1px";
              overlaySearchBtn.classList.remove("change");
              overlaySearchBtn.classList.add("search-btn");
            } else if (s.style.height == "100%") {
              s.style.height = "1px";
              s.style.bottom = "-1px";
              overlayShareBtn.classList.remove("change");
              overlayShareBtn.classList.add("share-btn");
            }
            html.classList.add("noscroll");
            body.classList.add("noscroll");
            dialogOffCanvas.classList.add("noscroll");
            overlayNavBtn.classList.remove("overlay-btn");
          }
      });
    }
    

    if(overlaySearchBtn){
      overlaySearchBtn.addEventListener("click", function searchBtn() {
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
          document.querySelector('.ais-SearchBox-input').focus();
        }
      });
    }

    if(newsSearchBtn){
      newsSearchBtn.addEventListener("click", function searchBtn() {
        newsSearchBtn.classList.toggle("change");
        if (n.style.height === "100%") {
          n.style.height = "1px";
          n.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          newsSearchBtn.classList.add("search-btn");
          if(document.querySelector('.black-boxes-right')){
            document.querySelector('.black-boxes-right').classList.remove("overlay-btn-allow");
          }
        } else {
          n.style.height = "100%";
          n.style.bottom = "0";
          if (x.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            newsSearchBtn.classList.remove("change");
            newsSearchBtn.classList.add("overlay-btn");
          } 
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          newsSearchBtn.classList.remove("search-btn");
          if(document.querySelector('.black-boxes-right')){
            document.querySelector('.black-boxes-right').classList.add("overlay-btn-allow");
          }
          document.querySelector('.ais-SearchBox-input').focus();
        }
      });
    }

    if(url.indexOf('?' + query + '=') != -1){
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
          document.querySelector('.ais-SearchBox-input').focus();
        }
    }

    if(overlayShareBtn){
      overlayShareBtn.addEventListener("click", function shareBtn() {
        overlayShareBtn.classList.toggle("change");
        if (s.style.height === "100%") {
          s.style.height = "1px";
          s.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayShareBtn.classList.add("share-btn");
        } else {
          s.style.height = "100%";
          s.style.bottom = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (s.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            overlayNavBtn.classList.remove("change");
            overlayNavBtn.classList.add("overlay-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayShareBtn.classList.remove("share-btn");
        }
      });
    }

    if(footerOverlayBtn){
      footerOverlayBtn.addEventListener("click", function footerNavBtn() {
        footerOverlayBtn.classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "1px";
          x.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlayNavBtn.classList.add("overlay-btn");
        } else {
          x.style.height = "100%";
          x.style.bottom = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          overlayNavBtn.classList.remove("overlay-btn");
        }
      });
    }

    if(mobileNavOverlay){
      mobileNavOverlay.addEventListener("click", function mobNavBtn() {
        mobileNavOverlay.classList.toggle("change");
        if (x.style.height === "100%") {
          x.style.height = "1px";
          x.style.bottom = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
        } else {
          x.style.height = "100%";
          x.style.bottom = "0";
          if (y.style.height == "100%") {
            y.style.height = "1px";
            y.style.top = "-1px";
            overlaySearchBtn.classList.remove("change");
            overlaySearchBtn.classList.add("search-btn");
          } else if (s.style.height == "100%") {
            s.style.height = "1px";
            s.style.bottom = "-1px";
            overlayShareBtn.classList.remove("change");
            overlayShareBtn.classList.add("share-btn");
          }
          html.classList.add("noscroll");
          body.classList.add("noscroll");
          dialogOffCanvas.classList.add("noscroll");
          mobileNavOverlay.classList.remove("overlay-btn");
        }
      });
    }

    if(mobileOverlaySearch){
      mobileOverlaySearch.addEventListener("click", function mobSearchBtn() {
        mobileOverlaySearch.classList.toggle("change");
        if (y.style.height === "100%") {
          y.style.height = "1px";
          y.style.top = "-1px";
          html.classList.remove("noscroll");
          body.classList.remove("noscroll");
          dialogOffCanvas.classList.remove("noscroll");
          overlaySearchBtn.classList.add("search-btn");
        } else {
          y.style.height = "100%";
          y.style.top = "0";
          if (x.style.height == "100%") {
            x.style.height = "1px";
            x.style.bottom = "-1px";
            mobileOverlaySearch.classList.remove("change");
            mobileOverlaySearch.classList.add("overlay-btn");
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
          document.querySelector('.ais-SearchBox-input').focus();
        } 
      });
    }
  }
});