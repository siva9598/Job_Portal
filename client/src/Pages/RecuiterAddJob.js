import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  recuiterSelector,
  fetchRecuiterId,
  clearState,
} from "../Features/RecuiterSlice";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { createJob } from "../Helpers/JobHelper";
import Base from "../Components/Base";
import "./user-form.css";
const RecuiterAddJob = () => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data = { ...data, recuiter_id: recuiter_id };
    createJob(data).then(toast("New job added"));
  };

  useEffect(() => {
    dispatch(clearState());
    dispatch(fetchRecuiterId());
  }, []);
  const { recuiter_id } = useSelector(recuiterSelector);
  return (
    <Base title="Recuiter Add Job Page">
      <div className="main-box">
        <div className="form-heading-box">
          <h2 className="form-heading">Add New Job</h2>
        </div>
        <div className="form-outer py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="user-form space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <label htmlFor="location">Location</label>
            <input {...register("location")} className="form-control" />
            <label htmlFor="position">Position</label>
            <input {...register("position")} className="form-control" />
            <label htmlFor="requirements">Requirements</label>
            <textarea {...register("requirements")} className="form-control" />
            {/* <input {...register("requirements")} /> */}
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </Base>
  );
};

export default RecuiterAddJob;
