import React from "react";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import RedditIcon from "../../icons/RedditIcon";
import TwitterIcon from "../../icons/TwitterIcon";

export default function SocialLinks({heading, ...props }) {
  return (
    <div className="mt-8 mr-8">
      <h4 className=" mb-2 text-lg font-bold">{heading}</h4>
      <div>
        <ul className="flex flex-row justify-start md:justify-around md:border md:px-8 md:py-4">
          <li className="md:mr-2">
            <a href="/" aria-label="Facebook">
              <FacebookIcon hoverColor="hover:text-blue-500"/>
            </a>
          </li>
          <li className="md:mr-2">
            <a href="/" aria-label="Instagram">
              <InstagramIcon hoverColor={"hover:text-purple-500"}/>
            </a>
          </li>
          <li className="md:mr-2">
            <a href="/" aria-label="linkedIn">
              <LinkedInIcon hoverColor="hover:text-blue-600"/>
            </a>
          </li>
          <li className="md:mr-2">
            <a href="/" aria-label="Twitter">
              <TwitterIcon hoverColor="hover:text-blue-400"/>
            </a>
          </li>
          <li className="md:mr-2">
            <a href="/" aria-label="Reddit">
              <RedditIcon hoverColor="hover:text-red-500"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

SocialLinks.defaultProps = {
  heading: "heading"
}
