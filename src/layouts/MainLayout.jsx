import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="">
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
