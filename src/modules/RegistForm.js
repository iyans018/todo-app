import React, { useState, useEffect } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";

// Bootstrap Component
import {
  Form,
  FormGroup,
  FormLabel as Label,
  FormControl as Control,
  FormText as Text,
  Button,
} from "react-bootstrap";


import "./RegistForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoImage from "../assets/img/undraw_To_do_list_re_9nt7.svg";
import validate from "./validateRegistration";

const RegistForm = () => {
  const history = useHistory()

  const [isSubmited, setIsSubmited] = useState(false);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmited) {
      alert("User has been created");
      history.push("/login")
    }
    setIsSubmited(false)
  }, [isSubmited])

  const [values, setValue] = useState({
    email: "",
    password: "",
    password2: "",
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
    setIsSubmited(true);
  };

  return (
    <div className="register container-local">
      <div className="wrapping">
        <Form className="form" onSubmit={handleSubmit}>
          <div className="form-title d-flex align-items-center">
            <h4 className="fw-bold">TODO App</h4>
            <h5>Sign Up</h5>
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
          <FormGroup className="mb-4" controlId="password2">
            <Label>Confirm Password</Label>
            <Control
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
              placeholder="Re-type your password"
            ></Control>

            {errors.password2 && (
              <Text className="text-danger">{errors.password2}</Text>
            )}
          </FormGroup>
          <div className="w-100">
            <Button type="submit" variant="danger" className="w-100 mb-3">
              Sign Up
            </Button>
          </div>
          <div className="w-100 text-center">
            <span className="form-subtext text-center">
              Already have account?{" "}
              <Link className="fw-bold" to="/login">
                Sign In
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

export default RegistForm;
