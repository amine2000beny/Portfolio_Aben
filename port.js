const skills = document.querySelectorAll('.skill-hover-effect');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.boxShadow = 'none';
    });
});

window.addEventListener('scroll', function() {
    const parallaxSection = document.querySelector('.parallax-section');
    const speed = 0.5; // Vitesse de l'effet parallaxe
    parallaxSection.style.backgroundPositionY = -(window.scrollY * speed) + "px";
  });
  