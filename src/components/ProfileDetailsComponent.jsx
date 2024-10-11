import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import personImg from "../assets/images/person.jpg";
import { IoImageOutline } from "react-icons/io5";
import { PiFloppyDiskBackDuotone } from "react-icons/pi";

const ProfileDetailsComponent = () => {
  const [image, setImage] = useState(personImg);
  const [showToast, setShowToast] = useState(false);

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };
  return (
    <div className="bg-white lg:w-[60%] rounded-lg lg:mx-0 mx-4">
      <div className="  px-4 mx-3 lg:mx-0 lg:px-8 py-7 space-y-6">
        <div className="text-start">
          <p className="text-2xl font-bold text-gray-700 leading-loose">
            Profile Details
          </p>
          <p className="text-xs font-semibold lg:font-medium text-gray-400 leading-loose">
            Add your details to add a personal touch to your profile.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl px-4 pt-2 pb-4 space-y-3 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-sm font-medium text-gray-400 leading-loose w-full lg:w-[35%] text-start">
            Profile Picture
          </p>

          {/* Image */}
          <div className="space-y-3 lg:w-[65%] flex flex-col lg:flex-row justify-start items-center gap-6">
            <div className="h-48 w-48 relative overflow-hidden rounded-xl group">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transform transition-transform duration-300 lg:group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col space-y-2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                onClick={() => document.getElementById("file-input").click()}
              >
                <IoImageOutline className="text-white text-4xl font-bold" />
                <p className="text-white font-semibold text-sm">Change Image</p>
              </div>

              {/* Hidden */}
              <input
                type="file"
                id="file-input"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <p className="text-xs font-medium text-gray-400 leading-loose text-start lg:text-left">
              Image must be below 1024x1024px. <br /> Use PNG, JPG, or BMP
              format.
            </p>
          </div>

          {/* Toast */}
          <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-8 py-3 rounded-lg flex items-center space-x-2 shadow-md text-white transition-all duration-500 ${
              showToast
                ? "opacity-100 translate-y-0 bg-gray-700"
                : "opacity-0 translate-y-4"
            }`}
          >
            <PiFloppyDiskBackDuotone className="text-2xl" />
            <p className="text-sm tracking-wide">
              Your changes have successfully saved
            </p>
          </div>
        </div>

        <div className="lg:h-64">
          <div className="bg-gray-50 rounded-xl space-y-3 py-6 px-2 lg:px-0 ">
            <div className="px-2 lg:px-4 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm font-medium text-gray-400 w-full lg:w-[35%] text-start">
                First Name*
              </p>
              <input
                className="h-9 w-full lg:w-[65%] px-3 rounded-md border text-sm focus:border-violet-600 focus:shadow-lg transition duration-300 outline-none"
                placeholder="First Name"
                type="text"
                required
              />
            </div>
            <div className="px-2 lg:px-4 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm font-medium text-gray-400 w-full lg:w-[35%] text-start">
                Last Name*
              </p>
              <input
                className="h-9 w-full lg:w-[65%] px-3 rounded-md border text-sm focus:border-violet-600 focus:shadow-lg transition duration-300 outline-none"
                placeholder="Last Name"
                type="text"
                required
              />
            </div>
            <div className="px-2 lg:px-4 flex flex-col lg:flex-row justify-between items-center">
              <p className="text-sm font-medium text-gray-400 w-full lg:w-[35%] text-start">
                Email*
              </p>
              <input
                className="h-9 w-full lg:w-[65%] px-3 rounded-md border text-sm focus:border-violet-600 focus:shadow-lg transition duration-300 outline-none"
                placeholder="ben@example.com"
                type="email"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t flex justify-end items-end lg:h-20 py-6 px-4 lg:px-8 ">
        <button className="text-sm rounded-lg font-medium tracking-wider w-full lg:w-20 h-9 bg-violet-700 active:scale-95 transform duration-300 ease-in-out text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsComponent;
