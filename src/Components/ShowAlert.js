import React from "react";
import { useContext } from "react";
import dashboardContext from "../Context/dashboardContext";

const ShowAlert = () => {
  const { alert } = useContext(dashboardContext);
  return (
    <div
      className="container fixed-top"
      style={{ width: "24rem", marginTop: "5rem" }}
    >
      <div className={`alert alert-${alert.type} text-center`} role="alert">
        {alert.message}
      </div>
    </div>
  );
};

export default ShowAlert;
