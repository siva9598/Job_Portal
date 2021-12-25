import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userSelector, clearState } from "../Features/UserSlice";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import Base from "../Components/Base";
import "./user-form.css";
const Signin = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(loginUser(data));
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
      history.push("/");
    }
  }, [isError, isSuccess]);
  return (
    <Base title="SignIn Page">
      {/* <Fragment className="bg-white"> */}
      <div className="main-box">
        <div className="form-heading-box">
          <h2 className="form-heading">Sign in to your account</h2>
        </div>
        {/* <div className="form-outer"> */}
        {/* <div className=" form-outer bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"> */}
        <div className="form-outer py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="user-form space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <label htmlFor="email">Email</label>
            <input {...register("email")} className="form-control" />
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
            <Link to="signup" className="alt-button">
              Signup
            </Link>
          </div>
        </div>
      </div>
      {/* </Fragment> */}
    </Base>
  );
};
export default Signin;
