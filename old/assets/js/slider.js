const togglePlayButton = document.getElementById('togglePlay');

var swiperMain = new Swiper(".swiper-container", { // Make sure this matches your Swiper container
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Toggle Play/Pause functionality
togglePlayButton.addEventListener('click', () => {
  if (swiperMain.autoplay.running) {
    swiperMain.autoplay.stop();
    togglePlayButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  } else {
    swiperMain.autoplay.start();
    togglePlayButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1500,
    autoplay: {
        delay: 0,
    },
    loop: true,
    slidesPerView: 2,
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    }
});
