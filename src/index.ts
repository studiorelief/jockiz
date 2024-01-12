import './index.css';

import { autoTabs } from '$utils/autotabs';
import { mirrorHero } from '$utils/form';
import { cardsAnim, datasAnim, rewardsAnim, simpleAnim } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/modalviewer';
import { swiperJockeys, swiperPartnersLine } from '$utils/swiper';
import { fillHiddenFieldsWithUTM } from '$utils/utmcatch';

window.Webflow ||= [];
window.Webflow.push(() => {
  // load modalviewser
  loadModelViewerScript();

  // load gsap animations
  cardsAnim();
  datasAnim();
  simpleAnim();
  rewardsAnim();

  // loopTabs
  autoTabs();

  // load swiper animations
  swiperJockeys();

  swiperPartnersLine('.swiper.is-partners-line1', true); // Pour la première ligne
  swiperPartnersLine('.swiper.is-partners-line2', false); // Pour la deuxième ligne

  // Clic mirror
  mirrorHero();

  // Catch UTM
  fillHiddenFieldsWithUTM();
});
