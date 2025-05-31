newFunction();

function newFunction() {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("bg-primaryGreen", "shadow-lg");
        } else {
            navbar.classList.remove("bg-primaryGreen", "shadow-lg");
        }
    });
}
// Function to handle the click event on the "Get Started" button

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.images').forEach((img, i) => {
    img.style.animationDelay = (i * 0.3) + 's';
  });
});
