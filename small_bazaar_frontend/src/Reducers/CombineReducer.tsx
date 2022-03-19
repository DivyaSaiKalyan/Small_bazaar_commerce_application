import { combineReducers } from "redux";
import ItemsDisplayReducer from "./ItemsDisplayReducer";
import CatagoryReducer from "./CatagoryReducer";
import AddItemReducer from "./AddItemReducer";
import CartItemsReducer from "./CartItemsReducer";
import LoginRegisterReducer from "./LoginRegisterReducer";

const reducer = combineReducers({
  ItemsDisplayReducer: ItemsDisplayReducer,
  CatagoryReducer: CatagoryReducer,
  AddItemReducer: AddItemReducer,
  CartItemsReducer: CartItemsReducer,
  LoginRegisterReducer: LoginRegisterReducer,
});

export default reducer;
