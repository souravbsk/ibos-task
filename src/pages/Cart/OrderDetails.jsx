import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../Providers/OrderProvider";
import { Link } from "react-router-dom";

const OrderDetails = ({ productData }) => {
  const [subtotal, setSubtotal] = useState(0);
  const { setProductData } = useContext(OrderContext);

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = productData.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0);
      setSubtotal(total);
    };

    if (productData.length > 0) {
      calculateSubtotal();
      setProductData(productData);
    } else {
      setSubtotal(0);
    }
  }, [productData, setProductData]);

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold pb-8">Order details</h2>
        <div className="bg-[#fafafa] space-y-3 rounded-lg text-[#656565] text-xl font-medium border p-6">
          <div className="flex items-center justify-between gap-4">
            <p>Subtotal</p>
            <p>€ {subtotal.toFixed(2)}</p> {/* Display dynamic subtotal */}
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
            <p className="text-black">€ {subtotal.toFixed(2)}</p>{" "}
          </div>
        </div>
        <div className="mt-8">
          <Link to="/checkout">
            <button className="bg-black w-full p-5 rounded-md text-white uppercase">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
