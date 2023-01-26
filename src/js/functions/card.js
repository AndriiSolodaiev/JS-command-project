import { createGenresObj } from "./genres";

export function createMoviesCardMarkup(movies) {
  const {
    title,
    original_title,
    poster_path,
    vote_average,
    genre_ids,
    release_date,
  } = movies;
        let posterPath = ``;
        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';
  }

  let linea = ''
  if (genre_ids && release_date) {
    linea = '|'
  }
        return `
            <img
                class='films-gallery__img'
                src='${posterPath}'
                alt='${original_title}'
                loading='lazy'
            />
            
            <div class='films-gallery__wrap'>
                <h2 class='films-gallery__title'>${title}</h2>
                <div class='films-gallery__info'>
                <p class='films-gallery__text'>${genre_ids.slice(0, 2).join(',')} ${linea} ${release_date.slice(0, 4,)}</p>
                <p class='films-gallery__rate '>${vote_average.toFixed(1)}</p>
                </div>
            </div>`;
  
  
            
};
 





// export function setMovieGenresNames(array) {
//   let genresCard = ''
//    if (genresCard.length > 2) {
//       genresCard.splice(2, genresCard.length - 1, 'Other');
//    }
//    else {
//      genresCard = array.map(element => {
//        console.log(element)
//      console.log(refs.genresObj)
//        return refs.genresObj[element]
//       });
    
     
//   }
//   return genresCard;
// }
 
// export function setMovieGenresNames(movies, genresList) {
//   movies.forEach(movie => {
//     movie.release_date = movie.release_date?.slice(0, 4);
//     const genresIdsList = movie.genre_ids;
//     genresIdsList.forEach((genreId, index, array) => {
//       const genresListItem = genresList.find(genre => genre.id === genreId);
//       const idx = genresList.indexOf(genresListItem);
//       array[index] = genresList[idx].name;
//     });
//     if (genresIdsList.length > 2) {
//       genresIdsList.splice(2, genresIdsList.length - 1, 'Other');
//     }
//     movie.genre_ids = genresIdsList.join(', ');
//   });
// }
// ;