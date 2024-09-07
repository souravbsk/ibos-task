import React, { useState } from "react";
import SideBar from "./SideBar";
import ProductBar from "./ProductBar/ProductBar";

const Product = () => {
  const [cat, setCat] = useState(null);
  return (
    <div className="container relative">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-16">
        <SideBar cat={cat} setCat={setCat}></SideBar>
        <ProductBar cat={cat} setCat={setCat}></ProductBar>
      </div>
    </div>
  );
};

export default Product;
