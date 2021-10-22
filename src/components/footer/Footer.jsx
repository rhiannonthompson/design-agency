import React from "react";
import Logo from "../../icons/Logo.jsx";
import Address from "./Address.jsx";
import Policy from "./Policy.jsx";
import SocialLinks from "./SocialLinks.jsx";
import HEADINGS from "../../content/headings.js";
import FOOTER_TEXT_CONTENT from "../../content/footerTextContent.js";

export default function Footer({ ...props }) {
  const [addressHeading, socialHeading, policyHeading] = HEADINGS.footer;
  const contactDetails = FOOTER_TEXT_CONTENT.contactDetails;
  const policyInfo = FOOTER_TEXT_CONTENT.policyInfo;
  const policyLinks = FOOTER_TEXT_CONTENT.policyLinks;

  return (
    <footer className=" text-gray-100 bg-gray-800 pb-20">
      <div className="max-w-full px-10 md:px-20">
        <div className="pt-10 pb-4 mb-10 flex border-b">
          <Logo color="text-gray-50" size="w-12" />
        </div>
        <div className="lg:flex justify-between">
          <Address
            heading={addressHeading}
            contact={contactDetails}
          />
          <SocialLinks heading={socialHeading} />
          <Policy
            heading={policyHeading}
            policyInfo={policyInfo}
            links={policyLinks}
          />
        </div>
      </div>
    </footer>
  );
}
