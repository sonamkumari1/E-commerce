import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting';


function ProductCards({ GridList, products }) {
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={i} className={`col-lg-${GridList ? '4' : '12'} col-md-6 col-12`}>
          <div className={GridList ? 'product-item' : 'product-list-item'}>
            {/* product images */}
            <div className='product-thumb'>
              <div className='pro-thumb'>
                <img src={product.img} alt={product.name} />
              </div>

              {/* product action links */}
              <div className='product-action-link'>
                <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                <a href="#"><i className='icofont-heart'></i></a>
                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
              </div>
            </div>

            {/* product content */}
            <div className='product-content'>
              <h6>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h6>
              <p className='productRating'>
                <Ratting />
              </p>
              <h6>{product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
