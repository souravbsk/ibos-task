import React, { useContext } from "react";
import { ProductContext } from "../../Providers/ProductProviders";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container mt-20">
      <h2 className="lg:text-4xl text-2xl font-semibold text-center mb-10 ">
        Our Products
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {products?.slice(0, 6)?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/products">
          <button className="btn bg-black  text-white hover:text-black">
            More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
