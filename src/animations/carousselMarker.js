let visibleCard;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Remove o estado ativo de todas as bolinhas
      document.querySelectorAll("[id^='marker-']").forEach((marker) => {
        marker.classList.remove("bg-blue-500", "w-6", "scale-110");
        marker.classList.add("bg-white", "w-2");
      });

      // Pega o id do card visível
      visibleCard = entry.target.id;

      // Ativa a bolinha correspondente
      const marker = document.getElementById(`marker-${visibleCard}`);

      marker?.classList.remove("bg-white", "w-2");
      marker?.classList.add("bg-blue-500", "w-6", "scale-110");
    });
  },
  {
    root: document.getElementById("cardsScroll"),
    threshold: 0.6,
  },
);

document.querySelectorAll(".softSkillCard").forEach((card) => {
  observer.observe(card);
});
