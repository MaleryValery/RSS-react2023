import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../../utils/LocalStorageService';
import { SERCH_KEY } from '../../utils/const/const';

const initialState = {
  value: LocalStorageService.getData(SERCH_KEY.searchValue) || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.value = action.payload;
      LocalStorageService.setData(SERCH_KEY.searchValue, action.payload);
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
