//Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-black.png';
import html from '../images/HTML5.jpg';
import css from '../images/CSS3.jpg';
import js from '../images/JavaScript_logo_PNG5.png';
import c from '../images/C.png';
import cpp from '../images/c++.png';
import python from '../images/python.jpg';
import java from '../images/java.png';
import dsa from '../images/DSA_Logo.png';
import './Homepage.css';

function Homepage() {
  return (
  <div>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: '80px' }} /> 
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login"><button className="signin-button">Login</button> </Link>
        </li>
      </ul>
    </nav>
     <div className="heropg">
     <div className="catchy-phrase">
     <h1>Inspire Innovation, Ignite Your Passion</h1>
     <p>Explore our diverse range of courses designed to inspire innovation and ignite your passion for learning. Join us in unlocking your potential and making an impact.</p>
     </div>

   <div className="search-container">
     <input type="text" placeholder="Search courses..." />
     <button type="submit">Search</button>
   </div>

   <div className="background-image">
   {/* <img src={bg1} alt="Logo" />  */}
   </div>
   </div>

  <section className="available-courses">
  <h2>Available Courses</h2>
  <div className="course-tabs">

    <div className="course-tab">
      <img src={html} alt="HTML" />
      <p>HTML</p>
    </div>
    <div className="course-tab">
      <img src={css} alt="CSS" />
      <p>CSS</p>
    </div>
    <div className="course-tab">
      <img src={js} alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="course-tab">
      <img src={dsa} alt="DSA" />
      <p>DSA</p>
    </div>
    <div className="course-tab">
      <img src={c} alt="C" />
      <p>C</p>
    </div>
    <div className="course-tab">
      <img src={cpp} alt="C++" />
      <p>C++</p>
    </div>
    <div className="course-tab">
      <img src={python} alt="Python" />
      <p>Python</p>
    </div>
    <div className="course-tab">
      <img src={java} alt="Java" />
      <p>Java</p>
    </div>
    
  </div>
</section>

<section className="about-us">
  <div className="about-content">
    <p>At SkillSpring, our mission is to empower individuals to reach their full potential in the ever-evolving world of technology. We believe that everyone should have access to high-quality, engaging, and personalized learning experiences that foster innovation and ignite a passion for lifelong learning.</p>
  </div>
</section>


   <footer>
        {/* Add footer content (e.g., copyright, contact info) */}
        <p>&copy; 2024 Learning Platform. All rights reserved.</p>
        <p>Contact us: support@example.com</p>
      </footer>
 </div>
  );
}

export default Homepage;