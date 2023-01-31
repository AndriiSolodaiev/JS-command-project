import * as basicLightbox from 'basiclightbox'
import axios from 'axios';
import { API_KEY } from '../requests/fetchBySearchString';

let trailer;


///// Click event listener /////
export function watchTrailer(id)
{

  fetchTrailer(id)
    .then(
      (data) => {
        creatTrailerLink(renderTrailer(data));
        
      }
      )
    .catch(error => {
      console.log(error);
    });
  
}

///// Fetch movie by ID /////
function fetchTrailer(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data)
    .then(data => {
      return data.results;
      
    });
}

///// Render trailer modal /////

function renderTrailer(data) {
  let key = '';
  
  const openKey = data.find((e) => e.key);

  if (!openKey) {
    document.querySelector('.btn-trailer').classList.add('visually-hidden')
    
    return
  } else {
    key = openKey.key
  }

  return key;
}

function creatTrailerLink(key) {
trailer = basicLightbox.create(`<iframe width="320" height="240" src='https://www.youtube.com/embed/${key}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer_video"></iframe>`);

  setTimeout(() => {
    const trailerBtn = document.querySelector('.mw-movie__image');
    
    trailerBtn.addEventListener('click', () => {
     
       trailer.show()
    });
  }, 300);

}