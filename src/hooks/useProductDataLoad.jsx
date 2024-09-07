import { useEffect, useState } from "react";

const useProductDataLoad = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return { products, setProducts };
};

export default useProductDataLoad;
