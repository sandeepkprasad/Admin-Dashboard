import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import dashboardContext from "../Context/dashboardContext";

const Home = () => {
  let navigate = useNavigate();
  const { products, getAllProducts } = useContext(dashboardContext);
  let quantity = products.length;

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <section>
      <div className="container py-3">
        <div className="section-title text-light mb-4">
          <h3 className="fw-bold">Overview</h3>
        </div>
        <div className="row justify-content-start">
          <div className="col-5 div col-md-4">
            <div className="overview-item d-flex bg-success rounded py-3">
              <div className="icon bg-black py-2 px-3 rounded-4 mx-3">
                <h3 className="text-success">
                  <MdOutlineProductionQuantityLimits />
                </h3>
              </div>
              <div className="text text-black">
                <p className="fw-bold mb-0 mt-1">Total Products</p>
                <h4 className="fw-bold mb-0 mt-1">{quantity}</h4>
              </div>
            </div>
          </div>
          <div className="col-5 div col-md-4">
            <div className="overview-item d-flex bg-info  rounded py-3">
              <div className="icon bg-black py-2 px-3 rounded-4 mx-3">
                <h3 className="text-info">
                  <FaUsers />
                </h3>
              </div>
              <div className="text text-black">
                <p className="fw-bold mb-0 mt-1">Total Users</p>
                <h4 className="fw-bold mb-0 mt-1">499</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
