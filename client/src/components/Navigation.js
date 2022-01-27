import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

function Navigation() {
  return (
    <Navbar className="nav" expand="lg"
      style={{
        backgroundColor: '#f8b682',
        fontWeight: 'bold',
      }}>
      {/* <Container justify> */}
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
              {/* if the user is logged in show saved jobs and logout*/}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    Saved Jobs
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </Navbar.Collapse>
              )}
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
      {/* </Container> */}
    </Navbar>
  );
}

export default Navigation;
