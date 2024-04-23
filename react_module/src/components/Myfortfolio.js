import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { isAuthenticated } from '../component/Login';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Myfortfolio = () => {
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('Jsonwebtoken')) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/myfortfolio', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Jsonwebtoken')}`,
          },
        });
        setProfileData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching profile data:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('Jsonwebtoken');
          // Redirect the user to the login page
          navigate('/');
        }
      }
    };
  
    if (isAuthenticated()) {
      fetchProfileData();
    }
  }, [navigate]);
  

  return (
    <>
      <Container fluid>
        <Row>
        {/* Render profile data */}
        {profileData && (
          <div className='bg-dark text-white'>
            <h1> {profileData.message}</h1>
          </div>
         
        )}
         </Row>
         <div className='container'>
          <h2 className='pt-4'>My Portfolio</h2>
          <h3>Welcome to my portfolio!</h3>
          <img src='images\myfortfolio.jpg' alt='img'/>
        <p >This is an example of a portfolio. Portfolios use evidence of your education, works samples and skills to tell a carefully crafted story to the world about who you are and what you can do. Portfolios contain an organized collection of artifacts to tell that story. Portfolios can include text, photos, audio, and video...be creative and tell your story of your accomplishments!</p>
        </div>
      </Container>
    </>
  );
};
