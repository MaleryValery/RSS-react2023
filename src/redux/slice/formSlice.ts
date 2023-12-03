import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../../utils/interfaces';

interface IStoreProps {
  formData: IFormData[];
}

const initialState: IStoreProps = {
  formData: [],
};

export const formSlice = createSlice({
  name: 'controlledForm',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IFormData[]>) {
      state.formData = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { setData } = formSlice.actions;
