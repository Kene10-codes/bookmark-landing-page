const hamburger= document.getElementById("hamburger");
const navLinks = document.getElementById("menu");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
})

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;

        // toggle class
        faqItem.classList.toggle("active")


    })
})