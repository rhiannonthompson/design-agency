import React from "react";
import AtIcon from "../../icons/AtIcon";
import EnvelopeIcon from "../../icons/EnvelopeIcon";
import PhoneIcon from "../../icons/PhoneIcon";

export default function Address({ heading, contact, ...props }) {
  
  const { address, phone, email } = contact;

  return (
    <div className="mt-8 mr-8">
      <h6 className="footer-heading">{heading}</h6>
      <div className="address-item flex-row w-full">
        <EnvelopeIcon />
        <div className="address-text">{address}</div>
      </div>
      <div className="address-item">
        <PhoneIcon />
        <div className="ml-1 address-text">{phone}</div>
      </div>
      <div className="address-item">
        <AtIcon />
        <div className="text-link">{email}</div>
      </div>
    </div>
  );
}

Address.defaultProps = {
  heading: "heading"
}
