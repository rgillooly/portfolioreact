import React from 'react';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
