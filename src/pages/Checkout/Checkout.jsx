import React, { useContext, useState } from "react";
import InputwithLabel from "../../components/InputwithLable/InputwithLable";
import { CartContext } from "../../Providers/CartProvider";
import OrderSummary from "./OrderSummary";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deleteShoppingCart } from "../../utils/fakedb";
import { RefetchContext } from "../../Providers/RefetchProvider";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const { refetch, setRefetch } = useContext(RefetchContext);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout process
    console.log("Order placed", formData);
  };

  const handlePlaceOrder = () => {
    deleteShoppingCart();
    navigate("/");
    setRefetch(!refetch);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Order Successfully Created",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <section className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <InputwithLabel
                labelText="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <InputwithLabel
                labelText="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <InputwithLabel
                labelText="Address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <InputwithLabel
                labelText="City"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <InputwithLabel
                labelText="Postal Code"
                name="postalCode"
                type="text"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
              <InputwithLabel
                labelText="Country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Payment Information
            </h2>
            <div className="grid gap-4">
              <InputwithLabel
                labelText="Card Number"
                name="cardNumber"
                type="text"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <InputwithLabel
                  labelText="Expiry Date"
                  name="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
                <InputwithLabel
                  labelText="CVV"
                  name="cvv"
                  type="text"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="bg-black w-full py-4 mt-6 rounded-md text-white text-lg font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>

        <div>
          <OrderSummary cartItems={cartItems} totalAmount={totalAmount} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
