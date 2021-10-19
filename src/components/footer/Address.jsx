import React from "react";
import AtIcon from "../../icons/AtIcon";
import EnvelopeIcon from "../../icons/EnvelopeIcon";
import PhoneIcon from "../../icons/PhoneIcon";

export default function Address({ heading, contact, ...props }) {
  
  const { address, phone, email } = contact;

  return (
    <div className="mt-8 mr-8">
      <h4 className="mb-2 text-lg font-bold">{heading}</h4>
      <div className="flex mb-2 flex-row w-full">
        <EnvelopeIcon />
        <div className="text-sm">{address}</div>
      </div>
      <div className="flex flex-row mb-2">
        <PhoneIcon />
        <div className="ml-1 text-sm">{phone}</div>
      </div>
      <div className="flex flex-row mb-2">
        <AtIcon />
        <div className="underline md:no-underline md:hover:underline text-sm cursor-pointer">{email}</div>
      </div>
    </div>
  );
}

Address.defaultProps = {
  heading: "heading"
}
