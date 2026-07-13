const root = document.documentElement;
const themeButton = document.querySelectorAll(".theme-button");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

themeButton.forEach((button) => {
  button.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
