import React from 'react';
//import {Link} from 'react-router';
import { Button } from 'react-bootstrap';
const Projects = () => {
  return (
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
  )
}
