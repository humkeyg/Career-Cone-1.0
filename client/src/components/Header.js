import React from 'react';
import Navigation from './Navigation';
import './Header.css';

export default function Header({currentPage, setCurrentPage}) {

  return (
    <header className='header-img'>
      <h1 className="App-header">CareerCone</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>
  );
}