import React, { useEffect, useState, Fragment } from "react";
import TopNav from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  createUserProfile,
  getsUserProfile,
  patchUserProfile,
} from "../Helpers/ProfileHelper";
const Profile = () => {
  const onSubmit = (data) => {
    !userInfo.id
      ? createUserProfile(data).then((data) => {
          if (data.status === 201) {
            toast.success("user profile created successfully");
          } else {
            toast.error("user profile creation failed");
          }
        })
      : patchUserProfile(data).then(() => {
          if (data.status === 200) {
            toast.success("user profile updated successfully");
          } else {
            toast.error("user profile updation failed");
          }
        });
  };
  // const onSubmit = (data) => {
  //   let response = !userInfo.id
  //     ? createUserProfile(data)
  //     : patchUserProfile(data);
  //   if (response.status === 201) {
  //     toast.success("user profile created successfully");
  //   } else if (response.status === 200) {
  //     toast.success("user profile updated successfully");
  //   } else {
  //     console.log(response);
  //     toast.error(response.msg);
  //   }
  // };
  const { register, errors, handleSubmit } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(false);
  const getUserProfileInfo = () => {
    getsUserProfile().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setUserInfo(data);
      }
    });
  };

  useEffect(() => {
    getUserProfileInfo();
  }, []);
  return (
    // <div>
    //   <TopNav />
    //   <h1>Profile</h1>
    //   {!userInfo.id ? (
    //     <div>
    //       <h1>create profile</h1>
    //     </div>
    //   ) : (
    //     <div>
    //       <h1>update profile</h1>

    //     </div>
    //   )}
    // </div>
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            User Profile
          </h2>
        </div>
        <Toaster />
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              <label htmlFor="current_location">Current Location</label>
              <input
                {...register("current_location")}
                placeholder={userInfo.current_location}
              />
              <label htmlFor="current_role">Current Role</label>
              <input
                {...register("current_role")}
                placeholder={userInfo.current_role}
              />
              <label htmlFor="current_salary">Current Salary</label>
              <input
                {...register("current_salary")}
                placeholder={userInfo.current_salary}
              />
              <label htmlFor="total_work_experience_in_years">
                Total Work Experience In Years
              </label>
              <input
                {...register("total_work_experience_in_years")}
                placeholder={userInfo.total_work_experience_in_years}
              />
              <label htmlFor="resume_link">Resume Link</label>
              <input
                {...register("resume_link")}
                placeholder={userInfo.resume_link}
              />
              <label htmlFor="linkedIn_link">LinkedIn Link</label>
              <input
                {...register("linkedIn_link")}
                placeholder={userInfo.linkedIn_link}
              />
              <label htmlFor="github_link">Github Link</label>
              <input
                {...register("github_link")}
                placeholder={userInfo.github_link}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
