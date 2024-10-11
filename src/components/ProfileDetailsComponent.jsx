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
    <div className="bg-white w-[60%] rounded-lg px-8 py-7 space-y-6 ">
      <div className="text-start">
        <p className="text-2xl font-bold text-gray-700 leading-loose">
          Profile Details
        </p>
        <p className="text-xs font-medium text-gray-400 leading-loose">
          Add your details to add a personal touch to your profile.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl px-4 pt-2 pb-4 space-y-3 flex justify-between items-center">
        <p className="text-sm font-medium text-gray-400 leading-loose w-[35%] text-start">
          Profile Picture
        </p>
        <div className="space-y-3 text-start w-[65%] flex justify-start items-center gap-6">
          <div className="h-48 w-48 relative overflow-hidden rounded-xl group">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col space-y-2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
              onClick={() => document.getElementById("file-input").click()}
            >
              <IoImageOutline className="text-white text-4xl font-bold" />
              <p className="text-white font-semibold text-sm">Change Image</p>
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              id="file-input"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <p className="text-xs font-medium text-gray-400 leading-loose">
            Image must below 1024x1024px. <br /> Use PNG,JPG, or BMP format.{" "}
          </p>
        </div>{" "}
        {/* Toast Notification */}
        {/* Toast Notification */}
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

      <div className="lg:h-72">
        <div className="bg-gray-50 rounded-xl space-y-3 py-6 ">
          <div className=" px-4  flex justify-between items-center ">
            <p className="text-sm font-medium text-gray-400 leading-loose w-[35%] text-start">
              First Name*
            </p>
            <input
              className="h-9 text-start w-[65%] px-3 rounded-md border text-sm focus:border-violet-600 focus:shadow-xl transition-all duration-300 outline-none"
              placeholder=" "
              name="firstname"
              type="text"
              required
            />
          </div>
          <div className=" px-4 flex justify-between items-center ">
            <p className="text-sm font-medium text-gray-400 leading-loose w-[35%] text-start">
              Last Name*
            </p>
            <input
              className="h-9 text-start w-[65%] px-3 rounded-md border text-sm focus:border-violet-600 focus:shadow-xl transition-all duration-300 outline-none"
              placeholder="  "
              name="lastname"
              type="text"
              required
            />
          </div>{" "}
          <div className=" px-4 flex justify-between items-center ">
            <p className="text-sm font-medium text-gray-400 leading-loose w-[35%] text-start">
              Email
            </p>
            <input
              className="h-9 text-start w-[65%] px-3 rounded-md border text-sm focus:border-violet-600 focus:shadow-xl transition-all duration-300 outline-none"
              placeholder=""
              name="email"
              type="email"
              required
            />
          </div>
        </div>
      </div>
      <div className="border-t flex justify-end items-end lg:h-16">
        <button className="text-sm rounded-lg font-medium tracking-wider w-20 h-9 bg-violet-700 active:scale-95 transform duration-300 ease-in-out text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsComponent;
