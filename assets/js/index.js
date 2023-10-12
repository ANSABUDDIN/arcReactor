document.addEventListener("DOMContentLoaded", function () {
  // This function will run when the DOM has finished loading

  hideLoader();
});

function hideLoader() {
  const loader = document.querySelector(".loader");

  loader.style.display = "none";
}



new Splide("#image-carousel", {
    pagination: boolean = false,
    arrows: boolean = true,
    paginationDirection: 'ttb',
    type   : 'loop',
    gap: '1rem',
    drag   : 'free',
    snap   : true,
    perPage: 4,
    breakpoints: {
      1200: { perPage: 2, gap: '1rem' },
      991 : { gap: '13px'  ,  arrows: boolean = false },
    },

}).mount();

new Splide('#splide_mini', {
  type   : 'loop',
  perPage: 1,
  // height   : '100px',
  // autoWidth: true,
  pagination :false,
  // drag   : 'free',
  perMove: 1,
  // gap : '1rem',
  arrows: boolean = false,
  focus: 'center',
  // Add any other Splide options here
}).mount();


splide.on('moved', () => {
  const centerSlide = document.querySelector('.splide__slide.is-active');
  if (centerSlide) {
      centerSlide.classList.add('center-slide');
  }
});

// Set the width of the center slide
const setCenterSlideWidth = () => {
  const centerSlide = document.querySelector('.splide__slide.center-slide');
  if (centerSlide) {
      centerSlide.style.width = '300px'; // Set your desired width here
  }
};

// Call the function when the slider is initialized and when the window is resized
setCenterSlideWidth();