import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMainLoading: false,
  isDetailsLoading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setMainLoader(state, action: PayloadAction<boolean>) {
      state.isMainLoading = action.payload;
    },
    setDetailsLoader(state, action: PayloadAction<boolean>) {
      state.isDetailsLoading = action.payload;
    },
  },
});

export const { setMainLoader, setDetailsLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
