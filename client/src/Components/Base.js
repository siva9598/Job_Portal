import React from "react";
// import Menu from "./Menu";
import "./Base.css";
//import Navbar from "./Navbar";
const Base = ({ title = "My Title", children }) => {
  return (
    <div className="base-container">
      <div>{children}</div>
    </div>
  );
};
export default Base;
