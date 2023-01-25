import axios from 'axios';
const API_KEY = '064f7e3d0569e2adbfaa0d0f4ed21f86';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMoviesPerDay(page = 1) {
  const { data } = await axios(
    `trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  return data;
}
