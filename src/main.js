import axios from 'axios';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import errorIcon from '/img/error.svg';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41804111-1b8e3eb7a4ad0f0fdba68370e';
let limit;

const searchParams = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

const simpleGallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', startSearch);
loadMoreBtn.addEventListener('click', loadMorePhotos);

async function startSearch(event) {
  event.preventDefault();
  if (!searchInput.value.trim()) {
    showErrormsg('Please, fill out the search field');
    return;
  }
  gallery.innerHTML = '';
  searchParams.q = searchInput.value.trim();
  searchParams.page = 1;
  hideElem(loadMoreBtn);
  fetchPhotos();
}

function loadMorePhotos() {
  searchParams.page += 1;
  fetchPhotos();
}

async function fetchPhotos() {
  showElem(loader);
  try {
    const response = await axios.get(`${BASE_URL}`, { params: searchParams });
    createGallery(response.data);
  } catch (error) {
    showErrormsg(error.message);
  }
  hideElem(loader);
}

function createGallery(photos) {
  if (photos.total === 0) {
    showErrormsg(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    searchInput.value = '';
    return;
  }
  limit = photos.totalHits;
  const markup = photos.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${likes}</span>
              <span><b>Views:</b> <br/>${views}</span>
              <span><b>Comments:</b> <br/>${comments}</span>
              <span><b>Downloads:</b> <br/>${downloads}</span>
            </div>
          </a>
        </li>
                  `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  checkLimit();
  scrollPage();
  simpleGallery.refresh();
  form.reset();
}

function checkLimit() {
  if (Math.ceil(limit / searchParams.per_page) === searchParams.page) {
    showErrormsg("We're sorry, but you've reached the end of search results.");
    hideElem(loadMoreBtn);
  } else {
    showElem(loadMoreBtn);
  }
}

function scrollPage() {
  if (searchParams.page > 1) {
    const rect = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({ top: rect.height * 2, left: 0, behavior: 'smooth' });
  }
}

function showErrormsg(msg) {
  iziToast.show({
    position: 'topRight',
    iconUrl: errorIcon,
    messageColor: '#FAFAFB',
    messageSize: '16px',
    backgroundColor: '#EF4040',
    close: false,
    closeOnClick: true,
    closeOnEscape: true,
    message: msg,
  });
}
function showElem(elem) {
  elem.style.display = 'inline-block';
}
function hideElem(elem) {
  elem.style.display = 'none';
}
