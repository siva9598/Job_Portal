import React, { useState, useEffect } from "react";
import TopNav from "../Components/Navbar";
import Base from "../Components/Base";
import JobCard from "../Components/JobCard";
import JobResultsBanner from "../Components/JobResultsBanner";
import { getAllUserApplications } from "../Helpers/JobHelper";
const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(false);
  const fetchAllApplications = () => {
    getAllUserApplications().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setApplications(data);
      }
    });
  };

  useEffect(() => {
    fetchAllApplications();
  }, []);
  return (
    <div>
      <TopNav />
      <Base title="Homepage">
        <JobResultsBanner />

        <div className="row">
          {applications.map((application, index) => {
            return (
              <JobCard
                job_id={applications[index].jobId}
                // position={applications[index].position}
                // location={applications[index].location}
                status={applications[index].status}
                usecase="application_listing"
              />
            );
          })}
        </div>
      </Base>
    </div>
  );
};

export default Applications;
