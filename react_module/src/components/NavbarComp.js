import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, handleLogout } from "../component/Login"; // Import isAuthenticated and handleLogout functions
import { Myfortfolio } from "./Myfortfolio";

export function NavbarComp() {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    if (!localStorage.getItem("Jsonwebtoken")) {
      navigate("/");
    }
  }, [navigate]);


  return (
    <div>
      <Navbar className={navbar ? "navbar active" : "navbar"} sticky="top">
        <Navbar.Brand>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" height="45px" />
          </Link>
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
      <Myfortfolio/>
    </div>
  );
}
