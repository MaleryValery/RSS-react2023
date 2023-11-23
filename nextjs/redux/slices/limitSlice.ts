import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  limitValue: '5',
  pageValue: '1',
  totalPages: '',
};

export const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<string>) {
      state.limitValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<string>) {
      state.pageValue = action.payload;
    },
    setTotalPages(state, action: PayloadAction<string>) {
      state.pageValue = action.payload;
    },
  },
});

export const { setLimit, setCurrentPage } = limitSlice.actions;

export default limitSlice.reducer;
