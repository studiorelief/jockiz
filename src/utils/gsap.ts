// Importation de GSAP et ScrollTrigger
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const scrollTriggers = [];

function cardsAnim() {
  // Scale effect
  gsap.set('.home-cards_cards-img-front', { scale: 0, rotation: 0 });

  const trigger1 = gsap.to('.home-cards_cards-img-front', {
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
  scrollTriggers.push(trigger1.scrollTrigger);

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
    rotationY: 90,
    duration: 2,
    ease: 'linear',
    transformPerspective: 1000,
    transformOrigin: 'center',
    stagger: 1,
  });

  gsap.to('.home-cards_cards-img-back', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-cards',
      start: '25% 25%',
      end: '50% 25%',
      scrub: true,
    },
    rotationY: 0,
    duration: 2,
    ease: 'linear',
    transformPerspective: 1000,
    transformOrigin: 'center',
    stagger: 0,
  });
}

function simpleAnim() {
  // Rotation effect
  gsap.set('.home-simple_cards-w.is-simple', { rotationX: 0, opacity: 1 });
  gsap.set('.home-simple_cards-w.is-fun', { rotationX: -90, opacity: 0 });
  gsap.set('.home-simple_cards-w.is-quotidien', { rotationX: -90, opacity: 0 });
  gsap.set('.home-simple_cards-w.is-solidaire', { rotationX: -90, opacity: 0 });

  // SIMPLE
  const trigger2 = gsap.to('.home-simple_cards-w.is-simple', {
    scrollTrigger: {
      markers: true,
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
  scrollTriggers.push(trigger2.scrollTrigger);

  // FUN
  gsap.to('.home-simple_cards-w.is-fun', {
    scrollTrigger: {
      markers: true,
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
      markers: true,
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
      markers: true,
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
}

function datasAnim() {
  // Loading effet datas
  gsap.set('.table_row', { opacity: 0, move: 16 });

  const trigger3 = gsap.to('.table_row', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-datas',
      start: '0% 75%',
      end: '50% 75%',
      scrub: false,
    },
    opacity: 1,
    move: 0,
    duration: 0.5,
    ease: 'linear',
    stagger: 0.25,
  });
  scrollTriggers.push(trigger3.scrollTrigger);
}

function joinAnim() {
  gsap.set('.home-join_component', { width: '100%' });

  const trigger4 = gsap.to('.home-join_component', {
    scrollTrigger: {
      markers: false,
      trigger: '.section_home-join',
      start: '0% 75%',
      end: '75% 75%',
      scrub: true,
    },
    width: '50%',
    duration: 10,
    ease: 'linear',
  });
  scrollTriggers.push(trigger4.scrollTrigger);
}

export { cardsAnim, datasAnim, joinAnim, simpleAnim };
