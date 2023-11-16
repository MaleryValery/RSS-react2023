import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '5',
};

export const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setLimit } = limitSlice.actions;

export default limitSlice.reducer;
