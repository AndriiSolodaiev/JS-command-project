import { fetchBySearchString } from '../requests/fetchBySearchString';
import { createMarkupGaleryMovies } from './createMarkupGaleryMovies';
import { refs } from '../refs';

export async function renderSearchedMovies(page) {
  try {
    const { total_pages, results } = await fetchBySearchString(
      refs.searchString,
      page
    );

    if (!results.length) {
      showError();
      return;
    }

    refs.page = page;
    refs.totalPage = total_pages;

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
