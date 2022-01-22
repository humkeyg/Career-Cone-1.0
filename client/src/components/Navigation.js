import React from "react";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="nav" expand="lg">
      <Container justify>
        <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              variant="tabs"
              defaultActiveKey="#dashboard"
              className="me-auto"
            >
              <Nav.Link as={Link} to="/">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/jobs">
                Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/saved">
                Saved
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome <a href="#login">Name</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
