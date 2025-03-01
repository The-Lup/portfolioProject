import './galleryAnimation';
import './gallery';
import './slider';
import './mailWindow';
import animatedText from './animatedText';

window.addEventListener('load', async () => {
  await animatedText(document.querySelector('.hero__titulo--uno'));
  await animatedText(document.querySelector('.hero__titulo--dos'));

  document
    .querySelectorAll('.hero__burbuja')[0]
    .classList.add('hero__burbuja--active-1');
  document
    .querySelectorAll('.hero__burbuja')[1]
    .classList.add('hero__burbuja--active-2');
});
