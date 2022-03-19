import React from "react";
import Headder from "./Headder";
import OrderItems from "./OrderItems";

const Cart: React.FC = () => {
  return (
    <div>
      <Headder />
      <OrderItems />
    </div>
  );
};

export default Cart;
