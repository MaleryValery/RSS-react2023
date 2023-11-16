import axios from 'axios';
import IResponseData from './IResponseData';
import ICardData from '../utils/interfaces/ICardData';
import { BASE_URL, ENDPOINT } from '../utils/const/const';

export const getCharacters = async (
  value?: string | null,
  limit: string = '5',
  page: number = 1
): Promise<IResponseData> => {
  const response = await axios.get(`${BASE_URL}/${ENDPOINT}/`, {
    params: {
      'filter[name_cont_any]': value || 'potter',
      'page[size]': limit,
      'page[number]': page,
    },
  });
  return response.data;
};

export const getCharactersById = async (id: string): Promise<ICardData> => {
  const response = await axios.get(`${BASE_URL}/${ENDPOINT}/${id}`);
  return response.data.data;
};
