import React from 'react'
import LocationMap from "../map/LocationMap"
import PhoneIcon from "../../icons/PhoneIcon";
import AtIcon from "../../icons/AtIcon";
import FOOTER_TEXT_CONTENT from "../../content/footerTextContent";

export default function Location() {
  
  const phone = FOOTER_TEXT_CONTENT.contactDetails.phone;
  const email = FOOTER_TEXT_CONTENT.contactDetails.email;
  
  return (
    <div className="lg:ml-10 lg:px-8 lg:border-l-2">
    <p className="my-10 lg:mt-0 mb-8 text-xl uppercase">Or find us here</p>
    <LocationMap />
    <div className="lg:block hidden mt-8">
      <div className="flex flex-row items-center mb-4">
        <PhoneIcon />
        <div className="ml-1 text-lg font-semibold">{phone}</div>
      </div>
      <div className="flex flex-row items-center mb-2">
        <AtIcon />
        <div className="underline md:no-underline md:hover:underline text-lg cursor-pointer font-semibold">{email}</div>
      </div>
    </div>
  </div>
  )
}
