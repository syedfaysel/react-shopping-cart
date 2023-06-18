import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt=""/>
        <div>
          <Link to='/'>Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;