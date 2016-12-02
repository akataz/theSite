import React from 'react';
//import {Link} from 'react-router';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <img src="./../assets/tyrus_headshot.jpg" height="40%" width="40%" id="profile"/>
      <h2>Hello! Welcome to my website!  Please explore the links above for more.</h2>
      <h4 className="textOnPage"> My name is Tyrus Brenc and I am a Full Stack Software Engineer specializing in Javascript with a passion for diving deep into tech to figure out
      which technologies work together the best.  This website attempts to not only showcase
      my work, but act as a proving ground for new tech that I&rsquo;m trying out!</h4>
      <h2 className="headingSmall">Recent Projects</h2>

      <img src="./../assets/apexSwipe.jpeg" />
      <div className="projectDesc">Core Technologies: React Native, Redux, Node,Express</div>
      <div className="projectDesc">Apex Swipe is a native mobile application that allows users to build virtual "decks"
      to get their friends opinions using swipe left/right swipe touch technology.
      It is written in React Native with Redux for both iOS and Android,
      and features include hardware integration via the mobile device&rsquo;s camera,
      Yelp API queries for restaurant data, and a Heroku and AWS deployed Node/Express/MongoDB back-end for API calls and user data
      storage.  Our team utilized Test Driven Development via Mocha and Chai, as well as AGILE to
      keep the development process focused and efficient.
      </div>
      <Button href='https://github.com/Reactor-76/apexswipe' bsStyle='success'>Check out the code!</Button>
      <br />
    </div>
  );
};

export default HomePage;
