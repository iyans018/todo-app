import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";

// Bootstrap Component
import {
  Form,
  FormGroup,
  FormControl as Control,
  FormText as Text,
  Button,
} from "react-bootstrap";

function ForgotForm() {
  const history = useHistory();
  const navigateTo = (to) => {
    history.push(to);
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChangeEmail = async (e) => {
    setEmail(e.target.value);
    await validateEmail(email);
  };

  const validateEmail = async (email) => {
    if (!validator.isEmail(email)) {
      setEmailError("Invalid email address!");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = await validateEmail(email);
    if (isValid) {
      alert("Reset password link has been sent to your email address!");
      navigateTo("/reset-password");
    } else {
      alert("Invalid email address!");
    }
  };

  return (
    <div className="resetforgot container">
      <div className="row justify-content-center">
        <div className="col-md-4 p-4 center">
          <h4 className="fw-bold">Forgot Password</h4>
          <p className="fw-lighter">Send Reset Confirmation to your Email</p>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="email">
              <Control
                type="email"
                placeholder="Email"
                onChange={handleChangeEmail}
              ></Control>
              <Text className="text-white">{emailError}</Text>
            </FormGroup>
            <div className="mt-3 mb-1">
              <Button type="submit" variant="danger" className="w-100">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgotForm;
