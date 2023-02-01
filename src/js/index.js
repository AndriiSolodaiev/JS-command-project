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


// Footer 
import  {onOpenModalFooterClick, onCloseModalFooterClick, onBackdropClickToClose} from "./functions/mw-footer";
refs.openModalFooter.addEventListener("click", onOpenModalFooterClick);
refs.closeModalFooter.addEventListener('click', onCloseModalFooterClick);
refs.modalFooter.addEventListener("click", onBackdropClickToClose);

import { btnUp } from "./functions/btnUpHidden";
btnUp.addEventListener();