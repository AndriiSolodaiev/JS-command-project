//додається при відкритті модалки, перевіряє чи є фільм у watched/queue,
//відповідно цьому змінює текст кнопки

export function checkModalBtnName(currentMovie, libraryArr, btnEl, action) {
    if(libraryArr.find(libraryMovie => currentMovie.id === libraryMovie.id)) {
        btnEl.textContent = `Remove from ${action}`;
    } else {
        btnEl.textContent = `Add to ${action}`;
    }
}

