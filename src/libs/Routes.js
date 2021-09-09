import React from "react";
import { Switch } from "react-router-dom";
import UnauthRoute from "./UnauthRoute";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";

// Pages
import UserDashboard from "../pages/UserDashboard";
import Registration from "../pages/Registration";
import Login from '../pages/Login'
import Reset from '../pages/Reset'
import Forgot from '../pages/Forgot'
import Admin from '../pages/Admin'

export const Routes = (props) => {
  return (
    <Switch>
      <UserRoute exact path="/" component={UserDashboard} />
      <UnauthRoute exact path="/register" component={Registration} />
      <UnauthRoute exact path="/login" component={Login} />
      <UnauthRoute exact path="/reset-password" component={Reset} />
      <UnauthRoute exact path="/forgot-password" component={Forgot} />
      <AdminRoute exact path="/admin" component={Admin} />
    </Switch>
  );
};
