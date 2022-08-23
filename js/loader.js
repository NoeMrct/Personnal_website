//Select queries
const loader = document.querySelector("#loader");
const homepage = document.querySelector("#website");

//On document loaded, wait 2.5 seconds and call "showHomepage" function
window.addEventListener("load", () => {
  setTimeout(showHomepage, 2500);
});

//Hide the loader and show the homepage
function showHomepage() {
  loader.style.display = "none";
  homepage.style.display = "block";
}
