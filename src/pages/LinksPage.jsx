import React from "react";
import CustomizeLink from "../components/CustomizeLink.jsx";
import Phone from "../components/Phone.jsx";

const LinksPage = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Phone />
      <CustomizeLink />
    </div>
  );
};

export default LinksPage;
