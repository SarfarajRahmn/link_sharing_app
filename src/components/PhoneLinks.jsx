import React from "react";
import phoneimg from "../assets/images/phone.png";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const ProfileLinks = () => {
  return (
    <div className="hidden lg:flex bg-white w-[40%] justify-center items-center rounded-lg relative">
      <div className="absolute bottom-[15.8rem] flex flex-col space-y-4">
        <button className="flex justify-between items-center rounded-lg bg-gray-900 w-[12.7rem] px-4 h-10 text-sm text-white duration-300 active:scale-95">
          <span className="flex items-center justify-center gap-2">
            <TbBrandGithubFilled />
            Github
          </span>
          <FaArrowRight />
        </button>

        <button className="flex justify-between items-center rounded-lg bg-red-600 w-[12.7rem] px-4 h-10 text-sm text-white duration-300 active:scale-95">
          <span className="flex items-center justify-center gap-2">
            <ImYoutube /> YouTube
          </span>
          <FaArrowRight />
        </button>

        <button className="flex justify-between items-center rounded-lg bg-blue-600 w-[12.7rem] px-4 h-10 text-sm text-white duration-300 active:scale-95">
          <span className="flex items-center justify-center gap-2">
            <FaLinkedin />
            LinkedIn
          </span>
          <FaArrowRight />
        </button>
      </div>
      <img
        src={phoneimg}
        alt="Phone illustration"
        height={300}
        width={300}
        className="px-2 py-20 lg:h-[45rem] transition duration-300"
      />
    </div>
  );
};

export default ProfileLinks;
