import CartActionTypes from "./cart.types.js";

// We dont need to pass in a payload parameter in the func
// It is an optional parameter
export const toggleCartHidden = () => ({
  type: CartActionTypes.SET_TOGGLE_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
