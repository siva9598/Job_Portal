import React from "react";
import TopNav from "../Components/Navbar";
import Base from "../Components/Base";
import JobCard from "../Components/JobCard";
import JobResultsBanner from "../Components/JobResultsBanner";
const Applications = () => {
  return (
    <div>
      <TopNav />
      <Base title="Aplications">
        <JobResultsBanner />
        <JobCard
          position="SDET"
          location="Banglaore"
          no_of_applicants="1"
          usecase="application_listing"
        />
      </Base>
    </div>
  );
};

export default Applications;
