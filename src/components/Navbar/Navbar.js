import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Auth } from '../../state/auth';

const Navbar = () => {
  const { logout } = Auth.useContainer();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default withRouter(Navbar);