import React, { createContext, useEffect, useState, useContext } from "react";
import { getShoppingCart } from "../utils/fakedb";
import { RefetchContext } from "./RefetchProvider";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [productLength, setProductLength] = useState(0);
  const { refetch } = useContext(RefetchContext); // Use refetch from the context

  useEffect(() => {
    const shoppingCart = localStorage.getItem("shopping-cart");

    if (shoppingCart) {
      const cartProducts = getShoppingCart(); // Fetch the products from localStorage

      let productCount = 0;
      for (const [key, value] of Object.entries(cartProducts)) {
        productCount += Number(value); // Sum up product quantities
      }

      setProductLength(productCount); // Update product length
    }
  }, [refetch]); // Re-run this effect when `refetch` changes

  const product = {
    productLength,
  };

  return (
    <CartContext.Provider value={product}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
