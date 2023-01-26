import { PaginationService } from './paginationService.js';
import { refs } from '../refs';

export function markupPagination(currentPage, totalPage) {
  let isMobile = false;
  let pagination = new PaginationService(currentPage, totalPage, isMobile);
  console.log(pagination.get());
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

export function onPaginationBtnClick(evt, renderMovies) {
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
  refs.page = Number(page);
  markupPagination(refs.page, refs.totalPage);
  renderMovies();
}
