import { Reducer } from "redux";

const initialState = {
  all_items_display: [],
};

const ItemsDisplayReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ALLITEMS":
      return { ...state, all_items_display: payload };
    default:
      return state;
  }
};

export default ItemsDisplayReducer;
