export function createMoviesCardMarkup(movies) {
  return movies
    .map(
      ({
        original_title,
        poster_path,
        vote_average,
        id,
        genre_ids,
        release_date,
      }) => {
        let posterPath = ``;
        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
        }
        return `<li class='films-gallery__item' key='${id}'>
            <img
                class='films-gallery__img'
                src='${posterPath}'
                alt='${original_title}'
                width
                loading='lazy'
            />
            <span class='films-gallery__rate'>${vote_average.toFixed(1)}</span>
            <div class='films-gallery__wrap'>
                <h2 class='films-gallery__title'>${original_title}</h2>
                <div class='films-gallery__info'>
                <p class='films-gallery__text'>${genre_ids}</p>
                <p class='films-gallery__age'>| ${release_date}</p>
                </div>
            </div>
            </li>`;
      }
    )
    .join('');
}

export function setMovieGenresNames(movies, genresList) {
  movies.forEach(movie => {
    movie.release_date = movie.release_date?.slice(0, 4);
    const genresIdsList = movie.genre_ids;
    genresIdsList.forEach((genreId, index, array) => {
      const genresListItem = genresList.find(genre => genre.id === genreId);
      const idx = genresList.indexOf(genresListItem);
      array[index] = genresList[idx].name;
    });
    if (genresIdsList.length > 2) {
      genresIdsList.splice(2, genresIdsList.length - 1, 'Other');
    }
    movie.genre_ids = genresIdsList.join(', ');
  });
}