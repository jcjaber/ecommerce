import { combineReducers } from "redux";
import { commonReducer } from "./common";
import { ProductsReducer } from "./products";

const reducers = {
  common: commonReducer,
  products: ProductsReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
