document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/projects/digital_guide.svg",
    "img/projects/research.svg",
    "img/projects/copilot.svg",
  ];

  let currentIndex = 0;

  function updateImage() {
    const imgElement = document.getElementById("projectImage");
    imgElement.src = images[currentIndex];
  }

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateImage();
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateImage();
  });

  // Initialize with the first image
  updateImage();
});
