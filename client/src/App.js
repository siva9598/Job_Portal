import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Applications from "./Pages/Applications";
import ApplyForJob from "./Pages/ApplyForJob";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/applications" exact component={Applications} />
        <Route path="/job/apply" exact component={ApplyForJob} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
