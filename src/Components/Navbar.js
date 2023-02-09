import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>Cookbook</div>
      <div>
        <input type="text" placeholder="Search"/>
        <a href="/add">
        <button>Add a new recipe</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;