document.addEventListener("DOMContentLoaded", function () {
    const homeCarousel = document.querySelector('.home-carousel');
    function carouselResize() {
        if(window.innerWidth >= 1800) {
            homeCarousel.classList.add('ratio-2x1');
        } else if(window.innerWidth >= 1401 && window.innerWidth < 1800 ) {
            homeCarousel.classList.add('ratio-16x9');
        } else if(window.innerWidth >= 1201 && window.innerWidth < 1400) {
            homeCarousel.classList.add('ratio-8x5');
        } else if(window.innerWidth >=993 && window.innerWidth < 1200) {
            homeCarousel.classList.add('ratio-1x1');
        } else if(window.innerWidth >= 769 && window.innerWidth < 992) {
            homeCarousel.classList.add('ratio-5x8');
        } else if(window.innerWidth >= 576 && window.innerWidth < 768) {
            homeCarousel.classList.add('ratio-3x7');
        } else {
            homeCarousel.classList.add('ratio-3x7');
        }
    }
    carouselResize();

    window.addEventListener('resize', function() {
        homeCarousel.classList.remove('ratio-2x1', 'ratio-16x9', 'ratio-8x5', 'ratio-1x1', 'ratio-5x8', 'ratio-3x7');
        carouselResize();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselEl = document.getElementById("carousel-fade");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const pauseBtns = document.querySelectorAll("#carouselPauseBtn");

  let carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
  let isPaused = false;

  pauseBtns.forEach(pauseBtn => {
    pauseBtn.addEventListener("click", () => {
      if (isPaused) {
        carousel.cycle();
        pauseBtns.forEach(btn => btn.innerHTML = `<i class="fa-solid fa-pause"></i>`);
        pauseBtns.forEach(btn => {
          btn.setAttribute("aria-pressed", "false");
          btn.setAttribute("aria-label", "Pause carousel");
        });
      } else {
        carousel.pause();
        pauseBtns.forEach(btn => btn.innerHTML = `<i class="fa-solid fa-play"></i>`);
        pauseBtns.forEach(btn => {
          btn.setAttribute("aria-pressed", "true");
          btn.setAttribute("aria-label", "Play carousel");
        });
      }
      isPaused = !isPaused;
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "p") {
      pauseBtns[0].click();
    }
  });
});