import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const isTest = process.env.NODE_ENV === 'development';

const composition = composeWithDevTools();

const store = configureStore({
  reducer: rootReducer
});

export default store;
