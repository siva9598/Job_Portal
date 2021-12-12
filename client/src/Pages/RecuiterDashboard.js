import React from "react";
import { userSelector } from "../Features/UserSlice";
const RecuiterDashboard = () => {
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  return (
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
              position={jobs[index].position}
              location={jobs[index].location}
              no_of_applicants={jobs[index].no_of_applicants}
            />
          );
        })}
      </div>
    </Base>
  );
};

export default RecuiterDashboard;
