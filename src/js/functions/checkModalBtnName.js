//додається при відкритті модалки, перевіряє чи є фільм у watched/queue,
//відповідно цьому змінює текст кнопки

export function checkModalBtnName(currentMovie, btnEl, action, storageKey) {
    const storageArr = JSON.parse(localStorage.getItem(storageKey));
    
    if(storageArr) {
        if(storageArr.find(libraryMovie => currentMovie.id === libraryMovie.id)) {
            btnEl.textContent = `Remove from ${action}`;
        } else {
            btnEl.textContent = `Add to ${action}`;
        }
    }
}