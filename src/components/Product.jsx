import React, { useState } from 'react';

const Product =
({ cover, cover2, cover3, cover4, cover5, category1, category2, category3, title, description, color1, color2, color3, color4, color5, talla, precio, REF }) => {

  const [_cover, setCover] = useState(cover);

  const setColor = (number) => {
    switch (number) {
      case 1:
        setCover(cover);
        break;
      case 2:
        setCover(cover2);
        break;
      case 3:
        setCover(cover3);
        break;
      case 4:
        setCover(cover4);
        break;
      case 5:
        setCover(cover5);
        break;

      default:
        setCover(cover);
        break;
    }

  };

  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-img'>
          <img className='product-img' src={_cover} alt={`imagen ${title}`} />
        </div>
        <div className='product-text_container'>
          <div className='product-title'>
            {title}
          </div>
          <div className='product-text'>
            <ul>
              <li>
                <h3 className='despegable'>MAS INFORMACIÓN</h3>
                <ul className='despegable-content'>
                  <li className='despegable-content'>{description}</li>
                  <li className='despegable-content' onClick={() => setColor(1)}>{color1} <span className={`imagen ${title}`}>  </span></li>
                  <li className='despegable-content' onClick={() => setColor(2)}>{color2}</li>
                  <li className='despegable-content' onClick={() => setColor(3)}>{color3}</li>
                  <li className='despegable-content' onClick={() => setColor(4)}>{color4}</li>
                  <li className='despegable-content' onClick={() => setColor(5)}>{color5}</li>
                  <li className='despegable-content'>{talla}</li>
                  <li className='despegable-content'>{REF}</li>
                </ul>
              </li>
            </ul>
            <div>{precio}</div>
            <div>
              <a className='readMore' href='https://wa.me/573023367951?text='>COMPRAR</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
