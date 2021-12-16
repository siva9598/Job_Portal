import React, { useState, useEffect } from "react";
import { recuiterSelector } from "../Features/RecuiterSlice";
import TopNav from "../Components/Navbar";
import Base from "../Components/Base";
import JobCard from "../Components/JobCard";
import { useSelector, useDispatch } from "react-redux";
import JobResultsBanner from "../Components/JobResultsBanner";
import { getAllJobsOfRecuiter } from "../Helpers/JobHelper";
const RecuiterDashboard = () => {
  const [recuiterJobs, setRecuiterJobs] = useState([]);
  const [error, setError] = useState(false);
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(recuiterSelector);
  const fetchAllJobsOfRecuiter = () => {
    getAllJobsOfRecuiter().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setRecuiterJobs(data);
      }
    });
  };

  useEffect(() => {
    fetchAllJobsOfRecuiter();
  }, []);

  return (
    <Base title="Homepage">
      <JobResultsBanner />
      <div className="row">
        {recuiterJobs.map((job, index) => {
          return (
            <JobCard
              job_id={index}
              position={recuiterJobs[index].position}
              location={recuiterJobs[index].location}
              no_of_applicants={recuiterJobs[index].no_of_applicants}
              usecase="recuiter_dashboard_listing"
            />
          );
        })}
      </div>
    </Base>
  );
};

export default RecuiterDashboard;
