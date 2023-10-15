// store.js
import { configureStore } from '@reduxjs/toolkit';
import switchReducer from './slices/SwitcherSlice'; // Импортируем срез (slice)
import imagesLibraryReducer from './slices/ImagesLibrarySlice'

const store = configureStore({
  reducer: {
    switch: switchReducer,
    images: imagesLibraryReducer,
  },
});

export default store;
