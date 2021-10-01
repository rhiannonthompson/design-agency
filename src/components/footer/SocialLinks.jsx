import React from "react";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import RedditIcon from "../../icons/RedditIcon";
import TwitterIcon from "../../icons/TwitterIcon";

export default function SocialLinks({heading, ...props }) {
  return (
    <div className="mt-8 mr-8">
      <h6 className="footer-heading">{heading}</h6>
      <div>
        <ul className="social-link">
          <li className="social-link-item">
            <a href="/">
              <FacebookIcon hoverColor="hover:text-blue-500"/>
            </a>
          </li>
          <li className="social-link-item">
            <a href="/">
              <InstagramIcon hoverColor={"hover:text-purple-500"}/>
            </a>
          </li>
          <li className="social-link-item">
            <a href="/">
              <LinkedInIcon hoverColor="hover:text-blue-600"/>
            </a>
          </li>
          <li className="social-link-item">
            <a href="/">
              <TwitterIcon hoverColor="hover:text-blue-400"/>
            </a>
          </li>
          <li className="social-link-item">
            <a href="/">
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
