import React from 'react';
import "./sidebar.css"
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className='aside'>
            <NavLink to="/" className="nav__logo">
            </NavLink>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav_list">
                        <li className={`nav__item ${currentPath === "/" ? "active-link" : ""}`}>
                            <NavLink to="/" className="nav__link">
                                <i className="icon-home"></i>
                            </NavLink>
                        </li>
                        <li className={`nav__item ${currentPath === "/about" ? "active-link" : ""}`}>
                            <NavLink to="/about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </NavLink>
                        </li>
                        <li className={`nav__item ${currentPath === "/resume" ? "active-link" : ""}`}>
                            <NavLink to="/resume" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </NavLink>
                        </li>
                        <li className={`nav__item ${currentPath.startsWith("/portfolio") ? "active-link" : ""}`}>
                            <NavLink to="/portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </NavLink>
                        </li>
                        <li className={`nav__item ${currentPath === "/contact" ? "active-link" : ""}`}>
                            <NavLink to="/contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </NavLink>
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
