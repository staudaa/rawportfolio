const nav = document.querySelector(".nav");
const hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  let heroHeight = hero.offsetHeight;

  if (scrollPos >= heroHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll(
  "section, .hero, .about, .educate, .project"
);

const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));

let activeCard = null;

function showDetail(id) {
  const detailBox = document.getElementById("project-detail");

  if (activeCard === id) {
    detailBox.classList.remove("active");
    activeCard = null;
    return;
  }

  activeCard = id;
  detailBox.classList.add("active");

  if (id === 1) {
    detailBox.innerHTML = `
    <h2>Resume Web</h2>
    <a href="https://staudaa.github.io/Eprof/" target="_blank"><img src="assets/img/eprofee.png"></a>
    <p>This project is a website created for a course assignment. It summarizes lecture materials and presents them in a clear, accessible format, making it easier for visitors to review key topics.</p>
    `;
  } else if (id === 2) {
    detailBox.innerHTML = `
    <h2>UI Design</h2>
    <img src="assets/img/ui_pink.png">
    <p>This UI design was created as an initial prototype for a school project during vocational studies (SMK). It includes login pages, dashboards, and content sections with a clean, organized layout. The design focuses on usability, clarity, and easy navigation for users. It served as the foundation for developing the final functional website.</p>
    <img src="assets/img/blue.png">
    <p>This ocean-themed UI design uses soft wave shapes, blue gradients, and marine elements to create a calm and refreshing interface. It blends clarity with creativity, offering a smooth and visually engaging user experience.</p>
    `;
  } else if (id === 3) {
    detailBox.innerHTML = `
    <h2>PROJECT 03</h2>
    <img src="assets/img/penyu.png">
    <p>The project I created is an animal illustration design, specifically a turtle, made using Adobe Illustrator. In this project, I focused on the details of the shape and color to accurately yet artistically depict the turtle. The process of creating this design enhanced my skills in using vector tools in Illustrator to create an engaging and realistic artwork.</p>
    `;
  } else if (id === 4) {
    detailBox.innerHTML = `
    <h2>PROJECT 04</h2>
    <img src="assets/img/logo.png">
    <p>the Ministry of Education and Culture (Kemendikbud). Although my design was not selected, the experience was invaluable as it gave me the opportunity to compete, refine my design skills, and learn from a creative process full of challenges.</p>
    `;
  }
}
