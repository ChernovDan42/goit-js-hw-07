import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryListRef = document.querySelector('.gallery');
const imagesMarkup = createImgMarkup(galleryItems);

galleryListRef.innerHTML=imagesMarkup

galleryListRef.addEventListener('click',openBigSizePfoto)




function createImgMarkup(galleryItems) {    
    return galleryItems.map(el =>
      `<li class="gallery__item"><a class="gallery__link" href='${el.original}'><img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    /> </a></li>`
    ).join('');
}


function openBigSizePfoto(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    } 

    const bigImagePath = evt.target.dataset.source;

    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${bigImagePath}">
	`);

    instance.show()


    galleryListRef.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close()
        }
    },{once: true}) 

}


