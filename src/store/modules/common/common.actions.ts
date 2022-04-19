import { commonActionTypes } from "./common.types";

const setLoading = (loading: boolean) => {
  return {
    type: commonActionTypes.SET_LOADING,
    payload: {
      loading
    }
  };
};

const commonActions = {
  setLoading
};

export default commonActions;
