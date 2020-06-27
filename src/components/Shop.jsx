import React from 'react';
import Aside from './Aside';
import Product from './Product';
import '../styles/Shop.scss';
import useInitialState from '../hooks/useInitialState';
import { initialState } from '../../initialState.json';
// import { Link } from 'react-router-dom';

const API = 'http://localhost:3000/initialState';

const Shop = () => {
    // const initialState = useInitialState(API);
    return (
      <div className='shop-container'>
        <Aside />      
        <div className='shop-box'>
            <div className="shop-box_title"><h2>title</h2></div>
            <div className="shop-box__container">                
                {initialState.allProducts.map((item) => <Product key={item.id} {...item} />)}
            </div>
        </div>
      </div>
    );

}

export default Shop;
