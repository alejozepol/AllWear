import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logobn.png';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-img'>
            <img className='footer-img_img' src={logo} alt='logo' />

          </div>
          <div className='footer-menu'>
            <ul>
              <li><Link to='/'>INICIO</Link></li>
              <li><Link to='/portafolio'>PORTAFOLIO</Link></li>
            </ul>
          </div>
          <div className='footer-about'>
            <div className='footer-about_text'>
              <p className='footer-about_txt'>Bogotá, Colombia</p>
              <p className='footer-about_txt'>
                <a href='https://wa.me/573023367951'>
                  <strong>Telefono</strong>
                  {' '}
                  <span>+573023367951</span>
                </a>
              </p>
              <p className='footer-about_txt'>allwear.gcd@gmail.com</p>
            </div>
          </div>
          <div className='footer-'>
            <div className='footer-about_text'>
              ALL WE – AR by Lorena Alfonso.
              Comunidad en movimiento.
              <br />
              Asesoría y venta de artículos para danza de marcas nacionales e internacionales con enfoque especial en prevención de lesiones con el uso de las zapatillas de punta.
              <br />
              Gestión de espacios para compartir con estudiantes, maestros y personalidades de la danza para promover el crecimiento del conocimiento en el sector y la práctica de los distintos géneros de movimiento a través de talleres gratuitos, conversatorios y clases dirigidas a niñas, estudiantes de danza y adultos.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
