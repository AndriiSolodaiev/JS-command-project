import axios from 'axios';
const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

import { refs } from './refs';
import { createGenresObj } from './functions/genres';
createGenresObj();


import Notiflix from 'notiflix';

import { markupPagination, onPaginationBtnClick } from './functions/pagination';
// Розмітка пагінації
// При першому виклику, поточна сторінка = 1, загальна кількість = 1000 (або більш правильно в refs.totalPage записати кількість, яку поверне рест запит )
markupPagination(refs.page, refs.totalPage);


// Обробка події на клік по кнопці пагінації
refs.paginationEl.addEventListener('click', (evt) => {
    onPaginationBtnClick(evt, renderMovies);

});




//!!!!!!!!!!!!!!!!!!!!!!!!!!!! ВИНЕСТИ В ОКРИМИЙ ФАЙЛ !!!!!!!!!!!!!!!!!!
function renderMovies()
{


    // Функція буде викликатися при натисненні на кнопку пагінації
    // В цій функції є доступ до змінною refs.page, в якій значення поточної сторінки
    Notiflix.Notify.success("Номер сторінки " + refs.page);
}








