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

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        // Ajoutez une légère temporisation pour voir l'effet de fondu
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);
    });
});




