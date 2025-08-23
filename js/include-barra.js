// include-barra.js
fetch("barra.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("barra-container").innerHTML = data;

    // Espera o DOM da barra ser carregado
    setTimeout(() => {
      const toggleButton = document.getElementById('menu-toggle');
      const menu = document.getElementById('menu');

      if (toggleButton && menu) {
        // Adicionar evento de clique no botão
        toggleButton.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          menu.classList.toggle('menu-ativo');
          console.log('Menu toggled:', menu.classList.contains('menu-ativo'));
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
          if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
            menu.classList.remove('menu-ativo');
          }
        });

        // Fechar menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
          link.addEventListener('click', () => {
            menu.classList.remove('menu-ativo');
          });
        });

        console.log('Menu mobile configurado com sucesso');
      } else {
        console.warn("Botão ou menu não encontrados!");
        console.log('Toggle button:', toggleButton);
        console.log('Menu:', menu);
      }
    }, 100);
  })
  .catch(error => {
    console.error('Erro ao carregar barra:', error);
  });
