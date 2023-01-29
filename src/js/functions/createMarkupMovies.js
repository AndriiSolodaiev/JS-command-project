import { createMoviesCardMarkup } from './card';

export function createMarkupMovies(arr) {
    return arr.map(moviesCard => {
        return `
            <li class="movies__card film-colection__item" data-id=${moviesCard.id}>
                ${createMoviesCardMarkup(moviesCard)}
            </li>`;
      })
      .join('');
}