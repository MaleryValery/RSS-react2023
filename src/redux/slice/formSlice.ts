import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../../utils/interfaces';

interface IStoreProps {
  formData: IFormData[];
}

const initialState: IStoreProps = {
  formData: [],
};

export const controlledSlice = createSlice({
  name: 'controlledForm',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IFormData[]>) {
      state.formData = action.payload;
    },
  },
});

export default controlledSlice.reducer;
export const { setData } = controlledSlice.actions;
