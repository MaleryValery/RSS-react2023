import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import ApiResponseType from '../types/ApiResponseType';
import MovieObject from '../interfaces/Hero';

class ApiService {
  private static baseUrl = `https://rickandmortyapi.com/api/`;

  private static endpoint = `character`;

  public static getMovies = async (
    value: string | null
  ): Promise<MovieObject[] | null> => {
    const request = value ? `?name=${value}` : '';
    const resp = await fetch(`${this.baseUrl}/${this.endpoint}/${request}`);
    if (!resp.ok) {
      Toastify({
        text: 'Rick messed up, try again',
        duration: 2000,
      }).showToast();
    }
    const dataRes: ApiResponseType = await resp.json();
    return dataRes.results;
  };
}

export default ApiService;
