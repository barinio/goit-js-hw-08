import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const ul = document.querySelector('.gallery');
const galleryItemMarkup = markup(galleryItems);

function markup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}" 
        />
      </a>
    </li>
		`;
    })
    .join('');
}
ul.innerHTML = galleryItemMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
