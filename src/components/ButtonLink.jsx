import React from "react";
import { Link } from "react-router-dom";

export default function ButtonLink({ content, bgColor, borderColor, size, ...props }) {
  return (
    <button
      className={`border-2 px-4 py-1 ${borderColor} ${bgColor} transform transition duration-150 ease-in-out hover:bg-opacity-100 hover:scale-105`}
    >
      <Link
        to="/"
        className={`${size} uppercase text-white font-extralight`}
      >
        {content}
      </Link>
    </button>
  );
}
