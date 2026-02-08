const hamburger= document.getElementById("hamburger");
const navLinks = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
