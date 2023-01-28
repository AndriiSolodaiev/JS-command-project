export const refs = {
  paginationEl: document.querySelector('.pagination'),
  addToWatchBtnEl: document.querySelector('.mw-movie__btn-addwatch'),
  addToQueueBtnEl: document.querySelector('.mw-movie__btn-addqueue'),
  moviesCollection: document.querySelector('.js-films-list'),
  searchError: document.querySelector('.js-search-error'),
  openModal: document.querySelector("[data-modal-open]")
};

//масиви з об'єктами фільмів my library, що будуть збережені до localStorage
export const library = {
  watchedMovies: [],
  queueMovies: [],
};

export const data = {
  page: 1,
  totalPage: 1000,
  searchString: '',
  // typePagination буде приймати такі значення:
  // search,
  // trending,
  // watched,
  // queue,
  // empty,
  typePagination: 'trending',
};
