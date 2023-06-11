import React, { useState } from 'react';
import './App.css';
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Navbar from "./Navbar.js";

function App() {

  const [currentSection, setSection] = useState("About");

  function renderSection(curSection) {
    switch (curSection) {
      case "About":
        return <About />
      case "Projects":
        return <Projects />
      default:
        return <div>Not Found</div>
    }
  }

  const handleSectionChange = (page) => setSection(page);

  return (
    <div className="App">
      <Navbar handleSectionChange={handleSectionChange}/>
      <main className="App-header">
        {renderSection(currentSection)}
      </main>
    </div>
  );
}

export default App;
