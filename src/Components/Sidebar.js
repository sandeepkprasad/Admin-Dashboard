import React from "react";
import { Link } from "react-router-dom";
import { RiAppsFill, RiLogoutBoxRFill, RiLoginBoxFill } from "react-icons/ri";
import {
  MdPayment,
  MdAddCircle,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { HiShoppingBag, HiUsers } from "react-icons/hi";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <section>
      <div
        className="fixed-top bg-black border-end border-dark vh-100"
        style={{ width: "20%" }}
      >
        <div className="row">
          <div className="col">
            <div className="sidebar-brand mt-3 ms-4">
              <Link className="text-decoration-none" to="/">
                <h5 className="fw-bold text-danger">Admin Dashboard</h5>
              </Link>
            </div>
            <div className="category my-5 ms-4">
              <div className="category-title">
                <p className="fw-bold text-muted">ACCOUNT</p>
              </div>
              <div className="category-items">
                <div className="item mb-3">
                  <Link className="link text-decoration-none" to="/">
                    <RiAppsFill className="me-2 mb-1" />
                    Overview
                  </Link>
                </div>
                <div className="item mb-3">
                  <Link className="link text-decoration-none" to="/payment">
                    <MdPayment className="me-2 mb-1" />
                    Payment
                  </Link>
                </div>
                <div className="item mb-3">
                  <Link className="link text-decoration-none" to="/order">
                    <HiShoppingBag className="me-2 mb-1" />
                    Order
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="category mt-2 mb-5 ms-4">
              <div className="category-title">
                <p className="fw-bold text-muted">PRODUCT</p>
              </div>
              <div className="category-items">
                <div className="item mb-3">
                  <Link className="link text-decoration-none" to="/addproduct">
                    <MdAddCircle className="me-2 mb-1" />
                    Add New
                  </Link>
                </div>
                <div className="item mb-3">
                  <Link className="link text-decoration-none" to="/allproducts">
                    <MdOutlineProductionQuantityLimits className="me-2 mb-1" />
                    My Products
                  </Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="category mt-2 mb-5 ms-4">
              <div className="category-title">
                <p className="fw-bold text-muted">ADMIN</p>
              </div>
              <div className="category-items">
                <div className="item mb-3">
                  <Link className="link text-decoration-none" to="/users">
                    <HiUsers className="me-2 mb-1" />
                    Manage Users
                  </Link>
                </div>
                <div className="item mb-3">
                  {localStorage.getItem("token") ? (
                    <Link
                      className="link text-decoration-none"
                      to="/login"
                      onClick={handleLogout}
                    >
                      <RiLogoutBoxRFill className="me-2 mb-1" />
                      Logout
                    </Link>
                  ) : (
                    <Link className="link text-decoration-none" to="/login">
                      <RiLoginBoxFill className="me-2 mb-1" />
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
