import axios from 'axios';
import IResponseData from './IResponseData';
import ICardData from '../utils/interfaces/ICardData';

class ApiService {
  private static baseUrl = `https://rickandmortyapi.com/api/`;

  private static endpoint = `character`;

  public static getCharacters = async (
    value?: string | null,
    page: number = 1
  ): Promise<IResponseData> => {
    const response = await axios.get(`${this.baseUrl}/${this.endpoint}/`, {
      params: {
        page,
        name: value || '',
      },
    });
    return response.data;
  };

  public static getCharactersById = async (id: number): Promise<ICardData> => {
    const response = await axios.get(`${this.baseUrl}/${this.endpoint}/${id}`);
    return response.data;
  };
}

export default ApiService;
