import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>Find Your Favorite Rick and Morty Characters</h1>

      <ul>
        <NavLink to='/'>
          <li>Home Page</li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Header;
