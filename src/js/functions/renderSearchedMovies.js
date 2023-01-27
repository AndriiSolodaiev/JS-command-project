import { fetchBySearchString } from '../requests/fetchBySearchString';
import { createMarkupGaleryMovies } from './createMarkupGaleryMovies';
import { refs, data } from '../refs';

export async function renderSearchedMovies(page) {
  try {
    const { total_pages, results } = await fetchBySearchString(
      data.searchString,
      page
    );

    if (!results.length) {
      showError();
      return;
    }

    data.page = page;
    data.totalPage = total_pages;
    data.typePagination = 'search';

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
