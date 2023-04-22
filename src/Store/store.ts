import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Slicers/SearchSlice';
import PhotosSlice from './Slicers/PhotosSlice';
import formCardsSlice from './Slicers/FormCards';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    photos: PhotosSlice,
    formCards: formCardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
