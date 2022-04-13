import React from "react";
import { Navbar } from 'react-bulma-components';
import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import logo from '../images/logo.png';

function Navigation() {
  return (
    <Navbar className="nav" expand="lg"
      style={{
        fontWeight: 'bold',
      }}>
        <Navbar.Brand>
          <Navbar.Item href='#'>
            <img alt="Career Cone: Focus on what matters most"
            src= { logo }
            />
          </Navbar.Item>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Container
              variant="tabs"
              defaultActiveKey="#dashboard"
              className="me-auto"
            >
              <Navbar.Item>
              <Navbar.Link as={Link} to="/">
                Dashboard
              </Navbar.Link>
              <Navbar.Link as={Link} to="/jobs">
                Jobs
              </Navbar.Link>
              {/* if the user is logged in show saved jobs and logout*/}
              {Auth.loggedIn() ? (
                <>
                  <Navbar.Link as={Link} to="/saved">
                    Saved Jobs
                  </Navbar.Link>
                  <Navbar.Link onClick={Auth.logout}>Logout</Navbar.Link>
                </>
              ) : (
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Link as={Link} to="/signup">
                    Signup
                  </Navbar.Link>
                  <Navbar.Link as={Link} to="/login">
                    Login
                  </Navbar.Link>
                </Navbar.Collapse>
              )}
              <Navbar.Link as={Link} to="/about">
                About
              </Navbar.Link>
              </Navbar.Item>
              </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Brand>
    </Navbar>
  );
}

export default Navigation;
