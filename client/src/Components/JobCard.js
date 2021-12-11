import React from "react";
import companyLogo from "./company_logo.jpeg";
import "./JobCard.css";
import { Button } from "react-bootstrap";
const JobCard = (props) => {
  return (
    <div className="job-card-exterior">
      <div className="job-card">
        <div className="job-logo">
          <img src={companyLogo} alt="company logo" height="90%" />
        </div>
        <div className="job-details">
          <h6>{props.position}</h6>
          <h6>{props.location}</h6>
          <h6>{props.no_of_applicants}</h6>
        </div>
        {props.usecase === "application_listing" ? (
          <h6>props.status</h6>
        ) : (
          <Button className="btn btn-primary apply-button">apply</Button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
