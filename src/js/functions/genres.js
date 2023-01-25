import { fetchGenres } from '../requests/fetchGenres';
import { refs } from '../refs';
export async function createGenresObj() {
  const data = await fetchGenres();
  data.map(({ id, name }) => (refs.genresObj[id] = name));
  return;
}
// ця функція створює такий об'єкт
// дістати можна - refs.genresObj[id]
// genresObj = {
//   12: 'Adventure',
//   14: 'Fantasy',
//   16: 'Animation',
//   18: 'Drama',
//   27: 'Horror',
//   28: 'Action',
//   35: 'Comedy',
//   36: 'History',
//   37: 'Western',
//   53: 'Thriller',
//   80: 'Crime',
//   99: 'Documentary',
//   878: 'Science Fiction',
//   9648: 'Mystery',
//   10402: 'Music',
//   10749: 'Romance',
//   10751: 'Family',
//   10752: 'War',
//   10770: 'TV Movie',
// };