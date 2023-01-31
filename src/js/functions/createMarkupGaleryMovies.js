// в рядку 6 залишилося вставити функцію формування картки
import { createMoviesCardMarkup } from './card';
import { fetchTrendingMoviesPerDay } from '../requests/fetchTrendingMovies';
import { data, refs } from '../refs';
import { createGenresObj } from './genres';
import { markupPagination } from './pagination';
// import { Notify } from 'notiflix';
import { showLoader, hideLoader } from './loader';

export function createMarkupGaleryMovies(arr) {
  return arr
    .map(moviesCard => {
      const markup = `<li class="movies__card film-colection__item" data-id=${
        moviesCard.id
      }>${createMoviesCardMarkup(moviesCard)}</li>`;
      return markup;
    })
    .join('');
}

export async function renderTrendingMoviesPerDay(page) {
  try {
    const { total_pages, results } = await fetchTrendingMoviesPerDay(page);
    const markup = await createMarkupGaleryMovies(results);

    showLoader(); // 'switch on' loader-spinner

    refs.errorMessage.innerHTML = '';
    refs.moviesCollection.innerHTML = await markup;

    data.page = page;
    data.totalPage = total_pages;
    data.typePagination = 'trending';
    markupPagination();


    localStorage.setItem('currentMovies', JSON.stringify(results));

    setTimeout(hideLoader, 500); // 'switch off' loader-spinner

    return;
  } catch {
    fetchError();
    setTimeout(hideLoader, 500); // 'switch off' loader-spinner
  }
}
function fetchError() {
  refs.errorMessage.innerHTML =
    '<img src="https://i.postimg.cc/Y0B5jWw7/fetch-Error.png" alt="fetch Error" class="error-img" />';
  Notify.failure('fetch Error');
  return;
}
