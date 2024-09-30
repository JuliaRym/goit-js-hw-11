import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46256747-1d18669c2152ad7d06c950e83';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

function createImageCard(image) {
  return `
    <div class="gallery-item">
      <a href="${image.largeImageURL}">
        <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="div-info">
        <div class="img-info">
        <span class="name">Likes</span>
        <span class="value">${image.likes}</span>
        </div>
        <div class="img-info">
        <span class="name">Views</span>
        <span class="value">${image.views}</span>
        </div>
        <div class="img-info">
        <span class="name">Comments</span>
        <span class="value">${image.comments}</span>
        </div>
        <div class="img-info">
        <span class="name">Downloads</span>
        <span class="value">${image.downloads}</span>
        </div>
      </div>
    </div>
  `;
}

function showLoader() {
  document.querySelector('.loading-spinner').style.display = 'block';
}

function hideLoader() {
  document.querySelector('.loading-spinner').style.display = 'none';
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const queryInput = form.querySelector('.search-input').value.trim();

  const params = new URLSearchParams({
    key: API_KEY,
    q: queryInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params.toString()}`;

  gallery.innerHTML = '';

  showLoader();

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response is not ok');
      }
      return response.json();
    })
    .then(data => {
      hideLoader();

      const images = data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      const imagesMarkup = images.map(image => createImageCard(image)).join('');
      gallery.innerHTML = imagesMarkup;

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      hideLoader();
    });
});
