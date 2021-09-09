import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoImage from "../assets/img/undraw_To_do_list_re_9nt7.svg";
import validate from "./validateLogin";

// Redux
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsLogin(true)
  };

  if (Object.keys(errors).length === 0 && isLogin) {
    alert("Logn succesfully")
    if (values.email === "admin@admin.com") {
      dispatch(
        loginUser(
          {
            ...values,
            role: "admin",
          },
          history
        )
      );
    } else {
      dispatch(
        loginUser(
          {
            ...values,
            role: "user",
          },
          history
        )
      );
    }
  }

  return (
    <div className="login container-local">
      <div className="wrapping">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <h3>TODO List App</h3>
            <h3>Sign In</h3>
          </div>
          <div className="form-wrap mb-2">
            <label className="mb-1" htmlFor="email">
              Email address
            </label>
            <input
              className="form-input"
              type="text"
              name="email"
              placeholder="Enter email address"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-error">{errors.email}</small>
            )}
          </div>
          <div className="form-wrap mb-3">
            <label className="mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Type your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-error">{errors.password}</small>
            )}
          </div>
          <Link to="/forgot-password">Forgot password?</Link>
          <button className="btn1 mt-3 mb-3" type="submit">
            Sign In
          </button>
          <p className="text-center">
            Don't have account? <Link to="/register">Sign Up</Link>
          </p>
        </Form>
        <div className="information">
          <img src={TodoImage} alt="todo list" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
