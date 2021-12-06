import React from "react";
import { Navbar, Nav, Container, NavItem, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
const TopNav = () => {
  return (
    <Navbar className="navbar-top">
      <Navbar.Brand href="/">Instapply</Navbar.Brand>
      <Nav className="me-auto" id="nav-elements">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/applications">Applications</Nav.Link>
        <Button className="signout" variant="dark">
          Signout
        </Button>
      </Nav>
    </Navbar>
  );
};

export default TopNav;
