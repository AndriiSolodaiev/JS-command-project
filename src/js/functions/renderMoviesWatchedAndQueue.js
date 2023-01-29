import { refs, data } from "../refs";
import { createMarkupMovies } from "./createMarkupMovies";

export function renderMoviesWatchedAndQueue(storageKey, typeOfLibrary) {
    const moviesArr = JSON.parse(localStorage.getItem(storageKey));

    // if(moviesArr.length === 0) {
    //     refs.libraryContainerEl.insertAdjacentHTML('afterbegin', `
    //     <hi class='film-colection__message'>
    //         There's nothing here yet.
    //     </hi>
    // `)
    // } else {
        const markup = createMarkupMovies(moviesArr);

        refs.moviesCollectionLibrary.innerHTML = markup;
    // }

    // const page = moviesArr.slice(0, 20);
    // на початку begin = 0, end = 20
    // кожна наступна сторінка begin + 20, end + 20

    // if(!moviesArr) {
    //     data.page = null;
    // } else {
    //     data.page = page;
    // }
    
    data.totalPage = Math.ceil(moviesArr.length / 20);
    data.typePagination = typeOfLibrary;

    // markupPagination(); 
}

//storageKey - 'watchedMovies' or 'queueMovies'
//libraryPage - 'watched' or 'queue'