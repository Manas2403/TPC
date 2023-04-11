const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });
storeScroll();

document.querySelectorAll('.nav-collapse').forEach((navCollapse) => {
  navCollapse.addEventListener('mouseenter', () => {
    document.querySelectorAll('.nav-collapse').forEach((nc) => {
      let element = nc.querySelector('ul');
      if (navCollapse != nc && element.classList.contains('nav-collapse-open')) {
        element.classList.remove('nav-collapse-open');
      }
    })
    navCollapse.querySelector('ul').classList.add('nav-collapse-open');
  });
  navCollapse.addEventListener('mouseleave', () => {
    navCollapse.querySelector("ul").classList.remove("nav-collapse-open");
  });
  navCollapse.addEventListener("click", () => {
    document.querySelectorAll(".nav-collapse").forEach((nc) => {
      let element = nc.querySelector("ul");
      if (navCollapse != nc && element.classList.contains("nav-collapse-mobile-open")) {
        element.classList.remove("nav-collapse-mobile-open");
      }
    });
    navCollapse.querySelector('ul').classList.toggle('nav-collapse-mobile-open');
  })
});

let menuBtn = document.querySelector('.nav-link-button');
  
menuBtn.addEventListener('click', (event) => {
  menuBtn.classList.toggle('opened');
  document.querySelector('.nav-links').classList.toggle('mob-opened');
})