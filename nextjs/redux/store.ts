import { configureStore } from '@reduxjs/toolkit';
import {
  cardsListReducer,
  limitReducer,
  loaderReducer,
  searchReducer,
} from './slices/index';
import { charactersAPI } from '../pages/api/apiService';
import { createWrapper } from 'next-redux-wrapper';

export const store = () =>
  configureStore({
    reducer: {
      limit: limitReducer,
      search: searchReducer,
      cardsList: cardsListReducer,
      loader: loaderReducer,
      charactersAPI: charactersAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(charactersAPI.middleware),
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(store, { debug: true });
