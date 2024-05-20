import React from "react";
import "./CSS/Common.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project/Project"
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
function App() {
  return (
    <>

    
       <BrowserRouter>
         <NavBar />
       
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About /> } />
          <Route path="/Project" element={<Project /> } />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
          <Home/>
          <About/>
          <Project/>
          <Skills/>
          <Contact/>
          
      </BrowserRouter>
        
    </>
  );
}

export default App;
