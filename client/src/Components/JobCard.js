import React from "react";
import companyLogo from "./company_logo.jpeg";
import "./JobCard.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const JobCard = (props) => {
  console.log(props.id);
  let history = useHistory();
  let path_to_redirect = `/`;
  const applyForJob = () => {
    path_to_redirect = `/job/${props.job_id}/apply_for_job`;
    history.push(path_to_redirect);
  };
  const getApplicantsOfJob = () => {
    console.log(props.job_id);
    path_to_redirect = `/job/${props.job_id}/applicants`;
    history.push(path_to_redirect);
  };
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
        ) : props.usecase === "user_listing" ? (
          <Button
            className="btn btn-primary apply-button"
            onClick={applyForJob}
          >
            Apply
          </Button>
        ) : props.usecase === "recuiter_dashboard_listing" ? (
          <Button
            className="btn btn-primary apply-button"
            onClick={getApplicantsOfJob}
          >
            Get Applicants
          </Button>
        ) : (
          <Button>default</Button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
