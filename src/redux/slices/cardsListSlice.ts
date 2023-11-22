import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ICardData from '../../utils/interfaces/ICardData';

const initialState: { value: ICardData[] } = {
  value: [],
};

export const cardsListSlice = createSlice({
  initialState,
  name: 'cardsList',
  reducers: {
    setCardsList(state, action: PayloadAction<ICardData[]>) {
      state.value = action.payload;
    },
  },
});

export const { setCardsList } = cardsListSlice.actions;
export default cardsListSlice.reducer;
