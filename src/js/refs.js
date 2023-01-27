export const refs = {
  //!!!!! Логічно, щоб у refs зберігали об'єкт на посилання, в який додавати всі звернення через querySelector. А об'єкт з даними (який написаний вище) винести в окремий файл і назвати data
  paginationEl: document.querySelector('.pagination'),
  addToWatchBtnEl: document.querySelector('.mw-movie__btn-addwatch'),
  addToQueueBtnEl: document.querySelector('.mw-movie__btn-addqueue'),
  moviesCollection: document.querySelector('.js-films-list'),
  searchError: document.querySelector('.js-search-error')
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
