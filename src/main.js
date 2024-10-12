import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getAllPhotos } from './js/pixabay-api';
import { createItem } from './js/render-functions';

const formEl = document.querySelector('#js-form');
const inputEl = document.querySelector('#js-input');
const galleryEl = document.querySelector('#js-gallery');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', handleClick);

function handleClick(e) {
  e.preventDefault();
  const query = inputEl.value.trim();
  galleryEl.innerHTML = '';
  loaderEl.classList.add('block');
  getAllPhotos(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        return iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
      galleryEl.innerHTML = hits.map(createItem).join('');
      gallery.refresh();
    })
    .catch(() =>
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching the images. Please try again later!',
        position: 'topRight',
      })
    )
    .finally(() => {
      loaderEl.classList.remove('block');
      formEl.reset();
    });
}
