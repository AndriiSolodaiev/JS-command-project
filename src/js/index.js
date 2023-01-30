import axios from 'axios';
export const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

import { data } from './refs';
import { refs } from './refs';
import { createGenresObj } from './functions/genres';
createGenresObj();
import './functions/search';
import { onPaginationBtnClick } from './functions/pagination';
import Notiflix from 'notiflix';

// Обробка події на клік по кнопці пагінації
refs.paginationEl.addEventListener('click', evt => {
  onPaginationBtnClick(evt);
   window.scrollTo({
    top: 0,
    left: 0,
  });
});

import { renderTrendingMoviesPerDay } from './functions/createMarkupGaleryMovies';
renderTrendingMoviesPerDay(data.page);

import { openModal } from'./functions/modal';

refs.moviesCollection.addEventListener("click", openModal)


import { modalRemoveHidden } from './functions/mw-footer';
refs.openModal.addEventListener('click', modalRemoveHidden)

