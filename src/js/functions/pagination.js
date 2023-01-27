import { PaginationService } from './paginationService.js';
import { data, refs } from '../refs';
import { renderTrendingMoviesPerDay } from './createMarkupGaleryMovies.js';
import { fetchTrendingMoviesPerDay } from '../requests/fetchTrendingMovies';
import { renderSearchedMovies } from './renderSearchedMovies';

export function markupPagination(currentPage, totalPage) {
  let isMobile = false;
  let pagination = new PaginationService(currentPage, totalPage, isMobile);
  console.log(pagination.get());
  if (data.typePagination == 'empty') {
    refs.paginationEl.innerHTML = '';
    return;
  }

  refs.paginationEl.innerHTML = pagination
    .get()
    .map(page => {
      let buttonActiveClass =
        page === currentPage ? 'pagination__button_active' : '';
      let dataPage =
        page == '<=' ? currentPage - 1 : page == '=>' ? currentPage + 1 : page;

      // let captionButton =
      return `<button type="button" class="pagination__button pagination_button-arrow_left ${buttonActiveClass}" data-page="${dataPage}">${page}</button>`;
    })
    .join('');

  //   console.log(pagination.get());
  return 1;
}

export function onPaginationBtnClick(evt) {
  let page = evt.target.dataset.page;
  console.log(page);

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
  // викликаємо функцію renderMoviesWatched
  //}

  // if (data.typePagination === 'watched'){
  // викликаємо функцію renderMoviesQuieu
  //}
  // if (data.typePaginatio)

  markupPagination(data.page, data.totalPage);
}
