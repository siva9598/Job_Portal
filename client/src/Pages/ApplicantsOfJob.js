import React from "react";
import { useParams } from "react-router-dom";

const ApplicantsOfJob = () => {
  let { job_id } = useParams();
  return (
    <div>
      <h1>applicants</h1>
      <h2>{job_id}</h2>
    </div>
  );
};

export default ApplicantsOfJob;
