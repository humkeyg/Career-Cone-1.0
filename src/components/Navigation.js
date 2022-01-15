import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';

function Navigation({ currentPage, setCurrentPage }) {

  return (

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link 
              href="#dashboard"
              onClick={() => setCurrentPage('Dashboard')}
              className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
              >
              Dashboard
              </Nav.Link>

              <Nav.Link 
              href="#jobs"
              onClick={() => setCurrentPage('Jobs')}
              className={currentPage === 'Jobs' ? 'nav-link active' : 'nav-link'}
              >
              Jobs
              </Nav.Link>

              <Nav.Link 
              href="#calendar"
              onClick={() => setCurrentPage('Calendar')}
              className={currentPage === 'Calendar' ? 'nav-link active' : 'nav-link'}
              >
              Calendar
              </Nav.Link>

              <Nav.Link 
              href="#progress"
              onClick={() => setCurrentPage('Progress')}
              className={currentPage === 'Progress' ? 'nav-link active' : 'nav-link'}
              >
              Progress
              </Nav.Link>

              <Nav.Link 
              href="#saved"
              onClick={() => setCurrentPage('Saved')}
              className={currentPage === 'Saved' ? 'nav-link active' : 'nav-link'}
              >
              Saved
              </Nav.Link>

              <Nav.Link 
              href="#notes"
              onClick={() => setCurrentPage('Notes')}
              className={currentPage === 'Notes' ? 'nav-link active' : 'nav-link'}
              >
              Notes
              </Nav.Link>

              <Nav.Link 
              href="#About"
              onClick={() => setCurrentPage('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
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