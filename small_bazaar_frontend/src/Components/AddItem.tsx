import React, { useState } from "react";
import brandImage from "../brandImage.png";
import { IaddItem } from "./../Interface/register.interface";
import axios from "axios";

const AddItem: React.FC = () => {
  const [additem, setaddItem] = useState<IaddItem>({
    itemname: "",
    itemprice: "",
    itemcategory: "",
    itemurl: "",
  });

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setaddItem({ ...additem, [event.target.name]: event.target.value });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/items/createItem`, {
        itemName: additem.itemname,
        itemPrice: additem.itemprice,
        itemCategory: additem.itemcategory,
        itemUrl: additem.itemurl,
      })
      .then((res) => {
        alert("item add succesfully");
        console.log(res.data);
        setaddItem({
          itemname: "",
          itemprice: "",
          itemcategory: "",
          itemurl: "",
        });
      });
  };

  return (
    <div>
      <div className="bg-secondary p-3">
        <div className="container-fluid text-center">
          <img src={brandImage} alt="cartpic" width="70" height="64" />
          <span id="brandname">Small bazaar Shoping Application</span>
        </div>
      </div>
      <div className="container col-4 ">
        <h3 className="text-center mt-4">Add Item</h3>
        <form onSubmit={submitHandler}>
          <label>Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter item name"
            name="itemname"
            value={additem.itemname}
            onChange={changeHandler}
          />
          <label>Item Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter Item Price"
            name="itemprice"
            value={additem.itemprice}
            onChange={changeHandler}
          />
          <label>Item Category</label>
          <select
            className="form-select"
            name="itemcategory"
            onChange={changeHandler}
          >
            <option>Open this select menu</option>
            <option value="Electronics">Electronics</option>
            <option value="Men's Fashion">Men's Fashion</option>
            <option value="Ladies Fashion">Ladies Fashion</option>
            <option value="kitchen Items">kitchen Items</option>
            <option value="beauty products">beauty products</option>
          </select>
          <label>Item Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter Item Picture Url"
            name="itemurl"
            value={additem.itemurl}
            onChange={changeHandler}
          />
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-sm mt-2 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
