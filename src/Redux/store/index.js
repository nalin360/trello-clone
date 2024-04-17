import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    counter: userSlice
  }
});

export default store;
