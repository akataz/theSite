import React, { Component }from 'react';
import { Navbar, NavItem, MenuItem, Nav } from 'react-bootstrap';

class navbarInstance extends Component {
    render() {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/blog">Blog</NavItem>
              <NavItem eventKey={2} href="#">About Me</NavItem>
              <NavItem eventKey={2} href="#">Projects</NavItem>
            </Nav>
            <Nav>
              <NavItem eventKey={1} href="#">Contact</NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
}
export default navbarInstance;
