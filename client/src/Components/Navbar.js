import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, Container, NavItem, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/applications">Applications</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
