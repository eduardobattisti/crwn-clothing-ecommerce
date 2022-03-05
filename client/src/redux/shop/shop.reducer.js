import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFecthing: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFecthing: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFecthing: true,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFecthing: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
