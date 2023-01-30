export function changeCurrentBtnOfLibrary(activeBtn, inactiveBtn) {
    activeBtn.classList.add('btn__current')
    inactiveBtn.classList.remove('btn__current');
}