import React, { useEffect, useRef } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);  // Set the initial value

  useEffect(() => {
    prevLocation.current = location.pathname;
  }, [location.pathname]);

  const isWithinPortfolio = (path) => path && path.startsWith('/portfolio');
  const isSamePageOrWithinPortfolio = 
    prevLocation.current === location.pathname ||
    (isWithinPortfolio(prevLocation.current) && isWithinPortfolio(location.pathname));

  const transitionDuration = isSamePageOrWithinPortfolio ? 0 : 300; // set duration based on condition

  const RenderRoutes = () => (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio/:category" element={<Portfolio />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );

  return (
    <>
      <Sidebar />
      {transitionDuration === 0 ? (
        <RenderRoutes />
      ) : (
        <TransitionGroup>
          <CSSTransition 
            timeout={transitionDuration} 
            classNames="fade" 
            key={location.key}
          >
            <RenderRoutes />
          </CSSTransition>
        </TransitionGroup>
      )}
    </>
  );
}

export default App;
