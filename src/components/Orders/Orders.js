import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Orders = () => {

  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {
            products.map(product =><Product key={product.id} product={product}></Product>)
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>

      </div>
    </div>
  );
};

export default Orders;