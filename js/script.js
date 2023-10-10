document.addEventListener("DOMContentLoaded", function () {
  // Navigation Toggle
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  header.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Image Carousel Functionality
  let currentImageIndex = 0;
  const images = document.querySelectorAll(".image-carousel img");
  document
    .querySelector(".image-carousel .prev")
    .addEventListener("click", function () {
      images[currentImageIndex].style.display = "none";
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      images[currentImageIndex].style.display = "block";
    });

  document
    .querySelector(".image-carousel .next")
    .addEventListener("click", function () {
      images[currentImageIndex].style.display = "none";
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = "block";
    });

  // FAQs Toggle Functionality
  const faqItems = document.querySelectorAll(".faq-item h2");
  faqItems.forEach(function (faq) {
    faq.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
