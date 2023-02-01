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
                There's nothing here yet... You can add movies from <a href ="./index.html"class="library-message__link">here</a>.
            </p>
        `;
    refs.moviesCollectionLibrary.innerHTML = '';
    data.totalPage = 0;
    data.page = 0;
    markupPagination();
    setTimeout(hideLoader, 500); // 'switch off' loader-spinner

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
    setTimeout(hideLoader, 500); // 'switch off' loader-spinner
  }
}

//storageKey - 'watchedMovies' or 'queueMovies'
//libraryPage - 'watched' or 'queue'
