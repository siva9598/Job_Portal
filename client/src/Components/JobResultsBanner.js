import React from "react";
import "./JobResultsBanner.css";
const JobResultsBanner = (props) => {
  const number_of_jobs_to_show = props.number_of_jobs || 0;
  return (
    <div className="banner">
      <h3>Found {number_of_jobs_to_show} Jobs that matched the criteria</h3>
    </div>
  );
};

export default JobResultsBanner;
