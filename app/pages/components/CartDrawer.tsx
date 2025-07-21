import React from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { [key: number]: number };
  products: Product[];
  onQuantityChange: (id: number, delta: number) => void;
  setActiveItem?: React.Dispatch<React.SetStateAction<string>>; // Add this prop
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  products,
  onQuantityChange,
  setActiveItem,
}) => {
  // Calculate the total cost
  const total = Object.entries(cartItems).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  // Handle the "Proceed to Checkout" button click
  const handleCheckout = () => {
    // Save cart data (with product details and quantity) to localStorage
    console.log("Checkout button clicked, setActiveItem present:", !!setActiveItem);
    const cartData = Object.entries(cartItems)
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === parseInt(id));
        if (product) {
          return { ...product, quantity: qty }; // Store full product data with quantity
        }
        return null;
      })
      .filter(Boolean);

    localStorage.setItem("cartItems", JSON.stringify(cartData));
    localStorage.setItem("total", JSON.stringify(total));

    // Close the drawer first
    onClose();
    
    // Change activeItem to "Checkout" to show the checkout page
    if (setActiveItem) {
      console.log("Setting activeItem to Checkout");
      setActiveItem("Checkout");
    }else {
      console.error("setActiveItem is not defined!");
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-semibold">My Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">
          ×
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
        {Object.entries(cartItems).map(([id, qty]) => {
          const product = products.find((p) => p.id === parseInt(id));
          if (!product || qty === 0) return null;

          return (
            <div key={id} className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">₹{product.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onQuantityChange(product.id, -1)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => onQuantityChange(product.id, 1)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => onQuantityChange(product.id, -qty)} // Remove item
                  className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between font-medium mb-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;