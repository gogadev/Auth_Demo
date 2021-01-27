import React, { useRef, useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { useAuth } from "../../context/AuthContext";

import { Link } from "react-router-dom";

import image from "../../assets/reset.png";

import "./forgot-password.style.css";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <div className="container">
        <img className="reset-img" src={image} alt="" />
        <div className="heading">
          <h2>Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Reset Password
            </Button>
          </Form>
        </div>
        <div className="text">
          <Link to="/login">Login</Link>
        </div>
        <div className="text">
          Need an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
