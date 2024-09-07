import React, { useEffect, useState } from "react";
import useProductDataLoad from "../../../hooks/useProductDataLoad";
import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductBar = ({ cat, setCat }) => {
  const [productData, setProductData] = useState([]);
  const { products } = useProductDataLoad();
  const [loading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    const filterProducts = () => {
      setIsLoading(true);
      let filteredProducts = products;

      if (cat) {
        filteredProducts = products.filter(
          (product) =>
            product?.cat?.toLowerCase() === cat.toLowerCase()
        );
      }

      setProductData(filteredProducts);
      setIsLoading(false);
    };

    filterProducts();
  }, [cat, products]);

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = productData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const createPagination = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === i ? "bg-black text-white" : "bg-white"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="lg:col-span-3">
      {loading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {currentProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 border rounded bg-white"
            >
              &lt;
            </button>
            {createPagination()}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 border rounded bg-white"
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductBar;
