import React, { Component }from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class navbarInstance extends Component {
    render() {
      return (
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/blog">Blog</NavItem>
              <NavItem eventKey={2} href="/about">About Me</NavItem>
              <NavItem eventKey={2} href="#">Projects</NavItem>
              <NavItem eventKey={1} href="#">Contact</NavItem>
            </Nav>
            <Nav pullRight>
              <SocialIcon className="social" url="https://github.com/akataz" style={{ height: 40, width: 40 }}/>
              <SocialIcon className="social" url="http://linkedin.com/in/tyrusbrenc" style={{ height: 40, width: 40 }}/>
              <SocialIcon className="social" url="tyrus.brenc@gmail.com" style={{ height: 40, width: 40 }}/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
}
export default navbarInstance;
