import { CommmonAction, commonActionTypes, CommonState } from "./common.types";

const initialState: CommonState = {
  loading: false,
};

const ProductsReducer = (state = initialState, action: CommmonAction) => {
  switch(action.type) {
    case commonActionTypes.SET_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    default: {
      return state;
    }
  }
};

export default ProductsReducer;
