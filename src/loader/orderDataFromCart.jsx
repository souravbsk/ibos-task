import useProductDataLoad from "../hooks/useProductDataLoad";
import { getShoppingCart } from "../utils/fakedb";

const orderDataFromCart = (products) => {
  const storeCart = getShoppingCart();
  const savedCart = [];

  for (const id in storeCart) {
    const addedCart = products.find((product) => product.id == id);
    if (addedCart) {
      const quantityValue = storeCart[id];
      addedCart.quantity = quantityValue;
      savedCart.push(addedCart);
    }
  }

  console.log(savedCart);
  return savedCart;
};

export default orderDataFromCart;
