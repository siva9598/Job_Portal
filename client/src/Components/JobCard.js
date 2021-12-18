import React, { useState, useEffect } from "react";
import companyLogo from "./company_logo.jpeg";
import "./JobCard.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { applyForJob } from "../Helpers/JobHelper";
const JobCard = (props) => {
  const [appliedAlready, setAppliedAlready] = useState(0);
  console.log(props.usecase);
  let history = useHistory();
  let path_to_redirect = `/`;
  const applyJobAsUser = () => {
    console.log(`job id : ${props.job_id}`);
    applyForJob({ job_id: props.job_id }).then((data) => {
      if (data.status === 200) {
        setAppliedAlready(1);
      }
    });
    // path_to_redirect = `/job/${props.job_id}/apply_for_job`;
    // history.push(path_to_redirect);
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
          appliedAlready ? (
            <p>Applied</p>
          ) : (
            <Button
              className="btn btn-primary apply-button"
              onClick={applyJobAsUser}
            >
              Apply
            </Button>
          )
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
