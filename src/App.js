import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardState from "./Context/DashboardState";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import AllProducts from "./Components/AllProducts";
import AddProduct from "./Components/AddProduct";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ShowAlert from "./Components/ShowAlert";
import Payment from "./Components/Payment";
import Order from "./Components/Order";
import ManageUsers from "./Components/ManageUsers";

const App = () => {
  return (
    <DashboardState>
      <Router>
        <Navbar />
        <ShowAlert />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/users" element={<ManageUsers />} />
        </Routes>
      </Router>
    </DashboardState>
  );
};

export default App;
