import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import ICardData from '../utils/interfaces/ICardData';
import { BASE_URL, ENDPOINT } from '../utils/const/const';
import IResponseData from './IResponseData';

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
  endpoints: (builder) => ({
    getCharacters: builder.query<IResponseData, SearchParams>({
      query: ({ value, limitValue, pageValue }) => ({
        url: `${ENDPOINT}/?filter[name_cont_any]=${value}&page[size]=${limitValue}&page[number]=${pageValue}`,
      }),
    }),
    getCharacterById: builder.query<IResponseData, string>({
      query: (id: string) => ({
        url: `${ENDPOINT}/${id}`,
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  charactersAPI;
