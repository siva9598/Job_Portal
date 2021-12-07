import React, { useState } from "react";
import Base from "../Components/Base";
import { Link } from "react-router-dom";
import { signup } from "../Helpers/AuthHelper";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    success: false,
    error: "",
  });
  const { name, email, phone_number, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, phone_number })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            phone_number: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log("error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Phone Number</label>
              <input
                className="form-control"
                onChange={handleChange("phone_number")}
                type="text"
                value={phone_number}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New account was created successfully.Please{" "}
        <Link to="/signin">Login here</Link>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <Base title="Sign up page">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default SignUp;
