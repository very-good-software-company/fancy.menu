import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
}

export default withRouter(Navbar);