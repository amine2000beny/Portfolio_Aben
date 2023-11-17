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

document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            // Ajoutez ici l'animation ou le style que vous voulez appliquer
            skill.classList.add('skill-animate');
        });

        skill.addEventListener('mouseleave', () => {
            // Retirez l'animation ou le style lorsque la souris quitte l'élément
            skill.classList.remove('skill-animate');
        });
    });
});


// Sélectionnez la piste de la barre et le curseur
const sliderThumb = document.querySelector('.slider-thumb');
const sliderTrack = document.querySelector('.slider-track');

// Fonction pour démarrer le drag
function startDrag(e) {
    e.preventDefault();
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    sliderThumb.style.transition = 'none'; // Supprime la transition pendant le drag
}

// Fonction pour le drag
function onDrag(e) {
    let rect = sliderTrack.getBoundingClientRect();
    let thumbHalfHeight = sliderThumb.offsetHeight / 2;
    let newTop = e.clientY - rect.top - thumbHalfHeight;
    newTop = Math.max(0, newTop); // Limite supérieure
    newTop = Math.min(rect.height - thumbHalfHeight * 2, newTop); // Limite inférieure
    sliderThumb.style.top = newTop + 'px';
}

// Fonction pour terminer le drag
function endDrag() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    sliderThumb.style.transition = 'transform 0.3s ease-in-out'; // Rétablit la transition
}

// Ajoutez les écouteurs d'événements
sliderThumb.addEventListener('mousedown', startDrag);

document.body.style.overflow = 'hidden';



