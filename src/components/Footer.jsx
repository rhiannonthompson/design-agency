import React from "react";
import Logo from "../icons/Logo.jsx";
import Address from "./Address.jsx";
import PolicyLinks from "./PolicyLinks.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer({ ...props }) {
  return (
    <footer className=" text-gray-100 bg-gray-800 pb-20">
      <div className="max-w-full px-10 md:px-20">
        <div className="pt-10 pb-2 mb-10 flex border-b">
          <Logo color="text-gray-50" size="w-12" />
        </div>
        <div className="lg:flex justify-between">
          <Address />
          <SocialLinks />
          <PolicyLinks/>
        </div>
      </div>
    </footer>
  );
}
