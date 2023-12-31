import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

const handleGalleryCard = ({preview, original, description}) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
;

const markup = galleryItems.map((element) => handleGalleryCard(element)).join("");

galleryElement.insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});