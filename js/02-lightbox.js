import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRefs = document.querySelector('.gallery');

const createGalleryMarkUp = galleryItems => {
  const itemMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"   
    />
  </a>
  `;
    })
    .join('');
  galleryRefs.insertAdjacentHTML('beforeend', itemMarkup);
};

createGalleryMarkUp(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
