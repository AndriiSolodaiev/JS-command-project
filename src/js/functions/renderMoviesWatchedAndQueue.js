import { slice } from 'lodash';
import { refs, data } from '../refs';
import { createMarkupMovies } from './createMarkupMovies';
import { markupPagination } from './pagination';
import { showLoader, hideLoader } from './loader';

export function renderMoviesWatchedAndQueue(page, storageKey, typeOfLibrary) {
  showLoader(); // 'switch on' loader-spinner

  const moviesArr = JSON.parse(localStorage.getItem(storageKey));

  data.typePagination = typeOfLibrary;

  if (!moviesArr || moviesArr.length === 0) {
    refs.libraryMessageContainerEl.innerHTML = `
            <p class='library-message__text'>
                There's nothing here yet...
            </p>
        `;
    refs.moviesCollectionLibrary.innerHTML = '';
    data.totalPage = 0;
    data.page = 0;
    markupPagination();
    hideLoader(); // 'switch off' loader-spinner if successful
  } else {
    const moviesOnPage = 20;
    let moviesArrOnPage = moviesArr.slice(
      (page - 1) * moviesOnPage,
      (page - 1) * moviesOnPage + moviesOnPage
    );

    refs.libraryMessageContainerEl.innerHTML = '';

    const markup = createMarkupMovies(moviesArrOnPage);
    refs.moviesCollectionLibrary.innerHTML = markup;

    data.totalPage = Math.ceil(moviesArr.length / moviesOnPage);
    data.page = page;
    markupPagination();
    
    localStorage.setItem('currentMovies', JSON.stringify(moviesArrOnPage));
    hideLoader(); // 'switch off' loader-spinner if successful
  }
  // hideLoader(); // 'switch off' loader-spinner if successful
}

//storageKey - 'watchedMovies' or 'queueMovies'
//libraryPage - 'watched' or 'queue'
