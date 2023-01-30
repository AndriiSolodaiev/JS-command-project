import { onModalLibraryBtnClick } from './onModalLibraryBtnClick';
import { refs, library, data } from './../refs';
import { checkModalBtnName } from './checkModalBtnName';
import { renderMoviesWatchedAndQueue } from './renderMoviesWatchedAndQueue';
import { watchTrailer } from './trailer';

export function openModal(event) {
  event.preventDefault();
  ////слухач на Escape
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modalMovieCard.hidden = true
    };
  }); 
  if(refs.openQueueBtnEl) {
    document.addEventListener("keydown", () => {
      if(refs.openQueueBtnEl.classList.contains('btn__current')) {
        renderMoviesWatchedAndQueue('queueMovies', 'queue');
      } else {
        renderMoviesWatchedAndQueue('watchedMovies', 'watched');
      }
    });
  }

  console.log(refs);
    
  ////перевірка чи таргет = li
  const modalMovieCard = document.querySelector("[mw-movie-card]");
  modalMovieCard.hidden = false;
  if (!event.target.closest("li")) {
    return
    };
    
  ////витягаємо потрібний нам об'єкт з масиву об'єктів
  let movieId = event.target.closest("li").dataset.id
  console.log(movieId)


//Трейлер
  watchTrailer(movieId);
  // console.log(movieId)



  const movieStorageArr = JSON.parse(localStorage.getItem("currentMovies"))
//   console.log(movieStorageArr)
  let movieCardObj = movieStorageArr.find(movie => movie.id === Number(movieId))
  // console.log(movieCardObj);
  ////формуємо модалку з об'єкта фільма
  modalMovieCard.innerHTML = `<div class="mw-movie container">
    <button class="mw-movie__btn-close" type="button" mw-movie-close>
      <svg class="mw-movie__icon-close">
        <use
          aria-label="close icon"
          href="./sass/img/sprite.svg#icon-cross"
        ></use>
      </svg>
    </button>
    <div class="mw-movie__poster">
      <img
        class="mw-movie__image"
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieCardObj.poster_path}"
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
            <span class="mw-movie__info-table-rating">${movieCardObj.vote_average.toFixed(1)}</span
            ><span class="mw-movie__info-table-slash"> / </span>${movieCardObj.vote_count}
          </td>
        </tr>
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Popularity</td>
          <td class="mw-movie__info-table-row-data">${movieCardObj.popularity.toFixed(1)}</td>
        </tr>
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Original Title</td>
          <td class="mw-movie__info-table-row-data">${movieCardObj.original_title}</td>
        </tr>
        <tr class="mw-movie__info-table-row">
          <td class="mw-movie__info-table-row-name">Genres</td>
          <td class="mw-movie__info-table-row-data">${movieCardObj.genres}</td>
        </tr>
      </table>
      <p class="mw-movie__info-table-description">
        ABOUT <br />
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
    
  ////слухач на кнопку закриття
  const closeMovieCard = document.querySelector("[mw-movie-close]")
  closeMovieCard.addEventListener("click", () =>
  {modalMovieCard.hidden = true})

  //оновлення вмісту сторінку по закриттю модалки
  if(refs.openQueueBtnEl) {
    closeMovieCard.addEventListener("click", () => {
      if(refs.openQueueBtnEl.classList.contains('btn__current')) {
        renderMoviesWatchedAndQueue('queueMovies', 'queue');
      } else {
        renderMoviesWatchedAndQueue('watchedMovies', 'watched');
      }
    });
  }

  const modalRefs = {
      addToWatchedBtnEl: document.querySelector('.mw-movie__btn-addwatch'),
      addToQueueBtnEl: document.querySelector('.mw-movie__btn-addqueue'),
  };

  if(JSON.parse(localStorage.getItem('watchedMovies'))) {
    library.watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
  }
  
  if(JSON.parse(localStorage.getItem('queueMovies'))) {
    library.queueMovies = JSON.parse(localStorage.getItem('queueMovies'));
  }

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

  // слухачі подій на кнопки add to watched, add to queue
  modalRefs.addToWatchedBtnEl.addEventListener('click', () => onModalLibraryBtnClick(
    movieCardObj, 
    library.watchedMovies, 
    modalRefs.addToWatchedBtnEl, 
    'watched', 
    'watchedMovies'));

  modalRefs.addToQueueBtnEl.addEventListener('click', () => onModalLibraryBtnClick(
    movieCardObj, 
    library.queueMovies, 
    modalRefs.addToQueueBtnEl, 
    'queue', 
    'queueMovies'));
}
/////////////
// Доробити:
// 0. Додати жанри
// 1. зняти слухач подій з escape
// 2. закриття модалки по кліку поза модалкою
// 3. куди ділась svg
// 4. фіналізувати стилі
// 5. може якась затримка для завантаженя фото