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
        <div className="job-details">
          <h6>Name: {props.name}</h6>
          <h6>salary{props.current_salary}</h6>
          <h6>role {props.current_role}</h6>
          <h6>total work exp{props.total_work_experience_in_years}</h6>
          <h6> resume: {props.resume_link}</h6>
          <h6>github {props.github_link}</h6>
        </div>

        <h6>{props.status}</h6>
      </div>
    </div>
  );
};

export default UserCard;
