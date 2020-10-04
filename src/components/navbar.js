import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navigationbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to="/home">
            <Navbar.Brand href="#home">VRKids</Navbar.Brand>
          </Link>
          <Nav className="mr-auto">
            <Link to="/home">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/donations">
              <Nav.Link href="#donations">Donations</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
