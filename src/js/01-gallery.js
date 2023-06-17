// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionPosition: 'bottom',
  captionDelay: 250,

});

const galleryList = document.querySelector('.gallery');
galleryList.style.listStyleType = 'none';

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

// Change code below this line

console.log(createGalleryMarkup(galleryItems));
