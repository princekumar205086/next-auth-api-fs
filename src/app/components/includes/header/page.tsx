"use client";
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <a className="text-white text-xl font-semibold" href="/">Your Logo</a>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="md:hidden block text-white text-xl"
            onClick={toggleMenu}
          >
            ☰
          </button>
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <a className="text-white" href="/">Home</a>
            </li>
            <li>
              <a className="text-white" href="/about">About</a>
            </li>
            <li>
              <a className="text-white" href="/services">Services</a>
            </li>
            <li>
              <a className="text-white" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

