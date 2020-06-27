import React, { Component } from 'react';
import '../styles/Footer.scss';
import logo from '../images/logo.png';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-'>
          <img src={logo} alt='logo' />
          </div>
          <div className='footer-menu'>
            <ul>
              <li>Inicio</li>
              <li>Tienda</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='footer-about'>
            <div className='footer-about_text'>
              <p className='footer-about_txt'>Bogotá, Colombia</p>
              <p className='footer-about_txt'><a href="https://wa.me/573023367951"><strong>Telefono</strong> <span>+573023367951</span></a></p>
              <p className='footer-about_txt'>contacto@allwear.com.co</p>
            </div>
          </div>
          <div className='footer-' />
        </div>
      </div>
    );
  }
}

export default Footer;
