function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("krGWQ",(function(t,n){e(t.exports,"refs",(function(){return o})),e(t.exports,"library",(function(){return r})),e(t.exports,"data",(function(){return i}));const o={moviesCollection:document.querySelector(".js-films-list"),searchError:document.querySelector(".js-search-error"),openModal:document.querySelector("[data-modal-open]"),form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),moviesCollectionLibrary:document.querySelector(".js-library-films__list"),openWatchedBtnEl:document.querySelector(".button__watched"),openQueueBtnEl:document.querySelector(".button__queue"),libraryContainerEl:document.querySelector(".js-library-container"),libraryMessageContainerEl:document.querySelector(".library-message"),paginationEl:document.querySelector(".js-pagination"),loaderContainer:document.querySelector(".loader-container")},r={watchedMovies:[],queueMovies:[]},i={page:1,totalPage:1e3,searchString:"",typePagination:"trending"}})),r.register("lNjrx",(function(t,n){e(t.exports,"renderMoviesWatchedAndQueue",(function(){return a}));var o=r("krGWQ"),i=r("6GPCA");function a(e,t){const n=JSON.parse(localStorage.getItem(e));if(0===n.length)o.refs.libraryMessageContainerEl.innerHTML="\n            <p class='library-message__text'>\n                There's nothing here yet...\n            </p>\n        ",o.refs.moviesCollectionLibrary.innerHTML="";else{o.refs.libraryMessageContainerEl.innerHTML="";const e=(0,i.createMarkupMovies)(n);o.refs.moviesCollectionLibrary.innerHTML=e,o.data.totalPage=Math.ceil(n.length/20),o.data.typePagination=t}}})),r.register("6GPCA",(function(t,n){e(t.exports,"createMarkupMovies",(function(){return i}));var o=r("iqXNn");function i(e){return e.map((e=>`\n            <li class="movies__card film-colection__item" data-id=${e.id}>\n                ${(0,o.createMoviesCardMarkup)(e)}\n            </li>`)).join("")}})),r.register("iqXNn",(function(t,n){function o(e){const{title:t,original_title:n,poster_path:o,vote_average:r,genre_ids:i,release_date:a}=e;let l="";l=o?`https://image.tmdb.org/t/p/w400/${o}`:"https://studentlegallounge.humboldt.edu/sites/default/files/styles/panopoly_image_original/public/image-coming-soon.jpg?itok=e-RY5zkr";let s=r;s=0===s?"+":r.toFixed(1);let c="|";return c=i.length&&a?"|":"",`\n            <img\n                class='films-gallery__img'\n                src='${l}'\n                alt='${n}'\n                loading='lazy'\n            />\n            \n            <div class='films-gallery__wrap'>\n                <h2 class='films-gallery__title'>${t}</h2>\n                <div class='films-gallery__info'>\n                <p class='films-gallery__text'>${function(e){const t=localStorage.getItem("genres"),n=JSON.parse(t);let o=e.map((e=>n[e]));o.length>2&&o.splice(2,o.length-1,"Other");return o.length?o.join(", "):o=""}(i)} ${c} ${null==a?void 0:a.slice(0,4)}</p>\n                <p class='films-gallery__rate '>${s}</p>\n                </div>\n            </div>`}e(t.exports,"createMoviesCardMarkup",(function(){return o}))})),r.register("e7DYx",(function(t,n){e(t.exports,"openModal",(function(){return s}));var o=r("4OCtC"),i=r("krGWQ"),a=r("4M6zP"),l=r("lNjrx");function s(e){e.preventDefault(),document.addEventListener("keydown",(e=>{"Escape"===e.code&&(t.hidden=!0)})),document.addEventListener("keydown",(()=>{i.refs.openQueueBtnEl.classList.contains("btn__current")?(0,l.renderMoviesWatchedAndQueue)("queueMovies","queue"):(0,l.renderMoviesWatchedAndQueue)("watchedMovies","watched")}));const t=document.querySelector("[mw-movie-card]");if(t.hidden=!1,!e.target.closest("li"))return;let n=e.target.closest("li").dataset.id;let r=JSON.parse(localStorage.getItem("currentMovies")).find((e=>e.id===Number(n)));t.innerHTML=`<div class="mw-movie container">\n    <button class="mw-movie__btn-close" type="button" mw-movie-close>\n      <svg class="mw-movie__icon-close">\n        <use\n          aria-label="close icon"\n          href="./sass/img/sprite.svg#icon-cross"\n        ></use>\n      </svg>\n    </button>\n    <div>\n      <img\n        class="mw-movie__image"\n        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${r.poster_path}"\n        alt="Movie"\n        width="375"\n        height="478"\n      />\n    </div>\n    <div>\n      <h2 class="mw-movie__info-heading">${r.title}</h2>\n      <table class="mw-movie__info-table">\n        <tr class="mw-movie__info-table-row">\n          <td class="mw-movie__info-table-row-name">Vote / Votes</td>\n          <td class="mw-movie__info-table-row-data">\n            <span class="mw-movie__info-table-rating">${r.vote_average.toFixed(1)}</span\n            ><span class="mw-movie__info-table-slash"> / </span>${r.vote_count}\n          </td>\n        </tr>\n        <tr class="mw-movie__info-table-row">\n          <td class="mw-movie__info-table-row-name">Popularity</td>\n          <td class="mw-movie__info-table-row-data">${r.popularity.toFixed(1)}</td>\n        </tr>\n        <tr class="mw-movie__info-table-row">\n          <td class="mw-movie__info-table-row-name">Original Title</td>\n          <td class="mw-movie__info-table-row-data">${r.original_title}</td>\n        </tr>\n        <tr class="mw-movie__info-table-row">\n          <td class="mw-movie__info-table-row-name">Genres</td>\n          <td class="mw-movie__info-table-row-data">${r.genres}</td>\n        </tr>\n      </table>\n      <p class="mw-movie__info-table-description">\n        ABOUT <br />\n        ${r.overview}\n      </p>\n      <ul class="mw-movie__btn-list">\n        <li>\n          <button class="mw-movie__btn-addwatch" type="button">Add to watched</button>\n        </li>\n        <li>\n          <button class="mw-movie__btn-addqueue" type="button">Add to queue</button>\n        </li>\n      </ul>\n    </div>\n  </div>`;const s=document.querySelector("[mw-movie-close]");s.addEventListener("click",(()=>{t.hidden=!0})),s.addEventListener("click",(()=>{i.refs.openQueueBtnEl.classList.contains("btn__current")?(0,l.renderMoviesWatchedAndQueue)("queueMovies","queue"):(0,l.renderMoviesWatchedAndQueue)("watchedMovies","watched")}));const c={addToWatchedBtnEl:document.querySelector(".mw-movie__btn-addwatch"),addToQueueBtnEl:document.querySelector(".mw-movie__btn-addqueue")};JSON.parse(localStorage.getItem("watchedMovies"))&&(i.library.watchedMovies=JSON.parse(localStorage.getItem("watchedMovies"))),JSON.parse(localStorage.getItem("queueMovies"))&&(i.library.queueMovies=JSON.parse(localStorage.getItem("queueMovies"))),(0,a.checkModalBtnName)(r,c.addToWatchedBtnEl,"watched","watchedMovies"),(0,a.checkModalBtnName)(r,c.addToQueueBtnEl,"queue","queueMovies"),c.addToWatchedBtnEl.addEventListener("click",(()=>(0,o.onModalLibraryBtnClick)(r,i.library.watchedMovies,c.addToWatchedBtnEl,"watched","watchedMovies"))),c.addToQueueBtnEl.addEventListener("click",(()=>(0,o.onModalLibraryBtnClick)(r,i.library.queueMovies,c.addToQueueBtnEl,"queue","queueMovies")))}})),r.register("4OCtC",(function(t,n){function o(e,t,n,o,r){if(n.textContent===`Add to ${o}`)t.push(e),n.textContent=`Remove from ${o}`;else{for(let n=0;n<=t.length;n+=1)if(t[n].id===e.id){t.splice(n,1);break}n.textContent=`Add to ${o}`}localStorage.setItem(r,JSON.stringify(t))}e(t.exports,"onModalLibraryBtnClick",(function(){return o}))})),r.register("4M6zP",(function(t,n){function o(e,t,n,o){const r=JSON.parse(localStorage.getItem(o));r&&(r.find((t=>e.id===t.id))?t.textContent=`Remove from ${n}`:t.textContent=`Add to ${n}`)}e(t.exports,"checkModalBtnName",(function(){return o}))}));
//# sourceMappingURL=mylibrary.2f95ac02.js.map
