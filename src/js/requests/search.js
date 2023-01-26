import { fetchBySearchString } from './fetchBySearchString';
import { createMarkupGaleryMovies } from '../functions/createMarkupGaleryMovies';

const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const list = document.querySelector('.js-films-list');

form.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();

  const sanitazedValue = input.value.trim();

  if (!sanitazedValue) {
    return;
  }

  list.innerHTML = '';

  try {
    const response = await fetchBySearchString(sanitazedValue);

    if (!response.results.length) {
      showError(
        'Search result not successful. Enter the correct movie name and try again'
      );
      return;
    }

    const filmsList = createMarkupGaleryMovies(response.results);

    list.insertAdjacentHTML('beforeend', filmsList);
  } catch (error) {
    showError('Error!!!');
  }
}

function showError(message) {
  // TODO: Отобразить текст ошибки
  console.log(message);
}
