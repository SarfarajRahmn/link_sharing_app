import React from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb";
import person from "../assets/images/person.jpg";

const Preview = () => {
  return (
    <div className="flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-3xl bg-white py-8 px-11 shadow-lg ">
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
  );
};
export default Preview;
