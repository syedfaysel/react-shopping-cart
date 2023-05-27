import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {

  const { name, img, seller, price, ratings } = product;
  
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
      <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
        <p>by: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(product)}>
        <p className='btn-text'>Add to Cart</p>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;