import React from 'react';
//import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1 className="heading">Tyrus Brenc</h1>
      <img src="./../assets/tyrus_headshot.jpg" height="40%" width="40%" id="profile"/>
      <h2>Hello! Welcome to my website!  Please explore the links above for more.</h2>
      <h4 className="textOnPage"> My name is Tyrus Brenc and I am a Full Stack Software Engineer specializing in Javascript with a passion for diving deep into tech to figure out
      which technologies work together the best.  This website attempts to not only showcase
      my work, but act as a proving ground for new tech that I&rsquo;m trying out!</h4>
      <h2 className="headingSmall">Recent Projects</h2>

      <img src="./../assets/apexSwipe.jpeg" />
    </div>
  );
};

export default HomePage;
