import React from "react";
import CustomizeLink from "../components/CustomizeLink";
import Phone from "../components/phone";

const links = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <Phone />
      <CustomizeLink />
    </div>
  );
};

export default links;
