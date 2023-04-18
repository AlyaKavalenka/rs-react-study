import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Slicers/SearchSlice';
import PhotosSlice from './Slicers/PhotosSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    photos: PhotosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
