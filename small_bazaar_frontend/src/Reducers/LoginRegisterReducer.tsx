import { Reducer } from "redux";

const initialState = {
  register: {},
  login: {},
};

const LoginRegisterReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER":
      return { ...state, register: payload };
    case "LOGIN":
      return { ...state, login: payload };
    default:
      return state;
  }
};

export default LoginRegisterReducer;
