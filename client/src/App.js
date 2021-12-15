import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Applications from "./Pages/Applications";
import ApplyForJob from "./Pages/ApplyForJob";
import RecuiterDashboard from "./Pages/RecuiterDashboard";
import RecuiterSignup from "./Pages/RecuiterSignup";
import RecuiterAddJob from "./Pages/RecuiterAddJob";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/applications" exact component={Applications} />
          <Route path="/job/apply" exact component={ApplyForJob} />
          <Route
            path="/recuiter/dashboard"
            exact
            component={RecuiterDashboard}
          />
          <Route path="/recuiter/signup" exact component={RecuiterSignup} />
          <Route path="/recuiter/add/job" exact component={RecuiterAddJob} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
