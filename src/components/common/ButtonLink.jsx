import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink({ content, bgColor, borderColor, size, linkTo, handleClick, ...props }) {
   
  return (
    <button
      className={`${borderColor} ${bgColor} border-2 px-4 py-1 transform transition duration-150 ease-in-out hover:bg-opacity-100 hover:scale-105`}
      onClick={handleClick}
    >
      <Link
        to={linkTo}
        className={`${size} uppercase text-white tracking-wider`}
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
}

