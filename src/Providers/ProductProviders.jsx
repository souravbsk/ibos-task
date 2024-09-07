import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext(null);

const ProductProviders = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProviders;
