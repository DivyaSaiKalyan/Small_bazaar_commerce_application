import { Reducer } from "redux";

const initialState = {
  CartItems: [],
  cartItemsLength: 0,
};

const CartItemsReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CARTITEMS":
      return { ...state, CartItems: payload };
    case "CARTITEMSLENGTH":
      return { ...state, cartItemsLength: payload };
    default:
      return state;
  }
};

export default CartItemsReducer;
