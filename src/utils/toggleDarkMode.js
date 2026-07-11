const root = document.documentElement;
const themeButton = document.getElementsByClassName("theme-button");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

for (let i = 0; i < themeButton.length; i++) {
  themeButton[i].addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

