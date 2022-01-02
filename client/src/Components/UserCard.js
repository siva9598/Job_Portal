import React, { useState, useEffect } from "react";
import companyLogo from "./company_logo.jpeg";
import "./JobCard.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { patchApplicationStatus } from "../Helpers/JobHelper";
import "./UserCard.css";
const UserCard = (props) => {
  const shortlistApplication = () => {
    patchApplicationStatus({
      application_id: props.application_id,
      status: "Shortlisted",
    }).then((data) => {
      if (data.status === 200) {
        //setShortlistedAlready(1);
        setJobStatus("Shortlisted");
      }
    });
  };
  const rejectApplication = () => {
    patchApplicationStatus({
      application_id: props.application_id,
      status: "Rejected",
    }).then((data) => {
      if (data.status === 200) {
        //setRejectedAlready(1);
        setJobStatus("Rejected");
      }
    });
  };

  const [shortlistedAlready, setShortlistedAlready] = useState(0);
  const [rejectedAlready, setRejectedAlready] = useState(0);
  const [JobStatus, setJobStatus] = useState(props.status);
  // const [jobStatus, setJobStatus] = useState(props.status);
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
        {/* {props.status === "Applied" ? ( */}
        {JobStatus === "Applied" ? (
          <div>
            <Button
              className="btn btn-primary apply-button"
              onClick={shortlistApplication}
            >
              shortlist
            </Button>
            <Button
              className="btn btn-danger apply-button"
              onClick={rejectApplication}
            >
              reject
            </Button>
          </div>
        ) : // ) : shortlistedAlready === 1 ? (
        JobStatus === "Shortlisted" ? (
          <h6>Shortlisted</h6>
        ) : // ) : props.status === "Rejected" ? (
        JobStatus === "Rejected" ? (
          <h6>Rejected</h6>
        ) : (
          <h6>default</h6>
        )}
      </div>
    </div>
  );
};

export default UserCard;
