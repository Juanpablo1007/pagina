function toggleMenu() {
    const boton = document.getElementById('boton-capas');
    const menu = document.getElementById('menu-capas');
    const rect = boton.getBoundingClientRect(); // obtener la posición del botón
    const left = rect.left; // posición horizontal del botón
    const top = rect.bottom; // posición vertical del botón
  
    // establecer la posición del menú en función de la posición del botón
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
  
    menu.classList.toggle('visible');
  }
  
  
