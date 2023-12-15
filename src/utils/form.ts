function mirrorHero(): void {
  // Fonction pour simuler un clic
  function simulateClick(element: HTMLElement): void {
    element.click();
  }

  // Fonction pour configurer l'écouteur d'événements
  function setupClickListener(): void {
    // Configuration pour #hero-form-trigger et #hero-form-target
    setupClickEvent('#hero-form-trigger', '#hero-form-target');

    // Configuration pour #popup-form-trigger et #popup-form-target
    setupClickEvent('#popup-form-trigger', '#popup-form-target');
  }

  // Fonction pour configurer un événement de clic spécifique
  function setupClickEvent(triggerSelector: string, targetSelector: string): void {
    const trigger = document.querySelector(triggerSelector) as HTMLElement;
    const target = document.querySelector(targetSelector) as HTMLElement;

    // Vérifier si les éléments existent
    if (!trigger || !target) {
      console.error(
        `Les éléments avec les sélecteurs ${triggerSelector} et ${targetSelector} ne sont pas trouvés dans le document.`
      );
      return;
    }

    // Ajouter l'écouteur d'événements
    trigger.addEventListener('click', () => simulateClick(target));
  }

  // Appeler setupClickListener pour configurer l'écouteur d'événements
  setupClickListener();
}

export { mirrorHero };
