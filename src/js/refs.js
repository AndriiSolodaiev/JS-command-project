export const refs = {
  paginationEl: document.querySelector('.pagination'),
  moviesCollection: document.querySelector('.js-films-list'),
  searchError: document.querySelector('.js-search-error'),
  openModal: document.querySelector("[data-modal-open]"),
  form: document.querySelector('.js-search-form'),
  input: document.querySelector('.js-search-input'),
  moviesCollectionLibrary: document.querySelector('.js-library-films__list'),
  openWatchedBtnEl: document.querySelector('.button__watched'),
  openQueueBtnEl: document.querySelector('.button__queue'),
  libraryContainerEl: document.querySelector('.js-library-container'),
  libraryMessageContainerEl: document.querySelector('.library-message'),
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