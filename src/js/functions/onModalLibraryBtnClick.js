//додає та видаляє картку з фільмом до watched/queue, змінює,
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
    } else {
        for(let i = 0; i <= libraryArr.length; i += 1) {
            if(libraryArr[i].id === currentMovie.id) {
                libraryArr.splice(i, 1);
            }
        }
        btnEl.textContent = `Add to ${action}`;
    }

    localStorage.setItem(storageKey, JSON.stringify(libraryArr));
}