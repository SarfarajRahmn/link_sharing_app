import React, { useEffect, useState } from "react";
import { PiLinkBold } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const isPreviewPage = location.pathname === "/preview";

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 flex items-center justify-between bg-white rounded-md px-4 mx:4 lg:mx-7 py-3 shadow-md z-50`}
    >
      <div className="flex-grow flex justify-between items-center">
        {isPreviewPage ? (
          <NavLink
            to="/editor"
            className="border text-violet-600 border-violet-600 hover:text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-violet-700 transition duration-300"
          >
            Back to Editor
          </NavLink>
        ) : (
          <>
            {/* desktop */}
            <NavLink
              to={"/links"}
              className={`hidden lg:flex items-center gap-6 text-slate-900`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="bg-violet-700 rounded-md h-6 w-6 flex items-center justify-center">
                  <PiLinkBold className="text-white rotate-45" />
                </div>
                <h2 className="font-extrabold text-gray-700 montserrat">
                  devlinks
                </h2>
              </div>
            </NavLink>

            {/* mobile */}
            <NavLink
              to={"/links"}
              className={`lg:hidden flex items-center gap-6`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="bg-violet-700 rounded-lg h-8 w-8 flex items-center justify-center">
                  <PiLinkBold className="text-white rotate-45 text-2xl" />
                </div>
              </div>
            </NavLink>
          </>
        )}

        {/* Desktop view with text */}
        {!isPreviewPage && (
          <ul className={`hidden lg:flex items-center gap-6 text-slate-900`}>
            <li className="cursor-pointer font-semibold text-sm montserrat">
              <NavLink
                to="/links"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-violet-700 bg-violet-100 rounded-md"
                      : "hover:border-violet-700 hover:border-b hover:text-violet-700"
                  } flex items-center justify-center gap-2 h-9 transform duration-500 px-5`
                }
              >
                <FiLink />
                Links
              </NavLink>
            </li>
            <li className="cursor-pointer font-semibold text-sm montserrat">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-violet-700 bg-violet-100 rounded-md"
                      : "hover:border-violet-700 hover:border-b hover:text-violet-700"
                  } flex items-center justify-center gap-2 h-9 transform duration-500 px-5`
                }
              >
                <IoPersonCircleOutline className="lg:text-lg" />
                Profile Details
              </NavLink>
            </li>
          </ul>
        )}

        <div className={`hidden lg:flex items-center gap-6 text-slate-900`}>
          <NavLink
            to="/preview"
            className={({ isActive }) =>
              `cursor-pointer gap-2 montserrat list-none h-9 text-sm transform duration-500 active:scale-95 ${
                isActive
                  ? "text-white bg-violet-600"
                  : "text-violet-700 border-violet-700 hover:bg-violet-200 relative inline-block overflow-hidden before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[100%] before:rounded-s-none before:bg-violet-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[100%] after:rounded-e-none after:bg-violet-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
              } font-bold rounded-md border px-4 flex items-center justify-center`
            }
          >
            {isPreviewPage ? "Share Link" : "Preview"}
          </NavLink>
        </div>

        {/* Mobile view only shows icons */}
        <ul className={`lg:hidden flex items-center gap-2`}>
          <li className="cursor-pointer">
            <NavLink
              to="/links"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-violet-100 text-violet-600 " : "text-gray-500"
                } flex items-center h-10 w-16 font-semibold justify-center rounded-lg `
              }
            >
              {isPreviewPage ? "" : <FiLink size={20} />}
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-violet-100 text-violet-600 " : "text-gray-500"
                } flex items-center h-10 w-16 font-semibold justify-center rounded-lg `
              }
            >
              {isPreviewPage ? "" : <IoPersonCircleOutline size={20} />}
            </NavLink>
          </li>
        </ul>

        <div className={`lg:hidden flex items-center gap-6`}>
          <NavLink
            to="/preview"
            className={({ isActive }) =>
              `cursor-pointer gap-2 montserrat list-none h-9 text-sm transform duration-500 active:scale-95 ${
                isActive
                  ? "text-white bg-violet-600"
                  : "text-violet-700 border-violet-700 hover:bg-violet-200 relative inline-block overflow-hidden before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[100%] before:rounded-s-none before:bg-violet-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[100%] after:rounded-e-none after:bg-violet-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
              } font-bold rounded-md border px-3 flex items-center justify-center`
            }
          >
            {isPreviewPage ? "Share Link" : <MdOutlineRemoveRedEye size={20} />}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
