import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './slice/formSlice';

const store = configureStore({
  reducer: formSlice.reducer,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
