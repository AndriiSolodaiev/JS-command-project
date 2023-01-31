import { refs } from "../refs";
import { renderMoviesWatchedAndQueue } from "./renderMoviesWatchedAndQueue";

export function renderLibraryByCloseModal() {
    if(refs.openQueueBtnEl.classList.contains('btn__current')) {
    renderMoviesWatchedAndQueue(1, 'queueMovies', 'queue');
    } else {
    renderMoviesWatchedAndQueue(1, 'watchedMovies', 'watched');
    }
}