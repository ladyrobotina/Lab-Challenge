import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar';
import './AppNav.css';

import { Link } from 'react-router-dom';

function AppNav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Lab Challenge
        </span>
      </Link>
      <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default AppNav;
