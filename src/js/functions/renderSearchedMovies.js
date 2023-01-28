import { fetchBySearchString } from '../requests/fetchBySearchString';
import { createMarkupGaleryMovies } from './createMarkupGaleryMovies';
import { refs, data } from '../refs';
import { markupPagination } from './pagination';
import { Notify } from 'notiflix';

export async function renderSearchedMovies(page, searchString) {
  try {
    const { total_pages, results, total_results } = await fetchBySearchString(
      searchString,
      page
    );

    if (!results.length) {
      showError();
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
  } catch (error) {
    showError();
  }
}

function showError() {
  refs.searchError.classList.remove('visually-hidden');
}
