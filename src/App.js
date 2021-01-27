import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ForgotPassword from "./components/forgot-password/ForgotPassword";
import PrivateRoute from "./components/private-route/PrivateRoute";
import UpdateProfile from "./components/update-profile/UpdateProfile";

import { AuthProvider } from "./context/AuthContext";

import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
