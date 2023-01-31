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
            'https://studentlegallounge.humboldt.edu/sites/default/files/styles/panopoly_image_original/public/image-coming-soon.jpg?itok=e-RY5zkr';
  }
  
  let voteAverage = vote_average;
  if (voteAverage === 0.0) {
    voteAverage = `N/A`
  } else {
    voteAverage = vote_average.toFixed(1)
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
                <p class='films-gallery__text'>${setMovieGenresNames(genre_ids)} ${linea} ${release_date?.slice(0, 4,)}</p>
                <p class='films-gallery__rate '>${voteAverage}</p>
                </div>
            </div>`;
  
   
            
};

export function setMovieGenresNames(array) {
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
