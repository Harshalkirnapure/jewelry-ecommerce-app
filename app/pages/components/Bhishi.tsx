import React, { useState } from "react";

const bhishiContent = {
  activeYear: {
    title: "Active Year: 2024-2025",
    history: [
      { date: "05/January", amount: "₹1000" },
      { date: "05/December", amount: "₹2000" },
      { date: "05/November", amount: "₹3000" },
      { date: "05/October", amount: "₹4000" },
      { date: "05/September", amount: "₹5000" },
      { date: "05/August", amount: "₹6000" },
      { date: "05/July", amount: "₹7000" },
      { date: "05/June", amount: "₹9000" },
      { date: "05/May", amount: "₹10000" },
      { date: "05/April", amount: "₹11000" },
    ],
  },
  inactive: [
    {
      year: "2023-2024",
      amount: "₹37000",
      history: [
        { date: "05/March", amount: "₹1000" },
        { date: "05/February", amount: "₹1000" },
        { date: "05/January", amount: "₹1000" },
        { date: "05/December", amount: "₹2000" },
        { date: "05/November", amount: "₹3000" },
        { date: "05/October", amount: "₹1000" },
        { date: "05/September", amount: "₹2000" },
        { date: "05/August", amount: "₹6000" },
        { date: "05/July", amount: "₹1000" },
        { date: "05/June", amount: "₹9000" },
        { date: "05/May", amount: "₹9000" },
        { date: "05/April", amount: "₹1000" },
      ],
    },
    {
      year: "2022-2023",
      amount: "₹25000",
      history: [
        { date: "05/January", amount: "₹2000" },
        { date: "05/February", amount: "₹3000" },
        { date: "05/March", amount: "₹1500" },
        { date: "05/April", amount: "₹2000" },
        { date: "05/May", amount: "₹2500" },
        { date: "05/June", amount: "₹3000" },
        { date: "05/July", amount: "₹1000" },
        { date: "05/August", amount: "₹1500" },
        { date: "05/September", amount: "₹2000" },
        { date: "05/October", amount: "₹2000" },
        { date: "05/November", amount: "₹2500" },
        { date: "05/December", amount: "₹1000" },
      ],
    },
  ],
};

const Bhishi: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<null | typeof bhishiContent.inactive[0]>(null);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{bhishiContent.activeYear.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {bhishiContent.activeYear.history.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <p className="font-bold">{item.date}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Inactive Years</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {bhishiContent.inactive.map((item, index) => (
            <div
             key={index} className="bg-gray-100 p-4 rounded shadow transform transition-transform duration-200 hover:-translate-y-1"
              onClick={() => setSelectedYear(item)}
            >
              <p className="font-bold">{item.year}</p>
              <p>{item.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedYear && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded shadow max-w-3xl w-full">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Year: {selectedYear.year}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              {selectedYear.history.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded shadow">
                  <p className="font-bold">{item.date}</p>
                  <p>{item.amount}</p>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedYear(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bhishi;
