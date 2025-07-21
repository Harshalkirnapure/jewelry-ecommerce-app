"use client";

import { useState, useEffect } from "react";
import Navbar from "./pages/components/Navbar";
import Sidebar from "./pages/components/Sidebar";
import MainContent from "./pages/components/MainContent";
import Footer from "./pages/components/Footer";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Rateboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSidebarOpen(!isMobile);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar 
        setSidebarOpen={setSidebarOpen} 
        setProfileOpen={setProfileOpen} 
        profileOpen={profileOpen} 
        sidebarOpen={sidebarOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
        />
        <MainContent 
          activeItem={activeItem} setActiveItem={setActiveItem}
        />
      </div>
      <Footer />
    </div>
  );
}