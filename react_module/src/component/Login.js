import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const isAuthenticated = () => {
  return localStorage.getItem("Jsonwebtoken") !== null;
};

export const handleLogout = (navigate) => {
  localStorage.removeItem("Jsonwebtoken");
  navigate("/");
};

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, rememberMe: e.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData
      );
      const { data } = response;
      const { access_token } = data;
      // console.log(access_token);

      if (access_token) {
        // console.log(token)
        localStorage.setItem("Jsonwebtoken", access_token);
        setFormData({ email: "", password: "", rememberMe: false });
        navigate("/home"); // Redirect to the home page after successful login
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setError("Error logging in. Please try again later.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              name="rememberMe"
              className="custom-control custom-checkbox"
              id="check"
              checked={formData.rememberMe}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="check"
              id="check"
              className="custom-input-label ms-2"
            >
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <p className="text-end">
            Forgot <a href="/">Password?</a>
            <a href="/signup" className="ms-2">
              Sign up
            </a>
          </p>
        </form>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </div>
  );
};
