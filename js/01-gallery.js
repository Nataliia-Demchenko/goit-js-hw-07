import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector('.gallery');

const handleGalleryCard = ({preview, original, description}) => 
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
;

const markup = galleryItems.map((element) => handleGalleryCard(element)).join("");

galleryElement.insertAdjacentHTML("afterbegin", markup);

galleryElement.addEventListener('click', event => {
    event.preventDefault();
  
    if (event.target.nodeName !== 'IMG') {
      return;
    }
  
    const largeImageUrl = event.target.dataset.source;
  
    const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">`)
    instance.show()

});