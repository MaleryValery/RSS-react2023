import { configureStore } from '@reduxjs/toolkit';
import {
  cardsListReducer,
  limitReducer,
  loaderReducer,
  searchReducer,
} from './slices/index';
import { charactersAPI } from '../service/apiService';

export const store = configureStore({
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
