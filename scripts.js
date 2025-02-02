document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const fadeElements = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });

    fadeElements.forEach((el) => {
      const fadeTop = el.getBoundingClientRect().top;

      if (fadeTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
