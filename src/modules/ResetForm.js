import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ResetForgot.css";

// Bootstrap Component
import {
  Form,
  FormGroup,
  FormControl as Control,
  Button,
} from "react-bootstrap";

function ResetForm() {
  const history = useHistory();
  const navigateTo = (to) => {
    history.push(to);
  };

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleChangePassword = async (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirm = async (e) => {
    setConfirm(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (password === confirm) {
      if (password.length < 6) {
        alert("Password must be more than 6 characters!");
        return;
      }
      alert("Successfully reset your password!");
      navigateTo("/login");
    } else {
      alert("Password and confirm password must be the same");
    }
  }

  return (
    <div className="resetforgot container">
      <div className="row justify-content-center">
        <div className="col-md-4 p-4 center">
          <h4 className="fw-bold">Reset Password</h4>
          <Form className="mt-3" onSubmit={handleSubmit}>
            <FormGroup className="mb-3" controlId="password">
              <Control
                type="password"
                placeholder="Password"
                onChange={handleChangePassword}
              ></Control>
            </FormGroup>
            <FormGroup controlId="confirm">
              <Control
                type="password"
                placeholder="Confirm Password"
                onChange={handleChangeConfirm}
              ></Control>
            </FormGroup>
            <div className="mt-3 mb-1">
              <Button type="submit" variant="danger" className="w-100">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ResetForm;
