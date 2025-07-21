import React, { useState } from "react";
import Image from "next/image";

const catalogItems = [
  {
    title: "Gold Necklace",
    image: "/Assets/Neclace.png",
    description: "22K Gold Necklace with intricate design.",
  },
  {
    title: "Diamond Ring",
    image: "/Assets/Dimond Ring.png",
    description: "Elegant diamond ring set in white gold.",
  },
  {
    title: "Silver Anklet",
    image: "/Assets/Silver Anklet.png",
    description: "Handcrafted pure silver anklet.",
  },
  {
    title: "Platinum Pendant",
    image: "/Assets/Platinum Pendant.png",
    description: "Minimalist platinum pendant for daily wear.",
  },
  {
    title: "Finger Ring",
    image: "/Assets/finger ring.png",
    description: "Minimalist platinum pendant for daily wear.",
  },
  {
    title: "Chain",
    image: "/Assets/chain.png",
    description: "Minimalist platinum pendant for daily wear.",
  },
];

const JewelleryCatalog: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<null | typeof catalogItems[0]>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {catalogItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
             <div className="flex justify-center mt-4">
                 <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover"
               />
             </div>
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg max-w-sm shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              width={200}
              height={200}
              className="object-contain mb-4 mx-auto"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{selectedItem.title}</h2>
            <p className="text-gray-700 text-center">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JewelleryCatalog;
