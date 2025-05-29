// include-barra.js
fetch("barra.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("barra-container").innerHTML = data;

    // Espera o DOM da barra ser carregado
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (toggleButton && menu) {
      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('menu-ativo');
      });
    } else {
      console.warn("Botão ou menu não encontrados!");
    }
  });
