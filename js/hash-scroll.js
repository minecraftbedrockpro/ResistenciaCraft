function highlightSection(id) {
  const section = document.querySelector(id);
  if (!section) return;
  section.classList.add("highlighted");
  setTimeout(() => section.classList.remove("highlighted"), 1500);
}

function scrollToSection(hash) {
  if (!hash) return;
  const targetElement = document.querySelector(hash);
  if (!targetElement) return;

  const headerOffset = 80; // ajuste conforme sua barra fixa
  const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  highlightSection(hash);
}

document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave ao carregar a página se já tiver hash
  if (window.location.hash) {
    scrollToSection(window.location.hash);
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.matches(".footer-links a")) {
      e.preventDefault();

      const href = e.target.getAttribute("href");
      if (!href.startsWith("#")) return;

      // Atualiza o hash da URL sem recarregar a página
      history.pushState(null, "", href);

      // Executa o scroll suave com offset e destaque
      scrollToSection(href);
    }
  });
});
