import axios from 'axios';
import IResponseData from './IResponseData';
import ICardData from '../utils/interfaces/ICardData';

class ApiService {
  private static baseUrl = `https://api.potterdb.com/v1/`;

  private static endpoint = `characters`;

  public static getCharacters = async (
    value?: string | null,
    limit: number = 10,
    page: number = 1
  ): Promise<IResponseData> => {
    const response = await axios.get(`${this.baseUrl}/${this.endpoint}/`, {
      params: {
        'filter[name_cont_any]': value || 'potter',
        'page[size]': limit,
        'page[number]': page,
      },
    });
    return response.data;
  };

  public static getCharactersById = async (id: string): Promise<ICardData> => {
    const response = await axios.get(`${this.baseUrl}/${this.endpoint}/${id}`);
    return response.data.data;
  };
}

export default ApiService;
