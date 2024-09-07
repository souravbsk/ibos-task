import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../Providers/OrderProvider";

const OrderSummary = () => {
  const [subtotal, setSubtotal] = useState(0);
  const { products } = useContext(OrderContext);

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = products.reduce((sum, product) => {
        return sum + (product.price || 0) * (product.quantity || 0);
      }, 0);
      setSubtotal(total);
    };

    if (products && products.length > 0) {
      calculateSubtotal();
    } else {
      setSubtotal(0);
    }
  }, [products]);

  if (!products || products.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <p>No products in your order.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <div className="bg-[#fafafa] space-y-3 rounded-lg text-[#656565] text-xl font-medium border p-6">
        <div className="flex items-center justify-between gap-4">
          <p>Subtotal</p>
          <p>€ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Estimated Tax</p>
          <p>€ -</p>
        </div>
        <div className="divider"></div>
        <div className="flex text-2xl font-bold items-center justify-between gap-4">
          <p>Total</p>
          <p className="text-black">€ {subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
