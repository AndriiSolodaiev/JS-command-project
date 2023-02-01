import { fetchGenres } from '../requests/fetchGenres';
import { createMarkupGaleryMovies } from './createMarkupGaleryMovies';
import { showLoader, hideLoader } from './loader';
import { fetchError } from './createMarkupGaleryMovies';
export async function createGenresObj() {
  try {
    showLoader(); // 'switch on' loader-spinner
    const allGenres = {};
    const data = await fetchGenres();
    data.map(async ({ id, name }) => await (allGenres[id] = name));
    localStorage.setItem('genres', JSON.stringify(allGenres));
    setTimeout(hideLoader, 500); // 'switch off' loader-spinner
    return;
  } catch {
    console.log('fetchGenres Error');
    // fetchError();
    setTimeout(hideLoader, 500); // 'switch off' loader-spinner
    return;
  }
}

// ця функція створює такий об'єкт
//  {
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
