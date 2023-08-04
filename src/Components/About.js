import React from "react";

const About = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card text-light bg-black border rounded">
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <p className="card-text">
            Admin Dashboard is a Dashboard (CRUD) web application. It is
            developed using MERN Stack Technology as a personal project.
          </p>
          <p class="card-text">
            <small class="text-light">Developed by Sandeep Kumar</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
