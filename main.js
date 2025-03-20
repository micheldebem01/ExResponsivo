const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Adiciona a classe show menu para nav menu
    nav.classList.toggle("show-menu");
    // Adiciona show-icon para esconder e mostrar icone do menu
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");
