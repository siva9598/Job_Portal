import React, { useState, useEffect } from "react";
import companyLogo from "./company_logo.jpeg";
import "./JobCard.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { applyForJob } from "../Helpers/JobHelper";

const UserCard = (props) => {
  const [appliedAlready, setAppliedAlready] = useState(0);
  return (
    <div className="job-card-exterior">
      <div className="job-card">
        {/* <div className="job-logo">
          <img src={companyLogo} alt="company logo" height="90%" />
        </div> */}
        <div className="job-details">
          <h6>{props.name}</h6>
          <h6>{props.current_salary}</h6>
          <h6>{props.current_role}</h6>
          <h6>{props.total_work_experience_in_years}</h6>
          <h6>{props.resume_link}</h6>
          <h6>{props.github_link}</h6>
        </div>

        <h6>{props.status}</h6>
      </div>
    </div>
  );
};

export default UserCard;
