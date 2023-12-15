function autoTabs(): void {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    document.querySelectorAll('.home-competitions_tab-link').forEach((tabElement) => {
      const tabButton = tabElement as HTMLElement;
      const originalFocus = tabButton.focus;
      tabButton.focus = function (options?: FocusOptions) {
        const x = window.scrollX;
        const y = window.scrollY;
        const f = () => {
          setTimeout(() => window.scrollTo(x, y), 1);
          tabButton.removeEventListener('focus', f);
        };
        tabButton.addEventListener('focus', f);
        originalFocus.call(this, options);
      };
    });
  }

  // Start Tabs
  let tabTimeout: number | undefined;

  const tabLoop = (): void => {
    tabTimeout = window.setTimeout(() => {
      const currentTab = document.querySelector(
        '.home-competitions_tabs-menu .w--current'
      ) as HTMLElement | null;
      let nextTab: HTMLElement | null = null;

      if (currentTab) {
        nextTab = currentTab.nextElementSibling as HTMLElement | null;
        currentTab.classList.remove('w--current');
        document.querySelectorAll('.home-competitions_cards-front').forEach((card) => {
          card.classList.remove('animate-rotate');
        });
      }

      if (!nextTab) {
        nextTab = document.querySelector(
          '.home-competitions_tab-link:first-child'
        ) as HTMLElement | null;
      }

      if (nextTab) {
        nextTab.classList.add('w--current');
        const currentCardContent = nextTab.querySelector('.home-competitions_cards-front');
        if (currentCardContent) {
          currentCardContent.classList.add('animate-rotate');
        }
        // Manually dispatch the click event and prevent it from propagating
        nextTab.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      }
    }, 3000);
  };

  tabLoop();

  // Reset Loops
  document.querySelectorAll('.home-competitions_tab-link').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click event from propagating to other elements
      if (tabTimeout !== undefined) {
        clearTimeout(tabTimeout);
      }
      tabLoop();
    });
  });
}

export { autoTabs };

/* // Backup autotabs
function autoTabs(): void {
    // Fix for Safari
    if (navigator.userAgent.includes('Safari')) {
      document.querySelectorAll('.home-competitions_tab-link').forEach((t: Element) => {
        const tabButton = t as HTMLElement;
        const originalFocus = tabButton.focus;
        tabButton.focus = function (options?: FocusOptions) {
          const x = window.scrollX;
          const y = window.scrollY;
          const f = () => {
            setTimeout(() => window.scrollTo(x, y), 1);
            tabButton.removeEventListener('focus', f);
          };
          tabButton.addEventListener('focus', f);
          originalFocus.call(this, options);
        };
      });
    }
  
    // Start Tabs
    let tabTimeout: number | undefined = undefined;
  
    const tabLoop = (): void => {
      tabTimeout = window.setTimeout(() => {
        const currentTab = document.querySelector(
          '.home-competitions_tabs-menu .w--current'
        ) as HTMLElement | null;
  
        let nextTab: HTMLElement | null = null;
  
        if (currentTab) {
          nextTab = currentTab.nextElementSibling as HTMLElement | null;
  
          currentTab.classList.remove('w--current');
        }
  
        if (!nextTab) {
          nextTab = document.querySelector(
            '.home-competitions_tab-link:first-child'
          ) as HTMLElement | null;
        }
  
        if (nextTab) {
          nextTab.classList.add('w--current');
          nextTab.click();
        }
      }, 2000);
    };
  
    tabLoop();
  
    // Reset Loops
    document.querySelectorAll('.home-competitions_tab-link').forEach((button) => {
      button.addEventListener('click', () => {
        if (tabTimeout !== undefined) {
          clearTimeout(tabTimeout);
        }
        tabLoop();
      });
    });
  }
  
  // Call the function to activate tabs
  export { autoTabs }; */
