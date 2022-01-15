import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => setCurrentPage('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Jobs"
          onClick={() => setCurrentPage('Jobs')}
          className={currentPage === 'Jobs' ? 'nav-link active' : 'nav-link'}
        >
          Jobs
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Calendar"
          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Calendar
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#progress"
          onClick={() => setCurrentPage('Progress')}
          className={currentPage === 'Progress' ? 'nav-link active' : 'nav-link'}
        >
          Progress
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#saved"
          onClick={() => setCurrentPage('Saved')}
          className={currentPage === 'Saved' ? 'nav-link active' : 'nav-link'}
        >
          Saved
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Notes"
          onClick={() => setCurrentPage('Notes')}
          className={currentPage === 'Notes' ? 'nav-link active' : 'nav-link'}
        >
          Notes
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => setCurrentPage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
    </ul>
  );
}

export default Navigation;