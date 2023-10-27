import React from 'react';
import "./sidebar.css"
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='aside'>
            <Link to="/" className="nav__logo">
            </Link>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav_list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                <i className="icon-home"></i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/about" className="nav__link">
                                <i className="icon-user-following"></i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/services" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/portfolio" className="nav__link">
                                <i className="icon-layers"></i>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/contact" className="nav__link">
                                <i className="icon-bubble"></i>
                            </Link>
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
