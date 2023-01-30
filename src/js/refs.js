export const refs = {
  errorMessage: document.querySelector('.js-error-message'),
  moviesCollection: document.querySelector('.js-films-list'),
  searchError: document.querySelector('.js-search-error'),

  form: document.querySelector('.js-search-form'),
  input: document.querySelector('.js-search-input'),
  moviesCollectionLibrary: document.querySelector('.js-library-films__list'),
  openWatchedBtnEl: document.querySelector('.button__watched'),
  openQueueBtnEl: document.querySelector('.button__queue'),
  libraryContainerEl: document.querySelector('.js-library-container'),
  libraryMessageContainerEl: document.querySelector('.library-message'),

  paginationEl: document.querySelector('.js-pagination'),
  // ці строчки перенесла у функцію модалки, тому що елементи кнопок існують тільки при відкритій модалці,
  // поза нею до них неможливо звернутись
  // addToWatchBtnEl: document.querySelector('.mw-movie__btn-addwatch'),
  // addToQueueBtnEl: document.querySelector('.mw-movie__btn-addqueue'),

  loaderContainer: document.querySelector('.loader-container'),

  closeModalFooter: document.querySelector("[data-modal-close]"),
  modalFooter: document.querySelector("[data-modal]"),
  openModalFooter: document.querySelector("[data-modal-open]")

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
