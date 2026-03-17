const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("section")) {
        entry.target.classList.add("show");
      }

      if (entry.target.classList.contains("reveal")) {
        entry.target.classList.add("active");
      }
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".section, .reveal")
  .forEach((el) => observer.observe(el));

