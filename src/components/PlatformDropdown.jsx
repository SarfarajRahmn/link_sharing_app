import React, { useState } from "react";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const PlatformDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedname, setselectedname] = useState("Platform");
  const [selectedicon, setselectedicon] = useState("Choose");

  const options = [
    { label: "GitHub", icon: <TbBrandGithubFilled /> },
    { label: "YouTube", icon: <FaYoutube /> },
    { label: "Twitter", icon: <FaTwitter /> },
  ];

  return (
    <div className="relative w-full ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-2 py-2 border rounded-lg bg-white h-9 cursor-pointer"
      >
        <h1 className="font-medium text-gray-600 flex items-center space-x-2">
          {" "}
          <span className="ps-1"> {selectedicon}</span>
          <span> {selectedname}</span>
        </h1>
        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#4B5563"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

   
      <div
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } absolute z-10 w-full mt-2 py-2 rounded-lg bg-white border shadow-lg transition-all duration-300`}
      >
        {options.map((option, idx) => (
          <div
            key={idx}
            onClick={() => {
              setselectedname(option.label);
              setselectedicon(option.icon);
              setIsOpen(false);
            }}
            className="flex items-center gap-2 px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {option.icon}
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformDropdown;
