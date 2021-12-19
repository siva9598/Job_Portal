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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add a new job
        </h2>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {recuiter_id}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
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
            <button type="submit">Submit</button>
          </form>
          <Toaster />
          <div class="mt-6">
            <div class="relative">
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Or <Link to="signup"> Signup</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuiterAddJob;
