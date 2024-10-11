import React from "react";
import CustomizeLink from "../components/CustomizeLink.jsx";
import PhoneProfileDetails from "../components/PhoneProfileDetails.jsx";
import ProfileDetailsComponent from "../components/ProfileDetailsComponent.jsx";

const ProfileDetails = () => {
  return (
    <div className="flex justify-center items-start w-full lg:space-x-6">
      <PhoneProfileDetails />
      <ProfileDetailsComponent />
    </div>
  );
};

export default ProfileDetails;
