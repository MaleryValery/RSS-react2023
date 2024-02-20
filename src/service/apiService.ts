import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { md5 } from 'js-md5';
import {
  BASE_URL,
  ENDPOINT,
  HASH,
  PRIVATE_API_KEY,
  PUBLIC_API_KEY,
  TS,
} from '../utils/const/const';
import IResponseData from './IResponseData';

type SearchParams = {
  value?: string;
  limit?: number;
  offset?: number;
};

const ts = Date.now();

const queryParams = ({ value, limit, offset }: SearchParams) => {
  if (!value)
    return {
      ts: TS,
      hash: HASH,
      apikey: PUBLIC_API_KEY,
      limit,
      offset,
    };
  return {
    ts: TS,
    hash: HASH,
    apikey: PUBLIC_API_KEY,
    titleStartsWith: value.trim(),
    limit,
    offset,
  };
};

export const marvelAPI = createApi({
  reducerPath: 'marvelAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getComicsList: builder.query<IResponseData, SearchParams>({
      query: ({ value, limit, offset }) => ({
        url: ENDPOINT.comics,
        params: queryParams({ value, limit, offset }),
        headets: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getComicsById: builder.query<IResponseData, number>({
      query: (id: number) => ({
        url: `${ENDPOINT.comics}/${id}`,
        params: {
          ts,
          hash: md5(`${ts}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`),
          apikey: PUBLIC_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetComicsListQuery, useGetComicsByIdQuery } = marvelAPI;
