import { configureStore } from '@reduxjs/toolkit';
import { cardsListReducer, limitReducer, searchReducer } from './slices/index';
import { marvelAPI } from '../service/apiService';

export const store = configureStore({
  reducer: {
    limit: limitReducer,
    search: searchReducer,
    cardsList: cardsListReducer,
    marvelAPI: marvelAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marvelAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
