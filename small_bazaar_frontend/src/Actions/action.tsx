import { Dispatch } from "redux";
import axios from "axios";
import { Ilogin, Iregister } from "./../Interface/register.interface";

export const AllItemsDisplay = (value: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: "ALLITEMS",
    payload: value,
  });
};

export const setCatagoryAction =
  (value: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: "SETCATAGORY",
      payload: value,
    });
  };

export const setCartAddItem =
  (value: any, email: string) => async (dispatch: Dispatch) => {
    console.log(value);

    await axios.post(`http://localhost:3001/items/addCartItems/${email}`, {
      itemName: value.itemName,
      itemPrice: value.itemPrice,
      itemUrl: value.itemUrl,
    });
    alert("order added succsfully");
    dispatch({
      type: "SETCARTADDITEM",
      payload: value,
    });
  };

export const totalCartItems = (value: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: "CARTITEMS",
    payload: value,
  });
};

export const cartItemsLengthNumber =
  (value: number) => async (dispatch: Dispatch) => {
    dispatch({
      type: "CARTITEMSLENGTH",
      payload: value,
    });
  };

export const registerAction =
  (value: Iregister) => async (dispatch: Dispatch) => {
    axios.post(`http://localhost:3001/user/register`, value);
    alert("your register succsfully");
    dispatch({
      type: "REGISTER",
      payload: value,
    });
  };

export const loginAction = (value: Ilogin) => async (dispatch: Dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: value,
  });
};
