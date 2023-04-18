/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    searchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { searchValue } = searchSlice.actions;

export default searchSlice.reducer;
