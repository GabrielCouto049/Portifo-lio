const buttons = document.querySelectorAll(".page-button");
const items = document.querySelectorAll(".project-item");

function showPage(page) {
  items.forEach((item) => {
    item.style.display = Number(item.dataset.page) === page ? "block" : "none";
  });

  //TODO: make custom classes for active and inactive
  buttons.forEach((button) => {
    if (Number(button.dataset.page) === page) {
      button.classList.remove(
        "border-slate-300",
        "bg-white",
        "text-slate-700",
        "dark:border-slate-700",
        "dark:bg-slate-800",
        "dark:text-slate-200",
        "hover:-translate-y-1",
        "hover:border-blue-500",
        "hover:text-blue-600",
        "dark:hover:border-blue-500",
        "dark:hover:text-blue-400",
      );

      button.classList.add("border-blue-600", "bg-blue-600", "text-white");
    } else {
      button.classList.remove("border-blue-600", "bg-blue-600", "text-white");

      button.classList.add(
        "border-slate-300",
        "bg-white",
        "text-slate-700",
        "dark:border-slate-700",
        "dark:bg-slate-800",
        "dark:text-slate-200",
        "hover:-translate-y-1",
        "hover:border-blue-500",
        "hover:text-blue-600",
        "dark:hover:border-blue-500",
        "dark:hover:text-blue-400",
      );
    }
  });
}

showPage(1);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(Number(button.dataset.page));
  });
});
