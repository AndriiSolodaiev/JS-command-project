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
  
  let linea = '|'
  if (genre_ids.length && release_date) {
    linea = '|'
  } else {
    linea = ''
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
                <p class='films-gallery__text'>${setMovieGenresNames(genre_ids)} ${linea} ${release_date.slice(0, 4,)}</p>
                <p class='films-gallery__rate '>${vote_average.toFixed(1)}</p>
                </div>
            </div>`;
  
   
            
};

function setMovieGenresNames(array) {
const savedGenres = localStorage.getItem("genres");
const parsedGenres = JSON.parse(savedGenres);
  let genresCard = array.map(element => {
   return parsedGenres[element]
  })
   if (genresCard.length > 2) {
      genresCard.splice(2, genresCard.length - 1, 'Other');
  }
  if (!genresCard.length) {
    
    return genresCard = ''
  }
  
  return genresCard.join(', ');  
  } 
