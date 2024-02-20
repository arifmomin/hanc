// ==================================counter part start===========================
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// ----------------------------------counter part end-----------------------------
// ==================================popular slider start===========================
$('.popular_row').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<i class="fa-solid fa-angle-left p_left"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right p_right"></i>',
});

// ----------------------------------popular slider end-----------------------------
// ==================================video part start===========================
$('.video_row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
  centerMode: true,
  centerPadding:40,
});
// ----------------------------------video part end-----------------------------
// ==================================game part start===========================
$('.game_row').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
});
// ----------------------------------game part end-----------------------------
// ==================================accesories part start===========================
$('.accesories_row').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<i class="fa-solid fa-angle-left acc_left"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right acc_right"></i>',
});
// ----------------------------------accesories part end-----------------------------
// ==================================catalog slider start===========================
let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    // Remove 'can-zoom' class from all slides
    document.querySelectorAll('.zoom-container').forEach((container) => {
      container.classList.remove('can-zoom');
    });

    // Set the active slide
    const activeSlide = document.getElementById(`s${currentSlide}`);
    activeSlide.checked = true;

    // Add 'can-zoom' class to the active slide
    const activeContainer = document.querySelector(`.zoom-container[data-slide="${currentSlide}"]`);
    if (activeContainer) {
      activeContainer.classList.add('can-zoom');
    }

    // Move to the next slide
    currentSlide++;
    if (currentSlide > 5) {
      currentSlide = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    if (!container.classList.contains('can-zoom')) {
      return;
    }
    pauseSlide();
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
  });
});
// ----------------------------------catalog slider end-----------------------------











