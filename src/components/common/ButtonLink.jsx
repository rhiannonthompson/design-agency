import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../utilities/scrollToTop";

export default function ButtonLink({ content, bgColor, borderColor, size, linkTo, handleClick, ...props }) {
   
  return (
    <button
      className={`${borderColor} ${bgColor} btn`}
      onClick={handleClick}
    >
      <Link
        to={linkTo}
        className={`${size} btn-text`}
      >
        {content}
      </Link>
    </button>
  );
}

ButtonLink.defaultProps = {
  content: "home",
  bgColor: "bg-yellow-800",
  borderColor: "bg-yellow-800",
  size: "text-base",
  handleClick: scrollToTop,
}

