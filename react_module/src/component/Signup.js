import React, { useState } from "react";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        formData
      );
      const data = response.data;
      setSuccessMessage(data.message);
      navigate("/"); // Navigate to login page after successful signup
    } catch (error) {
      if (error.response.status === 409) {
        setError("This email address is already in use.");
      } else {
        setError("Unknown error occurred.");
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center 100-w vh-100 bg-primary box">
        <div className="form_container p-5 rounded bg-white">
          <Form onSubmit={handleSubmit} autoComplete="off">
            <h2 className="text-center"> Sign Up</h2>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom01" className="pt-4">
                <Form.Control
                  required
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom02">
                <Form.Control
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom6">
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom7">
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="New password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before Sign up."
                feedbackType="invalid"
                name="agreedToTerms"
                onChange={(e) =>
                  setFormData({ ...formData, agreedToTerms: e.target.checked })
                }
              />
            </Form.Group>
            <div className="d-grid mt-2">
              <Button type="submit" className="btn btn-primary">
                Sign Up
              </Button>
            </div>
            {error && <p className="text-danger">{error}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <p className="text-end mt-2">
              Already Registered <Link to="/">Sign in</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};
