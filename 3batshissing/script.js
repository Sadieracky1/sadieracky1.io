// Toggle info box on click
document.querySelectorAll('.software-project').forEach(project => {
  project.addEventListener('click', () => {
    // Hide all other info boxes
    document.querySelectorAll('.software-project').forEach(p => {
      if(p !== project) p.classList.remove('active');
    });
    // Toggle current info box
    project.classList.toggle('active');
  });
});
document.querySelector('header h1').addEventListener('click', function() {
  this.classList.toggle('stretched');
});
const headerTitle = document.querySelector('header h1');

headerTitle.addEventListener('click', () => {
  headerTitle.style.animation = 'stretchX 0.6s ease';

  // Remove the animation after it finishes so it can be triggered again
  headerTitle.addEventListener('animationend', () => {
    headerTitle.style.animation = '';
  }, { once: true });
});
document.querySelectorAll('.info').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('glow');
  });
});
// Select all project boxes
document.querySelectorAll('.project-box').forEach(box => {
  box.addEventListener('click', () => {
    // Toggle glow class on the whole box
    box.classList.toggle('glow');
  });
});
