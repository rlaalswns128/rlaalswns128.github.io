import React from 'react';
import Navbar from './components/navbar'; // Import Navbar as a default export
import Cover from './components/cover';
import Skills from './components/skills';
import Projects from './components/projects';
import Info from './components/info';
import Profile from './components/profile';
import Footer from './components/footer';
import './styles/variables.css';

const App = () => (
  <>
    <Navbar />
    <div id="home">
      <Cover />
    </div>
    <div id="profile">
      <Profile />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="info">
      <Info />
    </div>
    <Footer />
  </>
);

export default App;