import React, { useRef, useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { useAuth } from "../../context/AuthContext";

import { Link, useHistory } from "react-router-dom";

import image from "../../assets/underline.png";

import "./signup.style.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="heading">
          <h2>Sign Up</h2>
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
              Sign Up
            </Button>
          </Form>
        </div>
        <div className="account">
          Already have an account? <Link to="/login"> Log In</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
