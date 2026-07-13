import { Section } from "@lucide/astro";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelectorAll(".nav-link")
          .forEach((link) => link.classList.remove("active"));

        const activeLink = document.getElementById(`${entry.target.id}Link`);

        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".section").forEach((target) => {
  observer.observe(target);
});
