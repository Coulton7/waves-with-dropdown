var overlayBtn = document.getElementById('overlay-btn');
function autocollapse() {
    var navbar = document.getElementById('autocollapse');
    navbar.classList.remove('collapsed');

    if(overlayBtn){
      if(navbar.innerHeight > 100) {
        navbar.classList.add('collapsed');
        document.getElementById('overlay-btn').classList.add('display-none-important');
      } else {
        navbar.classList.remove('collapsed');
        document.getElementById('overlay-btn').classList.remove('display-none-important');
      }
    }
  }
  
  function menuItemOverlay() {
    if (overlayBtn){
      if(window.innerWidth > 992) {
        let overlayBtns = document.querySelector('.overlay-btn').getBoundingClientRect();
        let overlayBtnLeft = overlayBtns.left;
        let menuItem = document.querySelector('.desktop-last').getBoundingClientRect();
        let menuItemRight = menuItem.right;
    
        if ((menuItemRight > overlayBtnLeft)) {
          document.getElementById('overlay-btn').classList.add('display-none-important');
        }
        else {
          document.getElementById('overlay-btn').classList.remove('display-none-important');
        }
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", autocollapse);
  document.addEventListener("DOMContentLoaded", menuItemOverlay);
  window.addEventListener('resize', function() {
    if(overlayBtn){
      if(overlayBtn.classList.contains("change")) {
        return;
      } else {
        autocollapse();
      }
    }
  });
  window.addEventListener('resize', function() {
    if(overlayBtn){
      if(this.overlayBtn.classList.contains("change")) {
        return;
      } else {
        menuItemOverlay();
      }
    }
  });
  