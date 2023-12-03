import { createSlice } from '@reduxjs/toolkit';
import { countryList } from '../../utils/constants';

const initialState = {
  countryList,
  select: null,
};

export const countrySlice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {},
});

export default countrySlice.reducer;
