import { configureStore } from '@reduxjs/toolkit';
import { cardsListReducer, limitReducer, searchReducer } from './slices/index';

export const store = configureStore({
  reducer: {
    limit: limitReducer,
    search: searchReducer,
    cardsList: cardsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
