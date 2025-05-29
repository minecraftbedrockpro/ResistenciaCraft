const equipe = [
  {
    cargo: "Owner",
    cssClass: "owner",
    membros: [
      {
        nome: "Higor Rocha",
        img: "img/higor.png",
        redes: {
          instagram: "https://instagram.com/higor.rocha",
          discord: "https://discord.com/users/higor",
          youtube: "https://youtube.com/@higor"
        }
      }
    ]
  },
  {
    cargo: "Admin",
    cssClass: "admin",
    membros: [
      {
        nome: "João Vitor",
        img: "img/admin1.png",
        redes: {
          instagram: "https://instagram.com/mariazinha",
          discord: "https://discord.com/users/mariazinha",
          youtube: "https://youtube.com/@mariazinha"
        }
      },
      {
        nome: "CalviceLinda123",
        img: "img/admin2.png",
        redes: {
          instagram: "https://instagram.com/lucasramos",
          discord: "https://discord.com/users/lucasramos",
          youtube: "https://youtube.com/@lucasramos"
        }
      }
    ]
  },
  {
    cargo: "Market",
    cssClass: "market",
    membros: [
      {
        nome: "KironDev",
        img: "img/kiron.png",
        redes: {
          youtube: "https://youtube.com/@kironndev?si=4_YR502TxSghMvZd"
        }
      }
    ]
  },
  {
    cargo: "Web Developer",
    cssClass: "webdev",
    membros: [
      {
        nome: "Higor Rocha",
        img: "img/higor.png",
        redes: {
          instagram: "https://instagram.com/higor.rocha",
          discord: "https://discord.com/users/higor",
          youtube: "https://youtube.com/@higor"
        }
      }
    ]
  }
];

const iconesRedes = {
  instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  discord: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
  youtube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
};

function criarCard(membro, cssClassCargo, nomeCargo) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img class="perfil" src="${membro.img}" alt="${membro.nome}" />
    <h3>${membro.nome}</h3>
    <div class="cargo-label cargo-${cssClassCargo.toLowerCase()}">${nomeCargo}</div>
    <div class="social-icons">
      ${Object.entries(membro.redes).map(([rede, url]) => `
        <a href="${url}" target="_blank" title="${rede.charAt(0).toUpperCase() + rede.slice(1)}">
          <img src="${iconesRedes[rede]}" alt="${rede}" />
        </a>
      `).join("")}
    </div>
  `;

  return card;
}

function montarEquipe() {
  const container = document.getElementById("equipe-container");
  equipe.forEach(secao => {
    const secaoEl = document.createElement("section");
    secaoEl.className = "cargo-section";

    const titulo = document.createElement("div");
    titulo.className = `cargo-title ${secao.cssClass}`;
    titulo.textContent = secao.cargo;

    secaoEl.appendChild(titulo);

    const membrosDiv = document.createElement("div");
    membrosDiv.className = "membros";

    secao.membros.forEach(membro => {
      membrosDiv.appendChild(criarCard(membro, secao.cssClass, secao.cargo));
    });

    secaoEl.appendChild(membrosDiv);
    container.appendChild(secaoEl);
  });
}

document.addEventListener("DOMContentLoaded", montarEquipe);
