'use client';
import React from 'react';
import {
  CheckCircle,
  Hammer,
  SearchCheck,
  Store,
  Truck,
} from 'lucide-react';

const items = [
  { name: 'Ring', weight: '10g', carat: '22k', price: '₹1000', status: 'Ready' },
  { name: 'Chain', weight: '10g', carat: '22k', price: '₹1000', status: 'Crafting' },
  { name: 'Necklace', weight: '10g', carat: '22k', price: '₹1000', status: 'Pending' }
];

// Dynamically determine current step based on item statuses
const getCurrentStepIndex = () => {
  if (items.some(item => item.status === 'Crafting')) return 1; // Craftsman Making
  if (items.every(item => item.status === 'Ready')) return 2; // QA
  return 0; // Order Received
};

const currentStepIndex = getCurrentStepIndex();

const steps = [
  { label: 'Order Received', icon: <CheckCircle size={20} /> },
  { label: 'Craftsman Making', icon: <Hammer size={20} /> },
  { label: 'Quality Analysis', icon: <SearchCheck size={20} /> },
  { label: 'Ready at Store', icon: <Store size={20} /> },
  { label: 'Out for Delivery', icon: <Truck size={20} /> }
];

const OrderStatusPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-100 rounded-xl shadow-lg space-y-8">

      {/* Customer Information */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Customer Information</h2>
        <p><strong>Name:</strong> Yash mahadule</p>
        <p><strong>Phone Number:</strong> 8392355232</p>
        <p><strong>Address:</strong> 225 Main St, bhusawad 411936</p>
      </div>

      {/* Shop Information */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Shop Information</h2>
        <p><strong>Shop Name:</strong> Rakesh Jewellers</p>
        <p><strong>Phone Number:</strong> 8392355232</p>
      </div>

      {/* Order Items */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Order Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <span className="text-green-600 text-xl">✅</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Weight:</strong> {item.weight}</p>
                <p><strong>Carat:</strong> {item.carat}</p>
                <p>
                  <strong>Price:</strong>{' '}
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">Item Progress</h2>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-md px-4 py-3 shadow-sm">
              <span className="font-medium text-gray-800">{item.name}</span>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  item.status === 'Ready'
                    ? 'bg-green-100 text-green-700'
                    : item.status === 'Crafting'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Status */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-6">Order Status</h2>
        <div className="flex items-center justify-between relative">
          {/* Connector Line */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-300 z-0">
            <div
              className="h-1 bg-green-500 z-10"
              style={{
                width: `${(currentStepIndex) / (steps.length -1.5) * 100}%`,
              }}
            ></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="z-10 flex flex-col items-center w-1/5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-lg transition duration-300 ${
                  idx <= currentStepIndex
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-100 text-blue-600'
                }`}
              >
                {step.icon}
              </div>
              <span
                className={`text-xs text-center font-medium ${
                  idx <= currentStepIndex ? 'text-green-600' : 'text-gray-700'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OrderStatusPage;
