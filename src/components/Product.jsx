import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.scss';

const Product = ({ cover, category1, category2, title, description }) => (
  <div className='product'>
    <div className='product-container'>
      <div className='product-img'>
        <Link to='/'>
          <img className='product-img' src={cover} alt='' />
        </Link>
      </div>
      <div className='product-tags'>
        <div className='product-tags_hastags'>
          <Link to='/'>{category1}</Link>
          <Link to='/'>{category2}</Link>
        </div>
      </div>
      <div className='product-text_container'>
        <div className='product-title'>
          {title}
        </div>
        <div className='product-text'>
          {description}
          <div className='readMore'>
            <Link to='/'>comprar</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Product;