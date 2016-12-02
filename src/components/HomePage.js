import React from 'react';
import Navbar from './Navbar.js';
//import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Tyrus Brenc</h1>
      <Navbar/>
      <img src="./../assets/tyrus_headshot.jpg" height="50%" width="50%" id="profile"/>
      <h2>Hello! Welcome to my personal website!  Please explore the links above for more.</h2>
      <div>I am a Full Stack Software Engineer specializing in Javascript with a passion for diving deep into tech to figure out
      which technologies work the best.  This website attempts to not only showcase
      my work, but act as a proving ground for new tech that Im trying out!</div>
      <h3>Recent Blog Post</h3>
    </div>
  );
};

export default HomePage;
