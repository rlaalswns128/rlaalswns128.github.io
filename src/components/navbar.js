import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div onClick={() => scrollToSection('home')} className="logo">MINJUNE</div>
      <div>
      <a onClick={() => scrollToSection('profile')}>Profile</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('info')}>Info</a>
      </div>
    </nav>
  );
};

export default Navbar;