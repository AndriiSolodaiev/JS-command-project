import axios from 'axios';
export const API_KEY = "064f7e3d0569e2adbfaa0d0f4ed21f86";
axios.defaults.baseURL = "https://api.themoviedb.org/3/"

import { refs } from './refs';
import { createGenresObj } from './functions/genres';
createGenresObj()