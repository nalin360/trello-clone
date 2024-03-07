import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../Reducer/counterSlice';
import userSlice from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    counter: userSlice,
  },
});

export default store;
