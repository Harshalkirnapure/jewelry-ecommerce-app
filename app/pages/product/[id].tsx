// pages/product/[id].tsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const products = [
  { id: 1, name: "Gold Necklace", image: "/Assets/Neclace.png", price: 1200, description: "Handcrafted gold necklace" },
  { id: 2, name: "Silver Ring", image: "/Assets/Dimond Ring.png", price: 600, description: "Elegant silver ring" },
  { id: 3, name: "Platinum Pendant", image: "/Assets/Platinum Pendant.png", price: 1200, description: "Handcrafted gold necklace" },
  { id: 4, name: "Silver Anklet", image: "/Assets/Silver Anklet.png", price: 600, description: "Elegant silver ring" },
];

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg w-96 relative">
      <button
        onClick={() => router.back()}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
      >
        &times;
      </button>
      <Image  width={48} height={48} src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-700 mt-2">₹{product.price}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
