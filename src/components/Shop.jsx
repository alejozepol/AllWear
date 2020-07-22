import React, { useState } from 'react';
import Product from './Product';
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

  const filterProducts3 = (category3) => {
    const p = initialState.allProducts.filter((item) => item.category3 === category3);
    setProducts(p);
  };
  const filterProductsInialState = () => {
    const p = initialState.allProducts;
    setProducts(p);
  };
  return (
    <div className='shop-container'>
      <div className='aside-container'>
        <div className='title'>
          <h2 onClick={() => filterProductsInialState()}>CATEGORIAS</h2>
        </div>
        <div className='aside'>
          <ul>
            {
              initialState.Categorys.map((item) => (
                <li key={item.id} className='shop-category'>
                  {item.name}
                  <ul>
                    {
                      item.nivel2.map((item) => (
                        <li key={item.id} className='shop-subcategory'>
                          {item.name}
                          <ul>
                            {
                              item.nivel3.map((item) => (
                                <li
                                  key={item.id}
                                  className='shop-subcategory'
                                  onClick={() => filterProducts3(item)}
                                >
                                  {item}
                                </li>
                              ))
                            }
                          </ul>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
          <h3 onClick={() => filterProductsInialState()}>Todos los productos</h3>
        </div>
      </div>
      <div className='shop-box'>
        <div className='shop-box_title'><h2>PRODUCTOS</h2></div>
        <div className='shop-box__container'>
          {products.map((item) => <Product key={item.id} {...item} />)}
        </div>
        <h3 onClick={() => filterProductsInialState()}>Todos los productos</h3>
      </div>
    </div>
  );

};

export default Shop;
