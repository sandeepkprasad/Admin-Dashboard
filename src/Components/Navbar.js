import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import dashboardContext from "../Context/dashboardContext";

const Navbar = () => {
  const { getAdmin, admin } = useContext(dashboardContext);

  useEffect(() => {
    getAdmin();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-dark fixed-top"
        style={{ width: "80%" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="vr text-light ms-3"></div>
            <Link className="text-decoration-none" to="/">
              <div className="admin ms-3 me-5">
                <h6 className="text-light mb-0">
                  {admin.name ? admin.name : "Admin Name"}
                </h6>
                <p className="fw-bold text-dark mb-0">Admin</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
