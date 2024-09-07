import React, { useContext, useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import OrderDetails from "./OrderDetails";
import orderDataFromCart from "../../loader/orderDataFromCart";
import useProductDataLoad from "../../hooks/useProductDataLoad";
import { RefetchContext } from "../../Providers/RefetchProvider";

const Cart = () => {
  const { refetch, setRefetch } = useContext(RefetchContext);

  const [productData, setProductData] = useState([]);
  const { products } = useProductDataLoad();

  useEffect(() => {
    if (products && products.length > 0) {
      const loadedCartData = orderDataFromCart(products);
      setProductData(loadedCartData);
    }
  }, [products, refetch]);

  return (
    <section className="container">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <ProductTable productData={productData}></ProductTable>
        <OrderDetails productData={productData}></OrderDetails>
      </div>
    </section>
  );
};

export default Cart;
