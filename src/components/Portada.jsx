
import React, { Component } from 'react';

class Portada extends Component {
  render() {
    return (
      <div className='portada'>
        <div className='portada background'>
          <div className='portada-text'>
            <div className='portada-text_title'>
              Accesorios
              <br />
              para bailarinas
            </div>
            <div className='portada-text_container-slogan'>
              <div className='portada-text_slogan'>
                Estamos creando algo
                <br />
                maravilloso para ti
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portada;
