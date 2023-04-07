document.addEventListener("DOMContentLoaded", function() {
  const galleryImage = document.querySelector(".gallery-image img");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");
  let currentIndex = 0;
  const images = [
    "https://via.placeholder.com/800x600.png?text=Image+1",
    "https://via.placeholder.com/800x600.png?text=Image+2",
    "https://via.placeholder.com/800x600.png?text=Image+3",
    "https://via.placeholder.com/800x600.png?text=Image+4",
  ];

  // Set initial image
  galleryImage.src = images[currentIndex];

  // Add click event listeners to arrows
  leftArrow.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    galleryImage.src = images[currentIndex];
  });

  rightArrow.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    galleryImage.src = images[currentIndex];
  });
});
