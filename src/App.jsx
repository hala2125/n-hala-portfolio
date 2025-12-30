import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;
