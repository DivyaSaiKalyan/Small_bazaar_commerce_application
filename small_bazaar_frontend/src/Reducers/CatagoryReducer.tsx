import { Reducer } from "redux";

const initialState = {
  set_catagory: "All Items",
};

const CatagoryReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SETCATAGORY":
      return { ...state, set_catagory: payload };
    default:
      return state;
  }
};

export default CatagoryReducer;
