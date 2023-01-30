import { refs } from "./refs";
import { renderMoviesWatchedAndQueue } from "./functions/renderMoviesWatchedAndQueue";
import { changeCurrentBtnOfLibrary } from "./functions/changeCurrentBtnOfLibrary";
import { openModal } from "./functions/modal";

renderMoviesWatchedAndQueue('queueMovies', 'queue');
refs.openWatchedBtnEl.addEventListener('click', () => renderMoviesWatchedAndQueue('watchedMovies', 'watched'));
refs.openQueueBtnEl.addEventListener('click', () => renderMoviesWatchedAndQueue('queueMovies', 'queue'));
refs.openWatchedBtnEl.addEventListener('click', () => changeCurrentBtnOfLibrary(refs.openWatchedBtnEl, refs.openQueueBtnEl));
refs.openQueueBtnEl.addEventListener('click', () => changeCurrentBtnOfLibrary(refs.openQueueBtnEl, refs.openWatchedBtnEl));
refs.moviesCollectionLibrary.addEventListener('click', openModal);

// Footer 
import  {onOpenModalFooterClick, onCloseModalFooterClick, onBackdropClickToClose} from "./functions/mw-footer";
refs.openModalFooter.addEventListener("click", onOpenModalFooterClick);
refs.closeModalFooter.addEventListener('click', onCloseModalFooterClick);
refs.modalFooter.addEventListener("click", onBackdropClickToClose);