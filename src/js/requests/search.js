import { fetchBySearchString } from './fetchBySearchString';
import { createMoviesCardMarkup } from '../functions/card';

const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const list = document.querySelector('.js-films-list');
const searchError = document.querySelector('.js-search-error');

form.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();

  const sanitazedValue = input.value.trim();

  if (!sanitazedValue) {
    return;
  }

  list.innerHTML = '';
  searchError.classList.add('visually-hidden');

  try {
    const response = await fetchBySearchString(sanitazedValue);

    if (!response.results.length) {
      showError();
      return;
    }

    const filmsList = response.results.map(createMoviesCardMarkup).join('');

    list.insertAdjacentHTML('beforeend', filmsList);
  } catch (error) {
    showError();
  }
}

function showError() {
  searchError.classList.remove('visually-hidden');
}
