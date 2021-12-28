import React, { useState, useEffect } from "react";
import companyLogo from "./company_logo.jpeg";
import "./JobCard.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { applyForJob } from "../Helpers/JobHelper";
import "./UserCard.css";
const UserCard = (props) => {
  const [appliedAlready, setAppliedAlready] = useState(0);
  return (
    <div className="user-card-exterior">
      <div className="user-card">
        <div className="user-details">
          <h6>Name: {props.name}</h6>
          <h6>Salary {props.current_salary}</h6>
          <h6>Role: {props.current_role}</h6>
          <h6>Total work exp: {props.total_work_experience_in_years}</h6>
          <h6> Resume: {props.resume_link}</h6>
          <h6>Github: {props.github_link}</h6>
        </div>
        <Button
          className="btn btn-primary apply-button"
          //   onClick={applyJobAsUser}
        >
          shortlist
        </Button>
        <Button
          className="btn btn-primary apply-button"
          //   onClick={applyJobAsUser}
        >
          reject
        </Button>
        {/* <h6>{props.status}</h6> */}
      </div>
    </div>
  );
};

export default UserCard;
