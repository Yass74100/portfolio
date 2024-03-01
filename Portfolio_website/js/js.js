document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const menuItems = document.getElementById('menu-items');
  
    burgerMenu.addEventListener('click', function () {
      burgerMenu.classList.toggle('active');
      menuItems.classList.toggle('show');
      document.body.classList.toggle('menu-open');
    });
  
    // Masquer le menu lorsque l'on clique en dehors de celui-ci
    document.addEventListener('click', function (event) {
      const isClickInsideMenu = menuItems.contains(event.target);
      const isClickOnBurger = burgerMenu.contains(event.target);
  
      if (!isClickInsideMenu && !isClickOnBurger) {
        burgerMenu.classList.remove('active');
        menuItems.classList.remove('show');
        document.body.classList.remove('menu-open');
      }
    });
  
    // Empêcher la propagation du clic à partir du menu
    menuItems.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
  
