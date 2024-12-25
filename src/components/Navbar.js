import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // We'll create this CSS file next
import Mainlogo from './Images/BMK logo.jpg'; // Adjust the path if necessary


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    const closeMobileMenu = () => {
        setIsMobile(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={Mainlogo} alt="BMK Home Education" className="navbar-logo-img" />
                </Link>
                <div className="menu-icon" onClick={handleToggle}>
                    {isMobile ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isMobile ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/staff"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Staff
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/batches"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Batches
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/faq"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink
                        to="/attendance"
                        activeClassName="active"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Attendance
                    </NavLink>
                    </li>
                    
                    <Link to="/contact" className="nav-btn">
                    <button className="BuyNow">Enroll Now</button>
                </Link>

                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;
