import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/pages/Dashboard';
import Jobs from './components/pages/Jobs';
import Saved from './components/pages/Saved';
import About from './components/pages/About';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    if (currentPage === 'Dashboard') {
      return <Dashboard/>;
    }
    if (currentPage === 'Jobs') {
      return <Jobs/>;
    }
    if (currentPage === 'Saved') {
      return <Saved/>;
    }
    if (currentPage === 'About') {
      return <About/>;
    }
  };

  return (
    <div className='App'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;