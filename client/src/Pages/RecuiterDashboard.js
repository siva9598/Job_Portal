import React, { useState, useEffect } from "react";
import { recuiterSelector } from "../Features/RecuiterSlice";
import TopNav from "../Components/Navbar";
import Base from "../Components/Base";
import JobCard from "../Components/JobCard";
import { useSelector, useDispatch } from "react-redux";
import JobResultsBanner from "../Components/JobResultsBanner";
import { getAllJobsOfRecuiter } from "../Helpers/JobHelper";
import { Link } from "react-router-dom";
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
      <div
        className="add-new-job"
        style={{ margin: "auto", width: "15%", "margin-bottom": "20px" }}
      >
        <Link
          to="/recuiter/add/job"
          className="add-new-job"
          style={{
            "text-align": "center",
            "margin-bottom": "15px",
            "border-radius": "5px",
            // "background-color": "darkblue",
            background: `linear-gradient(
              to right bottom,
              rgba(255, 255, 255, 0.7),
              rgba(255, 255, 255, 0.3)
            )`,
            color: "red",
            padding: "5px 5px 5px 5px",
          }}
        >
          Add New Job
        </Link>
      </div>
      <div className="row">
        {recuiterJobs.map((job, index) => {
          return (
            <JobCard
              job_id={recuiterJobs[index].id}
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
