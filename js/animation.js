//Move text on scroll
var firstText = 8.3333 + "vw";
var secondText = 91.6667 + "vw";
document.getElementById("firstText").style.left = firstText;
document.getElementById("secondText").style.left = secondText;

document.addEventListener("scroll", () => {
  document.getElementById("firstText").style.left =
    8.3333 + window.scrollY * 0.05 + "vw";
  document.getElementById("secondText").style.left =
    91.6667 - window.scrollY * 0.05 + "vw";
});

function showDescription(element, image) {
  if (element.style.display == "none") {
    image.src = "./img/down-arrow.svg";
    element.style.display = "block";
  } else {
    image.src = "./img/right-arrow.svg";
    element.style.display = "none";
  }
}
