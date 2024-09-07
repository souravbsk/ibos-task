import React, { createContext, useEffect, useState } from "react";

export const OrderContext = createContext([]);

const OrderProvider = ({ children }) => {
  const [products, setProductData] = useState([]);

  useEffect(() => {
    // Example of fetching data
    const fetchProducts = () => {
      const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
      setProductData(savedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <OrderContext.Provider value={{ products, setProductData }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
