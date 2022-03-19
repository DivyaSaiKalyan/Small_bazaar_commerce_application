import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AllItemsDisplay, setCartAddItem } from "./../Actions/action";

const Items: React.FC = (props: any) => {
  const {
    all_items_display,
    AllItemsDisplay,
    set_catagory,
    setCartAddItem,
    login,
  } = props;

  const [cloneData, setCloneData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/items/getall`).then((res) => {
      AllItemsDisplay(res.data);
    });
  }, [AllItemsDisplay]);

  useEffect(() => {
    if (set_catagory !== "All Items") {
      let specific = all_items_display.filter(
        (value: any) => value.itemCategory === set_catagory
      );
      setCloneData(specific);
    } else {
      setCloneData(all_items_display);
    }
  }, [all_items_display, set_catagory]);

  return (
    <div className="container">
      <div className="row">
        {cloneData.map((item: any) => (
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
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setCartAddItem(item, login.email)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  all_items_display: state.ItemsDisplayReducer.all_items_display,
  set_catagory: state.CatagoryReducer.set_catagory,
  login: state.LoginRegisterReducer.login,
});

export default connect(mapStateToProps, { AllItemsDisplay, setCartAddItem })(
  Items
);
