import React from "react";
import CustomizeLink from "../components/CustomizeLink.jsx";
import PhoneLinks from "../components/PhoneLinks.jsx";

const LinksPage = () => {
  return (
    <div className="flex lg:justify-center items-start w-full lg:space-x-6">
      <PhoneLinks />
      <CustomizeLink />
    </div>
  );
};

export default LinksPage;
