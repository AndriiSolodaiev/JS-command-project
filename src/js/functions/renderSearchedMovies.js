import { fetchBySearchString } from '../requests/fetchBySearchString';
import { createMarkupGaleryMovies } from './createMarkupGaleryMovies';
import { refs, data } from '../refs';
import { markupPagination } from './pagination';
import { Notify } from 'notiflix';

import { showLoader } from './loader';
import { hideLoader } from './loader';

export async function renderSearchedMovies(page, searchString) {
  try {
    const { total_pages, results, total_results } = await fetchBySearchString(
      searchString,
      page
    );

    showLoader(); // 'switch on' loader-spinner

    if (!results.length) {
      showError();
      setTimeout(hideLoader, 500); // 'switch off' loader-spinner
      return;
    }
    if (data.searchString !== searchString) {
      Notify.info(` We found ${total_results} films`);
    }
    data.page = page;
    data.totalPage = total_pages;
    data.searchString = searchString;
    data.typePagination = 'search';

    markupPagination(data.page, data.totalPage);

    localStorage.setItem('currentMovies', JSON.stringify(results));

    const markup = createMarkupGaleryMovies(results);
    refs.moviesCollection.innerHTML = markup;

    setTimeout(hideLoader, 500); // 'switch off' loader-spinner

  } catch (error) {
    showError();
  }
}

function showError() {
  refs.searchError.classList.remove('visually-hidden');
}
