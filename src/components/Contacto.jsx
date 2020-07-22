
import React, { Component } from 'react';

class Contacto extends Component {
  render() {
    return (
      <div className='Contacto'>
        <div className='contacto-container'>
          <div className='contacto-container_a'><a href='https://www.facebook.com/allwear.gcd/' className='fa fa-facebook'> </a></div>
          <div className='contacto-container_a'><a href='https://wa.me/573023367951?text=' className='fa fa-whatsapp'> </a></div>
          <div className='contacto-container_a'><a href='https://instagram.com/allwear.gcd' className='fa fa-instagram'> </a></div>
          <div className='contacto-container_a'><a href='https://www.youtube.com/channel/UC6yG0t1kFAgACHz_wtSyYrg' className='fa fa-youtube'> </a></div>
        </div>
      </div>
    );
  }
}

export default Contacto;
