window.addEventListener("load", () => {
  const heroContainer = document.querySelector(".hero-container");
  const heroLogo = document.querySelector(".hero-logo");
  const fadeIn = document.querySelectorAll(".fade-in");
  fadeIn.forEach((text) => {
    text.style.opacity = 1;
    text.style.transform = "translateY(0)";
  });
  heroLogo.style.opacity = 1;
  heroContainer.style.opacity = 1;
  heroContainer.style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,0.5)";
});
