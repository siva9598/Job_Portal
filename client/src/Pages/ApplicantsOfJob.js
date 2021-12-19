import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllUserProfilesForJob } from "../Helpers/JobHelper";
import UserCard from "../Components/UserCard";

const ApplicantsOfJob = () => {
  const [applicants, setApplicants] = useState([]);
  let { job_id } = useParams();
  console.log(job_id);
  const fetchJobapplicants = () => {
    getAllUserProfilesForJob(job_id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setApplicants(data);
      }
    });
    //setApplicants(getAllUserProfilesForJob(job_id));
  };
  useEffect(() => {
    fetchJobapplicants();
    console.log(applicants);
  }, []);
  return (
    <div>
      <div className="row">
        {applicants.map((applicant, index) => {
          return (
            <UserCard
              name={applicants[index].user.name}
              current_salary={
                applicants[index].user.user_profile.current_salary
              }
              current_role={applicants[index].user.user_profile.current_role}
              total_work_experience_in_years={
                applicants[index].user.user_profile
                  .total_work_experience_in_years
              }
              resume_link={applicants[index].user.user_profile.resume_link}
              github_link={applicants[index].user.user_profile.github_link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ApplicantsOfJob;
