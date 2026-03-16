"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav id="nav">
        <a href="#" className="nav-logo">Lumix</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#schedule">Schedule</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#pricing" className="nav-cta">Book a Class</a>
        </div>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          id="hamburger" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} id="mm">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#classes" onClick={closeMenu}>Classes</a>
        <a href="#schedule" onClick={closeMenu}>Schedule</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#pricing" className="nav-cta" onClick={closeMenu}>Book a Class</a>
      </div>
    </>
  );
}
