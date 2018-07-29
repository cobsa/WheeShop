export const requestProductsType = "wheeShop/items/load";
export const receiveProductsType = "wheeShop/items/set";

export const initialState = {
  isLoading: false,
  products: []
};

export default function productReducer(state = initialState, action = {}) {
  if (action.type === requestProductsType) {
    return {
      ...state,
      isLoading: true,
      products: []
    };
  }
  if (action.type === receiveProductsType) {
    return {
      ...state,
      isLoading: false,
      products: action.payload.products
    };
  }

  return state;
}

export const actionCreators = {
  requestProducts: () => async (dispatch, getState) => {
    dispatch({ type: requestProductsType });

    let url;
    if (process.env.NODE_ENV === "production") {
      // Production
      url = process.env.REACT_APP_PROD_BACKEND;
    } else {
      // test&development
      url = "api/products/";
    }
    const response = await fetch(url);
    const products = await response.json();

    dispatch({
      type: receiveProductsType,
      payload: {
        products: products.products
      }
    });
  }
};
