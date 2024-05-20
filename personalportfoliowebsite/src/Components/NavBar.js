import React, { useState } from "react";
import '../CSS/Nav.css';
import { Link } from 'react-scroll';
import { RxTextAlignCenter } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./Logo";
// import { isCompositeComponentWithType } from "react-dom/test-utils";

const Llink=()=>{
  return(
          <>
                <nav>
                  <Link to="/Home" smooth={true} className="Link">Home</Link>
                  <Link to="/About" smooth={true} className="Link">About</Link>
                  <Link to="/Project" smooth={true} className="Link">Project</Link>
                  <Link to="/Skills" smooth={true} className="Link">Skill</Link>
                  <Link to="/Contact" smooth={true} className="Link">Contact</Link>
                </nav>
     
          </>
        )
};

const ComputerNavBar=()=>{
  return (
    <>
       <div className="Computer_NavBar">
        <Llink/>
      </div>
    </>
  )
}


 function NavBar() {

  const [isOpen,setIsOpen]=useState(false);

  const ShowNavbar=()=>{
    setIsOpen(!isOpen);
  }

  const CloseNavbar=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header>
        <Logo/> 
        <ComputerNavBar/>
      <button className="Show_Button" onClick={ShowNavbar}>
        <RxTextAlignCenter className="icons"/>
      </button> 
      </header>

      {/* Mobile NavBar */}
      <div className={`Mobile_NavBar ${isOpen?'open':''}`}>
          <button className="Close_Button" onClick={CloseNavbar}>
                <IoCloseSharp className="icons"/>
          </button>
        <Llink onClick={CloseNavbar}/>
      </div>
    
    
    </>
  )
}
export default NavBar;
