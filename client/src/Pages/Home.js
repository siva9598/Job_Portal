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

  const x = {
    id: 1,
    status: "Open",
    location: "Bangalore",
    position: "SDET",
    requirements: "Should have atleast 2 years of prior QA work experience",
    no_of_applicants: 0,
    createdAt: "2021-12-11T14:47:37.000Z",
    updatedAt: "2021-12-11T14:47:37.000Z",
    recuiterId: 1,
  };
  return (
    <div>
      <TopNav />
      <Base title="Homepage">
        <JobResultsBanner />
        {/* <JobCard position="SDET1" location="Banglaore" no_of_applicants="1" />
        <JobCard
          position={jobs[0].position}
          location="Banglaore"
          no_of_applicants="1"
        /> */}

        <div className="row">
          {jobs.map((job, index) => {
            return (
              <JobCard
                job_id={index}
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
