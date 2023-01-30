import { slice } from 'lodash';
import { refs, data } from '../refs';
import { createMarkupMovies } from './createMarkupMovies';
import { markupPagination } from './pagination';

export function renderMoviesWatchedAndQueue(page, storageKey, typeOfLibrary) {
  const moviesArr = JSON.parse(localStorage.getItem(storageKey));

  data.typePagination = typeOfLibrary;

  if (moviesArr.length === 0) {
    refs.libraryMessageContainerEl.innerHTML = `
            <p class='library-message__text'>
                There's nothing here yet...
            </p>
        `;
    refs.moviesCollectionLibrary.innerHTML = '';
    data.totalPage = 0;
    data.page = 0;
    markupPagination();
  } else {
    const moviesOnPage = 20;
    let moviesArrOnPage = moviesArr.slice(
      (page - 1) * moviesOnPage,
      (page - 1) * moviesOnPage + moviesOnPage
    );

    localStorage.setItem('currentMovies', moviesArrOnPage);

    refs.libraryMessageContainerEl.innerHTML = '';

    const markup = createMarkupMovies(moviesArrOnPage);
    refs.moviesCollectionLibrary.innerHTML = markup;

    data.totalPage = Math.ceil(moviesArr.length / moviesOnPage);
    data.page = page;
    markupPagination();
  }
}

//storageKey - 'watchedMovies' or 'queueMovies'
//libraryPage - 'watched' or 'queue'
