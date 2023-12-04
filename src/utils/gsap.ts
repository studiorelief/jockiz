// Importation de GSAP et ScrollTrigger
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function cardsAnim() {
  // Scale effect
  gsap.set('.home-cards_cards-img-front', { scale: 0, rotation: 0 });

  gsap.to('.home-cards_cards-img-front', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-cards',
      start: '-25% 25%',
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
    duration: 2,
    ease: 'linear',
    transformOrigin: 'center',
    stagger: 1,
  });

  gsap.to('.home-cards_cards-img-back', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-cards',
      start: '10% 25%',
      end: '35% 25%',
      scrub: true,
    },
    rotationY: 0,
    duration: 2,
    ease: 'linear',
    transformOrigin: 'center',
    stagger: 1,
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
      start: '0% 75%',
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
        yValue = '-50vh';
        break;
      case 'medium':
        yValue = '-70vh';
        break;
      case 'quick':
        yValue = '-90vh';
        break;
      default:
        yValue = '-90vh';
    }

    // Animation GSAP pour chaque étoile
    gsap.to(star, {
      scrollTrigger: {
        markers: false,
        trigger: '.section_home-simple',
        start: '15% 75%',
        end: '100% 75%',
        scrub: true,
      },
      y: yValue,
      duration: 2,
      ease: 'linear',
      transformOrigin: 'center',
      force3D: true,
    });
  });
}

function rewardsAnim() {
  // Initialisation des propriétés
  gsap.set('.home-rewards_image-cards-back', { rotationY: -90 });
  gsap.set('.home-rewards_image-cards-front', { rotationY: -90 });

  // Création d'une timeline
  const tl = gsap.timeline({ repeat: -1 }); // repeat: -1 signifie une répétition infinie

  // Animation de '.home-rewards_image-cards-back'
  tl.to('.home-rewards_image-cards-back', {
    rotationY: 90,
    duration: 2,
    ease: 'linear',
    transformOrigin: 'center',
    force3D: true,
  });

  // Animation de '.home-rewards_image-cards-front' après celle de '.home-rewards_image-cards-back'
  tl.to('.home-rewards_image-cards-front', {
    rotationY: 90,
    duration: 3,
    ease: 'linear',
    transformOrigin: 'center',
    force3D: true,
  });
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
