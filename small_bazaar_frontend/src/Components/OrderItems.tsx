import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { totalCartItems } from "../Actions/action";

const OrderItems: React.FC = (props: any) => {
  const { CartItems, totalCartItems, login } = props;
  useEffect(() => {
    axios
      .get(`http://localhost:3001/items/getcartItemsByEmail/${login.email}`)
      .then((res) => {
        totalCartItems(res.data);
        console.log(res.data);
      });
  }, [login.email, totalCartItems]);
  return (
    <div className="container">
      <div className="row">
        {CartItems.length === 0 ? (
          <div
            className="text-center mt-5"
            style={{ fontSize: "50px", fontFamily: "cursive" }}
          >
            No Items In the Cart
          </div>
        ) : (
          CartItems.map((item: any) => (
            <div className="col col-3 mt-5" key={item.id}>
              <div className="card">
                <img
                  src={item.itemUrl}
                  className="card-img-top"
                  alt="oneplus mobile"
                  height="250"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.itemName}</h5>
                  <h5 className="card-title">Price : {item.itemPrice}/-</h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  CartItems: state.CartItemsReducer.CartItems,
  login: state.LoginRegisterReducer.login,
});

export default connect(mapStateToProps, { totalCartItems })(OrderItems);
function useHistory() {
  throw new Error("Function not implemented.");
}
