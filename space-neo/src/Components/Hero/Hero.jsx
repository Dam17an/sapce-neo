import React, { useState } from 'react';
import './Hero.css';
import logo from './space-neo-logo.png';
import bg from './rocket-bg.png';

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="hero" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay">
                <nav className="hero-nav">
                    <img src={logo} alt="Space Neo Logo" className="logo"/>

                    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <li>Our Mission</li>
                        <li>Rideshare</li>
                        <li>Engines</li>
                        <li>Careers</li>
                        <li>Shop</li>
                    </ul>

                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        &#9776;
                    </div>
                </nav>

                <div className="hero-overlay">

                    <div className="hero-center">
                        <div className="hero-content">
                            <p className="subtitle">NEW HAWK Q7</p>
                            <h1 className="title">MISSION QUEST 21</h1>
                            <p className="underwrite-line">LEARN ABOUT THE MISSION</p>
                            <button className="cta">WATCH THE REPLAY</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;