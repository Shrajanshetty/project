import React, { useEffect, useState } from "react";
import "./Blog.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col,Nav,Navbar} from "react-bootstrap";
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';
import { isAuthenticated, handleLogout } from '../component/Login';


export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [data,setData] = useState(null);
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

  useEffect(() =>{
    if(!localStorage.getItem('Jsonwebtoken'))
    navigate('/')
  },[navigate])


  useEffect(() => {
    fetch(
      "https://mindstacktechnologies.com/wordpress/index.php/wp-json/posts/v2/all-posts"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setBlogs(data);
      });
  }, []);

  useEffect (() =>{
    const featchdata = async () =>{
      try{
        const response = await axios.get('http://localhost:3000/auth/blog', {
          headers:{
            Authorization: `Bearer ${localStorage.getItem("Jsonwebtoken")}`,
  
          }
        })
        setData(response.data);
      }catch(error){
        console.error('Error fetching profile data:', error);
          // Check if the error is due to unauthorized access (token tampering)
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('Jsonwebtoken');
            // Redirect the user to the login page
            navigate('/');
          }
      }
    };
  
    if (isAuthenticated()) {
      featchdata();
    }
   },[navigate]
  )

  return (
    <>
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
      <div className="container-fluid toptcolor">
        <div className="container ">
          {data && (
          <div>
            <h> {data.data}</h>
          </div>
        )}
          <h1>Our Blog</h1>
          <h5>
            We strive to build a community of entreprenuers or professionals who
            want to implement technology and scale their business.
          </h5>
          <Button variant="outline-primary my-4">
            <a href="/" className="btn">
              Lets start a project{" "}
            </a>
          </Button>
        </div>
      </div>

      <Container className="my-5 ">
        <Row>
          {blogs.map((val) => {
            const categoryName = val.categories[0]?.name || "";
            return (
              <Col lg={4} key={val.ID} className="mb-4">
                {" "}
                {/* Add key prop here */}
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={val.thumbnail} />
                  <Card.Body>
                    <Card.Title>
                      <h5
                        style={{
                          color: "#6824a9",
                          fontSize: "15px",
                          fontWeight: "800",
                          fontFamily: "geomanist",
                        }}
                      >
                        {categoryName}
                      </h5>
                    </Card.Title>
                    <Card.Text>
                      <a
                        href={val.guid}
                        style={{ color: "#333", textDecoration: "none" }}
                      >
                        <h4 key={val.ID}>{val.post_title}</h4>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Footer Section  ->*/}
      <footer className="container-fluid bg-dark">
        <Container className="pt-5">
          <Row>
            <Col lg={3} sm={3}>
              <h4 className="tcolor">COMPANY</h4>
              <hr className="solid" />
              <ul style={{ padding: "0px" }}>
                <li>
                  <a href="/" className="FliStyle">
                    Why Mindstack
                  </a>
                </li>
                <li>
                  <a href="/" className="FliStyle">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/" className="FliStyle">
                    Culture
                  </a>
                </li>
                <li>
                  <a href="/" className="FliStyle">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/" className="FliStyle">
                    Blog
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={6} sm={6}>
              <h4 className="tcolor">SERVICES</h4>
              <hr className="solid" />
              <Row>
                <Col lg={6} sm={6}>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      <a href="/" className="FliStyle">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/" className="FliStyle">
                        Ruby on Rails
                      </a>
                    </li>
                    <li>
                      <a href="/" className="FliStyle">
                        React
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} sm={6}>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      <a href="/" className="FliStyle">
                        Web Applications Design
                      </a>
                    </li>
                    <li>
                      <a href="/" className="FliStyle">
                        Mobile Apps Design
                      </a>
                    </li>
                    <li>
                      <a href="/" className="FliStyle">
                        Saas Products Design
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col lg={6} sm={6}>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      <a href="/" className="FliStyle">
                        Flutter
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} sm={6}>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      <a href="/" className="FliStyle">
                        Chatbot Development
                      </a>
                    </li>
                    <li>
                      <a href="/" className="FliStyle">
                        Data Engineering & Pipelines
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <h4 className="tcolor">CONTACT</h4>
              <hr className="solid" />
              <a href="mailto:enquiries@mindstack.in" className="FliStyle">
                enquiries@mindstack.in
              </a>
              <Button variant="outline-secondary rounded-pill my-3" size="lg">
                <a href="/" className="contactb ">
                  Contact us
                </a>
              </Button>{" "}
            </Col>
          </Row>
        </Container>
        <div className=" container bottom footer">
          <Row>
            <Col lg={6} style={{ color: "hsla(0, 0%, 100%, .6)" }}>
              <p>&copy; 2023 Copyright Mindstack. All Rights Reserved.</p>
            </Col>
            <Col lg={6} style={{ color: "hsla(0, 0%, 100%, .6)" }}>
              <div className="d-flex justify-content-lg-end justify-content-center">
                <a
                  href="https://twitter.com/Mindstacktech/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 icon"
                >
                  <i className="fa-brands fa-twitter fa-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/mindstacktechnologies/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 icon"
                >
                  <i className="fa-brands fa-facebook fa-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mindstack-technologies/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 icon"
                >
                  <i className="fa-brands fa-linkedin fa-2xl" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};
