import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    const sections = ['/', '/about', '/resume', '/portfolio', '/contact'];
    const scrollY = window.scrollY;
    const height = window.innerHeight;
    const currentSectionIndex = Math.round(scrollY / height);

    if (sections[currentSectionIndex] !== location.pathname) {
      navigate(sections[currentSectionIndex]);
    }
  };

  const handleWheel = (event) => {
    // Check if user is scrolling up and they are at the top of the page
    if (event.deltaY < 0 && window.scrollY === 0) {
      event.preventDefault();
    }

    // Check if user is scrolling down and they are at the bottom of the page
    if (event.deltaY > 0 && window.scrollY === document.documentElement.scrollHeight - window.innerHeight) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
