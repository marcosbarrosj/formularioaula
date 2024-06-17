document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      this.textContent = 'Modo Claro';
      this.classList.remove('btn-secondary');
      this.classList.add('btn-light');
    } else {
      this.textContent = 'Modo Escuro';
      this.classList.remove('btn-light');
      this.classList.add('btn-secondary');
    }
  });