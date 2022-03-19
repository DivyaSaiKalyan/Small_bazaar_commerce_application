import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import LoginPage from "./Components/LoginPage";
import Register from "./Components/Register";
import AddItem from "./Components/AddItem";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartItems" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
