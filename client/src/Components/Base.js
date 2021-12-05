import React from "react";
// import Menu from "./Menu";
import "./Base.css";
import Navbar from "./Navbar";
const Base = ({ title = "My Title", children }) => {
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default Base;
