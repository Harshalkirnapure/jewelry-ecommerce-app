"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
}
interface CheckoutPageProps {
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ setActiveItem }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Pay at Store");

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedTotal = localStorage.getItem("total");

    if (storedCartItems && storedTotal) {
      setCartItems(JSON.parse(storedCartItems));
      setTotal(JSON.parse(storedTotal));
    }
  }, []);

  const handlePlaceOrder = () => {
    const form = document.querySelector("form");
    if (!form) return;

    const formData = new FormData(form);

    const shippingDetails = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      company: formData.get("company"),
      address1: formData.get("address1"),
      address2: formData.get("address2"),
      city: formData.get("city"),
      zip: formData.get("zip"),
      state: formData.get("state"),
      phone: formData.get("phone"),
    };

    const orderData = {
      cartItems,
      total,
      shippingDetails,
      paymentMethod,
    };

    // Save full order info
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Clear cart items
    localStorage.removeItem("cartItems");
    localStorage.removeItem("total");

    // You could redirect to a thank-you page or back to the main page
    setActiveItem("Thankyou");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="mb-4">There are no items in your cart to checkout.</p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Return to Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left: Contact & Shipping Info */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
            >
              Back to Home
            </button>
          </div>

          {/* form details */}
          <form className="space-y-6">
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Shipping address</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">First name*</label>
                  <input
                    name="firstName"
                    className="w-full border px-4 py-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Last name*</label>
                  <input
                    name="lastName"
                    className="w-full border px-4 py-2 rounded"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Company</label>
                  <input
                    name="company"
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">Street address*</label>
                  <input
                    name="address1"
                    className="w-full border px-4 py-2 rounded"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1">
                    Street address (continue)
                  </label>
                  <input
                    name="address2"
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">City*</label>
                  <input
                    name="city"
                    className="w-full border px-4 py-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Zip code*</label>
                  <input
                    name="zip"
                    className="w-full border px-4 py-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">State*</label>
                  <select
                    name="state"
                    className="w-full border px-4 py-2 rounded"
                    required
                  >
                    <option value="">Choose a state</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Chattisgarh">Chattisgarh</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Phone number*</label>
                  <input
                    name="phone"
                    className="w-full border px-4 py-2 rounded"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="checkbox"
                  id="billingSame"
                  name="billingSame"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="billingSame">
                  Use shipping address as billing address
                </label>
              </div>
            </div>

            <div>
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Payment methods</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="payAtStore"
                      name="paymentMethod"
                      value="Pay at Store"
                      checked={paymentMethod === "Pay at Store"}
                      onChange={() => setPaymentMethod("Pay at Store")}
                      className="mr-2"
                    />
                    <label htmlFor="payAtStore">Pay at Store</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={() => setPaymentMethod("Cash on Delivery")}
                      className="mr-2"
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 text-lg"
              >
                Place Order Now
              </button>
            </div>
          </form>
        </div>

        {/* Right: Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">Summary</h3>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800 font-semibold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping cost</span>
              <span>₹0.00</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-base">
              <span>Total price</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
