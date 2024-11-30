import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={isMenuOpen ? 'mobile-menu-open' : ''}>
      <div onClick={() => scrollToSection('home')} className="logo">MINJUNE</div>
      <div>
        <a onClick={() => scrollToSection('profile')}>Profile</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('info')}>Info</a>
      </div>
      <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;