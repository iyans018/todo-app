import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!user ? <Redirect to="/login" /> : user.role === "user" ? <Component {...props} /> : <Redirect to="/admin" />)}
  />
);

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(UserRoute);
