document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="/#"]');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').split('#')[1];
      const targetElement = document.getElementById(targetId);

      if (window.location.pathname === '/') {
        // Si estamos en la ruta raíz
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, null, `/#${targetId}`);
        }
      } else {
        // Si no estamos en la ruta raíz, redirigimos a la raíz y hacemos scroll
        window.location.href = `/#${targetId}`;
      }
    });
  });

  // Smooth scroll cuando se llega a la página raíz con un hash en la URL
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});