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

    if (!page) {
      // Якщо page === undefined, то це перший пошук за введеним текстом
      // необхідно оновити данні для пагінації
      refs.page = 1;
      refs.totalPage = total_pages;
    }

    const markup = createMarkupGaleryMovies(results);
    refs.moviesCollection.innerHTML = markup;
  } catch (error) {
    showError();
  }

  localStorage.setItem('currentMovies', JSON.stringify(results));
}

function showError() {
  refs.searchError.classList.remove('visually-hidden');
}
