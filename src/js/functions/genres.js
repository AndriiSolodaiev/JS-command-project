import { fetchGenres } from '../requests/fetchGenres';
// import { refs } from '../refs';

import { showLoader } from './loader';
import { hideLoader } from './loader';

export async function createGenresObj() {
  try {
    showLoader(); // 'switch on' loader-spinner

    const allGenres = {};
    const data = await fetchGenres();

    data.map(async ({ id, name }) => await (allGenres[id] = name));
    localStorage.setItem('genres', JSON.stringify(allGenres));

    hideLoader(); // 'switch off' loader-spinner
    return;
  } catch {
    errorMessage();
    return;
  }
}
function errorMessage() {
  alert('запит не здійснений');
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
