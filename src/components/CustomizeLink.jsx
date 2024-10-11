import React, { useState } from "react";
import PlatformDropdown from "./PlatformDropdown";
import { FaLink } from "react-icons/fa";

const CustomizeLink = () => {
  // State to keep track of the link sections
  const [links, setLinks] = useState([{ id: 1 }, { id: 2 }]);

  // Function to add a new link section
  const addLinkSection = () => {
    setLinks([...links, { id: links.length + 1 }]);
  };

  // Function to remove a link section
  const removeLinkSection = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="bg-white lg:w-[60%] rounded-lg  lg:mx-0 mx-4">
      <div className=" space-y-8 px-6 lg:px-8 py-7">
        <div className="text-start">
          <p className="text-2xl font-bold text-gray-700 leading-loose">
            Customize your links
          </p>
          <p className="text-xs font-medium text-gray-400 leading-loose">
            Add/edit/remove/links below and then share all your profiles with
            the world!
          </p>
        </div>

        <button
          onClick={addLinkSection}
          className="relative h-9 w-full flex items-center justify-center px-4 font-bold text-xs hover:tracking-widest text-violet-700 border border-violet-700 rounded-md gap-2 montserrat transform duration-500 hover:bg-violet-600 hover:text-white active:scale-95"
        >
          <span className="text-lg font-semibold">+</span> Add New Link
        </button>

        {links.map((link, index) => (
          <div
            key={link.id}
            className="bg-gray-50 rounded-xl px-4 pt-2 pb-4 space-y-3"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-baseline justify-center space-x-1 font-bold text-sm text-gray-500">
                <p className="text-lg font-medium">=</p>
                <p>Link</p>
                <p>#{index + 1}</p>
              </div>

              <button
                onClick={() => removeLinkSection(link.id)}
                className="text-sm font-medium text-gray-400 hover:text-red-700 hover:border-b hover:border-red-600 transition duration-500 ease-in-out"
              >
                Remove
              </button>
            </div>
            <div className="space-y-3 text-start">
              <div className="space-y-1 text-xs relative">
                <label
                  htmlFor={`platform-${link.id}`}
                  className="block text-zinc-500 font-medium"
                >
                  Platform
                </label>
                <PlatformDropdown />
              </div>
              <div className="space-y-1 text-xs">
                <label
                  htmlFor={`link-${link.id}`}
                  className="block text-zinc-700 font-medium"
                >
                  Link
                </label>
                <div className="relative flex items-center">
                  <FaLink className="absolute left-3 text-gray-400" />
                  <input
                    className="h-9 w-full pl-10 pr-3 rounded-md border text-sm focus:ring-1 focus:outline-none"
                    id={`link-${link.id}`}
                    placeholder="paste link"
                    name="link"
                    type="url"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t py-5 lg:px-8 px-4 flex justify-end items-end">
        <button className="text-sm rounded-lg font-semibold tracking-wider w-full lg:w-20 h-9 bg-violet-700 active:scale-95 transform duration-300 ease-in-out text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomizeLink;
