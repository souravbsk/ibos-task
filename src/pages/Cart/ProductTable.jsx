import React, { useEffect, useState } from "react";
import ProductCartBox from "../../components/ProductCartBox/ProductCartBox";

const ProductTable = ({ productData }) => {
  return (
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold pb-8">An overview of your order</h2>
      <div className="divide-y md:px-8">
        {productData?.map((product) => (
          <ProductCartBox product={product} key={product?.id}></ProductCartBox>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
