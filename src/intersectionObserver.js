document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate-on-scroll-r');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-right');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Puedes ajustar este valor según tus necesidades
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate-on-scroll-l');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-left');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Puedes ajustar este valor según tus necesidades
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});



