import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { Alert, Button } from "react-bootstrap";

import { useAuth } from "../../context/AuthContext";

import user from "../../assets/user.png";

import "./dashboard.style.css";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  }

  return (
    <div className="container">
      <div className="body">
        <h2 className="heading">Profile</h2>
        <div className="profile-pic">
          <img className="user-img" src={user} alt="" />
        </div>
        <div className="email">
          <strong>Email:</strong> {currentUser.email}
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="text">
          <Link to="/update-profile">Update Profile</Link>
          <div className="log-out">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
