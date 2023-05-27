import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + (product.price * quantity);
    shipping = shipping + product.shipping;
    
  }

  let vat = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = parseFloat((total + vat + shipping).toFixed(2));


  return (
    <div className='cart'>
      <h3>This is cart</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>VAT: $ {vat}</p>
      <p>Shipping Charge: {shipping}</p>
      <h5>Grand Total: $ {grandTotal}</h5>
    </div>
  );
};

export default Cart;