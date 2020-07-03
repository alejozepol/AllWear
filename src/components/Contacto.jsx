
import React, { Component } from 'react';
import '../styles/Contacto.scss';

class Contacto extends Component {
  render() {
    return (
      <div className='Contacto'>
          <div className="contacto-container">
               <div><a href='https://www.facebook.com/allwear.gcd/' className='fa fa-facebook'></a></div>
               <div><a href='https://wa.me/573023367951?text=' className='fa fa-whatsapp'></a></div>
               <div><a href='https://instagram.com/allwear.gcd' className='fa fa-instagram'></a> </div>                 
          </div>
      </div>
    );
  }
}

export default Contacto;
