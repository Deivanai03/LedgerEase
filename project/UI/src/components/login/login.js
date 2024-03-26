// src/components/Signup.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    // Redirect to the login page
    navigate("/signup");
  };

  const handleLoginClick = () => {
    // Redirect to the add user page
    navigate("/adduser");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Login</h2>

        {/* Details Container */}
        <div className="details-container">
          {/* Row 1 */}
          <div className="form-group">
            <label htmlFor="fullName">User Name</label>
            <input type="text" id="fullName" name="fullName" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>

          {/* Submit Button */}
          <button type="submit" onClick={handleLoginClick}>
            Login
          </button>
          <div className="login-container">
            <h4 className="signup-heading" onClick={handleSignupClick}>
              Don't Have an Account? Signup
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
