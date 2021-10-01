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
        <span className="address-text">{address}</span>
      </div>
      <div className="address-item">
        <PhoneIcon />
        <span className="ml-1 address-text">{phone}</span>
      </div>
      <div className="address-item">
        <AtIcon />
        <span className="text-link">{email}</span>
      </div>
    </div>
  );
}

Address.defaultProps = {
  heading: "heading"
}
