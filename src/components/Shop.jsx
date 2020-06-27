import React, { useState } from 'react';
import Product from './Product';
import '../styles/Shop.scss';
import { initialState } from '../../initialState.json';

const Shop = () => {
  const categorys = [];

  initialState.allProducts.map((item) => {
    categorys.push(
      {
        category1: item.category1,
        category2: item.category2,
        category3: item.category3,
      },
    );
  });

  const [products, setProducts] = useState(initialState.allProducts);

  const filterProducts = (category3) => {
    const p = initialState.allProducts.filter((item) => item.category3 === category3);
    setProducts(p);
  };

  return (
    <div className='shop-container'>
      <div className='aside-container'>
        <div className='title'>
          <h2>Categorias</h2>
        </div>
        <div className='aside'>
          {
            initialState.allProducts.map((item) => (
              <ul>
                <li className='shop-category'>
                  {item.category1}
                  <ul>
                    <li className='shop-subcategory'>
                      {item.category2}
                      <ul>
                        <li className='shop-microcategory' onClick={() => filterProducts(item.category3)}>
                          {item.category3}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            ))
          }
        </div>
      </div>
      <div className='shop-box'>
        <div className='shop-box_title'><h2>title</h2></div>
        <div className='shop-box__container'>
          {products.map((item) => <Product key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );

};

export default Shop;
