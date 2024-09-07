import React, { useContext, useEffect } from "react";
import { BsBucket } from "react-icons/bs";
import { addToDb } from "../../utils/fakedb";
import { RefetchContext } from "../../Providers/RefetchProvider";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { refetch, setRefetch } = useContext(RefetchContext);
  const handleProductBuy = (id) => {
    console.log(id);

    if (user) {
      addToDb(id);
      setRefetch(!refetch);
    } else {
      Swal.fire({
        title: "Please Login",
        text: "For Add To Cart Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="p-4  bg-base-100  border rounded-md">
      <figure className="">
        <img
          src={product?.image}
          alt={product?.name}
          className="rounded-md w-full h-60"
        />
      </figure>
      <div className="space-y-3 mt-8">
        <h2 className="text-xl font-bold">{product?.name}</h2>
        <p className="text-xl font-semibold flex items-center justify-between">
          <span className="">€{product?.price?.toFixed(2)}</span>
          <span className="text-gray-400">
            <s>€{product?.sub_price?.toFixed(2)}</s>
          </span>{" "}
          <span className="text-red-600">{product?.discount}% OFF</span>
        </p>
        <p>
          It has a backrest that can be tilted back, and often a footrest
          extended
        </p>
        <div>
          <button
            onClick={() => handleProductBuy(product?.id)}
            className=" mt-6  bg-black w-full p-3 text-white rounded-md flex items-center justify-center gap-3"
          >
            <BsBucket className="text-lg" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
