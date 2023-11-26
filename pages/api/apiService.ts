import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ENDPOINT } from '../../utils/const/const';
import IResponseData from './IResponseData';
import { HYDRATE } from 'next-redux-wrapper';
import ICardData from '@/utils/interfaces/ICardData';

type SearchParams = {
  value?: string;
  limitValue?: string;
  pageValue?: string;
};

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getCharacters: builder.query<IResponseData<ICardData[]>, SearchParams>({
      query: ({ value = '', limitValue = '10', pageValue = '1' }) => ({
        url: `${ENDPOINT}/?filter[name_cont_any]=${value}&page[size]=${limitValue}&page[number]=${pageValue}`,
      }),
    }),
    getCharacterById: builder.query<IResponseData<ICardData>, string>({
      query: (id: string) => ({
        url: `${ENDPOINT}/${id}`,
      }),
    }),
  }),
});

export const { getCharacters, getCharacterById } = charactersAPI.endpoints;
export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  charactersAPI;
