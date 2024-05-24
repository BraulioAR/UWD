function changeLanguage() {
  const currentLanguage = localStorage.getItem('language') || 'en';
  const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
  localStorage.setItem('language', newLanguage);
  loadLanguage();
}

function loadLanguage() {
  const language = localStorage.getItem('language') || 'en';
  fetch(`/i18n/${language}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let text = data;
        keys.forEach(key => {
          text = text[key];
        });
        
        if (element.hasAttribute('data-i18n-html')) {
          element.innerHTML = text;
        } else {
          element.textContent = text;
        }
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadLanguage();
});