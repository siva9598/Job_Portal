import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  createRecuiter,
  recuiterSelector,
  clearState,
} from "../Features/RecuiterSlice";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
const RecuiterSignup = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(recuiterSelector);
  const onSubmit = (data) => {
    dispatch(createRecuiter(data));
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      history.push("/recuiter/dashboard");
    }
  }, [isError, isSuccess]);
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h3></h3>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Attach your company details here
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              <label htmlFor="company_name">Company Name</label>
              <input {...register("company_name")} />
              <label htmlFor="company_email">Company Email</label>
              <input type="company_email" {...register("company_email")} />
              <button type="submit">Submit</button>
            </form>
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
    </Fragment>
  );
};
export default RecuiterSignup;
