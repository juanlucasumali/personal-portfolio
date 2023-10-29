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
  const [userInitiatedScroll, setUserInitiatedScroll] = React.useState(false);


  const sections = {
    '/': 'home',
    '/about': 'about',
    '/resume': 'resume',
    '/portfolio': 'portfolio',
    '/contact': 'contact'
  };

  const scrollToSection = (path) => {
    const sectionId = sections[path];
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleScroll = () => {
    if (userInitiatedScroll) {
      return; // Skip URL update if scroll was initiated by the sidebar
    }
  
    if (isScrolling) {
      return;  // Skip if we are in the middle of a programmatic scroll
    }
  
    // Delay URL update to avoid interrupting scrolling animation
    setTimeout(() => {
      const sectionKeys = Object.keys(sections);
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const currentSectionIndex = Math.round(scrollY / height);
  
      if (sectionKeys[currentSectionIndex] !== location.pathname) {
        navigate(sectionKeys[currentSectionIndex], { replace: true });
      }
    }, 500); // Add a delay (adjust if necessary)
  };
  
  

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
  
    setUserInitiatedScroll(true);
    setIsScrolling(true);
  
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Update the URL and reset states after a short delay to ensure scroll completes
    setTimeout(() => {
      setIsScrolling(false);
      if (sections[`/${targetId}`] !== location.pathname) {
        navigate(`/${targetId}`, { replace: true });
      }
      setUserInitiatedScroll(false);  // Reset user-initiated scroll after updating the URL
    }, 1000);  // adjust the delay if needed
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    scrollToSection(location.pathname);
  }, [location.pathname]);

  const handleWheel = (event) => {
    if (event.deltaY < 0 && window.scrollY === 0) {
      event.preventDefault();
    }
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

  return (
    <>
      <Sidebar onUserInitiatedScroll={setUserInitiatedScroll} handleNavClick={handleNavClick} />
      <main className='main'>
        <Home id="home" />
        <About id="about" />
        <Resume id="resume" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </main>
    </>
  );
}

export default App;
