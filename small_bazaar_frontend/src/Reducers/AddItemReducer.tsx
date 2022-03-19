import { Reducer } from "redux";

const initialState = {
  set_CartAddItem: "",
};

const AddItemReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SETCARTADDITEM":
      return { ...state, set_CartAddItem: payload };
    default:
      return state;
  }
};

export default AddItemReducer;
