import React from "react";
import TopNav from "../Components/Navbar";
import Base from "../Components/Base";
import JobCard from "../Components/JobCard";
import JobResultsBanner from "../Components/JobResultsBanner";
const Home = () => {
  return (
    <div>
      <TopNav />
      <Base title="Homepage">
        <JobResultsBanner />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
        <JobCard position="SDET" location="Banglaore" no_of_applicants="1" />
      </Base>
    </div>
  );
};

export default Home;
