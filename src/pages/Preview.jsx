import React from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";
import person from "../assets/images/person.jpg";
import { NavLink } from "react-router-dom";

const Preview = () => {
  const isPreviewPage = location.pathname === "/preview";

  return (
    <>
      {" "}
      {/* Mobile view */}
      <ul className="lg:hidden flex w-full justify-center space-x-4">
        <li className="w-1/2">
          <NavLink
            to="/links"
            className="border text-violet-600 border-violet-600 px-4 py-2 h-10 rounded-md text-sm font-bold transition duration-300 flex items-center justify-center"
          >
            Back to Editor
          </NavLink>
        </li>
        <li className="w-1/2">
          <NavLink
            to="/preview"
            className="cursor-pointer h-10 text-sm font-bold text-white bg-violet-700 rounded-md px-4 flex items-center justify-center transition duration-300 active:scale-95"
          >
            Share Link
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-center">
        <div className="flex lg:max-w-[350px] flex-col items-center space-y-6 lg:space-y-4 rounded-3xl bg-white pt-16 lg:py-8 px-11 lg:shadow-lg ">
          <div className="p-1 rounded-full border-4 border-violet-600">
            <img
              width={110}
              height={110}
              className="h-[80px] w-[80px] rounded-full bg-slate-500 object-cover"
              src={person}
              alt="card navigate ui"
            />
          </div>

          <div className="space-y-1 text-center">
            <h1 className="text-2xl text-gray-700 font-bold">Ben Wright</h1>
            <p className="text-xs text-gray-500 font-medium">ben@example.com</p>
          </div>
          <div className="flex w-full flex-col space-y-4 pt-6 py-2">
            {" "}
            {/* GitHub Button */}
            <button className="flex justify-between items-center rounded-lg bg-gray-900 w-[12.7rem] px-4 h-10 text-sm text-white duration-300 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                <TbBrandGithubFilled />
                Github
              </span>
              <FaArrowRight />
            </button>
            {/* YouTube Button */}
            <button className="flex justify-between items-center rounded-lg bg-red-600 w-[12.7rem] px-4 h-10 text-sm text-white duration-300 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                <ImYoutube /> YouTube
              </span>
              <FaArrowRight />
            </button>
            {/* LinkedIn Button */}
            <button className="flex justify-between items-center rounded-lg bg-blue-600 w-[12.7rem] px-4 h-10 text-sm text-white duration-300 active:scale-95">
              <span className="flex items-center justify-center gap-2">
                <FaLinkedin />
                LinkedIn
              </span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preview;
