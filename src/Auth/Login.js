import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardContext from "../Context/dashboardContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [cred, setCred] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  const { showAlert } = useContext(dashboardContext);

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "https://storebackend-l0fx.onrender.com/admin/login";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: cred.username,
        password: cred.password,
      }),
    });

    const json = await response.json();

    if (json.success) {
      localStorage.setItem("token", json.jwtData);
      showAlert("success", "Logged in successfully");
      navigate("/");
      window.location.reload();
    } else {
      showAlert("danger", "Invalid username or password");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center py-3 text-light">
          <h3 className="fs-3 fw-bold">Login Admin Account</h3>
        </div>
        <div
          className="col-md-8 border border-danger-subtle p-5 rounded bg-light"
          style={{ width: "24rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label htmlFor="username" className="form-label fw-bold">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={cred.username}
                aria-describedby="emailHelp"
                placeholder="Enter your username"
                onChange={handleChange}
                minLength={3}
                required
              />
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                value={cred.password}
                placeholder="Enter your password"
                onChange={handleChange}
                minLength={6}
                required
              />
            </div>
            <button type="submit" class="btn btn-dark">
              Login
            </button>
          </form>
        </div>
        <div className="py-4 text-center">
          <p className="text-light">
            Don't have an account?{" "}
            <Link className="text-decoration-none" to="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
