import React from "react";
import Headder from "./Headder";
import Category from "./Category";
import Items from "./Items";

const Home: React.FC = () => {
  return (
    <div>
      <Headder />
      <Category />
      <Items />
    </div>
  );
};

export default Home;
