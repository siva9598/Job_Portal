import React, { useState, useEffect } from "react";
import TopNav from "../Components/Navbar";
import Base from "../Components/Base";
import JobCard from "../Components/JobCard";
import JobResultsBanner from "../Components/JobResultsBanner";
import { getAllJobs } from "../Helpers/JobHelper";
const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  const fetchAllJobs = () => {
    getAllJobs().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setJobs(data);
      }
    });
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <div>
      <TopNav />
      <Base title="Homepage">
        <JobResultsBanner number_of_jobs={jobs.length} />

        <div className="row">
          {jobs.map((job, index) => {
            return (
              <JobCard
                job_id={jobs[index].id}
                position={jobs[index].position}
                location={jobs[index].location}
                no_of_applicants={jobs[index].no_of_applicants}
                usecase="user_listing"
              />
            );
          })}
        </div>
      </Base>
    </div>
  );
};

export default Home;
