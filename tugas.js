const slider = document.getElementById("productSlider");

function slideLeft() {
  slider.scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function slideRight() {
  slider.scrollBy({
    left: 300,
    behavior: "smooth",
  });
}
