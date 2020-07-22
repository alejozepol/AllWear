import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Aside extends Component {
  render() {
    return (
      <div className='aside-container'>
        <div className='title'><h2>Categorias</h2></div>
        <div className='aside'>
          <ul>
            <li className='shop-category'>
              Danza
              <ul>
                <li className='shop-subcategory'>
                  Ballet
                  <ul>
                    <li className='shop-microcategory'>Zapatillas de punta</li>
                    <li className='shop-microcategory'>Zapatillas de media punta</li>
                    <li className='shop-microcategory'>Mallas</li>
                    <li className='shop-microcategory'>Trusas</li>
                    <li className='shop-microcategory'>Faldas / Shorts / Tutus</li>
                    <li className='shop-microcategory'>Accesorios para pies</li>
                    <li className='shop-microcategory'>Botas de calentamiento</li>
                    <li className='shop-microcategory'>Bolsos y otros accesorios</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Jazz / Tap
                  <ul>
                    <li className='shop-microcategory'>Trusas</li>
                    <li className='shop-microcategory'>Mallas</li>
                    <li className='shop-microcategory'>Zapatos para Jazz</li>
                    <li className='shop-microcategory'>Zapatos para Tap</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Urbana
                  <ul>
                    <li className='shop-microcategory'>Dansneakers</li>
                    <li className='shop-microcategory'>Pantalones</li>
                    <li className='shop-microcategory'>Chaquetas y sacos</li>
                    <li className='shop-microcategory'>tops</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Salsa y tango
                  <ul>
                    <li className='shop-microcategory'>Zapatos y zapatillas</li>
                    <li className='shop-microcategory'>Mallas</li>
                    <li className='shop-microcategory'>Vestidos</li>
                    <li className='shop-microcategory'>Trusas</li>
                    <li className='shop-microcategory'>Pantalones</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Accesorios
                  <ul>
                    <li className='shop-microcategory'>Bolsos</li>
                    <li className='shop-microcategory'>Accesorios para el cabello</li>
                    <li className='shop-microcategory'>Accesorios para pies</li>
                    <li className='shop-microcategory'>Rodilleras</li>
                    <li className='shop-microcategory'>Camisetas</li>
                    <li className='shop-microcategory'>Carcasas</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='shop-category'>
              Gimnasia
              <ul>
                <li className='shop-subcategory'>
                  Trusas
                  <ul>
                    <li className='shop-microcategory'>Trusas para entrenamiento</li>
                    <li className='shop-microcategory'>Trusas para competencia</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Punteras
                  <ul>
                    <li className='shop-microcategory'>Punteros en lana</li>
                    <li className='shop-microcategory'>Punteros en cuero</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Accesorios
                  <ul>
                    <li className='shop-microcategory'>Carcasas para moviles</li>
                    <li className='shop-microcategory'>Camisetas</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='shop-category'>
              Porrismo
              <ul>
                <li className='shop-subcategory'>
                  Zapatillas
                  <ul>
                    <li className='shop-microcategory'>Zapatos</li>
                    <li className='shop-microcategory'>Punteras</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>
                  Mallas
                  <ul>
                    <li className='shop-microcategory'>Mallas con estribo</li>
                    <li className='shop-microcategory'>Mallas convertibles</li>
                  </ul>
                </li>
                <li className='shop-subcategory'>Moños</li>
              </ul>
            </li>
            <li className='shop-category'>Fitness</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Aside;
