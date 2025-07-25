import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero";
import About from "./components/about_me";
import Projects from "./components/my_projects";
import Contact from "./components/contact_me";
import Experience from "./components/my_experience";
import Skills from "./components/my_skills";

function App() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Experience />
      <Skills />
      <Projects /> {/* ✅ Add this here */}
      <Contact />
    </div>
  );
}

export default App;
