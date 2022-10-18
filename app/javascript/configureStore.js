import { configureStore } from '@reduxjs/toolkit';
import { appRed } from './Redux/appReducer';

const store = configureStore({
  reducer: {
    greeting: appRed,
  },
});

export default store;