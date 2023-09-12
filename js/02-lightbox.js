import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(item =>`
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
     
    />
  </a>
</li>
`).join('');

galleryList.innerHTML = galleryMarkup;

const Lightbox = new SimpleLigtbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay:250,
});
