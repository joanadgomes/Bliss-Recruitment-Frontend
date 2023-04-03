import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/questions">Questions</NavLink>
    </nav>
  )
}

export default Navbar;