import { refs } from "../refs";
import { renderLibraryByCloseModal } from "./renderLibraryByCloseModal";

//додає та видаляє картку з фільмом до watched/queue, 
//відповідно цьому змінює текст кнопки
//currentMovie - об'єкт фільма з модалки
//libraryArr - масив фільмів watched/queue
//btnEl - поточна кнопка
//action - вказати watched або queue (відповідно до кнопки, на яку натиснули)
//storageKey - ключ елемента localStorage (watchedMovies або queueMovies)
export function onModalLibraryBtnClick(currentMovie, libraryArr, btnEl, action, storageKey) { 
    if(btnEl.textContent === `Add to ${action}`) {
        libraryArr.push(currentMovie);
        btnEl.textContent = `Remove from ${action}`;
        btnEl.classList.add('mw-movie__current-btn');
    } else {
        for(let i = 0; i <= libraryArr.length; i += 1) {
            if(libraryArr[i].id === currentMovie.id) {
                libraryArr.splice(i, 1);
                break;
            }
        }
        btnEl.textContent = `Add to ${action}`;
        btnEl.classList.remove('mw-movie__current-btn');
    }

    localStorage.setItem(storageKey, JSON.stringify(libraryArr));

    //оновлення вмісту сторінкИ 
    if(refs.openQueueBtnEl) {
        renderLibraryByCloseModal();
    }
}