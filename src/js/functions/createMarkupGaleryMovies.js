// в рядку 6 залишилося вставити функцію формування картки
import { createMoviesCardMarkup } from './card';
import { fetchTrendingMoviesPerDay } from '../requests/fetchTrendingMovies';
import { data, refs } from '../refs';
import { createGenresObj } from './genres';
import { markupPagination } from './pagination';
export function createMarkupGaleryMovies(arr) {
  return arr
    .map(moviesCard => {
      const markup = `<li class="movies__card film-colection__item" data-id=${
        moviesCard.id
      }>${createMoviesCardMarkup(moviesCard)}</li>`;
      return markup;
    })
    .join('');
  // markupGaleryMovies = `<ul class="movies">${markupGaleryMovies}</ul>`;
}

export async function renderTrendingMoviesPerDay(page) {
  const { total_pages, results } = await fetchTrendingMoviesPerDay(page);
  const markup = await createMarkupGaleryMovies(results);
  refs.moviesCollection.innerHTML = await markup;

  data.page = page;
  data.totalPage = total_pages;
  data.typePagination = 'trending';
  markupPagination();


  localStorage.setItem('currentMovies', JSON.stringify(results));
  return;
}

// для картки obj = {
// adult: false,
// backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
// genre_ids: (3) [878, 12, 28],
// id: 76600,
// media_type: "movie",
// original_language: "en",
// original_title: "Avatar: The Way of Water",
// overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
// popularity: 2623.833,
// poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
// release_date: "2022-12-14",
// title: "Avatar: The Way of Water",
// video: false,
// vote_average: 7.721,
// vote_count: 4577,
// }
