import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  useEffect(() => {
    const storedCart = getShoppingCart();

    const savedCart = [];
    // console.log(storedCart);

    for (const id in storedCart) { 
      const addedProduct = products.find(product => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);

      }
    }

    setCart(savedCart);
  }, [products])


  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);

    const exists = cart.find(product => product.id === selectedProduct.id);

    let newCart = [];
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];

    }
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, selectedProduct];
    }
    setCart(newCart);
    // console.log(cart);

    addToDb(selectedProduct.id);
  }


  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product key={product.id} product = {product} handleAddToCart = {handleAddToCart}></Product>)
        }
      </div >
      
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
      
      
    </div>
  );
};

export default Shop;