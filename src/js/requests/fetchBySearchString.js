import axios from 'axios';
export const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// import axios from 'axios';
// import { API_KEY } from '../index';

export async function fetchBySearchString(searchString, page = 1) {
  const response = await axios.get('/search/movie', {
    params: {
      page,
      api_key: API_KEY,
      query: searchString,
    },
  });

  return response.data;
}
