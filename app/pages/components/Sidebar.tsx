// /components/Sidebar/Sidebar.tsx
import React from "react";
import { Home, LayoutGrid, ShoppingCart, BarChart2, User, Gem } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>; 
}

const menuItems = [
  { name: "Rateboard", icon: BarChart2 },
  { name: "Jewellery Catalog", icon: LayoutGrid },
  { name: "Product", icon: ShoppingCart },
  { name: "Order Status", icon: Home },
  { name: "Bhishi", icon: Gem },
  { name: "Profile", icon: User },
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, activeItem, setActiveItem }) => {
  return (
    <>
      {sidebarOpen && (
        <aside className="w-64 bg-white shadow h-full overflow-y-auto hidden md:block">
          <div className="p-4">
            {menuItems.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveItem(name)}
                className={`flex items-center w-full p-3 my-1 rounded-lg hover:bg-gray-100 transition text-left ${
                  activeItem === name ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </aside>
      )}

      {sidebarOpen && (
        <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 md:hidden transition-transform duration-300">
          <div className="p-4">
            {/* Close button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="mb-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            {menuItems.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => {
                  setActiveItem(name);
                  setSidebarOpen(false); // Close only on small screen
                }}
                className={`flex items-center w-full p-3 my-1 rounded-lg hover:bg-gray-100 transition text-left ${
                  activeItem === name ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
