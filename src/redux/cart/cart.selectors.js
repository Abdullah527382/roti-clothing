import { createSelector } from "reselect";

// Function which takes in a whole state and returns a slice of it
// This is known as the input selector

const selectCart = (state) => state.cart;

// Takes in an array of input selectors and a function which returns the value
// we want from the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
