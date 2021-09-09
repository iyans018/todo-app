import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoImage from "../assets/img/undraw_To_do_list_re_9nt7.svg";
import validate from "./validateLogin";

// Bootstrap Component
import {
  Form,
  FormGroup,
  FormLabel as Label,
  FormControl as Control,
  FormText as Text,
  Button,
} from "react-bootstrap";

// Redux
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLogin) {
      alert("Login succesfully")
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
    setIsLogin(false)
  }, [isLogin])
  
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

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

  return (
    <div className="login container-local">
      <div className="wrapping">
        <Form className="form" onSubmit={handleSubmit}>
        <div className="form-title d-flex align-items-center">
            <h4 className="fw-bold">TODO App</h4>
            <h5>Sign In</h5>
          </div>
          <FormGroup className="mb-3" controlId="email">
            <Label>Email</Label>
            <Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter email address"
            ></Control>
            {errors.email && (
              <Text className="text-danger">{errors.email}</Text>
            )}
          </FormGroup>
          <FormGroup className="mb-3" controlId="password">
            <Label>Password</Label>
            <Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Type your password"
            ></Control>

            {errors.password && (
              <Text className="text-danger">{errors.password}</Text>
            )}
          </FormGroup>
          <span className="form-subtext">
            <Link className="fw-bold" to="/forgot-password">Forgot password?</Link>
          </span>
          <div className="w-100 mt-3">
            <Button type="submit" variant="danger" className="w-100 mb-3">
              Sign In
            </Button>
          </div>
          <div className="w-100 text-center">
            <span className="form-subtext text-center">
              Don't have account?{" "}
              <Link className="fw-bold" to="/register">
              Sign Up
              </Link>
            </span>
          </div>
        </Form>
        <div className="information">
          <img src={TodoImage} alt="todo list" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
