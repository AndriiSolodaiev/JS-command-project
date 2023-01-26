export const data = {
  page: 1,
  totalPage: 1000,
  // Зберігати в serchValue останнє коректне знайдене значення в пошуку
  serchValue: '',
  // typePagination буде приймати такі значення:
  // search,
  // trending,
  // watched,
  // queue,
  // empty,
  // 1: відображення популярних фільмів. Це значення буде по замовчуванню
  // 2: відображення фільмів за ключовим словом. Це значення записувати сюди в тому випадку, коли пошук відбувся успішно
  // 3: відображення фільмів доданих в чергу
  // 4: відображення фільмів, які переглянуті
  typePagination: 'trending',
};

export const refs = {
  paginationEl: document.querySelector('.pagination'),
  moviesCollection: document.querySelector('.js-films-list'),
};
