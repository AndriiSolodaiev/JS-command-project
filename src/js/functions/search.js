import { Notify } from 'notiflix';
import { data, refs } from '../refs';
import { renderSearchedMovies } from './renderSearchedMovies';
import { renderTrendingMoviesPerDay } from './createMarkupGaleryMovies';

const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');

form.addEventListener('submit', onSearch);
input.addEventListener('input', onInput);

function onSearch(evt) {
  evt.preventDefault();

  const sanitazedValue = input.value.trim();

  if (!sanitazedValue) {
    if (data.typePagination === 'search') {
      renderTrendingMoviesPerDay(1);
      return;
    }

    Notify.failure('Please enter movie');
    return;
  }

  refs.searchError.classList.add('visually-hidden');

  renderSearchedMovies(1, sanitazedValue);
}

function onInput() {
  if (!input.value) {
    refs.searchError.classList.add('visually-hidden');
  }
}
