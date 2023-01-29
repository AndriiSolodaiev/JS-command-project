import { refs } from '../refs';

export { showLoader };
export { hideLoader };

// refs

const loader = refs.loaderContainer;

// fn to show loader

function showLoader() {
    loader.classList.remove('loader-container__is-hidden');
}

// fn to hide loader

function hideLoader() {
    loader.classList.add('loader-container__is-hidden');
}