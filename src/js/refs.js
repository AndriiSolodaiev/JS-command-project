export const refs = {
  page: 1,
  totalPage: 1000,

  //!!!!! Логічно, щоб у refs зберігали об'єкт на посилання, в який додавати всі звернення через querySelector. А об'єкт з даними (який написаний вище) винести в окремий файл і назвати data
  paginationEl: document.querySelector('.pagination'),
  moviesCollection: document.querySelector('.js-films-list'),
};
