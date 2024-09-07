import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { addToDb, removeFromDb, decreaseFromDb } from "../../utils/fakedb"; // Import decrease function
import { RefetchContext } from "../../Providers/RefetchProvider";

const ProductCartBox = ({ product }) => {
  const { refetch, setRefetch } = useContext(RefetchContext);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setQuantity(product?.quantity);
    setTotalPrice(product?.price * product?.quantity);
  }, [product]);

  const handleRemoveProduct = (id) => {
    removeFromDb(id);
    setRefetch(!refetch);
  };

  const handleIncreaseQTY = (id) => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(product?.price * newQuantity);
    addToDb(id);
    setRefetch(!refetch);
  };

  const handleDecreaseQTY = (id) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(product?.price * newQuantity);
      decreaseFromDb(id);
      setRefetch(!refetch);
    } else {
      handleRemoveProduct(id);
    }
  };

  return (
    <div className="py-6">
      <div className="flex items-start justify-between">
        <div className="flex lg:flex-row flex-col ">
          <div className="flex  lg:flex-row md:flex-row-reverse flex-col-reverse   items-center gap-6">
            <div className="flex px-3 py-2 rounded-md border items-center">
              <button
                onClick={() => handleDecreaseQTY(product?.id)}
                className="text-2xl px-2"
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="max-w-full border-0 outline-none w-12 text-lg font-bold text-center"
              />
              <button
                onClick={() => handleIncreaseQTY(product?.id)}
                className="text-2xl px-2"
              >
                +
              </button>
            </div>
            <img
              className="w-32 h-32 rounded-lg border"
              src={product?.image}
              alt=""
            />
          </div>
          <h1 className="text-xl lg:p-6 pt-3 font-bold">{product?.name}</h1>
        </div>
        <div>
          <button
            onClick={() => handleRemoveProduct(product?.id)}
            className="text-3xl"
          >
            <IoMdClose />
          </button>
        </div>
      </div>
      <p className="text-xl md:text-right mt-4 font-bold">
        €{totalPrice.toFixed(2)} {/* Display the total price */}
      </p>
    </div>
  );
};

export default ProductCartBox;
