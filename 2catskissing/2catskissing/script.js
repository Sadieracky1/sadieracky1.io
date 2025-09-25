document.querySelectorAll('#schematics figure').forEach(figure => {
  figure.addEventListener('click', () => {
    figure.classList.toggle('active');
  });
});