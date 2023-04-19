/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormInputs } from '../../types';

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState: {
    value: <IFormInputs[]>[],
  },
  reducers: {
    formCardsValue: (state, action: PayloadAction<IFormInputs[]>) => {
      state.value = action.payload;
    },
  },
});

export const { formCardsValue } = formCardsSlice.actions;

export default formCardsSlice.reducer;
