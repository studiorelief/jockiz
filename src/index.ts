import './index.css';

import { greetUser } from '$utils/greet';
import { cardsAnim, datasAnim, rewardsAnim, simpleAnim } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/modal-viewer';

window.Webflow ||= [];
window.Webflow.push(() => {
  // test devmode - À supprimer
  const name = 'John Doe';
  greetUser(name);

  // load modalviewser
  loadModelViewerScript();

  // load gsap animations
  cardsAnim();
  datasAnim();
  simpleAnim();
  rewardsAnim();
});
