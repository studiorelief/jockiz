// Importation de GSAP et ScrollTrigger
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function cardsAnim() {
  // Détection de la taille de l'écran pour ajuster la durée
  const duration = window.innerWidth <= 768 ? 4 : 2;
  const stagger = window.innerWidth <= 768 ? 2 : 1; // 4 secondes pour tablette et mobile, 2 secondes pour PC

  // Scale effect
  gsap.set('.home-cards_cards-img-front', { scale: 0.3, rotation: 0 });

  gsap.to('.home-cards_cards-img-front', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-cards',
      start: '-50% 25%',
      end: '10% 25%',
      scrub: true,
    },
    scale: 1,
    duration: 2,
    ease: 'linear',
  });

  // Rotation effect
  gsap.set('.home-cards_cards-img-front', { rotationY: 0 });
  gsap.set('.home-cards_cards-img-back', { rotationY: 90 });

  gsap.to('.home-cards_cards-img-front', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-cards',
      start: '0% 25%',
      end: '25% 25%',
      scrub: true,
    },
    rotationY: -90,
    duration: duration, // Utilisation de la variable duration
    ease: 'linear',
    transformOrigin: 'center',
    stagger: stagger,
  });

  gsap.to('.home-cards_cards-img-back', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-cards',
      start: '8% 25%',
      end: '35% 25%',
      scrub: true,
    },
    rotationY: 0,
    duration: duration, // Utilisation de la variable duration
    ease: 'linear',
    transformOrigin: 'center',
    stagger: stagger,
  });
}

function simpleAnim() {
  // Rotation effect
  gsap.set('.home-simple_cards-w.is-simple', { rotationX: 0, opacity: 1 });
  gsap.set('.home-simple_cards-w.is-fun', { rotationX: -90, opacity: 0 });
  gsap.set('.home-simple_cards-w.is-quotidien', { rotationX: -90, opacity: 0 });
  gsap.set('.home-simple_cards-w.is-solidaire', { rotationX: -90, opacity: 0 });
  gsap.set('.home-simple_stars', { y: '0vh' });

  // SIMPLE
  gsap.to('.home-simple_cards-w.is-simple', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-simple',
      start: '15% 75%',
      end: '25% 75%',
      scrub: true,
    },
    rotationX: 90,
    duration: 2,
    ease: 'linear',
    transformOrigin: 'center',
    force3D: true,
  });

  // FUN
  gsap.to('.home-simple_cards-w.is-fun', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-simple',
      start: '25% 75%',
      end: '50% 75%',
      scrub: true,
    },
    onStart: () => {
      gsap.set('.home-simple_cards-w.is-fun', { opacity: 1 }); // Définit l'opacité sans renvoyer de valeur
    },
    onReverseComplete: () => {
      gsap.set('.home-simple_cards-w.is-fun', { opacity: 0 });
    },
    rotationX: 90,
    duration: 0.5,
    ease: 'ease',
    transformOrigin: 'center',
    force3D: true,
  });

  // QUOTIDIEN
  gsap.to('.home-simple_cards-w.is-quotidien', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-simple',
      start: '50% 75%',
      end: '75% 75%',
      scrub: true,
    },
    onStart: () => {
      gsap.set('.home-simple_cards-w.is-quotidien', { opacity: 1 }); // Définit l'opacité sans renvoyer de valeur
    },
    onReverseComplete: () => {
      gsap.set('.home-simple_cards-w.is-quotidien', { opacity: 0 });
    },
    rotationX: 90,
    duration: 2,
    ease: 'linear',
    transformOrigin: 'center',
    force3D: true,
  });

  // SOLIDAIRE
  gsap.to('.home-simple_cards-w.is-solidaire', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-simple',
      start: '75% 75%',
      end: '100% 75%',
      scrub: true,
    },
    onStart: () => {
      gsap.set('.home-simple_cards-w.is-solidaire', { opacity: 1 }); // Définit l'opacité sans renvoyer de valeur
    },
    onReverseComplete: () => {
      gsap.set('.home-simple_cards-w.is-solidaire', { opacity: 0 });
    },
    rotationX: 0,
    duration: 2,
    ease: 'linear',
    transformOrigin: 'center',
    force3D: true,
  });

  // STARS
  gsap.utils.toArray<Element>('.home-simple_stars').forEach((star) => {
    // Lire la valeur de l'attribut speedScroll
    const speedScroll = star.getAttribute('speedScroll');
    let yValue: string;

    // Ajuster la valeur de y en fonction de speedScroll
    switch (speedScroll) {
      case 'low':
        yValue = '-90vh';
        break;
      case 'medium':
        yValue = '-70vh';
        break;
      case 'quick':
        yValue = '-50vh';
        break;
      default:
        yValue = '-90vh';
    }

    // Animation GSAP pour chaque étoile
    gsap.to(star, {
      scrollTrigger: {
        markers: false,
        trigger: '.section_home-simple',
        start: '0% 75%',
        end: '125% 75%',
        scrub: true,
      },
      y: yValue,
      duration: 4,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    });
  });
}

function rewardsAnim() {
  // Initialisation des propriétés
  gsap.set(
    '.home-rewards_image-question-back, .home-rewards_image-question-front, .home-rewards_image-cards-back.is-first, .home-rewards_image-cards-back.is-second, .home-rewards_image-cards-back.is-third, .home-rewards_image-cards-front',
    {
      rotationY: -90,
    }
  );

  // Création de timelines
  const tl = gsap.timeline({ repeat: -1 });
  const tl2 = gsap.timeline({ repeat: -1 });

  // Timeline pour '.home-rewards_image-question-back' et '.home-rewards_image-question-front'
  tl.to('.home-rewards_image-question-back', {
    rotationY: 90,
    duration: 0.8,
    ease: 'linear',
    transformOrigin: 'center',
    force3D: true,
  })
    .to('.home-rewards_image-question-front', {
      rotationY: 0,
      duration: 0.4,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    })
    .to('.home-rewards_image-question-front', {
      rotationY: 0,
      duration: 2,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    })
    .to('.home-rewards_image-question-front', {
      rotationY: 90,
      duration: 0.4,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    });

  // Configuration de tl2 avec des animations séquentielles pour chaque 'card-back'
  ['is-first', 'is-second', 'is-third'].forEach((cardClass) => {
    tl2.add(animateCard(`.home-rewards_image-cards-back.${cardClass}`)).add(animateFront(), '-=0'); // Commence l'animation du front un peu avant que celle du back se termine
  });
}

// Fonction pour animer chaque carte
function animateCard(selector: string) {
  return gsap
    .timeline()
    .to(selector, {
      rotationY: 90,
      duration: 0.8,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    })
    .to(selector, { rotationY: -90, duration: 0, immediateRender: false }); // Reset de l'animation pour la prochaine carte
}

// Fonction pour animer le front
function animateFront() {
  return gsap
    .timeline()
    .to('.home-rewards_image-cards-front', {
      rotationY: 0,
      duration: 0.4,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    })
    .to('.home-rewards_image-cards-front', {
      rotationY: 0,
      duration: 2,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    })
    .to('.home-rewards_image-cards-front', {
      rotationY: 90,
      duration: 0.4,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    })
    .set('.home-rewards_image-cards-front', { rotationY: -90 });
}

function datasAnim() {
  // Loading effet datas
  gsap.set('.table_row', { opacity: 0, y: 8 });

  gsap.to('.table_row', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-datas',
      start: '25% 75%',
      end: '50% 75%',
      scrub: false,
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'linear',
    stagger: 0.25,
  });
}

export { cardsAnim, datasAnim, rewardsAnim, simpleAnim };
