import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <NavLink className="nav-link" to="/">Homepage</NavLink>
        <NavLink className="nav-link" to="/questions">Questions</NavLink>
    </nav>
  )
}

export default Navbar;