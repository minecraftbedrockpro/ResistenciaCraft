document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      footer.innerHTML = html;

      const footerLinks = footer.querySelectorAll("a[href^='#']");

      footerLinks.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();

          const hash = link.getAttribute("href"); // exemplo: "#regras"
          const targetId = hash.substring(1); // tira o #, ex: "regras"

          // Mapeia cada âncora para a página que a contém
          const pageMap = {
            regras: "regras.html",
            privacidade: "regras.html",
            termos: "regras.html",
            idade: "regras.html",
            suporte: "regras.html",
            reembolso: "regras.html",
            aviso: "regras.html",
            inicio: "index.html",
            servidores: "index.html",
            equipe: "index.html",
            loja: "index.html",
            discord: "index.html"
          };

          const targetPage = pageMap[targetId] || "index.html";

          if (window.location.pathname.endsWith(targetPage)) {
            // Estamos na página certa, faz scroll suave
            const targetEl = document.querySelector(hash);
            if (!targetEl) return;

            const offset = 70;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });

            history.pushState(null, "", hash);
            addHighlight(targetEl);

          } else {
            // Estamos em outra página, redireciona com hash
            window.location.href = targetPage + hash;
          }
        });
      });

      // No carregamento da página, se tiver hash faz scroll + efeito
      if (window.location.hash) {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          const offset = 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo(0, offsetPosition);
          addHighlight(targetEl);
        }
      }
    });

  function addHighlight(el) {
    el.classList.add("highlighted");
    setTimeout(() => {
      el.classList.remove("highlighted");
    }, 1500);
  }
});
