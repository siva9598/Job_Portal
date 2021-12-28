import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllUserProfilesForJob } from "../Helpers/JobHelper";
import UserCard from "../Components/UserCard";
import Base from "../Components/Base";
const ApplicantsOfJob = () => {
  const [applicants, setApplicants] = useState([]);
  //   const temp_a = [1,2,3]
  //   const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // let length = fruits.length;
  let is_empty_list = false;
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
      {applicants.length === 0 ? (
        <div
          styles={{
            "background-color": `linear-gradient(to right top, #65dfc9, #6cdbeb)`,
          }}
        >
          <h1
            style={{
              "text-align": "center",
            }}
          >
            No applicants for job yet
          </h1>
        </div>
      ) : (
        <Base title="Applicants Page">
          <h1>Applicants</h1>
          <div className="row">
            {applicants.map((applicant, index) => {
              return (
                <UserCard
                  name={applicants[index].user.name}
                  current_salary={
                    applicants[index].user.user_profile.current_salary
                  }
                  current_role={
                    applicants[index].user.user_profile.current_role
                  }
                  total_work_experience_in_years={
                    applicants[index].user.user_profile
                      .total_work_experience_in_years
                  }
                  resume_link={applicants[index].user.user_profile.resume_link}
                  github_link={applicants[index].user.user_profile.github_link}
                  status={applicants[index].status}
                />
              );
            })}
          </div>
        </Base>
      )}
    </div>
  );
};

export default ApplicantsOfJob;
