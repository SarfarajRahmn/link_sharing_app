import React, { useEffect, useState } from "react";
import { PiLinkBold } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaXmark, FaBars } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom"; // Ensure NavLink is imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const pathLocation = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      className={`flex items-center justify-between bg-white rounded-md px-4 py-2 transition-all duration-300 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex-grow flex justify-between">
        <div className="flex items-center justify-between gap-2 ">
          <div className="bg-violet-700 rounded-md h-6 w-6 flex items-center justify-center">
            <PiLinkBold className="text-white rotate-45" />
          </div>
          <h2 className="font-extrabold text-gray-700 montserrat">devlinks</h2>
        </div>

        {/* Centered Links Section */}
        <ul
          className={`flex items-center gap-6 text-slate-900 ${
            isMenuOpen
              ? "flex-col absolute bg-white shadow-md xs:w-full left-0 rounded-md z-10 mt-2"
              : "hidden lg:flex"
          }`}
        >
          <li className="cursor-pointer font-semibold text-sm montserrat">
            <NavLink
              to="/links"
              className={({ isActive }) =>
                `${
                  isActive
                    ? " text-violet-700 bg-violet-100 rounded-md "
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
                    : "hover:border-violet-700 hover:border-b hover:text-violet-700 "
                } flex items-center justify-center gap-2 h-9 transform duration-500 px-5`
              }
            >
              <IoPersonCircleOutline className="lg:text-lg" />
              Profile Details
            </NavLink>
          </li>
        </ul>

        {/* Preview Button */}
        <NavLink
          to="/preview" // Assuming you have a route for /preview
          className={({ isActive }) =>
            `cursor-pointer flex gap-2 montserrat list-none text-sm transform duration-500 ${
              isActive
                ? "text-white bg-violet-600 "
                : "text-violet-700 border border-violet-700 hover:bg-violet-200 relative inline-block overflow-hidden before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[100%] before:rounded-s-none before:bg-violet-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[100%] after:rounded-e-none after:bg-violet-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0 "
            } font-bold rounded-md px-4 h-9 flex items-center justify-center`
          }
        >
          Preview
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden ">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isMenuOpen ? (
            <FaXmark className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-white rounded-md shadow-md mt-2 w-16">
          <li className="cursor-pointer font-semibold text-sm rounded-md montserrat px-5 py-2 transform duration-500 hover:bg-violet-100 hover:text-violet-700 flex items-center justify-center gap-2">
            <NavLink
              to="/links"
              className={({ isActive }) =>
                `${
                  isActive ? "active_bar noline" : "inactive_bar noline"
                } flex items-center`
              }
            >
              <FiLink />
              Links
            </NavLink>
          </li>
          <li className="cursor-pointer font-semibold text-sm rounded-md montserrat px-5 py-2 transform duration-500 hover:bg-violet-100 hover:text-violet-700 flex items-center justify-center gap-2">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${
                  isActive ? "active_bar noline" : "inactive_bar noline"
                } flex items-center`
              }
            >
              <IoPersonCircleOutline className="text-lg" />
              Profile Details
            </NavLink>
          </li>
          <NavLink
            to="/preview"
            className={({ isActive }) =>
              `cursor-pointer flex gap-2 montserrat list-none text-xs transform duration-500 ${
                isActive
                  ? "text-white bg-violet-600"
                  : "text-violet-700 border border-violet-700"
              } font-bold rounded-md px-4 py-2`
            }
          >
            Preview
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
