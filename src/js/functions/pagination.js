import { PaginationService } from './paginationService.js';
import { data, refs } from '../refs';
import { renderTrendingMoviesPerDay } from './createMarkupGaleryMovies.js';
import { fetchTrendingMoviesPerDay } from '../requests/fetchTrendingMovies';
import { renderSearchedMovies } from './renderSearchedMovies';

export function markupPagination() {
  if (data.page === 0) {
    refs.paginationEl.innerHTML = '';
    return;
  }
  let isMobile = false;
  let pagination = new PaginationService(data.page, data.totalPage, isMobile);

  refs.paginationEl.innerHTML = pagination
    .get()
    .map(page => {
      let buttonActiveClass =
        page === data.page ? 'pagination__button_active' : '';
      let pageModification =
        page == '<=' ? data.page - 1 : page == '=>' ? data.page + 1 : page;

      // let captionButton =
      return `<button type="button" class="pagination__button pagination_button-arrow_left ${buttonActiveClass}" data-page="${pageModification}">${page}</button>`;
    })
    .join('');

  return;
}

export function onPaginationBtnClick(evt) {
  let page = evt.target.dataset.page;

  if (page === '...') {
    return;
  }

  if (evt.target.classList.contains('pagination__button_active')) {
    return;
  }
  if (!page) {
    return;
  }
  data.page = Number(page);

  if (data.typePagination === 'trending') {
    renderTrendingMoviesPerDay(data.page);
  }

  if (data.typePagination === 'search') {
    renderSearchedMovies(data.page, data.searchString);
  }

  // if (data.typePagination === 'watched'){
  // викликаємо функцію renderMoviesWatched (data.page)
  //}

  // if (data.typePagination === 'queue'){
  // викликаємо функцію renderMoviesQuieu (data.page)
  //}
}

//Функція renderMoviesWatcedAndQueue (page) {
// робить відмальовку
// в об'єкт дата записати:
// data.page =  якщо список фільмів пустий, то сюди записуємо нуль, інакше записуємо значення параметра "page"
// data.totalPages = total_pages
// data.typePagination = watched || queue
// Виклик функції markupPagination ()
