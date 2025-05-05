import React from "react";
import "./Footer.css";
import logo from './space-neo-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="space-logo.png" alt="Logo" className="footer-logo"/>
                <nav className="footer-nav">
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">YouTube</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <span className="footer-copy">QUEST® 2021</span>
                </nav>
            </div>
            <div className="footer-line"></div>
        </footer>
    );
};

export default Footer;