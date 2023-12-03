import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './slice/formSlice';
import { countrySlice } from './slice/countrySlice';

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    country: countrySlice.reducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
