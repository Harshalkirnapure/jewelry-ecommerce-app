"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ThankYouPage() {
  const [orderData, setOrderData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("orderData");
    if (stored) {
      setOrderData(JSON.parse(stored));
    }
  }, []);

  if (!orderData)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600 animate-pulse">Loading order details...</div>
      </div>
    );

  const { cartItems, total, shippingDetails } = orderData;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full space-y-6 animate-fade-in">
        <div className="flex items-center space-x-4">
          <CheckCircleIcon className="h-12 w-12 text-green-500 animate-bounce-in" />
          <h1 className="text-3xl font-bold text-green-700">Thank you for your order!</h1>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping Info</h2>
          <div className="bg-gray-100 rounded-lg p-4 text-gray-700">
            <p>{shippingDetails.firstName} {shippingDetails.lastName}</p>
            <p>{shippingDetails.address1}, {shippingDetails.address2}</p>
            <p>{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zip}</p>
            <p>Phone: {shippingDetails.phone}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Items Ordered</h2>
          <div className="divide-y divide-gray-200">
            {cartItems.map((item: any) => (
              <div key={item.id} className="flex justify-between py-2 text-gray-700">
                <span>{item.name} <span className="text-sm text-gray-500">(x{item.quantity})</span></span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-right text-xl font-bold text-gray-800">
          Total Paid: <span className="text-green-600">₹{total}</span>
        </div>

        <div className="text-center">
          <p className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"> Thank You</p>
        </div>

        {/* ✅ Return to Home Button
        <div className="text-center">
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Return to Home
          </button>
        </div> */}
      </div>
    </div>
  );
}
