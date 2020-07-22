import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header-container'>
          <figure className='header-img'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
          </figure>
          <span className='burguer-button icon-menu' id='burguer-button' />
          <nav className='header-menu' id='menu'>
            <ul>
              <li><Link to='/portafolio'>PORTAFOLIO</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
