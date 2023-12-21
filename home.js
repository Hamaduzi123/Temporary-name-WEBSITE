const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// Expands the menu when burger menu is clicked
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});





const buttons = document.querySelectorAll("[data-carousel-button]");
const dotsContainer = document.querySelector("[data-carousel-dots]");
const slides = document.querySelector("[data-slides]");

let currentIndex = 0;
let autoScrollTimeout;

function setActiveDot(index) {
  const dots = dotsContainer.querySelectorAll(".carousel-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const activeSlide = slides.querySelector("[data-active]");
  delete activeSlide.dataset.active;

  currentIndex = (currentIndex + 1) % slides.children.length;
  slides.children[currentIndex].dataset.active = true;

  setActiveDot(currentIndex);
}

function startAutoScroll() {
  autoScrollTimeout = setInterval(nextSlide, 5000);
}

function resetAutoScroll() {
  clearInterval(autoScrollTimeout);
  startAutoScroll();
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    resetAutoScroll();

    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const activeSlide = slides.querySelector("[data-active]");
    delete activeSlide.dataset.active;

    currentIndex = (currentIndex + offset + slides.children.length) % slides.children.length;
    slides.children[currentIndex].dataset.active = true;

    setActiveDot(currentIndex);
  });
});

// Add dots dynamically based on the number of slides
for (let i = 0; i < slides.children.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("carousel-dot");
  dot.addEventListener("click", () => {
    resetAutoScroll();
    currentIndex = i;
    setActiveDot(currentIndex);

    const activeSlide = slides.querySelector("[data-active]");
    delete activeSlide.dataset.active;
    slides.children[currentIndex].dataset.active = true;
  });

  dotsContainer.appendChild(dot);
}

startAutoScroll();


const productContainers = [...document.querySelectorAll('.pro-container')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

