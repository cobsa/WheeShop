import { cloneDeep, remove } from "lodash";

export const addItemToCartType = "cart/addItemToCart";
export const removeItemFromCartType = "cart/removeItem";
export const clearCartType = "cart/clearCart";
export const setCountType = "cart/setCount";

export const initialState = {
  cartItems: []
};

export default function CartReducer(state = initialState, action = {}) {
  // Add item

  if (action.type === addItemToCartType) {
    const newState = cloneDeep(state);
    // Find if items with same id are already in store
    const found = newState.cartItems.find(function(element) {
      if (element.id === action.payload.id) {
        return element;
      }
      return null;
    });
    if (found) {
      // Item found
      found.count = found.count + action.payload.count;
    } else {
      // No item found
      newState.cartItems.push({
        id: action.payload.id,
        count: action.payload.count
      });
    }

    // Check for zeros and negative values
    newState.cartItems = removeNegativeOrZero(newState.cartItems);

    return newState;
  }

  // Remove Item

  if (action.type === removeItemFromCartType) {
    const newState = cloneDeep(state);
    newState.cartItems.forEach(element => {
      if (element.id === action.payload.id) {
        element.count = element.count - action.payload.count;
      }
    });

    // Check for zeros and negative values
    newState.cartItems = removeNegativeOrZero(newState.cartItems);

    return newState;
  }

  // Set count

  if (action.type === setCountType) {
    const newState = cloneDeep(state);
    newState.cartItems.forEach(product => {
      if (product.id === action.payload.id) {
        product.count = action.payload.count;
      }
    });
    // Check for zeros and negative values
    newState.cartItems = removeNegativeOrZero(newState.cartItems);
    return newState;
  }

  // Default

  return state;
}

// Action creators

export const actionCreators = {
  addItem: (id, count) => {
    return {
      type: addItemToCartType,
      payload: {
        id,
        count
      }
    };
  },
  removeItem: (id, count) => {
    return {
      type: removeItemFromCartType,
      payload: {
        id,
        count
      }
    };
  },
  setItemCount: (id, count) => {
    return {
      type: setCountType,
      payload: {
        id,
        count
      }
    };
  }
};

// Helper functions

const removeNegativeOrZero = array => {
  const newArray = cloneDeep(array);
  remove(newArray, element => {
    return element.count <= 0;
  });
  return newArray;
};
