let arrowUp = document.getElementById("arrow-up");
let jobs = document.getElementsByClassName("js-job");
let tabs = document.getElementsByClassName("tab");
let imgPreviewJob = document.getElementById("js-preview-job");
let prevSlide = document.getElementById("js-prev");
let nextSlide = document.getElementById("js-next");
let prevTechnique = document.getElementById("js-prev-technique");
let nextTechnique = document.getElementById("js-next-technique");
let cardContainerTechnique = document.getElementById(
  "js-technique-card-container"
);
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;
let indexTechnique = 0;
const HEIGHT_SHOW_ARROW_UP = 800;

function events() {
  window.addEventListener("scroll", scrollUp);
  arrowUp.addEventListener("click", clickArrowUp);
  prevTechnique.addEventListener("click", () => {
    if (indexTechnique > 0) {
      indexTechnique--;
      cardContainerTechnique.style.transform = `translateX(-${
        indexTechnique * 25
      }%)`;
    }
  });
  nextTechnique.addEventListener("click", () => {
    if (indexTechnique < 2) {
      indexTechnique++;
      cardContainerTechnique.style.transform = `translateX(-${
        indexTechnique * 25
      }%)`;
    }
  });
  prevSlide.addEventListener("click", () => {
    plusSlides(-1);
  });
  nextSlide.addEventListener("click", () => {
    plusSlides(1);
  });
  for (let job of jobs) {
    job.addEventListener("click", (event) => {
      imgPreviewJob.src = job.dataset.img;
    });
  }
  for (let tab of tabs) {
    tab.addEventListener("click", (event) => {
      window.scrollTo({
        top: document.getElementById(tab.dataset.id).offsetTop,
        behavior: "smooth",
      });
    });
  }
  for (let dot of dots) {
    dot.addEventListener("click", () => {
      currentSlide(dot.dataset.n);
    });
  }
}

function clickArrowUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollUp() {
  if (window.scrollY > HEIGHT_SHOW_ARROW_UP) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const main = () => {
  events();
  showSlides(slideIndex);
};

main();
