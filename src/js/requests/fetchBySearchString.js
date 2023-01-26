import axios from 'axios';
import { API_KEY } from '../index';

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
