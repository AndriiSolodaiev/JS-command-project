export function checkModalBtnName(currentMovie, btnEl, action, storageKey) {
    const storageArr = JSON.parse(localStorage.getItem(storageKey));
    
    if(storageArr) {
        if(storageArr.find(libraryMovie => currentMovie.id === libraryMovie.id)) {
            btnEl.textContent = `Remove from ${action}`;

            btnEl.classList.add('mw-movie__current-btn');
        } else {
            btnEl.textContent = `Add to ${action}`;     

            if(btnEl.classList.contains('mw-movie__current-btn')) {
                btnEl.classList.remove('mw-movie__current-btn');
            }
        }
    }
}