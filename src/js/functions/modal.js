// refs.moviesCollection.addEventListener("click", openModal) 
export function openModal(event) {
  event.preventDefault();
    
  ////слухач на Escape
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modalMovieCard.hidden = true
    };
  }); 
    
  ////перевірка чи таргет = li
  const modalMovieCard = document.querySelector("[mw-movie-card]");
  modalMovieCard.hidden = false;
  if (!event.target.closest("li")) {
    return
    };
    
  ////витягаємо потрібний нам об'єкт з масиву об'єктів
  let movieId = event.target.closest("li").dataset.id
//   console.log(movieId)
  const movieStorageArr = JSON.parse(localStorage.getItem("currentMovies"))
//   console.log(movieStorageArr)
  let movieCardObj = movieStorageArr.find(movie => movie.id === Number(movieId))
//   console.log(movieCardObj);
    
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
    <div>
      <img
        class="mw-movie__image"
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieCardObj.poster_path
    }"
        alt="Movie"
        width="375"
        height="478"
      />
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
          <button class="mw-movie__btn-addwatch" type="button">
            Add to watched
          </button>
        </li>
        <li>
          <button class="mw-movie__btn-addqueue" type="button">
            Add to Queue
          </button>
        </li>
      </ul>
    </div>
  </div>`;
    
    ////слухач на кнопку закриття
    const closeMovieCard = document.querySelector("[mw-movie-close]")
    closeMovieCard.addEventListener("click", () =>
    {modalMovieCard.hidden = true})
}
/////////////
// Доробити:
// 0. Додати жанри
// 1. зняти слухач подій з escape
// 2. закриття модалки по кліку поза модалкою
// 3. куди ділась svg
// 4. фіналізувати стилі
// 5. може якась затримка для завантаженя фото