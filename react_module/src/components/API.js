import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import "./NavbarComp.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, handleLogout } from "../component/Login"; // Import isAuthenticated and handleLogout functions
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const API = () => {
  const [navbar, setNavbar] = useState(false);
  const [apidata, setApidata] = useState(null);
  const [api, setApi] = useState([]);
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

  const fetchData = () => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/api", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Jsonwebtoken")}`,
          },
        });
        setApidata(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching profile data:", error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("Jsonwebtoken");
          navigate("/");
        }
      }
    };

    if (isAuthenticated()) {
      fetchApiData();
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
            {/* <Link className="MFSubhead mx-3" to="/my-portfolio">
              My Portfolio
            </Link> */}
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
      {apidata && (
        <div className="conatainer_fluid mx-3">
          <h2>{apidata.api}</h2>
        </div>
      )}
      <Button variant="info" onClick={fetchData} className="my-5 mx-5">
        Fetch Data
      </Button>
      <Container
        style={{
          background: "#d1ecf1",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "10px",
          width: "900px",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap", overflowX: "auto" }}>
          {JSON.stringify(api, null, 2)}
        </pre>
      </Container>
    </>
  );
};
