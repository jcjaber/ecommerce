import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { commonReducer } from './common';
import { ProductsReducer } from './products';

const reducers = {
  cart: cartReducer,
  common: commonReducer,
  products: ProductsReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
