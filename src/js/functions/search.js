import { Notify } from 'notiflix';
import { refs } from '../refs';
import { renderSearchedMovies } from './renderSearchedMovies';

const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');

form.addEventListener('submit', onSearch);
input.addEventListener('input', onInput);

function onSearch(evt) {
  evt.preventDefault();

  const sanitazedValue = input.value.trim();

  if (!sanitazedValue) {
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
