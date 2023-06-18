import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const productsData = await fetch('products.json');
  const products = await productsData.json();


  //  Get Cart Data

  const savedCart = getShoppingCart();
  const initialCart = [];
  // console.log(savedCart);
  for (const id in savedCart) {
    const addedProduct = products.find(product => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
    
  }
  // console.log(initialCart, savedCart);

  return {products, initialCart};

}