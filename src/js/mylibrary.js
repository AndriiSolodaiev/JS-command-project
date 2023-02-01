import { refs } from './refs';
import { renderMoviesWatchedAndQueue } from './functions/renderMoviesWatchedAndQueue';
import { changeCurrentBtnOfLibrary } from './functions/changeCurrentBtnOfLibrary';
import { openModal } from './functions/modal';
import debounce from '../../node_modules/lodash/fp/debounce.js';
import { markupPagination, onPaginationBtnClick } from './functions/pagination';

renderMoviesWatchedAndQueue(1, 'queueMovies', 'queue');
refs.openWatchedBtnEl.addEventListener('click', () =>
  renderMoviesWatchedAndQueue(1, 'watchedMovies', 'watched')
);
refs.openQueueBtnEl.addEventListener('click', () =>
  renderMoviesWatchedAndQueue(1, 'queueMovies', 'queue')
);
refs.openWatchedBtnEl.addEventListener('click', () =>
  changeCurrentBtnOfLibrary(refs.openWatchedBtnEl, refs.openQueueBtnEl)
);
refs.openQueueBtnEl.addEventListener('click', () =>
  changeCurrentBtnOfLibrary(refs.openQueueBtnEl, refs.openWatchedBtnEl)
);
refs.moviesCollectionLibrary.addEventListener('click', openModal);


refs.paginationEl.addEventListener('click', evt => {
  onPaginationBtnClick(evt);
});

window.addEventListener(
  'resize',
  debounce(250, e => {
    markupPagination();
  })
);

// Footer 
import  {onOpenModalFooterClick, onCloseModalFooterClick, onBackdropClickToClose} from "./functions/mw-footer";
refs.openModalFooter.addEventListener("click", onOpenModalFooterClick);
refs.closeModalFooter.addEventListener('click', onCloseModalFooterClick);
refs.modalFooter.addEventListener("click", onBackdropClickToClose);

import { btnUp } from "./functions/btnUpHidden";
btnUp.addEventListener();