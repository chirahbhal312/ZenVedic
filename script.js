const canvas = document.getElementById('noiseCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = 100;
const height = canvas.height = 100;

for (let i = 0; i < width; i++) {
  for (let j = 0; j < height; j++) {
    const alpha = Math.random() * 0.1; // Adjust alpha for noise intensity
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.fillRect(i, j, 1, 1);
  }
}

document.body.style.backgroundColor = '#e8e6d8'; // Primary Color
document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;

document.getElementById("bttn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior

  const targetSection = document.getElementById("products");
  
  if (targetSection) {
      window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust 50px if you have a fixed header
          behavior: "smooth" // Enables smooth scrolling
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Toggle the navigation menu when the menu icon is clicked
  document.getElementById("mobile-menu").addEventListener("click", function () {
      document.querySelector("nav").classList.toggle("active");
  });

  // Close the dropdown menu when any menu item is clicked
  const navLinks = document.querySelectorAll("nav a");  // Select all anchor tags inside nav
  navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
          document.querySelector("nav").classList.remove("active");  // Close the menu
      });
  });
});
