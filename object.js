const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const scrollAmount = 300;

arrowLeft.addEventListener('click', function() {
  slider.scrollLeft -= scrollAmount;
});

arrowRight.addEventListener('click', function() {
  slider.scrollLeft += scrollAmount;
});