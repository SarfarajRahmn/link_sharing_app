import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PreviewLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:pt-6 pt-2 lg:bg-gradient-to-b from-violet-500 to-blue-500 h-[50vh] rounded-b-3xl">
      <div className="w-full px-4 lg:px-6 ">
        {!isMobile && <Navbar />}
        <div className="lg:pt-40 pt-6 flex justify-between flex-col lg:justify-center">
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PreviewLayout;
