import React from "react";
import { useParams } from "react-router-dom";
const ApplyForJob = () => {
  let { job_id } = useParams();
  return (
    <div>
      <h1>apply for job</h1>
      <h2>{job_id}</h2>
    </div>
  );
};

export default ApplyForJob;
