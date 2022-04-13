import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header-img">
      <h1 className="App-header">Career Cone</h1>
        <p className="sub-header"> Focus on what matters most</p>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
  );
}
