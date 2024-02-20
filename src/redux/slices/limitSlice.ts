import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  limit: 5,
  offset: 1,
  total: 0,
};

export const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
  },
});

export const { setLimit, setCurrentPage } = limitSlice.actions;

export default limitSlice.reducer;
