import React from 'react';
import "./sidebar.css"

const Sidebar = ({ onUserInitiatedScroll = () => {} }) => {

    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        // Notify that user initiated a scroll
        onUserInitiatedScroll(true);

        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                {/* Add any content or image here if you want */}
            </a>
            

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav_list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={(e) => handleNavClick(e, 'home')}>
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={(e) => handleNavClick(e, 'about')}>
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link" onClick={(e) => handleNavClick(e, 'resume')}>
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={(e) => handleNavClick(e, 'portfolio')}>
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={(e) => handleNavClick(e, 'contact')}>
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2023 • JLU</span>
            </div>
        </aside>
    )
}

export default Sidebar;
