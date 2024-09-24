const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  dropdown.classList.toggle("show");
  dropdown.classList.toggle("dropdown");
  navbar.classList.toggle("show");
});
