import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PreviewLayout = () => {
  return (
    <div className="lg:pt-6 pt-2 bg-gradient-to-b from-violet-500 to-blue-500 h-[50vh] rounded-b-3xl">
      <div className="w-full px-2 lg:px-6 ">
        <Navbar />
        <div className="py-24 flex justify-center">
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PreviewLayout;
