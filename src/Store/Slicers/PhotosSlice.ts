/* eslint-disable no-param-reassign */

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PhotosWithTotalResults, ErrorResponse, Photo } from 'pexels';
import queryPhotos from '../../API/API';

export const fetchByPhotos = createAsyncThunk(
  'photos/fetchByPhotos',
  async (value: string, { rejectWithValue }) => {
    const data = await queryPhotos(value);
    if ((data as ErrorResponse).error) {
      return rejectWithValue(`${(data as ErrorResponse).error}`);
    }
    return (data as PhotosWithTotalResults).photos;
  }
);

export interface IPhotoState {
  photos: Photo[];
  status: null | string;
  error: null | string;
}

const photosSlice = createSlice({
  name: 'photos',
  initialState: <IPhotoState>{
    photos: <Photo[]>[],
    status: null,
    error: null,
  },
  reducers: {
    photosArray: (state, action: PayloadAction<Photo[]>) => {
      state.photos = action.payload;
    },
  },
  extraReducers: {
    [fetchByPhotos.pending.type]: (state: IPhotoState) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchByPhotos.fulfilled.type]: (
      state: IPhotoState,
      action: PayloadAction<Photo[]>
    ) => {
      state.status = 'resolved';
      state.photos = action.payload;
    },
    [fetchByPhotos.rejected.type]: (
      state: IPhotoState,
      action: PayloadAction<string>
    ) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { photosArray } = photosSlice.actions;

export default photosSlice.reducer;
