import { PaginationService } from './paginationService.js';
import { data, refs } from '../refs';
import { renderTrendingMoviesPerDay } from './createMarkupGaleryMovies.js';
import { renderSearchedMovies } from './renderSearchedMovies';

export function markupPagination() {
  if (data.page === 0) {
    refs.paginationEl.innerHTML = '';
    return;
  }
  let pageWidth = document.documentElement.scrollWidth;
  let isMobile = pageWidth < 768 ? true : false;

  let pagination = new PaginationService(data.page, data.totalPage, isMobile);
  refs.paginationEl.innerHTML = pagination
    .get()
    .map(page => {
      let buttonActiveClass =
        page === data.page ? 'pagination__button_active' : '';
      let paginationHoverClass =
        page !== data.page && page !== '...' ? 'pagination__button_hover' : '';
      let paginationArrow =
        page == '=>' || page == '<=' ? 'pagination__button-arrow' : '';

      let pageDataSet =
        page == '<=' ? data.page - 1 : page == '=>' ? data.page + 1 : page;

      let pageShow = page == '<=' ? '&#8592;' : page == '=>' ? '&#8594;' : page;

      return `<button type="button"  class="pagination__button ${buttonActiveClass} ${paginationHoverClass} ${paginationArrow}" data-page="${pageDataSet}">
    ${pageShow}</button>`;
    })
    .join('');
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
  window.scrollTo({
    top: 0,
    left: 0,
  });
}

//Функція renderMoviesWatcedAndQueue (page) {
// робить відмальовку
// в об'єкт дата записати:
// data.page =  якщо список фільмів пустий, то сюди записуємо нуль, інакше записуємо значення параметра "page"
// data.totalPages = total_pages
// data.typePagination = watched || queue
// Виклик функції markupPagination ()
