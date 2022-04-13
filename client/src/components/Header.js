import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
<<<<<<< HEAD
    <header className='header-img'>
      <h1 className="App-header">CareerCone</h1>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
=======
    <header className="header-img">
      <h1 className="App-header">Career Cone</h1>
        <p className="sub-header"> Focus on what matters most</p>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
>>>>>>> 0534179e5e0bb3bdaffb2867e1ee179cce56ab17
    </header>
  );
}
