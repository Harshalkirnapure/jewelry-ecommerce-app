import React, { useState } from "react";
import CartDrawer from "./CartDrawer";

const products = [
  { id: 1, name: "Gold Necklace", image: "/Assets/Neclace.png", price: 1200, description: "Handcrafted gold necklace" },
  { id: 2, name: "Silver Ring", image: "/Assets/Dimond Ring.png", price: 600, description: "Elegant silver ring" },
  { id: 3, name: "Platinum Pendant", image: "/Assets/Platinum Pendant.png", price: 1200, description: "Handcrafted gold necklace" },
  { id: 4, name: "Silver Anklet", image: "/Assets/Silver Anklet.png", price: 600, description: "Elegant silver ring" },
];

interface ProductListProps {
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const ProductList: React.FC<ProductListProps> = ({ setActiveItem }) => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    
  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const addToCart = (id: number) => {
    handleQuantityChange(id, 1);
    setIsCartOpen(true); // open drawer on add
    setSelectedProduct(null); // close modal if open
  };
  

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{selectedProduct.name}</h2>
            <p className="text-gray-700 mt-2">₹{selectedProduct.price}</p>
            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(selectedProduct.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        products={products}
        onQuantityChange={handleQuantityChange}
        setActiveItem={setActiveItem}
      />
    </>
  );
};

export default ProductList;
