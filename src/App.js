import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/pages/Dashboard';
import Jobs from './components/pages/Jobs';
import Calendar from './components/pages/Calendar';
import Progress from './components/pages/Progress';
import Saved from './components/pages/Saved';
import Notes from './components/pages/Notes';
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
    if (currentPage === 'Calendar') {
      return <Calendar/>;
    }
    if (currentPage === 'Progress') {
      return <Progress/>;
    }
    if (currentPage === 'Saved') {
      return <Saved/>;
    }
    if (currentPage === 'Notes') {
      return <Notes/>;
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