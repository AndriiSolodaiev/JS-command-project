import axios from 'axios';
const API_KEY = "064f7e3d0569e2adbfaa0d0f4ed21f86";
axios.defaults.baseURL = "https://api.themoviedb.org/3/"
const filmCollection = document.querySelector(".film-collection")
const backdrop = document.querySelector(".backdrop")
const modalWindowContent = document.querySelector(".modal-window__content")
const btn = document.querySelector(".btn")
const closeBtn = document.querySelector(".close-btn")
btn.addEventListener("click", onBtnClick)
// Modal window 
filmCollection.addEventListener("click", onCardClick)
closeBtn.addEventListener("click", onCloseBtnClick)

function onCloseBtnClick() {
  backdrop.classList.add("is-hidden")
  modalWindowContent.innerHTML = null;
}

async function onCardClick(evt) {
    
        backdrop.classList.remove("is-hidden")
        const movieId = evt.target.closest("div").dataset.id;
        const { data } = await axios(`movie/${movieId}?api_key=${API_KEY}`);
        console.log(data)
  markupMovieCard(data)
  
   
    
    
}
async function onBtnClick() {
    const response = await fetchTrendingMoviesPerDay();
    const allGenres = await fetchGenres();
    markupFilms(response.results,allGenres)
}
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

    async function fetchTrendingMoviesPerDay() {
    const {data} = await axios(`trending/movie/week?api_key=${API_KEY}`)
    return data;
}

// fetchTrendingMoviesPerDay().then(console.log)
 
// https://api.themoviedb.org/3/genre/movie/list?api_key=api_key&language=en-US

async function fetchGenres() {
    const {data} = await axios(`genre/movie/list?api_key=${API_KEY}`)
    return data.genres
}


 function markupFilms(arr,allGenres) {
    console.log(arr)
     const makeMarkup = arr.map(({ poster_path, title, genre_ids, release_date,id }) => {
         const filmGenres = turnGenreIdToName(genre_ids, allGenres);
       return  `<div class="film-card" data-id="${id}">
  <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title} image." class="film-card__img">
  <h2 class="film-card__title">${title}</h2>
  <p class="film-card__genres">${filmGenres.slice(0,3).join(", ")}</p>
  <p class="film-card__date">${release_date.split("").slice(0,4).join("")}</p>
</div>`
   }).join("")
    
    filmCollection.innerHTML = makeMarkup;
}

function turnGenreIdToName(genre_ids, allGenres) {
    const filmGenresToReturn = [];
    for (let filmGenre of genre_ids) {
           for (let genre of allGenres) {
               if (genre.id === filmGenre) {
                   filmGenresToReturn.push(genre.name)
               }
           }
    }
    return filmGenresToReturn
}

function markupMovieCard(obj) {
    function makeMarkup() {
        
            const { poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview } = obj;

            return `<div class="card-info">
<img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title} image.">
<h2 class="movie-title">${title}</h2>
<ul class="info-list">
  <li class="info__items">
    <h3 class="info__title">Vote/Votes</h3>
    <p class="info__values"><span class="vote-average">${vote_average}</span>/${vote_count}</p>
  </li>
  <li class="info__items">
    <h3 class="info__title">Popularity</h3>
    <p class="info__values">${popularity}</p>
  </li>
  <li class="info__items">
    <h3 class="info__title">Original title</h3>
    <p class="info__values">${original_title}</p>
  </li>
  <li class="info__items">
    <h3 class="info__title">Genre</h3>
    <p class="info__values">${genres[0].name}</p>
  </li>
  <li class="info__items">
    <h3 class="info__title">About</h3>
    <p class="info__values">${overview}</p>
  </li>
</ul>
<button class="add-to-watch-btn">Add to Watch
      </button>
      <button class="add-to-queue-btn">Add to Gueue
      </button>
</div>`}
    
  console.log(makeMarkup());
    
  modalWindowContent.innerHTML = makeMarkup();
}