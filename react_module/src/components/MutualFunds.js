import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./NavbarComp.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, handleLogout } from "../component/Login"; // Import isAuthenticated and handleLogout functions
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const MutualFunds = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [count, setCount] = useState(0);
  const [text, setText] = useState(null);
  const [welcome, setWelcome] = useState(null);

  useEffect(() => {
    // alert("this is alert for useefect")
  }, [count]);

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let Ctext = "";
    setText(Ctext);
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Jsonwebtoken")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const featchwelcome = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/auth/mutualfund",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Jsonwebtoken")}`,
            },
          }
        );
        setWelcome(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("Jsonwebtoken");
          navigate("/");
        }
      }
    };

    if (isAuthenticated()) {
      featchwelcome();
    }
  }, [navigate]);

  return (
    <>
      <div>
        <Navbar className={navbar ? "navbar active" : "navbar"} sticky="top">
          <Navbar.Brand>
            <img src="images/logo.png" alt="Logo" height="45px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="me-auto">
            <Link className="MFSubhead mx-3" to="/mutual-funds">
              Mutual Fund
            </Link>
            <Link className="MFSubhead mx-3" to="/api">
              Api
            </Link>
            <Link className="MFSubhead mx-3" to="/blog">
              Blog
            </Link>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">{/* Your navigation links */}</Nav>
              {isAuthenticated() && (
                <Button
                  variant="outline-light"
                  onClick={() => handleLogout(navigate)}
                >
                  Logout
                </Button>
              )}
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
      <Container>
        {welcome && <h1>{welcome.info}</h1>}
        <div className="container">
          <p>Count : {count}</p>
          <button onClick={() => setCount(count + 1)}>Click Me</button>

          <form>
            <label htmlFor="input" className="form-label my-3">
              Enter Text
            </label>
            <input
              type="input"
              value={text}
              onChange={onChangeHandler}
              className="form-control"
            />
            <button
              type="button"
              className="button btn-bg-primary my-3 mx-3"
              onClick={upperCase}
            >
              Convert UpperCase
            </button>
            <button
              type="button"
              className="button btn-bg-primary my-3 mx-3"
              onClick={lowerCase}
            >
              Convert LowerCase
            </button>
            <button
              type="button"
              className="button btn-bg-primary my-3 "
              onClick={clearText}
            >
              Clear Text
            </button>
            <h2>Preview</h2>
            <p>{text}</p>
          </form>
        </div>
      </Container>
    </>
  );
};
