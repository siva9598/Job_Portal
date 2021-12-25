import React from "react";
import "./JobResultsBanner.css";
const JobResultsBanner = (props) => {
  return (
    <div className="banner">
      <h3>Found {props.number_of_jobs} Jobs that matched the criteria</h3>
    </div>
  );
};

export default JobResultsBanner;
