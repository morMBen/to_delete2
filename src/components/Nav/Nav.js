import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function Nav() {
  return (
    <div className='nav'>
      <div className='nav__logo'>App Logo</div>
      <div className='nav__buttons'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/signup'>Sign </Link>
        {/* Some comment */}
        <Link to='/signin'>Sign in </Link>
      </div>
    </div>
  );
}

export default Nav;
