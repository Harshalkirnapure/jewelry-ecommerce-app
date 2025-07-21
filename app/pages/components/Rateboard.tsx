// /components/Rateboard/Rateboard.tsx
import React from "react";
import Image from "next/image";

const rateboardCards = [
  {
    title: "Gold Sell Rates (per 10 gm)",
    image: "./Assets/gold.svg",
    data: ["14K - 64,000", "18K - 65,000", "21K - 68,820", "22K - 70,300", "23K - 71,040", "23.99K - 73,260", "24K - 74,000"]
  },
  {
    title: "Gold Purchase Rates (per 10 gm)",
    image: "/Assets/gold.svg",
    data: ["14K - 56,320", "18K - 57,850", "21K - 61,940", "22K - 63,970", "23K - 65,360", "23.99K - 71,790", "24K - 73,000"]
  },
  {
    title: "Silver Sell Rates (per kg)",
    image: "/Assets/gold.svg",
    data: ["14K - 56,320", "18K - 57,850", "21K - 61,940", "22K - 63,970", "23K - 65,360", "23.99K - 71,790", "24K - 73,000"]
  },
  {
    title: "Silver Purchase Rates (per kg)",
    image: "/Assets/gold.svg",
    data: ["14K - 56,320", "18K - 57,850", "21K - 61,940", "22K - 63,970", "23K - 65,360", "23.99K - 71,790", "24K - 73,000"]
  },
];

const Rateboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {rateboardCards.map((card, index) => (
        <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
          <Image src={card.image} width={32} height={32} alt={card.title} className="w-auto h-auto object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg mb-2">{card.title}</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              {card.data.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rateboard;
