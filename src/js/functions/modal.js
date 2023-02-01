import { onModalLibraryBtnClick } from './onModalLibraryBtnClick';
import { refs, library} from './../refs';
import { checkModalBtnName } from './checkModalBtnName';
import { watchTrailer } from './trailer';
import { setMovieGenresNames } from "./card";

export function openModal(event) {
  event.preventDefault();



///////перевірка чи таргет = li
  if (!event.target.closest('li')) {
  return;}
//////контейнер куди будемо вставляти модалку. також по кліку на ньому буде закриття модалки.
  const modalMovieCard = document.querySelector('[mw-movie-card]');
  modalMovieCard.classList.remove("is-hidden")
  


////витягаємо потрібний нам об'єкт з масиву об'єктів
  let movieId = event.target.closest("li").dataset.id

  const movieStorageArr = JSON.parse(localStorage.getItem("currentMovies"))
  let movieCardObj = movieStorageArr.find(movie => movie.id === Number(movieId))
 
//Трейлер
  watchTrailer(movieId);

////перевірка чи має фільм середню оцінку, якщо ні то N/A  
  let voteAverage = movieCardObj.vote_average;
  if (voteAverage === 0.0) {
    voteAverage = `N/A`
  } else {
    voteAverage = movieCardObj.vote_average.toFixed(1)
  }
////перевірка чи має фільм голоси, якщо ні то N/A 
  let voteCount = movieCardObj.vote_count;
  if (voteCount === 0.0) {
    voteCount = `N/A`
  } else {
    voteCount = movieCardObj.vote_count
  }


    
let modalPoster = ``;
        if (movieCardObj.poster_path) {
          modalPoster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieCardObj.poster_path}`;
        } else {
          modalPoster =
            'https://studentlegallounge.humboldt.edu/sites/default/files/styles/panopoly_image_original/public/image-coming-soon.jpg?itok=e-RY5zkr';
  }
  ////формуємо модалку з об'єкта фільма
  modalMovieCard.innerHTML = `<div class="mw-movie container">
    <button class="mw-movie__btn-close" type="button" mw-movie-close>
      <svg class='mw-movie__icon-close' width='30' height='30' viewBox='0 0 30 30'>
      <path class='mw-movie__path' d='M8 8L22 22' stroke='black' stroke-width='2'></path>
      <path class='mw-movie__path' d='M8 22L22 8' stroke='black' stroke-width='2'></path>
    </svg>
    </button>
    <div class="mw-movie__poster">
      <img
        class="mw-movie__image mw-movie__image--trailer"
        src="${modalPoster}"
        alt="Movie"
        width="375"
        height="478"
      />
      <button class='btn-trailer' type='button' aria-label='play movie trailer'>
      <svg class='btn-trailer__svg' width='68' height='48' viewBox='0 0 68 48'>
        <path
          class='btn-trailer__path'
          d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'
          fill='#212121'
        ></path>
        <path d='M 45,24 27,14 27,34' fill='#fff'></path>
      </svg>
    </button>
    </div>
    <div>
      <h2 class="mw-movie__info-heading">${movieCardObj.title}</h2>
      <table class="mw-movie__info-table">
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Vote / Votes</td>
          <td class="mw-movie__info-table-row-data">
            <span class="mw-movie__info-table-rating">${voteAverage}</span
            ><span class="mw-movie__info-table-slash"> / </span> <span class="mw-movie__info-table-votes">${
              voteCount
            }</span>
          </td>
        </tr>
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Popularity</td>
          <td class="mw-movie__info-table-row-data">${movieCardObj.popularity.toFixed(
            1
          )}</td>
        </tr>
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Original Title</td>
          <td class="mw-movie__info-table-row-data">${
            movieCardObj.original_title
          }</td>
        </tr>
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Genres</td>
          <td class="mw-movie__info-table-row-data">${setMovieGenresModal(movieCardObj.genre_ids)}</td>
        </tr>
      </table>
      <p class="mw-movie__info-table-description">
        ABOUT <br>
        ${movieCardObj.overview}
      </p>
      <ul class="mw-movie__btn-list">
        <li>
          <button class="mw-movie__btn-addwatch" type="button">Add to watched</button>
        </li>
        <li>
          <button class="mw-movie__btn-addqueue" type="button">Add to queue</button>
        </li>
      </ul> 
    </div>
  </div>`;

///////слухач на Escape
  document.addEventListener('keydown', onEscape);
  function onEscape(event) {
      if (event.code === 'Escape') {
        modalMovieCard.classList.add("is-hidden");
        document.removeEventListener('keydown', onEscape)
    }
  }

///////слухач на кнопку закриття
  const closeMovieCard = document.querySelector('[mw-movie-close]');
  closeMovieCard.addEventListener('click', onCloseClick);
  function onCloseClick() {

      modalMovieCard.classList.add("is-hidden");

    closeMovieCard.removeEventListener('click', onCloseClick);
  }

//////слухач на клік поза карткою
  document.addEventListener("click", onOuterClick); 
  function onOuterClick(event) {
    if (event.target === modalMovieCard) {

        modalMovieCard.classList.add("is-hidden");

      document.removeEventListener("click", onOuterClick);
    };
  }

//////Трейлер
  watchTrailer(movieId);

////////Олександра
const modalRefs = {
  addToWatchedBtnEl: document.querySelector('.mw-movie__btn-addwatch'),
  addToQueueBtnEl: document.querySelector('.mw-movie__btn-addqueue'),
};

if (JSON.parse(localStorage.getItem('watchedMovies'))) {
  library.watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
}

if (JSON.parse(localStorage.getItem('queueMovies'))) {
  library.queueMovies = JSON.parse(localStorage.getItem('queueMovies'));
}

//перевірка чи є фільм у watched/queue, відповідно цьому змінюється текст кнопки
checkModalBtnName(
  movieCardObj,
  modalRefs.addToWatchedBtnEl,
  'watched',
  'watchedMovies'
);

checkModalBtnName(
  movieCardObj,
  modalRefs.addToQueueBtnEl,
  'queue',
  'queueMovies'
);

// слухачі подій на кнопки add to watched, add to queue => додаванн/видалення фільму з бібліотеки
modalRefs.addToWatchedBtnEl.addEventListener('click', () =>
  onModalLibraryBtnClick(
    movieCardObj,
    library.watchedMovies,
    modalRefs.addToWatchedBtnEl,
    'watched',
    'watchedMovies'
  )
);

modalRefs.addToQueueBtnEl.addEventListener('click', () =>
  onModalLibraryBtnClick(
    movieCardObj,
    library.queueMovies,
    modalRefs.addToQueueBtnEl,
    'queue',
    'queueMovies'
  )
);
}
/////////////
// Доробити:
// --0. Додати жанри
// --1. зняти слухач подій з escape (зняв усі слухачі закриття)
// --2. закриття модалки по кліку поза модалкою
// --3. куди ділась svg (закинув інлайн)
// --4. фіналізувати стилі (питання чи кріпити кнопки абсолютами)
// 5. може якась затримка для завантаженя фото

function setMovieGenresModal(array) {
  const savedGenres = localStorage.getItem("genres");
const parsedGenres = JSON.parse(savedGenres);
  let genresCard = array.map(element => {
   return parsedGenres[element]
  })
  if (!genresCard.length) {
  return genresCard = ''
  }
  return genresCard.join(', ');  
  } 