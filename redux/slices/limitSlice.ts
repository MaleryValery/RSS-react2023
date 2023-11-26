import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  limitValue: 10,
  pageValue: 1,
  totalPages: '',
};

export const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<number>) {
      state.limitValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.pageValue = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.pageValue = action.payload;
    },
  },
});

export const { setLimit, setCurrentPage } = limitSlice.actions;

export default limitSlice.reducer;
