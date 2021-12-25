import React from "react";
// import Menu from "./Menu";
import "./Base.css";
//import Navbar from "./Navbar";
const Base = ({ title = "My Title", children }) => {
  return (
    <div className="base-container">
      {/* <div className="base-container" style={{ height: "100vh", width: "100vw" }}></div> */}
      <div className="children">{children}</div>
    </div>
  );
};
export default Base;
