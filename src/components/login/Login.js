import React, { useRef, useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { useAuth } from "../../context/AuthContext";

import { Link, useHistory } from "react-router-dom";

import image from "../../assets/underline.png";

import "./login.style.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="heading">
          <h2>Log In</h2>
          <img className="image" src={image} alt="" />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Log In
            </Button>
          </Form>
        </div>
        <div className="account">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className="text">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
