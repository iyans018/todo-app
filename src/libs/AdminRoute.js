import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AdminRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!user ? <Redirect to="/login" /> : user.role === "admin" ? <Component {...props} /> : <Redirect to="/admin" />)}
  />
);

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(AdminRoute);
