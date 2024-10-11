import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 h-full lg:pt-6 pt-2">
      <div className="w-full px-2 lg:px-6">
        <Navbar />
        <div className="py-6">
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
