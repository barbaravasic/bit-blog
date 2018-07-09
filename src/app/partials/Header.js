import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper #00838f cyan darken-3">
          <div className="container">
            <Link to='/' className="brand-logo center">Bit Blog</Link>
            <ul id="nav-mobile" className="right">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/authors'>Authors</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/posts/new'>New Post</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}