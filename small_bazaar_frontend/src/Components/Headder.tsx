import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brandImage from "../brandImage.png";
import { connect } from "react-redux";
import axios from "axios";
import { cartItemsLengthNumber } from "./../Actions/action";
import { createBrowserHistory } from "history";

const Headder: React.FC = (props: any) => {
  const { cartItemsLength, cartItemsLengthNumber, login } = props;
  const history = createBrowserHistory();
  const [length, setLength] = useState();
  const [finalLength, setFinalLength] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/items/getcartItemsByEmail/${login.email}`)
      .then((res) => {
        cartItemsLengthNumber(res.data.length);
        setLength(res.data.length);
      });
  }, [cartItemsLengthNumber, cartItemsLength, login.email]);
  useEffect(() => {
    if (cartItemsLength === length) {
      console.log(length);

      setFinalLength(length);
    } else {
      setFinalLength(cartItemsLength);
    }
  }, [cartItemsLength, length]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={brandImage} alt="cartpic" width="70" height="64" />
          <span id="brandname">Small bazaar Shoping Application</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <a className="nav-link" href="#">
              Contact Us
            </a>
            <Link to="/login" className="nav-link">
              Logout
            </Link>
          </div>
          <Link to="/cartItems">
            <button
              type="button"
              className="btn btn-sm-primary position-relative"
              style={{ marginLeft: "30%" }}
              // onClick={() => {
              //   history.push("/OrderItems");
              // }}
            >
              <img src={brandImage} alt="cartpic" width="40" height="34" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {finalLength}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: any) => ({
  cartItemsLength: state.CartItemsReducer.cartItemsLength,
  login: state.LoginRegisterReducer.login,
});

export default connect(mapStateToProps, { cartItemsLengthNumber })(Headder);
