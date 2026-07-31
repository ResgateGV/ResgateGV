document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-primario");

  // Menu mobile
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const opened = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(opened));
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Animação de entrada das seções
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Link ativo da navegação conforme a seção visível
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".menu-primario a[href^='#']")];

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        navLinks.forEach(link => link.classList.remove("active"));
        const active = navLinks.find(link => link.getAttribute("href") === `#${entry.target.id}`);
        if (active) active.classList.add("active");
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // Galeria: abre a imagem em uma janela simples
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();

      const src = item.getAttribute("href");
      const alt = item.querySelector("img")?.alt || "Imagem da galeria";

      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Fechar">×</button>
        <img src="${src}" alt="${alt}">
      `;

      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";

      const close = () => {
        overlay.remove();
        document.body.style.overflow = "";
      };

      overlay.addEventListener("click", e => {
        if (e.target === overlay || e.target.classList.contains("lightbox-close")) close();
      });

      document.addEventListener("keydown", function esc(e) {
        if (e.key === "Escape") {
          close();
          document.removeEventListener("keydown", esc);
        }
      });
    });
  });
});