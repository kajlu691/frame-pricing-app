import { urls, elements } from './views/base';

elements.frameBox.addEventListener('click', () => {
  document.location.assign(`${urls.baseUrl}${urls.framesUrl}`);
});
