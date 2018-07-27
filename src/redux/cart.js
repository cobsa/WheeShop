import { cloneDeep } from "lodash";

export const addItemToCartType = "cart/addItemToCart";
export const removeItemFromCartType = "cart/removeItem";
export const clearCartType = "cart/clearCart";

export const initialState = {
  cartItems: []
};

export default function cartReducer(state = initialState, action = {}) {
  
  // Add item

  if (action.type === addItemToCartType) {
    const newState = cloneDeep(state);
    // Find if items with same id are already in store
    const found = newState.cartItems.find(function(element) {
      if (element.id === action.payload.id) {
        return element;
      }
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
    return newState;
  }

  // Remove Item

  if (action.type === removeItemFromCartType) {
    const newState = cloneDeep(state);
    let newCartItems = [];
    newState.cartItems.forEach(element => {
      if (element.id === action.payload.id) {
        element.count = element.count - action.payload.count;
        if (element.count > 0) {
          // Only add element if count's value is greater than zero
          newCartItems.push(element);
        }
      } else {
        // Let all other ids to be copied
        newCartItems.push(element);
      }
    });
    newState.cartItems = newCartItems;
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
  }
};
