import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signupUser, userSelector, clearState } from "../Features/UserSlice";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import Base from "../Components/Base";
import "./user-form.css";
const Signup = ({}) => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push("/");
    }
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);
  return (
    <Base title="SignUp Page">
      <div className="main-box">
        <div className="form-heading-box">
          <h2 className="form-heading">Sign Up to your account</h2>
        </div>
        <div className="form-outer py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="user-form space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <label htmlFor="username">Username</label>
            <input {...register("username")} className="form-control" />
            <label htmlFor="email">Email</label>
            <input {...register("email")} className="form-control" />
            <label htmlFor="phone_number">Phone number</label>
            <input {...register("phone_number")} className="form-control" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              className="form-control"
            />
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
          <div className="form-redirect">
            Or
            <Link to="signin" className="alt-button">
              Login
            </Link>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default Signup;
