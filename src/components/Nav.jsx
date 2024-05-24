import React from 'react';
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header>
    <div className="contc flex items-center w-full py-1 justify-between  bg-white">
      
        <img src={logo} alt="Logo" style = {{ width: '50px', height: 'auto'}} />
        <a href="#" className="logo">dwAI.</a>

        <nav className="navbar">
          
          <a href="#home" className="active text-red px-3">Home</a>
          <a href="#about" className="text-black px-3">Update</a>
          <a href="#services" className="text-black px-3">Visit</a>
          <a href="#footer" className="text-black px-3">Find</a>

          <a href="form.html" className="px-3">
            <i className='bx bx-user' id="darkMode-icon"></i>
          </a>
        </nav>
      </div>


    </header>
  );
}
