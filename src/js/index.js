// import axios from 'axios';
// export const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

import { data } from './refs';
import { refs } from './refs';
import { createGenresObj } from './functions/genres';
createGenresObj();
import './functions/search';
import debounce from '../../node_modules/lodash/fp/debounce.js';

import { markupPagination, onPaginationBtnClick } from './functions/pagination';
refs.paginationEl.addEventListener('click', evt => {
  onPaginationBtnClick(evt);
});

window.addEventListener(
  'resize',
  debounce(250, e => {
    markupPagination();
  })
);

import { renderTrendingMoviesPerDay } from './functions/createMarkupGaleryMovies';
renderTrendingMoviesPerDay(data.page);

import { openModal } from './functions/modal';
refs.moviesCollection.addEventListener('click', openModal);

import { toggleModal } from './functions/mw-footer';
refs.openModal.addEventListener('click', toggleModal);
