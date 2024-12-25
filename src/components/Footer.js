import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ scrollToTop }) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li>
                        <Link to="/about" onClick={scrollToTop}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={scrollToTop}>Contact</Link>
                    </li>
                </ul>
                <p>&copy; 2024 BMK Home Education. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
