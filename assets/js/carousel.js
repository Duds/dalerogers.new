const carousel = document.querySelector('.carousel');
const carouselTrack = document.querySelector('.carousel__track');
const prevButton = document.querySelector('.carousel__control--backward');
const nextButton = document.querySelector('.carousel__control--forward');
const slides = document.querySelectorAll('.carousel__slide');
const totalSlides = slides.length;
let currentSlide = 1;

function updateSlide() {
  carouselTrack.style.transform = `translateY(-${(currentSlide - 1) * 100}%)`;
  
  slides.forEach((slide, index) => {
    if (index + 1 === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  
  carousel.dataset.currentSlide = currentSlide;
}

function showNextSlide() {
  slides[currentSlide - 1].classList.remove('slide-in-down', 'slide-in-up');
  
  if (currentSlide === totalSlides) {
    slides[0].classList.add('slide-in-up');
  } else {
    slides[currentSlide].classList.add('slide-in-up');
  }
  
  currentSlide = (currentSlide % totalSlides) + 1;
  updateSlide();
}

function showPrevSlide() {
  slides[currentSlide - 1].classList.remove('slide-in-down', 'slide-in-up');
  
  if (currentSlide === 1) {
    slides[totalSlides - 1].classList.add('slide-in-down');
  } else {
    slides[currentSlide - 2].classList.add('slide-in-down');
  }
  
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides || totalSlides;
  updateSlide();
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

updateSlide();