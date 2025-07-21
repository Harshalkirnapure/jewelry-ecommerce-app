import React from "react";
import Rateboard from "./Rateboard";
import JewelleryCatalog from "./JewelleryCatalog";
import Profile from "./Profile";
import Bhishi from "./Bhishi";
import OrderStatus from "./OrderStatus";
import ProductList from "./ProductList";
import CheckoutPage from "../../checkoutpage/CheckoutPage"; // Import CheckoutPage
import ThankYouPage from "../../checkoutpage/ThankYoupage";

interface MainContentProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem, setActiveItem }) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {activeItem !== "Checkout" && (
        <h1 className="text-2xl font-bold mb-4">{activeItem}</h1>
      )}
      
      {activeItem === "Jewellery Catalog" && <JewelleryCatalog />}
      {activeItem === "Rateboard" && <Rateboard />}
      {activeItem === "Profile" && <Profile />}
      {activeItem === "Bhishi" && <Bhishi />}
      {activeItem === "Product" && <ProductList setActiveItem={setActiveItem} />}
      {activeItem === "Order Status" && <OrderStatus />}
      {activeItem === "Checkout" && <CheckoutPage setActiveItem={setActiveItem} />}
      {activeItem === "Thankyou" && <ThankYouPage />}

      {["Jewellery Catalog", "Rateboard", "Profile", "Bhishi", "Product", "Order Status", "Checkout","Thankyou"].indexOf(activeItem) === -1 && (
        <div className="text-gray-500 text-center p-10">
          Content for {activeItem} coming soon...
        </div>
      )}
    </main>
  );
};

export default MainContent;
