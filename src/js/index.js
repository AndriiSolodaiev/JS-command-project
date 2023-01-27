import axios from 'axios';
export const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

import { data } from './refs';
import { refs } from './refs';
import { createGenresObj } from './functions/genres';
createGenresObj();
import './functions/search';

import Notiflix from 'notiflix';

import { markupPagination, onPaginationBtnClick } from './functions/pagination';
// Розмітка пагінації
// При першому виклику, поточна сторінка = 1, загальна кількість = 1000 (або більш правильно в refs.totalPage записати кількість, яку поверне рест запит )
markupPagination(data.page, data.totalPage);

// Обробка події на клік по кнопці пагінації
refs.paginationEl.addEventListener('click', evt => {
  onPaginationBtnClick(evt);
});

import { renderTrendingMoviesPerDay } from './functions/createMarkupGaleryMovies';
renderTrendingMoviesPerDay(data.page);
