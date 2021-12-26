import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  createRecuiter,
  recuiterSelector,
  clearState,
} from "../Features/RecuiterSlice";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import Base from "../Components/Base";
import "./user-form.css";
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
      toast.success("Company Attached Successfully");
      history.push("/recuiter/dashboard");
    }
  }, [isError, isSuccess]);
  return (
    <Base title="Recuiter Add Company Page">
      <div className="main-box">
        <div className="form-heading-box">
          <h2 className="form-heading">Add you company details here</h2>
        </div>
        <div className="form-outer py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="user-form space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <label htmlFor="company_name">Company Name</label>
            <input {...register("company_name")} className="form-control" />
            <label htmlFor="company_email">Company Email</label>
            <input
              type="company_email"
              {...register("company_email")}
              className="form-control"
            />
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
          <Toaster />
          <div className="form-redirect">
            Or
            <Link to="signup" className="alt-button">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default RecuiterSignup;
